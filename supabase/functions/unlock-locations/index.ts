import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigins = new Set([
  "https://getzin-foraging.us",
  "https://www.getzin-foraging.us",
  "https://getzincl.github.io",
  "http://localhost:8000",
]);

async function hashIp(ip: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(ip),
  );

  return Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? "";
  const corsHeaders = {
    ...(allowedOrigins.has(origin)
      ? { "Access-Control-Allow-Origin": origin }
      : {}),
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };

  const respond = (body: unknown, status = 200, extraHeaders = {}) =>
    new Response(JSON.stringify(body), {
      status,
      headers: {
        ...corsHeaders,
        ...extraHeaders,
        "Content-Type": "application/json",
      },
    });

  if (origin && !allowedOrigins.has(origin)) {
    return respond({ error: "Origin not allowed" }, 403);
  }

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return respond({ error: "Method not allowed" }, 405);
  }

  try {
    const gatePassword = Deno.env.get("LOCATION_GATE_PASSWORD");
    const authEmail = Deno.env.get("LOCATION_AUTH_EMAIL");
    const authPassword = Deno.env.get("LOCATION_AUTH_PASSWORD");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    const hashSecret = Deno.env.get("RATE_LIMIT_HASH_SECRET");

    if (
      !gatePassword || !authEmail || !authPassword ||
      !supabaseUrl || !supabaseKey || !serviceRoleKey || !hashSecret
    ) {
      console.error("Required function configuration is missing.");
      return respond({ error: "Server configuration error" }, 500);
    }

    // Use the last address in the proxy chain, assuming the trusted
    // Supabase gateway appends the connecting client's address.
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor
      ?.split(",")
      .map((value) => value.trim())
      .filter(Boolean)
      .at(0);

    if (!ip) {
      console.error("Client IP was unavailable.");
      return respond({ error: "Unable to verify request origin" }, 503);
    }

    const ipHash = await hashIp(ip, hashSecret);

    // This client is server-side only and is used for rate limiting.
    const rateLimitClient = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: limitData, error: limitError } =
      await rateLimitClient.rpc("consume_unlock_attempt", {
        p_ip_hash: ipHash,
        p_max_attempts: 10,
        p_window_seconds: 900,
      });

    if (limitError) {
      console.error("Rate-limit check failed:", limitError.message);
      return respond({ error: "Temporarily unable to process unlock request" }, 503);
    }

    const limit = Array.isArray(limitData) ? limitData[0] : limitData;

    if (!limit?.allowed) {
      return respond(
        { error: "Too many attempts. Please wait 15 minutes before trying again." },
        429,
        { "Retry-After": "900" },
      );
    }

    const body = await req.json().catch(() => null);
    const suppliedPassword = body?.password;

    if (
      typeof suppliedPassword !== "string" ||
      suppliedPassword.length > 200 ||
      suppliedPassword !== gatePassword
    ) {
      return respond({ error: "Invalid password" }, 401);
    }

    // Use a separate client for the dedicated account's sign-in.
    const authClient = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data, error } = await authClient.auth.signInWithPassword({
      email: authEmail,
      password: authPassword,
    });

    if (error || !data.session) {
      console.error("Private-location authentication failed.");
      return respond({ error: "Unable to unlock locations" }, 500);
    }

    return respond({
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
    });
  } catch (error) {
    console.error("Unexpected unlock-locations error:", error);
    return respond({ error: "Unexpected server error" }, 500);
  }
});
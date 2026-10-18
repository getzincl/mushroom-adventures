import { createClient } from "npm:@supabase/supabase-js@2";

const allowedOrigins = new Set([
  "https://getzin-foraging.us",
  "https://www.getzin-foraging.us",
  "https://getzincl.github.io",
]);

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin") ?? "";
  const corsHeaders = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };

  if (origin && !allowedOrigins.has(origin)) {
    return new Response("Origin not allowed", { status: 403 });
  }

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const respond = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  if (req.method !== "POST") {
    return respond({ error: "Method not allowed" }, 405);
  }

  try {
    const gatePassword = Deno.env.get("LOCATION_GATE_PASSWORD");
    const authEmail = Deno.env.get("LOCATION_AUTH_EMAIL");
    const authPassword = Deno.env.get("LOCATION_AUTH_PASSWORD");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_ANON_KEY");

    if (!gatePassword || !authEmail || !authPassword || !supabaseUrl || !supabaseKey) {
      console.error("One or more required environment variables are missing.");
      return respond({ error: "Server configuration error" }, 500);
    }

    const body = await req.json().catch(() => null);
    const suppliedPassword = body?.password;

    if (typeof suppliedPassword !== "string" || suppliedPassword.length > 200) {
      return respond({ error: "Invalid password" }, 401);
    }

    if (suppliedPassword !== gatePassword) {
      // Keep the response generic so it doesn't reveal which check failed.
      return respond({ error: "Invalid password" }, 401);
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    // Sign in to the dedicated Supabase Auth account.
    // Never put this account's credentials in public website JavaScript.
    const { data, error } = await supabase.auth.signInWithPassword({
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
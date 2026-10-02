// ============================================================
// Getzin Family Mushroom Adventures
// Edit the data below to add your own adventures and mushrooms.
// ============================================================

const adventures = [
  {
    id: "gifford-2026",
    title: "Gifford Pinchot Adventure",
    date: "September 2026",
    area: "Gifford Pinchot National Forest",
    summary: "A day in the forest looking for fall fungi and exploring new ground.",
    mushrooms: ["Chanterelle", "Lobster Mushroom", "Bear's Head"],
    emoji: "🍄",
    image: "images/bears-head.jpeg",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.7, -121.85]
  },
  {
    id: "HighBridgeCreek-2026",
    title: "High Bridge Creek fun",
    date: "September 2026",
    area: "Gifford Pinchot National Forest south of Randle",
    summary: "A day in the forest looking for fall fungi and exploring new ground.",
    mushrooms: ["Chanterelle", "Lobster Mushroom", "Cauliflower Mushroom"],
    emoji: "🫈",
    image: "images/cauliflower.jpeg",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.4, -121.9]
  },
  {
    id: "PortOrchard-2025",
    title: "Big Pond Trail Hunt",
    date: "October 2025",
    area: "Port Orchard",
    summary: "A jaunt with the family along the Big Pond Trail.",
    mushrooms: ["Chanterelle", "Bleeding Tooth"],
    emoji: "🌲",
    image: "images/bleeding-tooth.jpeg",
    publicMap: [47.5, -122.7]
  }
];

const mushrooms = [
  {
    name: "Bear's Head",
    scientific: "Hericium americanum",
    emoji: "🦁",
    image: "images/bears-head.jpeg",
    category: "Tooth Fungus",
    note: "A distinctive toothed fungus with cascading spines, usually found growing on hardwoods.",
    season: "Summer – Fall"
  },
  {
    name: "Bleeding Tooth",
    scientific: "Hydnellum peckii",
    emoji: "🩸",
    image: "images/bleeding-tooth.jpeg",
    category: "Tooth Fungus",
    note: "A striking tooth fungus that can produce red droplets on its pale cap when young.",
    season: "Summer – Fall"
  },
  {
    name: "Cauliflower Mushroom",
    scientific: "Sparassis",
    emoji: "🥦",
    image: "images/cauliflower.jpeg",
    category: "Other",
    note: "A large, highly branched fungus resembling a head of cauliflower, often found near conifers.",
    season: "Summer – Fall"
  },
  {
    name: "Chanterelle",
    scientific: "Cantharellus",
    emoji: "🍄",
    image: "images/chanterelle.jpeg",
    category: "Edible",
    note: "A prized woodland mushroom commonly recognized by its golden color and false gills.",
    season: "Summer – Fall"
  },
  {
    name: "Lobster Mushroom",
    scientific: "Hypomyces lactifluorum",
    emoji: "🦞",
    image: "images/lobster.jpeg",
    category: "Edible",
    note: "A parasitic fungus that transforms another mushroom into a distinctive orange-red lobster-like form.",
    season: "Summer – Fall"
  },
  {
    name: "Porcini",
    scientific: "Boletus",
    emoji: "🍄",
    image: "images/porcini.jpeg",
    category: "Boletes",
    note: "A group of prized boletes with thick stems and a sponge-like pore surface beneath the cap.",
    season: "Summer – Fall"
  }
];


// ------------------------------------------------------------
// Lightweight private gate
// IMPORTANT: This is deterrence, not strong security.
// For a public GitHub Pages site, do not treat this as a secure
// place to store highly sensitive secrets.
// Change this password before publishing.
// ------------------------------------------------------------
const PRIVATE_PASSWORD = "kekoa";

const privateLocations = [
  {
    title: "Gifford Pinchot — exact spot",
    details: "Park at Teeley Creek trailhead. Hike up past the first two lakes, finding boletes around first lake, hedghog mushrooms near the second lake and bears head mushrooms around the third lake.",
    coords: "46.69815° N, 121.92926° W"
  },
  {
    title: "High bridge Creek — exact spot",
    details: "Park at the high bridge trailhead. Hike along the trail, looking for mushrooms between the trail, road and creek",
    coords: "46.41221° N, 121.80566° W"
  },
  {
    title: "Port Orchard — exact spot",
    details: "Park at Big Pond trailhead. Hike along the trail, looking for mushrooms near the pond and in the surrounding forest.",
    coords: "47.48032° N, 122.71049° W"
  }
];

function renderAdventures(filter = "") {
  const grid = document.getElementById("adventureGrid");
  const q = filter.trim().toLowerCase();
  const list = adventures.filter(a =>
    [a.title, a.date, a.area, a.summary, ...a.mushrooms].join(" ").toLowerCase().includes(q)
  );

  if (!list.length) {
    grid.innerHTML = '<div class="empty">No adventures matched that search.</div>';
    return;
  }


  grid.innerHTML = list.map(a => `
    <article class="card adventure-card">

      <div class="card-image">
        ${a.image
          ? `<img src="${escapeHtml(a.image)}" alt="${escapeHtml(a.title)}">`
          : `<span aria-hidden="true">${a.emoji}</span>`
        }

        <div class="photo-date">
          ${escapeHtml(a.date)}
        </div>
      </div>

      <div class="card-body">
        <p class="card-location">📍 ${escapeHtml(a.area)}</p>

        <h3>${escapeHtml(a.title)}</h3>

        <p class="card-summary">
          ${escapeHtml(a.summary)}
        </p>

        <div class="tags">
          ${a.mushrooms.map(m =>
            `<span class="tag">🍄 ${escapeHtml(m)}</span>`
          ).join("")}
        </div>
      </div>

    </article>
  `).join("");

}

function renderMushrooms() {
  document.getElementById("mushroomGrid").innerHTML = mushrooms.map(m => `
    <article class="mushroom">

      <div class="mushroom-image">
        ${m.image
          ? `<img src="${escapeHtml(m.image)}" alt="${escapeHtml(m.name)}">`
          : `<span aria-hidden="true">${m.emoji}</span>`
        }
      </div>

      <div class="mushroom-info">
        <h3>${escapeHtml(m.name)}</h3>

        <p class="scientific-name">
          ${escapeHtml(m.scientific)}
        </p>

        <p class="mushroom-note">
          ${escapeHtml(m.note)}
        </p>

        <div class="mushroom-season">
          <span>🍂</span>
          ${escapeHtml(m.season)}
        </div>
      </div>

    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

function initMap() {
  const map = L.map("mapContainer", {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([47.05, -122.09], 7);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  adventures.forEach(a => {
    L.marker(a.publicMap)
      .addTo(map)
      .bindPopup(`
        <strong>${escapeHtml(a.title)}</strong><br>
        ${escapeHtml(a.area)}
      `);
  });

  // Give Leaflet a moment to calculate the container dimensions.
  setTimeout(() => {
    map.invalidateSize();
  }, 100);

  // Recalculate the map if the browser window changes size.
  window.addEventListener("resize", () => {
    map.invalidateSize();
  });
}

function setupPrivateGate() {
  const unlock = document.getElementById("unlockButton");
  const input = document.getElementById("locationPassword");
  const message = document.getElementById("passwordMessage");
  const lockArea = document.getElementById("lockArea");
  const content = document.getElementById("privateContent");

  function showPrivate() {
    lockArea.classList.add("hidden");
    content.classList.remove("hidden");
    document.getElementById("privateLocations").innerHTML =
      privateLocations.map(p => `
        <div class="private-location">
          <strong>${escapeHtml(p.title)}</strong>
          <p>${escapeHtml(p.details)}</p>
          <code>${escapeHtml(p.coords)}</code>
        </div>
      `).join("");
  }

  unlock.addEventListener("click", () => {
    if (input.value === PRIVATE_PASSWORD) {
      sessionStorage.setItem("mushroom_private_unlocked", "yes");
      showPrivate();
    } else {
      message.textContent = "That password was not accepted.";
    }
  });

  input.addEventListener("keydown", e => {
    if (e.key === "Enter") unlock.click();
  });

  document.getElementById("lockButton").addEventListener("click", () => {
    sessionStorage.removeItem("mushroom_private_unlocked");
    content.classList.add("hidden");
    lockArea.classList.remove("hidden");
    input.value = "";
  });

  if (sessionStorage.getItem("mushroom_private_unlocked") === "yes") showPrivate();
}

document.addEventListener("DOMContentLoaded", () => {
  renderAdventures();
  renderMushrooms();
  initMap();
  setupPrivateGate();

  document.getElementById("adventureCount").textContent = adventures.length;
  document.getElementById("mushroomCount").textContent =
    new Set(adventures.flatMap(a => a.mushrooms)).size;
  document.getElementById("search").addEventListener("input", e => renderAdventures(e.target.value));
});

// ============================================================
// My Mushroom Adventures
// Edit the data below to add your own adventures and mushrooms.
// ============================================================

const adventures = [
  {
    id: "gifford-2026",
    title: "Gifford Pinchot Adventure",
    date: "September 2026",
    area: "Gifford Pinchot National Forest",
    summary: "A day in the forest looking for fall fungi and exploring new ground.",
    mushrooms: ["Chanterelle", "Lobster Mushroom"],
    emoji: "🍄",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.25, -121.85]
  },
  {
    id: "elbe-2026",
    title: "Elbe Hills Hunt",
    date: "September 2026",
    area: "Elbe Hills area",
    summary: "A short outing through mixed forest with a few promising finds.",
    mushrooms: ["Chanterelle"],
    emoji: "🌲",
    publicMap: [46.76, -122.18]
  }
];

const mushrooms = [
  {name:"Chanterelle", emoji:"🍄", note:"Golden woodland mushroom; add your own identification notes here."},
  {name:"Lobster Mushroom", emoji:"🦞", note:"A parasitized mushroom complex; add your own field notes here."},
  {name:"Porcini", emoji:"🍄", note:"Add your preferred identification notes here."},
  {name:"More to come", emoji:"🌿", note:"Your catalog can grow as you add adventures."}
];

// ------------------------------------------------------------
// Lightweight private gate
// IMPORTANT: This is deterrence, not strong security.
// For a public GitHub Pages site, do not treat this as a secure
// place to store highly sensitive secrets.
// Change this password before publishing.
// ------------------------------------------------------------
const PRIVATE_PASSWORD = "change-me";

const privateLocations = [
  {
    title: "Gifford Pinchot — exact spot",
    details: "Example private note. Replace this with your exact trail/spot information.",
    coords: "46.00000, -121.00000"
  },
  {
    title: "Elbe Hills — exact spot",
    details: "Example private note. Replace this with your exact location.",
    coords: "46.00000, -122.00000"
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
    <article class="card">
      <div class="card-image" aria-hidden="true">${a.emoji}</div>
      <div class="card-body">
        <p class="eyebrow">${escapeHtml(a.date)}</p>
        <h3>${escapeHtml(a.title)}</h3>
        <p><strong>${escapeHtml(a.area)}</strong></p>
        <p>${escapeHtml(a.summary)}</p>
        <div class="tags">${a.mushrooms.map(m => `<span class="tag">${escapeHtml(m)}</span>`).join("")}</div>
      </div>
    </article>
  `).join("");
}

function renderMushrooms() {
  document.getElementById("mushroomGrid").innerHTML = mushrooms.map(m => `
    <article class="mushroom">
      <div class="emoji">${m.emoji}</div>
      <h3>${escapeHtml(m.name)}</h3>
      <p>${escapeHtml(m.note)}</p>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;"
  }[c]));
}

function initMap() {
  const map = L.map("mapContainer", {scrollWheelZoom:false}).setView([46.41, -121.81], 8);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  adventures.forEach(a => {
    L.marker(a.publicMap).addTo(map)
      .bindPopup(`<strong>${escapeHtml(a.title)}</strong><br>${escapeHtml(a.area)}`);
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

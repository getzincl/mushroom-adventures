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
    weather: "cool and damp after recent rain",
    foundBy: "Family",
    finds: [
      {
        mushroomId: "chanterelle",
        images: [
          "images/gifford-chanterelle-1.jpg",
          "images/gifford-chanterelle-2.jpg"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },

      {
        mushroomId: "lobster-mushroom",
        images: [
          "images/gifford-lobster-1.jpg"
        ],
        notes: "We found a striking lobster mushroom while exploring the forest."
      }
    ],
    notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor.",
    emoji: "🍄",
    image: "images/bears-head.jpg",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.7, -121.85]
  },
  {
    id: "HighBridgeCreek-2026",
    title: "High Bridge Creek fun",
    date: "September 2026",
    area: "Gifford Pinchot National Forest south of Randle",
    summary: "a short outing through mixed forest with a few promising finds",
    weather: "Cool forest morning",
    foundBy: "Family",
    finds: [
      {
        mushroomId: "chanterelle",
        images: [
          "images/gifford-chanterelle-1.jpg",
          "images/gifford-chanterelle-2.jpg"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "lobster-mushroom",
        images: [
          "images/gifford-lobster-1.jpg"
        ],
        notes: "We found a striking lobster mushroom while exploring the forest."
      },
      {
        mushroomId: "cauliflower-mushroom",
        images: [
          "images/gifford-cauliflower-1.jpg"
        ],
        notes: "We found a unique cauliflower mushroom while exploring the forest."
      }
    ],
    notes: "A short family outing through mixed forest. We kept an eye out for chanterelles and other fall fungi.",
    emoji: "🫈",
    image: "images/cauliflower-mushroom.jpg",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.4, -121.9]
  },
  {
    id: "PortOrchard-2025",
    title: "Big Pond Trail Hunt",
    date: "October 2025",
    area: "Port Orchard",
    summary: "A jaunt with the family along the Big Pond Trail.",
    weather: "Cloudy dry day, no rain for a few days",
    foundBy: "Family",
    notes: "A family outing along the Big Pond Trail, first time in this area. Open to explore and find new fungi.",
    finds: [
      {
        mushroomId: "chanterelle",
        images: [
          "images/gifford-chanterelle-1.jpg",
          "images/gifford-chanterelle-2.jpg"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "bleeding-tooth",
        images: [
          "images/bleeding-tooth.jpg"
        ],
        notes: "We found a striking bleeding tooth mushroom while exploring the forest."
      }
    ],
    emoji: "🌲",
    image: "images/bleeding-tooth.jpg",
    publicMap: [47.5, -122.7]
  }
];

const mushrooms = [
  {
    id: "bears-head",
    name: "Bear's Head",
    scientific: "Hericium americanum",
    emoji: "🦁",
    images: ["images/bears-head.jpg"],
    categories: ["Tooth Fungi"],
    seasons: ["Summer", "Fall"],
    habitat: "Usually found on hardwood trees, logs, or stumps in mature forest.",
    identification: "A branching or coral-like fungus covered with long, cascading white spines.",
    note: "A distinctive toothed fungus with cascading spines, usually found growing on hardwoods.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "bleeding-tooth",
    name: "Bleeding Tooth",
    scientific: "Hydnellum peckii",
    emoji: "🩸",
    images: ["images/bleeding-tooth.jpg"],
    categories: ["Tooth Fungi"],
    seasons: ["Summer", "Fall"],
    habitat: "Found on the ground in forest environments, often associated with coniferous woodland.",
    identification: "Young specimens can have pale caps with distinctive red droplets and a toothed underside.",
    note: "A striking tooth fungus that can produce red droplets on its pale cap when young.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "cauliflower-mushroom",
    name: "Cauliflower Mushroom",
    scientific: "Sparassis",
    emoji: "🥦",
    images: ["images/cauliflower-mushroom.jpg"],
    categories: ["Other"],
    seasons: ["Summer", "Fall"],
    habitat: "Usually found near the base of conifers or growing from buried wood and roots.",
    identification: "Large, pale, highly branched clusters with flattened, ruffled branches resembling cauliflower.",
    note: "A large, highly branched fungus resembling a head of cauliflower, often found near conifers.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "chanterelle",
    name: "Chanterelle",
    scientific: "Cantharellus",
    emoji: "🍄",
    images: ["images/chanterelle.jpg",
              "images/chanterelle-2.jpg"
            ],
    categories: ["Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "Typically found on the forest floor in association with trees, especially conifers in the Pacific Northwest.",
    identification: "Often golden yellow to orange with a vase-like shape and blunt, forked false gills running down the stem.",
    note: "A prized woodland mushroom commonly recognized by its golden color and false gills.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "lobster-mushroom",
    name: "Lobster Mushroom",
    scientific: "Hypomyces lactifluorum",
    emoji: "🦞",
    images: ["images/lobster-mushroom.jpg"],
    categories: ["Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "Found on the forest floor where the parasitic fungus colonizes other mushrooms.",
    identification: "The host mushroom becomes covered in a hard orange-red outer layer with a distorted lobster-like appearance.",
    note: "A parasitic fungus that transforms another mushroom into a distinctive orange-red lobster-like form.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "porcini",
    name: "Porcini",
    scientific: "Boletus",
    emoji: "🍄",
    images: ["images/porcini.jpg"],
    categories: ["Boletes", "Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "Found on the ground in forest environments, often associated with conifer and mixed forests.",
    identification: "Typically has a thick stem, rounded cap, and pores rather than gills underneath the cap.",
    note: "A group of prized boletes with thick stems and a sponge-like pore surface beneath the cap.",
    observations: "Add your own observations here as you encounter this mushroom."
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
    [
      a.title,
      a.date,
      a.area,
      a.summary,
      ...(a.finds || []).map(find => {
        const mushroom = mushrooms.find(
          m => m.id === find.mushroomId
        );

        return mushroom ? mushroom.name : "";
      })
    ]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );

  if (!list.length) {
    grid.innerHTML = '<div class="empty">No adventures matched that search.</div>';
    return;
  }


  grid.innerHTML = list.map(a => `
    <article
      class="card adventure-card adventure-card-clickable"
      data-adventure="${escapeHtml(a.id)}">

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
          ${(a.finds || []).map(find => {
            const mushroom = mushrooms.find(
              m => m.id === find.mushroomId
            );

            return mushroom
              ? `<span class="tag">🍄 ${escapeHtml(mushroom.name)}</span>`
              : "";
          }).join("")}
        </div>
      </div>

    </article>
  `).join("");

  grid.querySelectorAll(".adventure-card-clickable").forEach(card => {
    card.addEventListener("click", () => {
      openAdventureModal(card.dataset.adventure);
    });
  });
}

function openAdventureModal(id) {
  const adventure = adventures.find(a => a.id === id);

  if (!adventure) return;

  const modal = document.getElementById("adventureModal");
  const body = document.getElementById("adventureModalBody");

  body.innerHTML = `
    <p class="eyebrow">FAMILY FIELD JOURNAL</p>

    <h2 id="adventureModalTitle">
      ${escapeHtml(adventure.title)}
    </h2>

    <p class="adventure-modal-location">
      📍 ${escapeHtml(adventure.area)}
    </p>

    <div class="adventure-modal-image">
      ${adventure.image
        ? `<img
            src="${escapeHtml(adventure.image)}"
            alt="${escapeHtml(adventure.title)}">`
        : `<span aria-hidden="true">${escapeHtml(adventure.emoji)}</span>`
      }
    </div>

    <div class="adventure-modal-details">

      <div class="adventure-detail">
        <span class="adventure-detail-icon">📅</span>
        <div>
          <strong>Date</strong>
          <span>${escapeHtml(adventure.date)}</span>
        </div>
      </div>

      <div class="adventure-detail">
        <span class="adventure-detail-icon">🌧️</span>
        <div>
          <strong>Weather</strong>
          <span>${escapeHtml(adventure.weather || "Not recorded")}</span>
        </div>
      </div>

      <div class="adventure-detail">
        <span class="adventure-detail-icon">👨‍👩‍👧‍👦</span>
        <div>
          <strong>Found by</strong>
          <span>${escapeHtml(adventure.foundBy || "Not recorded")}</span>
        </div>
      </div>

    </div>

    <div class="adventure-journal-section">
      <p class="eyebrow">THE DAY</p>

      <h3>Our Adventure</h3>

      <p>
        ${escapeHtml(adventure.notes || adventure.summary)}
      </p>
    </div>

    <div class="adventure-journal-section">

      <p class="eyebrow">MUSHROOMS FOUND</p>

      <h3>What We Found</h3>

      <div class="adventure-mushrooms">
        ${adventure.finds.map(find => {
          const mushroom = mushrooms.find(m => m.id === find.mushroomId);

          if (!mushroom) return "";

          return `
            <div class="adventure-find">

              <button
                class="adventure-mushroom-tag"
                data-mushroom="${escapeHtml(mushroom.id)}">
                🍄 ${escapeHtml(mushroom.name)}
              </button>

              <p class="adventure-find-notes">
                ${escapeHtml(find.notes || "")}
              </p>

              <div class="adventure-find-photos">

                ${find.images.map(image => `
                  <img
                    src="${escapeHtml(image)}"
                    alt="${escapeHtml(mushroom.name)} found during ${escapeHtml(adventure.title)}"
                    loading="lazy">
                `).join("")}

              </div>

            </div>
          `;
        }).join("")}
      </div>

    </div>
  `;

  body.querySelectorAll(".adventure-mushroom-tag").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const mushroomId = button.dataset.mushroom;

      closeAdventureModal();

      setTimeout(() => {
        openMushroomModal(mushroomId);
      }, 50);
    });
  });

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeAdventureModal() {
  document
    .getElementById("adventureModal")
    .classList.add("hidden");

  document.body.classList.remove("modal-open");
}

function renderMushrooms(categoryFilter = "All", seasonFilter = null) {
  const grid = document.getElementById("mushroomGrid");

  let list = mushrooms;

  // Filter by category
  if (categoryFilter !== "All") {
    list = list.filter(m =>
      m.categories.includes(categoryFilter)
    );
  }

  // Filter by season
  if (seasonFilter) {
    list = list.filter(m =>
      m.seasons.includes(seasonFilter)
    );
  }

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty">No mushrooms matched those filters.</div>';
    updateMushroomCount(0);
    return;
  }

  grid.innerHTML = list.map(m => `
    <article 
      class="mushroom mushroom-card-clickable" 
      data-mushroom="${escapeHtml(m.name)}">

      <div class="mushroom-image">
        ${m.images && m.images.length
          ? `<img src="${escapeHtml(m.images[0])}"
                  alt="${escapeHtml(m.name)}"
                  loading="lazy">`
          : `<span aria-hidden="true">${escapeHtml(m.emoji)}</span>`
        }
      </div>

      <div class="mushroom-info">

        <h3>${escapeHtml(m.name)}</h3>

        <p class="scientific-name">
          ${escapeHtml(m.scientific)}
        </p>

        <div class="mushroom-tags">
          ${m.categories.map(category =>
            `<span class="mushroom-tag">
              ${escapeHtml(category)}
            </span>`
          ).join("")}
        </div>

        <p class="mushroom-note">
          ${escapeHtml(m.note)}
        </p>

        <div class="mushroom-season">
          <span>🍂</span>
          ${escapeHtml(m.seasons.join(" – "))}
        </div>

      </div>

    </article>
  `).join("");

  grid.querySelectorAll(".mushroom-card-clickable").forEach(card => {
    card.addEventListener("click", () => {
      openMushroomModal(card.dataset.mushroom);
    });
  });

  updateMushroomCount(list.length);
}

function openMushroomModal(id) {
  const mushroom = mushrooms.find(m => m.id === id);

  if (!mushroom) return;

  const modal = document.getElementById("mushroomModal");
  const body = document.getElementById("mushroomModalBody");

  body.innerHTML = `
    <div class="mushroom-gallery">

      <div class="gallery-main">

        <button
          class="gallery-arrow gallery-prev"
          aria-label="Previous photo">
          ‹
        </button>

        <div id="galleryMainImage" class="modal-mushroom-image">
          ${mushroom.images && mushroom.images.length
            ? `<img src="${escapeHtml(mushroom.images[0])}"
                    alt="${escapeHtml(mushroom.name)}">`
            : `<span>${escapeHtml(mushroom.emoji)}</span>`
          }
        </div>

        <button
          class="gallery-arrow gallery-next"
          aria-label="Next photo">
          ›
        </button>

      </div>

      <div id="galleryThumbnails" class="gallery-thumbnails"></div>

      <div id="galleryCounter" class="gallery-counter"></div>

    </div>

    <div class="modal-mushroom-info">

      <p class="eyebrow">FIELD GUIDE ENTRY</p>

      <h2 id="modalMushroomName">
        ${escapeHtml(mushroom.name)}
      </h2>

      <p class="scientific-name">
        ${escapeHtml(mushroom.scientific)}
      </p>

      <div class="mushroom-tags">
        ${mushroom.categories.map(category =>
          `<span class="mushroom-tag">
            ${escapeHtml(category)}
          </span>`
        ).join("")}
      </div>

      <p class="modal-description">
        ${escapeHtml(mushroom.note)}
      </p>

      <div class="modal-details">

        <div>
          <strong>Season</strong>
          <span>🍂 ${escapeHtml(mushroom.seasons.join(" – "))}</span>
        </div>

        <div>
          <strong>Habitat</strong>
          <span>🌲 ${escapeHtml(mushroom.habitat)}</span>
        </div>

      </div>

      <div class="field-guide-section">
        <h3>Identification</h3>
        <p>
          ${escapeHtml(mushroom.identification)}
        </p>
      </div>

      <div class="field-guide-section">
        <h3>Field notes</h3>
        <p>
          ${escapeHtml(mushroom.note)}
        </p>
      </div>

      <div class="mushroom-history-section">

        <p class="eyebrow">OUR FIELD JOURNAL</p>

        <h3>Where We've Found It</h3>

        <div class="mushroom-history-list">
          ${adventures
              .filter(adventure =>
                adventure.finds.some(find =>
                  find.mushroomId === mushroom.id
                )
              )
            .map(adventure => `
              <button
                class="mushroom-history-card"
                data-adventure="${escapeHtml(adventure.id)}">

                <div class="history-card-image">
                  ${adventure.image
                    ? `<img
                        src="${escapeHtml(adventure.image)}"
                        alt="${escapeHtml(adventure.title)}">`
                    : `<span>${escapeHtml(adventure.emoji)}</span>`
                  }
                </div>

                <div class="history-card-info">

                  <strong>${escapeHtml(adventure.title)}</strong>

                  <span class="history-card-date">
                    ${escapeHtml(adventure.date)}
                  </span>

                  <span class="history-card-location">
                    📍 ${escapeHtml(adventure.area)}
                  </span>

                </div>

                <span class="history-card-arrow">→</span>

              </button>
            `).join("")}
        </div>

      </div>      

    </div>
  `;

  body.querySelectorAll(".mushroom-history-card").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const adventureId = button.dataset.adventure;

      closeMushroomModal();

      setTimeout(() => {
        openAdventureModal(adventureId);
      }, 50);
    });
  });  

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");

  setupMushroomGallery(mushroom);
}

function setupMushroomGallery(mushroom) {
  const images = mushroom.images || [];

  if (!images.length) return;

  let currentIndex = 0;

  const mainImage = document.getElementById("galleryMainImage");
  const thumbnails = document.getElementById("galleryThumbnails");
  const counter = document.getElementById("galleryCounter");

  function showImage(index) {
    currentIndex = (index + images.length) % images.length;

    mainImage.innerHTML = `
      <img
        src="${escapeHtml(images[currentIndex])}"
        alt="${escapeHtml(mushroom.name)} photograph ${currentIndex + 1}"
      >
    `;

    counter.textContent =
      `${currentIndex + 1} / ${images.length}`;

    thumbnails.querySelectorAll(".gallery-thumbnail").forEach((thumb, i) => {
      thumb.classList.toggle("active", i === currentIndex);
    });
  }

  thumbnails.innerHTML = images.map((image, index) => `
    <button
      class="gallery-thumbnail ${index === 0 ? "active" : ""}"
      data-index="${index}"
      aria-label="View photo ${index + 1}">

      <img
        src="${escapeHtml(image)}"
        alt=""
        loading="lazy">

    </button>
  `).join("");

  thumbnails.querySelectorAll(".gallery-thumbnail").forEach(thumb => {
    thumb.addEventListener("click", () => {
      showImage(Number(thumb.dataset.index));
    });
  });

  document
    .querySelector(".gallery-prev")
    .addEventListener("click", () => {
      showImage(currentIndex - 1);
    });

  document
    .querySelector(".gallery-next")
    .addEventListener("click", () => {
      showImage(currentIndex + 1);
    });

  showImage(0);
}

function closeMushroomModal() {
  document
    .getElementById("mushroomModal")
    .classList.add("hidden");

  document.body.classList.remove("modal-open");
}

function updateMushroomCount(count) {
  const countElement = document.getElementById("mushroomFilterCount");

  if (countElement) {
    countElement.textContent =
      `${count} mushroom${count === 1 ? "" : "s"}`;
  }
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

  document
    .getElementById("closeMushroomModal")
    .addEventListener("click", closeMushroomModal);

  document
    .querySelector(".mushroom-modal-backdrop")
    .addEventListener("click", closeMushroomModal);

  document
    .getElementById("closeAdventureModal")
    .addEventListener("click", closeAdventureModal);

  document
    .querySelector(".adventure-modal-backdrop")
    .addEventListener("click", closeAdventureModal);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMushroomModal();
      closeAdventureModal();
    }
  });

  document.getElementById("adventureCount").textContent = adventures.length;
  document.getElementById("mushroomCount").textContent =
    new Set(
      adventures.flatMap(a =>
        a.finds.map(find => find.mushroomId)
      )
    ).size;
  document.getElementById("search").addEventListener("input", e => renderAdventures(e.target.value)
  );

  let selectedCategory = "All";
  let selectedSeason = null;

  document.querySelectorAll(".filter-button").forEach(button => {

    button.addEventListener("click", () => {

      const type = button.dataset.filterType;
      const value = button.dataset.filter;

      if (type === "category") {

        selectedCategory = value;

        document
          .querySelectorAll('[data-filter-type="category"]')
          .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

      }

      if (type === "season") {

        if (selectedSeason === value) {
          selectedSeason = null;
          button.classList.remove("active");
        } else {
          selectedSeason = value;

          document
            .querySelectorAll('[data-filter-type="season"]')
            .forEach(btn => btn.classList.remove("active"));

          button.classList.add("active");
        }

      }

      renderMushrooms(selectedCategory, selectedSeason);
    });

  });

});

// ============================================================
// Getzin Family Mushroom Adventures
// Edit the data below to add your own adventures and mushrooms.
// ============================================================

const adventures = [
  {
    id: "gifford-2026",
    title: "Teeley Creek Adventure",
    date: "September 2026",
    area: "Gifford Pinchot National Forest",
    summary: "A day in the forest looking for fall fungi and exploring new ground.",
    weather: "cool and damp after recent rain",
    foundBy: "Family",
    finds: [
      {
        mushroomId: "chanterelle",
        images: [
          "images/gifford-chanterelle-1.webp",
          "images/gifford-chanterelle-2.webp",
          "images/gifford-chanterelle-3.webp"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "pigs-ear",
        images: [
          "images/gifford-pigsear-1.webp",
          "images/gifford-pigsear-2.webp",
          "images/gifford-pigsear-3.webp"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "bears-head",
        images: [
          "images/bears-head.webp"
        ],
        notes: "Very Beautiful bears head growing on the side of a downed log."
      },
      {
        mushroomId: "lobster-mushroom",
        images: [
          "images/lobster-mushroom.webp"
        ],
        notes: "We found a striking lobster mushroom while exploring the forest."
      }
    ],
    notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor.",
    emoji: "🍄",
    image: "images/bears-head.webp",
    // PUBLIC/general map position only. Do not put exact coordinates here.
    publicMap: [46.7, -121.85]
  },
  {
    id: "HighBridgeCreek-2026",
    title: "High Bridge Creek fun",
    date: "September 2026",
    area: "Gifford Pinchot National Forest",
    summary: "a short outing through mixed forest with a few promising finds",
    weather: "Cool forest morning",
    foundBy: "Family",
    finds: [
      {
        mushroomId: "chanterelle",
        images: [
          "images/gifford-chanterelle-1.webp",
          "images/gifford-chanterelle-2.webp"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "lobster-mushroom",
        images: [
          "images/high-lobster-2.webp"
        ],
        notes: "We found a striking lobster mushroom while exploring the forest."
      },
      {
        mushroomId: "cauliflower-mushroom",
        images: [
          "images/gifford-cauliflower-1.webp",
          "images/high-cauliflower-1.webp",
          "images/high-cauliflower-2.webp"
        ],
        notes: "We found a unique cauliflower mushroom while exploring the forest."
      }
    ],
    notes: "A short family outing through mixed forest. We kept an eye out for chanterelles and other fall fungi.",
    emoji: "🫈",
    image: "images/cauliflower-mushroom.webp",
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
          "images/gifford-chanterelle-1.webp",
          "images/gifford-chanterelle-2.webp"
        ],
        notes: "We were specifically hoping to find chanterelles and ended up finding several promising specimens while exploring the forest floor."
      },
      {
        mushroomId: "bleeding-tooth",
        images: [
          "images/bleeding-tooth.webp"
        ],
        notes: "We found a striking bleeding tooth mushroom while exploring the forest."
      }
    ],
    emoji: "🌲",
    image: "images/bleeding-tooth.webp",
    publicMap: [47.5, -122.7]
  },
  {id: "HorseCamp-2025",
    title: "Horse Camp: Lewis River",
    date: "October 2025",
    area: "Horse Camp: Lewis River",
    summary: "A long drive but high probability of matsutakes.",
    weather: "Cloudy dry day, no rain for a few days",
    foundBy: "Bamba",
    notes: "First time visit with Tony Bamba, many different spots all within range of general area.",
    finds: [
      {
        mushroomId: "matsutake",
        images: [
          "images/horsecamp-matsutake-1webp",
          "images/horsecamp-matsutake-2.webp"
        ],
        notes: "rewarded with many many matsutake mushrooms.",
      }
    ],
    emoji: "🇯🇵",
    image: "images/matsutake.webp",
    publicMap: [46.2, -121.9]
  }
];

const mushrooms = [
  {
    id: "matsutake",
    name: "Matsutake",
    scientific: "Tricholoma matsutake",
    emoji: "🍄",
    images: ["images/matsutake.webp"],
    categories: ["Mycorrhizal", "Edible", "Gilled"],
    seasons: ["Summer", "Fall"],
    habitat: "Grows on the ground in well-drained, often sandy soils beneath conifer forests. In the Pacific Northwest it is associated with shore and lodgepole pine, Douglas-fir, hemlock, and other conifers, with coastal dunes and drier Cascade forests being notable habitats.",
    identification: "A large, firm white mushroom with brownish fibers or stains, white gills, and a thick, cottony ring around the stem. Its distinctive spicy, cinnamon-like aroma is a classic characteristic, but identification should also rely on its firm flesh, veil, stem, and other structural features because some look-alikes can have similar odors.",
    note: "One of the Pacific Northwest's most prized wild mushrooms, Matsutake is highly valued for its firm texture and powerful spicy aroma. It typically fruits in fall and can be surprisingly difficult to spot because young mushrooms often push up beneath the forest duff.",
    observations: "Look for subtle bumps or cracks in the moss and needle duff where mushrooms are emerging rather than searching only for exposed caps. Candystick (Allotropa virgata) can also be an interesting indicator of Matsutake habitat because it is associated with Matsutake's underground mycelial network."
  },
  
  {
    id: "bears-head",
    name: "Bear's Head",
    scientific: "Hericium americanum",
    emoji: "🦁",
    images: ["images/bears-head.webp"],
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
    images: ["images/bleeding-tooth.webp"],
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
    images: ["images/cauliflower-mushroom.webp",
              "images/high-cauliflower-1.webp",
              "images/high-cauliflower-2.webp"
    ],
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
    images: ["images/chanterelle.webp",
              "images/chanterelle-2.webp",
              "images/gifford-chanterelle-1.webp",
              "images/gifford-chanterelle-2.webp",
              "images/gifford-chanterelle-3.webp"
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
    images: ["images/lobster-mushroom.webp",
              "images/high-lobster-2.webp"
            ],
    categories: ["Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "Found on the forest floor where the parasitic fungus colonizes other mushrooms.",
    identification: "The host mushroom becomes covered in a hard orange-red outer layer with a distorted lobster-like appearance.",
    note: "A parasitic fungus that transforms another mushroom into a distinctive orange-red lobster-like form.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

    {

    id: "pigs-ear",
    name: "Pigs Ear",
    scientific: "Gomphus clavatus",
    emoji: "🍄",
    images: ["images/gifford-pigsear-1.webp",
              "images/gifford-pigsear-2.webp",
              "images/gifford-pigsear-3.webp"
            ],
    categories: ["Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "grows on moist, shady forest floors and rotten wood, where it forms symbiotic, mycorrhizal relationships with coniferous trees like true fir, spruce, Douglas fir, and hemlock.",
    identification: "identified by its fleshy, fan- or funnel-shaped body with a pinkish-purple cap and deeply wrinkled, vein-like ridges instead of true gills.",
    note: "while it is a prized edible species, you must avoid harvesting old or insect-damaged specimens, as this mushroom is highly prone to maggot infestations and can decay quickly.",
    observations: "Add your own observations here as you encounter this mushroom."
  },

  {

    id: "porcini",
    name: "Porcini",
    scientific: "Boletus",
    emoji: "🍄",
    images: ["images/porcini.webp"],
    categories: ["Boletes", "Edible"],
    seasons: ["Summer", "Fall"],
    habitat: "Found on the ground in forest environments, often associated with conifer and mixed forests.",
    identification: "Typically has a thick stem, rounded cap, and pores rather than gills underneath the cap.",
    note: "A group of prized boletes with thick stems and a sponge-like pore surface beneath the cap.",
    observations: "Add your own observations here as you encounter this mushroom."
  }
];

const recipes = [
  {
    id: "chanterelle-butter-pasta",
    name: "Chanterelle Butter Pasta",
    mushroomId: "chanterelle",
    description: "A simple pasta dish that lets the rich, earthy flavor of fresh chanterelles shine.",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    difficulty: "Easy",
    servings: 4,
    image: "images/recipes/chanterelle-butter-pasta.webp",

    ingredients: [
      "8 oz fresh chanterelles",
      "12 oz pasta",
      "4 tbsp butter",
      "2 cloves garlic, minced",
      "1/4 cup Parmesan cheese",
      "Salt and pepper to taste"
    ],

    instructions: [
      "Clean the chanterelles and cut larger mushrooms into smaller pieces.",
      "Cook the pasta according to the package directions.",
      "Melt the butter in a large skillet and sauté the chanterelles and garlic.",
      "Drain the pasta and add it to the skillet.",
      "Toss with Parmesan, season with salt and pepper, and serve."
    ]
  },

  {
    id: "creamy-chanterelle-soup",
    name: "Creamy Chanterelle Soup",
    mushroomId: "chanterelle",
    description: "A warm and creamy mushroom soup perfect for a cool Pacific Northwest evening.",
    prepTime: "15 minutes",
    cookTime: "30 minutes",
    difficulty: "Easy",
    servings: 4,
    image: "images/recipes/creamy-chanterelle-soup.webp",

    ingredients: [
      "8 oz fresh chanterelles",
      "2 tbsp butter",
      "1 small onion, diced",
      "2 cloves garlic, minced",
      "3 cups chicken or vegetable broth",
      "1 cup heavy cream",
      "Salt and pepper to taste"
    ],

    instructions: [
      "Clean and slice the chanterelles.",
      "Melt the butter in a large pot and sauté the onion and garlic.",
      "Add the chanterelles and cook until softened.",
      "Add the broth and simmer for about 15 minutes.",
      "Stir in the cream and season with salt and pepper.",
      "Simmer gently for another 5 minutes and serve."
    ]
  },

  {
    id: "lobster-mushroom-skillet",
    name: "Lobster Mushroom Skillet",
    mushroomId: "lobster-mushroom",
    description: "A simple skillet preparation for enjoying the firm texture and rich color of lobster mushrooms.",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    difficulty: "Easy",
    servings: 3,
    image: "images/recipes/lobster-mushroom-skillet.webp",

    ingredients: [
      "8 oz lobster mushrooms",
      "2 tbsp butter",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 tbsp fresh parsley",
      "Salt and pepper to taste"
    ],

    instructions: [
      "Clean the lobster mushrooms and slice them into bite-sized pieces.",
      "Heat the butter and olive oil in a skillet.",
      "Add the mushrooms and cook until browned and tender.",
      "Add the garlic and cook for another minute.",
      "Season with salt and pepper and finish with fresh parsley."
    ]
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
      }, 20);
    });
  });

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function openRecipeModal(id) {
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return;

  const modal = document.getElementById("recipeModal");
  const body = document.getElementById("recipeModalBody");

  const mushroom = mushrooms.find(
    m => m.id === recipe.mushroomId
  );

  body.innerHTML = `
    <p class="eyebrow">FROM THE FOREST TO THE TABLE</p>

    <h2 id="recipeModalTitle">
      ${escapeHtml(recipe.name)}
    </h2>

    ${mushroom
      ? `
        <button
          class="recipe-mushroom-link"
          data-mushroom="${escapeHtml(mushroom.id)}">
          🍄 ${escapeHtml(mushroom.name)}
        </button>
      `
      : `
        <p class="recipe-modal-mushroom">
          🍄 Mushroom Recipe
        </p>
      `
    }

    <div class="recipe-modal-image">
      ${recipe.image
        ? `<img
            src="${escapeHtml(recipe.image)}"
            alt="${escapeHtml(recipe.name)}">`
        : `<span aria-hidden="true">🍳</span>`
      }
    </div>

    <p class="recipe-modal-description">
      ${escapeHtml(recipe.description)}
    </p>

    <div class="recipe-modal-details">

      <div>
        <strong>Prep</strong>
        <span>⏱ ${escapeHtml(recipe.prepTime)}</span>
      </div>

      <div>
        <strong>Cook</strong>
        <span>🔥 ${escapeHtml(recipe.cookTime)}</span>
      </div>

      <div>
        <strong>Difficulty</strong>
        <span>👨‍🍳 ${escapeHtml(recipe.difficulty)}</span>
      </div>

      <div>
        <strong>Servings</strong>
        <span>🍽 ${escapeHtml(String(recipe.servings))}</span>
      </div>

    </div>

    <div class="recipe-section">

      <p class="eyebrow">WHAT YOU'LL NEED</p>

      <h3>Ingredients</h3>

      <ul class="recipe-ingredients">
        ${recipe.ingredients.map((ingredient, index) => `
          <li>
            <label class="recipe-ingredient">
              <input
                type="checkbox"
                data-ingredient="${index}">
              <span>${escapeHtml(ingredient)}</span>
            </label>
          </li>
        `).join("")}
      </ul>

    </div>

    <div class="recipe-section">

      <p class="eyebrow">LET'S COOK</p>

      <h3>Instructions</h3>

      <ol class="recipe-instructions">
        ${recipe.instructions.map((step, index) => `
          <li>
            <label class="recipe-step">
              <input
                type="checkbox"
                data-step="${index}">
              <span>${escapeHtml(step)}</span>
            </label>
          </li>
        `).join("")}
      </ol>

    </div>
  `;

  const mushroomLink = body.querySelector(".recipe-mushroom-link");

  if (mushroomLink) {
    mushroomLink.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const mushroomId = mushroomLink.dataset.mushroom;

      closeRecipeModal();

      setTimeout(() => {
        openMushroomModal(mushroomId);
      }, 20);
    });
  }

  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeRecipeModal() {
  document
    .getElementById("recipeModal")
    .classList.add("hidden");

  document.body.classList.remove("modal-open");
}

function closeAdventureModal() {
  document
    .getElementById("adventureModal")
    .classList.add("hidden");

  document.body.classList.remove("modal-open");
}

function renderMushrooms(categoryFilter = "All", seasonFilter = null) {
  const grid = document.getElementById("mushroomGrid");

  let list = [...mushrooms];

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

  // Sort alphabetically by mushroom name
  list.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  if (!list.length) {
    grid.innerHTML =
      '<div class="empty">No mushrooms matched those filters.</div>';
    updateMushroomCount(0);
    return;
  }

  grid.innerHTML = list.map(m => `
    <article 
      class="mushroom mushroom-card-clickable" 
      data-mushroom="${escapeHtml(m.id)}">

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

function renderRecipeFilters() {
  const filters = document.getElementById("recipeFilters");

  if (!filters) return;

  const mushroomIds = [
    ...new Set(
      recipes.map(recipe => recipe.mushroomId)
    )
  ];

  filters.innerHTML = `
    <button
      class="recipe-filter active"
      data-mushroom="all">
      All Recipes
    </button>

    ${mushroomIds.map(mushroomId => {

      const mushroom = mushrooms.find(
        m => m.id === mushroomId
      );

      return mushroom
        ? `
          <button
            class="recipe-filter"
            data-mushroom="${escapeHtml(mushroom.id)}">
            🍄 ${escapeHtml(mushroom.name)}
          </button>
        `
        : "";

    }).join("")}
  `;

  filters.querySelectorAll(".recipe-filter").forEach(button => {
    button.addEventListener("click", () => {

      filters
        .querySelectorAll(".recipe-filter")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      renderRecipes(button.dataset.mushroom);
    });
  });
}

function renderRecipes(filter = "all") {
  const grid = document.getElementById("recipeGrid");

  if (!grid) return;

  const visibleRecipes =
  filter === "all"
    ? recipes
    : recipes.filter(
        recipe => recipe.mushroomId === filter
      );

  grid.innerHTML = visibleRecipes.map(recipe => {

    const mushroom = mushrooms.find(
      m => m.id === recipe.mushroomId
    );

    return `
      <article
        class="card recipe-card"
        data-recipe="${escapeHtml(recipe.id)}">

        <div class="card-image">

          ${recipe.image
            ? `<img
                src="${escapeHtml(recipe.image)}"
                alt="${escapeHtml(recipe.name)}"
                loading="lazy">`
            : `<span aria-hidden="true">🍳</span>`
          }

        </div>

        <div class="card-body">

          <p class="card-location">
            🍄 ${mushroom
              ? escapeHtml(mushroom.name)
              : "Mushroom Recipe"}
          </p>

          <h3>
            ${escapeHtml(recipe.name)}
          </h3>

          <p class="card-summary">
            ${escapeHtml(recipe.description)}
          </p>

          <div class="recipe-meta">

            <span>⏱ ${escapeHtml(recipe.cookTime)}</span>

            <span>👨‍🍳 ${escapeHtml(recipe.difficulty)}</span>

            <span>🍽 ${escapeHtml(String(recipe.servings))}</span>

          </div>

          <div class="recipe-card-link">
            View Recipe →
          </div>

        </div>

      </article>
    `;
  }).join("");

  grid.querySelectorAll(".recipe-card").forEach(card => {
    card.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();

      const recipeId = card.dataset.recipe;

      setTimeout(() => {
        openRecipeModal(recipeId);
      }, 20);
    });
  });
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
      
      <div class="mushroom-recipes-section">

        <p class="eyebrow">FROM THE KITCHEN</p>

        <h3>Recipes With This Mushroom</h3>

        <div class="mushroom-recipe-list">

          ${recipes
            .filter(recipe => recipe.mushroomId === mushroom.id)
            .map(recipe => `
              <button
                class="mushroom-recipe-card"
                data-recipe="${escapeHtml(recipe.id)}">

                <div class="mushroom-recipe-image">

                  ${recipe.image
                    ? `<img
                        src="${escapeHtml(recipe.image)}"
                        alt="${escapeHtml(recipe.name)}">`
                    : `<span>🍳</span>`
                  }

                </div>

                <div class="mushroom-recipe-info">

                  <strong>
                    ${escapeHtml(recipe.name)}
                  </strong>

                  <span>
                    ⏱ ${escapeHtml(recipe.cookTime)}
                    &nbsp;•&nbsp;
                    👨‍🍳 ${escapeHtml(recipe.difficulty)}
                  </span>

                </div>

                <span class="mushroom-recipe-arrow">→</span>

              </button>
            `)
            .join("")}

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
      },20);
    });
  });

  body.querySelectorAll(".mushroom-recipe-card").forEach(button => {

    button.addEventListener("click", event => {

      event.preventDefault();
      event.stopPropagation();

      const recipeId = button.dataset.recipe;

      closeMushroomModal();

      setTimeout(() => {
        openRecipeModal(recipeId);
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

  const mapLocations = {};

  adventures.forEach(adventure => {

    const key = adventure.publicMap.join(",");

    if (!mapLocations[key]) {
      mapLocations[key] = {
        coordinates: adventure.publicMap,
        area: adventure.area,
        adventures: []
      };
    }

    mapLocations[key].adventures.push(adventure);
  });


  Object.values(mapLocations).forEach(location => {

    const marker = L.marker(location.coordinates)
      .addTo(map);


    const adventureList = location.adventures
      .slice()
      .sort((a, b) =>
        b.date.localeCompare(a.date)
      )
      .map(adventure => `
        <button
          class="map-adventure-button"
          data-adventure="${escapeHtml(adventure.id)}">

          <strong>
            ${escapeHtml(adventure.date)}
          </strong>

          <span>
            ${escapeHtml(adventure.title)}
          </span>

          <span class="map-adventure-arrow">
            →
          </span>

        </button>
      `)
      .join("");


    marker.bindPopup(`
      <div class="map-popup">

        <strong class="map-popup-location">
          ${escapeHtml(location.area)}
        </strong>

        <span class="map-popup-count">
          ${location.adventures.length}
          ${location.adventures.length === 1
            ? "adventure"
            : "adventures"}
        </span>

        <div class="map-adventure-list">
          ${adventureList}
        </div>

      </div>
    `);


  marker.on("popupopen", () => {

    const buttons = document.querySelectorAll(
      ".map-adventure-button"
    );

    buttons.forEach(button => {

      button.addEventListener("click", event => {

        event.preventDefault();
        event.stopPropagation();

        const adventureId =
          button.dataset.adventure;

        map.closePopup();

        setTimeout(() => {
          openAdventureModal(adventureId);
        }, 50);

      });

    });

  });

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
  renderRecipeFilters();
  renderRecipes();
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

  document
    .getElementById("closeRecipeModal")
    .addEventListener("click", closeRecipeModal);

  document
    .querySelector(".recipe-modal-backdrop")
    .addEventListener("click", closeRecipeModal);

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeMushroomModal();
      closeAdventureModal();
      closeRecipeModal();
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

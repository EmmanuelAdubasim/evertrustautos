// ============================
// Evertrust Autos Config
// ============================
const DEALER = {
  name: "Evertrust Autos",
  whatsappNumber: "2349034251005", // no + sign
  locationText: "Ihiagwa, Owerri, Imo State"
};

// ============================
// Inventory
// IMPORTANT: Place your images in assets/cars/ with these filenames
// ============================
const CARS = [
  // ===== Toyota (Luxury / Mid) =====
  {
    id: "t1",
    brand: "Toyota",
    type: "Sedan",
    title: "2019 Toyota Camry XSE",
    tag: "Neatly Driven NG • Grade 1",
    priceText: "₦ 18.9M",
    mileage: "62,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/toyota-camry-ext.jpg",
    interiorImg: "assets/cars/toyota-camry-int.jpg"
  },
  {
    id: "t2",
    brand: "Toyota",
    type: "SUV",
    title: "2020 Toyota Highlander",
    tag: "Foreign Used • Grade 1",
    priceText: "₦ --.--M",
    mileage: "55,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/toyota-highlander-ext.jpg",
    interiorImg: "assets/cars/toyota-highlander-int.jpg"
  },

  // ===== Lexus =====
  {
    id: "lx1",
    brand: "Lexus",
    type: "SUV",
    title: "2019 Lexus RX 350 (Foreign Used)",
    tag: "Grade 1 • Luxury • Clean",
    priceText: "₦ 28.7M",
    mileage: "70,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/lexus-rx350-ext.jpg",
    interiorImg: "assets/cars/lexus-rx350-int.jpg"
  },
  {
    id: "lx2",
    brand: "Lexus",
    type: "Sedan",
    title: "2018 Lexus ES 350 (Foreign Used)",
    tag: "Grade 1 • Luxury",
    priceText: "₦ --.--M",
    mileage: "72,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/lexus-es350-ext.jpg",
    interiorImg: "assets/cars/lexus-es350-int.jpg"
  },
  {
    id: "lx3",
    brand: "Lexus",
    type: "SUV",
    title: "2018 Lexus LX 570 (Full Option)",
    tag: "Luxury • Grade 1 • Executive",
    priceText: "₦ --.--M",
    mileage: "82,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/lexus-lx570-ext.jpg",
    interiorImg: "assets/cars/lexus-lx570-int.jpg"
  },

  // ===== Mercedes =====
  {
    id: "mb1",
    brand: "Mercedes",
    type: "SUV",
    title: "2020 Mercedes-Benz GLE 350 (Foreign Used)",
    tag: "Grade 1 • Luxury • Clean",
    priceText: "₦ 38.5M",
    mileage: "48,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/mercedes-gle-ext.jpg",
    interiorImg: "assets/cars/mercedes-gle-int.jpg"
  },
  {
    id: "mb2",
    brand: "Mercedes",
    type: "SUV",
    title: "2019 Mercedes-Benz GLB 250",
    tag: "Foreign Used • Grade 1",
    priceText: "₦ --.--M",
    mileage: "52,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/mercedes-glb-ext.jpg",
    interiorImg: "assets/cars/mercedes-glb-int.jpg"
  },
  {
    id: "mb3",
    brand: "Mercedes",
    type: "Sedan",
    title: "2019 Mercedes-Benz C300",
    tag: "Luxury • Grade 1",
    priceText: "₦ --.--M",
    mileage: "44,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/mercedes-cclass-ext.jpg",
    interiorImg: "assets/cars/mercedes-cclass-int.jpg"
  },
  {
    id: "mb4",
    brand: "Mercedes",
    type: "Sedan",
    title: "2018 Mercedes-Benz E300",
    tag: "Executive • Grade 1",
    priceText: "₦ --.--M",
    mileage: "61,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/mercedes-eclass-ext.jpg",
    interiorImg: "assets/cars/mercedes-eclass-int.jpg"
  },

  // ===== Jeep (and big SUVs) =====
  {
    id: "jp1",
    brand: "Jeep",
    type: "Jeep",
    title: "2019 Jeep Grand Cherokee (Foreign Used)",
    tag: "Grade 1 • Rugged Luxury",
    priceText: "₦ --.--M",
    mileage: "68,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/jeep-grand-cherokee-ext.jpg",
    interiorImg: "assets/cars/jeep-grand-cherokee-int.jpg"
  },
  {
    id: "jp2",
    brand: "Toyota",
    type: "SUV",
    title: "2019 Toyota Land Cruiser Prado",
    tag: "Foreign Used • Grade 1 • Executive",
    priceText: "₦ --.--M",
    mileage: "75,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/prado-ext.jpg",
    interiorImg: "assets/cars/prado-int.jpg"
  },

  // ===== Budget Fast Sellers (₦5M - ₦12M) =====
  {
    id: "bg1",
    brand: "Toyota",
    type: "Compact",
    title: "2016 Toyota Corolla (Neatly Driven)",
    tag: "Affordable • Grade 1 • Fuel Saver",
    priceText: "₦ 7.5M",
    mileage: "110,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/corolla-ext.jpg",
    interiorImg: "assets/cars/corolla-int.jpg"
  },
  {
    id: "bg2",
    brand: "Honda",
    type: "Sedan",
    title: "2016 Honda Civic (Clean)",
    tag: "Affordable • Grade 1",
    priceText: "₦ 8.2M",
    mileage: "98,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/civic-ext.jpg",
    interiorImg: "assets/cars/civic-int.jpg"
  },
  {
    id: "bg3",
    brand: "Nissan",
    type: "Sedan",
    title: "2015 Nissan Sentra",
    tag: "Budget Friendly • Grade 1",
    priceText: "₦ 6.8M",
    mileage: "120,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/sentra-ext.jpg",
    interiorImg: "assets/cars/sentra-int.jpg"
  },
  {
    id: "bg4",
    brand: "Kia",
    type: "Compact",
    title: "2017 Kia Rio",
    tag: "Affordable • Fuel Saver",
    priceText: "₦ 6.2M",
    mileage: "105,000 km",
    transmission: "Auto",
    fuel: "Petrol",
    exteriorImg: "assets/cars/kia-rio-ext.jpg",
    interiorImg: "assets/cars/kia-rio-int.jpg"
  }
];

// ============================
// Helpers
// ============================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${DEALER.whatsappNumber}?text=${text}`;
}

function groupByBrand(cars) {
  const map = new Map();
  for (const c of cars) {
    if (!map.has(c.brand)) map.set(c.brand, []);
    map.get(c.brand).push(c);
  }
  return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

function uniqueBrands(cars) {
  return [...new Set(cars.map(c => c.brand))].sort((a, b) => a.localeCompare(b));
}

function matchesFilters(car, filters) {
  const brandOk = filters.brand === "all" || car.brand === filters.brand;
  const typeOk = filters.type === "all" || car.type === filters.type;
  const q = filters.q.trim().toLowerCase();
  const qOk = !q || [car.title, car.brand, car.type, car.tag].join(" ").toLowerCase().includes(q);
  return brandOk && typeOk && qOk;
}

function safeImg(path, fallback) {
  // Used only for onerror attribute fallback in HTML string
  return path || fallback;
}

// ============================
// UI Builders
// ============================
function createCarCard(car) {
  const card = document.createElement("article");
  card.className = "carCard";
  card.dataset.id = car.id;
  card.dataset.view = "exterior"; // default

  const extFallback = "assets/cars/placeholder-ext.jpg";
  const intFallback = "assets/cars/placeholder-int.jpg";

  card.innerHTML = `
    <div class="carMedia">
      <span class="pill">${car.type}</span>
      <img src="${safeImg(car.exteriorImg, extFallback)}"
           alt="${car.title} exterior"
           loading="lazy"
           onerror="this.src='${extFallback}'" />
    </div>
    <div class="carBody">
      <h4 class="carTitle">${car.title}</h4>
      <div class="metaRow">
        <span>${car.tag}</span>
        <span>•</span>
        <span>${car.mileage}</span>
      </div>
      <div class="metaRow">
        <span>${car.transmission}</span>
        <span>•</span>
        <span>${car.fuel}</span>
      </div>
      <div class="priceRow">
        <span class="price">${car.priceText}</span>
        <span class="muted" style="font-size:12px;">${car.brand}</span>
      </div>
      <div class="cardBtns">
        <button class="btn btn--ghost js-toggleView" type="button">Interior</button>
        <a class="btn btn--primary js-wa" href="#">WhatsApp</a>
      </div>
    </div>
  `;

  const toggleBtn = card.querySelector(".js-toggleView");
  const img = card.querySelector("img");

  toggleBtn.addEventListener("click", () => {
    const isExterior = card.dataset.view === "exterior";
    if (isExterior) {
      img.src = safeImg(car.interiorImg, intFallback);
      img.alt = `${car.title} interior`;
      card.dataset.view = "interior";
      toggleBtn.textContent = "Exterior";
    } else {
      img.src = safeImg(car.exteriorImg, extFallback);
      img.alt = `${car.title} exterior`;
      card.dataset.view = "exterior";
      toggleBtn.textContent = "Interior";
    }
  });

  const wa = card.querySelector(".js-wa");
  const message = `Hi ${DEALER.name}, I'm interested in: ${car.title} (${car.brand}, ${car.type}). Price: ${car.priceText}. Please share more details, inspection info, and availability.`;
  wa.href = waLink(message);

  return card;
}

function createBrandBlock(brand, cars) {
  const block = document.createElement("section");
  block.className = "brandBlock";
  block.dataset.brand = brand;

  const countText = `${cars.length} option${cars.length === 1 ? "" : "s"}`;

  block.innerHTML = `
    <div class="brandBlock__head">
      <div>
        <h3>${brand}</h3>
        <p>${countText} • Scroll or use arrows • Auto-scroll enabled</p>
      </div>
      <div class="brandControls">
        <button class="iconBtn js-prev" type="button" aria-label="Scroll left">‹</button>
        <button class="iconBtn js-next" type="button" aria-label="Scroll right">›</button>
      </div>
    </div>
    <div class="slider">
      <div class="track" tabindex="0" aria-label="${brand} car slider"></div>
    </div>
  `;

  const track = block.querySelector(".track");
  cars.forEach(c => track.appendChild(createCarCard(c)));

  const prevBtn = block.querySelector(".js-prev");
  const nextBtn = block.querySelector(".js-next");

  const scrollByAmount = () => {
    const firstCard = track.querySelector(".carCard");
    if (!firstCard) return 300;
    return firstCard.getBoundingClientRect().width + 12;
    };

  prevBtn.addEventListener("click", () => {
    track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" });
  });
  nextBtn.addEventListener("click", () => {
    track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
  });

  // Auto-scroll loop (pauses on hover/touch)
  let autoTimer = null;
  const startAuto = () => {
    if (autoTimer) return;
    autoTimer = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const atEnd = track.scrollLeft >= maxScroll - 4;
      if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
      else track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
    }, 2600);
  };

  const stopAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = null;
  };

  track.addEventListener("mouseenter", stopAuto);
  track.addEventListener("mouseleave", startAuto);
  track.addEventListener("touchstart", stopAuto, { passive: true });
  track.addEventListener("touchend", startAuto);

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) startAuto();
      else stopAuto();
    }
  }, { threshold: 0.25 });

  io.observe(block);

  return block;
}

// ============================
// Render Inventory
// ============================
function renderInventory() {
  const filters = {
    brand: $("#brandFilter").value,
    type: $("#typeFilter").value,
    q: $("#searchInput").value
  };

  const filtered = CARS.filter(c => matchesFilters(c, filters));
  const grouped = groupByBrand(filtered);

  const host = $("#brandSections");
  host.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<h3>No cars found</h3><p class="muted">Try changing your filters or search keywords.</p>`;
    host.appendChild(empty);
    return;
  }

  for (const [brand, cars] of grouped.entries()) {
    host.appendChild(createBrandBlock(brand, cars));
  }
}

function fillBrandDropdown() {
  const brands = uniqueBrands(CARS);
  const sel = $("#brandFilter");
  brands.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    sel.appendChild(opt);
  });
}

function setupWhatsAppButtons() {
  const baseMsg = `Hi ${DEALER.name}, I’m interested in your Grade 1 cars. Please share available options and prices.`;
  const href = waLink(baseMsg);

  $("#whatsappTop").href = href;
  $("#whatsappMobile").href = href;
  $("#floatWA").href = href;

  $("#referralWhatsApp").href = waLink(`Hi ${DEALER.name}, I want to join your referral program. Please explain how it works and what I need to do.`);
  $("#benefitsWhatsApp").href = waLink(`Hi ${DEALER.name}, please help me choose a car. My budget is ₦____. Brand: ____. Type (SUV/Jeep/Sedan/Compact): ____.`);
  $("#contactWhatsApp").href = href;

  $("#featuredWhatsApp").href = waLink(`Hi ${DEALER.name}, I'm interested in the featured car on your site. Please share the current price, availability, and inspection details.`);
}

function setupFeatured() {
  // pick a strong featured car (Mercedes GLE if available)
  const preferred = CARS.find(c => c.id === "mb1") || CARS[0];

  const featuredImg = $("#featuredImg");
  const featuredTitle = $("#featuredTitle");
  const featuredSub = $("#featuredSub");
  const featuredPrice = $("#featuredPrice");
  const toggle = $("#toggleFeaturedView");

  featuredImg.src = preferred.exteriorImg || "assets/cars/placeholder-ext.jpg";
  featuredTitle.textContent = preferred.title;
  featuredSub.textContent = `${preferred.type} • ${preferred.tag}`;
  featuredPrice.textContent = preferred.priceText;

  let view = "exterior";
  toggle.addEventListener("click", () => {
    if (view === "exterior") {
      featuredImg.src = preferred.interiorImg || "assets/cars/placeholder-int.jpg";
      featuredImg.alt = `${preferred.title} interior`;
      toggle.textContent = "Switch to Exterior";
      view = "interior";
    } else {
      featuredImg.src = preferred.exteriorImg || "assets/cars/placeholder-ext.jpg";
      featuredImg.alt = `${preferred.title} exterior`;
      toggle.textContent = "Switch to Interior";
      view = "exterior";
    }
  });
}

function setupMobileMenu() {
  const btn = $("#menuBtn");
  const menu = $("#mobileMenu");

  btn.addEventListener("click", () => {
    const open = !menu.hasAttribute("hidden");
    if (open) {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    } else {
      menu.removeAttribute("hidden");
      btn.setAttribute("aria-expanded", "true");
    }
  });

  $$(".mobileLink").forEach(link => {
    link.addEventListener("click", () => {
      menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function setupLeadForm() {
  const form = $("#leadForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get("name") || "").toString().trim();
    const phone = (fd.get("phone") || "").toString().trim();
    const msg = (fd.get("message") || "").toString().trim();

    const composed = `Hi ${DEALER.name}, my name is ${name}. Phone: ${phone}. ${msg ? "Request: " + msg : "I want to make an enquiry about available cars."}`;
    window.open(waLink(composed), "_blank");
    form.reset();
  });
}

function setupFilters() {
  const rerender = () => renderInventory();

  $("#brandFilter").addEventListener("change", rerender);
  $("#typeFilter").addEventListener("change", rerender);

  const input = $("#searchInput");
  let t = null;
  input.addEventListener("input", () => {
    if (t) clearTimeout(t);
    t = setTimeout(rerender, 180);
  });

  $("#resetFilters").addEventListener("click", () => {
    $("#brandFilter").value = "all";
    $("#typeFilter").value = "all";
    $("#searchInput").value = "";
    renderInventory();
  });
}

function initStaticText() {
  $("#addressText").textContent = DEALER.locationText;
  $("#year").textContent = new Date().getFullYear();
}

// ============================
// INIT
// ============================
fillBrandDropdown();
setupWhatsAppButtons();
setupFeatured();
setupMobileMenu();
setupLeadForm();
setupFilters();
initStaticText();
renderInventory();

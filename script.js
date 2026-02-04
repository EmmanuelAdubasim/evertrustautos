// ============================
// Evertrust Autos Config
// ============================
const DEALER = {
  name: "Evertrust Autos",
  whatsappNumberLocal: "09034251005",
  address: "Opposite Drug Office, Naze by Wetheral Road, Owerri, Imo State",
  hours: "Mon–Sat: 8:30am – 7:00pm | Sunday: Closed (Opens on Appointment)"
};

function toWhatsAppInternational(local) {
  const raw = (local || "").trim().replace(/\s+/g, "");
  if (!raw) return "";
  if (raw.startsWith("+")) return raw.replace("+", "");
  if (raw.startsWith("234")) return raw;
  if (raw.startsWith("0")) return "234" + raw.slice(1);
  return raw;
}

const WHATSAPP_INT = toWhatsAppInternational(DEALER.whatsappNumberLocal);

// ============================
// ✅ HOW TO MARK A CAR AS SOLD
// ============================
// Find the car in CARS and change:
//   status: "available"
// to:
//   status: "sold"
//
// ✅ SOLD rules:
// - Add ONLY 2 photos in images: [ "...-1.jpg", "...-2.jpg" ]
// - Price is hidden for sold cars; buyers DM to ask.
// ============================

function carItem({
  id, brand, bodyType, model, year,
  condition, status = "available",
  priceText = "",
  images = [],
  videoUrl = "",
  features = []
}) {
  return {
    id, brand, bodyType, model, year,
    condition, status, priceText,
    images, videoUrl, features,
    title: `${brand} ${model} (${year})`
  };
}

// Helper to generate image lists quickly
function imgs(base, count) {
  // base example: "assets/cars/lexus-rx350-2018"
  return Array.from({ length: count }, (_, i) => `${base}-${i + 1}.jpg`);
}

// ============================
// Inventory (ALL cars now have image sources)
// ============================
const CARS = [
  // ===== AVAILABLE (OLD) =====
  carItem({
    id: "lx-rx350-2018",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350",
    year: 2018,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦47,000,000",
    images: imgs("assets/cars/lexus-rx350-2018", 4)
  }),

  carItem({
    id: "ty-camry-spider-2010",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry Spider",
    year: 2010,
    condition: "NG Used",
    status: "available",
    priceText: "₦9,000,000",
    images: imgs("assets/cars/camry-spider-2010", 4)
  }),

  carItem({
    id: "lx-rx350-2012-facelift",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350 (2012 → 2015 Facelift)",
    year: 2012,
    condition: "NG Used",
    status: "available",
    priceText: "₦18,900,000",
    images: imgs("assets/cars/rx350-2012-facelift", 4)
  }),

  carItem({
    id: "lx-es350-2010",
    brand: "Lexus",
    bodyType: "Sedan",
    model: "ES350",
    year: 2010,
    condition: "NG Used",
    status: "available",
    priceText: "₦10,000,000",
    images: imgs("assets/cars/es350-2010", 4)
  }),

  carItem({
    id: "lx-rx330-2006-97",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2006,
    condition: "NG Used",
    status: "available",
    priceText: "₦9,700,000",
    images: imgs("assets/cars/rx330-2006-a", 4)
  }),

  carItem({
    id: "lx-rx330-2007-105",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2007,
    condition: "NG Used",
    status: "available",
    priceText: "₦10,500,000",
    images: imgs("assets/cars/rx330-2007", 4)
  }),

  carItem({
    id: "lx-rx330-2006-10m",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2006,
    condition: "NG Used",
    status: "available",
    priceText: "₦10,000,000",
    images: imgs("assets/cars/rx330-2006-b", 4)
  }),

  // ===== AVAILABLE (NEW) =====
  carItem({
    id: "ty-avalon-xle-2014",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Avalon XLE",
    year: 2014,
    condition: "NG Used",
    status: "available",
    priceText: "₦18,500,000",
    images: imgs("assets/cars/toyota-avalon-xle-2014", 4),
    features: ["V6 Engine", "Reverse Camera", "TV Screen", "Push Start", "Parking Sensor", "First Body", "Nothing Fixed"]
  }),

  carItem({
    id: "ty-camry-2005-v6",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry",
    year: 2005,
    condition: "NG Used",
    status: "available",
    priceText: "₦4,500,000",
    images: imgs("assets/cars/toyota-camry-2005", 4),
    features: ["V6 Engine", "First Body", "Nothing Fixed"]
  }),

  carItem({
    id: "ty-tundra-2014-v8",
    brand: "Toyota",
    bodyType: "Truck",
    model: "Tundra",
    year: 2014,
    condition: "NG Used",
    status: "available",
    priceText: "₦19,800,000",
    images: imgs("assets/cars/toyota-tundra-2014", 4),
    features: ["V8 Engine", "Parking Assist", "First Body", "Nothing Fixed"]
  }),

  carItem({
    id: "lx-es350-2014-foreign",
    brand: "Lexus",
    bodyType: "Sedan",
    model: "ES350",
    year: 2014,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦24,800,000",
    images: imgs("assets/cars/lexus-es350-2014", 4),
    features: ["V6 Engine", "Reverse Camera", "TV Screen", "Apple CarPlay", "Parking Assist", "First Body", "Nothing Fixed"]
  }),

  // Mercedes ML350 Facelift → GLE350 (Nigerian Drive) 2013 24.5m
  carItem({
    id: "mb-ml350-2013-facelift-gle350",
    brand: "Mercedes",
    bodyType: "SUV",
    model: "ML350 Facelift → GLE350",
    year: 2013,
    condition: "NG Used",
    status: "available",
    priceText: "₦24,500,000",
    images: imgs("assets/cars/mercedes-ml350-2013-facelift-gle350", 4)
  }),

  // Mercedes GLE350 2016 Foreign used 33m
  carItem({
    id: "mb-gle350-2016-foreign",
    brand: "Mercedes",
    bodyType: "SUV",
    model: "GLE350",
    year: 2016,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦33,000,000",
    images: imgs("assets/cars/mercedes-gle350-2016", 4)
  }),

  // Lexus ES350 2009 Foreign used 13.5m
  carItem({
    id: "lx-es350-2009-foreign",
    brand: "Lexus",
    bodyType: "Sedan",
    model: "ES350",
    year: 2009,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦13,500,000",
    images: imgs("assets/cars/lexus-es350-2009", 4)
  }),

  // Toyota Sienna Limited 2015 Foreign used 17m
  carItem({
    id: "ty-sienna-limited-2015-foreign",
    brand: "Toyota",
    bodyType: "Minivan",
    model: "Sienna Limited",
    year: 2015,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦17,000,000",
    images: imgs("assets/cars/toyota-sienna-limited-2015", 4)
  }),

  // Mercedes C300 2018 Foreign used 23m
  carItem({
    id: "mb-c300-2018-foreign",
    brand: "Mercedes",
    bodyType: "Sedan",
    model: "C300",
    year: 2018,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦23,000,000",
    images: imgs("assets/cars/mercedes-c300-2018", 4)
  }),

  // Toyota Corolla 2007 NG used 6.5m
  carItem({
    id: "ty-corolla-2007-ng-65",
    brand: "Toyota",
    bodyType: "Compact",
    model: "Corolla",
    year: 2007,
    condition: "NG Used",
    status: "available",
    priceText: "₦6,500,000",
    images: imgs("assets/cars/toyota-corolla-2007-ng-65", 4)
  }),

  // Toyota Corolla 2017 Foreign used 20m
  carItem({
    id: "ty-corolla-2017-foreign",
    brand: "Toyota",
    bodyType: "Compact",
    model: "Corolla",
    year: 2017,
    condition: "Foreign Used",
    status: "available",
    priceText: "₦20,000,000",
    images: imgs("assets/cars/toyota-corolla-2017", 4)
  }),

  // Toyota Corolla 2007 NG drive 7.5m
  carItem({
    id: "ty-corolla-2007-ng-75",
    brand: "Toyota",
    bodyType: "Compact",
    model: "Corolla",
    year: 2007,
    condition: "NG Used",
    status: "available",
    priceText: "₦7,500,000",
    images: imgs("assets/cars/toyota-corolla-2007-ng-75", 4)
  }),

  // Lexus RX330 2006 NG drive 10m (this is your existing one already, but kept)
  // If you want it separate from rx330-2006-b, tell me and I will split it.
  // ----------------------------

  // ===== SOLD CARS (2 images only) =====
  carItem({
    id: "lx-rx330-2006-foreign-sold",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2006,
    condition: "Foreign Used",
    status: "sold",
    images: imgs("assets/cars/sold-lexus-rx330-2006-foreign", 2)
  }),

  carItem({
    id: "mb-ml350-2012-foreign-sold",
    brand: "Mercedes",
    bodyType: "SUV",
    model: "ML350",
    year: 2012,
    condition: "Foreign Used",
    status: "sold",
    images: imgs("assets/cars/sold-mercedes-ml350-2012-foreign", 2)
  }),

  carItem({
    id: "ty-camry-spider-2008-color-1-sold",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry Spider (Color 1)",
    year: 2008,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-toyota-camry-spider-2008-color1", 2)
  }),

  carItem({
    id: "ty-camry-spider-2008-color-2-sold",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry Spider (Color 2)",
    year: 2008,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-toyota-camry-spider-2008-color2", 2)
  }),

  carItem({
    id: "mb-ml350-2008-ng-sold",
    brand: "Mercedes",
    bodyType: "SUV",
    model: "ML350",
    year: 2008,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-mercedes-ml350-2008-ng", 2)
  }),

  carItem({
    id: "mb-glk350-2010-sold",
    brand: "Mercedes",
    bodyType: "SUV",
    model: "GLK350",
    year: 2010,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-mercedes-glk350-2010", 2)
  }),

  carItem({
    id: "ty-camry-2013-foreign-sold",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry",
    year: 2013,
    condition: "Foreign Used",
    status: "sold",
    images: imgs("assets/cars/sold-toyota-camry-2013-foreign", 2)
  }),

  carItem({
    id: "mb-c350-2013-ng-sold",
    brand: "Mercedes",
    bodyType: "Sedan",
    model: "C350",
    year: 2013,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-mercedes-c350-2013-ng", 2)
  }),

  carItem({
    id: "lx-rx350-2012-ng-sold",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350",
    year: 2012,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-lexus-rx350-2012-ng", 2)
  }),

  carItem({
    id: "lx-es350-2008-ng-sold",
    brand: "Lexus",
    bodyType: "Sedan",
    model: "ES350",
    year: 2008,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-lexus-es350-2008-ng", 2)
  }),

  carItem({
    id: "lx-rx350-2011-ng-sold",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350",
    year: 2011,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-lexus-rx350-2011-ng", 2)
  }),

  carItem({
    id: "ty-camry-2005-ng-sold",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry",
    year: 2005,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-toyota-camry-2005-ng", 2)
  }),

  carItem({
    id: "ty-corolla-2016-ng-sold",
    brand: "Toyota",
    bodyType: "Compact",
    model: "Corolla",
    year: 2016,
    condition: "NG Used",
    status: "sold",
    images: imgs("assets/cars/sold-toyota-corolla-2016-ng", 2)
  })
];

// ============================
// Helpers / UI Logic
// ============================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function waLink(message) {
  return `https://wa.me/${WHATSAPP_INT}?text=${encodeURIComponent(message)}`;
}

function uniqueBrands(cars) {
  return [...new Set(cars.map(c => c.brand))].sort((a, b) => a.localeCompare(b));
}

function groupByBrand(cars) {
  const map = new Map();
  for (const c of cars) {
    if (!map.has(c.brand)) map.set(c.brand, []);
    map.get(c.brand).push(c);
  }
  return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

function matchesFilters(car, filters) {
  const brandOk = filters.brand === "all" || car.brand === filters.brand;
  const typeOk = filters.type === "all" || car.bodyType === filters.type;
  const conditionOk = filters.condition === "all" || car.condition === filters.condition;

  const q = filters.q.trim().toLowerCase();
  const qOk = !q || [
    car.title, car.brand, car.model, car.bodyType, car.condition, String(car.year),
    (car.features || []).join(" ")
  ].join(" ").toLowerCase().includes(q);

  return brandOk && typeOk && conditionOk && qOk;
}

function getFirstImage(car) {
  const fallback = "assets/cars/placeholder.jpg";
  if (!car.images || car.images.length === 0) return fallback;
  return car.images[0];
}

function createCarCard(car) {
  const card = document.createElement("article");
  card.className = "carCard";

  const isSold = car.status === "sold";
  if (isSold) card.classList.add("isSold");

  const displayImages = isSold ? (car.images || []).slice(0, 2) : (car.images || []);
  const mainImg = displayImages[0] || getFirstImage(car);
  const thumbs = displayImages.slice(0, 8);

  const hasVideo = !!(car.videoUrl && car.videoUrl.trim());
  const dmVideoMsg = `Hi ${DEALER.name}, please send a LIVE VIDEO for: ${car.title} (${car.condition}).`;
  const videoHref = hasVideo ? car.videoUrl : waLink(dmVideoMsg);

  const pillClass = isSold ? "pill pill--sold" : "pill pill--available";
  const availabilityText = isSold ? "SOLD OUT" : "AVAILABLE";

  const dmMsg = isSold
    ? `Hi ${DEALER.name}, I saw this SOLD car: ${car.title}. Please tell me the price and show similar AVAILABLE options.`
    : `Hi ${DEALER.name}, I'm interested in: ${car.title} (${car.condition}). Price: ${car.priceText}. Please confirm availability and send details.`;

  const thumbsHTML = thumbs.length
    ? thumbs.map((src, i) => `
      <div class="thumb ${i === 0 ? "isActive" : ""}" data-src="${src}">
        <img src="${src}" alt="${car.title} photo ${i + 1}" loading="lazy" onerror="this.src='assets/cars/placeholder.jpg'">
      </div>`).join("")
    : `<span class="muted small">${isSold ? "Upload 2 photos for sold cars" : "Upload 4+ photos to enable gallery"}</span>`;

  const featuresHTML = (!isSold && car.features && car.features.length)
    ? `<div class="metaRow">${car.features.slice(0, 4).map(f => `<span>• ${f}</span>`).join(" ")}</div>`
    : "";

  card.innerHTML = `
    <div class="gallery">
      <div class="gallery__main">
        <span class="${pillClass}">${availabilityText} • ${car.condition}</span>
        <img class="js-mainImg" src="${mainImg}" alt="${car.title}" loading="lazy"
          onerror="this.src='assets/cars/placeholder.jpg'" />
      </div>
      <div class="gallery__thumbs js-thumbs">${thumbsHTML}</div>
    </div>

    <div class="carBody">
      <h4 class="carTitle">${car.title}</h4>

      <div class="metaRow">
        <span><strong>${car.brand}</strong></span>
        <span>•</span>
        <span>${car.bodyType}</span>
        <span>•</span>
        <span>${car.year}</span>
      </div>

      ${
        isSold
          ? `<div class="metaRow"><span class="muted"><strong>DM for price</strong> • Request similar available cars</span></div>`
          : `<div class="priceRow">
               <span class="price">${car.priceText}</span>
               <span class="muted" style="font-size:12px;">${car.model}</span>
             </div>`
      }

      ${featuresHTML}

      <div class="cardBtns">
        <a class="btn btn--ghost" href="${videoHref}" target="${hasVideo ? "_blank" : "_self"}">
          ${hasVideo ? "Watch Live Video" : "DM for Live Video"}
        </a>
        <a class="btn btn--primary" href="${waLink(dmMsg)}">
          ${isSold ? "Ask Price (DM)" : "DM / Buy"}
        </a>
      </div>
    </div>
  `;

  const main = card.querySelector(".js-mainImg");
  const thumbsWrap = card.querySelector(".js-thumbs");
  if (thumbsWrap && thumbs.length) {
    thumbsWrap.addEventListener("click", (e) => {
      const thumb = e.target.closest(".thumb");
      if (!thumb) return;
      const src = thumb.dataset.src;
      if (!src) return;
      main.src = src;
      thumbsWrap.querySelectorAll(".thumb").forEach(t => t.classList.remove("isActive"));
      thumb.classList.add("isActive");
    });
  }

  return card;
}

function createBrandBlock(brand, cars, { mode = "available" } = {}) {
  const block = document.createElement("section");
  block.className = "brandBlock";

  const subtitle = mode === "sold"
    ? `${cars.length} sold car(s) • DM to ask price`
    : `${cars.length} option(s) • Auto-scroll enabled`;

  block.innerHTML = `
    <div class="brandBlock__head">
      <div>
        <h3>${brand}</h3>
        <p>${subtitle}</p>
      </div>
      <div class="brandControls">
        <button class="iconBtn js-prev" type="button" aria-label="Scroll left">‹</button>
        <button class="iconBtn js-next" type="button" aria-label="Scroll right">›</button>
      </div>
    </div>
    <div class="slider">
      <div class="track" tabindex="0"></div>
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

  prevBtn.addEventListener("click", () => track.scrollBy({ left: -scrollByAmount(), behavior: "smooth" }));
  nextBtn.addEventListener("click", () => track.scrollBy({ left: scrollByAmount(), behavior: "smooth" }));

  // Auto-slide only for available
  if (mode !== "sold") {
    let autoTimer = null;
    const startAuto = () => {
      if (autoTimer) return;
      autoTimer = setInterval(() => {
        const max = track.scrollWidth - track.clientWidth;
        const atEnd = track.scrollLeft >= max - 4;
        if (atEnd) track.scrollTo({ left: 0, behavior: "smooth" });
        else track.scrollBy({ left: scrollByAmount(), behavior: "smooth" });
      }, 2800);
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
      entries.forEach(e => e.isIntersecting ? startAuto() : stopAuto());
    }, { threshold: 0.25 });

    io.observe(block);
  }

  return block;
}

function renderInventory() {
  const filters = {
    brand: $("#brandFilter").value,
    type: $("#typeFilter").value,
    condition: $("#conditionFilter").value,
    q: $("#searchInput").value
  };

  const availableCars = CARS.filter(c => c.status !== "sold");
  const filtered = availableCars.filter(c => matchesFilters(c, filters));
  const grouped = groupByBrand(filtered);

  const host = $("#brandSections");
  host.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<h3>No cars found</h3><p class="muted">Try changing filters or search keywords.</p>`;
    host.appendChild(empty);
    return;
  }

  for (const [brand, cars] of grouped.entries()) {
    host.appendChild(createBrandBlock(brand, cars, { mode: "available" }));
  }
}

function renderSold() {
  const soldCars = CARS.filter(c => c.status === "sold");
  const host = $("#soldSections");
  host.innerHTML = "";

  if (soldCars.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <h3>Sold cars will soon be displayed</h3>
      <p class="muted">Once a car is sold, we’ll show it here with 2 photos. Buyers can DM to ask the price.</p>
      <div class="soldHint"><strong>How to mark sold:</strong> Change <code>status: "available"</code> to <code>status: "sold"</code> in script.js then push to GitHub.</div>
    `;
    host.appendChild(empty);
    return;
  }

  const grouped = groupByBrand(soldCars);
  for (const [brand, cars] of grouped.entries()) {
    host.appendChild(createBrandBlock(brand, cars, { mode: "sold" }));
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

function setupFilters() {
  const rerender = () => renderInventory();

  $("#brandFilter").addEventListener("change", rerender);
  $("#typeFilter").addEventListener("change", rerender);
  $("#conditionFilter").addEventListener("change", rerender);

  const input = $("#searchInput");
  let t = null;
  input.addEventListener("input", () => {
    if (t) clearTimeout(t);
    t = setTimeout(rerender, 180);
  });

  $("#resetFilters").addEventListener("click", () => {
    $("#brandFilter").value = "all";
    $("#typeFilter").value = "all";
    $("#conditionFilter").value = "all";
    $("#searchInput").value = "";
    renderInventory();
  });
}

function setupWhatsAppButtons() {
  const baseMsg = `Hi ${DEALER.name}, I’m interested in your available cars. Please share current stock and prices.`;
  const href = waLink(baseMsg);

  $("#whatsappTop").href = href;
  $("#whatsappMobile").href = href;
  $("#floatWA").href = href;
  $("#heroWhatsApp").href = href;
  $("#contactWhatsApp").href = href;

  $("#noticeWhatsApp").href = waLink(
    `Hi ${DEALER.name}, please notify me when Hyundai and Honda are available. Also, I want to make enquiries.`
  );

  $("#referralWhatsApp").href = waLink(
    `Hi ${DEALER.name}, I want to refer a buyer. Please share the referral steps and payout confirmation.`
  );

  $("#soldWhatsApp").href = waLink(
    `Hi ${DEALER.name}, I saw some sold cars on your site. Please show me similar AVAILABLE options.`
  );

  $("#featuredWhatsApp").href = href;
}

function setupFeatured() {
  const available = CARS.filter(c => c.status !== "sold");
  const car = available[0] || CARS[0];
  if (!car) return;

  $("#featuredImg").src = getFirstImage(car);
  $("#featuredTitle").textContent = car.title;
  $("#featuredSub").textContent = `${car.brand} • ${car.bodyType} • ${car.condition} • AVAILABLE`;
  $("#featuredPrice").textContent = car.priceText || "DM for price";

  $("#featuredWhatsApp").href = waLink(
    `Hi ${DEALER.name}, I'm interested in: ${car.title} (${car.condition}). Please confirm availability and send details.`
  );
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

    const composed =
      `Hi ${DEALER.name}, my name is ${name}. Phone: ${phone}. ` +
      (msg ? `Message: ${msg}` : "I want to make an enquiry about available cars.");

    window.open(waLink(composed), "_blank");
    form.reset();
  });
}

function setupReferralForm() {
  const form = $("#referralForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(form);

    const refName = (fd.get("refName") || "").toString().trim();
    const buyerName = (fd.get("buyerName") || "").toString().trim();
    const buyerPhone = (fd.get("buyerPhone") || "").toString().trim();
    const refMessage = (fd.get("refMessage") || "").toString().trim();

    const msg =
      `Hi ${DEALER.name}, I have a referral.\n\n` +
      `Referrer: ${refName}\n` +
      (buyerName ? `Buyer Name: ${buyerName}\n` : "") +
      (buyerPhone ? `Buyer Phone: ${buyerPhone}\n` : "") +
      (refMessage ? `Request: ${refMessage}\n` : "") +
      `\nPlease confirm the next steps.`;

    window.open(waLink(msg), "_blank");
    form.reset();
  });
}

function initStaticText() {
  $("#year").textContent = new Date().getFullYear();
  $("#addressText").textContent = DEALER.address;
  $("#addressCardText").textContent = DEALER.address;
  $("#hoursText").textContent = DEALER.hours;
  $("#hoursCardText").textContent = DEALER.hours;
}

function renderAll() {
  renderInventory();
  renderSold();
}

function renderInventory() {
  const filters = {
    brand: $("#brandFilter").value,
    type: $("#typeFilter").value,
    condition: $("#conditionFilter").value,
    q: $("#searchInput").value
  };

  const availableCars = CARS.filter(c => c.status !== "sold");
  const filtered = availableCars.filter(c => matchesFilters(c, filters));
  const grouped = groupByBrand(filtered);

  const host = $("#brandSections");
  host.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `<h3>No cars found</h3><p class="muted">Try changing filters or search keywords.</p>`;
    host.appendChild(empty);
    return;
  }

  for (const [brand, cars] of grouped.entries()) {
    host.appendChild(createBrandBlock(brand, cars, { mode: "available" }));
  }
}

function renderSold() {
  const soldCars = CARS.filter(c => c.status === "sold");
  const host = $("#soldSections");
  host.innerHTML = "";

  if (soldCars.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <h3>Sold cars will soon be displayed</h3>
      <p class="muted">Once a car is sold, we’ll show it here with 2 photos. Buyers can DM to ask the price.</p>
      <div class="soldHint"><strong>How to mark sold:</strong> Change <code>status: "available"</code> to <code>status: "sold"</code> in script.js then push to GitHub.</div>
    `;
    host.appendChild(empty);
    return;
  }

  const grouped = groupByBrand(soldCars);
  for (const [brand, cars] of grouped.entries()) {
    host.appendChild(createBrandBlock(brand, cars, { mode: "sold" }));
  }
}

// ============================
// INIT
// ============================
fillBrandDropdown();
setupWhatsAppButtons();
setupFeatured();
setupMobileMenu();
setupLeadForm();
setupReferralForm();
setupFilters();
initStaticText();
renderAll();

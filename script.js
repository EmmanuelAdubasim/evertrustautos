// ============================
// Evertrust Autos Config
// ============================
const DEALER = {
  name: "Evertrust Autos",
  whatsappNumberLocal: "09034251005",
  address: "Opposite Drug Office, Naze by Wetheral Road, Owerri, Imo State",
  hours: "Mon–Sat: 8:30am – 7:00pm | Sunday: Closed (Opens on Appointment)"
};

// Convert Nigerian local phone to international for wa.me
function toWhatsAppInternational(local) {
  const raw = (local || "").trim().replace(/\s+/g, "");
  if (!raw) return "";
  if (raw.startsWith("+")) return raw.replace("+", "");
  if (raw.startsWith("234")) return raw;
  if (raw.startsWith("0")) return "234" + raw.slice(1);
  return raw;
}

const WHATSAPP_INT = toWhatsAppInternational(DEALER.whatsappNumberLocal);

// Quick template creator (keeps car entries consistent)
function carItem({
  id,
  brand,
  bodyType,
  model,
  year,
  condition,      // "Foreign Used" | "NG Used"
  priceText,      // e.g. "₦47,000,000"
  images,         // minimum 4 images
  videoUrl = ""   // optional
}) {
  return {
    id,
    brand,
    bodyType,
    model,
    year,
    condition,
    title: `${brand} ${model} (${year})`,
    priceText,
    images,
    videoUrl
  };
}

// ============================
// Inventory (YOUR CURRENT PRODUCTS)
// - images: merged interior/exterior, add at least 4
// - videoUrl: optional. If missing => button shows "DM for Live Video"
// ============================
const CARS = [
  carItem({
    id: "lx-rx350-2018",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350",
    year: 2018,
    condition: "Foreign Used",
    priceText: "₦47,000,000",
    images: [
      "assets/cars/lexus-rx350-2018-1.jpg",
      "assets/cars/lexus-rx350-2018-2.jpg",
      "assets/cars/lexus-rx350-2018-3.jpg",
      "assets/cars/lexus-rx350-2018-4.jpg"
    ],
    videoUrl: "" // add later if you have a link
  }),

  carItem({
    id: "ty-camry-spider-2010",
    brand: "Toyota",
    bodyType: "Sedan",
    model: "Camry Spider",
    year: 2010,
    condition: "NG Used",
    priceText: "₦9,000,000",
    images: [
      "assets/cars/camry-spider-2010-1.jpg",
      "assets/cars/camry-spider-2010-2.jpg",
      "assets/cars/camry-spider-2010-3.jpg",
      "assets/cars/camry-spider-2010-4.jpg"
    ]
  }),

  carItem({
    id: "lx-rx350-2012-facelift",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX350 (2012 → 2015 Facelift)",
    year: 2012,
    condition: "NG Used",
    priceText: "₦18,900,000",
    images: [
      "assets/cars/rx350-2012-facelift-1.jpg",
      "assets/cars/rx350-2012-facelift-2.jpg",
      "assets/cars/rx350-2012-facelift-3.jpg",
      "assets/cars/rx350-2012-facelift-4.jpg"
    ]
  }),

  carItem({
    id: "lx-es350-2010",
    brand: "Lexus",
    bodyType: "Sedan",
    model: "ES350",
    year: 2010,
    condition: "NG Used",
    priceText: "₦10,000,000",
    images: [
      "assets/cars/es350-2010-1.jpg",
      "assets/cars/es350-2010-2.jpg",
      "assets/cars/es350-2010-3.jpg",
      "assets/cars/es350-2010-4.jpg"
    ]
  }),

  carItem({
    id: "lx-rx330-2006-97",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2006,
    condition: "NG Used",
    priceText: "₦9,700,000",
    images: [
      "assets/cars/rx330-2006-a-1.jpg",
      "assets/cars/rx330-2006-a-2.jpg",
      "assets/cars/rx330-2006-a-3.jpg",
      "assets/cars/rx330-2006-a-4.jpg"
    ]
  }),

  carItem({
    id: "lx-rx330-2007-105",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2007,
    condition: "NG Used",
    priceText: "₦10,500,000",
    images: [
      "assets/cars/rx330-2007-1.jpg",
      "assets/cars/rx330-2007-2.jpg",
      "assets/cars/rx330-2007-3.jpg",
      "assets/cars/rx330-2007-4.jpg"
    ]
  }),

  carItem({
    id: "lx-rx330-2006-10m",
    brand: "Lexus",
    bodyType: "SUV",
    model: "RX330",
    year: 2006,
    condition: "NG Used",
    priceText: "₦10,000,000",
    images: [
      "assets/cars/rx330-2006-b-1.jpg",
      "assets/cars/rx330-2006-b-2.jpg",
      "assets/cars/rx330-2006-b-3.jpg",
      "assets/cars/rx330-2006-b-4.jpg"
    ]
  })
];

// Brands coming soon (not in inventory yet)
const COMING_SOON_BRANDS = ["Hyundai", "Honda"];

// ============================
// Helpers
// ============================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function waLink(message) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_INT}?text=${text}`;
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
  const qOk = !q || [car.title, car.brand, car.model, car.bodyType, car.condition, String(car.year)]
    .join(" ")
    .toLowerCase()
    .includes(q);

  return brandOk && typeOk && conditionOk && qOk;
}

function getFirstImage(car) {
  const fallback = "assets/cars/placeholder.jpg";
  if (!car.images || car.images.length === 0) return fallback;
  return car.images[0];
}

// ============================
// Card + Gallery
// ============================
function createCarCard(car) {
  const card = document.createElement("article");
  card.className = "carCard";

  const mainImg = getFirstImage(car);
  const thumbs = (car.images || []).slice(0, 8);

  const hasVideo = !!(car.videoUrl && car.videoUrl.trim());
  const dmMsg = `Hi ${DEALER.name}, please send a LIVE VIDEO for: ${car.title} (${car.condition}). Price: ${car.priceText}.`;
  const videoHref = hasVideo ? car.videoUrl : waLink(dmMsg);

  card.innerHTML = `
    <div class="gallery">
      <div class="gallery__main">
        <span class="pill">${car.condition}</span>
        <img class="js-mainImg"
             src="${mainImg}"
             alt="${car.title}"
             loading="lazy"
             onerror="this.src='assets/cars/placeholder.jpg'" />
      </div>

      <div class="gallery__thumbs js-thumbs" aria-label="More photos">
        ${thumbs.map((src, i) => `
          <div class="thumb ${i === 0 ? "isActive" : ""}" data-src="${src}">
            <img src="${src}" alt="${car.title} photo ${i + 1}" loading="lazy" onerror="this.src='assets/cars/placeholder.jpg'">
          </div>
        `).join("")}
      </div>
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

      <div class="priceRow">
        <span class="price">${car.priceText}</span>
        <span class="muted" style="font-size:12px;">${car.model}</span>
      </div>

      <div class="cardBtns">
        <a class="btn btn--ghost js-video" href="${videoHref}" target="${hasVideo ? "_blank" : "_self"}">
          ${hasVideo ? "Watch Live Video" : "DM for Live Video"}
        </a>
        <a class="btn btn--primary js-wa" href="#">
          DM / Buy
        </a>
      </div>
    </div>
  `;

  const waBtn = card.querySelector(".js-wa");
  const enquiry = `Hi ${DEALER.name}, I'm interested in: ${car.title} (${car.condition}). Price: ${car.priceText}. Please confirm availability and send more photos / details.`;
  waBtn.href = waLink(enquiry);

  // Thumbnail click changes main image
  const main = card.querySelector(".js-mainImg");
  const thumbsWrap = card.querySelector(".js-thumbs");

  if (thumbsWrap) {
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

// ============================
// Brand block + slider
// ============================
function createBrandBlock(brand, cars) {
  const block = document.createElement("section");
  block.className = "brandBlock";

  block.innerHTML = `
    <div class="brandBlock__head">
      <div>
        <h3>${brand}</h3>
        <p>${cars.length} option(s) • Scroll or use arrows • Auto-scroll enabled</p>
      </div>
      <div class="brandControls">
        <button class="iconBtn js-prev" type="button" aria-label="Scroll left">‹</button>
        <button class="iconBtn js-next" type="button" aria-label="Scroll right">›</button>
      </div>
    </div>
    <div class="slider">
      <div class="track" tabindex="0" aria-label="${brand} inventory slider"></div>
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

  // Auto-scroll (pause on hover/touch)
  let autoTimer = null;

  const startAuto = () => {
    if (autoTimer) return;
    autoTimer = setInterval(() => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const atEnd = track.scrollLeft >= maxScroll - 4;
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
    for (const e of entries) {
      if (e.isIntersecting) startAuto();
      else stopAuto();
    }
  }, { threshold: 0.25 });

  io.observe(block);

  return block;
}

// ============================
// Render
// ============================
function renderInventory() {
  const filters = {
    brand: $("#brandFilter").value,
    type: $("#typeFilter").value,
    condition: $("#conditionFilter").value,
    q: $("#searchInput").value
  };

  const filtered = CARS.filter(c => matchesFilters(c, filters));
  const grouped = groupByBrand(filtered);

  const host = $("#brandSections");
  host.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.innerHTML = `
      <h3>No cars found</h3>
      <p class="muted">Try changing filters or search keywords.</p>
    `;
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

  $("#featuredWhatsApp").href = href;
}

function setupFeatured() {
  const car = CARS[0];
  if (!car) return;

  $("#featuredImg").src = getFirstImage(car);
  $("#featuredTitle").textContent = car.title;
  $("#featuredSub").textContent = `${car.brand} • ${car.bodyType} • ${car.condition}`;
  $("#featuredPrice").textContent = car.priceText;

  $("#featuredWhatsApp").href = waLink(
    `Hi ${DEALER.name}, I'm interested in the featured car: ${car.title} (${car.condition}). Price: ${car.priceText}. Please confirm availability and send details.`
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

function initStaticText() {
  $("#year").textContent = new Date().getFullYear();

  $("#addressText").textContent = DEALER.address;
  $("#addressCardText").textContent = DEALER.address;

  $("#hoursText").textContent = DEALER.hours;
  $("#hoursCardText").textContent = DEALER.hours;
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
renderInventory();

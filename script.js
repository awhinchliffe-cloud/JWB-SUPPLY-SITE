/* =================================================================
   JWB SUPPLY — SITE RENDERER
   Reads content from data.js (SITE_DATA) and fills in the page.
   No build step, no dependencies — plain DOM.
   ================================================================= */

(function () {
  "use strict";

  const d = window.SITE_DATA;
  if (!d) {
    console.error("SITE_DATA not found — check that data.js loaded before script.js");
    return;
  }

  const $ = (id) => document.getElementById(id);
  const el = (tag, opts = {}) => {
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.text) node.textContent = opts.text;
    if (opts.html) node.innerHTML = opts.html;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  };

  /* ---------- NAV ---------- */
  const navList = $("navList");
  d.nav.forEach((item) => {
    const li = el("li");
    const a = el("a", { text: item.label, attrs: { href: item.href } });
    li.appendChild(a);
    navList.appendChild(li);
  });

  const footerQuickLinks = $("footerQuickLinks");
  d.footer.quickLinks.forEach((item) => {
    const li = el("li");
    li.appendChild(el("a", { text: item.label, attrs: { href: item.href } }));
    footerQuickLinks.appendChild(li);
  });

  const navToggle = $("navToggle");
  const siteHeader = $("siteHeader");
  navToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navList.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      siteHeader.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- HERO ---------- */
  $("heroKicker").textContent = d.hero.kicker;

  const headline = $("heroHeadline");
  d.hero.headlineLines.forEach((line) => {
    headline.appendChild(el("span", { text: line }));
  });

  $("heroBody").textContent = d.hero.body;

  const heroCta = $("heroCta");
  heroCta.textContent = d.hero.ctaLabel;
  heroCta.setAttribute("href", d.hero.ctaHref);

  const heroStats = $("heroStats");
  d.hero.stats.forEach((stat) => {
    const row = el("div", { class: "hero-stat" });
    row.appendChild(el("span", { class: "value", text: stat.value }));
    row.appendChild(el("span", { class: "label", text: stat.label }));
    heroStats.appendChild(row);
  });

  /* ---------- PRODUCTS ---------- */
  $("productsLabel").textContent = d.products.label;
  $("productsHeading").textContent = d.products.heading;
  $("productsBody").textContent = d.products.body;

  const productList = $("productList");
  d.products.items.forEach((item, i) => {
    const row = el("div", { class: "product-row" });
    row.appendChild(el("span", { class: "idx", text: String(i + 1).padStart(2, "0") }));
    row.appendChild(el("h3", { text: item.name }));
    row.appendChild(el("p", { class: "desc", text: item.description }));
    productList.appendChild(row);
  });

  /* ---------- BRANDS ---------- */
  $("brandsLabel").textContent = d.brands.label;
  $("brandsHeading").textContent = d.brands.heading;

  const brandGrid = $("brandGrid");
  d.brands.names.forEach((name) => {
    brandGrid.appendChild(el("div", { class: "brand-cell", text: name }));
  });

  /* ---------- WHY US ---------- */
  $("whyLabel").textContent = d.why.label;
  $("whyHeading").textContent = d.why.heading;
  $("whyBody").textContent = d.why.body;

  const whyGrid = $("whyGrid");
  d.why.features.forEach((f, i) => {
    const card = el("div", { class: "why-card" });
    card.appendChild(el("span", { class: "num", text: String(i + 1).padStart(2, "0") }));
    card.appendChild(el("h3", { text: f.title }));
    card.appendChild(el("p", { text: f.description }));
    whyGrid.appendChild(card);
  });

  /* ---------- CONTACT ---------- */
  $("contactLabel").textContent = d.contact.label;
  $("contactHeading").textContent = d.contact.heading;
  $("contactBody").textContent = d.contact.body;
  $("formNote").textContent = d.contact.formNote;
  $("formSubmit").textContent = d.contact.submitLabel;

  const specPlate = $("specPlate");
  specPlate.appendChild(el("h3", { text: "Visit or call" }));

  const addrRow = el("div", { class: "spec-row" });
  addrRow.appendChild(el("span", { class: "k", text: "Address" }));
  addrRow.appendChild(el("span", {
    class: "v",
    html: `${d.business.address.line1}<br>${d.business.address.line2}`,
  }));
  specPlate.appendChild(addrRow);

  const phoneRow = el("div", { class: "spec-row" });
  phoneRow.appendChild(el("span", { class: "k", text: "Phone" }));
  phoneRow.appendChild(el("a", {
    class: "v",
    text: d.business.phoneDisplay,
    attrs: { href: `tel:${d.business.phone.replace(/[^+\d]/g, "")}` },
  }));
  specPlate.appendChild(phoneRow);

  const emailRow = el("div", { class: "spec-row" });
  emailRow.appendChild(el("span", { class: "k", text: "Email" }));
  emailRow.appendChild(el("a", {
    class: "v",
    text: d.business.email,
    attrs: { href: `mailto:${d.business.email}` },
  }));
  specPlate.appendChild(emailRow);

  const hoursRow = el("div", { class: "spec-row" });
  hoursRow.appendChild(el("span", { class: "k", text: "Hours" }));
  const hoursHtml = d.business.hours.map((h) => `${h.days}: ${h.time}`).join("<br>");
  hoursRow.appendChild(el("span", { class: "v", html: hoursHtml }));
  specPlate.appendChild(hoursRow);

  /* Contact form — front-end only. No backend is wired up, so this
     just confirms the message locally. Point the `action` at your
     form handler (e.g. Formspree, Netlify Forms) to make it live. */
  const form = $("contactForm");
  const formStatus = $("formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("fName").value.trim();
    if (!name) return;
    formStatus.textContent = `Thanks, ${name.split(" ")[0]} — this form isn't connected to an inbox yet. Call or email us directly and we'll get right back to you.`;
    form.reset();
  });

  /* ---------- FOOTER ---------- */
  $("footerTagline").textContent = d.business.tagline;

  const footerContact = $("footerContact");
  [
    { label: d.business.address.line1, href: null },
    { label: d.business.phoneDisplay, href: `tel:${d.business.phone.replace(/[^+\d]/g, "")}` },
    { label: d.business.email, href: `mailto:${d.business.email}` },
  ].forEach((item) => {
    const li = el("li");
    if (item.href) {
      li.appendChild(el("a", { text: item.label, attrs: { href: item.href } }));
    } else {
      li.appendChild(el("span", { text: item.label }));
    }
    footerContact.appendChild(li);
  });

  $("footerCopyright").textContent = d.footer.copyright;

  const footerLegal = $("footerLegal");
  d.footer.legalLinks.forEach((item) => {
    footerLegal.appendChild(el("a", { text: item.label, attrs: { href: item.href } }));
  });
})();
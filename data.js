/*
  ================================================================
  JWB SUPPLY — SITE CONTENT
  ================================================================
  Edit anything in this file to update the website. No HTML or
  CSS knowledge required — just change the text between quotes.

  Rules:
  - Keep the quotation marks " " around every piece of text.
  - Keep the commas at the end of each line.
  - Don't remove the curly braces { } or square brackets [ ].
  - Save the file and refresh the page to see changes.
  ================================================================
*/

const SITE_DATA = {

  business: {
    name: "JWB Supply",
    tagline: "Local. Trusted. Ready to help.",
    phone: "+1 (330) 424-9211",
    phoneDisplay: "(330) 424-9211",
    email: "JBettis@jwbsupply.com",
    address: {
      line1: "126 N. Market St.",
      line2: "Lisbon, OH 44432",
    },
    hours: [
      { days: "Mon – Fri", time: "8:00 AM – 5:00 PM" },
      { days: "Saturday", time: "9:00 AM – 12:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
  },

  nav: [
    { label: "Home", href: "#top" },
    { label: "Products", href: "#products" },
    { label: "Brands", href: "#brands" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    kicker: "Lisbon, Ohio — Est. local hardware supplier",
    headlineLines: ["THE TOOLS.", "THE BRANDS.", "THE SUPPLY."],
    body: "From professional contractors to weekend builders, we stock the tools, equipment, and supplies you need to get the job done right — with the advice to back it up.",
    ctaLabel: "Get in touch",
    ctaHref: "#contact",
    stats: [
      { value: "24+", label: "brands on the shelf" },
      { value: "6", label: "days open a week" },
      { value: "1", label: "counter that knows your name" },
    ],
  },

  products: {
    label: "What we offer",
    heading: "Tools, equipment & supplies for every job",
    body: "We stock a wide range of professional-grade tools, equipment, and accessories for contractors, builders, and DIYers alike.",
    items: [
      {
        name: "Air Nailers & Fasteners",
        description: "Framing, finish, and roofing nailers plus the fasteners to match.",
      },
      {
        name: "Power & Air Tools",
        description: "Corded, cordless, and pneumatic tools from brands built for the jobsite.",
      },
      {
        name: "Woodworking Tools",
        description: "Blades, bits, and precision tools for cabinetry and framing alike.",
      },
      {
        name: "Machinery & Accessories",
        description: "Compressors, generators, and the parts that keep them running.",
      },
      {
        name: "And Much More",
        description: "If it belongs in a work truck, there's a good chance we carry it — ask the counter.",
      },
    ],
  },

  brands: {
    label: "Top brands we carry",
    heading: "Names you already trust on the jobsite",
    // Add or remove brand names freely — the layout adjusts automatically.
    names: [
      "DeWalt", "Milwaukee", "Makita", "Bosch", "Stanley",
      "Ridgid", "Hitachi", "Senco", "Paslode", "Bostitch",
      "Porter-Cable", "Metabo HPT", "Klein Tools", "Irwin",
      "3M", "Simpson Strong-Tie", "Werner", "Husqvarna",
      "Honda Power", "Champion", "Freud", "Diablo", "CS Unitec", "Rockwell",
    ],
  },

  why: {
    label: "Why shop with JWB Supply",
    heading: "Built on service. Focused on you.",
    body: "We're more than a store — we're your partner in getting the job done right. Whether you're tackling a big build or a small repair, we're here to help with the products, knowledge, and service you can trust.",
    features: [
      {
        title: "Expert advice",
        description: "Get matched with the right tool for the right job, every time.",
      },
      {
        title: "Local support",
        description: "A Lisbon, Ohio business, proud to serve our community.",
      },
      {
        title: "Fast & friendly",
        description: "Quick, straight answers when you need them most.",
      },
      {
        title: "Quality & trust",
        description: "Top brands and reliable products, backed by real results.",
      },
    ],
  },

  contact: {
    label: "Have a question?",
    heading: "Talk to the counter",
    body: "Send us a message and we'll get back to you — or stop by the shop during business hours.",
    formNote: "We can send you product updates and offers via email. You can opt out at any time.",
    submitLabel: "Submit",
  },

  footer: {
    quickLinks: [
      { label: "Home", href: "#top" },
      { label: "Products", href: "#products" },
      { label: "Brands", href: "#brands" },
      { label: "About Us", href: "#about" },
      { label: "Contact Us", href: "#contact" },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
    copyright: "© 2026 JWB Supply",
  },

};
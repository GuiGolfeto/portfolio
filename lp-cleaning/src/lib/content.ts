/**
 * Todo o texto e os dados do negócio ficam aqui.
 * Para transformar esta LP no mockup de um cliente, mexa só neste arquivo
 * (e troque as fotos em /public/images).
 */

export const business = {
  name: "SparkleHome",
  nameFull: "SparkleHome Cleaning",
  /* Formato E.164 — usado nos links tel: e sms: */
  phone: "+15085550142",
  phonePretty: "(508) 555-0142",
  email: "hello@sparklehome.co",
  instagram: "sparklehome.cleaning",
  cities: [
    "Framingham",
    "Natick",
    "Marlborough",
    "Ashland",
    "Hopkinton",
    "Sudbury",
    "Wayland",
    "Southborough",
  ],
} as const;

export const copy = {
  nav: {
    services: "Services",
    results: "Before & after",
    how: "How it works",
    reviews: "Reviews",
    cta: "Call now",
  },
  hero: {
    badge: "4.9 ★ on Google · 200+ homes cleaned",
    title1: "A spotless home,",
    title2: "without lifting a finger",
    sub: "Residential and commercial cleaning across Framingham and MetroWest. In-house team, supplies included, and a flat quote in a 2-minute call.",
    ctaPrimary: "Call for a free quote",
    ctaSecondary: "See before & after",
    chips: ["Insured team", "Supplies included", "Satisfaction guaranteed"],
    floatTitle: "Quote in 2 min",
    floatSub: "We pick up right away",
  },
  stats: [
    { value: "200+", label: "homes cleaned" },
    { value: "4.9★", label: "Google rating" },
    { value: "6", label: "years local" },
    { value: "100%", label: "satisfaction guarantee" },
  ],
  services: {
    eyebrow: "What we do",
    title: "A plan for every kind of clean",
    sub: "Pick what fits your home. Not sure? Message us and we'll help you choose.",
    items: [
      {
        img: "/images/svc-recorrente.jpg",
        tag: "Most booked",
        name: "Recurring cleaning",
        desc: "Weekly, biweekly or monthly. Always the same crew, who already know how you like your home.",
        bullets: ["Deep kitchen & bathrooms", "Vacuum and mop", "Beds made"],
        price: "from $120",
      },
      {
        img: "/images/svc-mudanca.jpg",
        tag: "",
        name: "Move in / move out",
        desc: "Inspection-ready cleaning so you get your full deposit back, with nothing missed.",
        bullets: ["Inside cabinets and drawers", "Inside fridge and oven", "Windows and baseboards"],
        price: "from $240",
      },
      {
        img: "/images/svc-posobra.jpg",
        tag: "",
        name: "Post-construction & deep clean",
        desc: "Fine renovation dust, carpets and upholstery. We remove what regular cleaning leaves behind.",
        bullets: ["Fine dust removal", "Upholstery washing", "Carpet sanitizing"],
        price: "custom quote",
      },
    ],
  },
  ba: {
    eyebrow: "Real results",
    title: "Drag to see the difference",
    sub: "Photos from jobs our team delivered over the past few months.",
    items: [
      { label: "Kitchen · Framingham", img: "/images/ba-kitchen.jpg" },
      { label: "Living room · Natick", img: "/images/ba-living.jpg" },
    ],
    before: "Before",
    after: "After",
    hint: "Drag to compare",
  },
  how: {
    eyebrow: "How it works",
    title: "Three steps and you're done",
    steps: [
      { n: "01", t: "Give us a call", d: "Tell us your home size and the type of cleaning. The call takes under 2 minutes." },
      { n: "02", t: "We give you a flat price", d: "Right there on the call. No in-home visit, no runaround, no surprises at the end of the job." },
      { n: "03", t: "Pick a day and relax", d: "Our crew shows up on time with every supply included." },
    ],
  },
  area: {
    eyebrow: "Where we work",
    title: "Framingham and all of MetroWest",
    sub: "Don't see your town? Give us a call and we'll confirm availability on the spot.",
  },
  reviews: {
    eyebrow: "Reviews",
    title: "Clients who never switched back",
    items: [
      { name: "Juliana M.", city: "Framingham, MA", text: "Third year with them. Always on time, nothing missed, and the house smells great for days. Worth every penny." },
      { name: "Camila R.", city: "Natick, MA", text: "Booked the move out clean expecting to lose my deposit. The landlord returned all of it and complimented the apartment." },
      { name: "Patricia L.", city: "Marlborough, MA", text: "I work all day and had no weekends left. Now I come home Friday and everything is done. It changed my routine." },
    ],
  },
  form: {
    eyebrow: "Free quote",
    title: "Get your price in 2 minutes",
    sub: "Rather not call? Fill in the fields and text it over — we reply the same day.",
    name: "Your name",
    namePh: "What should we call you?",
    city: "City",
    cityPh: "Select your city",
    type: "Cleaning type",
    size: "Home size",
    notes: "Anything else? (optional)",
    notesPh: "e.g. I have 2 dogs, please use unscented products...",
    submit: "Send as a text",
    disclaimer: "Opens your phone's messaging app with the text pre-written. You review it before sending.",
    callNow: "Call now",
    or: "or",
    types: ["Recurring cleaning", "One-time cleaning", "Move in / move out", "Post-construction"],
    sizes: ["Studio / 1 bedroom", "2 bedrooms", "3 bedrooms", "4+ bedrooms", "Commercial"],
    msgIntro: "Hi! I'd like a cleaning quote.",
    callLabel: "Call now and talk to us",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions we get every week",
    items: [
      { q: "Do I need to buy supplies?", a: "No. We bring every product and piece of equipment, included in the price. If you'd rather we use something of yours, just tell us." },
      { q: "Do I have to be home?", a: "You don't. Most of our clients leave a key or a door code. We send photos of the result when we finish." },
      { q: "What if I'm not happy with the job?", a: "Tell us within 24 hours and we come back to redo it at no cost. We've never had to do it twice for the same client." },
      { q: "Are you insured?", a: "We are. Every cleaner on the team is covered by liability insurance, and we send the certificate with the quote if you want to see it." },
      { q: "How does payment work?", a: "Zelle, Venmo, card or cash, always after the job is done. Nothing is charged upfront." },
      { q: "What is the best way to reach you?", a: "A phone call. We answer Monday through Saturday, 8am to 6pm, and quote you on the spot. Outside those hours, send a text and we get back to you the same day." },
    ],
  },
  footer: {
    tagline: "Residential and commercial cleaning in Framingham and MetroWest.",
    contact: "Contact",
    areas: "Service areas",
    hours: "Mon to Sat, 8am to 6pm",
    rights: "All rights reserved.",
    demo: "Demo site built for portfolio purposes.",
  },
  sticky: "Call now · free quote",
} as const;

export type Copy = typeof copy;

/** Link de ligação direta. */
export function telLink() {
  return `tel:${business.phone}`;
}

/**
 * Link de SMS com o texto já preenchido.
 *
 * iOS e Android divergem no separador antes do `body`: o iOS espera `&`,
 * o Android espera `?`. Detectamos o iOS para montar o formato certo.
 */
export function smsLink(message: string) {
  const isIOS =
    typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const sep = isIOS ? "&" : "?";
  return `sms:${business.phone}${sep}body=${encodeURIComponent(message)}`;
}

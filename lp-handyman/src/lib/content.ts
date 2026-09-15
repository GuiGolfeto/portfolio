/**
 * Texto e dados do negócio. Para virar o mockup de um cliente, mexa só aqui
 * e troque as fotos em /public/images.
 */

export const business = {
  name: "Ramos",
  nameFull: "Ramos Construction & Remodeling",
  phone: "+15085550117",
  phonePretty: "(508) 555-0117",
  email: "info@ramos.example",
  license: "MA HIC #000000",
  since: 2010,
  cities: [
    "Framingham", "Natick", "Marlborough", "Worcester",
    "Newton", "Wellesley", "Needham", "Sudbury",
  ],
} as const;

/** Projetos da galeria. As categorias alimentam os filtros. */
export const projects = [
  { img: "/images/p-kitchen-1.jpg", cat: "kitchen", t: "Full kitchen remodel", c: "Newton, MA", d: "8 weeks" },
  { img: "/images/p-bath-1.jpg",    cat: "bath",    t: "Master bathroom", c: "Wellesley, MA", d: "4 weeks" },
  { img: "/images/p-out-1.jpg",     cat: "outdoor", t: "Deck and pergola", c: "Framingham, MA", d: "3 weeks" },
  { img: "/images/p-kitchen-2.jpg", cat: "kitchen", t: "Kitchen and island", c: "Sudbury, MA", d: "6 weeks" },
  { img: "/images/p-bath-2.jpg",    cat: "bath",    t: "Marble bathroom", c: "Needham, MA", d: "5 weeks" },
  { img: "/images/p-out-2.jpg",     cat: "outdoor", t: "Covered patio kitchen", c: "Natick, MA", d: "5 weeks" },
  { img: "/images/p-kitchen-3.jpg", cat: "kitchen", t: "Farmhouse kitchen", c: "Marlborough, MA", d: "7 weeks" },
  { img: "/images/p-out-3.jpg",     cat: "outdoor", t: "Exterior and backyard", c: "Worcester, MA", d: "9 weeks" },
] as const;

export const copy = {
  nav: {
    services: "Services", projects: "Projects", process: "Process",
    reviews: "Reviews", cta: "Call now",
  },
  hero: {
    eyebrow: "Licensed and insured in Massachusetts",
    title1: "Remodeling that",
    title2: "adds value",
    title3: "to your home",
    sub: "Kitchens, bathrooms, decks and additions across MetroWest. Itemized quotes, timelines in writing, and a crew that cleans up before it leaves.",
    ctaPrimary: "Call for a quote",
    ctaSecondary: "See our projects",
    badgeTitle: "License",
  },
  credentials: [
    { v: "auto", l: "years in Massachusetts" },
    { v: "340+", l: "projects delivered" },
    { v: "100%", l: "licensed and insured" },
    { v: "5 years", l: "workmanship warranty" },
  ],
  services: {
    eyebrow: "Services",
    title: "From one detail to the whole job",
    sub: "We handle permits, materials, crew and schedule. You follow along without having to manage it.",
    items: [
      { n: "01", t: "Kitchens", d: "Countertops, custom cabinets, plumbing and electrical. We hand it over working, not just looking good." },
      { n: "02", t: "Bathrooms", d: "Waterproofing done right, tile, glass enclosures and ventilation that meets code." },
      { n: "03", t: "Decks and outdoor", d: "Decks, pergolas, fencing and landscaping, in treated lumber built to take the winter." },
      { n: "04", t: "Additions and basements", d: "More usable square footage, with approved plans and inspections we walk through ourselves." },
      { n: "05", t: "Painting and finishes", d: "Interior and exterior, with surface prep that makes the paint last years instead of months." },
    ],
  },
  projects: {
    eyebrow: "Projects",
    title: "The work speaks for us",
    sub: "A sample of what we have delivered around the area in recent years.",
    filters: [
      { id: "all", label: "All" },
      { id: "kitchen", label: "Kitchens" },
      { id: "bath", label: "Bathrooms" },
      { id: "outdoor", label: "Outdoor" },
    ],
    empty: "No projects in this category yet.",
  },
  process: {
    eyebrow: "Process",
    title: "No surprises halfway through",
    steps: [
      { n: "01", t: "Visit and measure", d: "We come to you, measure everything and understand what you want. Free, no obligation." },
      { n: "02", t: "Itemized quote", d: "Materials, labor and timeline line by line, in writing. The quoted price is the final price." },
      { n: "03", t: "Build on schedule", d: "You get progress photos every week and always know exactly which stage we are in." },
      { n: "04", t: "Handover and warranty", d: "Final walkthrough with you, punch list included, and a 5-year workmanship warranty." },
    ],
  },
  reviews: {
    eyebrow: "Reviews",
    title: "Homeowners who lived through it",
    items: [
      { name: "Marcos T.", city: "Newton, MA", text: "They did our whole kitchen. On schedule, on budget, and the crew cleaned up every day before leaving. I brought them back for the bathroom." },
      { name: "Sarah K.", city: "Wellesley, MA", text: "I got three quotes. Ramos was the only one that walked me through every line item. That is what decided it for me." },
      { name: "Renata C.", city: "Framingham, MA", text: "New deck finished before summer, exactly like the drawing. Two winters later it looks the same as day one." },
    ],
  },
  form: {
    eyebrow: "Get a quote",
    title: "Tell us what you want to build",
    sub: "Want it sorted now? Call and we talk it through. Otherwise send the details and we get back within one business day.",
    callLabel: "Call and talk to us",
    name: "Your name", namePh: "What should we call you?",
    city: "City", cityPh: "Select your city",
    type: "Project type",
    budget: "Budget range",
    notes: "Tell us about the project",
    notesPh: "e.g. 130 sq ft kitchen, want to replace counters, cabinets and flooring...",
    photos: "Photos of the space (optional)",
    photosHint: "Helps a lot with an accurate price. JPG or PNG.",
    photosBtn: "Choose photos",
    photosNone: "No photos selected",
    submit: "Send as a text",
    disclaimer: "Opens your phone's messaging app with the text pre-written. You review it before sending, and attach the photos in the chat.",
    types: ["Kitchen", "Bathroom", "Deck / outdoor", "Addition or basement", "Painting", "Other"],
    budgets: ["Up to $15,000", "$15,000 to $40,000", "$40,000 to $80,000", "Over $80,000", "Not sure yet"],
    msgIntro: "Hi! I'd like a remodeling quote.",
  },
  area: {
    eyebrow: "Where we work",
    title: "MetroWest and Greater Boston",
    sub: "Don't see your town? Give us a call and we'll confirm we cover your area.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "What everyone asks",
    items: [
      { q: "Are you licensed and insured?", a: "We are. We hold a Massachusetts Home Improvement Contractor license and liability insurance. We send both documents with the quote, before you decide anything." },
      { q: "Is the quote really free?", a: "It is. The visit, the measurements and the itemized quote cost nothing and commit you to nothing." },
      { q: "Can the price go up mid-job?", a: "The quoted price is the final price. It only changes if you ask for something extra, and you approve that in writing before any work starts." },
      { q: "Who handles the permits?", a: "We do. We pull the permit and walk the inspections. You never have to deal with city hall." },
      { q: "How long does a kitchen take?", a: "Six to eight weeks in most cases, from demolition day to final inspection. The timeline goes in writing on the quote." },
      { q: "Do you clean up after the work?", a: "Every day. The crew clears debris and leaves the space usable before going home, and the final cleanup is part of the price, not an extra." },
    ],
  },
  footer: {
    tagline: "Residential remodeling across MetroWest and Greater Boston since 2010.",
    contact: "Contact", areas: "Service areas", hours: "Mon to Fri, 7am to 5pm",
    rights: "All rights reserved.",
    demo: "Demo site built for portfolio purposes.",
  },
  sticky: "Call now · free quote",
} as const;

export type Copy = typeof copy;

export function telLink() {
  return `tel:${business.phone}`;
}

/**
 * Link de SMS com o texto pronto. iOS espera `&` antes do body, Android `?`.
 */
export function smsLink(message: string) {
  const isIOS =
    typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return `sms:${business.phone}${isIOS ? "&" : "?"}body=${encodeURIComponent(message)}`;
}

/**
 * Texto e dados do negócio. Para virar o mockup de um cliente, mexa só aqui
 * e troque as fotos em /public/images.
 */

export const business = {
  name: "Studio Nove",
  nameFull: "Studio Nove Barbearia",
  phone: "+15085550168",
  phonePretty: "(508) 555-0168",
  instagram: "studionove.barbearia",
  address: "412 Concord St, Framingham, MA 01702",
  addressShort: "412 Concord St · Framingham",
  mapsUrl: "https://maps.google.com/?q=412+Concord+St+Framingham+MA",
} as const;

/** Serviços: preço e duração são iguais nos dois idiomas, só o texto muda. */
export const services = [
  { id: "corte",    price: 35,  min: 45, t: "Men's haircut",     d: "Clippers, scissors and styling." },
  { id: "combo",    price: 55,  min: 75, t: "Haircut + beard",   d: "The most booked combo here.",     tag: true },
  { id: "barba",    price: 28,  min: 30, t: "Beard trim",        d: "Hot towel, straight razor and balm." },
  { id: "infantil", price: 28,  min: 40, t: "Kids' haircut",   d: "Up to age 12, patience included." },
  { id: "pezinho",  price: 15,  min: 15, t: "Neckline cleanup", d: "Touch-up between haircuts." },
  { id: "platinado",price: 120, min: 150,t: "Platinum blond",    d: "Bleach, toner and haircut." },
] as const;

export const barbers = [
  { id: "rafa", name: "Rafa",  img: "/images/team-1.jpg", r: "Razor and beard" },
  { id: "leo",  name: "Léo",   img: "/images/team-2.jpg", r: "Fades and classic cuts" },
  { id: "du",   name: "Dú",    img: "/images/team-3.jpg", r: "Color work" },
] as const;

export const gallery = [
  "/images/cut-1.jpg", "/images/cut-2.jpg", "/images/cut-3.jpg",
  "/images/cut-4.jpg", "/images/cut-5.jpg", "/images/cut-6.jpg",
] as const;

/** Grade de horários oferecida na agenda. */
export const slots = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
] as const;

export const copy = {
  nav: { services: "Services", team: "Barbers", gallery: "Cuts", booking: "Book", cta: "Call" },
  hero: {
    eyebrow: "Framingham · since 2016",
    title1: "Your cut,",
    title2: "done right",
    sub: "Brazilian barbershop in Framingham. No line, no rush, no bad haircuts.",
    ctaPrimary: "Book a chair",
    ctaSecondary: "See services",
  },
  strip: { hours: "Tue to Sat · 9am to 7pm", address: "412 Concord St, Framingham", phone: "Call to book" },
  services: {
    eyebrow: "Price list",
    title: "Services and prices",
    sub: "Flat pricing, no hidden fees. Cash, card, Zelle or Venmo.",
    tag: "Most booked",
    min: "min",
  },
  team: {
    eyebrow: "The team",
    title: "Who's cutting",
    sub: "Three barbers, each with their own specialty. You pick yours when you book.",
    spec: "Specialty",
  },
  gallery: { eyebrow: "Gallery", title: "Work from the shop", sub: "A sample of what leaves this chair every week." },
  booking: {
    eyebrow: "Booking",
    title: "Book in 3 steps",
    sub: "Pick the service, the barber and the time. We confirm by text.",
    step1: "Pick your service",
    step2: "Pick your barber",
    step3: "Pick a day and time",
    any: "No preference",
    anyDesc: "Whoever is free",
    summary: "Your booking",
    labelService: "Service",
    labelBarber: "Barber",
    labelWhen: "When",
    total: "Total",
    duration: "Duration",
    submit: "Confirm by text",
    call: "Rather call?",
    disclaimer: "Opens your messaging app with the request pre-written. Confirmation comes in the reply.",
    pickFirst: "Pick a service to continue.",
    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    closed: "Closed",
    msgIntro: "Hi! I'd like to book:",
  },
  reviews: {
    eyebrow: "Clients",
    title: "What they say",
    items: [
      { name: "Diego M.", city: "Framingham", text: "Best fade I've found since moving to the States. I book on the site Thursday and I'm in the chair Friday." },
      { name: "Anderson P.", city: "Natick", text: "I bring my son along. They actually have patience with kids, and that is worth a lot." },
      { name: "Wesley C.", city: "Marlborough", text: "Beard every week. Hot towel, straight razor, good conversation. Worth the 20-minute drive." },
    ],
  },
  visit: {
    eyebrow: "Visit",
    title: "Where and when",
    hoursTitle: "Hours",
    hours: [
      { d: "Monday", h: "Closed", closed: true },
      { d: "Tuesday to Friday", h: "9am – 7pm", closed: false },
      { d: "Saturday", h: "9am – 6pm", closed: false },
      { d: "Sunday", h: "Closed", closed: true },
    ],
    addressTitle: "Address",
    mapsCta: "Open in Google Maps",
  },
  footer: { tagline: "Brazilian barbershop in Framingham, MA.", rights: "All rights reserved.", demo: "Demo site built for portfolio purposes." },
  sticky: "Book a chair",
} as const;

export type Copy = typeof copy;

export function telLink() {
  return `tel:${business.phone}`;
}

/** iOS espera `&` antes do body, Android `?`. */
export function smsLink(message: string) {
  const isIOS =
    typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
  return `sms:${business.phone}${isIOS ? "&" : "?"}body=${encodeURIComponent(message)}`;
}

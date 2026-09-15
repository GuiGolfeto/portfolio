/** Contact details and all page copy. English only. */

export const me = {
  name: "Guilherme Golfeto",
  firstName: "Guilherme",
  role: "Full-Stack Engineer",
  email: "golfeto.dev@gmail.com",
  instagram: "guigolfeto",
  instagramUrl: "https://instagram.com/guigolfeto",

  /**
   * Sua foto, na seção Sobre.
   *
   * Salve o arquivo em /public (ex.: public/me.jpg) e troque o null pelo
   * caminho: photo: "/me.jpg". Com null, o cartão mostra o monograma GG.
   *
   * Melhor resultado: retrato, do peito para cima, rosto virado para a câmera,
   * pelo menos 800px de largura.
   */
  photo: "/me.jpg" as string | null,
};

/** The three demos, served statically from /public/demos (see scripts/build-demos.mjs). */
export const demos = [
  {
    slug: "limpeza",
    href: "/demos/limpeza",
    mockup: "/mockups/limpeza.png",
    accent: "#12A594",
    niche: "Cleaning company",
    name: "SparkleHome Cleaning",
    desc: "Lead-generation site for house cleaning, with a before/after slider the visitor drags with a finger.",
    highlights: [
      "Interactive before/after",
      "Quote in 2 taps",
      "Service area built for local search",
    ],
  },
  {
    slug: "reformas",
    href: "/demos/reformas",
    mockup: "/mockups/reformas.png",
    accent: "#C4501F",
    niche: "Remodeling and construction",
    name: "Ramos Construction",
    desc: "Trust-building site for a contractor, with a filterable project gallery and a quote request that takes photos.",
    highlights: ["Filterable gallery", "Photo upload", "License front and center"],
  },
  {
    slug: "barbearia",
    href: "/demos/barbearia",
    mockup: "/mockups/barbearia.png",
    accent: "#B9933A",
    niche: "Barbershop and salon",
    name: "Studio Nove",
    desc: "Booking site where the client picks service, barber and time without leaving the page.",
    highlights: ["3-step booking", "Price list", "Respects opening hours"],
  },
] as const;

export const copy = {
  nav: {
    work: "Work",
    included: "What's included",
    how: "How it works",
    about: "About",
    cta: "Get in touch",
  },
  hero: {
    badge: "Taking on projects",
    title1: "Your customer",
    title2: "searches Google.",
    title3: "Do you show up?",
    sub: "I build websites for local businesses that don't have one yet. Fast, built for phones, with your contact one tap away.",
    ctaPrimary: "I want a site",
    ctaSecondary: "See the work",
    chips: ["Preview before you pay", "Ready in days", "You talk to me, not a bot"],
  },
  work: {
    eyebrow: "Work",
    title: "Sites that are live",
    sub: "Open each one on your phone. These are real working sites, not presentation slides.",
    view: "Open the site",
  },
  included: {
    eyebrow: "What's included",
    title: "Everything a local business needs",
    sub: "No hidden plan, no charge per extra page.",
    items: [
      { t: "Built for phones", d: "Most of your customers open it on a phone. That's where I start the design." },
      { t: "Genuinely fast", d: "Loads in under 2 seconds. A slow site loses the customer before it appears." },
      { t: "Contact one tap away", d: "Call, text or request a quote without the customer typing your number." },
      { t: "Ready for Google", d: "Structure, headings and speed the way Google wants them to index you." },
      { t: "Launch handled", d: "I publish the site, point the domain and get it indexed. You touch nothing technical." },
      { t: "Kept running", d: "Hosting, updates and backups stay with me on a simple monthly plan. No control panels, no renewals to remember, no site going down because a card expired." },
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Four steps, no runaround",
    steps: [
      { n: "01", t: "You send me a message", d: "We talk about the business: what you do and what has to show up on the site." },
      { n: "02", t: "You see the preview", d: "I build the layout for your type of business, with sample content. You see how it will look, no obligation." },
      { n: "03", t: "We sign the contract", d: "A simple contract with the timeline and everything that is included. From there I start building the real thing: your name, your photos, your copy." },
      { n: "04", t: "Delivery and launch", d: "Revisions included, domain set up, and the site live under your name." },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Who builds your site",
    p1: "I'm Guilherme, a full-stack engineer. I write code every day, and I decided to point it at the people who need it most: the local business that is great at what it does but only exists online inside an Instagram profile.",
    p2: "A website is not decoration. It is what shows up when someone looks for your service at ten at night, decides right there whether to trust you, and finds your contact one tap away.",
    p3: "And I build the site myself, start to finish. No account manager, no support queue: the person answering your message is the person building your page.",
    facts: [
      { t: "Full-stack engineer", d: "Real code, not a template assembler." },
      { t: "See it first", d: "You look at the preview before committing to anything." },
      { t: "Same-day reply", d: "You always deal with me directly." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your site",
    sub: "Send me a message telling me what you do. I reply the same day.",
    emailLabel: "Best way to reach me",
    igLabel: "Or on Instagram",
    copy: "Copy",
    copied: "Copied",
    subject: "I'd like a website for my business",
    body: "Hi Guilherme! I run a ",
  },
  footer: { rights: "All rights reserved." },
  sticky: "Get in touch",
} as const;

export function mailtoLink(subject: string, body: string) {
  return `mailto:${me.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-iris-500">
      <span className="h-1.5 w-1.5 rounded-full bg-iris-500" />
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">{children}</p>;
}

const btn =
  "inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-sm font-bold transition " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-iris-500";

export function ButtonPrimary({
  href, children, external, className = "",
}: { href: string; children: React.ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btn} bg-ink-950 text-paper-50 shadow-lift hover:-translate-y-0.5 hover:bg-ink-800 ${className}`}
    >
      {children}
    </a>
  );
}

export function ButtonOutline({
  href, children, external, className = "",
}: { href: string; children: React.ReactNode; external?: boolean; className?: string }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${btn} border border-ink-200 bg-paper-50 text-ink-950 hover:border-ink-400 ${className}`}
    >
      {children}
    </a>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m4 7.5 7.1 5a1.6 1.6 0 0 0 1.8 0l7.1-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Moldura de celular em CSS puro, usada para emoldurar os screenshots. */
export function PhoneFrame({
  src, alt, className = "",
}: { src: string; alt: string; className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-[16rem] ${className}`}>
      <div className="relative rounded-[2.2rem] border border-ink-200 bg-ink-950 p-2 shadow-lift">
        <div className="relative aspect-[390/844] overflow-hidden rounded-[1.7rem] bg-paper-100">
          {/* eslint-disable-next-line @next/next/no-img-element -- screenshot estático, sem ganho no otimizador */}
          <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

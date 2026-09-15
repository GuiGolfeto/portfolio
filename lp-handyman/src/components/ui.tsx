/* Todos os destinos são âncoras da própria página ou tel:, então <a> basta.
   next/link aqui só gerava um prefetch abortado. */

export function Eyebrow({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] ${
        light ? "text-rust-300" : "text-rust-600"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-rust-400" : "bg-rust-500"}`} />
      {children}
    </span>
  );
}

export function SectionTitle({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <h2
      className={`mt-5 font-display text-[2.1rem] font-semibold leading-[1.1] tracking-tight sm:text-5xl ${
        light ? "text-stone-50" : "text-espresso-950"
      }`}
    >
      {children}
    </h2>
  );
}

export function SectionSub({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <p className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${light ? "text-espresso-300" : "text-espresso-600"}`}>
      {children}
    </p>
  );
}

const btnBase =
  "inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider transition " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500";

export function ButtonPrimary({
  href, children, className = "",
}: { href: string; children: React.ReactNode; className?: string }) {
  const cls = `${btnBase} rounded-lg bg-rust-500 text-stone-50 shadow-raise hover:bg-rust-600 ${className}`;
  return (
    <a href={href} className={cls}>{children}</a>
  );
}

export function ButtonOutline({
  href, children, light = false, className = "",
}: { href: string; children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <a
      href={href}
      className={`${btnBase} rounded-lg border ${
        light
          ? "border-stone-50/30 text-stone-50 hover:border-stone-50/60 hover:bg-stone-50/10"
          : "border-espresso-900/20 text-espresso-900 hover:border-espresso-900/45 hover:bg-espresso-900/5"
      } ${className}`}
    >
      {children}
    </a>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.6 3.5h2.2l1.6 4-1.9 1.4a12 12 0 0 0 5.6 5.6l1.4-1.9 4 1.6v2.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.5 11.6c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4 20l1.3-3.3a6.6 6.6 0 0 1-1.8-4.4c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1Z"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3l7 2.8v5.4c0 4.3-2.9 8.2-7 9.3-4.1-1.1-7-5-7-9.3V5.8L12 3Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8.9 11.9 11 14l4.2-4.4" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-rust-500" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.13l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

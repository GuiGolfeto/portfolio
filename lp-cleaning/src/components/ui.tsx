/* Todos os destinos são âncoras da própria página ou tel:, então <a> basta.
   next/link aqui só gerava um prefetch abortado. */

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
      <span className="h-px w-6 bg-brand-400" />
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
      {children}
    </p>
  );
}

type BtnProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ButtonPrimary({ href, children, className = "" }: BtnProps) {
  const cls =
    "group inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-4 text-base font-bold text-ink-950 shadow-lift transition " +
    "hover:-translate-y-0.5 hover:bg-accent-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950 active:translate-y-0 " +
    className;

  const inner = (
    <>
      {children}
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M3 8h10m0 0-4-4m4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );

  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

export function ButtonGhost({ href, children, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      className={
        "inline-flex items-center justify-center gap-2 rounded-full border border-ink-950/12 bg-white/70 px-7 py-4 text-base font-bold text-ink-900 backdrop-blur transition " +
        "hover:border-ink-950/25 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950 " +
        className
      }
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
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M20.5 11.6c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4 20l1.3-3.3a6.6 6.6 0 0 1-1.8-4.4c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1Z"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-accent-500" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.13l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

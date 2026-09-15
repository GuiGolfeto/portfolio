export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 font-sans text-[0.7rem] font-bold uppercase tracking-[0.28em] text-brass-400">
      <span className="h-px w-8 bg-brass-500" />
      {children}
    </span>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="display mt-5 text-[2.4rem] font-semibold text-bone-50 sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}

export function SectionSub({ children }: { children: React.ReactNode }) {
  return <p className="mt-5 max-w-2xl text-base leading-relaxed text-night-300 sm:text-lg">{children}</p>;
}

const btn =
  "inline-flex items-center justify-center gap-2.5 px-7 py-4 font-display text-sm font-medium uppercase tracking-[0.12em] transition " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-400";

export function ButtonBrass({
  href, children, external, className = "",
}: { href: string; children: React.ReactNode; external?: boolean; className?: string }) {
  const cls = `${btn} bg-brass-500 text-night-950 hover:bg-brass-400 ${className}`;
  return external ? <a href={href} className={cls}>{children}</a> : <a href={href} className={cls}>{children}</a>;
}

export function ButtonGhost({
  href, children, className = "",
}: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`${btn} border border-bone-50/25 text-bone-50 hover:border-brass-400 hover:text-brass-300 ${className}`}>
      {children}
    </a>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6.6 3.5h2.2l1.6 4-1.9 1.4a12 12 0 0 0 5.6 5.6l1.4-1.9 4 1.6v2.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MessageIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M20.5 11.6c0 3.9-3.8 7.1-8.5 7.1-1 0-2-.15-2.9-.42L4 20l1.3-3.3a6.6 6.6 0 0 1-1.8-4.4c0-3.9 3.8-7.1 8.5-7.1s8.5 3.2 8.5 7.1Z"
        stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-brass-400" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.13l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export function ScissorsIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6.2" cy="17.8" r="2.7" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.8" cy="17.8" r="2.7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.3 15.9 18.6 4.2M15.7 15.9 5.4 4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

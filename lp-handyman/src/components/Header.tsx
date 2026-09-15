"use client";

import { useEffect, useState } from "react";
import { business, copy as t, telLink } from "@/lib/content";
import { PhoneIcon } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#servicos", label: t.nav.services },
    { href: "#projetos", label: t.nav.projects },
    { href: "#processo", label: t.nav.process },
    { href: "#depoimentos", label: t.nav.reviews },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-espresso-950/95 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2.5">
          <Mark />
          <span className="truncate font-display text-base font-semibold tracking-tight text-stone-50 sm:text-lg">
            {business.name}
            <span className="hidden font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-espresso-400 sm:ml-2 sm:inline">
              Construction
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-4 py-2.5 text-sm font-semibold text-espresso-300 transition hover:bg-stone-50/10 hover:text-stone-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">

          <a
            href={telLink()}
            className="hidden items-center gap-2 rounded-lg bg-rust-500 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-50 transition hover:bg-rust-600 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-stone-50/20 text-stone-50 sm:h-11 sm:w-11 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[2px] w-full rounded bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full rounded bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full rounded bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden bg-espresso-950 transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[28rem] border-t border-stone-50/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3.5 text-base font-semibold text-espresso-300 transition hover:bg-stone-50/10 hover:text-stone-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink()}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-rust-500 px-4 py-4 text-sm font-bold uppercase tracking-wider text-stone-50"
          >
            <PhoneIcon className="h-5 w-5" />
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Mark() {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rust-500">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-stone-50" fill="none" aria-hidden="true">
        <path d="M3 11.2 12 4l9 7.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.6 13.3V20h12.8v-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

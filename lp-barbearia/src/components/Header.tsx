"use client";

import { useEffect, useState } from "react";
import { business, copy as t, telLink } from "@/lib/content";
import { PhoneIcon, ScissorsIcon } from "./ui";

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
    { href: "#barbeiros", label: t.nav.team },
    { href: "#cortes", label: t.nav.gallery },
    { href: "#agendar", label: t.nav.booking },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-bone-50/10 bg-night-950/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="flex min-w-0 items-center gap-2.5">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-brass-500 text-brass-400">
            <ScissorsIcon className="h-5 w-5" />
          </span>
          <span className="display truncate text-lg font-semibold text-bone-50 sm:text-xl">
            {business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2.5 font-display text-sm font-medium uppercase tracking-[0.1em] text-night-300 transition hover:text-brass-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">

          <a
            href={telLink()}
            className="hidden items-center gap-2 bg-brass-500 px-5 py-3.5 font-display text-xs font-medium uppercase tracking-[0.12em] text-night-950 transition hover:bg-brass-400 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-bone-50/20 text-bone-50 sm:h-11 sm:w-11 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[2px] w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-night-950 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[28rem] border-t border-bone-50/10" : "max-h-0"}`}>
        <nav className="flex flex-col px-4 py-3 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-bone-50/8 px-1 py-4 font-display text-base font-medium uppercase tracking-[0.1em] text-night-300 transition hover:text-brass-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink()}
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 bg-brass-500 px-4 py-4 font-display text-sm font-medium uppercase tracking-[0.12em] text-night-950"
          >
            <PhoneIcon className="h-5 w-5" />
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import { copy as t, me } from "@/lib/content";

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
    { href: "#projetos", label: t.nav.work },
    { href: "#inclui", label: t.nav.included },
    { href: "#como", label: t.nav.how },
    { href: "#sobre", label: t.nav.about },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-paper-200 bg-paper-50/88 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8">
        <a href="#top" onClick={() => setOpen(false)} className="-my-2 flex min-w-0 items-center gap-2.5 py-2">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-950 font-display text-sm font-bold text-paper-50">
            GG
          </span>
          <span className="truncate font-display text-base font-bold tracking-tight text-ink-950 sm:text-lg">
            {me.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-ink-600 transition hover:bg-ink-950/5 hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contato"
            className="hidden rounded-lg bg-iris-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-iris-600 sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-200 text-ink-950 sm:h-11 sm:w-11 lg:hidden"
          >
            <div className="flex w-5 flex-col gap-[5px]">
              <span className={`h-[2px] w-full rounded bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-full rounded bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-full rounded bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden bg-paper-50 transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[26rem] border-t border-paper-200" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3.5 text-base font-semibold text-ink-800 transition hover:bg-ink-950/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg bg-iris-500 px-4 py-4 text-center text-base font-bold text-white"
          >
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

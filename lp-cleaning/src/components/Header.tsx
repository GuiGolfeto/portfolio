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

  /* Trava o scroll do body enquanto o menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#servicos", label: t.nav.services },
    { href: "#resultados", label: t.nav.results },
    { href: "#como-funciona", label: t.nav.how },
    { href: "#avaliacoes", label: t.nav.reviews },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink-950/8 bg-sand-50/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="truncate text-base font-extrabold tracking-tight text-ink-950 sm:text-lg">
            {business.name}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-ink-600 transition hover:bg-ink-950/5 hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">

          <a
            href={telLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-ink-800 sm:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-950/12 bg-white/80 text-ink-950 sm:h-11 sm:w-11 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full rounded bg-current transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-[2px] w-full rounded bg-current transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-ink-950/8 bg-sand-50/97 backdrop-blur-xl transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[28rem]" : "max-h-0 border-t-transparent"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 sm:px-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3.5 text-base font-semibold text-ink-800 transition hover:bg-ink-950/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-ink-950 px-4 py-4 text-base font-bold text-white"
          >
            <PhoneIcon className="h-5 w-5" />
            {t.nav.cta}
          </a>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-glow">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
        <path d="M12 2.2c.35 2.6 1.6 4.1 3.9 4.6-2.3.5-3.55 2-3.9 4.6-.35-2.6-1.6-4.1-3.9-4.6 2.3-.5 3.55-2 3.9-4.6Z" />
        <path d="M17.8 12.4c.23 1.7 1.05 2.7 2.55 3-1.5.33-2.32 1.32-2.55 3.02-.23-1.7-1.04-2.69-2.54-3.02 1.5-.3 2.31-1.3 2.54-3Z" />
        <path d="M7.3 14.1c.2 1.45.9 2.3 2.18 2.57-1.28.28-1.98 1.13-2.18 2.58-.2-1.45-.9-2.3-2.17-2.58 1.28-.27 1.97-1.12 2.17-2.57Z" />
      </svg>
    </span>
  );
}

"use client";

import { business, copy as t, telLink } from "@/lib/content";
import { PhoneIcon } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso-950 pb-28 pt-20 text-espresso-300 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rust-500">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-stone-50" fill="none" aria-hidden="true">
                  <path d="M3 11.2 12 4l9 7.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.6 13.3V20h12.8v-6.7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold text-stone-50">
                {business.nameFull}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-espresso-400">
              {business.license}
            </p>
            <a
              href={telLink()}
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-stone-50/10 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-50 transition hover:bg-stone-50/20"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </div>

          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-espresso-400">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>
                <a href={telLink()} className="-my-3 inline-block py-3 transition hover:text-stone-50">
                  {business.phonePretty}
                </a>
              </li>
              <li>{business.email}</li>
              <li className="text-espresso-400">{t.footer.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-espresso-400">
              {t.footer.areas}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium">
              {business.cities.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-stone-50/10 pt-7 text-xs text-espresso-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.nameFull}. {t.footer.rights}</p>
          <p>{t.footer.demo}</p>
        </div>
      </div>
    </footer>
  );
}

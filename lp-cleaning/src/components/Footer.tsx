"use client";

import { business, copy as t, telLink } from "@/lib/content";
import { PhoneIcon } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 pb-28 pt-20 text-ink-300 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.2c.35 2.6 1.6 4.1 3.9 4.6-2.3.5-3.55 2-3.9 4.6-.35-2.6-1.6-4.1-3.9-4.6 2.3-.5 3.55-2 3.9-4.6Z" />
                  <path d="M17.8 12.4c.23 1.7 1.05 2.7 2.55 3-1.5.33-2.32 1.32-2.55 3.02-.23-1.7-1.04-2.69-2.54-3.02 1.5-.3 2.31-1.3 2.54-3Z" />
                  <path d="M7.3 14.1c.2 1.45.9 2.3 2.18 2.57-1.28.28-1.98 1.13-2.18 2.58-.2-1.45-.9-2.3-2.17-2.58 1.28-.27 1.97-1.12 2.17-2.57Z" />
                </svg>
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                {business.nameFull}
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{t.footer.tagline}</p>
            <a
              href={telLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
            >
              <PhoneIcon className="h-4 w-4" />
              {t.nav.cta}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>
                <a
                  href={telLink()}
                  className="-my-3 inline-block py-3 transition hover:text-white"
                >
                  {business.phonePretty}
                </a>
              </li>
              <li>{business.email}</li>
              <li>@{business.instagram}</li>
              <li className="text-ink-400">{t.footer.hours}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
              {t.footer.areas}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium">
              {business.cities.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.nameFull}. {t.footer.rights}
          </p>
          <p>{t.footer.demo}</p>
        </div>
      </div>
    </footer>
  );
}

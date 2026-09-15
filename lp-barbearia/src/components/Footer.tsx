"use client";

import { business, copy as t, telLink } from "@/lib/content";
import { ScissorsIcon } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone-50/10 pb-28 pt-16 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-10 w-10 items-center justify-center border border-brass-500 text-brass-400">
                <ScissorsIcon className="h-5 w-5" />
              </span>
              <span className="display text-xl font-semibold text-bone-50">{business.nameFull}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-night-400">{t.footer.tagline}</p>
          </div>

          <ul className="space-y-3 text-sm font-medium text-night-300">
            <li>
              <a href={telLink()} className="-my-3 inline-block py-3 transition hover:text-brass-300">
                {business.phonePretty}
              </a>
            </li>
            <li>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="-my-3 inline-block py-3 transition hover:text-brass-300"
              >
                {business.addressShort}
              </a>
            </li>
            <li>@{business.instagram}</li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-bone-50/10 pt-7 text-xs text-night-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.nameFull}. {t.footer.rights}</p>
          <p>{t.footer.demo}</p>
        </div>
      </div>
    </footer>
  );
}

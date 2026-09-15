"use client";

import { business, copy as t } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function ServiceArea() {

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl border border-brand-200/60 bg-gradient-to-br from-brand-50 via-mist-50 to-white p-8 shadow-soft sm:p-12 lg:p-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow>{t.area.eyebrow}</Eyebrow>
                <SectionTitle>{t.area.title}</SectionTitle>
                <SectionSub>{t.area.sub}</SectionSub>
              </div>

              <ul className="flex flex-wrap gap-2.5">
                {business.cities.map((c) => (
                  <li
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-950/8 bg-white px-4 py-2.5 text-sm font-bold text-ink-800 shadow-soft"
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-brand-500" fill="currentColor" aria-hidden="true">
                      <path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z" />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

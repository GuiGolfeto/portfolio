"use client";

import { business, copy as t } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function ServiceArea() {

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-stone-200 bg-stone-100 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow>{t.area.eyebrow}</Eyebrow>
              <SectionTitle>{t.area.title}</SectionTitle>
              <SectionSub>{t.area.sub}</SectionSub>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-stone-200 sm:grid-cols-3">
              {business.cities.map((c) => (
                <li key={c} className="bg-stone-100 px-4 py-4 text-sm font-bold text-espresso-800">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

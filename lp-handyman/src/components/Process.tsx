"use client";

import { copy as t } from "@/lib/content";

import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function Process() {

  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <SectionTitle>{t.process.title}</SectionTitle>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="relative h-full bg-stone-50 p-7 sm:p-8">
                <span className="font-display text-5xl font-semibold leading-none text-stone-200">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-espresso-950">
                  {s.t}
                </h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-espresso-600">
                  {s.d}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

"use client";

import { copy as t } from "@/lib/content";

import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function How() {

  return (
    <section id="como" className="border-y border-paper-200 bg-paper-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.how.eyebrow}</Eyebrow>
            <SectionTitle>{t.how.title}</SectionTitle>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.how.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="h-full rounded-2xl border border-paper-200 bg-paper-50 p-7">
                <span className="font-display text-sm font-bold text-iris-500">{s.n}</span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-950">{s.t}</h3>
                <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

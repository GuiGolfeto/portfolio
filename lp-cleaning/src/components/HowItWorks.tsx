"use client";

import { copy as t } from "@/lib/content";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function HowItWorks() {

  return (
    <section id="como-funciona" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-5xl shadow-lift sm:aspect-square">
                <Image
                  src="/images/team.jpg"
                  alt={t.how.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -right-4 -z-10 h-40 w-40 rounded-4xl bg-brand-200/70 blur-2xl"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{t.how.eyebrow}</Eyebrow>
              <SectionTitle>{t.how.title}</SectionTitle>
            </Reveal>

            <ol className="mt-12 space-y-3">
              {t.how.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 110}>
                  <li className="flex gap-5 rounded-4xl border border-ink-950/8 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift sm:p-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-base font-extrabold text-brand-600">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-ink-950">{s.t}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-600">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

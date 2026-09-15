"use client";

import { copy as t } from "@/lib/content";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Services() {

  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <SectionTitle>{t.services.title}</SectionTitle>
              <SectionSub>{t.services.sub}</SectionSub>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mt-10 hidden aspect-4/3 overflow-hidden rounded-xl shadow-card lg:block">
                <Image
                  src="/images/craft.jpg"
                  alt={t.services.title}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Lista numerada em vez de cards: dá um ar mais editorial */}
          <ul className="border-t border-stone-200">
            {t.services.items.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <li className="group flex gap-5 border-b border-stone-200 py-7 transition-colors hover:bg-stone-100 sm:gap-8 sm:py-8">
                  <span className="font-display text-xl font-semibold text-rust-500 sm:text-2xl">
                    {s.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-semibold text-espresso-950 sm:text-2xl">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-espresso-600">
                      {s.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

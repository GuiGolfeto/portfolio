"use client";

import { copy as t, services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Services() {

  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <SectionTitle>{t.services.title}</SectionTitle>
            <SectionSub>{t.services.sub}</SectionSub>
          </div>
        </Reveal>

        {/* Tabela de preços com linha pontilhada ligando nome e valor */}
        <ul className="mt-14">
          {services.map((s, i) => {
            return (
              <Reveal key={s.id} delay={i * 70}>
                <li className="flex items-baseline gap-4 border-b border-bone-50/10 py-6 sm:gap-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="display text-xl font-medium text-bone-50 sm:text-2xl">
                        {s.t}
                      </h3>
                      {"tag" in s && s.tag ? (
                        <span className="bg-brass-500 px-2.5 py-1 font-sans text-[0.6rem] font-bold uppercase tracking-[0.14em] text-night-950">
                          {t.services.tag}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-night-400">{s.d}</p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 self-center border-b border-dotted border-bone-50/20 sm:block"
                  />

                  <div className="shrink-0 text-right">
                    <span className="display block text-2xl font-semibold text-brass-400 sm:text-3xl">
                      ${s.price}
                    </span>
                    <span className="mt-0.5 block font-sans text-xs font-medium text-night-500">
                      {s.min} {t.services.min}
                    </span>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

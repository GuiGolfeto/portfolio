"use client";

import Image from "next/image";
import { copy as t, telLink } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Services() {

  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{t.services.eyebrow}</Eyebrow>
            <SectionTitle>{t.services.title}</SectionTitle>
            <SectionSub>{t.services.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <Reveal key={s.name} delay={i * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-ink-950/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <div className="relative aspect-5/4 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/45 to-transparent" />
                  {s.tag ? (
                    <span className="absolute left-4 top-4 rounded-full bg-accent-500 px-3.5 py-1.5 text-xs font-extrabold text-ink-950">
                      {s.tag}
                    </span>
                  ) : null}
                  <h3 className="absolute inset-x-5 bottom-4 text-xl font-extrabold text-white">
                    {s.name}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.95rem] leading-relaxed text-ink-600">{s.desc}</p>

                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-ink-800">
                        <svg
                          viewBox="0 0 16 16"
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-500"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.14" />
                          <path
                            d="M5 8.2 7 10.2l4-4.2"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex items-center justify-between border-t border-ink-950/8 pt-5">
                    <span className="text-sm font-extrabold text-ink-950">{s.price}</span>
                    <a
                      href={telLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="-my-2.5 inline-flex items-center gap-1.5 py-2.5 text-sm font-bold text-brand-600 transition hover:gap-2.5 hover:text-brand-700"
                    >
                      {t.nav.cta}
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                        <path
                          d="M3 8h10m0 0-4-4m4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

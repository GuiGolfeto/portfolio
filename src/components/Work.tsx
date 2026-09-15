"use client";

import { copy as t, demos } from "@/lib/content";
import { Reveal } from "./Reveal";
import { ArrowIcon, Eyebrow, PhoneFrame, SectionSub, SectionTitle } from "./ui";

export function Work() {

  return (
    <section id="projetos" className="border-t border-paper-200 bg-paper-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.work.eyebrow}</Eyebrow>
            <SectionTitle>{t.work.title}</SectionTitle>
            <SectionSub>{t.work.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-16 space-y-16 sm:space-y-20">
          {demos.map((d, i) => {
            return (
              <Reveal key={d.slug}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    {/* Halo na cor da própria demo */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -z-10 mx-auto max-w-sm rounded-full opacity-25 blur-3xl"
                      style={{ backgroundColor: d.accent }}
                    />
                    <PhoneFrame src={d.mockup} alt={d.name} />
                  </div>

                  <div>
                    <span
                      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold text-white"
                      style={{ backgroundColor: d.accent }}
                    >
                      {d.niche}
                    </span>

                    <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
                      {d.name}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-ink-600">{d.desc}</p>

                    <ul className="mt-6 space-y-2.5">
                      {d.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-[0.95rem] font-medium text-ink-800">
                          <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-ink-400" fill="none" aria-hidden="true">
                            <path d="M3 8.2 6.2 11.4 13 4.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={d.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-8 inline-flex items-center gap-2.5 rounded-xl bg-ink-950 px-6 py-3.5 text-sm font-bold text-paper-50 transition hover:-translate-y-0.5 hover:bg-ink-800"
                    >
                      {t.work.view}
                      <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

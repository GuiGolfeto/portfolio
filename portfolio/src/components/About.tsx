"use client";

import Image from "next/image";

import { copy as t, me } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function About() {

  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-paper-200 bg-paper-100 p-7 sm:p-12 lg:p-14">
            <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
              {/* Cartão de identidade */}
              <div>
                <Eyebrow>{t.about.eyebrow}</Eyebrow>

                <div className="relative mt-7 overflow-hidden rounded-2xl bg-ink-950 p-7 text-paper-50">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-iris-500/35 blur-3xl"
                  />
                  <div className="relative">
                    {/* Com me.photo preenchido entra o retrato; sem ele, o monograma */}
                    {me.photo ? (
                      <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl">
                        <Image
                          src={me.photo}
                          alt={me.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 300px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-paper-50 font-display text-xl font-bold text-ink-950">
                        GG
                      </span>
                    )}
                    <p className="mt-6 font-display text-2xl font-bold leading-tight">{me.name}</p>
                    <p className="mt-1.5 text-sm font-medium text-ink-200">{me.role}</p>

                    <p className="mt-6 flex items-center gap-2 border-t border-paper-50/15 pt-5 text-xs font-bold text-iris-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400 opacity-70" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-iris-400" />
                      </span>
                      {t.hero.badge}
                    </p>
                  </div>
                </div>
              </div>

              {/* Texto */}
              <div>
                <SectionTitle>{t.about.title}</SectionTitle>

                <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-600">
                  <p>{t.about.p1}</p>
                  {/* O argumento central, destacado do resto */}
                  <p className="border-l-2 border-iris-400 pl-5 font-medium text-ink-950">
                    {t.about.p2}
                  </p>
                  <p>{t.about.p3}</p>
                </div>

                <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 sm:grid-cols-3">
                  {t.about.facts.map((f) => (
                    <div key={f.t} className="bg-paper-50 p-5">
                      <dt className="font-display text-sm font-bold text-ink-950">{f.t}</dt>
                      <dd className="mt-1.5 text-xs leading-relaxed text-ink-400">{f.d}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

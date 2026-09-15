"use client";

import Image from "next/image";
import { business, copy as t, telLink } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, PhoneIcon, SectionTitle } from "./ui";

export function Visit() {

  return (
    <section className="border-t border-bone-50/10 bg-night-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/interior.jpg"
                alt={business.nameFull}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-night-950/25" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div>
                <Eyebrow>{t.visit.eyebrow}</Eyebrow>
                <SectionTitle>{t.visit.title}</SectionTitle>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-10">
                <h3 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brass-400">
                  {t.visit.hoursTitle}
                </h3>
                <dl className="mt-4 border-t border-bone-50/12">
                  {t.visit.hours.map((h) => (
                    <div key={h.d} className="flex items-baseline justify-between gap-4 border-b border-bone-50/12 py-3.5">
                      <dt className="text-sm font-medium text-night-300">{h.d}</dt>
                      <dd className={`font-display text-sm font-medium tracking-[0.06em] ${
                        h.closed ? "text-night-500" : "text-bone-50"
                      }`}>
                        {h.h}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10">
                <h3 className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.24em] text-brass-400">
                  {t.visit.addressTitle}
                </h3>
                <p className="mt-4 text-lg font-medium text-bone-50">{business.address}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-bone-50/20 px-6 py-3.5 font-display text-sm font-medium uppercase tracking-[0.1em] text-bone-50 transition hover:border-brass-400 hover:text-brass-300"
                  >
                    {t.visit.mapsCta}
                  </a>
                  <a
                    href={telLink()}
                    className="inline-flex items-center justify-center gap-2 bg-brass-500 px-6 py-3.5 font-display text-sm font-medium uppercase tracking-[0.1em] text-night-950 transition hover:bg-brass-400"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {business.phonePretty}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

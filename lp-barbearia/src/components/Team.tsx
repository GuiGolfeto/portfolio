"use client";

import Image from "next/image";
import { barbers, copy as t } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Team() {

  return (
    <section id="barbeiros" className="border-y border-bone-50/10 bg-night-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.team.eyebrow}</Eyebrow>
            <SectionTitle>{t.team.title}</SectionTitle>
            <SectionSub>{t.team.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((b, i) => (
            <Reveal key={b.id} delay={i * 100}>
              <figure className="group relative overflow-hidden">
                <div className="relative aspect-4/5">
                  <Image
                    src={b.img}
                    alt={b.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/20 to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <span className="block font-sans text-[0.62rem] font-bold uppercase tracking-[0.24em] text-brass-400">
                    {t.team.spec}
                  </span>
                  <h3 className="display mt-2 text-2xl font-semibold text-bone-50">{b.name}</h3>
                  <p className="mt-1 text-sm font-medium text-night-300">{b.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

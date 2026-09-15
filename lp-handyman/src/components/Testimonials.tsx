"use client";

import { copy as t } from "@/lib/content";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle, Stars } from "./ui";

const avatars = ["/images/av-1.jpg", "/images/av-2.jpg", "/images/av-3.jpg"];

export function Testimonials() {

  return (
    <section id="depoimentos" className="border-y border-stone-200 bg-stone-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
            <SectionTitle>{t.reviews.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-xl border border-stone-200 bg-stone-50 p-7 shadow-card sm:p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-espresso-800">
                  {r.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-stone-200 pt-6">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
                    <Image src={avatars[i]} alt={r.name} fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-espresso-950">{r.name}</span>
                    <span className="block text-xs font-medium text-espresso-400">{r.city}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

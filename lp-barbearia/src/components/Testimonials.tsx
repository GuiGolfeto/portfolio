"use client";

import { copy as t } from "@/lib/content";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle, Stars } from "./ui";

const avatars = ["/images/av-1.jpg", "/images/av-2.jpg", "/images/av-3.jpg"];

export function Testimonials() {

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
            <SectionTitle>{t.reviews.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <figure className="flex h-full flex-col border border-bone-50/12 bg-night-900 p-7 sm:p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-night-300">
                  {r.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-bone-50/12 pt-6">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden">
                    <Image src={avatars[i]} alt={r.name} fill sizes="44px" className="object-cover grayscale" />
                  </span>
                  <span>
                    <span className="display block text-base font-medium text-bone-50">{r.name}</span>
                    <span className="block font-sans text-xs font-medium text-night-500">{r.city}</span>
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

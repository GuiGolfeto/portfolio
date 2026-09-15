"use client";

import { copy as t } from "@/lib/content";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle, Stars } from "./ui";

const avatars = ["/images/av-1.jpg", "/images/av-2.jpg", "/images/av-3.jpg"];

export function Testimonials() {

  return (
    <section id="avaliacoes" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow>{t.reviews.eyebrow}</Eyebrow>
            <SectionTitle>{t.reviews.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {t.reviews.items.map((r, i) => (
            <Reveal key={r.name} delay={i * 110}>
              <figure className="flex h-full flex-col rounded-4xl border border-ink-950/8 bg-sand-50 p-7 shadow-soft transition hover:-translate-y-1.5 hover:shadow-lift sm:p-8">
                <Stars />
                <blockquote className="mt-5 flex-1 text-[1.02rem] leading-relaxed text-ink-800">
                  {r.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-ink-950/8 pt-6">
                  <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white">
                    <Image
                      src={avatars[i]}
                      alt={r.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-extrabold text-ink-950">{r.name}</span>
                    <span className="block text-xs font-medium text-ink-400">{r.city}</span>
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

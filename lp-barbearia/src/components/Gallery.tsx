"use client";

import Image from "next/image";
import { copy as t, gallery } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Gallery() {

  return (
    <section id="cortes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
            <SectionTitle>{t.gallery.title}</SectionTitle>
            <SectionSub>{t.gallery.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 3) * 80}>
              <div className="group relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`${t.gallery.title} ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-bone-50/0 transition group-hover:border-brass-400/60" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

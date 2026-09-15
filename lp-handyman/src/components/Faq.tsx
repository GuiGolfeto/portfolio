"use client";

import { copy as t } from "@/lib/content";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-stone-200 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <SectionTitle>{t.faq.title}</SectionTitle>
          </div>
        </Reveal>

        <dl className="mt-12 border-t border-stone-200">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="border-b border-stone-200">
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold text-espresso-950 sm:text-xl">
                        {f.q}
                      </span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition duration-300 ${
                          isOpen
                            ? "rotate-45 border-rust-500 bg-rust-500 text-stone-50"
                            : "border-stone-300 text-espresso-600"
                        }`}
                      >
                        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                          <path d="M8 3.5v9M3.5 8h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-12 text-[0.95rem] leading-relaxed text-espresso-600">
                        {f.a}
                      </p>
                    </div>
                  </dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

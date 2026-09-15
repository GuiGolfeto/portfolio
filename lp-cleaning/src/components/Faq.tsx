"use client";

import { copy as t } from "@/lib/content";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionTitle } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal>
          <div className="text-center">
            <Eyebrow>{t.faq.eyebrow}</Eyebrow>
            <SectionTitle>{t.faq.title}</SectionTitle>
          </div>
        </Reveal>

        <dl className="mt-12 space-y-3">
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70}>
                <div
                  className={`overflow-hidden rounded-3xl border transition ${
                    isOpen
                      ? "border-brand-200 bg-brand-50/50 shadow-soft"
                      : "border-ink-950/8 bg-sand-50"
                  }`}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                    >
                      <span className="text-[1.02rem] font-extrabold text-ink-950">{f.q}</span>
                      <span
                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen ? "rotate-45 bg-brand-500 text-white" : "bg-white text-ink-600"
                        }`}
                      >
                        <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                          <path
                            d="M8 3.5v9M3.5 8h9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-ink-600 sm:px-7">
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

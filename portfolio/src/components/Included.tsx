"use client";

import { copy as t } from "@/lib/content";

import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

/* Um ícone por item, na mesma ordem de copy.included.items.
   Mexeu na lista de itens, confira esta lista junto. */
const icons = [
  /* celular */ "M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm2.5 15h3",
  /* raio    */ "M13.2 3 5.5 13.4h5.6L10.8 21l7.7-10.4h-5.6L13.2 3Z",
  /* toque   */ "M11 11V6.2a1.7 1.7 0 1 1 3.4 0V13m0-2.2a1.7 1.7 0 0 1 3.4 0v1m-3.4-1 3.4 1m0 0a1.7 1.7 0 0 1 3.4 0v3.4c0 2.8-2.3 5.1-5.1 5.1h-1.5c-2 0-3.8-1.1-4.6-2.9L7.5 14a1.7 1.7 0 0 1 2.8-1.8",
  /* busca   */ "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5.2-1.8L21 21",
  /* nuvem   */ "M7.5 19h9.8a3.7 3.7 0 0 0 .5-7.4A5.6 5.6 0 0 0 7 9.6a4.7 4.7 0 0 0 .5 9.4Z",
  /* escudo  */ "M12 3l7 2.8v5.4c0 4.3-2.9 8.2-7 9.3-4.1-1.1-7-5-7-9.3V5.8L12 3Zm-3.1 8.9L11 14l4.2-4.4",
];

export function Included() {

  return (
    <section id="inclui" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.included.eyebrow}</Eyebrow>
            <SectionTitle>{t.included.title}</SectionTitle>
            <SectionSub>{t.included.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-paper-200 bg-paper-200 sm:grid-cols-2 lg:grid-cols-3">
          {t.included.items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 80}>
              <div className="h-full bg-paper-50 p-7 transition hover:bg-white sm:p-8">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-iris-100 text-iris-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                    <path d={icons[i]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink-950">{it.t}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

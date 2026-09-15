"use client";

import { copy as t } from "@/lib/content";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "./Reveal";
/**
 * Comparador antes/depois.
 *
 * Sem `beforeImg`, o "antes" é a mesma foto com o filtro `.grime` (globals.css).
 * Isso mantém os dois lados perfeitamente alinhados no demo. Ao adaptar para um
 * cliente real, passe as duas fotos dele e o filtro deixa de ser usado.
 */
export function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(52);
  const item = t.ba.items[active];
  return (
    <section id="resultados" className="relative overflow-hidden bg-ink-950 py-24 text-white sm:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accent-500/12 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
              <span className="h-px w-6 bg-brand-400" />
              {t.ba.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem]">
              {t.ba.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 sm:text-lg">
              {t.ba.sub}
            </p>
          </div>
        </Reveal>
        {/* Abas */}
        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {t.ba.items.map((it, i) => (
              <button
                key={it.label}
                type="button"
                onClick={() => {
                  setActive(i);
                  setPos(52);
                }}
                aria-pressed={i === active}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  i === active
                    ? "bg-white text-ink-950"
                    : "bg-white/10 text-ink-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {it.label}
              </button>
            ))}
          </div>
        </Reveal>
        <Reveal delay={140}>
          <figure className="mt-7">
            <div className="relative aspect-4/3 w-full select-none overflow-hidden rounded-4xl shadow-lift sm:aspect-16/10">
              {/* Camada de baixo: ANTES */}
              <Image
                key={`before-${item.img}`}
                src={item.img}
                alt={`${t.ba.before} — ${item.label}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="grime object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_22%_78%,rgba(74,58,28,0.5),transparent_42%),radial-gradient(circle_at_80%_28%,rgba(60,50,30,0.45),transparent_38%),radial-gradient(circle_at_55%_55%,rgba(48,42,28,0.3),transparent_60%),linear-gradient(to_bottom,rgba(40,34,22,0.25),rgba(30,26,18,0.4))]"
              />
              {/* Camada de cima: DEPOIS, recortada até a posição do cursor */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
              >
                <Image
                  key={`after-${item.img}`}
                  src={item.img}
                  alt={`${t.ba.after} — ${item.label}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1100px"
                  className="object-cover"
                />
              </div>
              {/* Etiquetas */}
              <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink-950/65 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur sm:left-5 sm:top-5">
                {t.ba.after}
              </span>
              <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ink-950/65 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur sm:right-5 sm:top-5">
                {t.ba.before}
              </span>
              {/* Linha divisória + alça */}
              <div
                className="pointer-events-none absolute inset-y-0 z-20 w-0.5 bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.45)]"
                style={{ left: `${pos}%` }}
              >
                <span className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-white/25 backdrop-blur-md">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" aria-hidden="true">
                    <path
                      d="M9.5 8 5.5 12l4 4M14.5 8l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              {/* O input cobre a imagem: dá arraste, toque e teclado de graça */}
              <input
                type="range"
                min={0}
                max={100}
                step={0.1}
                value={pos}
                onChange={(e) => setPos(Number(e.target.value))}
                aria-label={t.ba.hint}
                className="absolute inset-0 z-30 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-ink-300">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
                <path
                  d="M9.5 8 5.5 12l4 4M14.5 8l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t.ba.hint}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

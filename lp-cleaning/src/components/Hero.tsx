"use client";

import Image from "next/image";
import { copy as t, telLink } from "@/lib/content";
import { ButtonGhost, ButtonPrimary, Stars } from "./ui";

export function Hero() {

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Manchas de cor ao fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-brand-200/40 blur-3xl sm:-left-40 sm:-top-24 sm:h-[34rem] sm:w-[34rem] sm:bg-brand-200/45" />
        <div className="absolute -right-32 top-40 hidden h-[28rem] w-[28rem] rounded-full bg-accent-300/30 blur-3xl sm:block" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-300/50 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        {/* Coluna de texto */}
        <div className="animate-rise">
          <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-xs font-bold text-brand-700 backdrop-blur sm:text-sm">
            <Stars className="scale-90" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.07] tracking-tight text-ink-950 min-[400px]:text-[2.6rem] sm:text-6xl sm:leading-[1.05] lg:text-[4.1rem]">
            {t.hero.title1}
            <br />
            <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-transparent">
              {t.hero.title2}
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-600">
            {t.hero.sub}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center [&>*]:w-full sm:[&>*]:w-auto">
            <ButtonPrimary href={telLink()}>
              {t.hero.ctaPrimary}
            </ButtonPrimary>
            <ButtonGhost href="#resultados">{t.hero.ctaSecondary}</ButtonGhost>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3">
            {t.hero.chips.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-semibold text-ink-600">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" aria-hidden="true">
                    <path
                      d="M2.5 6.2 4.8 8.5 9.5 3.8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna da foto */}
        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="relative aspect-4/5 overflow-hidden rounded-5xl shadow-lift sm:aspect-square lg:aspect-4/5">
            <Image
              src="/images/hero.jpg"
              alt={t.hero.title1}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent" />
          </div>

          {/* Cartão flutuante */}
          <div className="absolute -bottom-6 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-3 rounded-3xl border border-white/70 bg-white/90 p-3.5 shadow-lift backdrop-blur-xl sm:left-6 sm:p-4 lg:-left-8 lg:animate-float">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-500 text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M12 7.5V12l3 2"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <div>
              <p className="text-sm font-extrabold text-ink-950">{t.hero.floatTitle}</p>
              <p className="text-xs font-medium text-ink-400">{t.hero.floatSub}</p>
            </div>
          </div>

          {/* Selo de avaliação */}
          <div className="absolute -right-2 top-6 hidden rounded-3xl border border-white/70 bg-white/90 px-4 py-3 text-center shadow-lift backdrop-blur-xl sm:block">
            <p className="text-2xl font-extrabold leading-none text-ink-950">4,9</p>
            <Stars className="mt-1.5 justify-center scale-90" />
          </div>
        </div>
      </div>
    </section>
  );
}

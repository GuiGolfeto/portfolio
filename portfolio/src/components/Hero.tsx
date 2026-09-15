"use client";

import { copy as t, demos } from "@/lib/content";
import { ButtonOutline, ButtonPrimary, PhoneFrame } from "./ui";

export function Hero() {

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-44">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[30rem] w-[30rem] rounded-full bg-iris-100/70 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-4 pb-20 sm:px-8 sm:pb-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-ink-200 bg-paper-50 px-4 py-2 text-xs font-bold text-ink-600">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-iris-500" />
            </span>
            {t.hero.badge}
          </span>

          <h1 className="mt-8 font-display text-[2.7rem] font-bold leading-[1.02] tracking-tight text-ink-950 min-[400px]:text-5xl sm:text-6xl lg:text-[3.75rem]">
            {t.hero.title1}
            <br />
            {t.hero.title2}{" "}
            <span className="text-iris-500">{t.hero.title3}</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">{t.hero.sub}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
            <ButtonPrimary href="#contato">{t.hero.ctaPrimary}</ButtonPrimary>
            <ButtonOutline href="#projetos">{t.hero.ctaSecondary}</ButtonOutline>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {t.hero.chips.map((c) => (
              <li key={c} className="flex items-center gap-2 text-sm font-semibold text-ink-600">
                <svg viewBox="0 0 16 16" className="h-4 w-4 shrink-0 text-iris-500" fill="none" aria-hidden="true">
                  <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.15" />
                  <path d="M5 8.2 7 10.2l4-4.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Trio de mockups: coloca o trabalho acima da dobra, que é o que
            convence quem abriu o link vindo de uma DM. Escondido no mobile,
            onde a seção de projetos já mostra cada um em tamanho cheio. */}
        <div className="relative hidden animate-rise [animation-delay:200ms] lg:block">
          <div className="relative mx-auto h-[26rem] max-w-md">
            <div className="absolute left-0 top-10 w-36 -rotate-[7deg]">
              <PhoneFrame src={demos[0].mockup} alt={demos[0].name} />
            </div>
            <div className="absolute left-1/2 top-0 z-10 w-40 -translate-x-1/2">
              <PhoneFrame src={demos[2].mockup} alt={demos[2].name} />
            </div>
            <div className="absolute right-0 top-10 w-36 rotate-[7deg]">
              <PhoneFrame src={demos[1].mockup} alt={demos[1].name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

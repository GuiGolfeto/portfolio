"use client";

import Image from "next/image";
import { business, copy as t, telLink } from "@/lib/content";
import { ButtonOutline, ButtonPrimary, PhoneIcon, ShieldIcon } from "./ui";

export function Hero() {

  return (
    <section id="top" className="relative overflow-hidden bg-espresso-950">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-36">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-stone-50/15 px-4 py-2 font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-espresso-300">
            <ShieldIcon className="h-4 w-4 shrink-0 text-rust-400" />
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-stone-50 min-[400px]:text-5xl sm:text-6xl lg:text-[4.25rem]">
            {t.hero.title1}{" "}
            <span className="text-rust-400 italic">{t.hero.title2}</span>{" "}
            {t.hero.title3}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-espresso-300 sm:text-lg">
            {t.hero.sub}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
            <ButtonPrimary href={telLink()}>
              <PhoneIcon className="h-4 w-4" />
              {t.hero.ctaPrimary}
            </ButtonPrimary>
            <ButtonOutline href="#projetos" light>
              {t.hero.ctaSecondary}
            </ButtonOutline>
          </div>

          <div className="mt-10 inline-flex flex-wrap items-center gap-x-3 gap-y-1 border-l-2 border-rust-500 pl-4">
            <span className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-espresso-400">
              {t.hero.badgeTitle}
            </span>
            <span className="font-display text-lg font-semibold text-stone-50">
              {business.license}
            </span>
          </div>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="relative aspect-4/5 overflow-hidden rounded-xl shadow-raise sm:aspect-3/2 lg:aspect-4/5">
            <Image
              src="/images/hero.jpg"
              alt={`${t.hero.title1} ${t.hero.title2} ${t.hero.title3}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-3 flex max-w-[calc(100%-1.5rem)] items-center gap-4 rounded-xl bg-stone-50 px-5 py-4 shadow-raise sm:left-6 lg:-left-8">
            <span className="font-display text-4xl font-semibold leading-none text-rust-500">
              {new Date().getFullYear() - business.since}
            </span>
            <span className="text-sm font-semibold leading-tight text-espresso-800">
              {t.credentials[0].l}
            </span>
          </div>
        </div>
      </div>

      {/* Faixa diagonal separando o hero do resto */}
      <div aria-hidden="true" className="h-3 bg-rust-500" />
    </section>
  );
}

"use client";

import Image from "next/image";
import { business, copy as t, telLink } from "@/lib/content";
import { ButtonBrass, ButtonGhost } from "./ui";

export function Hero() {

  return (
    <section id="top" className="relative">
      {/* Hero de imagem cheia — estrutura diferente das outras duas LPs,
          que usam duas colunas */}
      <div className="relative min-h-[36rem] overflow-hidden sm:min-h-[40rem] lg:min-h-[44rem]">
        <Image
          src="/images/hero.jpg"
          alt={business.nameFull}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] lg:object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-night-950/45" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-night-950 via-night-950/75 to-night-950/15" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-night-950 to-transparent" />

        <div className="relative mx-auto flex min-h-[36rem] max-w-7xl flex-col justify-center px-4 py-28 sm:min-h-[40rem] sm:px-8 lg:min-h-[44rem]">
          <div className="max-w-2xl animate-rise">
            <span className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.3em] text-brass-400">
              {t.hero.eyebrow}
            </span>

            <h1 className="display mt-6 text-[3.4rem] font-semibold text-bone-50 min-[400px]:text-6xl sm:text-7xl lg:text-8xl">
              {t.hero.title1}
              <br />
              <span className="text-brass-400">{t.hero.title2}</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-night-300 sm:text-lg">
              {t.hero.sub}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
              <ButtonBrass href="#agendar">{t.hero.ctaPrimary}</ButtonBrass>
              <ButtonGhost href="#servicos">{t.hero.ctaSecondary}</ButtonGhost>
            </div>
          </div>
        </div>
      </div>

      {/* Faixa de informações rápidas */}
      <div className="border-y border-bone-50/10 bg-night-900">
        <dl className="mx-auto grid max-w-7xl divide-y divide-bone-50/10 px-4 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          <StripItem label={t.strip.hours} icon="clock" />
          <StripItem label={t.strip.address} icon="pin" href={business.mapsUrl} external />
          <StripItem label={business.phonePretty} icon="phone" href={telLink()} sub={t.strip.phone} />
        </dl>
      </div>
    </section>
  );
}

function StripItem({
  label, sub, icon, href, external,
}: {
  label: string; sub?: string; icon: "clock" | "pin" | "phone"; href?: string; external?: boolean;
}) {
  const inner = (
    <>
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-brass-500/40 text-brass-400">
        {icon === "clock" && (
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5V12l3 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
        {icon === "pin" && (
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
            <path d="M12 21s7-5.6 7-10.4A7 7 0 0 0 5 10.6C5 15.4 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
            <circle cx="12" cy="10.4" r="2.4" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        )}
        {icon === "phone" && (
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
            <path d="M6.6 3.5h2.2l1.6 4-1.9 1.4a12 12 0 0 0 5.6 5.6l1.4-1.9 4 1.6v2.2a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="min-w-0">
        {sub ? (
          <span className="block font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-night-500">
            {sub}
          </span>
        ) : null}
        <span className="block truncate font-display text-base font-medium uppercase tracking-[0.08em] text-bone-50">
          {label}
        </span>
      </span>
    </>
  );

  const cls = "flex items-center gap-4 px-1 py-6 md:px-7";

  return (
    <div>
      <dt className="sr-only">{sub ?? label}</dt>
      <dd>
        {href ? (
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={`${cls} transition hover:text-brass-300`}
          >
            {inner}
          </a>
        ) : (
          <div className={cls}>{inner}</div>
        )}
      </dd>
    </div>
  );
}

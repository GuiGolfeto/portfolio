"use client";

import { useState } from "react";
import { copy as t, mailtoLink, me } from "@/lib/content";
import { Reveal } from "./Reveal";
import { ArrowIcon, InstagramIcon, MailIcon } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(me.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* Sem permissão de área de transferência: o link mailto ao lado resolve. */
    }
  }

  return (
    <section id="contato" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-950 px-7 py-14 text-paper-50 sm:px-12 sm:py-16 lg:px-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-iris-500/30 blur-3xl"
            />

            <div className="relative max-w-2xl">
              <span className="inline-flex items-center gap-2.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-iris-300">
                <span className="h-1.5 w-1.5 rounded-full bg-iris-400" />
                {t.contact.eyebrow}
              </span>

              <h2 className="mt-5 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-5xl">
                {t.contact.title}
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-ink-200">{t.contact.sub}</p>

              {/* E-mail: o canal principal */}
              <div className="mt-10">
                <span className="block font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-400">
                  {t.contact.emailLabel}
                </span>
                <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={mailtoLink(t.contact.subject, t.contact.body)}
                    className="group flex min-w-0 flex-1 items-center gap-3.5 rounded-xl bg-iris-500 px-5 py-4 transition hover:bg-iris-400"
                  >
                    <MailIcon className="h-5 w-5 shrink-0" />
                    <span className="min-w-0 flex-1 truncate text-left font-display text-base font-bold sm:text-lg">
                      {me.email}
                    </span>
                    <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </a>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-paper-50/25 px-5 py-4 text-sm font-bold transition hover:border-paper-50/60"
                  >
                    {copied ? (
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path d="M3 8.2 6.2 11.4 13 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
                        <rect x="5.5" y="5.5" width="8" height="8" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M10.5 5.5v-1a1.6 1.6 0 0 0-1.6-1.6H4a1.6 1.6 0 0 0-1.6 1.6v4.9c0 .9.7 1.6 1.6 1.6h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                    {copied ? t.contact.copied : t.contact.copy}
                  </button>
                </div>
              </div>

              {/* Instagram: o canal secundário */}
              <div className="mt-8">
                <span className="block font-sans text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink-400">
                  {t.contact.igLabel}
                </span>
                <a
                  href={me.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2.5 rounded-xl border border-paper-50/20 px-5 py-3.5 text-base font-bold transition hover:border-paper-50/50"
                >
                  <InstagramIcon className="h-5 w-5" />
                  @{me.instagram}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { business, copy as t, smsLink, telLink } from "@/lib/content";
import { Reveal } from "./Reveal";
import { MessageIcon, PhoneIcon } from "./ui";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  /* Guardamos o índice, não o texto: assim a escolha acompanha a troca de idioma. */
  const [typeIdx, setTypeIdx] = useState(0);
  const [sizeIdx, setSizeIdx] = useState(0);
  const [notes, setNotes] = useState("");

  /* Não há backend: montamos o texto e abrimos o app de mensagens do aparelho. */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const lines = [
      t.form.msgIntro,
      "",
      `${t.form.name}: ${name || "-"}`,
      `${t.form.city}: ${city || "-"}`,
      `${t.form.type}: ${t.form.types[typeIdx]}`,
      `${t.form.size}: ${t.form.sizes[sizeIdx]}`,
    ];
    if (notes.trim()) lines.push(`${t.form.notes}: ${notes.trim()}`);

    window.location.assign(smsLink(lines.join("\n")));
  }

  const field =
    "w-full rounded-2xl border border-ink-950/10 bg-white px-4 py-3.5 text-[0.95rem] font-medium text-ink-950 shadow-soft outline-none transition " +
    "placeholder:font-normal placeholder:text-ink-300 focus:border-brand-400 focus:ring-4 focus:ring-brand-500/12";

  const label = "mb-2 block text-sm font-bold text-ink-800";

  return (
    <section id="orcamento" className="pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-5xl bg-ink-950 shadow-lift">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Lado esquerdo — argumento */}
              <div className="relative overflow-hidden p-8 text-white sm:p-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl"
                />
                <div className="relative">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-300">
                    <span className="h-px w-6 bg-brand-400" />
                    {t.form.eyebrow}
                  </span>
                  <h2 className="mt-4 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl">
                    {t.form.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-300">{t.form.sub}</p>

                  <a
                    href={telLink()}
                    className="mt-8 flex items-center gap-4 rounded-3xl bg-accent-500 px-5 py-4 text-ink-950 shadow-lift transition hover:-translate-y-0.5 hover:bg-accent-400 sm:px-6 sm:py-5"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink-950/10">
                      <PhoneIcon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold uppercase tracking-wider text-ink-950/60">
                        {t.form.callLabel}
                      </span>
                      <span className="block truncate text-xl font-extrabold sm:text-2xl">
                        {business.phonePretty}
                      </span>
                    </span>
                  </a>

                  <dl className="mt-10 space-y-5 border-t border-white/12 pt-8">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-ink-400">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg font-extrabold">{business.email}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-wider text-ink-400">
                        Instagram
                      </dt>
                      <dd className="mt-1 text-lg font-extrabold">@{business.instagram}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Lado direito — formulário */}
              <div className="bg-sand-50 p-7 sm:p-10 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={label} htmlFor="q-name">
                      {t.form.name}
                    </label>
                    <input
                      id="q-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.form.namePh}
                      className={field}
                      required
                    />
                  </div>

                  <div>
                    <label className={label} htmlFor="q-city">
                      {t.form.city}
                    </label>
                    <select
                      id="q-city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className={field}
                      required
                    >
                      <option value="" disabled>
                        {t.form.cityPh}
                      </option>
                      {business.cities.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="q-type">
                        {t.form.type}
                      </label>
                      <select
                        id="q-type"
                        value={typeIdx}
                        onChange={(e) => setTypeIdx(Number(e.target.value))}
                        className={field}
                      >
                        {t.form.types.map((x, i) => (
                          <option key={x} value={i}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={label} htmlFor="q-size">
                        {t.form.size}
                      </label>
                      <select
                        id="q-size"
                        value={sizeIdx}
                        onChange={(e) => setSizeIdx(Number(e.target.value))}
                        className={field}
                      >
                        {t.form.sizes.map((x, i) => (
                          <option key={x} value={i}>
                            {x}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={label} htmlFor="q-notes">
                      {t.form.notes}
                    </label>
                    <textarea
                      id="q-notes"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t.form.notesPh}
                      rows={3}
                      className={`${field} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-ink-950 px-6 py-4.5 text-base font-extrabold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-ink-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950"
                  >
                    <MessageIcon className="h-5 w-5" />
                    {t.form.submit}
                  </button>

                  <p className="text-center text-xs leading-relaxed text-ink-400">
                    {t.form.disclaimer}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

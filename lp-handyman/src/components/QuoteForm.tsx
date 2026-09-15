"use client";

import { useRef, useState } from "react";
import { business, copy as t, smsLink, telLink } from "@/lib/content";
import { Reveal } from "./Reveal";
import { MessageIcon, PhoneIcon } from "./ui";

export function QuoteForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  /* Índices, não texto: a escolha acompanha a troca de idioma */
  const [typeIdx, setTypeIdx] = useState(0);
  const [budgetIdx, setBudgetIdx] = useState(0);
  const [notes, setNotes] = useState("");
  const [files, setFiles] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      t.form.msgIntro,
      "",
      `${t.form.name}: ${name || "-"}`,
      `${t.form.city}: ${city || "-"}`,
      `${t.form.type}: ${t.form.types[typeIdx]}`,
      `${t.form.budget}: ${t.form.budgets[budgetIdx]}`,
    ];
    if (notes.trim()) lines.push(`${t.form.notes}: ${notes.trim()}`);
    if (files.length) lines.push(`${t.form.photos}: ${files.length}`);
    window.location.assign(smsLink(lines.join("\n")));
  }

  const field =
    "w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3.5 text-[0.95rem] font-medium text-espresso-950 outline-none transition " +
    "placeholder:font-normal placeholder:text-espresso-400 focus:border-rust-500 focus:ring-4 focus:ring-rust-500/12";
  const label = "mb-2 block text-xs font-bold uppercase tracking-wider text-espresso-600";

  return (
    <section id="orcamento" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="grid overflow-hidden rounded-2xl border border-stone-200 shadow-raise lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-espresso-950 p-8 text-stone-50 sm:p-11">
              <span className="inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-rust-300">
                <span className="h-px w-8 bg-rust-400" />
                {t.form.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-[1.1] tracking-tight sm:text-4xl">
                {t.form.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-espresso-300">{t.form.sub}</p>

              <a
                href={telLink()}
                className="mt-9 flex items-center gap-4 rounded-xl bg-rust-500 px-5 py-4 transition hover:bg-rust-600 sm:px-6 sm:py-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-stone-50/15">
                  <PhoneIcon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-stone-50/70">
                    {t.form.callLabel}
                  </span>
                  <span className="block truncate font-display text-xl font-semibold sm:text-2xl">
                    {business.phonePretty}
                  </span>
                </span>
              </a>

              <dl className="mt-10 space-y-5 border-t border-stone-50/12 pt-8 text-sm">
                <div>
                  <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-espresso-400">Email</dt>
                  <dd className="mt-1.5 font-semibold">{business.email}</dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-espresso-400">
                    {t.hero.badgeTitle}
                  </dt>
                  <dd className="mt-1.5 font-semibold">{business.license}</dd>
                </div>
              </dl>
            </div>

            <div className="bg-stone-100 p-7 sm:p-10 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="q-name">{t.form.name}</label>
                    <input id="q-name" value={name} onChange={(e) => setName(e.target.value)}
                      placeholder={t.form.namePh} className={field} required />
                  </div>
                  <div>
                    <label className={label} htmlFor="q-city">{t.form.city}</label>
                    <select id="q-city" value={city} onChange={(e) => setCity(e.target.value)}
                      className={field} required>
                      <option value="" disabled>{t.form.cityPh}</option>
                      {business.cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={label} htmlFor="q-type">{t.form.type}</label>
                    <select id="q-type" value={typeIdx} onChange={(e) => setTypeIdx(Number(e.target.value))}
                      className={field}>
                      {t.form.types.map((x, i) => <option key={x} value={i}>{x}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={label} htmlFor="q-budget">{t.form.budget}</label>
                    <select id="q-budget" value={budgetIdx} onChange={(e) => setBudgetIdx(Number(e.target.value))}
                      className={field}>
                      {t.form.budgets.map((x, i) => <option key={x} value={i}>{x}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={label} htmlFor="q-notes">{t.form.notes}</label>
                  <textarea id="q-notes" value={notes} onChange={(e) => setNotes(e.target.value)}
                    placeholder={t.form.notesPh} rows={3} className={`${field} resize-none`} />
                </div>

                <div>
                  <span className={label}>{t.form.photos}</span>
                  <div className="flex flex-wrap items-center gap-3 rounded-lg border border-dashed border-stone-300 bg-stone-50 p-4">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="inline-flex items-center gap-2 rounded-lg border border-espresso-900/20 px-4 py-3 text-xs font-bold uppercase tracking-wider text-espresso-900 transition hover:bg-espresso-900/5"
                    >
                      <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
                        <path d="M10 4.5v11M4.5 10h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      {t.form.photosBtn}
                    </button>
                    <span className="min-w-0 flex-1 truncate text-xs font-medium text-espresso-400">
                      {files.length ? files.join(", ") : t.form.photosNone}
                    </span>
                    <input
                      ref={fileRef}
                      id="q-photos"
                      type="file"
                      accept="image/png,image/jpeg"
                      multiple
                      className="sr-only"
                      onChange={(e) =>
                        setFiles(Array.from(e.target.files ?? []).map((f) => f.name))
                      }
                    />
                  </div>
                  <p className="mt-2 text-xs text-espresso-400">{t.form.photosHint}</p>
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-espresso-950 px-6 py-4.5 text-sm font-bold uppercase tracking-wider text-stone-50 transition hover:bg-espresso-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust-500"
                >
                  <MessageIcon className="h-5 w-5" />
                  {t.form.submit}
                </button>

                <p className="text-center text-xs leading-relaxed text-espresso-400">
                  {t.form.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

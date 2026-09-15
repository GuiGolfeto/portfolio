"use client";

import { copy as t } from "@/lib/content";

import { Reveal } from "./Reveal";

export function Stats() {

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-4xl bg-ink-950/8 shadow-soft lg:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-8 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
                    {s.value}
                  </span>
                  <span className="mt-1.5 block text-sm font-medium text-ink-400">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

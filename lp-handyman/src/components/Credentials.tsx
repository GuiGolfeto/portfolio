"use client";

import { business, copy as t } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Credentials() {
  const years = String(new Date().getFullYear() - business.since);

  return (
    <section className="border-b border-stone-200 bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {t.credentials.map((c, i) => (
              <div
                key={c.l}
                className={`px-5 py-9 sm:px-7 ${i % 2 === 1 ? "border-l border-stone-200" : ""} ${
                  i > 1 ? "border-t border-stone-200 lg:border-t-0" : ""
                } ${i > 0 ? "lg:border-l lg:border-stone-200" : ""}`}
              >
                <dt className="sr-only">{c.l}</dt>
                <dd>
                  <span className="block font-display text-3xl font-semibold text-espresso-950 sm:text-4xl">
                    {c.v === "auto" ? years : c.v}
                  </span>
                  <span className="mt-2 block text-sm font-medium leading-snug text-espresso-600">
                    {c.l}
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

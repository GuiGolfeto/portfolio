"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { copy as t, projects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, SectionSub, SectionTitle } from "./ui";

export function Projects() {
  const [filter, setFilter] = useState("all");

  const shown = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.cat === filter)),
    [filter],
  );

  return (
    <section id="projetos" className="bg-espresso-950 py-24 text-stone-50 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <Eyebrow light>{t.projects.eyebrow}</Eyebrow>
            <SectionTitle light>{t.projects.title}</SectionTitle>
            <SectionSub light>{t.projects.sub}</SectionSub>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {t.projects.filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-lg px-5 py-3 text-xs font-bold uppercase tracking-wider transition ${
                  filter === f.id
                    ? "bg-rust-500 text-stone-50"
                    : "border border-stone-50/15 text-espresso-300 hover:border-stone-50/40 hover:text-stone-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {shown.length === 0 ? (
          <p className="mt-12 text-espresso-300">{t.projects.empty}</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, i) => {
              /* O primeiro item ocupa duas colunas para quebrar a monotonia da grade */
              const wide = i === 0 && shown.length > 2;
              return (
                <Reveal key={p.img} delay={(i % 3) * 90} className={wide ? "sm:col-span-2" : ""}>
                  <figure className="group relative h-full overflow-hidden rounded-xl bg-espresso-900">
                    {/* Espaçador define a altura natural do card; a imagem preenche
                        o figure inteiro, inclusive quando a linha da grade estica. */}
                    <div aria-hidden="true" className={wide ? "aspect-3/2 sm:aspect-2/1" : "aspect-4/3"} />
                    <Image
                      src={p.img}
                      alt={p.img}
                      fill
                      sizes={wide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/25 to-transparent" />

                    <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <h3 className="font-display text-xl font-semibold text-stone-50">{p.t}</h3>
                      <p className="mt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-wider text-espresso-300">
                        <span>{p.c}</span>
                        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-rust-400" />
                        <span>{p.d}</span>
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { barbers, copy as t, services, slots, smsLink, telLink } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Eyebrow, MessageIcon, PhoneIcon, SectionSub, SectionTitle } from "./ui";

const emptySubscribe = () => () => {};

/**
 * Os dias disponíveis dependem da data de hoje, que difere entre a renderização
 * no servidor e no cliente (e ficaria congelada num build estático). Só montamos
 * a grade depois da hidratação.
 */
function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

/** Segunda e domingo a barbearia fecha. */
const CLOSED_WEEKDAYS = [0, 1];

export function Booking() {
  const isClient = useIsClient();

  const [serviceId, setServiceId] = useState<string | null>(null);
  const [barberId, setBarberId] = useState<string>("any");
  const [dayKey, setDayKey] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);

  const days = useMemo(() => {
    if (!isClient) return [];
    const out: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    for (let i = 1; out.length < 10 && i <= 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      if (!CLOSED_WEEKDAYS.includes(d.getDay())) out.push(d);
    }
    return out;
  }, [isClient]);

  const service = services.find((s) => s.id === serviceId) ?? null;
  const barber = barbers.find((b) => b.id === barberId) ?? null;
  const day = days.find((d) => d.toDateString() === dayKey) ?? null;

  /* Sábado fecha às 18h, então o horário das 18:00 não é oferecido. */
  const openSlots = day?.getDay() === 6 ? slots.filter((s) => s !== "18:00") : slots;

  const ready = Boolean(service && day && time);

  function dayLabel(d: Date) {
    return `${t.booking.weekdays[d.getDay()]} ${d.getDate()}`;
  }

  function handleConfirm() {
    if (!service || !day || !time) return;
    const dateStr = day.toLocaleDateString("en-US", {
      day: "2-digit", month: "2-digit", year: "numeric",
    });
    const lines = [
      t.booking.msgIntro,
      "",
      `${service.t} — $${service.price}`,
      `${t.booking.labelBarber}: ${barber ? barber.name : t.booking.any}`,
      `${dateStr} · ${time}`,
    ];
    window.location.assign(smsLink(lines.join("\n")));
  }

  return (
    <section id="agendar" className="border-y border-bone-50/10 bg-night-900 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal>
          <div>
            <Eyebrow>{t.booking.eyebrow}</Eyebrow>
            <SectionTitle>{t.booking.title}</SectionTitle>
            <SectionSub>{t.booking.sub}</SectionSub>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          {/* min-w-0: sem isso o min-width:auto do item de grid deixa a tira
              de dias (overflow-x-auto) esticar a coluna inteira */}
          <div className="min-w-0 space-y-10">
            {/* Passo 1 — serviço */}
            <Step n="01" title={t.booking.step1}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {services.map((s) => (
                  <Choice
                    key={s.id}
                    active={serviceId === s.id}
                    onClick={() => setServiceId(s.id)}
                    title={s.t}
                    meta={`$${s.price} · ${s.min} ${t.services.min}`}
                  />
                ))}
              </div>
            </Step>

            {/* Passo 2 — barbeiro */}
            <Step n="02" title={t.booking.step2}>
              <div className="grid gap-2.5 sm:grid-cols-2">
                <Choice
                  active={barberId === "any"}
                  onClick={() => setBarberId("any")}
                  title={t.booking.any}
                  meta={t.booking.anyDesc}
                />
                {barbers.map((b) => (
                  <Choice
                    key={b.id}
                    active={barberId === b.id}
                    onClick={() => setBarberId(b.id)}
                    title={b.name}
                    meta={b.r}
                  />
                ))}
              </div>
            </Step>

            {/* Passo 3 — dia e hora */}
            <Step n="03" title={t.booking.step3}>
              {days.length === 0 ? (
                /* Antes da hidratação não há datas; reserva o espaço para não pular o layout */
                <div className="h-28 animate-pulse bg-bone-50/5" aria-hidden="true" />
              ) : (
                <>
                  <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                    <div className="flex gap-2.5">
                      {days.map((d) => {
                        const key = d.toDateString();
                        const active = dayKey === key;
                        return (
                          <button
                            key={key}
                            type="button"
                            onClick={() => { setDayKey(key); setTime(null); }}
                            aria-pressed={active}
                            className={`flex min-h-16 w-16 shrink-0 flex-col items-center justify-center border transition ${
                              active
                                ? "border-brass-400 bg-brass-500 text-night-950"
                                : "border-bone-50/15 text-night-300 hover:border-brass-400/60 hover:text-bone-50"
                            }`}
                          >
                            <span className="font-sans text-[0.6rem] font-bold uppercase tracking-[0.14em]">
                              {t.booking.weekdays[d.getDay()]}
                            </span>
                            <span className="display text-xl font-semibold">{d.getDate()}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {openSlots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        disabled={!dayKey}
                        onClick={() => setTime(s)}
                        aria-pressed={time === s}
                        className={`min-h-11 px-4 font-display text-sm font-medium tracking-[0.06em] transition ${
                          time === s
                            ? "bg-brass-500 text-night-950"
                            : "border border-bone-50/15 text-night-300 hover:border-brass-400/60 hover:text-bone-50"
                        } disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-bone-50/15 disabled:hover:text-night-300`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </Step>
          </div>

          {/* Resumo */}
          <Reveal delay={120} className="min-w-0">
            <aside className="sticky top-24 border border-bone-50/12 bg-night-850 p-7 sm:p-8">
              <h3 className="display text-xl font-semibold text-bone-50">{t.booking.summary}</h3>
              <div aria-hidden="true" className="rule-brass mt-5 h-px" />

              {service ? (
                <dl className="mt-6 space-y-4 text-sm">
                  <Row label={t.booking.labelService} value={service.t} />
                  <Row label={t.booking.labelBarber} value={barber ? barber.name : t.booking.any} />
                  <Row
                    label={t.booking.labelWhen}
                    value={day && time ? `${dayLabel(day)} · ${time}` : "—"}
                  />
                  <Row label={t.booking.duration} value={`${service.min} ${t.services.min}`} />
                  <div className="flex items-baseline justify-between border-t border-bone-50/12 pt-4">
                    <dt className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-night-400">
                      {t.booking.total}
                    </dt>
                    <dd className="display text-3xl font-semibold text-brass-400">${service.price}</dd>
                  </div>
                </dl>
              ) : (
                <p className="mt-6 text-sm leading-relaxed text-night-400">{t.booking.pickFirst}</p>
              )}

              <button
                type="button"
                onClick={handleConfirm}
                disabled={!ready}
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-brass-500 px-6 py-4 font-display text-sm font-medium uppercase tracking-[0.12em] text-night-950 transition hover:bg-brass-400 disabled:cursor-not-allowed disabled:bg-bone-50/12 disabled:text-night-400"
              >
                <MessageIcon className="h-5 w-5" />
                {t.booking.submit}
              </button>

              <a
                href={telLink()}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 border border-bone-50/20 px-6 py-3.5 font-display text-sm font-medium uppercase tracking-[0.1em] text-bone-50 transition hover:border-brass-400 hover:text-brass-300"
              >
                <PhoneIcon className="h-4 w-4" />
                {t.booking.call}
              </a>

              <p className="mt-5 text-xs leading-relaxed text-night-500">{t.booking.disclaimer}</p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div>
        <div className="flex items-center gap-3">
          <span className="display text-sm font-semibold text-brass-500">{n}</span>
          <h3 className="display text-lg font-medium text-bone-50 sm:text-xl">{title}</h3>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </Reveal>
  );
}

function Choice({
  active, onClick, title, meta,
}: { active: boolean; onClick: () => void; title: string; meta: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex min-h-16 flex-col justify-center border px-5 py-3.5 text-left transition ${
        active
          ? "border-brass-400 bg-brass-500/12"
          : "border-bone-50/12 hover:border-brass-400/50 hover:bg-bone-50/4"
      }`}
    >
      <span className={`font-display text-base font-medium uppercase tracking-[0.06em] ${active ? "text-brass-300" : "text-bone-50"}`}>
        {title}
      </span>
      <span className="mt-0.5 font-sans text-xs font-medium text-night-400">{meta}</span>
    </button>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="font-sans text-[0.65rem] font-bold uppercase tracking-[0.2em] text-night-400">
        {label}
      </dt>
      <dd className="min-w-0 truncate text-right font-medium text-bone-50">{value}</dd>
    </div>
  );
}

"use client";

import { copy as t } from "@/lib/content";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-3 transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#agendar"
        className="flex items-center justify-center gap-2 bg-brass-500 px-4 py-4 font-display text-sm font-medium uppercase tracking-[0.12em] text-night-950 shadow-drop"
      >
        {t.sticky}
      </a>
    </div>
  );
}

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
        href="#contato"
        className="flex items-center justify-center rounded-xl bg-iris-500 px-4 py-4 text-base font-bold text-white shadow-lift"
      >
        {t.sticky}
      </a>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { copy as t, telLink } from "@/lib/content";
import { PhoneIcon } from "./ui";

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
        href={telLink()}
        className="flex items-center justify-center gap-2 rounded-lg bg-rust-500 px-4 py-4 text-[0.8rem] font-bold uppercase tracking-wider text-stone-50 shadow-raise"
      >
        <PhoneIcon className="h-5 w-5 shrink-0" />
        {t.sticky}
      </a>
    </div>
  );
}

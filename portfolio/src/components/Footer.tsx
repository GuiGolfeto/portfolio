"use client";

import { copy as t, me } from "@/lib/content";
import { InstagramIcon, MailIcon } from "./ui";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-200 pb-28 pt-12 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-ink-400">
          © {year} {me.name}. {t.footer.rights}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${me.email}`}
            aria-label={me.email}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-600 transition hover:border-ink-400 hover:text-ink-950"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={me.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`@${me.instagram}`}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-ink-200 text-ink-600 transition hover:border-ink-400 hover:text-ink-950"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

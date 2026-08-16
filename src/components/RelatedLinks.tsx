import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { tr } from "@/i18n/html-translations";
import { localePath } from "@/lib/links";

export type RelatedLink = { href: string; label: string; note?: string };

/**
 * Querverweise am Ende einer Detailseite.
 *
 * Bisher hingen Systeme, Vergleiche und Glossar als getrennte Silos nebeneinander:
 * jede Seite war von ihrem Hub aus erreichbar, aber nicht von den thematisch
 * naechsten Nachbarn. Genau diese Kanten sind es, denen Crawler und Leser folgen.
 */
export function RelatedLinks({
  locale,
  heading,
  links,
}: {
  locale: Locale;
  heading: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <section className="rounded-card border border-sand bg-white p-6 shadow-soft">
      <span className="kicker">{tr(locale, heading)}</span>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={localePath(locale, link.href)}
            className="rounded-card border border-sand bg-creme-tief p-4 no-underline transition-transform hover:-translate-y-0.5"
          >
            <span className="block text-[17px] text-aubergine">{tr(locale, link.label)}</span>
            {link.note ? <span className="note mt-1 block">{tr(locale, link.note)}</span> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

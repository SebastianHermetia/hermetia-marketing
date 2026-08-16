import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { tr } from "@/i18n/html-translations";
import { localePath } from "@/lib/links";

export type HubIndexItem = { slug: string; title: string; description: string };

/**
 * Listet die Unterseiten eines Hubs als Kartenraster.
 *
 * Ohne diese Verlinkung sind Detailseiten nur ueber die Sitemap erreichbar: kein
 * interner Linkjuice, kaum Crawl-Prioritaet, praktisch keine Chance auf Rankings.
 * Vorbild sind /systeme/bibliothek/ und /glossar/themen/, die es richtig machen.
 *
 * Titel und Beschreibungen kommen aus dem deutschen Content und werden nach dem
 * Build ueber content/i18n-html-translations.json uebersetzt.
 */
export function HubIndex({
  locale,
  heading,
  basePath,
  items,
}: {
  locale: Locale;
  heading: string;
  basePath: string;
  items: HubIndexItem[];
}) {
  if (!items.length) return null;
  return (
    <section id="alle-beitraege" className="mt-12 scroll-mt-24">
      <h2 className="text-[clamp(24px,3vw,32px)]">{tr(locale, heading)}</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={localePath(locale, `${basePath}/${item.slug}`)}
            className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1"
          >
            <h3 className="text-[18px]">{tr(locale, item.title)}</h3>
            <p className="muted mt-2 text-[14.5px] leading-relaxed">{tr(locale, item.description)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/** ItemList-Schema zum Kartenraster — macht die Sammlung fuer Antwortmaschinen lesbar. */
export function hubItemListSchema(opts: {
  name: string;
  siteUrl: string;
  locale: Locale;
  basePath: string;
  items: HubIndexItem[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: tr(opts.locale, opts.name),
    itemListElement: opts.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${opts.siteUrl}/${opts.locale}${opts.basePath}/${item.slug}/`,
      name: tr(opts.locale, item.title),
    })),
  };
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeNames, type Locale } from "@/i18n/config";

// Wechselt die Sprache, indem das erste Pfadsegment (Locale) getauscht wird.
export function LocaleSwitch({ locale, current }: { locale: Locale; current?: string }) {
  void current;
  const pathname = usePathname() || `/${locale}/`;

  function swap(target: Locale): string {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${target}/`;
    parts[0] = target;
    return "/" + parts.join("/") + "/";
  }

  return (
    <div className="hidden items-center gap-1 text-[13px] sm:flex" aria-label="Sprache wählen">
      {locales.map((l, idx) => (
        <span key={l} className="flex items-center gap-1">
          {idx > 0 && <span className="text-sand">·</span>}
          {l === locale ? (
            <span className="font-semibold text-aubergine" aria-current="true">{l.toUpperCase()}</span>
          ) : (
            <Link href={swap(l)} className="text-tinte/60 no-underline hover:text-aubergine" hrefLang={l} title={localeNames[l]}>
              {l.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

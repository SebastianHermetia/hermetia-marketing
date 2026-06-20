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
    <details className="group relative hidden text-[13px] lg:block" aria-label="Sprache wählen">
      <summary className="flex cursor-pointer list-none items-center gap-1 rounded-full border border-sand bg-white/60 px-3 py-2 font-semibold text-aubergine">
        {locale.toUpperCase()}
        <span className="text-tinte/50">▾</span>
      </summary>
      <div className="absolute right-0 top-11 z-50 grid max-h-[420px] w-[220px] grid-cols-2 gap-1 overflow-auto rounded-card border border-sand bg-white p-2 shadow-soft">
        {locales.map((l) => (
          <a
            key={l}
            href={swap(l)}
            className={`rounded-[10px] px-2.5 py-2 no-underline hover:bg-creme-tief ${l === locale ? "bg-creme-tief font-semibold text-aubergine" : "text-tinte/70"}`}
            hrefLang={l}
            title={localeNames[l]}
          >
            <span className="block text-[12px] uppercase">{l}</span>
            <span className="block truncate text-[11px]">{localeNames[l]}</span>
          </a>
        ))}
      </div>
    </details>
  );
}

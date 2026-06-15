import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath, loginUrl, startUrl, paths } from "@/lib/links";
import { LocaleSwitch } from "./LocaleSwitch";

export function Header({ locale, current }: { locale: Locale; current?: string }) {
  const t = getDictionary(locale);
  const items = [
    { href: localePath(locale, paths.leistungen), label: t.nav.leistungen, key: "leistungen" },
    { href: localePath(locale, paths.systeme), label: t.nav.systeme, key: "systeme" },
    { href: localePath(locale, paths.methodik), label: t.nav.methodik, key: "methodik" },
    { href: localePath(locale, paths.konvergenz), label: "Konvergenz", key: "konvergenz" },
    { href: localePath(locale, paths.glossar), label: t.footer.glossar, key: "glossar" },
    { href: localePath(locale, paths.preise), label: t.nav.preise, key: "preise" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-sand bg-creme/80 backdrop-blur">
      <div className="wrap flex h-[68px] items-center gap-7">
        <Link href={localePath(locale)} className="flex items-center gap-2 font-serif text-[21px] text-aubergine no-underline">
          <span className="relative inline-block h-[22px] w-[22px] rounded-full border-[1.4px] border-gold">
            <span className="absolute inset-[5px] rounded-full bg-gold/85" />
          </span>
          Hermetia
        </Link>
        <nav className="ml-2 hidden gap-6 text-[14.5px] md:flex">
          {items.map((i) => (
            <Link key={i.key} href={i.href} className={`no-underline hover:text-aubergine ${current === i.key ? "text-aubergine" : "text-tinte/80"}`}>
              {i.label}
            </Link>
          ))}
        </nav>
        <span className="flex-1" />
        <LocaleSwitch locale={locale} current={current} />
        <a className="btn btn-ghost hidden sm:inline-flex" href={loginUrl(locale)}>{t.nav.login}</a>
        <a className="btn btn-primary" href={startUrl(locale)}>{t.nav.start}</a>
      </div>
    </header>
  );
}

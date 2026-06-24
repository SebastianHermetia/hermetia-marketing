import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath, loginUrl, startUrl, paths } from "@/lib/links";
import { LocaleSwitch } from "./LocaleSwitch";
import { MobileMenu } from "./MobileMenu";

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
      <div className="wrap flex h-[68px] items-center gap-4 lg:gap-6">
        <Link href={localePath(locale)} className="flex shrink-0 items-center gap-2 font-serif text-[21px] text-aubergine no-underline">
          <span className="relative inline-block h-[22px] w-[22px] rounded-full border-[1.4px] border-gold">
            <span className="absolute inset-[5px] rounded-full bg-gold/85" />
          </span>
          Astrakey
        </Link>
        <nav className="ml-1 hidden min-w-0 gap-4 text-[14px] lg:flex xl:gap-6 xl:text-[14.5px]">
          {items.map((i) => (
            <Link key={i.key} href={i.href} className={`whitespace-nowrap no-underline hover:text-aubergine ${current === i.key ? "text-aubergine" : "text-tinte/80"}`}>
              {i.label}
            </Link>
          ))}
        </nav>
        <span className="flex-1" />
        {/* Desktop: locale switch + login — hidden below lg (covered by MobileMenu drawer) */}
        <LocaleSwitch locale={locale} current={current} />
        <a className="btn btn-ghost hidden whitespace-nowrap lg:inline-flex" href={loginUrl(locale, { source: "header-login", medium: "nav" })}>{t.nav.login}</a>
        <a className="btn btn-primary whitespace-nowrap" href={startUrl(locale, { source: "header-start", medium: "nav" })}>{t.nav.start}</a>
        {/* Mobile hamburger — renders drawer with nav + locale + login */}
        <MobileMenu
          items={items}
          loginLabel={t.nav.login}
          loginHref={loginUrl(locale, { source: "header-login-mobile", medium: "nav" })}
          menuOpenLabel={t.nav.menu_open}
          menuCloseLabel={t.nav.menu_close}
          locale={locale}
        />
      </div>
    </header>
  );
}


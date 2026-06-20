import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath, paths } from "@/lib/links";
import { localizedUi } from "@/i18n/localized-content";

const footerLabels = {
  de: {
    onboarding: "Profil starten",
    convergence: "Konvergenz-Engine",
    soulMap: "Seelenkarte",
    freePremium: "Kostenlos vs Premium",
    comparisons: "Vergleiche",
    useCases: "Anwendungsfälle",
    dailyImpulses: "Tagesimpulse",
    profileBook: "Vollprofil-Buch",
    refineProfile: "Profil verfeinern",
    relationships: "Beziehungen",
    languages: "Sprachen",
    dataSecurity: "Daten & Sicherheit",
    approvals: "Freigaben",
  },
  en: {
    onboarding: "Start profile",
    convergence: "Convergence engine",
    soulMap: "Soul map",
    freePremium: "Free vs Premium",
    comparisons: "Comparisons",
    useCases: "Use cases",
    dailyImpulses: "Daily impulses",
    profileBook: "Full profile book",
    refineProfile: "Refine profile",
    relationships: "Relationships",
    languages: "Languages",
    dataSecurity: "Data & security",
    approvals: "Launch approvals",
  },
} as const;

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const L = (p: string) => localePath(locale, p);
  const ui = localizedUi(locale);
  const labels = locale === "de" ? footerLabels.de : locale === "en" ? footerLabels.en : {
    onboarding: ui.startFree,
    convergence: ui.method,
    soulMap: ui.title,
    freePremium: ui.safeNote,
    comparisons: ui.comparison,
    useCases: ui.overview,
    dailyImpulses: ui.method,
    profileBook: ui.article,
    refineProfile: ui.method,
    relationships: ui.safeNote,
    languages: ui.overview,
    dataSecurity: ui.safeNote,
    approvals: ui.limits,
  };

  return (
    <footer className="bg-aubergine py-14 text-[14px] text-gold-weich">
      <div className="wrap">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2 font-serif text-[21px] text-gold-weich">
              <span className="relative inline-block h-[22px] w-[22px] rounded-full border-[1.4px] border-gold">
                <span className="absolute inset-[5px] rounded-full bg-gold/85" />
              </span>
              Hermetia
            </span>
            <p className="mt-4 max-w-[240px] text-[#cdbfe0]">{t.footer.blurb}</p>
          </div>
          <FootCol title={t.footer.product}>
            <FootLink href={L(paths.leistungen)}>{t.nav.leistungen}</FootLink>
            <FootLink href={L(paths.onboarding)}>{labels.onboarding}</FootLink>
            <FootLink href={L(paths.systeme)}>{t.nav.systeme}</FootLink>
            <FootLink href={L(paths.methodik)}>{t.nav.methodik}</FootLink>
            <FootLink href={L(paths.konvergenz)}>{labels.convergence}</FootLink>
            <FootLink href={L(paths.seelenkarte)}>{labels.soulMap}</FootLink>
            <FootLink href={L(paths.preise)}>{t.nav.preise}</FootLink>
            <FootLink href={L(paths.freePremium)}>{labels.freePremium}</FootLink>
          </FootCol>
          <FootCol title={t.footer.discover}>
            <FootLink href={L(paths.glossar)}>{t.footer.glossar}</FootLink>
            <FootLink href={L(paths.wissen)}>{t.footer.magazin}</FootLink>
            <FootLink href={L(paths.vergleiche)}>{labels.comparisons}</FootLink>
            <FootLink href={L(paths.anwendungsfaelle)}>{labels.useCases}</FootLink>
            <FootLink href={L(paths.about)}>{t.footer.about}</FootLink>
            <FootLink href={L(paths.tagesimpulse)}>{labels.dailyImpulses}</FootLink>
            <FootLink href={L(paths.journaling)}>Journaling</FootLink>
            <FootLink href={L(paths.profilBuch)}>{labels.profileBook}</FootLink>
            <FootLink href={L(paths.companion)}>Companion</FootLink>
            <FootLink href={L(paths.profilVerfeinern)}>{labels.refineProfile}</FootLink>
            <FootLink href={L(paths.beziehungen)}>{labels.relationships}</FootLink>
            <FootLink href={L(paths.sprachen)}>{labels.languages}</FootLink>
            <FootLink href={L(paths.faq)}>{t.footer.faq}</FootLink>
          </FootCol>
          <FootCol title={t.footer.legal}>
            <FootLink href={L(paths.datenschutz)}>{t.footer.datenschutz}</FootLink>
            <FootLink href={L(paths.datenSicherheit)}>{labels.dataSecurity}</FootLink>
            <FootLink href={L(paths.ki)}>{t.footer.kiTransparenz}</FootLink>
            <FootLink href={L(paths.freigaben)}>{labels.approvals}</FootLink>
            <FootLink href={L(paths.agb)}>{t.footer.agb}</FootLink>
            <FootLink href={L(paths.widerruf)}>{t.footer.widerruf}</FootLink>
            <FootLink href={L(paths.impressum)}>{t.footer.impressum}</FootLink>
          </FootCol>
        </div>
        <hr className="hair my-6 border-gold-weich/20" />
        <p className="text-[12.5px] text-[#bfb0d2]">© 2026 Hermetia · {t.footer.disclaimer}</p>
      </div>
    </footer>
  );
}

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    /* On mobile: collapsible accordion via native <details>. On md+: always expanded. */
    <details className="group md:[&>summary]:pointer-events-none md:[&>*:not(summary)]:block">
      <summary className="flex cursor-pointer list-none items-center justify-between py-2 md:cursor-default md:py-0">
        <h4 className="font-sans text-[12px] font-bold uppercase tracking-[1.5px] text-gold">{title}</h4>
        <span className="text-gold/60 transition-transform duration-200 group-open:rotate-180 md:hidden" aria-hidden="true">▾</span>
      </summary>
      <ul className="hidden flex-col gap-2.5 list-none pt-1 pb-2 group-open:flex md:flex md:pt-0 md:pb-0 md:mt-3.5">{children}</ul>
    </details>
  );
}
function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[#d8c9e6]/85 no-underline hover:text-white">{children}</Link>
    </li>
  );
}

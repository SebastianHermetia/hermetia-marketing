import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath, paths } from "@/lib/links";

export function Footer({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const L = (p: string) => localePath(locale, p);

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
            <FootLink href={L(paths.systeme)}>{t.nav.systeme}</FootLink>
            <FootLink href={L(paths.methodik)}>{t.nav.methodik}</FootLink>
            <FootLink href={L(paths.konvergenz)}>Konvergenz-Engine</FootLink>
            <FootLink href={L(paths.seelenkarte)}>Seelenkarte</FootLink>
            <FootLink href={L(paths.preise)}>{t.nav.preise}</FootLink>
          </FootCol>
          <FootCol title={t.footer.discover}>
            <FootLink href={L(paths.glossar)}>{t.footer.glossar}</FootLink>
            <FootLink href={L(paths.wissen)}>{t.footer.magazin}</FootLink>
            <FootLink href={L(paths.vergleiche)}>Vergleiche</FootLink>
            <FootLink href={L(paths.anwendungsfaelle)}>Anwendungsfälle</FootLink>
            <FootLink href={L(paths.about)}>{t.footer.about}</FootLink>
            <FootLink href={L(paths.tagesimpulse)}>Tagesimpulse</FootLink>
            <FootLink href={L(paths.beziehungen)}>Beziehungen</FootLink>
            <FootLink href={L(paths.sprachen)}>Sprachen</FootLink>
            <FootLink href={L(paths.faq)}>{t.footer.faq}</FootLink>
          </FootCol>
          <FootCol title={t.footer.legal}>
            <FootLink href={L(paths.datenschutz)}>{t.footer.datenschutz}</FootLink>
            <FootLink href={L(paths.ki)}>{t.footer.kiTransparenz}</FootLink>
            <FootLink href={L(paths.freigaben)}>Freigaben</FootLink>
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
    <div>
      <h4 className="mb-3.5 font-sans text-[12px] font-bold uppercase tracking-[1.5px] text-gold">{title}</h4>
      <ul className="flex flex-col gap-2.5 list-none">{children}</ul>
    </div>
  );
}
function FootLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[#d8c9e6]/85 no-underline hover:text-white">{children}</Link>
    </li>
  );
}

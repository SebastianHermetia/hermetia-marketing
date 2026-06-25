import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd, articleSchema, faqSchema } from "@/components/JsonLd";
import { type Locale, siteUrl } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { tr, trItems, trObject } from "@/i18n/html-translations";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths } from "@/lib/links";
import { getSystemLibraryItems, systemLibraryIntro, systemLibrarySections } from "@/content/system-library";
import { systemText } from "@/content/systems";

const routePath = paths.systemeBibliothek;
const heroImage = "/images/hermetia/celestial-layer-orbits.png";

const faq = [
  { q: "Welche Systeme nutzt Astrakey?", a: "Astrakey nutzt unter anderem Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm, Maya Tzolkin, Nakshatra, I Ching, Ayurveda, Big Five, RIASEC, Chronotyp, VIA-Staerken und weitere symbolische, psychologische und koerperbezogene Perspektiven." },
  { q: "Warum so viele Systeme?", a: "Weil kein einzelnes System einen Menschen vollstaendig beschreibt. Mehrere Perspektiven helfen, wiederkehrende Themen von Einzelaussagen zu unterscheiden." },
  { q: "Werden aehnliche Systeme doppelt gezaehlt?", a: "Nein. Astrakey gruppiert verwandte Quellen in Systemfamilien. Ein Echo innerhalb derselben Familie wird vorsichtig behandelt und nicht wie eine unabhaengige zweite Stimme gewertet." },
  { q: "Brauche ich fuer alle Systeme genaue Geburtsdaten?", a: "Nein. Manche Systeme brauchen Datum, Ort und Zeit. Andere nutzen Name, Datum oder Selbstauskunft. Astrakey zeigt, welcher Datenbedarf jeweils gilt." },
  { q: "Kann ich jedes System einzeln ansehen?", a: "Ja. Jedes System bekommt eine eigene Detailseite mit kurzer Erklaerung, Datenbedarf, Rolle im Profil und Grenze." },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = locale as Locale;
  return buildMetadata({ locale: loc, path: routePath, title: tr(loc, systemLibraryIntro.seoTitle), description: tr(loc, systemLibraryIntro.seoDescription) });
}

export default async function SystemLibraryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const t = getDictionary(locale);
  const items = getSystemLibraryItems();
  const families = Array.from(new Set(items.map((item) => item.library.family)));
  const intro = trObject(locale, systemLibraryIntro);
  const sections = trItems(locale, systemLibrarySections);
  const localizedFaq = trItems(locale, faq);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: intro.seoTitle, description: intro.seoDescription, locale, url: `${siteUrl}/${locale}${routePath}/`, about: intro.title, image: `${siteUrl}${heroImage}` }),
          faqSchema(localizedFaq),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: tr(locale, "Astrakey Systembibliothek"),
            itemListElement: items.map((item, index) => {
              const c = systemText(item, locale);
              return { "@type": "ListItem", position: index + 1, url: `${siteUrl}/${locale}${paths.systeme}/${item.slug}/`, name: tr(locale, c.name) };
            }),
          },
        ]}
      />
      <Header locale={locale} current="systeme" />
      <main>
        <section className="pb-10 pt-14">
          <div className="wrap grid items-center gap-9 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <Breadcrumbs locale={locale} items={[{ label: t.nav.systeme, href: paths.systeme }, { label: intro.eyebrow }]} />
              <span className="kicker mt-5 block">{intro.eyebrow}</span>
              <h1 className="mt-3 text-[clamp(32px,5vw,50px)] leading-[1.08]">{intro.title}</h1>
              <p className="lead mt-5 max-w-[680px]">{intro.lead}</p>
              <p className="note mt-4 max-w-[680px]">{intro.trustline}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-primary btn-lg" href={localePath(locale, paths.onboarding)}>{tr(locale, "Profil kostenlos starten")}</a>
                <a className="btn btn-ghost btn-lg" href={localePath(locale, paths.konvergenz)}>{tr(locale, "Konvergenz verstehen")}</a>
              </div>
            </div>
            <figure className="overflow-hidden rounded-card border border-sand bg-white shadow-soft">
              <img src={heroImage} alt={tr(locale, "Astrakey Systembibliothek")} width={1200} height={780} className="h-full max-h-[520px] w-full object-cover" />
            </figure>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-card border border-sand bg-white p-5 shadow-soft">
                <p className="kicker mb-3">{tr(locale, "Auf dieser Seite")}</p>
                <nav className="flex flex-col gap-2 text-[14px]">
                  <a href="#kurz" className="text-tinte/70 no-underline hover:text-aubergine">{tr(locale, "Kurz gesagt")}</a>
                  {sections.map((section, index) => (
                    <a key={section.title} href={`#${slugify(systemLibrarySections[index].title)}`} className="text-tinte/70 no-underline hover:text-aubergine">{section.title}</a>
                  ))}
                  <a href="#alle-systeme" className="text-tinte/70 no-underline hover:text-aubergine">{tr(locale, "Alle Systeme")}</a>
                </nav>
              </div>
            </aside>
            <article className="min-w-0">
              <div id="kurz" className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
                <span className="kicker">{tr(locale, "Kurz gesagt")}</span>
                <p className="mt-2 text-[18px] leading-relaxed text-aubergine">{intro.answer}</p>
              </div>
              <div className="mt-10 flex flex-col gap-10">
                {sections.map((section, index) => (
                  <section key={section.title} id={slugify(systemLibrarySections[index].title)} className="scroll-mt-24">
                    <h2 className="text-[clamp(24px,3vw,32px)]">{section.title}</h2>
                    <p className="muted mt-3 text-[17px] leading-[1.85]">{section.body}</p>
                  </section>
                ))}
              </div>
              <section id="alle-systeme" className="mt-12 scroll-mt-24">
                <span className="kicker">{tr(locale, "Alle Systeme")}</span>
                <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">{tr(locale, "Kuratierte Perspektiven statt lose Sammlung")}</h2>
                <div className="mt-6 flex flex-col gap-10">
                  {families.map((family) => (
                    <div key={family}>
                      <h3 className="text-[22px]">{tr(locale, family)}</h3>
                      <div className="mt-4 grid gap-4 md:grid-cols-2">
                        {items.filter((item) => item.library.family === family).map((item) => {
                          const c = systemText(item, locale);
                          return (
                            <Link key={item.slug} href={localePath(locale, `${paths.systeme}/${item.slug}`)} className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1">
                              <div className="flex items-start gap-3">
                                <span className="ic shrink-0" aria-hidden>{item.glyph}</span>
                                <div className="min-w-0">
                                  <h4 className="text-[19px]">{tr(locale, c.name)}</h4>
                                  <p className="note mt-1">{tr(locale, c.tagline)}</p>
                                </div>
                              </div>
                              <dl className="mt-4 grid gap-3 text-[14.5px] leading-relaxed text-pflaume/90">
                                <div><dt className="kicker">{tr(locale, "Datenbedarf")}</dt><dd className="mt-1">{tr(locale, item.library.dataNeed)}</dd></div>
                                <div><dt className="kicker">{tr(locale, "Rolle im Profil")}</dt><dd className="mt-1">{tr(locale, item.library.role)}</dd></div>
                                <div><dt className="kicker">{tr(locale, "Grenze")}</dt><dd className="mt-1">{tr(locale, item.library.limit)}</dd></div>
                              </dl>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <div className="mt-12">
                <AppCta locale={locale} title={tr(locale, "Sieh, welche Systeme bei dir wirklich zusammenlaufen.")} text={tr(locale, "Starte dein Profil kostenlos und pruefe, welche Perspektiven deine Kernthemen tragen.")} source="system-library-final" />
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function slugify(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { getLocaleStatuses, translationBacklog, translationBacklogSummary, translationQaGates, translationQaSummary, translationSummary } from "@/i18n/translation-status";
import { buildMetadata } from "@/lib/seo";
import { localePath, paths, startUrl } from "@/lib/links";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppCta } from "@/components/AppCta";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    locale: locale as Locale,
    path: paths.sprachen,
    title: "Hermetia Sprachen — Übersetzungsstatus und EU-Rollout",
    description: "Welche Hermetia-Sprachen redaktionell freigegeben sind, welche technisch live sind und wie der mehrsprachige EU-Rollout umgesetzt wird.",
  });
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const statuses = getLocaleStatuses();
  const summary = translationSummary();
  const backlog = translationBacklogSummary();
  const qa = translationQaSummary();

  return (
    <>
      <Header locale={locale} current="sprachen" />
      <main>
        <section className="py-16">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Mehrsprachigkeit</span>
            <h1 className="mt-3 text-[clamp(32px,5vw,50px)]">Hermetia in europäischen Sprachen</h1>
            <p className="lead mt-5 max-w-[760px]">
              Hermetia ist technisch bereits für alle offiziellen EU-Sprachen vorbereitet. Redaktionelle Qualität bleibt dabei wichtiger als ein stiller Maschinen-Fallback: nicht final geprüfte Sprachfassungen werden sichtbar gekennzeichnet.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <Metric label="Sprachrouten live" value={summary.total.toString()} />
              <Metric label="Redaktionell freigegeben" value={summary.editorial.toString()} />
              <Metric label="UI lokalisiert, Longform offen" value={summary.ui.toString()} />
              <Metric label="Technischer Fallback" value={summary.fallback.toString()} />
            </div>
          </div>
        </section>

        <section className="pb-10">
          <div className="wrap max-w-[980px]">
            <div className="rounded-card border border-gold/30 bg-gold-weich/25 p-6">
              <h2 className="text-[clamp(24px,3vw,32px)]">Warum Fallback-Sprachen trotzdem live sind</h2>
              <p className="muted mt-3 text-[17px] leading-[1.85]">
                Der frühe technische Rollout sorgt dafür, dass URL-Struktur, hreflang, Sitemap, Sprachwahl und App-Weiterleitung jetzt schon stabil sind. Gleichzeitig schützt der sichtbare Sprachhinweis Nutzer und Suchsysteme davor, unfertige Übersetzungen als finale lokale Redaktion zu verstehen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <h2 className="text-[clamp(24px,3vw,32px)]">Aktueller Übersetzungsstatus</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {statuses.map((entry) => (
                <a
                  key={entry.locale}
                  href={localePath(entry.locale)}
                  hrefLang={entry.locale}
                  className="rounded-card border border-sand bg-white p-5 no-underline shadow-soft transition-transform hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-aubergine">{entry.name}</p>
                      <p className="note mt-1 uppercase">{entry.locale}</p>
                    </div>
                    <span className={entry.status === "editorial" ? "chip" : "chip chip-gold"}>{entry.label}</span>
                  </div>
                  <p className="muted mt-4 text-[14.5px] leading-relaxed">{entry.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="wrap max-w-[980px]">
            <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
              <div className="rounded-card border border-sand bg-white p-6 shadow-soft">
                <h2 className="text-[clamp(24px,3vw,32px)]">Rollout-Prinzip</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Erst werden Deutsch und Englisch als Masterfassungen gepflegt. Danach folgen große EU-Sprachen schrittweise: zunächst Navigation, CTAs und globale UI, danach Longform-Content mit Terminologie-QA. Rechtliche Seiten, Datenschutz, AI-Transparenz und Beziehungsinhalte werden erst nach gesonderter Prüfung als redaktionell freigegeben markiert.
                </p>
              </div>
              <div className="rounded-card border border-altrosa/25 bg-altrosa/10 p-6">
                <h2 className="text-[clamp(24px,3vw,32px)]">Was Nutzer wissen sollen</h2>
                <p className="muted mt-3 text-[17px] leading-[1.85]">
                  Die Sprachwahl ist schon nutzbar. Bei nicht final geprüften Sprachen ist der Inhalt aber als vorbereiteter Rollout zu verstehen. Für Anmeldung und Profilstart wird die gewählte Sprache als Hinweis an die App übergeben.
                </p>
                <a className="btn btn-primary mt-5" href={startUrl(locale, { source: "language-status-inline" })}>Profil kostenlos starten</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Redaktions-Backlog</span>
            <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">Was noch übersetzt und geprüft wird</h2>
            <p className="muted mt-3 max-w-[760px] text-[17px] leading-[1.85]">
              Die UI ist in allen 24 EU-Sprachen nutzbar. Die vollständige Longform-Übersetzung wird nach Priorität ausgerollt, damit rechtliche Inhalte, Conversion-Seiten und Kernmethode vor breiten SEO-Clustern geprüft werden.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              <Metric label="Backlog-Gruppen" value={backlog.pageTypes.toString()} />
              <Metric label="Seiten im Longform-Backlog" value={backlog.pages.toString()} />
              <Metric label="P0-Gruppen" value={backlog.p0.toString()} />
              <Metric label="P1/P2-Gruppen" value={`${backlog.p1}/${backlog.p2}`} />
            </div>
            <div className="mt-6 grid gap-4">
              {translationBacklog.map((item) => (
                <article key={item.key} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-[22px]">{item.label}</h3>
                      <p className="muted mt-2 text-[15px] leading-relaxed">{item.status}</p>
                    </div>
                    <span className={item.priority === "P0" ? "chip chip-rose" : item.priority === "P1" ? "chip chip-gold" : "chip"}>{item.priority}</span>
                  </div>
                  <p className="note mt-4">
                    {item.pages} Seiten · Zielumfang je Seite: {item.wordsPerPage} Wörter
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="wrap max-w-[980px]">
            <span className="kicker">Translation QA</span>
            <h2 className="mt-3 text-[clamp(24px,3vw,32px)]">Freigabe-Gates für lokale Longform-Inhalte</h2>
            <p className="muted mt-3 max-w-[760px] text-[17px] leading-[1.85]">
              Eine Sprache gilt erst dann als redaktionell freigegeben, wenn diese Gates erfüllt sind. Dadurch bleiben rechtliche Aussagen, Terminologie, AI-Grenzen und Conversion-Versprechen auch in lokalen Fassungen konsistent.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Metric label="QA-Gates" value={qa.gates.toString()} />
              <Metric label="Legal/Safety-kritisch" value={qa.legalCritical.toString()} />
            </div>
            <div className="mt-6 grid gap-4">
              {translationQaGates.map((gate) => (
                <article key={gate.id} className="rounded-card border border-sand bg-white p-5 shadow-soft">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className="text-[22px]">{gate.title}</h3>
                    <span className="chip chip-gold">{gate.appliesTo}</span>
                  </div>
                  <p className="muted mt-3 text-[15px] leading-relaxed">{gate.requirement}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="wrap max-w-[980px]">
            <AppCta
              locale={locale}
              title="Starte in deiner bevorzugten Sprache."
              text="Hermetia merkt sich deine Sprachwahl für den Profilstart und führt dich transparent durch den aktuellen Übersetzungsstand."
              source="language-status"
            />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-card border border-sand bg-white p-5 shadow-soft">
      <p className="text-[34px] font-semibold text-aubergine">{value}</p>
      <p className="note mt-1">{label}</p>
    </div>
  );
}

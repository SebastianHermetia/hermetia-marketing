# Hermetia — Marketing-Basisseite

Öffentliche Marketing-Website für Hermetia. Sie erklärt Seelenkarte,
Konvergenz-Engine, Systeme, Wissen, Vergleiche, Preise und rechtliche Grenzen
und führt Nutzer in Onboarding und Login der bestehenden Hermetia-App.

- **Stack:** Next.js 16 (App Router), **statischer Export** (`output: "export"` → `/out`), Tailwind, TypeScript.
- **i18n:** 24 offizielle EU-Sprachrouten. DE und EN sind redaktionell gepflegt, alle weiteren Sprachen haben lokalisierte UI-Texte und nutzen für fehlende Longform-Inhalte einen sichtbaren englischen Editorial-Fallback bis zur finalen Redaktion.
- **SEO/GEO/AEO:** pro Seite canonical + hreflang, Schema.org JSON-LD (`Organization`, `FAQPage`, Content-/Produktdaten), `sitemap.xml`, `robots.txt`, OG-Bild.
- **Contentumfang:** 31 Systemseiten, 51 Glossarbegriffe, 20 Wissensartikel, 12 Vergleichsseiten plus Pillar-, Preis-, Rechts-, Sprachstatus- und Freigabeseiten.
- **Launch-Sicherheit:** noindex/nofollow in der Testphase, Asset-Inventar, Freigabe-Gates und CI-Prüfungen für Content, Assets und Compliance.
- **Brand:** Design-Tokens aus dem Hermetia-Design-Briefing (Creme/Aubergine/Gold, Fraunces + Mulish) in `tailwind.config.ts`.

## Befehle

```bash
npm install
npm run dev        # Entwicklung: http://localhost:3000  (→ /de/)
npm run build      # statischer Export nach /out
npm run check:assets
npm run check:content
npm run check:compliance
```

## Struktur

```
src/app/[locale]/        Seiten je Sprache (Start, Pillars, Ressourcen, Preise, FAQ, Recht, Sprachen, Freigaben)
src/components/          Header, Footer, SoulMap, Faq, JsonLd, LegalPage, LocaleSwitch
src/i18n/                Sprach-Konfig + Dictionary-Loader
src/lib/                 SEO-Metadaten + Link-Helfer
src/content/             Systeme, Wissensinhalte, Glossar, Vergleiche, Launch-Gates
messages/                UI- und Seitentexte je Sprache
public/admin/            Decap CMS (Inhalte ohne Code bearbeiten)
content/                 Asset-Inventar und redaktionelle Betriebsdokumente
```

## Domain umziehen (vor Launch)

`NEXT_PUBLIC_SITE_URL` (und ggf. `NEXT_PUBLIC_APP_URL`) auf die neue Domain setzen —
kein Code-Änderung nötig. Siehe `.env.example`.

## Inhalte pflegen

- **Globale UI-Texte:** direkt in `messages/*.json`.
- **Systeme und Ressourcen:** in `src/content/systems.ts` und `src/content/marketing.ts`.
- **Übersetzungsstatus:** in `src/i18n/translation-status.ts` und live unter `/de/sprachen/`.
- **Legal/IP/Launch-Gates:** in `src/content/launch-review.ts` und live unter `/de/freigaben/`.
- **Magazin-Artikel & Bilder:** über Decap CMS unter `/admin` (Git-basiert, Auto-Rebuild). Lokal testen: `npx decap-server` + `local_backend: true`.
- **Offen (Folgeschritt):** verlustfreie Einbindung der `messages/*.json`-Felder ins CMS-Formular
  (Teilmapping würde nicht gemappte Schlüssel überschreiben — daher bewusst noch nicht verdrahtet).
- **Vor finalem Launch:** externe Rechts-/IP-Freigabe, finale Domain-ENV, noindex entfernen, vollständige Longform-Übersetzung der offenen EU-Sprachen.
```

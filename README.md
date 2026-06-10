# Hermetia — Marketing-Basisseite

Öffentliche Marketing-/Landing-Seite für Hermetia. Bewirbt die Leistungen und ist
der Einstieg zu Onboarding (`/start`) und Login (beide in der bestehenden App).

- **Stack:** Next.js 15 (App Router), **statischer Export** (`output: "export"` → `/out`), Tailwind, TypeScript.
- **i18n:** DE + EN (Dictionary-Pattern, `messages/de.json` + `messages/en.json`). Weitere EU-Sprachen = Locale in `src/i18n/config.ts` ergänzen + `messages/<locale>.json` anlegen.
- **SEO/GEO/AEO:** pro Seite canonical + hreflang, Schema.org JSON-LD (`Organization`, `FAQPage`), `sitemap.xml`, `robots.txt`.
- **Brand:** Design-Tokens aus dem Hermetia-Design-Briefing (Creme/Aubergine/Gold, Fraunces + Mulish) in `tailwind.config.ts`.

## Befehle

```bash
npm install
npm run dev        # Entwicklung: http://localhost:3000  (→ /de/)
npm run build      # statischer Export nach /out
```

## Struktur

```
src/app/[locale]/        Seiten je Sprache (Start, Leistungen, Systeme, Methodik, Preise, FAQ, Recht)
src/components/          Header, Footer, SoulMap, Faq, JsonLd, LegalPage, LocaleSwitch
src/i18n/                Sprach-Konfig + Dictionary-Loader
src/lib/                 SEO-Metadaten + Link-Helfer
messages/                de.json / en.json  ← hier leben (fast) alle Texte
public/admin/            Decap CMS (Inhalte ohne Code bearbeiten)
content/magazin/         CMS-verwaltete Artikel (de/ + en/)
```

## Domain umziehen (vor Launch)

`NEXT_PUBLIC_SITE_URL` (und ggf. `NEXT_PUBLIC_APP_URL`) auf die neue Domain setzen —
kein Code-Änderung nötig. Siehe `.env.example`.

## Inhalte pflegen

- **Texte (jetzt, sicher):** direkt in `messages/de.json` + `messages/en.json` (auch in Obsidian).
- **Magazin-Artikel & Bilder:** über Decap CMS unter `/admin` (Git-basiert, Auto-Rebuild). Lokal testen: `npx decap-server` + `local_backend: true`.
- **Offen (Folgeschritt):** verlustfreie Einbindung der `messages/*.json`-Felder ins CMS-Formular
  (Teilmapping würde nicht gemappte Schlüssel überschreiben — daher bewusst noch nicht verdrahtet).
- **Größeres (auf Zuruf):** neue Seiten, Longtail-Systemseiten, SEO-Feinschliff, Brand-Illustrationen.
```

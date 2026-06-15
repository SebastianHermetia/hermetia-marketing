# Hermetia Translation Phase Plan and AI Execution Briefing

Stand: 2026-06-15  
Repo: `C:\Users\sebas\OneDrive\Dokumente\Projekte\hermetia-marketing`  
Live-Testdomain: `https://hermetiastart.digital-expert.de`  
Ziel: Jede europaeische Sprachfassung wird als eigene Branch und eigener PR umgesetzt, damit mehrere Sprachen parallel entwickelt werden koennen.

## 1. Zielbild

Hermetia soll in allen aktuell konfigurierten EU-Sprachen redaktionell nutzbar werden. Jede Sprache soll:

- alle Hauptseiten, Hub-Seiten und Detailseiten in lokalisierter Longform-Fassung enthalten,
- SEO, GEO und AEO-taugliche Titel, Beschreibungen, Kurzantworten und FAQs haben,
- rechtliche Aussagen sinngleich und nicht abgeschwaecht wiedergeben,
- CTA-Wege zur App behalten: Header, passende Inline-CTAs und finale App-Abspruenge,
- `noindex,nofollow` bis zum finalen Domainumzug beibehalten,
- alle bestehenden Gates bestehen: `npm run build`, `npm run check:assets`, `npm run check:content`, `npm run check:compliance`.

## 2. Aktueller Sprachstatus

Konfigurierte Sprachen in `src/i18n/config.ts`:

| Locale | Sprache | Status | Branch | PR-Scope |
|---|---|---|---|---|
| de | Deutsch | Mastercontent, Referenz | keine neue Branch | Referenz bleibt fuehrend |
| en | English | redaktionell begonnen, aber noch nicht vollstaendig | `codex/i18n-en-complete` | Restliche EN-Seiten vollstaendig abschliessen |
| fr | Francais | UI/Fallback, Longform offen | `codex/i18n-fr` | komplette franzoesische Redaktion |
| es | Espanol | UI/Fallback, Longform offen | `codex/i18n-es` | komplette spanische Redaktion |
| it | Italiano | UI/Fallback, Longform offen | `codex/i18n-it` | komplette italienische Redaktion |
| nl | Nederlands | UI/Fallback, Longform offen | `codex/i18n-nl` | komplette niederlaendische Redaktion |
| pl | Polski | UI/Fallback, Longform offen | `codex/i18n-pl` | komplette polnische Redaktion |
| pt | Portugues | UI/Fallback, Longform offen | `codex/i18n-pt` | komplette portugiesische Redaktion |
| bg | Bulgarski | UI/Fallback, Longform offen | `codex/i18n-bg` | komplette bulgarische Redaktion |
| hr | Hrvatski | UI/Fallback, Longform offen | `codex/i18n-hr` | komplette kroatische Redaktion |
| cs | Cestina | UI/Fallback, Longform offen | `codex/i18n-cs` | komplette tschechische Redaktion |
| da | Dansk | UI/Fallback, Longform offen | `codex/i18n-da` | komplette daenische Redaktion |
| et | Eesti | UI/Fallback, Longform offen | `codex/i18n-et` | komplette estnische Redaktion |
| fi | Suomi | UI/Fallback, Longform offen | `codex/i18n-fi` | komplette finnische Redaktion |
| el | Ellinika | UI/Fallback, Longform offen | `codex/i18n-el` | komplette griechische Redaktion |
| hu | Magyar | UI/Fallback, Longform offen | `codex/i18n-hu` | komplette ungarische Redaktion |
| ga | Gaeilge | UI/Fallback, Longform offen | `codex/i18n-ga` | komplette irische Redaktion |
| lv | Latviesu | UI/Fallback, Longform offen | `codex/i18n-lv` | komplette lettische Redaktion |
| lt | Lietuviu | UI/Fallback, Longform offen | `codex/i18n-lt` | komplette litauische Redaktion |
| mt | Malti | UI/Fallback, Longform offen | `codex/i18n-mt` | komplette maltesische Redaktion |
| ro | Romana | UI/Fallback, Longform offen | `codex/i18n-ro` | komplette rumaenische Redaktion |
| sk | Slovencina | UI/Fallback, Longform offen | `codex/i18n-sk` | komplette slowakische Redaktion |
| sl | Slovenscina | UI/Fallback, Longform offen | `codex/i18n-sl` | komplette slowenische Redaktion |
| sv | Svenska | UI/Fallback, Longform offen | `codex/i18n-sv` | komplette schwedische Redaktion |

Wichtig: Eine Sprache wird erst nach fertiger Longform, bestandenen Checks und Review in `editorialLocales` aufgenommen.

## 3. Seitenumfang je Sprache

Jede Sprach-Branch muss alle folgenden Seitenbereiche abdecken. Der technische Export erzeugt ca. 143 Seiten pro Locale.

### 3.1 Haupt- und Hub-Seiten

Diese 29 Haupt- und Hub-Routen muessen pro Sprache lokalisiert werden:

1. `/`
2. `/leistungen/`
3. `/systeme/`
4. `/so-entsteht-dein-profil/`
5. `/konvergenz-engine/`
6. `/seelenkarte/`
7. `/tagesimpulse/`
8. `/journaling/`
9. `/vollprofil-buch/`
10. `/companion/`
11. `/profil-verfeinern/`
12. `/beziehungen/`
13. `/glossar/`
14. `/wissen/`
15. `/vergleiche/`
16. `/anwendungsfaelle/`
17. `/kostenlos-vs-premium/`
18. `/daten-und-sicherheit/`
19. `/profil-starten/`
20. `/ueber-hermetia/`
21. `/sprachen/`
22. `/freigaben/`
23. `/preise/`
24. `/faq/`
25. `/datenschutz/`
26. `/ki-transparenz/`
27. `/agb/`
28. `/widerruf/`
29. `/impressum/`

Hinweis: Im Code sind 28 Pfadkonstanten plus Home vorhanden. In der Arbeitsplanung werden Home und alle Pfadkonstanten behandelt.

### 3.2 Dynamische Detailseiten

Diese Cluster muessen ebenfalls pro Sprache lokalisiert werden:

- 31 Systemdetailseiten unter `/systeme/[slug]/`
- 51 Glossarbegriffe unter `/glossar/[slug]/`
- 20 Wissensartikel unter `/wissen/[slug]/`
- 12 Vergleichsseiten unter `/vergleiche/[slug]/`

Die aktuellen Mindestzahlen stehen in `scripts/check-content.mjs`. Nach Abschluss einer Sprache sollten fuer diese Locale eigene Checks ergaenzt werden.

## 4. Phasenplan

### Phase 0: Vorbereitung pro Sprach-Branch

Fuer jede Sprache separat:

1. Von aktuellem `main` starten.
2. Branch erstellen: `codex/i18n-<locale>`.
3. Scope im PR-Titel klar machen: `feat: localize <language> marketing site`.
4. Keine andere Sprache im selben PR anfassen, ausser gemeinsame Helper, die zwingend fuer alle Sprachen benoetigt werden.
5. Vor Beginn `git status --short` pruefen.

### Phase 1: P0 Trust, Legal und Conversion

Zuerst diese Seiten lokalisieren, weil sie fuer Anmeldung, Paid-Modelle und rechtliche Sicherheit entscheidend sind:

- `/`
- `/leistungen/`
- `/preise/`
- `/profil-starten/`
- `/kostenlos-vs-premium/`
- `/datenschutz/`
- `/daten-und-sicherheit/`
- `/ki-transparenz/`
- `/agb/`
- `/widerruf/`
- `/impressum/`
- `/freigaben/`

Ergebnis je Sprache:

- klare CTA-Texte zur Anmeldung,
- rechtliche Hinweise sinngleich,
- Preis- und Widerrufsaussagen nicht abschaerfen,
- lokale Meta-Titel und Meta-Descriptions,
- keine deutschen Kernueberschriften in der jeweiligen Locale.

### Phase 2: P1 Produkt- und Pillar-Seiten

Danach die produktnahen Longform-Seiten:

- `/so-entsteht-dein-profil/`
- `/konvergenz-engine/`
- `/seelenkarte/`
- `/tagesimpulse/`
- `/journaling/`
- `/vollprofil-buch/`
- `/companion/`
- `/profil-verfeinern/`
- `/beziehungen/`
- `/anwendungsfaelle/`
- `/ueber-hermetia/`
- `/faq/`
- `/sprachen/`

Ergebnis je Sprache:

- Search-Intent und Answer-Intent lokal formulieren,
- alle FAQs lokalisiert,
- Bild-Alt-Texte und Captions lokalisiert,
- CTAs lokal und nicht manipulativ,
- AI-, Datenschutz- und Consent-Grenzen sichtbar.

### Phase 3: P1 System-Detailseiten

Alle 31 Systemseiten lokalisieren:

- bestehende Systemnamen nur uebersetzen, wenn lokal ueblich,
- Fachbegriffe wie Human Design, Gene Keys, BaZi, I Ching konsistent lassen,
- keine fremden geschuetzten Deutungstexte uebernehmen,
- Beispieldeutungen immer fiktiv rahmen,
- Pro/Contra, Datenbasis, Grenzen, Literaturhinweise und FAQ lokal wiedergeben.

### Phase 4: P2 Resource-Cluster

Danach die skalierenden SEO/AEO-Ressourcen:

- Glossar-Hub und 51 Glossarbegriffe,
- Wissen-Hub und 20 Wissensartikel,
- Vergleichs-Hub und 12 Vergleichsseiten.

Ergebnis je Sprache:

- lokale Suchfragen,
- kurze direkte Antworten,
- FAQ-Schema,
- interne Links mit Locale-Prefix,
- keine Diagnose-, Therapie- oder Vorhersageversprechen.

### Phase 5: QA, Editorial Flag und PR

Pro Sprache:

1. `npm run build`
2. `npm run check:assets`
3. `npm run check:content`
4. `npm run check:compliance`
5. gezielte HTML-Suche fuer die Locale:
   - keine deutschen Kernmarker,
   - `FAQPage` auf FAQ-Seiten,
   - `noindex` und `nofollow`,
   - CTA-Parameter `utm_content` weiter vorhanden.
6. `src/i18n/config.ts` erst dann erweitern:
   - Sprache in `editorialLocales` aufnehmen, wenn komplett.
7. PR erstellen, eine Sprache pro PR.

## 5. Branch- und PR-Regeln

Pro Sprache genau eine Branch:

```text
codex/i18n-en-complete
codex/i18n-fr
codex/i18n-es
codex/i18n-it
codex/i18n-nl
codex/i18n-pl
codex/i18n-pt
codex/i18n-bg
codex/i18n-hr
codex/i18n-cs
codex/i18n-da
codex/i18n-et
codex/i18n-fi
codex/i18n-el
codex/i18n-hu
codex/i18n-ga
codex/i18n-lv
codex/i18n-lt
codex/i18n-mt
codex/i18n-ro
codex/i18n-sk
codex/i18n-sl
codex/i18n-sv
```

PR-Titel:

```text
feat(i18n): localize <Language> marketing site
```

PR-Beschreibung muss enthalten:

- Sprache und Locale,
- bearbeitete Seitengruppen,
- verbleibende bekannte Risiken,
- ausgefuehrte Checks,
- Beispielrouten, die manuell geprueft wurden,
- Hinweis, ob `editorialLocales` erweitert wurde.

## 6. Priorisierung fuer parallele Arbeit

### Welle A: grosse Reichweiten- und Marktsprache

Parallel moeglich:

- `codex/i18n-en-complete`
- `codex/i18n-fr`
- `codex/i18n-es`
- `codex/i18n-it`
- `codex/i18n-nl`
- `codex/i18n-pl`

### Welle B: weitere grosse EU-Sprachen

- `codex/i18n-pt`
- `codex/i18n-sv`
- `codex/i18n-da`
- `codex/i18n-fi`
- `codex/i18n-cs`
- `codex/i18n-ro`

### Welle C: kleinere oder terminologisch anspruchsvollere Sprachen

- `codex/i18n-el`
- `codex/i18n-hu`
- `codex/i18n-bg`
- `codex/i18n-hr`
- `codex/i18n-sk`
- `codex/i18n-sl`

### Welle D: sehr kleine Lokalisierungen mit erhoehtem Native-Review-Bedarf

- `codex/i18n-et`
- `codex/i18n-lv`
- `codex/i18n-lt`
- `codex/i18n-mt`
- `codex/i18n-ga`

## 7. Technische Arbeitsanweisung fuer eine AI

Wenn du eine Sprache uebernimmst:

1. Lies diese Datei vollstaendig.
2. Lies `src/i18n/config.ts`, `src/i18n/dictionaries.ts`, `src/i18n/translation-status.ts`.
3. Lies `src/lib/links.ts`, damit CTA- und Locale-Pfade korrekt bleiben.
4. Lies die relevanten Seitenquellen:
   - feste Seiten unter `src/app/[locale]/.../page.tsx`,
   - zentrale Inhalte in `messages/<locale>.json`,
   - Pillar-, Glossar-, Artikel- und Vergleichsinhalte in `src/content/marketing.ts`,
   - Systemdaten in `src/content/systems.ts`.
5. Arbeite in kleinen Commits innerhalb deiner Sprach-Branch.
6. Uebersetze nicht blind:
   - Deutung, Datenschutz, Widerruf, AI und Consent muessen sinngleich bleiben.
   - Keine rechtliche Aussage darf abgeschwaecht werden.
   - Keine Heilversprechen, Diagnosen, Therapie- oder Zukunftsversprechen.
   - Keine geschuetzten fremden Deutungstexte uebernehmen.
7. Halte CTAs erhalten:
   - Header: Anmeldung/Login und Profilstart,
   - Inline-CTAs passend zur Seite,
   - finale CTA je Seite,
   - UTM-Parameter nicht entfernen.
8. Ergaenze pro Sprache Content-Checks in `scripts/check-content.mjs`.
9. Fuehre die Pflichtchecks aus.
10. Erstelle PR erst nach gruenen Checks.

## 8. Content-Qualitaetsregeln

### SEO

- Lokaler Meta-Titel mit Hauptintent.
- Meta-Description mit Nutzen, Thema und Grenze.
- H1 eindeutig und lokal natuerlich.
- Interne Links mit Locale-Prefix.

### GEO

- Inhalte so schreiben, dass generative Suchsysteme Hermetia korrekt zusammenfassen koennen.
- Klare Definitionen, direkte Kurzantworten und strukturierte Abschnitte.
- Keine vagen Marketingfloskeln ohne Substanz.

### AEO

- Jede wichtige Seite braucht direkte Frage-Antwort-Abschnitte.
- FAQ-Fragen lokal natuerlich formulieren.
- Antworten kurz genug fuer Answer Engines, aber rechtlich sauber.

### Conversion

- Kostenloser Start immer als erster risikoarmer Schritt.
- Paid-Modell als bewusste Vertiefung, nicht als Druckmittel.
- Keine FOMO-, Angst- oder Schicksalsrhetorik.
- App-Absprung per `startUrl(locale, { source: "..." })` erhalten.

### Recht und IP

- Keine Diagnose, Therapie, medizinische, rechtliche, finanzielle oder psychologische Beratung.
- Keine sichere Zukunft, keine Beziehungsgarantie, keine Heilsversprechen.
- Einwilligung bei sensiblen Profilen und Beziehungsprofilen klar nennen.
- AI transparent als Formulierungs-/Begleitebene, nicht als Autoritaet.
- Nur eigene, lizenzierte oder freigegebene Bilder und Grafiken verwenden.
- Systemnamen respektvoll und beschreibend nutzen.

## 9. Definition of Done pro Sprach-PR

Eine Sprache ist fertig, wenn:

- alle Top-Level-Routen lokalisiert sind,
- alle 31 Systemseiten lokalisiert sind,
- alle 51 Glossarbegriffe lokalisiert sind,
- alle 20 Wissensartikel lokalisiert sind,
- alle 12 Vergleichsseiten lokalisiert sind,
- alle FAQs lokalisiert sind,
- alle Meta-Titel und Meta-Descriptions lokalisiert sind,
- alle Bild-Alt-Texte und Captions lokalisiert sind,
- `editorialLocales` um die Sprache erweitert wurde,
- die Sprachstatusseite die Sprache als redaktionell freigegeben ausweist,
- alle Pflichtchecks gruen sind,
- mindestens diese Live-/Export-Routen manuell geprueft wurden:
  - `/<locale>/`
  - `/<locale>/preise/`
  - `/<locale>/datenschutz/`
  - `/<locale>/ki-transparenz/`
  - `/<locale>/daten-und-sicherheit/`
  - `/<locale>/beziehungen/`
  - `/<locale>/companion/`
  - `/<locale>/systeme/human-design/`
  - `/<locale>/glossar/datenminimierung/`
  - `/<locale>/wissen/seelenkarte-erstellen/`
  - `/<locale>/vergleiche/big-five-vs-human-design/`

## 10. Beispiel-Check je Sprache

Pro Sprach-PR sollen Checks nach diesem Muster ergaenzt werden:

```js
const frHome = readOut("fr");
const frPricing = readOut("fr/preise");
const frPrivacy = readOut("fr/datenschutz");

[
  [
    "FR has localized conversion pages",
    frHome.includes("<lokaler Hero-Marker>") &&
      frPricing.includes("<lokaler Preis-Marker>") &&
      frPrivacy.includes("<lokaler Datenschutz-Marker>")
  ],
  [
    "FR has no German core headings",
    !frHome.includes("A portrait of your soul") &&
      !frPricing.includes("Preiswahrheit") &&
      !frPrivacy.includes("Datenschutzerklärung")
  ]
]
```

Die Marker muessen pro Sprache konkret angepasst werden.

## 11. Aktueller EN-Hinweis

English ist bereits stark begonnen und mehrere Seiten sind live lokalisiert, aber die Sprache ist erst fertig, wenn alle oben genannten Seitengruppen abgeschlossen sind. Die naechste EN-Branch sollte daher nicht erneut fertige Seiten umbauen, sondern die verbleibenden deutschen Mastercontent-Reste systematisch entfernen.

Bereits lokalisierte EN-Schwerpunkte:

- Preise
- Leistungen
- Kostenlos vs Premium
- Profil starten
- Daten und Sicherheit
- AI-Transparenz Gate
- Anwendungsfaelle
- Beziehungen
- Companion
- Journaling

Noch zu pruefen und zu vervollstaendigen:

- alle verbleibenden Pillar-Seiten,
- Systemdetailseiten,
- Glossar,
- Wissen,
- Vergleiche,
- Legal-/Statusseiten auf vollstaendige redaktionelle Sinngleichheit.

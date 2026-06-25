import type { SystemEntry } from "@/content/systems";
import { systems } from "@/content/systems";
import { glossaryTerms } from "@/content/marketing";

export type SystemLibraryItem = {
  slug: string;
  family: string;
  dataNeed: string;
  role: string;
  limit: string;
};

export type GlossaryTheme = {
  key: string;
  title: string;
  intro: string;
  slugs: string[];
};

const birthTime = "Geburtsdatum, Geburtsort, moeglichst genaue Geburtszeit";
const birthDate = "Geburtsdatum";
const nameDate = "Geburtsdatum und Name";
const selfReport = "Selbstauskunft";

export const systemLibraryIntro = {
  seoTitle: "Astrakey Systembibliothek: alle Systeme im Ueberblick",
  seoDescription:
    "Alle Systeme, die Astrakey fuer dein Mehrsystem-Profil nutzt: Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm, Big Five und weitere Perspektiven mit Datenbedarf, Rolle und Grenze.",
  eyebrow: "Systembibliothek",
  title: "Alle Systeme. Eine geordnete Landkarte.",
  lead:
    "Astrakey verbindet viele Systeme, aber nicht beliebig. Diese Bibliothek zeigt dir, welche Perspektiven in dein Profil einfliessen, welche Daten sie brauchen, was sie gut sichtbar machen und wo sie begrenzt bleiben.",
  answer:
    "Astrakey nutzt eine kuratierte Systembibliothek, damit dein Profil nicht von einer einzelnen Deutung abhaengt. Jedes System liefert ein eigenes Signal. Die Konvergenz-Engine prueft, welche Signale sich stuetzen, welche nur aus einer Familie kommen und welche eher als Nuance gelesen werden sollten.",
  trustline:
    "Kein System wird ueberhoeht. Keine Aussage steht allein. Starke Themen entstehen dort, wo mehrere unabhaengige Perspektiven in dieselbe Richtung zeigen.",
};

export const systemLibrarySections = [
  {
    title: "Warum diese Bibliothek existiert",
    body:
      "Ein einzelnes System kann beruehren. Es kann Worte finden, die ploetzlich stimmen. Trotzdem bleibt es eine Perspektive. Astrakey fuehrt diese Perspektiven zusammen, ohne sie zu vermischen. Die Bibliothek macht sichtbar, welche Stimme gerade spricht. Dadurch kannst du besser unterscheiden: Was ist ein stark wiederkehrendes Thema, was ist eine feine Nuance, und was gehoert eher zur Sprache eines einzelnen Systems?",
  },
  {
    title: "Systemfamilien statt blosser Liste",
    body:
      "Viele Systeme sind miteinander verwandt. Astrologie, Human Design, Gene Keys und manche Timing-Systeme nutzen aehnliche astronomische Grundlagen. Numerologische Systeme arbeiten anders als Frageboegen. Koerper- und Rhythmussysteme schauen wieder anders. Astrakey gruppiert diese Quellen in Systemfamilien, damit ein Echo nicht doppelt zaehlt.",
  },
  {
    title: "Welche Daten die Systeme brauchen",
    body:
      "Nicht jedes System braucht dieselben Daten. Manche Systeme nutzen Geburtsdatum, Geburtsort und Geburtszeit. Andere arbeiten mit Name und Datum. Wieder andere brauchen Selbstauskunft, weil Verhalten, Werte oder Interessen nicht serioes aus Geburtsdaten abgeleitet werden koennen. Wenn eine genaue Geburtszeit fehlt, werden zeitabhaengige Aussagen vorsichtiger markiert.",
  },
  {
    title: "Wie du die Bibliothek liest",
    body:
      "Du kannst die Bibliothek als Orientierung, als Vertrauenspruefung und als Einstieg in dein eigenes Profil nutzen. Du musst kein Fachwissen mitbringen. Die einzelnen Systemseiten erklaeren jeden Begriff einfach, zeigen die Rolle im Mehrsystem-Profil und nennen die Grenze des Systems.",
  },
  {
    title: "Grenzen der Systembibliothek",
    body:
      "Die Bibliothek ist kein Beweis dafuer, dass ein System objektiv recht hat. Sie ist auch keine Rangliste. Astrakey nutzt Systeme als Deutungssprachen und Reflexionssignale. Das Ziel ist nicht, dich festzulegen, sondern wiederkehrende Muster verantwortungsvoll sichtbar zu machen.",
  },
];

const systemMeta: Record<string, Omit<SystemLibraryItem, "slug">> = {
  astrologie: {
    family: "Astrologische Systeme",
    dataNeed: birthTime,
    role: "Grundrhythmus, Beziehungsmuster, Sensibilitaet, Spannung und persoenliche Entwicklungsachsen.",
    limit: "Ohne genaue Geburtszeit werden Aszendent, Haeuser und manche Mondpositionen vorsichtiger gelesen.",
  },
  "human-design": {
    family: "Astrologisch-energetische Synthesesysteme",
    dataNeed: birthTime,
    role: "Entscheidung, Nervensystem, Energiehaushalt, Arbeitsweise und Offenheit fuer Einfluss von aussen.",
    limit: "Human Design bleibt Reflexionssprache und wird nicht als Lebensregel oder Identitaetsetikett genutzt.",
  },
  "gene-keys": {
    family: "Archetypische Entwicklungssysteme",
    dataNeed: birthTime,
    role: "Sprache fuer Schatten, Gabe, Reifung, Berufung und wiederkehrende innere Lernfelder.",
    limit: "Die Begriffe sind symbolisch und werden ohne geschuetzte Originaltexte und ohne absolute Aussagen genutzt.",
  },
  numerologie: {
    family: "Zahlen- und Namenssysteme",
    dataNeed: nameDate,
    role: "Grundmotive, Lebensrhythmus und Namensresonanz.",
    limit: "Zahlen sind keine Beweise und werden nur im Zusammenspiel mit anderen Systemfamilien gelesen.",
  },
  "bazi-vier-saeulen": {
    family: "Chinesische Zeit- und Elementesysteme",
    dataNeed: birthTime,
    role: "Elementedynamik, Timing, Ressourcen, Belastung und Balance.",
    limit: "BaZi ist komplex und kulturgeschichtlich eigenstaendig; Astrakey nutzt keine vereinfachten Gluecksversprechen.",
  },
  enneagramm: {
    family: "Motivations- und Typensysteme",
    dataNeed: selfReport,
    role: "Motivationsmuster, Beziehungsschutz und Entwicklungsrichtungen.",
    limit: "Ein Typ darf niemanden festlegen und bleibt eine Hypothese fuer Selbstbeobachtung.",
  },
  "maya-tzolkin": {
    family: "Kalender- und Rhythmussysteme",
    dataNeed: birthDate,
    role: "Aufgabe, Rhythmus, Gemeinschaft und persoenliche Signatur.",
    limit: "Tzolkin wird respektvoll, knapp und ohne kulturelle Vereinnahmung eingeordnet.",
  },
  "vedische-nakshatra": {
    family: "Vedisch-astrologische Systeme",
    dataNeed: birthTime,
    role: "Gefuehlswelt, Instinkt, Beziehungsstil und innerer Rhythmus.",
    limit: "Ohne genaue Geburtszeit kann die Zuordnung unsicher werden.",
  },
  "i-ching": {
    family: "Symbol- und Wandlungssysteme",
    dataNeed: "Geburtsdatum oder aktueller Zeitpunkt, je nach Anwendung",
    role: "Wandel, innere Haltung, Reaktion, Timing und Spannungsfelder.",
    limit: "Das I Ching nimmt keine Entscheidungen ab, sondern oeffnet Reflexionsfragen.",
  },
  "ayurveda-dosha": {
    family: "Koerper- und Konstitutionssysteme",
    dataNeed: "Selbstauskunft und koerperbezogene Angaben",
    role: "Energie, Belastbarkeit, Rhythmus, Reizverarbeitung und Regeneration.",
    limit: "Keine medizinische oder ernaehrungstherapeutische Beratung.",
  },
  "hellenistische-astrologie": {
    family: "Klassisch-astrologische Systeme",
    dataNeed: birthTime,
    role: "Lebensfelder, Schwerpunktzeiten und Gewichtung astrologischer Signale.",
    limit: "Klassische Technik wird als Deutungsrahmen formuliert, nicht als Schicksalsplan.",
  },
  mondknoten: {
    family: "Astrologische Entwicklungsachsen",
    dataNeed: birthTime,
    role: "Vergangenheit, Gewohnheit, Mut und naechster Schritt.",
    limit: "Die Achse zeigt eine Reflexionsrichtung, kein Muss.",
  },
  "persoenliches-jahr": {
    family: "Numerologische Timing-Systeme",
    dataNeed: "Geburtsdatum und aktuelles Jahr",
    role: "Tagesimpulse, Rueckblick, Jahresfokus und alltagsnahe Reflexionsfragen.",
    limit: "Ein Jahresthema ist keine Vorhersage.",
  },
  "big-five": {
    family: "Psychologische Frageboegen",
    dataNeed: selfReport,
    role: "Verhalten, Arbeitsweise, Stress, Kommunikation und Selbstbild.",
    limit: "Big Five misst Selbstauskunft, keine Essenz.",
  },
  riasec: {
    family: "Interessen- und Berufssysteme",
    dataNeed: selfReport,
    role: "Arbeit, Energiequellen, Berufung und passende Umgebungen.",
    limit: "RIASEC ersetzt keine Karriereberatung.",
  },
  chronotyp: {
    family: "Rhythmus- und Alltagssysteme",
    dataNeed: selfReport,
    role: "Energie, Routinen, Schlaf, Arbeitstakt und Tagesimpulse.",
    limit: "Chronotypen sind keine festen Schubladen.",
  },
  "lo-shu-grid": {
    family: "Zahlen- und Raster-Systeme",
    dataNeed: birthDate,
    role: "Zahlenmuster, Ressourcen, Ausgleichsthemen und praktische Selbstbeobachtung.",
    limit: "Leerstellen sind keine Defizite.",
  },
  mahabote: {
    family: "Kalender- und Planetensysteme",
    dataNeed: birthDate,
    role: "Grundton, Reaktionsstil und energetische Nuancen.",
    limit: "Astrakey nutzt keine exotisierende Sprache.",
  },
  "drakonisches-horoskop": {
    family: "Astrologische Tiefenperspektiven",
    dataNeed: birthTime,
    role: "Innere Erinnerung, Wachstum, Sehnsucht und nicht sofort sichtbare Motivation.",
    limit: "Keine Aussagen ueber Bestimmung oder Schicksal.",
  },
  "nine-star-ki": {
    family: "Ostasiatische Element- und Jahresrhythmen",
    dataNeed: birthDate,
    role: "Rhythmus, Elementelogik, Beziehung zu Wandel und saisonale Selbstbeobachtung.",
    limit: "Symbolische Perspektive, keine psychologische oder medizinische Einschaetzung.",
  },
  "cards-of-destiny": {
    family: "Karten- und Archetypensysteme",
    dataNeed: birthDate,
    role: "Lebensmotiv, Beziehungsdynamik, Werte und wiederkehrende Rollenbilder.",
    limit: "Kartenbilder sind Reflexionsbilder und keine Zukunftsaussagen.",
  },
  "tarot-geburtskarten": {
    family: "Karten- und Archetypensysteme",
    dataNeed: birthDate,
    role: "Entwicklung, innere Figuren, Schwellen und wiederkehrende Reflexionsfragen.",
    limit: "Tarot wird nicht divinatorisch genutzt.",
  },
  "sabian-symbols": {
    family: "Astrologische Gradbilder",
    dataNeed: birthTime,
    role: "Atmosphaerische Sprache fuer Praegungen, Schwellen, innere Bilder und Resonanz.",
    limit: "Gradbilder sind Nuancen, keine tragenden Hauptaussagen.",
  },
  astrokartografie: {
    family: "Ortsbezogene Astrologie",
    dataNeed: birthTime,
    role: "Ortsresonanz, Reise, Heimatgefuehl, Arbeitsorte und Lebensphasen mit Ortsbezug.",
    limit: "Orte garantieren nichts und ersetzen keine Umzugsberatung.",
  },
  "fixsterne-chiron-lilith": {
    family: "Astrologische Zusatzpunkte",
    dataNeed: birthTime,
    role: "Schmerzpunkte, ungezuegelte Kraefte, besondere Begabungen und tiefe Resonanzlinien.",
    limit: "Diese Punkte werden besonders vorsichtig und nicht pathologisierend formuliert.",
  },
  "tcm-konstitution": {
    family: "Koerper- und Elementesysteme",
    dataNeed: "Selbstauskunft und koerperbezogene Beobachtung",
    role: "Energie, Belastung, Ausgleich, Reizverarbeitung und Regeneration.",
    limit: "Keine medizinische Diagnose.",
  },
  "via-staerken": {
    family: "Positive Psychologie",
    dataNeed: selfReport,
    role: "Ressourcen, Arbeitsweise, Beziehung, Sinn und Selbstwirksamkeit.",
    limit: "Staerken sind kontextabhaengig und keine Rangliste.",
  },
  "spiral-dynamics": {
    family: "Werte- und Entwicklungssysteme",
    dataNeed: "Selbstauskunft und Kontextfragen",
    role: "Werte, Entscheidungslogik, Organisationskontext und Entwicklungsspannungen.",
    limit: "Werteebenen duerfen nicht als Hierarchie des Menschen gelesen werden.",
  },
  "sixteen-types": {
    family: "Typologische Persoenlichkeitssysteme",
    dataNeed: selfReport,
    role: "Kommunikation, Fokus, Konfliktstil, Entscheidungsweise und Arbeitsumfeld.",
    limit: "Typen beschreiben Tendenzen, keine Identitaetskaesten.",
  },
  "kabbalah-tree": {
    family: "Symbolische Entwicklungslandkarten",
    dataNeed: "Name, Datum oder Profilkontext, je nach Anwendung",
    role: "Balance, innere Ordnung, Reifung und Verbindung zwischen Gegensaetzen.",
    limit: "Keine religioese Autoritaet und keine vereinfachten Heilsversprechen.",
  },
  "oracle-cards": {
    family: "Intuitive Impuls- und Symbolsysteme",
    dataNeed: "Aktueller Kontext oder Tagesimpuls",
    role: "Tagesimpulse, Journaling und Einstiegsfragen ueber Bildsprache.",
    limit: "Oracle Cards sind kein Beleg und keine Vorhersage.",
  },
};

export function getSystemLibraryItems(): Array<SystemEntry & { library: SystemLibraryItem }> {
  return systems.map((system) => ({
    ...system,
    library: { slug: system.slug, ...systemMeta[system.slug] },
  }));
}

export const glossaryThemeIntro = {
  seoTitle: "Astrakey Glossar nach Themen: Methode, Systeme, Daten und Vertrauen",
  seoDescription:
    "Das Astrakey Glossar thematisch sortiert: Mehrsystem-Profil, Konvergenz, Systemfamilien, astrologische und psychologische Begriffe, AI-Deutung, Einwilligung und Datenminimierung.",
  eyebrow: "Glossar nach Themen",
  title: "Begriffe verstehen. Zusammenhaenge sehen.",
  lead:
    "Astrakey verbindet verschiedene Sprachen: Astrologie, Human Design, Psychologie, Numerologie, AI, Datenschutz und Beziehung. Diese thematische Glossarseite ordnet die wichtigsten Begriffe so, dass du nicht nur einzelne Woerter nachschlaegst, sondern die Logik dahinter erkennst.",
  answer:
    "Das thematische Glossar zeigt, welche Begriffe zur Methode, zu einzelnen Systemen, zu Produktmodulen, zu Beziehungen oder zu Daten und Vertrauen gehoeren. So wird Astrakeys Sprache nachvollziehbar, ohne dass du jedes System vorher kennen musst.",
  trustline:
    "Jeder Begriff bleibt kurz, klar und begrenzt. Keine vagen Versprechen, keine geschuetzten Originaltexte, keine Diagnose.",
};

export const glossaryThemes: GlossaryTheme[] = [
  {
    key: "method",
    title: "Methode und Mehrsystem-Profil",
    intro:
      "Diese Begriffe erklaeren, wie Astrakey aus vielen Einzelsignalen ein geordnetes Profil macht.",
    slugs: ["konvergenz", "kernthema", "spannungsfeld", "theme-signal", "resonanz", "selbstreflexion"],
  },
  {
    key: "systems",
    title: "Systemsprachen",
    intro:
      "Diese Begriffe stammen aus einzelnen Systemen wie Astrologie, Human Design, Gene Keys, Numerologie, Ayurveda, BaZi, I Ching oder Tzolkin.",
    slugs: [
      "ephemeride",
      "radix",
      "aszendent",
      "haeuser",
      "aspekt",
      "orb",
      "transit",
      "progression",
      "profection",
      "bodygraph",
      "typ",
      "innere-autoritaet",
      "profil-linien",
      "zentren",
      "kanal",
      "tor",
      "inkarnationskreuz",
      "schatten-gabe-siddhi",
      "sequenzen",
      "goldener-pfad",
      "lebenszahl",
      "lebensweg",
      "namenszahl",
      "pinnacle",
      "dosha",
      "chronotyp",
      "tzolkin",
      "kin",
      "bazi",
      "fuenf-elemente",
      "nakshatra",
      "dasha",
      "hexagramm",
      "linie",
      "enneagramm-typ",
      "fluegel",
      "tritype",
    ],
  },
  {
    key: "product",
    title: "Produkt und Anwendung",
    intro:
      "Diese Begriffe zeigen, wie du Astrakey nutzt und wie aus Profiltexten alltagstaugliche Reflexion wird.",
    slugs: ["seelenkarte", "journaling", "ai-deutung"],
  },
  {
    key: "relationships",
    title: "Beziehungen und Einwilligung",
    intro:
      "Diese Begriffe sind wichtig, wenn Astrakey Muster zwischen Menschen sichtbar macht.",
    slugs: ["synastrie", "composite", "einwilligung"],
  },
  {
    key: "trust",
    title: "Daten, AI und Vertrauen",
    intro:
      "Diese Begriffe erklaeren, welche Rolle AI hat, warum Datenminimierung wichtig ist und warum Kontrolle sichtbar bleiben muss.",
    slugs: ["art-9-dsgvo", "datenminimierung"],
  },
];

export function getGlossaryThemeTerms(theme: GlossaryTheme) {
  return theme.slugs
    .map((slug) => glossaryTerms.find((term) => term.slug === slug))
    .filter((term): term is (typeof glossaryTerms)[number] => Boolean(term));
}

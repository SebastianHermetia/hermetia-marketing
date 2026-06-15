// Longtail-Systemdetailseiten. Jede Seite ist eine eigene Landingpage für
// „Was ist <System>“ + wie Hermetia es nutzt. DE+EN, FAQ für AEO/Schema.org.
// Header-Bild aus der Brand-Art-Serie (public/images/art).

export type SystemText = {
  name: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  whatTitle: string;
  what: string;
  howTitle: string;
  how: string;
  revealsTitle: string;
  reveals: string;
  faq: { q: string; a: string }[];
};

export type SystemEntry = {
  slug: string;
  glyph: string;
  art: string; // Dateiname in public/images/art
  core: boolean;
  de: SystemText;
  en: SystemText;
};

const W = "Was ist";
const HOW_DE = "Wie Hermetia es berechnet";
const REV_DE = "Was es über dich zeigt";
const HOW_EN = "How Hermetia calculates it";
const REV_EN = "What it reveals about you";

export const systems: SystemEntry[] = [
  {
    slug: "astrologie",
    glyph: "♋",
    art: "02-ceramic-guardian-profile.jpg",
    core: true,
    de: {
      name: "Astrologie",
      tagline: "Sonne, Mond und Planeten zur Geburt",
      seoTitle: "Astrologie verstehen — wie Hermetia dein Geburtshoroskop liest",
      seoDescription: "Was Astrologie ist, wie Hermetia dein Geburtshoroskop exakt berechnet (Skyfield) und was Sonne, Mond und Aszendent über dich erzählen.",
      intro: "Die westliche Astrologie ist das vertrauteste Sprachbild der Selbsterkenntnis – ein Spiegel für Charakter, Rhythmus und Lebensthemen.",
      whatTitle: `${W} Astrologie?`,
      what: "Astrologie deutet die Positionen von Sonne, Mond und Planeten zum Zeitpunkt deiner Geburt. Tierkreiszeichen, Häuser und Aspekte ergeben ein Geburtshoroskop – eine Momentaufnahme des Himmels, gelesen als Sprache für Persönlichkeit und Entwicklung.",
      howTitle: HOW_DE,
      how: "Hermetia bestimmt die exakten Himmelspositionen mit der quelloffenen Ephemeride Skyfield – auf Basis von Datum, Zeit und Ort. Ohne genaue Geburtszeit nutzen wir eine Tageszeit und kennzeichnen, was dennoch belastbar ist (z. B. Sonnen- und Mondzeichen-Tendenz).",
      revealsTitle: REV_DE,
      reveals: "Dein Sonnenzeichen (Wesenskern), Mondzeichen (Gefühlswelt) und – mit Uhrzeit – dein Aszendent (Auftreten) sowie die Häuser und Aspekte. In Hermetia speist das u. a. die Ebenen „Was dich ausmacht“, „Beziehungsmuster“ und „Rhythmus & Sensibilität“.",
      faq: [
        { q: "Brauche ich meine genaue Geburtszeit für Astrologie?", a: "Für Aszendent und Häuser ja; Sonnen- und Mondzeichen sind meist auch ohne exakte Uhrzeit zuverlässig. Hermetia kennzeichnet transparent, was gesichert ist." },
        { q: "Welche Astrologie verwendet Hermetia?", a: "Die westliche (tropische) Astrologie als Kernsystem, ergänzt um klassische Vertiefungen wie Hellenistik und Mondknoten." }
      ]
    },
    en: {
      name: "Astrology",
      tagline: "Sun, moon and planets at birth",
      seoTitle: "Understanding astrology — how Hermetia reads your birth chart",
      seoDescription: "What astrology is, how Hermetia calculates your birth chart precisely (Skyfield) and what sun, moon and ascendant reveal about you.",
      intro: "Western astrology is the most familiar language of self-knowledge — a mirror for character, rhythm and life themes.",
      whatTitle: `${W.replace("Was ist", "What is")} astrology?`,
      what: "Astrology interprets the positions of sun, moon and planets at the moment of your birth. Zodiac signs, houses and aspects form a birth chart — a snapshot of the sky, read as a language for personality and growth.",
      howTitle: HOW_EN,
      how: "Hermetia computes the exact celestial positions with the open-source ephemeris Skyfield — based on date, time and place. Without an exact birth time we use a time of day and mark what remains reliable (e.g. sun and moon sign tendency).",
      revealsTitle: REV_EN,
      reveals: "Your sun sign (core self), moon sign (emotional world) and — with a time — your ascendant (outward style), houses and aspects. In Hermetia this feeds levels like “What makes you you”, “Relationship patterns” and “Rhythm & sensitivity”.",
      faq: [
        { q: "Do I need my exact birth time for astrology?", a: "For the ascendant and houses, yes; sun and moon signs are usually reliable even without an exact time. Hermetia transparently marks what is certain." },
        { q: "Which astrology does Hermetia use?", a: "Western (tropical) astrology as the core system, complemented by classic depth such as Hellenistic techniques and the lunar nodes." }
      ]
    }
  },
  {
    slug: "human-design",
    glyph: "⬡",
    art: "01-inner-figure-profile.jpg",
    core: true,
    de: {
      name: "Human Design",
      tagline: "Typ, Autorität und Energiezentren",
      seoTitle: "Human Design erklärt — Typ, Autorität & Bodygraph bei Hermetia",
      seoDescription: "Was Human Design ist, wie Hermetia deinen Bodygraph berechnet und was Typ, innere Autorität und Energiezentren über deine Entscheidungen verraten.",
      intro: "Human Design verbindet astrologische Daten mit einem energetischen Körperbild – eine Landkarte dafür, wie du am stimmigsten entscheidest und lebst.",
      whatTitle: `${W} Human Design?`,
      what: "Human Design beschreibt anhand deiner Geburtsdaten einen „Bodygraph“ mit Typ, definierten und offenen Zentren, Kanälen und Toren. Es ist ein modernes Synthesesystem, das Energie- und Entscheidungsmuster sichtbar macht.",
      howTitle: HOW_DE,
      how: "Hermetia berechnet zwei Momente: deine Geburt (Personality) und einen Punkt rund 88 Sonnengrade davor (Design). Daraus ergeben sich Typ, innere Autorität, offene/definierte Zentren und Aktivierungen – exakt aus den Ephemeriden, nicht geschätzt.",
      revealsTitle: REV_DE,
      reveals: "Deinen Typ (z. B. Generator, Projektor), deine innere Autorität (wie du am besten entscheidest) und welche Zentren bei dir offen sind (wo du besonders empfänglich bist). Speist die Ebenen „Wie du entscheidest“, „Nervensystem“ und „Arbeit & Berufung“.",
      faq: [
        { q: "Ist die Human-Design-Berechnung erlaubt?", a: "Ja. Die Berechnung beruht auf astronomischen Daten und ist frei; geschützt sind nur bestimmte Marken und Originaltexte – die verwenden wir nicht." },
        { q: "Was ist die „innere Autorität“?", a: "Sie beschreibt, über welchen inneren Kompass du Entscheidungen am stimmigsten triffst – etwa über Bauchgefühl, Emotion oder im Gespräch." }
      ]
    },
    en: {
      name: "Human Design",
      tagline: "Type, authority and energy centres",
      seoTitle: "Human Design explained — type, authority & bodygraph at Hermetia",
      seoDescription: "What Human Design is, how Hermetia calculates your bodygraph and what type, inner authority and energy centres reveal about your decisions.",
      intro: "Human Design combines astrological data with an energetic body image — a map for how you decide and live most truly.",
      whatTitle: "What is Human Design?",
      what: "Using your birth data, Human Design describes a “bodygraph” with type, defined and open centres, channels and gates. It is a modern synthesis system that makes energy and decision patterns visible.",
      howTitle: HOW_EN,
      how: "Hermetia computes two moments: your birth (Personality) and a point about 88 solar degrees earlier (Design). From these come your type, inner authority, open/defined centres and activations — derived exactly from the ephemeris, not estimated.",
      revealsTitle: REV_EN,
      reveals: "Your type (e.g. Generator, Projector), your inner authority (how you decide best) and which centres are open (where you are especially receptive). Feeds the levels “How you decide”, “Nervous system” and “Work & calling”.",
      faq: [
        { q: "Is calculating Human Design allowed?", a: "Yes. The calculation is based on astronomical data and is free; only certain trademarks and original texts are protected — we do not use those." },
        { q: "What is “inner authority”?", a: "It describes the inner compass through which you make the most coherent decisions — e.g. via gut feeling, emotion or talking things through." }
      ]
    }
  },
  {
    slug: "gene-keys",
    glyph: "✦",
    art: "03-library-of-self-profile.jpg",
    core: true,
    de: {
      name: "Gene Keys",
      tagline: "64 Archetypen von Schatten zu Gabe",
      seoTitle: "Gene Keys verstehen — 64 Archetypen & dein Wachstumsweg",
      seoDescription: "Was die Gene Keys sind, wie Hermetia deine Schlüssel berechnet und wie der Weg von Schatten über Gabe zur höchsten Frequenz dein Wachstum begleitet.",
      intro: "Die Gene Keys sind eine kontemplative Landkarte für Wachstum – 64 Archetypen, jeder mit einem Weg von Schatten über Gabe bis zur höchsten Frequenz.",
      whatTitle: `${W} Gene Keys?`,
      what: "Die Gene Keys ordnen 64 Archetypen (verwandt mit den I-Ging-Hexagrammen) deinem Profil zu. Jeder Schlüssel beschreibt eine Triade: einen Schatten (Herausforderung), eine Gabe (Potenzial) und eine Siddhi (höchste Reife).",
      howTitle: HOW_DE,
      how: "Hermetia leitet deine zentralen Schlüssel aus denselben exakt berechneten Himmelspositionen ab wie Human Design (z. B. die hologenetischen Sphären). Die Deutung nutzt unseren eigenen, geprüften Korpus – keine geschützten Originaltexte.",
      revealsTitle: REV_DE,
      reveals: "Deine prägenden Archetypen und ihren Reifungsweg – besonders rund um Berufung, Beziehungen und das Nervensystem. Speist die Ebenen „Gaben“, „Schatten & Wachstum“ und „Berufung“.",
      faq: [
        { q: "Sind Gene Keys dasselbe wie Human Design?", a: "Sie teilen dieselbe astronomische Grundlage, deuten sie aber anders: Human Design als Energiemechanik, Gene Keys als kontemplativen Wachstumsweg." },
        { q: "Verwendet Hermetia Original-Gene-Keys-Texte?", a: "Nein. Wir nutzen einen eigenen, geprüften Korpus für die Archetyp-Triaden; geschützte Originaltexte fließen nicht ins KI-Modell." }
      ]
    },
    en: {
      name: "Gene Keys",
      tagline: "64 archetypes from shadow to gift",
      seoTitle: "Understanding the Gene Keys — 64 archetypes & your path of growth",
      seoDescription: "What the Gene Keys are, how Hermetia calculates your keys and how the path from shadow through gift to highest frequency supports your growth.",
      intro: "The Gene Keys are a contemplative map for growth — 64 archetypes, each with a path from shadow through gift to highest frequency.",
      whatTitle: "What are the Gene Keys?",
      what: "The Gene Keys assign 64 archetypes (related to the I Ching hexagrams) to your profile. Each key describes a triad: a shadow (challenge), a gift (potential) and a siddhi (highest maturity).",
      howTitle: HOW_EN,
      how: "Hermetia derives your central keys from the same precisely calculated celestial positions as Human Design (e.g. the hologenetic spheres). The interpretation uses our own vetted corpus — no protected original texts.",
      revealsTitle: REV_EN,
      reveals: "Your formative archetypes and their path of maturation — especially around calling, relationships and the nervous system. Feeds the levels “Gifts”, “Shadow & growth” and “Calling”.",
      faq: [
        { q: "Are the Gene Keys the same as Human Design?", a: "They share the same astronomical basis but interpret it differently: Human Design as energy mechanics, Gene Keys as a contemplative path of growth." },
        { q: "Does Hermetia use original Gene Keys texts?", a: "No. We use our own vetted corpus for the archetype triads; protected original texts are not fed into the AI model." }
      ]
    }
  },
  {
    slug: "numerologie",
    glyph: "№",
    art: "05-archetype-procession-profile.jpg",
    core: true,
    de: {
      name: "Numerologie",
      tagline: "Kernzahlen aus Name und Datum",
      seoTitle: "Numerologie & Lebenszahl — Bedeutung berechnen bei Hermetia",
      seoDescription: "Was Numerologie ist, wie Hermetia deine Lebenszahl und Kernzahlen aus Name und Geburtsdatum berechnet und welche Zyklen sie sichtbar macht.",
      intro: "Die Numerologie übersetzt Name und Geburtsdatum in Kernzahlen – ein klares, einprägsames Bild von Lebensweg, Berufung und Zyklen.",
      whatTitle: `${W} Numerologie?`,
      what: "Numerologie ordnet Buchstaben und Daten Zahlenwerte zu und verdichtet sie zu Kernzahlen wie Lebensweg-, Ausdrucks- und Seelenzahl. Sie ist reine Arithmetik – nachvollziehbar und reproduzierbar.",
      howTitle: HOW_DE,
      how: "Hermetia berechnet deine Kernzahlen deterministisch aus Geburtsdatum und Geburtsnamen und leitet daraus persönliche Zyklen ab (z. B. dein persönliches Jahr).",
      revealsTitle: REV_DE,
      reveals: "Deinen Lebensweg (Grundthema), deine Ausdruckszahl (Talente) und deine zeitlichen Zyklen. Speist die Ebenen „Berufung“, „Seelenweg“ und die tägliche Ableitung.",
      faq: [
        { q: "Welche Numerologie verwendet Hermetia?", a: "Die gängige pythagoräische Numerologie, ergänzt um persönliche Jahres- und Zyklusberechnungen." },
        { q: "Brauche ich meinen Geburtsnamen?", a: "Für namensbasierte Zahlen ja; die datumsbasierten Kernzahlen funktionieren auch ohne Namen." }
      ]
    },
    en: {
      name: "Numerology",
      tagline: "Core numbers from name and date",
      seoTitle: "Numerology & life path number — calculate the meaning at Hermetia",
      seoDescription: "What numerology is, how Hermetia calculates your life path and core numbers from name and birth date and which cycles it reveals.",
      intro: "Numerology translates name and birth date into core numbers — a clear, memorable picture of life path, calling and cycles.",
      whatTitle: "What is numerology?",
      what: "Numerology assigns numeric values to letters and dates and condenses them into core numbers such as life path, expression and soul number. It is pure arithmetic — transparent and reproducible.",
      howTitle: HOW_EN,
      how: "Hermetia calculates your core numbers deterministically from birth date and birth name and derives personal cycles from them (e.g. your personal year).",
      revealsTitle: REV_EN,
      reveals: "Your life path (core theme), your expression number (talents) and your cycles in time. Feeds the levels “Calling”, “Soul path” and the daily derivation.",
      faq: [
        { q: "Which numerology does Hermetia use?", a: "Common Pythagorean numerology, complemented by personal year and cycle calculations." },
        { q: "Do I need my birth name?", a: "For name-based numbers, yes; the date-based core numbers work without a name too." }
      ]
    }
  },
  {
    slug: "bazi-vier-saeulen",
    glyph: "䷀",
    art: "06-inner-city-map-profile.jpg",
    core: true,
    de: {
      name: "BaZi · Vier Säulen",
      tagline: "Das chinesische Geburtsdiagramm",
      seoTitle: "BaZi (Vier Säulen) erklärt — chinesisches Geburtsdiagramm",
      seoDescription: "Was BaZi / die Vier Säulen des Schicksals sind, wie Hermetia dein Diagramm aus Jahr, Monat, Tag und Stunde berechnet und was es zeigt.",
      intro: "BaZi – die „Vier Säulen des Schicksals“ – ist das fein aufgelöste chinesische Geburtsdiagramm und ein starkes Bild für deinen Lebenszeit-Rhythmus.",
      whatTitle: `${W} BaZi?`,
      what: "BaZi bildet Jahr, Monat, Tag und Stunde deiner Geburt als vier „Säulen“ aus Himmelsstämmen und Erdzweigen ab. Der Tagesmeister steht für deinen Wesenskern; die Fünf-Elemente-Balance zeigt Tendenzen und Lebensphasen.",
      howTitle: HOW_DE,
      how: "Hermetia konvertiert deine Geburtsdaten in den chinesischen Solar-/Mondkalender und bestimmt die vier Säulen sowie die Elemente-Verteilung – kalendergenau, basierend auf astronomischen Daten.",
      revealsTitle: REV_DE,
      reveals: "Deinen Tagesmeister (Kern), deine Elemente-Balance (Stärken/Spannungen) und Lebenszeit-Phasen (大運). Speist „Was dich ausmacht“, „Rhythmus & Sensibilität“ und Timing-Impulse.",
      faq: [
        { q: "Ist BaZi dasselbe wie das chinesische Tierkreiszeichen?", a: "Nein. Das Jahres-Tierzeichen ist nur ein Teil. BaZi nutzt alle vier Säulen und ist dadurch deutlich person-spezifischer." },
        { q: "Brauche ich die Geburtsstunde?", a: "Für die Stunden-Säule ja; die übrigen drei Säulen ergeben sich auch ohne genaue Uhrzeit." }
      ]
    },
    en: {
      name: "BaZi · Four Pillars",
      tagline: "The Chinese birth chart",
      seoTitle: "BaZi (Four Pillars) explained — the Chinese birth chart",
      seoDescription: "What BaZi / the Four Pillars of Destiny are, how Hermetia calculates your chart from year, month, day and hour and what it reveals.",
      intro: "BaZi — the “Four Pillars of Destiny” — is the finely resolved Chinese birth chart and a powerful image of your lifetime rhythm.",
      whatTitle: "What is BaZi?",
      what: "BaZi maps the year, month, day and hour of your birth as four “pillars” of heavenly stems and earthly branches. The day master represents your core; the five-element balance shows tendencies and life phases.",
      howTitle: HOW_EN,
      how: "Hermetia converts your birth data into the Chinese solar/lunar calendar and determines the four pillars and the element distribution — calendar-accurate, based on astronomical data.",
      revealsTitle: REV_EN,
      reveals: "Your day master (core), your element balance (strengths/tensions) and lifetime phases (大運). Feeds “What makes you you”, “Rhythm & sensitivity” and timing impulses.",
      faq: [
        { q: "Is BaZi the same as the Chinese zodiac sign?", a: "No. The year animal is only one part. BaZi uses all four pillars and is therefore far more person-specific." },
        { q: "Do I need the hour of birth?", a: "For the hour pillar, yes; the other three pillars are determined even without an exact time." }
      ]
    }
  },
  {
    slug: "enneagramm",
    glyph: "✷",
    art: "01-inner-figure-profile.jpg",
    core: false,
    de: {
      name: "Enneagramm",
      tagline: "Neun Typen der Tiefenmotivation",
      seoTitle: "Enneagramm-Typen — Test & Bedeutung bei Hermetia",
      seoDescription: "Was das Enneagramm ist, wie Hermetia deinen Typ über einen Fragebogen bestimmt und was die neun Muster über deine Tiefenmotivation verraten.",
      intro: "Das Enneagramm beschreibt neun Grundmuster der Motivation – warum du tust, was du tust, und was dich im Kern antreibt.",
      whatTitle: `${W} das Enneagramm?`,
      what: "Das Enneagramm unterscheidet neun Persönlichkeitstypen mit Flügeln und Entwicklungsrichtungen. Es zielt nicht auf Verhalten, sondern auf die darunterliegende Motivation und das Kernthema.",
      howTitle: HOW_DE,
      how: "Anders als die Geburtssysteme ermittelt Hermetia deinen Enneagramm-Typ über einen kurzen Fragebogen mit eigenen Items – kein Geburtsdatum nötig. Die Auswertung erfolgt als transparentes Scoring.",
      revealsTitle: REV_DE,
      reveals: "Deinen Kerntyp, Flügel und Stress-/Wachstumsrichtung. Liefert einen Signaltyp, den kein Geburtssystem bietet, und speist „Schatten & Wachstum“ sowie „Was dich ausmacht“.",
      faq: [
        { q: "Brauche ich für das Enneagramm Geburtsdaten?", a: "Nein. Der Typ wird über einen Fragebogen bestimmt, nicht über Datum oder Uhrzeit." },
        { q: "Wie genau ist ein Enneagramm-Test?", a: "Er liefert eine fundierte Annäherung. Du behältst die Deutungshoheit und kannst deinen Typ jederzeit anpassen." }
      ]
    },
    en: {
      name: "Enneagram",
      tagline: "Nine types of deep motivation",
      seoTitle: "Enneagram types — test & meaning at Hermetia",
      seoDescription: "What the Enneagram is, how Hermetia determines your type via a questionnaire and what the nine patterns reveal about your deep motivation.",
      intro: "The Enneagram describes nine core patterns of motivation — why you do what you do, and what drives you at heart.",
      whatTitle: "What is the Enneagram?",
      what: "The Enneagram distinguishes nine personality types with wings and directions of development. It targets not behaviour but the underlying motivation and core theme.",
      howTitle: HOW_EN,
      how: "Unlike the birth systems, Hermetia determines your Enneagram type via a short questionnaire with our own items — no birth date needed. The evaluation is a transparent scoring.",
      revealsTitle: REV_EN,
      reveals: "Your core type, wing and stress/growth direction. Provides a signal type no birth system offers, feeding “Shadow & growth” and “What makes you you”.",
      faq: [
        { q: "Do I need birth data for the Enneagram?", a: "No. The type is determined via a questionnaire, not via date or time." },
        { q: "How accurate is an Enneagram test?", a: "It gives a well-founded approximation. You keep interpretive authority and can adjust your type at any time." }
      ]
    }
  },
  {
    slug: "maya-tzolkin",
    glyph: "◈",
    art: "05-archetype-procession-profile.jpg",
    core: false,
    de: {
      name: "Maya Tzolk’in",
      tagline: "260 Tageszeichen des Maya-Kalenders",
      seoTitle: "Maya Tzolk’in — dein Tageszeichen (Kin) berechnen",
      seoDescription: "Was der Maya-Tzolk’in-Kalender ist, wie Hermetia dein Kin (Ton + Zeichen) berechnet und welchen eigenen Archetyp-Raum er eröffnet.",
      intro: "Der Tzolk’in ist der heilige 260-Tage-Kalender der Maya – ein fremder, reicher Archetyp-Raum jenseits der westlichen Symbolik.",
      whatTitle: `${W} der Tzolk’in?`,
      what: "Der Tzolk’in kombiniert 13 Töne mit 20 Tageszeichen zu 260 Kombinationen (Kin). Dein Geburts-Kin gilt als Signatur für Wesen und Aufgabe – ein eigenständiges Bild neben Astrologie & Co.",
      howTitle: HOW_DE,
      how: "Hermetia berechnet dein Kin rein arithmetisch aus dem Geburtsdatum (über die Julianische Tageszahl). Wir nutzen den traditionellen Tzolk’in – nicht das geschützte Dreamspell.",
      revealsTitle: REV_DE,
      reveals: "Dein Tageszeichen und deinen Ton als zusätzlichen, orthogonalen Blickwinkel auf Wesen und Berufung. Stärkt die Konvergenz-Engine durch eine fremde Tradition.",
      faq: [
        { q: "Ist das Dreamspell dasselbe wie der Tzolk’in?", a: "Nein. Hermetia nutzt den traditionellen Tzolk’in; das modern abgewandelte Dreamspell ist urheberrechtlich geschützt und wird nicht verwendet." },
        { q: "Brauche ich eine Geburtszeit?", a: "Nein. Das Kin ergibt sich allein aus dem Geburtsdatum." }
      ]
    },
    en: {
      name: "Maya Tzolk’in",
      tagline: "260 day signs of the Maya calendar",
      seoTitle: "Maya Tzolk’in — calculate your day sign (Kin)",
      seoDescription: "What the Maya Tzolk’in calendar is, how Hermetia calculates your Kin (tone + sign) and what distinct archetype space it opens.",
      intro: "The Tzolk’in is the sacred 260-day calendar of the Maya — a foreign, rich space of archetypes beyond Western symbolism.",
      whatTitle: "What is the Tzolk’in?",
      what: "The Tzolk’in combines 13 tones with 20 day signs into 260 combinations (Kin). Your birth Kin is seen as a signature of nature and task — a distinct image alongside astrology and the rest.",
      howTitle: HOW_EN,
      how: "Hermetia calculates your Kin purely arithmetically from the birth date (via the Julian day number). We use the traditional Tzolk’in — not the protected Dreamspell.",
      revealsTitle: REV_EN,
      reveals: "Your day sign and tone as an additional, orthogonal perspective on nature and calling. Strengthens the convergence engine through a foreign tradition.",
      faq: [
        { q: "Is the Dreamspell the same as the Tzolk’in?", a: "No. Hermetia uses the traditional Tzolk’in; the modern Dreamspell variant is copyrighted and is not used." },
        { q: "Do I need a birth time?", a: "No. The Kin is determined from the birth date alone." }
      ]
    }
  },
  {
    slug: "vedische-nakshatra",
    glyph: "☾",
    art: "04-living-waveform-profile.jpg",
    core: false,
    de: {
      name: "Vedische Nakshatra",
      tagline: "27 Mondhäuser der indischen Astrologie",
      seoTitle: "Nakshatra — dein vedisches Mondzeichen berechnen",
      seoDescription: "Was Nakshatras sind, wie Hermetia dein Geburts-Nakshatra über den siderischen Mond berechnet und welche feinen Nuancen es zeigt.",
      intro: "Die Nakshatras sind die 27 Mondhäuser der vedischen Astrologie – ein feinmaschiges Bild deiner Gefühlswelt und inneren Färbung.",
      whatTitle: `${W} ein Nakshatra?`,
      what: "Die vedische Astrologie teilt den Tierkreis in 27 Mondhäuser (Nakshatras). Dein Geburts-Nakshatra – die Position des Mondes – gilt als besonders aussagekräftig für Gemüt und Beziehungsstil.",
      howTitle: HOW_DE,
      how: "Hermetia bestimmt die exakte Mondposition (Skyfield) und rechnet sie mit der Lahiri-Ayanamsa in den siderischen Tierkreis um – daraus ergibt sich dein Nakshatra inklusive Pada.",
      revealsTitle: REV_DE,
      reveals: "Dein Mond-Nakshatra als feine Nuance deiner Gefühlswelt – ergänzend zum westlichen Mondzeichen. Speist „Rhythmus & Sensibilität“ und „Beziehungsmuster“.",
      faq: [
        { q: "Worin unterscheidet sich das vom westlichen Mondzeichen?", a: "Die vedische Astrologie nutzt den siderischen Tierkreis (Ayanamsa-Korrektur) und eine feinere 27er-Einteilung – andere Lesart desselben Himmels." },
        { q: "Brauche ich eine genaue Geburtszeit?", a: "Der Mond wandert relativ schnell; eine grobe Zeit genügt meist, eine genaue verfeinert das Pada." }
      ]
    },
    en: {
      name: "Vedic Nakshatra",
      tagline: "27 lunar mansions of Indian astrology",
      seoTitle: "Nakshatra — calculate your Vedic moon sign",
      seoDescription: "What Nakshatras are, how Hermetia calculates your birth Nakshatra via the sidereal moon and which subtle nuances it reveals.",
      intro: "The Nakshatras are the 27 lunar mansions of Vedic astrology — a fine-grained picture of your emotional world and inner colouring.",
      whatTitle: "What is a Nakshatra?",
      what: "Vedic astrology divides the zodiac into 27 lunar mansions (Nakshatras). Your birth Nakshatra — the moon’s position — is considered especially telling for temperament and relationship style.",
      howTitle: HOW_EN,
      how: "Hermetia determines the exact moon position (Skyfield) and converts it into the sidereal zodiac with the Lahiri ayanamsa — yielding your Nakshatra including pada.",
      revealsTitle: REV_EN,
      reveals: "Your moon Nakshatra as a subtle nuance of your emotional world — complementing the Western moon sign. Feeds “Rhythm & sensitivity” and “Relationship patterns”.",
      faq: [
        { q: "How does this differ from the Western moon sign?", a: "Vedic astrology uses the sidereal zodiac (ayanamsa correction) and a finer 27-fold division — a different reading of the same sky." },
        { q: "Do I need an exact birth time?", a: "The moon moves relatively fast; a rough time usually suffices, an exact one refines the pada." }
      ]
    }
  },
  {
    slug: "i-ching",
    glyph: "䷁",
    art: "03-library-of-self-profile.jpg",
    core: false,
    de: {
      name: "I Ching",
      tagline: "64 Hexagramme als Spiegel des Tages",
      seoTitle: "I Ching — das Buch der Wandlungen als Tagesimpuls",
      seoDescription: "Was das I Ging ist, wie Hermetia ein Hexagramm als kontemplativen Tagesimpuls nutzt und warum es keine Vorhersage, sondern ein Spiegel ist.",
      intro: "Das I Ging, das „Buch der Wandlungen“, ist ein jahrtausendealtes Orakel- und Weisheitssystem aus 64 Hexagrammen – ein ruhiger Spiegel für den Moment.",
      whatTitle: `${W} das I Ging?`,
      what: "Das I Ging besteht aus 64 Hexagrammen (je sechs Linien), die archetypische Situationen und Wandlungen beschreiben. Es wird kontemplativ befragt – als Anstoß zum Nachdenken, nicht als Schicksalsspruch.",
      howTitle: HOW_DE,
      how: "Für deinen Tagesimpuls zieht Hermetia ein Hexagramm und deutet es im Kontext deines Profils. Die Deutung stützt sich auf gemeinfreie Quellen (z. B. Legge) und unsere eigene Sprache.",
      revealsTitle: REV_DE,
      reveals: "Einen kontemplativen Tagesimpuls und Reflexionsanstoß. Das I Ging ist ein Schicht-C-Kanal (tägliche Ableitung), kein festes Geburtsmerkmal.",
      faq: [
        { q: "Sagt das I Ging die Zukunft voraus?", a: "Nein. Hermetia nutzt es als Spiegel und Reflexionsanstoß – einladend, nicht deterministisch." },
        { q: "Gehört das I Ging zu meinem festen Profil?", a: "Nein, es speist die tägliche Ebene „Heute“, nicht dein dauerhaftes Grundlagenprofil." }
      ]
    },
    en: {
      name: "I Ching",
      tagline: "64 hexagrams as a mirror of the day",
      seoTitle: "I Ching — the Book of Changes as a daily impulse",
      seoDescription: "What the I Ching is, how Hermetia uses a hexagram as a contemplative daily impulse and why it is a mirror, not a prediction.",
      intro: "The I Ching, the “Book of Changes”, is a millennia-old oracle and wisdom system of 64 hexagrams — a calm mirror for the moment.",
      whatTitle: "What is the I Ching?",
      what: "The I Ching consists of 64 hexagrams (six lines each) describing archetypal situations and changes. It is consulted contemplatively — as a prompt for reflection, not a verdict of fate.",
      howTitle: HOW_EN,
      how: "For your daily impulse Hermetia draws a hexagram and interprets it in the context of your profile. The interpretation draws on public-domain sources (e.g. Legge) and our own language.",
      revealsTitle: REV_EN,
      reveals: "A contemplative daily impulse and reflection prompt. The I Ching is a layer-C channel (daily derivation), not a fixed birth trait.",
      faq: [
        { q: "Does the I Ching predict the future?", a: "No. Hermetia uses it as a mirror and prompt for reflection — inviting, not deterministic." },
        { q: "Is the I Ching part of my fixed profile?", a: "No, it feeds the daily “Today” layer, not your permanent foundational profile." }
      ]
    }
  },
  {
    slug: "ayurveda-dosha",
    glyph: "❀",
    art: "01-inner-figure-profile.jpg",
    core: false,
    de: {
      name: "Ayurveda · Doshas",
      tagline: "Dein körperlich-energetischer Typ",
      seoTitle: "Ayurveda Dosha-Typ (Prakriti) — Test & Bedeutung",
      seoDescription: "Was die Ayurveda-Doshas sind, wie Hermetia deinen Typ über einen Fragebogen bestimmt und wie er alltagsnahe Impulse speist.",
      intro: "Ayurveda beschreibt mit den drei Doshas (Vata, Pitta, Kapha) deine körperlich-energetische Konstitution – der einzige somatische Signaltyp in Hermetia.",
      whatTitle: `${W} ein Dosha?`,
      what: "Die Doshas Vata, Pitta und Kapha stehen für Grundprinzipien von Bewegung, Umwandlung und Struktur. Deine Mischung (Prakriti) prägt Schlaf, Verdauung, Energie und Stressreaktion.",
      howTitle: HOW_DE,
      how: "Hermetia bestimmt deinen Dosha-Typ über einen einfühlsamen Fragebogen (kein Geburtsdatum). Wichtig: Ayurveda ist hier Inspiration zur Selbstfürsorge, keine medizinische Diagnose.",
      revealsTitle: REV_DE,
      reveals: "Deine Konstitutions-Tendenz – ideal für körpernahe Tagesimpulse zu Rhythmus, Ruhe und Energie. Speist „Rhythmus & Sensibilität“ und die tägliche Ableitung.",
      faq: [
        { q: "Ist die Dosha-Bestimmung eine medizinische Aussage?", a: "Nein. Sie ist Inspiration zur Selbstfürsorge – keine Diagnose und kein Ersatz für ärztlichen Rat." },
        { q: "Brauche ich Geburtsdaten?", a: "Nein. Der Typ ergibt sich aus deinen Antworten im Fragebogen." }
      ]
    },
    en: {
      name: "Ayurveda · Doshas",
      tagline: "Your bodily-energetic type",
      seoTitle: "Ayurveda dosha type (Prakriti) — test & meaning",
      seoDescription: "What the Ayurveda doshas are, how Hermetia determines your type via a questionnaire and how it feeds everyday impulses.",
      intro: "With the three doshas (Vata, Pitta, Kapha) Ayurveda describes your bodily-energetic constitution — the only somatic signal type in Hermetia.",
      whatTitle: "What is a dosha?",
      what: "The doshas Vata, Pitta and Kapha stand for basic principles of movement, transformation and structure. Your mix (Prakriti) shapes sleep, digestion, energy and stress response.",
      howTitle: HOW_EN,
      how: "Hermetia determines your dosha type via a gentle questionnaire (no birth date). Important: here Ayurveda is inspiration for self-care, not a medical diagnosis.",
      revealsTitle: REV_EN,
      reveals: "Your constitutional tendency — ideal for body-near daily impulses on rhythm, rest and energy. Feeds “Rhythm & sensitivity” and the daily derivation.",
      faq: [
        { q: "Is the dosha assessment a medical statement?", a: "No. It is inspiration for self-care — not a diagnosis and no substitute for medical advice." },
        { q: "Do I need birth data?", a: "No. The type follows from your answers in the questionnaire." }
      ]
    }
  },
  {
    slug: "hellenistische-astrologie",
    glyph: "☉",
    art: "02-ceramic-guardian-profile.jpg",
    core: false,
    de: {
      name: "Hellenistische Astrologie",
      tagline: "Klassische Technik & Lebenszeit-Timing",
      seoTitle: "Hellenistische Astrologie — Sekt, Profektionen & Timing",
      seoDescription: "Was hellenistische Astrologie ist, wie Hermetia Sekt und jährliche Profektionen berechnet und wie sie deinem Profil klassische Tiefe gibt.",
      intro: "Die hellenistische Astrologie ist die antike Wurzel der westlichen Astrologie – mit klaren Techniken für Tiefe und Lebenszeit-Timing.",
      whatTitle: `${W} hellenistische Astrologie?`,
      what: "Sie nutzt klassische Konzepte wie die Sekt (Tag-/Nacht-Geburt), jährliche Profektionen und Zeitherrscher, um Schwerpunkte und Lebensphasen zu beleuchten.",
      howTitle: HOW_DE,
      how: "Hermetia rechnet diese Techniken rein arithmetisch auf den bereits exakt bestimmten Skyfield-Positionen – ein vertiefender Layer über dem Standard-Horoskop.",
      revealsTitle: REV_DE,
      reveals: "Welche Lebensbereiche aktuell betont sind (Profektionsjahr) und ob deine Geburt Tag- oder Nacht-betont ist. Speist Timing-Impulse und „Seelenweg“.",
      faq: [
        { q: "Ist das ein eigenes System oder Teil der Astrologie?", a: "Eine vertiefende Schicht der westlichen Astrologie – sie nutzt dieselben Positionen, deutet sie aber mit klassischen Techniken." },
        { q: "Was ist ein Profektionsjahr?", a: "Eine jährlich weiterrückende Betonung eines Hauses/Themas – ein einfaches, starkes Timing-Werkzeug." }
      ]
    },
    en: {
      name: "Hellenistic astrology",
      tagline: "Classical technique & lifetime timing",
      seoTitle: "Hellenistic astrology — sect, profections & timing",
      seoDescription: "What Hellenistic astrology is, how Hermetia calculates sect and annual profections and how it adds classical depth to your profile.",
      intro: "Hellenistic astrology is the ancient root of Western astrology — with clear techniques for depth and lifetime timing.",
      whatTitle: "What is Hellenistic astrology?",
      what: "It uses classical concepts such as sect (day/night birth), annual profections and time-lords to highlight emphases and life phases.",
      howTitle: HOW_EN,
      how: "Hermetia computes these techniques purely arithmetically on the already exact Skyfield positions — a deepening layer over the standard chart.",
      revealsTitle: REV_EN,
      reveals: "Which areas of life are currently emphasised (profection year) and whether your birth is day- or night-leaning. Feeds timing impulses and “Soul path”.",
      faq: [
        { q: "Is this a separate system or part of astrology?", a: "A deepening layer of Western astrology — it uses the same positions but interprets them with classical techniques." },
        { q: "What is a profection year?", a: "An annually advancing emphasis on a house/theme — a simple, powerful timing tool." }
      ]
    }
  },
  {
    slug: "mondknoten",
    glyph: "☊",
    art: "04-living-waveform-profile.jpg",
    core: false,
    de: {
      name: "Mondknoten-Achse",
      tagline: "Vergangenheit und Wachstumsrichtung",
      seoTitle: "Mondknoten — Nord- und Südknoten in deinem Horoskop",
      seoDescription: "Was die Mondknoten sind, wie Hermetia die Knotenachse berechnet und was Nord- und Südknoten über deine Entwicklungsrichtung andeuten.",
      intro: "Die Mondknoten markieren eine Achse zwischen Vertrautem und Wachstum – ein beliebtes Bild für die seelische Entwicklungsrichtung.",
      whatTitle: `${W} die Mondknoten?`,
      what: "Nord- und Südknoten sind die Schnittpunkte der Mondbahn mit der Ekliptik. Der Südknoten gilt als das Vertraute/Mitgebrachte, der Nordknoten als Einladung zum Wachstum.",
      howTitle: HOW_DE,
      how: "Hermetia berechnet die mittlere Knotenachse arithmetisch aus den Ephemeriden und ordnet sie deinen Zeichen/Häusern zu.",
      revealsTitle: REV_DE,
      reveals: "Deine Wachstumsrichtung (Nordknoten) und deine Komfortzone (Südknoten). Speist „Seelenweg“ und „Schatten & Wachstum“.",
      faq: [
        { q: "Ist die Knotenachse Schicksal?", a: "Nein. Hermetia liest sie als Einladung zur Entwicklung, nicht als Vorbestimmung." },
        { q: "Brauche ich eine Geburtszeit?", a: "Für die Knoten an sich nicht zwingend; die Häuserzuordnung profitiert von einer genauen Uhrzeit." }
      ]
    },
    en: {
      name: "Lunar nodes",
      tagline: "Past and direction of growth",
      seoTitle: "Lunar nodes — north and south node in your chart",
      seoDescription: "What the lunar nodes are, how Hermetia calculates the nodal axis and what north and south node suggest about your direction of growth.",
      intro: "The lunar nodes mark an axis between the familiar and growth — a beloved image for the soul’s direction of development.",
      whatTitle: "What are the lunar nodes?",
      what: "North and south node are the intersections of the moon’s orbit with the ecliptic. The south node is seen as the familiar/brought-along, the north node as an invitation to grow.",
      howTitle: HOW_EN,
      how: "Hermetia calculates the mean nodal axis arithmetically from the ephemeris and assigns it to your signs/houses.",
      revealsTitle: REV_EN,
      reveals: "Your direction of growth (north node) and your comfort zone (south node). Feeds “Soul path” and “Shadow & growth”.",
      faq: [
        { q: "Are the nodes fate?", a: "No. Hermetia reads them as an invitation to develop, not as predestination." },
        { q: "Do I need a birth time?", a: "Not strictly for the nodes themselves; the house assignment benefits from an exact time." }
      ]
    }
  },
  {
    slug: "persoenliches-jahr",
    glyph: "❍",
    art: "06-inner-city-map-profile.jpg",
    core: false,
    de: {
      name: "Persönliches Jahr",
      tagline: "Numerologische Zyklen im Zeitverlauf",
      seoTitle: "Persönliches Jahr berechnen — numerologische Zyklen",
      seoDescription: "Was das persönliche Jahr ist, wie Hermetia deinen numerologischen Jahreszyklus berechnet und wie er deine Tagesimpulse über die Zeit färbt.",
      intro: "Das persönliche Jahr ist ein numerologischer Zyklus, der jedem Kalenderjahr ein Grundthema gibt – ein sanftes Bild für Timing und Phasen.",
      whatTitle: `${W} das persönliche Jahr?`,
      what: "Aus Geburtstag und aktuellem Jahr ergibt sich eine Jahreszahl (1–9) mit eigenem Thema – von Neubeginn (1) bis Abschluss (9). Ergänzt werden längere Phasen (Pinnacles).",
      howTitle: HOW_DE,
      how: "Hermetia berechnet dein persönliches Jahr deterministisch und verbindet es mit deinen übrigen Zyklen, um Timing-Impulse zu erden.",
      revealsTitle: REV_DE,
      reveals: "Das Grundthema deines aktuellen Jahres und wo du im größeren Zyklus stehst. Speist die tägliche Ableitung und „Seelenweg“.",
      faq: [
        { q: "Ist das eine Vorhersage?", a: "Nein. Es ist ein Stimmungs-/Themen-Rahmen zur Reflexion, nicht eine Festlegung von Ereignissen." },
        { q: "Wann wechselt das persönliche Jahr?", a: "Je nach Methode zum Kalenderjahr oder rund um den Geburtstag – Hermetia weist die verwendete Methode aus." }
      ]
    },
    en: {
      name: "Personal year",
      tagline: "Numerological cycles over time",
      seoTitle: "Calculate your personal year — numerological cycles",
      seoDescription: "What the personal year is, how Hermetia calculates your numerological year cycle and how it colours your daily impulses over time.",
      intro: "The personal year is a numerological cycle that gives each calendar year a core theme — a gentle image for timing and phases.",
      whatTitle: "What is the personal year?",
      what: "From your birthday and the current year comes a year number (1–9) with its own theme — from new beginnings (1) to completion (9). Longer phases (pinnacles) complement it.",
      howTitle: HOW_EN,
      how: "Hermetia calculates your personal year deterministically and connects it with your other cycles to ground timing impulses.",
      revealsTitle: REV_EN,
      reveals: "The core theme of your current year and where you stand in the larger cycle. Feeds the daily derivation and “Soul path”.",
      faq: [
        { q: "Is this a prediction?", a: "No. It is a mood/theme frame for reflection, not a fixing of events." },
        { q: "When does the personal year change?", a: "Depending on the method, at the calendar year or around your birthday — Hermetia states the method used." }
      ]
    }
  }
];

export const systemSlugs = systems.map((s) => s.slug);

export function getSystem(slug: string): SystemEntry | undefined {
  return systems.find((s) => s.slug === slug);
}

export function systemText(system: SystemEntry, locale: string): SystemText {
  return locale === "en" ? system.en : system.de;
}

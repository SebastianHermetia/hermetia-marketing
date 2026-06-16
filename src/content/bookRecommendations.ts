import { type Locale } from "@/i18n/config";

type Localized = {
  de: string;
  en: string;
};

export type BookRecommendation = {
  id: string;
  title: string;
  authors: string;
  languages: string[];
  level: Localized;
  description: Localized;
  systems: string[];
  searchQuery: string;
};

const localeSearchHosts: Partial<Record<Locale | string, string>> = {
  de: "https://www.amazon.de/s?k=",
  en: "https://www.amazon.co.uk/s?k=",
  fr: "https://www.amazon.fr/s?k=",
  es: "https://www.amazon.es/s?k=",
  it: "https://www.amazon.it/s?k=",
  nl: "https://www.bol.com/nl/nl/s/?searchtext=",
  pl: "https://www.amazon.pl/s?k=",
  pt: "https://www.wook.pt/pesquisa/",
  sv: "https://www.adlibris.com/se/sok?q=",
};

const books: BookRecommendation[] = [
  // ── Westliche Astrologie ───────────────────────────────────────────────────
  {
    id: "inner-sky",
    title: "The Inner Sky",
    authors: "Steven Forrest",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein gut zugänglicher Klassiker der psychologischen Astrologie. Forrest erklärt Planeten, Zeichen und Häuser als Sprache für Entwicklung, Entscheidungen und Lebensmuster.",
      en: "An accessible classic of psychological astrology. Forrest explains planets, signs and houses as a language for growth, choices and life patterns.",
    },
    systems: ["astrologie"],
    searchQuery: "The Inner Sky Steven Forrest",
  },
  {
    id: "astrology-for-yourself",
    title: "Astrology for Yourself",
    authors: "Demetra George, Douglas Bloch",
    languages: ["EN"],
    level: { de: "Arbeitsbuch", en: "Workbook" },
    description: {
      de: "Ein praxisnahes Arbeitsbuch, das Leser Schritt für Schritt durch die Deutung des eigenen Horoskops führt. Gut als Vertiefung nach einer ersten Hermetia-Lesung.",
      en: "A practical workbook that guides readers step by step through interpreting their own chart. A good follow-up after a first Hermetia reading.",
    },
    systems: ["astrologie"],
    searchQuery: "Astrology for Yourself Demetra George Douglas Bloch",
  },
  {
    id: "hellenistic-astrology-brennan",
    title: "Hellenistic Astrology",
    authors: "Chris Brennan",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Source text" },
    description: {
      de: "Umfassende Einführung in die antike westliche Astrologie: historische Grundlagen, Häuserlogik, Planetenwürden und Schicksalskonzepte. Für Leser, die die methodische Herkunft astrologischer Regeln verstehen wollen.",
      en: "A comprehensive introduction to ancient Western astrology: historical foundations, house logic, planetary dignities and fate concepts. For readers who want to understand the methodical origins of astrological rules.",
    },
    systems: ["hellenistische-astrologie", "astrologie"],
    searchQuery: "Hellenistic Astrology Chris Brennan",
  },
  // ── Human Design ──────────────────────────────────────────────────────────
  {
    id: "understanding-human-design",
    title: "Understanding Human Design",
    authors: "Karen Curry Parker",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine nutzerfreundliche Einführung in Typ, Strategie, Autorität und Energiezentren. Gut geeignet, um Hermetias Human-Design-Ergebnisse besser einzuordnen.",
      en: "A user-friendly introduction to type, strategy, authority and energy centres. Useful for understanding Hermetia's Human Design layer.",
    },
    systems: ["human-design"],
    searchQuery: "Understanding Human Design Karen Curry Parker",
  },
  {
    id: "definitive-human-design",
    title: "The Definitive Book of Human Design",
    authors: "Lynda Bunnell, Ra Uru Hu",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Source text" },
    description: {
      de: "Ein umfangreiches Referenzwerk zu BodyGraph, Typen, Zentren, Kanälen, Toren und Profilen. Eher Nachschlagewerk als leichter Einstieg.",
      en: "An extensive reference on the bodygraph, types, centres, channels, gates and profiles. More reference work than easy introduction.",
    },
    systems: ["human-design"],
    searchQuery: "The Definitive Book of Human Design Lynda Bunnell Ra Uru Hu",
  },
  // ── Gene Keys ─────────────────────────────────────────────────────────────
  {
    id: "gene-keys",
    title: "The Gene Keys",
    authors: "Richard Rudd",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Core text" },
    description: {
      de: "Das zentrale Werk zum Gene-Keys-System mit 64 Archetypen und dem Weg von Schatten über Gabe zu Siddhi. Als externe Vertiefung geeignet, nicht als Textquelle für Hermetia.",
      en: "The central work of the Gene Keys system, with 64 archetypes and the path from shadow through gift to siddhi. Useful as external reading, not as a source text for Hermetia.",
    },
    systems: ["gene-keys"],
    searchQuery: "The Gene Keys Richard Rudd",
  },
  {
    id: "art-of-contemplation",
    title: "The Art of Contemplation",
    authors: "Richard Rudd",
    languages: ["EN"],
    level: { de: "Praxis", en: "Practice" },
    description: {
      de: "Ein kürzeres Praxisbuch zur kontemplativen Methode hinter den Gene Keys. Gibt Lesern einen konkreten Zugang zur Selbstreflexion und eignet sich gut als Einstieg vor dem Hauptwerk.",
      en: "A shorter practice book on the contemplative method behind the Gene Keys. Gives readers a tangible approach to self-reflection — a good entry point before the main work.",
    },
    systems: ["gene-keys"],
    searchQuery: "The Art of Contemplation Richard Rudd",
  },
  // ── Numerologie ───────────────────────────────────────────────────────────
  {
    id: "complete-book-numerology",
    title: "The Complete Book of Numerology",
    authors: "David A. Phillips",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine verständliche Einführung in Geburtsdatum, Namenszahlen und persönliche Muster. Passend zu Lebenszahl, Ausdruckszahl und persönlichen Zyklen.",
      en: "A clear introduction to birth date, name numbers and personal patterns. Fits life path, expression numbers and personal cycles.",
    },
    systems: ["numerologie", "persoenliches-jahr", "lo-shu-grid"],
    searchQuery: "The Complete Book of Numerology David Phillips",
  },
  {
    id: "numerology-divine-triangle",
    title: "Numerology and the Divine Triangle",
    authors: "Faith Javane, Dusty Bunker",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Ein Klassiker, der Numerologie mit Lebenszyklen und Tarot-Archetypen verbindet. Besonders passend für Zahlen-, Zyklus- und Symbolbrücken.",
      en: "A classic connecting numerology with life cycles and Tarot archetypes. Especially useful for number, cycle and symbol bridges.",
    },
    systems: ["numerologie", "persoenliches-jahr", "tarot-geburtskarten"],
    searchQuery: "Numerology and the Divine Triangle Faith Javane Dusty Bunker",
  },
  {
    id: "numerologie-banzhaf",
    title: "Numerologie",
    authors: "Hajo Banzhaf",
    languages: ["DE"],
    level: { de: "Einstieg (DE)", en: "Introduction (DE)" },
    description: {
      de: "Deutschsprachige Einführung in Zahlenqualitäten und persönliche Zahlenbilder. Besonders für DACH-Nutzer, die einen direkten Einstieg in die eigene Sprache suchen.",
      en: "A German-language introduction to number qualities and personal number images. Especially useful for German-speaking readers looking for a direct start.",
    },
    systems: ["numerologie"],
    searchQuery: "Numerologie Hajo Banzhaf",
  },
  // ── BaZi ──────────────────────────────────────────────────────────────────
  {
    id: "four-pillars-raymond-lo",
    title: "Four Pillars of Destiny",
    authors: "Raymond Lo",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Ein bekannter Einstieg in BaZi mit Himmelsstämmen, Erdzweigen, Elementen und Deutungslogik der vier Säulen.",
      en: "A well-known introduction to BaZi, heavenly stems, earthly branches, elements and the interpretation logic of the Four Pillars.",
    },
    systems: ["bazi-vier-saeulen"],
    searchQuery: "Four Pillars of Destiny Raymond Lo",
  },
  {
    id: "four-pillars-jerry-king",
    title: "The Four Pillars of Destiny",
    authors: "Jerry King",
    languages: ["EN"],
    level: { de: "Methodentiefe", en: "Method depth" },
    description: {
      de: "Technischere Vertiefung zu BaZi, Himmelsstämmen, Erdzweigen und den vier Säulen. Geeignet für Leser mit methodischem Interesse.",
      en: "A more technical deepening of BaZi, heavenly stems, earthly branches and the four pillars. Useful for readers interested in method.",
    },
    systems: ["bazi-vier-saeulen"],
    searchQuery: "The Four Pillars of Destiny Jerry King",
  },
  // ── Enneagramm ────────────────────────────────────────────────────────────
  {
    id: "wisdom-enneagram",
    title: "The Wisdom of the Enneagram",
    authors: "Don Richard Riso, Russ Hudson",
    languages: ["EN", "DE", "ES"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein moderner Klassiker zu den neun Enneagramm-Typen, ihren Entwicklungslinien und typischen Wachstumsfeldern.",
      en: "A modern classic on the nine Enneagram types, their development lines and typical growth fields.",
    },
    systems: ["enneagramm"],
    searchQuery: "The Wisdom of the Enneagram Riso Hudson",
  },
  {
    id: "enneagramm-rohr-ebert",
    title: "Das Enneagramm",
    authors: "Richard Rohr, Andreas Ebert",
    languages: ["DE"],
    level: { de: "Einstieg (DE)", en: "Introduction (DE)" },
    description: {
      de: "Deutschsprachiger Klassiker mit spirituell-christlicher Perspektive auf die neun Enneagramm-Muster. In DACH sehr bekannt und leicht zugänglich.",
      en: "A German-language classic on the nine Enneagram patterns with a spiritual-Christian perspective. Widely known and accessible in German-speaking countries.",
    },
    systems: ["enneagramm"],
    searchQuery: "Das Enneagramm Richard Rohr Andreas Ebert",
  },
  {
    id: "complete-enneagram",
    title: "The Complete Enneagram",
    authors: "Beatrice Chestnut",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Vertieft die neun Typen über Instinkte und Subtypen. Gut, wenn Leser das Enneagramm differenzierter als über einen einzelnen Typ verstehen möchten.",
      en: "Deepens the nine types through instincts and subtypes. Helpful when readers want to understand the Enneagram beyond a single type label.",
    },
    systems: ["enneagramm"],
    searchQuery: "The Complete Enneagram Beatrice Chestnut",
  },
  // ── Maya Tzolk'in ─────────────────────────────────────────────────────────
  {
    id: "book-of-destiny-barrios",
    title: "The Book of Destiny",
    authors: "Carlos Barrios",
    languages: ["EN", "ES"],
    level: { de: "Traditionskontext", en: "Traditional context" },
    description: {
      de: "Maya-Zeitkonzepte und spirituelle Deutungen in narrativer Form, vermittelt von einem guatemaltekischen Daykeeper. Als kulturell sensibler Kontext zur Tzolk'in-Tradition geeignet.",
      en: "Maya time concepts and spiritual interpretations in narrative form, conveyed by a Guatemalan Daykeeper. Suitable as a culturally sensitive context for the Tzolk'in tradition.",
    },
    systems: ["maya-tzolkin"],
    searchQuery: "The Book of Destiny Carlos Barrios",
  },
  {
    id: "mayan-calendar-calleman",
    title: "The Mayan Calendar",
    authors: "Carl Johan Calleman",
    languages: ["EN"],
    level: { de: "Kontext", en: "Context" },
    description: {
      de: "Ein populäres Werk zu Maya-Zeitzyklen. Für Hermetia nur als moderner Deutungskontext, nicht als historische Primärquelle, sinnvoll.",
      en: "A popular work on Maya time cycles. For Hermetia it is useful only as modern interpretive context, not as a historical primary source.",
    },
    systems: ["maya-tzolkin"],
    searchQuery: "The Mayan Calendar Carl Johan Calleman",
  },
  // ── Vedische Nakshatra ────────────────────────────────────────────────────
  {
    id: "light-on-life",
    title: "Light on Life",
    authors: "Hart de Fouw, Robert Svoboda",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein gut lesbares Einführungswerk in die vedische Astrologie mit philosophischem und praktischem Kontext. Ideal, um Nakshatras und Jyotish als Hintergrund zu verstehen.",
      en: "A readable introduction to Vedic astrology with philosophical and practical context. Ideal for understanding Nakshatras and Jyotish as a background.",
    },
    systems: ["vedische-nakshatra"],
    searchQuery: "Light on Life Hart de Fouw Robert Svoboda",
  },
  // ── I Ching ───────────────────────────────────────────────────────────────
  {
    id: "i-ging-wilhelm",
    title: "I Ging",
    authors: "Richard Wilhelm",
    languages: ["DE", "EN", "FR", "ES", "IT"],
    level: { de: "Klassiker", en: "Classic" },
    description: {
      de: "Eine der einflussreichsten westlichen Ausgaben des Buchs der Wandlungen. Hilfreich, um die 64 Hexagramme als Reflexionssprache zu verstehen.",
      en: "One of the most influential Western editions of the Book of Changes. Helpful for understanding the 64 hexagrams as a language of reflection.",
    },
    systems: ["i-ching"],
    searchQuery: "I Ging Richard Wilhelm",
  },
  // ── Ayurveda ──────────────────────────────────────────────────────────────
  {
    id: "ayurveda-lad",
    title: "Ayurveda: The Science of Self-Healing",
    authors: "Vasant Lad",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein klassischer Einstieg in Doshas und ayurvedische Grundbegriffe. Bei Hermetia nur als Selbstreflexion, nicht als medizinischer Rat.",
      en: "A classic introduction to doshas and Ayurvedic foundations. In Hermetia this is framed as self-reflection, not medical advice.",
    },
    systems: ["ayurveda-dosha"],
    searchQuery: "Ayurveda The Science of Self-Healing Vasant Lad",
  },
  {
    id: "prakriti-svoboda",
    title: "Prakriti",
    authors: "Robert Svoboda",
    languages: ["EN"],
    level: { de: "Konstitution", en: "Constitution" },
    description: {
      de: "Eine Vertiefung zur ayurvedischen Konstitution. Bei Hermetia nur als Reflexionsliteratur mit klarem Gesundheits-Disclaimer passend.",
      en: "A deepening of Ayurvedic constitution. In Hermetia it fits only as reflective reading with a clear health disclaimer.",
    },
    systems: ["ayurveda-dosha"],
    searchQuery: "Prakriti Robert Svoboda",
  },
  // ── Mondknoten ────────────────────────────────────────────────────────────
  {
    id: "astrology-soul-spiller",
    title: "Astrology for the Soul",
    authors: "Jan Spiller",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein populäres Werk zu Nord- und Südknoten als Entwicklungsachse. Geeignet für Nutzer, die den Seelenweg-Aspekt ihres Profils vertiefen wollen.",
      en: "A popular book on north and south node as a development axis. Suitable for readers who want to deepen the soul-path dimension of their profile.",
    },
    systems: ["mondknoten"],
    searchQuery: "Astrology for the Soul Jan Spiller",
  },
  {
    id: "yesterdays-sky",
    title: "Yesterday's Sky",
    authors: "Steven Forrest",
    languages: ["EN"],
    level: { de: "Evolutionäre Astrologie", en: "Evolutionary astrology" },
    description: {
      de: "Vertieft Mondknoten und karmische Erzählmuster aus evolutionär-astrologischer Perspektive. Passend für Mondknoten und drakonische Karten.",
      en: "Deepens lunar nodes and karmic narrative patterns from an evolutionary astrology perspective. Useful for lunar nodes and draconic charts.",
    },
    systems: ["mondknoten", "drakonisches-horoskop"],
    searchQuery: "Yesterday's Sky Steven Forrest",
  },
  // ── Nine Star Ki ──────────────────────────────────────────────────────────
  {
    id: "nine-star-ki-kushi",
    title: "Nine Star Ki",
    authors: "Michio Kushi",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Einführung in Nine Star Ki als System zyklischer Energien und Charaktertendenzen aus der japanisch-chinesischen Tradition. Verfügbarkeit vorab prüfen.",
      en: "An introduction to Nine Star Ki as a system of cyclical energies and character tendencies from the Japanese-Chinese tradition. Check availability in advance.",
    },
    systems: ["nine-star-ki"],
    searchQuery: "Nine Star Ki Michio Kushi",
  },
  // ── Cards of Destiny ──────────────────────────────────────────────────────
  {
    id: "secret-language-birthdays",
    title: "The Secret Language of Birthdays",
    authors: "Gary Goldschneider, Joost Elffers",
    languages: ["EN", "DE", "FR", "ES", "IT"],
    level: { de: "Geburtstagsbuch", en: "Birthday archetypes" },
    description: {
      de: "Ein populärer Klassiker mit täglichen Geburtstagsarchetypen. Nicht deckungsgleich mit Cards of Destiny, aber als ergänzender Geburtstagskontext geeignet.",
      en: "A popular classic featuring daily birthday archetypes. Not identical to Cards of Destiny, but useful as a complementary birthday context.",
    },
    systems: ["cards-of-destiny"],
    searchQuery: "The Secret Language of Birthdays Gary Goldschneider",
  },
  {
    id: "cards-destiny-camp",
    title: "Cards of Your Destiny",
    authors: "Robert Lee Camp",
    languages: ["EN"],
    level: { de: "Quellenhinweis", en: "Source reference" },
    description: {
      de: "Zentrales populäres Werk zum Cards-of-Destiny-System. Wegen IP-Nähe nur als externe Empfehlung, nicht als Content-Basis für Hermetia.",
      en: "A central popular work on the Cards of Destiny system. Because of IP proximity it is only an external recommendation, not a content source for Hermetia.",
    },
    systems: ["cards-of-destiny"],
    searchQuery: "Cards of Your Destiny Robert Lee Camp",
  },
  // ── Tarot ─────────────────────────────────────────────────────────────────
  {
    id: "seventy-eight-degrees",
    title: "78 Degrees of Wisdom",
    authors: "Rachel Pollack",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Ein moderner Tarot-Klassiker, der psychologische, symbolische und narrative Deutungen verbindet.",
      en: "A modern Tarot classic that combines psychological, symbolic and narrative interpretation.",
    },
    systems: ["tarot-geburtskarten", "oracle-cards"],
    searchQuery: "78 Degrees of Wisdom Rachel Pollack",
  },
  {
    id: "tarot-banzhaf",
    title: "Tarot-Handbuch",
    authors: "Hajo Banzhaf",
    languages: ["DE", "EN"],
    level: { de: "Einstieg (DE)", en: "Introduction (DE)" },
    description: {
      de: "Kompakte Einführung in Tarot-Symbolik, Deutungsmuster und Legesysteme. Besonders passend für deutschsprachige Leser.",
      en: "A compact introduction to Tarot symbolism, interpretation patterns and spreads. Especially useful for German-speaking readers.",
    },
    systems: ["tarot-geburtskarten"],
    searchQuery: "Tarot Handbuch Hajo Banzhaf",
  },
  // ── Sabian Symbols ────────────────────────────────────────────────────────
  {
    id: "astrological-mandala",
    title: "An Astrological Mandala",
    authors: "Dane Rudhyar",
    languages: ["EN"],
    level: { de: "Quellenkontext", en: "Source context" },
    description: {
      de: "Ein bekanntes Werk zu den 360 Sabischen Symbolen. Als externe Lektüre empfohlen; keine Symboltexte in Hermetia übernommen.",
      en: "A well-known work on the 360 Sabian symbols. Recommended as external reading; no symbol texts are adopted into Hermetia.",
    },
    systems: ["sabian-symbols"],
    searchQuery: "An Astrological Mandala Dane Rudhyar",
  },
  // ── Astrokartografie ──────────────────────────────────────────────────────
  {
    id: "where-in-the-world",
    title: "Where in the World",
    authors: "Erin Sullivan",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine Einführung in Ortsastrologie und die Bedeutung von Orten und planetaren Linien. Gute Alternative zu streng markengebundenem Material im Bereich Astrokartografie.",
      en: "An introduction to locational astrology and the significance of places and planetary lines. A good alternative to strictly trademarked material in the field of astrocartography.",
    },
    systems: ["astrokartografie"],
    searchQuery: "Where in the World Erin Sullivan",
  },
  // ── Fixsterne, Chiron, Lilith ─────────────────────────────────────────────
  {
    id: "chiron-healing-journey",
    title: "Chiron and the Healing Journey",
    authors: "Melanie Reinhart",
    languages: ["EN"],
    level: { de: "Vertiefung", en: "Depth" },
    description: {
      de: "Ein bekanntes Werk zu Chiron als Symbol für Verwundung, Heilung und Integration. Gut für Nutzer, die den Wund-Heilungs-Aspekt ihres Profils vertiefen wollen.",
      en: "A well-known work on Chiron as a symbol of wound, healing and integration. Useful for readers who want to explore the wound-healing dimension of their profile.",
    },
    systems: ["fixsterne-chiron-lilith"],
    searchQuery: "Chiron and the Healing Journey Melanie Reinhart",
  },
  {
    id: "brady-fixed-stars",
    title: "Brady's Book of Fixed Stars",
    authors: "Bernadette Brady",
    languages: ["EN"],
    level: { de: "Quellenwerk", en: "Source text" },
    description: {
      de: "Modernes Referenzwerk zu Fixsternen und astrologischer Deutung. Fachlich deutlich belastbarer als oberflächliche Listen.",
      en: "A modern reference work on fixed stars and astrological interpretation. More robust than superficial lists.",
    },
    systems: ["fixsterne-chiron-lilith"],
    searchQuery: "Brady's Book of Fixed Stars Bernadette Brady",
  },
  // ── Big Five / Persönlichkeitspsychologie ──────────────────────────────────
  {
    id: "personality-nettle",
    title: "Personality: What Makes You the Way You Are",
    authors: "Daniel Nettle",
    languages: ["EN"],
    level: { de: "Wissenschaftsnah", en: "Research-based" },
    description: {
      de: "Ein gut lesbarer Einstieg in die Big Five und ihre Bedeutung für Verhalten, Beziehungen und Lebensentscheidungen.",
      en: "A readable introduction to the Big Five and their relevance for behaviour, relationships and life choices.",
    },
    systems: ["big-five", "sixteen-types"],
    searchQuery: "Personality What Makes You the Way You Are Daniel Nettle",
  },
  {
    id: "me-myself-us",
    title: "Me, Myself, and Us",
    authors: "Brian R. Little",
    languages: ["EN"],
    level: { de: "Praxisnah", en: "Practical" },
    description: {
      de: "Verbindet Persönlichkeitsmerkmale mit persönlichen Projekten und Alltag. Gut als menschlich lesbare Ergänzung zu Big-Five-Dimensionen.",
      en: "Connects personality traits with personal projects and everyday life. A readable complement to Big Five dimensions.",
    },
    systems: ["big-five"],
    searchQuery: "Me Myself and Us Brian Little",
  },
  // ── RIASEC / Laufbahninteressen ───────────────────────────────────────────
  {
    id: "making-vocational-choices",
    title: "Making Vocational Choices",
    authors: "John L. Holland",
    languages: ["EN"],
    level: { de: "Grundlagenwerk", en: "Foundational" },
    description: {
      de: "Grundlagenwerk hinter dem RIASEC-Modell beruflicher Interessen. Für Hermetia als Berufungs- und Interessenkontext geeignet, nicht als starre Einstufung.",
      en: "The foundational work behind the RIASEC model of vocational interests. Useful for vocation and interest context, not as rigid categorization.",
    },
    systems: ["riasec"],
    searchQuery: "Making Vocational Choices John Holland",
  },
  // ── Chronotyp ─────────────────────────────────────────────────────────────
  {
    id: "power-of-when",
    title: "The Power of When",
    authors: "Michael J. Breus",
    languages: ["EN"],
    level: { de: "Alltagspraxis", en: "Everyday practice" },
    description: {
      de: "Populärwissenschaftliche Einführung in Chronotypen und Tagesrhythmus. Bei Hermetia passend als Reflexionshilfe, nicht als Schlafdiagnostik.",
      en: "A popular-science introduction to chronotypes and daily rhythm. In Hermetia it fits as reflection support, not sleep diagnostics.",
    },
    systems: ["chronotyp"],
    searchQuery: "The Power of When Michael Breus",
  },
  // ── 16 Types ──────────────────────────────────────────────────────────────
  {
    id: "gifts-differing",
    title: "Gifts Differing",
    authors: "Isabel Briggs Myers, Peter B. Myers",
    languages: ["EN"],
    level: { de: "Kontext", en: "Context" },
    description: {
      de: "Historischer Klassiker zur Myers-Briggs-Typologie. Für Hermetia als Kontext zu kognitiven Präferenzen geeignet — keine Markenbezeichnung wird direkt übernommen.",
      en: "A historical classic on Myers-Briggs typology. Useful in Hermetia as context for cognitive preferences — no trademark designations are adopted directly.",
    },
    systems: ["sixteen-types"],
    searchQuery: "Gifts Differing Isabel Briggs Myers",
  },
  {
    id: "please-understand-me-2",
    title: "Please Understand Me II",
    authors: "David Keirsey",
    languages: ["EN"],
    level: { de: "Typologie-Kontext", en: "Typology context" },
    description: {
      de: "Populäre Typologie nach Temperamenten. Für Hermetia nur als allgemeiner Kontext, nicht als exakte methodische Grundlage.",
      en: "A popular temperament-based typology. For Hermetia it is general context only, not an exact methodological basis.",
    },
    systems: ["sixteen-types"],
    searchQuery: "Please Understand Me II David Keirsey",
  },
  // ── TCM ────────────────────────────────────────────────────────────────────
  {
    id: "web-no-weaver",
    title: "The Web That Has No Weaver",
    authors: "Ted J. Kaptchuk",
    languages: ["EN", "DE", "FR"],
    level: { de: "Hintergrund", en: "Background" },
    description: {
      de: "Ein Klassiker zum Denkmodell der chinesischen Medizin. Für Hermetia nur mit klarem Hinweis: Reflexionsmodell, keine Diagnose.",
      en: "A classic on the thinking model of Chinese medicine. In Hermetia this requires a clear frame: reflection model, not diagnosis.",
    },
    systems: ["tcm-konstitution"],
    searchQuery: "The Web That Has No Weaver Ted Kaptchuk",
  },
  {
    id: "between-heaven-earth",
    title: "Between Heaven and Earth",
    authors: "Harriet Beinfield, Efrem Korngold",
    languages: ["EN"],
    level: { de: "Elemente-Kontext", en: "Element context" },
    description: {
      de: "Lesbare Einführung in chinesische Medizin und Fünf-Elemente-Denken. Für Hermetia nur nicht-diagnostisch und als Selbstbeobachtung passend.",
      en: "A readable introduction to Chinese medicine and Five Element thinking. In Hermetia it fits only non-diagnostically as self-observation.",
    },
    systems: ["tcm-konstitution"],
    searchQuery: "Between Heaven and Earth Harriet Beinfield Efrem Korngold",
  },
  // ── VIA-Stärken ────────────────────────────────────────────────────────────
  {
    id: "power-character-strengths",
    title: "The Power of Character Strengths",
    authors: "Ryan M. Niemiec, Robert E. McGrath",
    languages: ["EN"],
    level: { de: "Praxis", en: "Practice" },
    description: {
      de: "Ein praxisnahes Buch zur Anwendung von Charakterstärken im Alltag. Passend zur ressourcenorientierten Seite von Hermetia.",
      en: "A practical book on applying character strengths in everyday life. A good fit for Hermetia's resource-oriented layer.",
    },
    systems: ["via-staerken"],
    searchQuery: "The Power of Character Strengths Niemiec McGrath",
  },
  {
    id: "character-strengths-virtues",
    title: "Character Strengths and Virtues",
    authors: "Christopher Peterson, Martin E. P. Seligman",
    languages: ["EN"],
    level: { de: "Grundlagenwerk", en: "Foundational" },
    description: {
      de: "Wissenschaftliches Grundlagenwerk zur VIA-Klassifikation. Gut als redaktioneller Anker für die ressourcenorientierte Seite von Hermetia.",
      en: "The research foundation of the VIA classification. A good editorial anchor for Hermetia's resource-oriented layer.",
    },
    systems: ["via-staerken"],
    searchQuery: "Character Strengths and Virtues Peterson Seligman",
  },
  // ── Spiral Dynamics ────────────────────────────────────────────────────────
  {
    id: "spiral-dynamics",
    title: "Spiral Dynamics",
    authors: "Don Edward Beck, Christopher C. Cowan",
    languages: ["EN", "DE"],
    level: { de: "Quellenkontext", en: "Source context" },
    description: {
      de: "Der Ursprungstext zum modernen Spiral-Dynamics-Modell. In Hermetia nur als externer Kontext, nicht als starre Einstufung von Menschen.",
      en: "The source text for the modern Spiral Dynamics model. In Hermetia it is external context, not a rigid ranking of people.",
    },
    systems: ["spiral-dynamics"],
    searchQuery: "Spiral Dynamics Beck Cowan",
  },
  {
    id: "never-ending-quest",
    title: "The Never Ending Quest",
    authors: "Clare W. Graves",
    languages: ["EN"],
    level: { de: "Fachliche Vertiefung", en: "Scholarly depth" },
    description: {
      de: "Originalnaher Zugang zu Graves' Theorie menschlicher Werte- und Bewusstseinsentwicklung. Gut als Kontext hinter Spiral Dynamics.",
      en: "A close-to-source view of Graves' theory of human value and consciousness development. Useful context behind Spiral Dynamics.",
    },
    systems: ["spiral-dynamics"],
    searchQuery: "The Never Ending Quest Clare Graves",
  },
  // ── Kabbala ────────────────────────────────────────────────────────────────
  {
    id: "mystical-qabalah",
    title: "The Mystical Qabalah",
    authors: "Dion Fortune",
    languages: ["EN"],
    level: { de: "Einstieg", en: "Introduction" },
    description: {
      de: "Eine gut lesbare Einführung in den Lebensbaum als psychologisch-spirituelles Symbolsystem der westlichen Esoterik.",
      en: "A readable introduction to the Tree of Life as a psychological-spiritual symbol system in the Western esoteric tradition.",
    },
    systems: ["kabbalah-tree"],
    searchQuery: "The Mystical Qabalah Dion Fortune",
  },
  {
    id: "garden-pomegranates",
    title: "A Garden of Pomegranates",
    authors: "Israel Regardie",
    languages: ["EN"],
    level: { de: "Hermetischer Kontext", en: "Hermetic context" },
    description: {
      de: "Klassisches Werk zur hermetischen Kabbala mit Fokus auf Sephiroth, Pfade und symbolische Korrespondenzen.",
      en: "A classic work on Hermetic Qabalah with a focus on sephiroth, paths and symbolic correspondences.",
    },
    systems: ["kabbalah-tree"],
    searchQuery: "A Garden of Pomegranates Israel Regardie",
  },
  // ── Symbolkunde / Oracle ────────────────────────────────────────────────────
  {
    id: "book-of-symbols",
    title: "The Book of Symbols",
    authors: "ARAS / Taschen",
    languages: ["EN", "DE", "FR", "ES", "IT"],
    level: { de: "Symbolkunde", en: "Symbol reference" },
    description: {
      de: "Ein reiches Kompendium archetypischer Symbole. Sehr passend als Hintergrund für Orakel-, Tarot- und Symbolmodule.",
      en: "A rich compendium of archetypal symbols. Especially useful as background for oracle, Tarot and symbolic modules.",
    },
    systems: ["oracle-cards", "tarot-geburtskarten", "kabbalah-tree"],
    searchQuery: "The Book of Symbols Taschen ARAS",
  },
  // ── Mahabote / burmesischer Kalenderkontext ───────────────────────────────
  {
    id: "folk-elements-burmese-buddhism",
    title: "Folk Elements in Burmese Buddhism",
    authors: "Maung Htin Aung",
    languages: ["EN"],
    level: { de: "Kulturkontext", en: "Cultural context" },
    description: {
      de: "Kulturhistorischer Kontext zu burmesischen Volks- und Kalendersymbolen. Für Hermetia besser als vorsichtiger Hintergrund geeignet als ein modernes Deutungsmanual.",
      en: "Cultural-historical context for Burmese folk and calendar symbols. Better suited to Hermetia as careful background than as a modern reading manual.",
    },
    systems: ["mahabote"],
    searchQuery: "Folk Elements in Burmese Buddhism Maung Htin Aung",
  },
];

const fallbackIds: string[] = [];

// Curated selection spanning all major system families — explicit IDs so array order doesn't matter.
const featuredBookIds = [
  "inner-sky",
  "understanding-human-design",
  "gene-keys",
  "wisdom-enneagram",
  "four-pillars-raymond-lo",
  "complete-book-numerology",
];

function localize<T extends Localized>(value: T, locale: Locale | string) {
  return locale === "de" ? value.de : value.en;
}

export function bookText(book: BookRecommendation, locale: Locale | string) {
  return {
    level: localize(book.level, locale),
    description: localize(book.description, locale),
  };
}

export function getBooksForSystem(slug: string, limit = 3) {
  const exact = books.filter((book) => book.systems.includes(slug));
  if (exact.length >= limit) return exact.slice(0, limit);
  const fallback = books.filter((book) => fallbackIds.includes(book.id) && !exact.some((item) => item.id === book.id));
  return [...exact, ...fallback].slice(0, limit);
}

export function featuredBooks(limit = 6) {
  const featured = featuredBookIds
    .map((id) => books.find((b) => b.id === id))
    .filter((b): b is BookRecommendation => b !== undefined);
  return featured.slice(0, limit);
}

export function bookSearchUrl(book: BookRecommendation, locale: Locale | string) {
  const q = encodeURIComponent(book.searchQuery);
  const host = localeSearchHosts[locale] ?? localeSearchHosts.en;
  return `${host}${q}`;
}

import type { Locale } from "@/i18n/config";

export type FaqItem = { q: string; a: string };
export type ContentSection = { title: string; body: string };
export type ContentGraphic = { src: string; alt: string; caption: string };
export type ContentPage = {
  slug: string;
  navKey: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lead: string;
  answer: string;
  image: string;
  imageAlt: string;
  sections: ContentSection[];
  graphics?: ContentGraphic[];
  faq: FaqItem[];
  ctaTitle: string;
  ctaText: string;
};

type LocalizedPage = { de: ContentPage; en: ContentPage };

const dePages = {
  konvergenz: {
    slug: "konvergenz-engine",
    navKey: "konvergenz",
    title: "Die Konvergenz-Engine: Hermetias eigentliches Herz",
    seoTitle: "Hermetia Konvergenz-Engine — wie 31 Systeme zu Kernthemen werden",
    seoDescription:
      "Die Hermetia Konvergenz-Engine erklärt, wie spirituelle und psychologische Systeme gewichtet, entkoppelt und zu persönlichen Kernthemen verdichtet werden.",
    eyebrow: "Methode · USP",
    lead:
      "Viele Tools zeigen einzelne Systeme. Hermetia verbindet sie. Die Konvergenz-Engine prüft, welche unabhängigen Perspektiven auf dasselbe Thema zeigen und wo daraus echte Kernthemen entstehen.",
    answer:
      "Die Konvergenz-Engine ist eine erklärbare Verdichtungsschicht: Sie nimmt die Theme-Signale aus Astrologie, Human Design, Gene Keys, Numerologie, Fragebögen und weiteren Systemen, gruppiert verwandte Quellen in Familien und erkennt, wo mehrere unabhängige Perspektiven dasselbe Thema bestätigen.",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Ein imaginäres Resonanzinstrument als Bild für die Hermetia Konvergenz-Engine",
    sections: [
      {
        title: "Warum Konvergenz wichtiger ist als Treffer",
        body:
          "Ein einzelnes System kann eine starke Aussage erzeugen, aber es bleibt eine Perspektive. Hermetia fragt deshalb nicht nur: Was sagt ein System? Sondern: Welche Themen tauchen über mehrere unabhängige Systeme hinweg auf? Erst wenn astrologische, numerologische, psychologische oder körperbezogene Perspektiven in dieselbe Richtung zeigen, entsteht ein Kernthema mit höherer Tragfähigkeit. Das verhindert, dass eine einzelne Symbolsprache überinterpretiert wird.",
      },
      {
        title: "Systemfamilien verhindern Doppelzählung",
        body:
          "Viele Systeme teilen dieselbe Rohquelle. Westliche Astrologie, Sabian-Grade, Fixsterne und Astrokartografie nutzen verwandte Himmelsdaten. Human Design und Gene Keys teilen das Tor-Rad. Numerologie, Kabbalah, Tarot-Geburtskarten und Lo-Shu arbeiten aus Datum oder Name. Die Konvergenz-Engine zählt solche Echos nicht naiv mehrfach, sondern bündelt sie in Familien. Dadurch wird ein Thema erst dann wirklich stark, wenn verschiedene Familien zustimmen.",
      },
      {
        title: "Stärke, Konvergenz, Sicherheit und Spannung",
        body:
          "Hermetia trennt bewusst mehrere Größen: Stärke zeigt, wie präsent ein Thema in deinem Profil ist. Konvergenz zeigt, wie viele unabhängige Familien dieses Thema tragen. Sicherheit beschreibt, wie belastbar die Eingaben und Berechnungen sind. Spannungsfelder zeigen, wo zwei Pole gleichzeitig aktiv sind. Aus dieser Trennung entsteht eine Deutung, die nicht nur beeindruckend klingt, sondern erklärbar bleibt.",
      },
      {
        title: "Was du als Nutzer davon siehst",
        body:
          "Du musst die Mathematik dahinter nicht verstehen. In der App erscheint daraus eine klare Sprache: deine Kernthemen, deine leisen Nebenthemen, deine produktiven Spannungen und die Systeme, die diese Aussagen tragen. Auf Wunsch kannst du tiefer schauen und nachvollziehen, warum Hermetia eine Aussage macht. Der Aha-Moment bleibt warm, die Grundlage bleibt überprüfbar.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb1-familien-modell.svg",
        alt: "Systemfamilien-Modell der Hermetia Konvergenz-Engine",
        caption: "Systemfamilien verhindern, dass verwandte Quellen mehrfach als unabhängige Bestätigung gezählt werden.",
      },
      {
        src: "/graphics/convergence/abb3-daempfung-statt-summe.svg",
        alt: "Dämpfung statt naiver Summierung in der Konvergenz-Engine",
        caption: "Hermetia gewichtet ähnliche Signale vorsichtig, statt starke Aussagen durch reine Addition künstlich aufzublähen.",
      },
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Algorithmus-Funnel von Rohsignalen zu Kernthemen",
        caption: "Aus Rohsignalen werden Theme-Signale, daraus Familienbelege und schließlich verständliche Kernthemen.",
      },
    ],
    faq: [
      { q: "Ist die Konvergenz-Engine eine AI?", a: "Nein. Die Konvergenz-Engine ist eine deterministische Rechenschicht. AI formuliert später die Deutung, entscheidet aber nicht, welche Systeme übereinstimmen." },
      { q: "Warum zählt Hermetia Systeme nicht einfach zusammen?", a: "Weil viele Systeme verwandte Datenquellen nutzen. Eine naive Summe würde einzelne Perspektiven übergewichten. Hermetia gruppiert Systeme deshalb in Familien." },
      { q: "Kann ich sehen, woher ein Kernthema kommt?", a: "Ja. Hermetia kann zeigen, welche Systeme und Familien ein Thema tragen. Das ist wichtig für Vertrauen und Erklärbarkeit." },
    ],
    ctaTitle: "Sieh, welche Themen bei dir wirklich zusammenlaufen.",
    ctaText: "Starte dein Profil und entdecke deine ersten Kernthemen kostenlos.",
  },
  seelenkarte: {
    slug: "seelenkarte",
    navKey: "seelenkarte",
    title: "Deine Seelenkarte: ein verständliches Bild deiner inneren Muster",
    seoTitle: "Seelenkarte erstellen — Hermetia verbindet 31 Systeme zu deinem Profil",
    seoDescription:
      "Was eine Seelenkarte ist, wie Hermetia sie berechnet und warum sie mehr ist als ein Geburtshoroskop oder Persönlichkeitstest.",
    eyebrow: "Produkt · Profil",
    lead:
      "Die Seelenkarte ist der erste Aha-Moment in Hermetia: kein Datenblatt, sondern eine visuelle und sprachliche Verdichtung deiner wichtigsten Muster.",
    answer:
      "Eine Seelenkarte ist ein integriertes Persönlichkeitsbild. Hermetia berechnet verschiedene spirituelle und psychologische Systeme, erkennt gemeinsame Themen und übersetzt sie in eine klare, warme Darstellung, die dich nicht festlegt, sondern zur Selbstreflexion einlädt.",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Atmosphärische Datentopografie als visuelle Metapher für die Hermetia Seelenkarte",
    sections: [
      {
        title: "Warum die Seelenkarte kein klassisches Chart ist",
        body:
          "Ein klassisches Chart zeigt oft viele Symbole, Linien und Fachbegriffe. Das kann faszinieren, aber auch überfordern. Die Seelenkarte geht anders vor: Sie nimmt die berechneten Daten ernst, stellt aber zuerst die menschlich verständliche Synthese in den Mittelpunkt. Du siehst nicht nur Planeten, Zahlen oder Typen, sondern die Frage: Was wiederholt sich in mir über mehrere Perspektiven hinweg? Genau deshalb ist die Seelenkarte keine Kopie eines Horoskops, kein Human-Design-Bodygraph und kein Persönlichkeitstest mit hübscher Oberfläche. Sie ist Hermetias eigene Darstellungsform für Konvergenz: ein lesbares Profil, das mehrere Systeme nebeneinander ernst nimmt, sie aber nicht ungefiltert auf dich stapelt.",
      },
      {
        title: "Ebenen statt Informationswand",
        body:
          "Hermetia gliedert dein Profil in Ebenen: Wesenskern, Gaben, Schatten, Beziehung, Berufung, Rhythmus und Seelenweg. Jede Ebene kann für sich gelesen werden. Dadurch entsteht eine geführte Reise. Du musst nicht alles auf einmal verstehen, sondern kannst nach und nach tiefer gehen. Für die Website ist diese Struktur wichtig, weil sie den Unterschied zwischen kostenlosem Einstieg und bezahlter Tiefe erklärt: Der erste Blick zeigt Resonanz, die vollständigen Ebenen machen aus einem Aha-Moment eine langfristig nutzbare Ressource.",
      },
      {
        title: "Welche Daten in die Seelenkarte einfließen",
        body:
          "Die Seelenkarte kann Geburtsdatum, Geburtsort, Geburtszeit, Namen, Selbstauskunft und spätere Profilverfeinerungen nutzen. Nicht jede Angabe ist für jedes System gleich wichtig. Eine genaue Geburtszeit verbessert zeit- und ortsabhängige Systeme, während Fragebögen Alltag, Verhalten und Selbstwahrnehmung erden. Hermetia muss deshalb transparent zeigen, welche Aussagen auf welchen Eingaben beruhen und wo Unsicherheit besteht. Das stärkt Vertrauen, verhindert Überdeutung und unterstützt eine informierte Entscheidung im Onboarding.",
      },
      {
        title: "Von Systemsignalen zu Kernthemen",
        body:
          "Die Seelenkarte entsteht nicht dadurch, dass Hermetia 31 Systeme nacheinander ausgibt. Zuerst werden Rohsignale berechnet, dann in Themen übersetzt, in Systemfamilien gruppiert und über die Konvergenz-Engine gewichtet. So wird sichtbar, ob ein Motiv nur aus einer Datenfamilie kommt oder ob unabhängige Perspektiven dasselbe Thema tragen. Nutzer sollen dadurch verstehen: Eine starke Aussage ist bei Hermetia nicht lauter, weil sie dramatisch klingt, sondern belastbarer, weil sie nachvollziehbar hergeleitet wird.",
      },
      {
        title: "Was kostenlos sichtbar wird",
        body:
          "Der kostenlose Profilstart soll genug zeigen, um eine echte Entscheidung zu ermöglichen: erste Kernthemen, eine verständliche Grundresonanz und ein Gefühl dafür, ob Sprache, Ton und Datenschutz stimmig sind. Dieser Bereich darf nicht künstlich leer wirken. Er soll neugierig machen, aber fair bleiben. Wer nach dem kostenlosen Einstieg merkt, dass Hermetia nicht passt, hat trotzdem Orientierung gewonnen. Wer Resonanz spürt, versteht klarer, warum Premium-Tiefe sinnvoll werden kann.",
      },
      {
        title: "Was Premium an der Seelenkarte vertieft",
        body:
          "Bezahlte Modelle werden dort plausibel, wo Hermetia mehr als einen ersten Eindruck liefert: vollständige Ebenen, längere Deutungen, Profilbuch, Journaling, Tagesimpulse, Beziehungsprofile, Rückblicke und Profilverfeinerung. Die Seelenkarte ist damit nicht nur ein Ergebnis, sondern der Ausgangspunkt einer Arbeitsumgebung. Gute Conversion entsteht hier nicht durch Druck, sondern durch nachvollziehbaren Mehrwert: mehr Kontext, mehr Zeitbezug, mehr Selbstbeobachtung und mehr Möglichkeiten, die eigenen Themen im Alltag zu prüfen.",
      },
      {
        title: "Der persönliche Nutzen",
        body:
          "Die Seelenkarte soll dich neugierig machen, ohne dich zu vereinnahmen. Sie kann Worte für Muster geben, die du schon lange spürst, aber schwer greifen konntest. Gleichzeitig bleibt sie offen: Wenn etwas nicht resoniert, ist das ein wertvoller Hinweis. Hermetia ist Reflexion, keine Festlegung. Der Nutzen liegt nicht darin, eine neue Identität zu behaupten, sondern bessere Fragen zu ermöglichen: Wo erkenne ich mich? Wo widerspreche ich? Was möchte ich beobachten? Was verändert sich, wenn ich dieses Muster nicht bekämpfe, sondern verstehe?",
      },
      {
        title: "Rechtliche und ethische Grenzen",
        body:
          "Die Seelenkarte darf keine Diagnose, keine Therapie, keine medizinische Empfehlung und keine sichere Vorhersage sein. Auch spirituelle Sprache muss sorgfältig bleiben, weil persönliche Profile sensible Rückschlüsse auf Identität, Weltbild und Beziehungsmuster erlauben. Hermetia verwendet deshalb eigene redaktionelle Texte, keine übernommenen proprietären Deutungspassagen fremder Systeme, und rahmt jede Aussage als Reflexionsangebot. Diese Grenze ist nicht nur rechtlicher Schutz, sondern Teil des Markenvertrauens.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb1-familien-modell.svg",
        alt: "Hermetia Systemfamilien als Grundlage der Seelenkarte",
        caption: "Die Seelenkarte bündelt verwandte Systeme in Familien, damit ähnliche Rohquellen nicht fälschlich als unabhängige Bestätigung wirken.",
      },
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Algorithmus-Funnel von Daten zur lesbaren Seelenkarte",
        caption: "Aus Eingaben, Rohsignalen und Familienbelegen entsteht eine verständliche Seelenkarte mit Kernthemen, Grenzen und Premium-Tiefe.",
      },
    ],
    faq: [
      { q: "Ist die Seelenkarte kostenlos?", a: "Der Einstieg ist kostenlos. Du siehst deine Seelenkarte und erste Kernthemen ohne Kreditkarte. Weitere Ebenen können über ein bezahltes Modell freigeschaltet werden." },
      { q: "Brauche ich eine genaue Geburtszeit?", a: "Eine genaue Geburtszeit verbessert manche Systeme. Hermetia funktioniert aber auch mit grober Tageszeit und kennzeichnet, was dadurch weniger sicher ist." },
      { q: "Ist das eine Diagnose?", a: "Nein. Die Seelenkarte ist Inspiration zur Selbstreflexion und keine medizinische, psychologische oder therapeutische Beratung." },
      { q: "Warum nutzt Hermetia mehrere Systeme für eine Seelenkarte?", a: "Weil ein einzelnes System nur eine Perspektive liefert. Hermetia prüft, welche Themen über mehrere unabhängige Systemfamilien hinweg auftauchen und dadurch als Kernthemen tragfähiger werden." },
      { q: "Was unterscheidet die Seelenkarte von einem Persönlichkeitstest?", a: "Ein Persönlichkeitstest basiert meist auf Selbstauskunft. Die Seelenkarte verbindet Selbstauskunft, berechnete Daten, Systemfamilien und Konvergenz zu einem mehrschichtigen Reflexionsprofil." },
      { q: "Wann lohnt sich Premium für die Seelenkarte?", a: "Premium lohnt sich, wenn du nicht nur erste Kernthemen sehen möchtest, sondern vollständige Ebenen, Profilbuch, Journaling, Tagesimpulse, Beziehungsauswertungen oder langfristige Reflexion nutzen willst." },
      { q: "Verwendet Hermetia geschützte Texte anderer Systeme?", a: "Nein. Hermetia formuliert eigene redaktionelle Deutungstexte und übernimmt keine proprietären Passagen, Tabellen oder Originalformulierungen fremder Anbieter." },
    ],
    ctaTitle: "Beginne mit deiner eigenen Seelenkarte.",
    ctaText: "In wenigen Minuten siehst du kostenlos, welche ersten Themen Hermetia bei dir erkennt.",
  },
  tagesimpulse: {
    slug: "tagesimpulse",
    navKey: "tagesimpulse",
    title: "Tagesimpulse: persönliche Reflexion statt lautes Tageshoroskop",
    seoTitle: "Persönliche Tagesimpulse — Hermetia verbindet Profil, Timing und Journaling",
    seoDescription:
      "Wie Hermetia aus deinem Profil und Tagesdaten ruhige Impulse, Journaling-Fragen und Monatsrückblicke erstellt.",
    eyebrow: "Alltag · Begleitung",
    lead:
      "Hermetia begleitet nicht mit Druck, sondern mit einem ruhigen Fokus: ein Satz, eine Frage, ein kleiner Blick auf das, was heute in dir anklingen könnte.",
    answer:
      "Ein Hermetia-Tagesimpuls ist kein allgemeines Horoskop. Er verbindet dein dauerhaftes Profil mit aktuellen Zyklen und formuliert daraus einen reflektierenden Tagesfokus. Der Impuls soll nicht vorhersagen, sondern Aufmerksamkeit bündeln.",
    image: "/images/hermetia/dawn-clock-of-becoming.png",
    imageAlt: "Ein abstrakter Tagesmechanismus als Symbol für Hermetia Tagesimpulse",
    sections: [
      {
        title: "Der Unterschied zum Tageshoroskop",
        body:
          "Ein Tageshoroskop spricht meist für ein Sternzeichen und damit für sehr viele Menschen gleichzeitig. Hermetia arbeitet enger: Dein persönliches Profil bleibt die Grundlage, Tagesdaten färben nur den Fokus. Dadurch entsteht kein lauter Anspruch, sondern ein persönlicher Reflexionsrahmen. Der Impuls soll nicht behaupten, was passieren wird. Er fragt, welche Qualität heute zu deinen Kernthemen passen könnte und welche Beobachtung daraus sinnvoll wird.",
      },
      {
        title: "Wie ein persönlicher Tagesimpuls entsteht",
        body:
          "Ein Tagesimpuls kombiniert stabile Profilthemen mit zeitbezogenen Signalen. Stabil sind etwa Kernthemen, wiederkehrende Spannungsfelder, bevorzugte Energieformen oder persönliche Reflexionsmotive. Zeitbezogene Signale können aus Tageszyklen, Transiten, numerologischen Rhythmen oder anderen vorsichtig gewichteten Systemen kommen. Hermetia macht daraus keinen Befehl, sondern eine kurze, verständliche Fokussierung: ein Thema, eine Einordnung, eine Frage.",
      },
      {
        title: "Beispielhafte Struktur eines Impulses",
        body:
          "Ein guter Impuls braucht Klarheit. Sinnvoll ist eine wiedererkennbare Struktur: zuerst ein kurzer Fokus, dann die Verbindung zu deinem Profil, anschließend eine Alltagssituation, in der das Thema auftauchen könnte, und zum Schluss eine Journaling-Frage. So bleibt der Impuls leicht genug für den Morgen, aber tief genug, um mehr zu sein als ein schöner Satz. Diese Struktur unterstützt auch AEO und GEO, weil sie Fragen direkt beantwortet und Begriffe konsistent verwendet.",
      },
      {
        title: "Journaling als zweite Hälfte",
        body:
          "Der Impuls wird erst wertvoll, wenn du ihn mit deinem Alltag verbindest. Deshalb gehören Journaling-Fragen, Feedback und Monatsrückblicke zum Konzept. Hermetia fragt nicht nur „Was sagt das System?“, sondern auch: Hat das heute für dich gestimmt? Was hast du bemerkt? Was wiederholt sich? Genau hier entsteht die Brücke zur bezahlten Tiefe: Wer regelmäßig reflektiert, profitiert von Verlauf, Rückblicken, Profilverfeinerung und einem System, das nicht nur sendet, sondern Resonanz sammelt.",
      },
      {
        title: "Rhythmus statt Dauerbeschallung",
        body:
          "Tagesimpulse sollten nicht wie ein weiterer Feed funktionieren. Hermetia ist stärker, wenn der Nutzer Frequenz und Tiefe bewusst wählen kann: täglich, mehrmals pro Woche, nur zu bestimmten Themen oder pausiert. Diese Produktlogik schützt vor FOMO und macht die Begleitung wertvoller. Ein guter Impuls darf auch leise sein. Er muss nicht jeden Tag dramatisch wirken, sondern soll Aufmerksamkeit so bündeln, dass sie im Alltag tragbar bleibt.",
      },
      {
        title: "Warum Tagesimpulse Premium-Wert schaffen",
        body:
          "Der kostenlose Profilstart beantwortet die Frage: Erkenne ich mich in Hermetia wieder? Tagesimpulse beantworten eine andere Frage: Kann Hermetia mich über Zeit sinnvoll begleiten? Genau deshalb sind sie ein starker Grund für ein bezahltes Modell. Nicht weil sie geheimnisvolle Vorhersagen liefern, sondern weil sie Profil, Timing, Journaling und Rückblick zu einer wiederkehrenden Praxis verbinden.",
      },
      {
        title: "Bewusst anti-süchtig",
        body:
          "Hermetia soll keine FOMO-Schleife erzeugen. Tagesimpulse sind ruhig, pausierbar und nicht als Pflicht gedacht. Die App soll Begleitung sein, kein weiterer Strom aus Push-Reizen. Diese Haltung ist Teil der Produktethik. Marketingtexte dürfen deshalb Neugier erzeugen, aber keine Angst: kein verpasster Schicksalstag, keine Warnung vor falschen Entscheidungen, kein Druck, jeden Impuls zu lesen. Conversion entsteht durch Vertrauen, nicht durch Abhängigkeit.",
      },
      {
        title: "Rechtliche Grenzen und sensible Sprache",
        body:
          "Ein Tagesimpuls ist keine medizinische, therapeutische, rechtliche oder finanzielle Empfehlung. Er darf keine sichere Zukunft behaupten und keine Entscheidung für den Nutzer treffen. Hermetia formuliert deshalb in eigener Sprache, benennt Unsicherheit und bleibt bei Reflexion. Gerade bei täglichen Inhalten ist diese Grenze wichtig, weil Wiederholung schnell Autorität erzeugen kann. Die App soll eine Stimme neben der eigenen bleiben, nicht die eigene Stimme ersetzen.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb8-deine-kernthemen.svg",
        alt: "Kernthemen als Grundlage persönlicher Tagesimpulse",
        caption: "Tagesimpulse starten nicht beim Sternzeichen, sondern bei den Kernthemen deines persönlichen Profils.",
      },
      {
        src: "/graphics/convergence/abb9-deine-innere-spannung.svg",
        alt: "Innere Spannung als Reflexionsfeld eines Tagesimpulses",
        caption: "Ein guter Impuls kann Spannungen sichtbar machen, ohne daraus eine Diagnose oder Vorhersage abzuleiten.",
      },
    ],
    faq: [
      { q: "Bekomme ich jeden Tag einen Impuls?", a: "Je nach Einstellung ja. Hermetia ist aber bewusst so gedacht, dass du Frequenz und Pausen selbst bestimmen kannst." },
      { q: "Kann ein Tagesimpuls falsch sein?", a: "Ja, und das ist okay. Der Impuls ist eine Einladung zur Reflexion, kein Urteil. Dein Feedback hilft, wiederkehrende Themen besser einzuordnen." },
      { q: "Sind Tagesimpulse medizinische Empfehlungen?", a: "Nein. Sie sind keine medizinische, psychologische oder therapeutische Beratung." },
      { q: "Was unterscheidet Hermetia-Tagesimpulse von Tageshoroskopen?", a: "Hermetia beginnt beim persönlichen Profil und nutzt Tagesdaten nur als Färbung. Ein Tageshoroskop spricht meist sehr viele Menschen über ein Sternzeichen an." },
      { q: "Warum sind Tagesimpulse ein Premium-Feature?", a: "Weil sie erst über Zeit ihren vollen Wert entfalten: Verlauf, Journaling, Rückblicke, Profilbezug und feinere Impulse brauchen eine fortlaufende Begleitung." },
      { q: "Kann ich Tagesimpulse pausieren?", a: "Ja. Das Produktprinzip ist, dass Tagesimpulse eine freiwillige Begleitung bleiben. Sie sollen keine Pflicht, keine FOMO und keinen Druck erzeugen." },
      { q: "Treffen Tagesimpulse Entscheidungen für mich?", a: "Nein. Sie bieten Fragen und Fokus an. Entscheidungen, professionelle Beratung und Verantwortung bleiben beim Nutzer." },
    ],
    ctaTitle: "Erlebe, wie dein Profil den Tag färbt.",
    ctaText: "Starte kostenlos und öffne deine ersten persönlichen Impulse.",
  },
  journaling: {
    slug: "journaling",
    navKey: "journaling",
    title: "Journaling mit Hermetia: aus Impulsen wird Selbsterkenntnis",
    seoTitle: "Journaling mit Hermetia - Profil, Tagesimpulse und Reflexion verbinden",
    seoDescription:
      "Wie Hermetia Journaling nutzt, um Tagesimpulse, Seelenkarte, Feedback und langfristige Muster zu einer ruhigen Reflexionspraxis zu verbinden.",
    eyebrow: "Alltag · Reflexion",
    lead:
      "Journaling ist bei Hermetia nicht einfach ein leeres Textfeld. Es ist die Brücke zwischen deinem Profil, deinen Tagesimpulsen und dem, was du wirklich in deinem Alltag bemerkst.",
    answer:
      "Hermetia-Journaling verbindet persönliche Impulse mit eigenen Notizen, Feedback und wiederkehrenden Themen. Die App soll nicht behaupten, dich besser zu kennen als du selbst, sondern dir helfen, Resonanz, Zweifel, Muster und Entwicklung über Zeit bewusster zu sehen.",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Eine ruhige Bibliothek innerer Notizen als Bild für Hermetia Journaling",
    sections: [
      {
        title: "Warum Journaling die Seelenkarte erdet",
        body:
          "Eine Seelenkarte kann berühren, aber sie wird erst wertvoll, wenn du sie mit deinem gelebten Alltag verbindest. Journaling ist diese Erdung. Du kannst festhalten, welche Aussagen resonieren, welche Fragen offen bleiben und welche Muster sich wiederholen. Dadurch bleibt Hermetia keine Einmal-Auswertung, sondern wird zu einem lernenden Reflexionsraum. Wichtig ist: Deine Notizen sind keine Beweise gegen dich und keine Diagnosedaten. Sie sind deine eigene Sprache für das, was du beobachtest.",
      },
      {
        title: "Vom Tagesimpuls zur eigenen Beobachtung",
        body:
          "Ein Tagesimpuls gibt einen Fokus. Das Journal fragt danach, was du daraus machst. Hat der Impuls etwas sichtbar gemacht? Gab es eine Situation, in der ein Kernthema spürbar wurde? War der Satz unpassend, zu stark oder überraschend genau? Diese Rückmeldung ist wichtig, weil sie die Deutung menschlicher macht. Hermetia soll nicht nur senden, sondern dir Raum geben, zurückzusprechen. So entsteht aus einem täglichen Hinweis eine persönliche Spur.",
      },
      {
        title: "Muster über Wochen und Monate erkennen",
        body:
          "Ein einzelner Eintrag ist oft nur ein Moment. Spannend wird es, wenn sich Themen über Wochen sammeln: Rückzug, Sichtbarkeit, Entscheidung, Beziehung, Kreativität, Überforderung oder Ruhe. Hermetia kann diese Wiederholungen als Rückblick sichtbar machen, ohne daraus starre Wahrheiten zu bauen. Gerade hier entsteht Premium-Tiefe: nicht mehr Text um des Textes willen, sondern eine klarere Sicht auf die eigene Entwicklung.",
      },
      {
        title: "Privatsphäre und sensible Notizen",
        body:
          "Journaling kann sehr persönlich sein. Deshalb muss die Website klar erklären, dass solche Inhalte sensibel behandelt werden. Nutzer sollen verstehen, was gespeichert wird, wie Löschung und Export gedacht sind und welche Rolle AI bei Zusammenfassungen spielt. Hermetia darf aus Journaltexten keine medizinischen, therapeutischen oder rechtlichen Aussagen ableiten. Die Funktion bleibt ein Reflexionswerkzeug, kein Ersatz für professionelle Beratung.",
      },
      {
        title: "Kostenlos starten, bezahlte Tiefe verstehen",
        body:
          "Der kostenlose Einstieg kann erste Impulse und einfache Reflexion ermöglichen. Bezahlte Modelle werden sinnvoll, wenn Nutzer Verlauf, Rückblicke, mehr Ebenen, tiefere Fragen und langfristige Muster nutzen möchten. Genau deshalb gehört Journaling auf die Marketing-Website: Es erklärt, warum Hermetia nicht nur ein Profilrechner ist, sondern eine fortlaufende Begleitung, die sich mit der Zeit entfaltet.",
      },
    ],
    faq: [
      { q: "Ist Hermetia-Journaling ein normales Tagebuch?", a: "Es kann wie ein Tagebuch genutzt werden, ist aber stärker mit Profil, Tagesimpulsen und wiederkehrenden Themen verbunden. Der Fokus liegt auf Selbstreflexion, nicht auf Leistung oder perfekter Dokumentation." },
      { q: "Liest die AI meine Journaltexte?", a: "AI-gestützte Zusammenfassungen dürfen nur transparent und zweckgebunden erfolgen. Nutzer müssen verstehen, wann AI beteiligt ist und welche Inhalte dafür verwendet werden." },
      { q: "Kann ich Journal-Einträge löschen?", a: "Ja. Das Produktziel ist, dass persönliche Inhalte exportierbar und löschbar sind. Die Marketing-Website beschreibt diese Erwartung bewusst als Teil der Datenschutzlinie." },
      { q: "Ist Journaling Therapie?", a: "Nein. Hermetia-Journaling ist ein Reflexionswerkzeug und ersetzt keine medizinische, psychologische oder therapeutische Beratung." },
    ],
    ctaTitle: "Starte mit deiner Seelenkarte und halte fest, was wirklich resoniert.",
    ctaText: "Das Journal wird wertvoll, sobald dein eigenes Profil die ersten Fragen öffnet.",
  },
  profilBuch: {
    slug: "vollprofil-buch",
    navKey: "profilBuch",
    title: "Das Vollprofil-Buch: deine Seelenkarte als tiefe, lesbare Reise",
    seoTitle: "Hermetia Vollprofil-Buch - Seelenkarte, Systeme und Premium-Tiefe",
    seoDescription:
      "Was das Hermetia Vollprofil-Buch enthält, wie es aus Systemen, Konvergenz und AI-Deutung entsteht und wann sich bezahlte Premium-Tiefe lohnt.",
    eyebrow: "Premium · Tiefenprofil",
    lead:
      "Das Vollprofil-Buch ist für Menschen gedacht, die nicht nur einen schnellen Aha-Moment wollen, sondern ihre Seelenkarte in Ruhe lesen, wiederlesen und als Entwicklungsbegleiter nutzen möchten.",
    answer:
      "Das Vollprofil-Buch bündelt die wichtigsten Ebenen deiner Hermetia-Seelenkarte in einer langen, strukturierten Auswertung. Es verbindet berechnete Systeme, Konvergenz, fiktive Beispielkapitel und AI-gestützte Formulierung zu einem lesbaren Profil, bleibt aber klar als Reflexionsangebot gerahmt.",
    image: "/images/hermetia/alchemical-listening-room.png",
    imageAlt: "Ein alchemistischer Leseraum als Bild für das Hermetia Vollprofil-Buch",
    sections: [
      {
        title: "Warum ein Buch mehr ist als eine Ergebnisansicht",
        body:
          "Eine Ergebnisansicht ist schnell, ein Buch erlaubt Tiefe. Das Hermetia-Vollprofil soll deine wichtigsten Themen nicht nur anzeigen, sondern in eine lesbare Dramaturgie bringen: Wesenskern, Gaben, Schatten, Beziehungsmuster, Berufung, Rhythmus, Seelenweg und praktische Reflexionsfragen. Dadurch entsteht ein Dokument, das man nicht hektisch konsumiert, sondern in Etappen liest. Genau hier liegt ein zentraler Premium-Wert: Das Buch verwandelt einen ersten Profilmoment in eine Ressource, zu der Nutzer zurückkehren können.",
      },
      {
        title: "Wie das Vollprofil aus der Konvergenz entsteht",
        body:
          "Das Buch sollte nicht einfach alle Systeme nacheinander abdrucken. Hermetia verdichtet zuerst, welche Themen wirklich tragen, welche nur Nebenmotive sind und welche Spannungsfelder sich zeigen. Erst danach entsteht die Kapitelstruktur. Dadurch wird das Profil ruhiger und relevanter: Nutzer lesen nicht eine Sammlung einzelner Deutungsschnipsel, sondern eine begründete Synthese ihrer Seelenkarte. Jedes Kapitel sollte zeigen, welche Systemfamilien ein Motiv stützen und wo Hermetia bewusst vorsichtig bleibt.",
      },
      {
        title: "Kapitel, die Nutzer wirklich erwarten",
        body:
          "Ein gutes Vollprofil braucht Orientierung. Sinnvoll sind Kapitel zu Kernthemen, Gaben, Schatten und Wachstum, Entscheidung und Energie, Beziehung, Arbeit und Berufung, Rhythmus, Timing, persönliche Fragen und nächste Schritte. Jedes Kapitel sollte erklären, welche Systeme die Aussage tragen, wo Unsicherheit besteht und wie der Nutzer damit reflektieren kann. Das macht die Auswertung wertvoller und rechtlich sauberer als absolute Behauptungen. Besonders wichtig sind Kapitelzusammenfassungen, damit Nutzer nach dem Lesen nicht verloren gehen, sondern konkrete Reflexionsfragen behalten.",
      },
      {
        title: "Leseerlebnis, Export und Wiederlesen",
        body:
          "Das Vollprofil-Buch sollte sich nicht wie ein technischer Report anfühlen. Es braucht Kapitel, Zwischenübersichten, kleine Reflexionsfragen, visuelle Marker und einen ruhigen Lesefluss. Gleichzeitig ist Export ein Vertrauenssignal: Wer für Tiefe bezahlt, möchte Inhalte später wiederfinden, speichern oder in Etappen lesen können. Ob als PDF, buchartiger Lesemodus oder exportierbare Zusammenfassung: Der Wert liegt darin, dass die Seelenkarte dauerhaft zugänglich und wiederlesbar wird.",
      },
      {
        title: "Beispielkapitel nur fiktiv und transparent",
        body:
          "Für Marketing und Produktdemo sind Beispielkapitel sinnvoll, aber sie müssen klar fiktiv sein. Hermetia sollte keine echten Nutzerprofile ohne Einwilligung zeigen und keine geschützten Deutungstexte anderer Systeme übernehmen. Gute Beispiele zeigen Struktur, Ton und Grenzen: So könnte ein Kapitel klingen, so wird ein Kernthema erklärt, so bleibt eine Aussage offen genug für Selbstreflexion. Das schützt rechtlich und macht das Produkt greifbarer.",
      },
      {
        title: "Wie das Buch mit Journaling und Companion zusammenhängt",
        body:
          "Das Vollprofil-Buch ist nicht das Ende der Reise. Es kann die Grundlage für Journaling, Tagesimpulse und den Companion werden. Nutzer lesen ein Kapitel, markieren Resonanz, schreiben eigene Beobachtungen und stellen später Fragen an den Companion. Dadurch entsteht ein Ökosystem: Das Buch gibt Tiefe, Journaling erdet sie im Alltag, Tagesimpulse halten Themen lebendig und der Companion erklärt Zusammenhänge bei Bedarf.",
      },
      {
        title: "Bezahlte Tiefe ohne Druck",
        body:
          "Das Vollprofil-Buch ist ein natürlicher Grund für ein bezahltes Modell, aber es darf nicht mit Angst verkauft werden. Die Website sollte klar machen: Der kostenlose Einstieg zeigt Resonanz. Das Buch lohnt sich, wenn jemand tiefer lesen, Zusammenhänge verstehen und seine Themen langfristig begleiten möchte. Keine künstliche Dringlichkeit, keine Schicksalsversprechen, keine Heilsprache. Der Kaufgrund ist Tiefe, nicht Druck. Genau diese Fairness macht die Conversion stärker, weil Nutzer den Wert nachvollziehen können.",
      },
      {
        title: "Rechtliche und redaktionelle Leitplanken",
        body:
          "Das Vollprofil darf keine fremden Deutungstexte, keine geschützten Fragebogenitems und keine therapeutischen Versprechen enthalten. AI kann helfen, berechnete und kuratierte Informationen lesbar zu formulieren, darf aber nicht als unfehlbare Autorität auftreten. Beispiele müssen fiktiv sein. Aussagen über Gesundheit, Beziehung und psychische Belastung brauchen vorsichtige Sprache und klare Grenzen. Jede Premium-Seite muss deshalb erklären: mehr Text bedeutet mehr Reflexion, nicht mehr Wahrheit über einen Menschen.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Algorithmus-Funnel als Grundlage des Hermetia Vollprofil-Buchs",
        caption: "Das Vollprofil-Buch entsteht erst nach Berechnung, Themenübersetzung, Systemfamilien und Konvergenz. Es ist keine lose Sammlung einzelner Systemtexte.",
      },
      {
        src: "/graphics/convergence/abb10-verankert-und-fein.svg",
        alt: "Verankert und fein als Prinzip für lesbare Premium-Tiefe",
        caption: "Gute Premium-Tiefe bleibt zugleich verankert in Daten und fein genug, um persönliche Reflexion statt starre Festlegung zu ermöglichen.",
      },
    ],
    faq: [
      { q: "Ist das Vollprofil-Buch ein PDF?", a: "Das Produktziel kann ein exportierbares Dokument oder ein buchartiger Lesemodus sein. Wichtig ist die strukturierte, wiederlesbare Tiefe, nicht das Dateiformat allein." },
      { q: "Ist das Buch im kostenlosen Einstieg enthalten?", a: "Der kostenlose Einstieg zeigt die erste Seelenkarte und Kernthemen. Das ausführliche Vollprofil-Buch ist als Premium-Tiefe gedacht." },
      { q: "Schreibt AI das ganze Profil frei?", a: "Nein. AI soll berechnete, kuratierte und konvergenzgeprüfte Informationen lesbar formulieren. Die Grundlage bleibt die Profilberechnung." },
      { q: "Kann ich das Vollprofil als Wahrheit über mich lesen?", a: "Nein. Das Vollprofil ist ein Reflexionsangebot. Es kann Sprache für Muster geben, ersetzt aber keine eigene Entscheidung und keine professionelle Beratung." },
      { q: "Welche Kapitel sollte ein Vollprofil enthalten?", a: "Sinnvoll sind Kernthemen, Gaben, Schatten, Beziehung, Arbeit, Berufung, Rhythmus, Timing, Reflexionsfragen und nächste Schritte. Die genaue Struktur sollte aus der Konvergenz der Seelenkarte entstehen." },
      { q: "Kann ich das Vollprofil später wieder öffnen oder exportieren?", a: "Das Produktziel ist ein wiederlesbarer, gut strukturierter Premium-Inhalt. Export oder buchartiger Lesemodus sind wichtige Vertrauens- und Nutzensignale." },
      { q: "Warum ist das Vollprofil Premium und nicht komplett kostenlos?", a: "Weil lange, strukturierte, geprüfte Profiltexte, AI-Formulierung, Sicherheit, Exportlogik und redaktionelle Qualität laufenden Aufwand erzeugen. Der kostenlose Einstieg zeigt zuerst Resonanz." },
      { q: "Darf Hermetia Beispielprofile zeigen?", a: "Ja, wenn sie fiktiv, klar gekennzeichnet und rechtlich sauber formuliert sind. Echte Nutzerprofile brauchen ausdrückliche Einwilligung." },
    ],
    ctaTitle: "Erst die Seelenkarte öffnen, dann entscheiden, ob du Tiefe willst.",
    ctaText: "Starte kostenlos und prüfe, ob dein Profil genug Resonanz für das Vollprofil-Buch erzeugt.",
  },
  companion: {
    slug: "companion",
    navKey: "companion",
    title: "Hermetia Companion: ein ruhiger AI-Begleiter für deine Seelenkarte",
    seoTitle: "Hermetia Companion - AI-Begleiter für Profil, Fragen und Reflexion",
    seoDescription:
      "Wie der Hermetia Companion persönliche Fragen zur Seelenkarte beantwortet, Tagesimpulse vertieft und dabei klare Grenzen für AI, Datenschutz und Beratung einhält.",
    eyebrow: "AI · Begleitung",
    lead:
      "Der Companion soll kein Orakel sein, das dir sagt, was du tun musst. Er ist als ruhiger Gesprächsraum gedacht, der deine Seelenkarte erklärt, gute Fragen stellt und Grenzen respektiert.",
    answer:
      "Der Hermetia Companion ist ein AI-gestützter Begleiter, der berechnete Profilinformationen, Kernthemen und freigegebene Reflexionen in verständliche Antworten übersetzt. Er ersetzt keine Beratung, trifft keine Entscheidungen und soll immer sichtbar machen, worauf eine Antwort basiert.",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Ein Resonanzinstrument als Bild für den Hermetia Companion",
    sections: [
      {
        title: "Was ein Companion leisten soll",
        body:
          "Viele Nutzer verstehen ihr Profil nicht in einem einzigen Durchgang. Sie lesen einen Satz, spüren Resonanz und haben danach Fragen. Der Companion soll genau dort helfen: Was bedeutet dieses Kernthema? Warum taucht es in mehreren Systemen auf? Welche Journaling-Frage passt dazu? Die Antwort soll warm und verständlich sein, aber nicht so tun, als hätte die AI eine höhere Wahrheit über den Menschen. Der Companion ist damit kein Ersatz für das eigene Spüren, sondern ein Übersetzer zwischen Profil, Methode und Alltag.",
      },
      {
        title: "Berechnungsbasiert statt freier Spekulation",
        body:
          "Der Companion darf nicht einfach mystisch improvisieren. Seine Stärke entsteht, wenn er auf berechneten Profilfakten, Konvergenzsignalen, freigegebenen Notizen und klaren Produktgrenzen arbeitet. Nutzer sollen nachvollziehen können, ob eine Antwort aus Astrologie, Human Design, Numerologie, Fragebogenwerten, Journaling oder allgemeinen Reflexionsfragen abgeleitet wurde. Dadurch bleibt das Erlebnis persönlicher, ohne beliebig zu werden. Die AI formuliert, verbindet und erklärt, aber die Profilgrundlage entsteht aus der Hermetia-Berechnung.",
      },
      {
        title: "Antwortlogik: Quelle, Kontext, Frage",
        body:
          "Eine gute Companion-Antwort sollte nicht nur schön klingen, sondern ihre Grundlage zeigen. Sinnvoll ist eine klare Antwortlogik: Welche Profilquelle ist relevant? In welchem Kontext fragt der Nutzer? Welche Unsicherheit bleibt? Welche nächste Reflexionsfrage ist hilfreich? Diese Struktur macht den Companion AEO-stark, weil sie direkte Antworten liefert, und zugleich vertrauenswürdig, weil Nutzer sehen, worauf eine Aussage basiert.",
      },
      {
        title: "Transparenz bei AI-Nutzung",
        body:
          "Hermetia sollte sichtbar machen, wann AI beteiligt ist und wann nicht. Berechnung, Konvergenz und Systemlogik sind nicht dasselbe wie die spätere Formulierung. Nutzer brauchen deshalb eine einfache Erklärung: Die AI schreibt keine freien Wahrheiten über dich, sondern formuliert aus freigegebenen Profilinformationen, redaktionellen Leitplanken und deiner aktuellen Frage. Diese Trennung schützt vor Überhöhung und macht den Companion rechtlich sauberer.",
      },
      {
        title: "Datenschutz und Datenminimierung im Gespräch",
        body:
          "Ein Companion kann schnell sehr persönliche Fragen erhalten. Deshalb muss Datenminimierung auch im Gespräch gelten: Nur relevante Profilteile, nur freigegebene Journalnotizen, klare Zwecke, verständliche Lösch- und Exportwege. Gerade bei sensiblen spirituellen Daten darf die Website nicht nur sagen, dass AI hilfreich ist. Sie muss erklären, wie Hermetia verhindert, dass aus Begleitung eine unnötige Datensammlung wird.",
      },
      {
        title: "Beispielhafte Fragen an den Companion",
        body:
          "Gute Marketing-Inhalte sollten zeigen, welche Fragen sinnvoll sind: Warum taucht mein Kernthema in mehreren Systemen auf? Wie kann ich diesen Tagesimpuls journaln? Welche Spannung zwischen Rückzug und Sichtbarkeit zeigt mein Profil? Wie lese ich ein Kapitel aus dem Vollprofil-Buch? Was ist nur Symbolsprache und was beruht auf berechneten Daten? Solche Beispiele machen den Nutzen konkret, ohne echte Nutzerprofile zu verwenden.",
      },
      {
        title: "Orakel-Moment ohne Schicksalsdruck",
        body:
          "Ein optionaler Orakel- oder Kartenmoment kann inspirierend sein, wenn er sauber gerahmt ist. Hermetia sollte ihn nicht als Vorhersage verkaufen, sondern als Symbolfrage für den Moment: Worauf könnte ich heute achten? Was will gesehen werden? Welche Perspektive hilft mir, ruhiger zu handeln? Der Companion kann solche Motive erklären, aber niemals Druck, Angst oder Abhängigkeit erzeugen. Die Grenze lautet: Symbolische Impulse dürfen öffnen, aber nicht bestimmen.",
      },
      {
        title: "Grenzen bei Gesundheit, Beziehung und Entscheidung",
        body:
          "Der Companion darf keine medizinischen, therapeutischen, rechtlichen oder finanziellen Ratschläge geben. Bei Beziehungsthemen muss er respektvoll bleiben und keine Aussagen über eine zweite Person treffen, wenn deren Einwilligung fehlt. Bei psychischer Belastung sollte er klare Hilfsgrenzen benennen. Genau diese Grenzen gehören auf die Marketing-Website, weil sie Vertrauen schaffen. Eine gute Antwort erkennt also auch, wann sie nicht antworten sollte.",
      },
      {
        title: "Warum der Companion Premium-Wert erzeugt",
        body:
          "Der kostenlose Einstieg zeigt die Seelenkarte. Der Companion wird wertvoll, wenn Nutzer tiefer fragen, Beispiele wünschen, Journaling vertiefen oder lange Profilkapitel verständlich aufschlüsseln möchten. Das ist ein natürlicher Premium-Nutzen: mehr Begleitung, mehr Kontext, mehr Ruhe. Die Website soll diesen Wert erklären, ohne so zu tun, als bräuchte jeder Mensch dauerhaft eine AI-Stimme. Premium heißt hier nicht Abhängigkeit, sondern Zugang zu besserem Kontext, längeren Gesprächsverläufen und verantwortungsvoller Qualitätssicherung.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Funnel von Profilberechnung zu Companion-Antworten",
        caption: "Der Companion antwortet nicht frei aus dem Nichts, sondern auf Basis berechneter Profilfakten, Konvergenz und freigegebener Kontexte.",
      },
      {
        src: "/graphics/convergence/abb7-crosswalk-sankey.svg",
        alt: "Crosswalk-Grafik für Übersetzung verschiedener Systemsprachen",
        caption: "AI-Begleitung wird wertvoll, wenn sie unterschiedliche Systemsprachen in verständliche Reflexionsfragen übersetzt.",
      },
    ],
    faq: [
      { q: "Ist der Companion ein Orakel?", a: "Nein. Er kann symbolische Impulse erklären, aber er ist kein Vorhersagewerkzeug und keine Autorität über Entscheidungen." },
      { q: "Kann der Companion mein ganzes Profil sehen?", a: "Er sollte nur die Daten nutzen, die für die jeweilige Antwort nötig und freigegeben sind. Datenminimierung bleibt auch bei AI-Begleitung wichtig." },
      { q: "Ersetzt der Companion Beratung oder Therapie?", a: "Nein. Er bietet Reflexionsfragen und Erklärungen zur Seelenkarte, aber keine medizinische, psychologische, therapeutische, rechtliche oder finanzielle Beratung." },
      { q: "Warum ist der Companion nicht komplett kostenlos?", a: "Persönliche AI-Begleitung, sichere Infrastruktur, Redaktion, Qualitätssicherung und längere Profilkontexte verursachen laufende Kosten. Deshalb kann Tiefe Teil bezahlter Modelle sein." },
      { q: "Woher weiß der Companion, worauf seine Antwort basiert?", a: "Er sollte Antworten aus berechneten Profilfakten, Konvergenzsignalen, freigegebenen Notizen und der aktuellen Frage ableiten. Die Grundlage muss für Nutzer nachvollziehbar bleiben." },
      { q: "Kann ich sensible Themen mit dem Companion besprechen?", a: "Du kannst reflektierende Fragen stellen, aber der Companion ersetzt keine professionelle Hilfe. Bei Gesundheit, Krise, Recht, Finanzen oder akuter Belastung braucht es passende Fachstellen." },
      { q: "Nutzt der Companion meine Journaltexte automatisch?", a: "Journaltexte sollten nur genutzt werden, wenn sie für den Zweck relevant und freigegeben sind. Datenminimierung und Transparenz bleiben zentrale Produktregeln." },
      { q: "Warum stärkt der Companion bezahlte Modelle?", a: "Weil längere Kontexte, individuellere Antworten, sichere AI-Infrastruktur, Qualitätssicherung und redaktionelle Leitplanken laufenden Aufwand erzeugen." },
    ],
    ctaTitle: "Öffne deine Seelenkarte und stelle später die Fragen, die wirklich zählen.",
    ctaText: "Der Companion wird sinnvoll, sobald dein eigenes Profil die Grundlage bildet.",
  },
  profilVerfeinern: {
    slug: "profil-verfeinern",
    navKey: "profilVerfeinern",
    title: "Profil verfeinern: Feedback, Export und Löschung verständlich erklärt",
    seoTitle: "Hermetia Profil verfeinern - Feedback, Datenexport und Löschung",
    seoDescription:
      "Wie Nutzer ihr Hermetia-Profil durch Feedback, genauere Geburtsdaten und bewusste Einstellungen verfeinern und dabei Kontrolle über Export und Löschung behalten.",
    eyebrow: "Daten · Kontrolle",
    lead:
      "Ein gutes Profil darf nicht starr sein. Hermetia soll zeigen, welche Aussagen sicher sind, was du später nachtragen kannst und wie du die Kontrolle über persönliche Inhalte behältst.",
    answer:
      "Profilverfeinerung bedeutet bei Hermetia: Nutzer können Geburtszeit, Selbstauskunft, Resonanzfeedback und Einstellungen nachschärfen, damit die Seelenkarte genauer und nützlicher wird. Gleichzeitig müssen Export, Löschung, Einwilligung und AI-Nutzung transparent bleiben.",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Eine feine Datentopografie als Bild für Profilverfeinerung und Datenkontrolle",
    sections: [
      {
        title: "Warum Profile nicht fertig vom Himmel fallen",
        body:
          "Viele Systeme starten mit Geburtsdaten, aber Menschen sind mehr als ein Datensatz. Hermetia kann sehr viel berechnen, doch Resonanz entsteht erst im Zusammenspiel mit echter Selbstauskunft. Wenn Nutzer später ihre Geburtszeit finden, Interessen nachtragen, Tagesimpulse bewerten oder Journalmuster reflektieren, wird das Profil klarer. Das ist kein Fehler im ersten Profil, sondern Teil eines ehrlichen Produktverständnisses. Die Website sollte deshalb erklären: Ein Profil darf wachsen, ohne den ersten Einstieg zu entwerten.",
      },
      {
        title: "Datenqualität sichtbar machen",
        body:
          "Profilverfeinerung beginnt mit Transparenz. Nutzer sollten sehen, welche Angaben sicher sind, welche nur grob geschätzt wurden und welche Systeme besonders von Genauigkeit abhängen. Eine bekannte Geburtszeit verbessert andere Aussagen als ein ausgefüllter Fragebogen oder ein Journaling-Verlauf. Hermetia kann daraus eine Datenqualitätslogik machen: Was ist stabil? Was ist unsicher? Was würde sich verbessern, wenn ich freiwillig ergänze?",
      },
      {
        title: "Resonanzfeedback statt blinder Korrektur",
        body:
          "Wenn ein Nutzer sagt, dass ein Satz nicht passt, sollte Hermetia das nicht als bloßes Nein behandeln. Interessant ist die Frage: War die Aussage zu stark, zu allgemein, zu früh oder fachlich falsch eingeordnet? Gutes Feedback verbessert Sprache, Gewichtung und künftige Reflexion. Gleichzeitig darf die Plattform Nutzer nicht drängen, immer mehr intime Details preiszugeben. Verfeinerung muss freiwillig bleiben. Auch ein Widerspruch ist wertvoll, weil er hilft, die eigene Sprache genauer zu finden.",
      },
      {
        title: "Sicherheitsstufen statt Absolutheit",
        body:
          "Nicht jede Aussage im Profil ist gleich belastbar. Hermetia sollte daher mit Sicherheitsstufen arbeiten: hoch, wenn Eingaben vollständig und mehrere unabhängige Systemfamilien beteiligt sind; mittel, wenn gute Hinweise vorliegen, aber eine Quelle fehlt; niedrig, wenn ein Thema poetisch interessant, aber dünn belegt ist. Diese Differenzierung macht die Seelenkarte glaubwürdiger und verhindert, dass Nutzer schöne Formulierungen mit endgültigen Wahrheiten verwechseln.",
      },
      {
        title: "Export als Vertrauenssignal",
        body:
          "Wer persönliche Inhalte speichert, sollte sie auch wieder herausgeben können. Ein Export von Profil, Journalnotizen oder wichtigen Einstellungen schafft Vertrauen, besonders bei sensiblen spirituellen Daten. Die Marketing-Seite muss nicht jedes technische Format versprechen, sollte aber deutlich machen: Hermetia denkt Datenportabilität, Transparenz und Nutzersouveränität als Teil des Produkts. Export ist damit nicht nur ein Datenschutzthema, sondern ein Kaufargument für bezahlte Tiefe.",
      },
      {
        title: "Löschung und Einwilligung nicht verstecken",
        body:
          "Ein spirituelles Profil kann intime Aussagen über Weltbild, Identität und Beziehung enthalten. Deshalb muss Löschung einfach erklärbar sein. Ebenso wichtig ist die Einwilligung: Nutzer sollen wissen, welche Daten für Berechnung, AI-Formulierung, Journaling und Beziehungsauswertungen genutzt werden. Gerade diese Klarheit kann Conversion stärken, weil sie Angst reduziert. Besonders bei Beziehungsprofilen muss Einwilligung getrennt gedacht werden: Meine Daten sind nicht automatisch die Erlaubnis, eine zweite Person zu deuten.",
      },
      {
        title: "AI-Nutzung und Profilverfeinerung",
        body:
          "Wenn AI bei Zusammenfassungen, Companion-Antworten oder Profiltexten hilft, muss Hermetia erklären, welche verfeinerten Daten überhaupt in den Kontext gelangen. Eine gute Regel lautet: nur notwendige Informationen, nur für den angegebenen Zweck und nur mit sichtbarer Grenze. Profilverfeinerung darf die AI nicht zu einer Blackbox machen, sondern sollte genauer zeigen, warum eine Antwort besser wird.",
      },
      {
        title: "Premium-Wert durch bessere Genauigkeit",
        body:
          "Profilverfeinerung kann ein bezahlter Mehrwert sein, wenn sie echte Tiefe schafft: genauere Ebenen, bessere Rückblicke, differenzierte Companion-Antworten, verfeinerte Beziehungsmuster und klarere Tagesimpulse. Die Grenze muss fair bleiben. Der kostenlose Einstieg zeigt Resonanz, bezahlte Modelle vertiefen und begleiten, ohne Nutzer in Datenabgabe zu drängen. Der Kaufgrund ist nicht, dass vorher alles ungenau war, sondern dass mehr Kontext über Zeit mehr Nutzen schafft.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb4-pipeline-einordnung.svg",
        alt: "Pipeline von Eingaben zu Profilverfeinerung und besserer Einordnung",
        caption: "Profilverfeinerung macht sichtbar, welche Eingaben eine Aussage verbessern und welche Unsicherheiten erhalten bleiben.",
      },
      {
        src: "/graphics/convergence/abb2-konvergenz-vs-staerke.svg",
        alt: "Konvergenz versus Stärke als Grundlage für Sicherheitsstufen",
        caption: "Eine Aussage kann stark wirken, aber erst Konvergenz und gute Datenqualität machen sie belastbarer.",
      },
    ],
    faq: [
      { q: "Kann ich meine Geburtszeit später ergänzen?", a: "Ja. Eine spätere Geburtszeit kann bestimmte Systeme genauer machen. Hermetia sollte transparent zeigen, welche Aussagen dadurch belastbarer werden." },
      { q: "Kann ich mein Profil exportieren?", a: "Das Produktziel ist, dass wichtige persönliche Inhalte exportierbar sind. Die Website rahmt Export bewusst als Vertrauens- und Datenschutzsignal." },
      { q: "Kann ich Daten löschen lassen?", a: "Ja. Persönliche Profile, sensible Inhalte und Einwilligungen brauchen klare Löschwege. Rechtstexte und Produktlogik müssen das vor Launch verbindlich abbilden." },
      { q: "Muss ich immer mehr Daten angeben?", a: "Nein. Verfeinerung soll freiwillig bleiben. Hermetia soll erklären, was zusätzliche Angaben verbessern, aber keinen Druck erzeugen." },
      { q: "Was bedeutet Datenqualität in Hermetia?", a: "Datenqualität beschreibt, wie vollständig und belastbar die Eingaben sind. Eine genaue Geburtszeit, gute Selbstauskunft und freiwilliges Feedback können unterschiedliche Profilbereiche verbessern." },
      { q: "Werden Aussagen nach Sicherheit gekennzeichnet?", a: "Das Produktziel ist, Unsicherheit sichtbar zu machen: starke Konvergenz, vollständige Daten und mehrere Systemfamilien sollten anders gelesen werden als dünn belegte Hinweise." },
      { q: "Verbessert Feedback die AI-Antworten?", a: "Feedback kann helfen, Kontext und Sprache besser einzuordnen. AI sollte dabei nur notwendige und freigegebene Informationen nutzen." },
      { q: "Ist Profilverfeinerung nur für Premium sinnvoll?", a: "Nein. Schon kostenloses Feedback kann Orientierung schaffen. Premium wird sinnvoll, wenn Verlauf, Rückblicke, Companion, Journaling und tiefere Ebenen regelmäßig genutzt werden." },
    ],
    ctaTitle: "Starte mit dem, was du weißt, und verfeinere dein Profil später.",
    ctaText: "Die erste Seelenkarte funktioniert als Einstieg. Mehr Genauigkeit kann wachsen, wenn du sie willst.",
  },
  beziehungen: {
    slug: "beziehungen",
    navKey: "beziehungen",
    title: "Beziehungen verstehen: Resonanz, Reibung und Entwicklung",
    seoTitle: "Beziehungsauswertung mit Synastrie und Composite — Hermetia erklärt",
    seoDescription:
      "Wie Hermetia Beziehungsauswertungen denkt: Synastrie, Composite, Harmonie, Reibung, Entwicklung und klare Einwilligung.",
    eyebrow: "Beziehungen · Consent",
    lead:
      "Beziehungsprofile sind mächtig und sensibel. Hermetia behandelt sie deshalb nicht als Spielerei, sondern als zustimmungspflichtige Reflexion über zwei Menschen.",
    answer:
      "Eine Beziehungsauswertung verbindet zwei Profile und fragt: Wo entsteht Resonanz, wo Reibung, wo Entwicklung? Hermetia nutzt dafür berechnete Synastrie- und Composite-Logik, aber nur mit klarer Einwilligung der betroffenen Person.",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Zwei Gärten, die sich zu einem gemeinsamen Beziehungsraum überlagern",
    sections: [
      {
        title: "Synastrie und Composite einfach erklärt",
        body:
          "Synastrie vergleicht zwei Profile miteinander: Welche Punkte berühren sich, wo ergänzen sich Muster, wo entsteht Spannung? Composite betrachtet die Beziehung als eigenes drittes Feld. Beide Blickwinkel sind wertvoll, aber sie dürfen nicht als Urteil über richtig oder falsch missverstanden werden. Hermetia nutzt diese Logik als Reflexionssprache: Sie kann zeigen, wo Nähe leicht entsteht, wo zwei Rhythmen aneinander reiben und welche Themen eine Beziehung bewusst machen kann.",
      },
      {
        title: "Warum Einwilligung unverzichtbar ist",
        body:
          "Eine Beziehungsauswertung verarbeitet sensible Aussagen über eine zweite Person. Deshalb reicht es nicht, einfach Daten einzutragen. Vor echter Nutzung braucht die betroffene Person eine eigene, informierte Einwilligung oder einen rechtlich sauberen Guardian-Fall. Das ist kein Hindernis, sondern Respekt. Die Marketing-Website muss diese Haltung deutlich machen, weil Vertrauen hier wichtiger ist als schnelle Conversion: Wer andere heimlich auswerten will, ist nicht der richtige Nutzer für diese Funktion.",
      },
      {
        title: "Welche Beziehungsfragen Hermetia beantworten kann",
        body:
          "Hermetia kann Fragen strukturieren, ohne die Beziehung zu bewerten: Wo sprechen wir eine ähnliche Sprache? Wo brauchen wir Übersetzung? Welche Dynamik fühlt sich wiederkehrend an? Wo entsteht Anziehung, aber auch Überforderung? Welche Themen gehören zu mir, welche zur anderen Person und welche entstehen erst im gemeinsamen Feld? Diese Fragen sind für Partnerschaft, Freundschaft, Familie, kreative Zusammenarbeit und bewusste Trennung gleichermaßen relevant.",
      },
      {
        title: "Resonanz, Reibung und Entwicklungsfeld",
        body:
          "Eine gute Beziehungsauswertung braucht mehr als Harmoniepunkte. Zu viel Übereinstimmung kann beruhigen, aber auch blinde Flecken erzeugen. Reibung kann anstrengend sein, aber Entwicklung ermöglichen. Hermetia sollte deshalb drei Ebenen unterscheiden: Resonanz als Gefühl von Verstandenwerden, Reibung als produktive Differenz und Entwicklungsfeld als Frage, die zwei Menschen gemeinsam reifer machen kann. Genau daraus entsteht eine differenzierte, nicht wertende Beziehungssprache.",
      },
      {
        title: "Datenschutz bei Profilen anderer Menschen",
        body:
          "Beziehungsprofile sind datenschutzrechtlich besonders sensibel, weil sie Daten und Ableitungen über mindestens zwei Personen verbinden. Hermetia muss erklären, welche Daten benötigt werden, wer sie eingibt, wer Zugriff hat, wie Einwilligung dokumentiert wird und wie Löschung funktioniert. Gerade Geburtsdaten, spirituelle Ableitungen und Beziehungsmuster können intime Rückschlüsse ermöglichen. Deshalb gehört Datenschutz nicht in den Footer allein, sondern in den Content der Beziehungsseite.",
      },
      {
        title: "Warum Beziehungsauswertungen Premium-Tiefe schaffen",
        body:
          "Beziehungsauswertungen sind ein natürlicher Premium-Bereich, weil sie mehr Rechenlogik, mehr Texttiefe, Consent-Flows und mehr Verantwortung brauchen als ein einzelnes Profil. Der Wert liegt nicht in einem schnellen Kompatibilitätsurteil, sondern in einer lesbaren gemeinsamen Landkarte: Dynamiken, Spannungsfelder, Gesprächsimpulse, Journaling-Fragen und wiederkehrende Themen. Nutzer sollen verstehen, warum diese Tiefe bezahlten Raum braucht.",
      },
      {
        title: "Was Hermetia nicht verspricht",
        body:
          "Hermetia sagt nicht, ob eine Beziehung halten wird. Es bewertet keine Menschen und ersetzt keine Paarberatung. Die Auswertung soll Sprache für Dynamiken geben: Was fühlt sich leicht an? Wo entsteht Reibung? Welche Entwicklung lädt die Beziehung ein? Sie darf keine Diagnose, keine Schuldzuweisung und keine Entscheidung über Trennung, Bindung oder Zukunft sein. Der Nutzer bleibt verantwortlich, und bei Gewalt, Krise oder psychischer Belastung braucht es professionelle Hilfe.",
      },
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb6-beispiel-radar.svg",
        alt: "Radar-Grafik für Resonanz, Reibung und Beziehungsthemen",
        caption: "Beziehungsprofile sollten nicht nur Harmonie zeigen, sondern mehrere Dimensionen wie Resonanz, Spannung und Entwicklung sichtbar machen.",
      },
      {
        src: "/graphics/convergence/abb9-deine-innere-spannung.svg",
        alt: "Innere Spannung als Grundlage für Beziehungsdynamik",
        caption: "Manche Reibung entsteht nicht zwischen zwei Menschen, sondern aus inneren Spannungsfeldern, die in Beziehung sichtbar werden.",
      },
    ],
    faq: [
      { q: "Kann ich einfach die Daten meines Partners eingeben?", a: "Für echte Kundennutzung braucht die zweite Person eine eigene informierte Einwilligung. Hermetia ist hier bewusst streng." },
      { q: "Sagt Hermetia, ob wir zusammenpassen?", a: "Nein. Hermetia zeigt Resonanzen, Spannungen und Entwicklungsthemen, aber keine Beziehungsgarantie." },
      { q: "Ist das therapeutische Beratung?", a: "Nein. Beziehungsauswertungen sind Reflexionsimpulse und ersetzen keine professionelle Beratung." },
      { q: "Was ist der Unterschied zwischen Synastrie und Composite?", a: "Synastrie vergleicht zwei Profile direkt miteinander. Composite betrachtet die Beziehung als gemeinsames Feld. Hermetia nutzt beide Perspektiven vorsichtig und nicht als Urteil." },
      { q: "Warum braucht Hermetia Consent für Beziehungsprofile?", a: "Weil eine Auswertung sensible Aussagen über eine zweite Person ableiten kann. Informierte Einwilligung schützt Privatsphäre, Vertrauen und die spätere rechtliche Produktlogik." },
      { q: "Kann Hermetia Beziehungskonflikte lösen?", a: "Nein. Hermetia kann Sprache, Fragen und Muster anbieten. Konfliktlösung, Beratung oder Therapie ersetzt die Plattform nicht." },
      { q: "Wann lohnt sich Premium für Beziehungen?", a: "Premium lohnt sich, wenn beide Personen bewusst mit einer Beziehungsauswertung arbeiten möchten: mit tieferer Analyse, Gesprächsimpulsen, Journaling und klar dokumentierter Einwilligung." },
    ],
    ctaTitle: "Beginne zuerst mit deinem eigenen Profil.",
    ctaText: "Deine Beziehungsmuster werden verständlicher, wenn du deine eigene Seelenkarte kennst.",
  },
} satisfies Record<string, ContentPage>;

const enPages: Record<keyof typeof dePages, ContentPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, page]) => [
    key,
    {
      ...page,
      title: page.title,
      seoTitle: page.seoTitle,
      seoDescription: page.seoDescription,
      eyebrow: page.eyebrow,
      lead: page.lead,
      answer: page.answer,
      ctaTitle: page.ctaTitle,
      ctaText: page.ctaText,
    },
  ]),
) as Record<keyof typeof dePages, ContentPage>;

enPages.beziehungen = {
  ...dePages.beziehungen,
  title: "Understanding relationships: resonance, friction and growth",
  seoTitle: "Relationship readings with synastry and composite — Hermetia explains",
  seoDescription:
    "How Hermetia frames relationship readings: synastry, composite, harmony, friction, growth and clear consent.",
  eyebrow: "Relationships · Consent",
  lead:
    "Relationship profiles are powerful and sensitive. Hermetia therefore does not treat them as a game, but as consent-based reflection about two people.",
  answer:
    "A relationship reading connects two profiles and asks: where does resonance arise, where does friction appear and where can growth happen? Hermetia uses calculated synastry and composite logic, but only with clear consent from the person concerned.",
  imageAlt: "Two gardens overlapping into a shared relationship space",
  sections: [
    {
      title: "Synastry and composite, explained simply",
      body:
        "Synastry compares two profiles directly: which points touch, where do patterns complement each other and where does tension arise? Composite looks at the relationship as its own third field. Both perspectives are valuable, but they must not be misunderstood as a verdict about right or wrong. Hermetia uses this logic as reflection language: it can show where closeness comes easily, where two rhythms rub against each other and which themes a relationship can make conscious.",
    },
    {
      title: "Why consent is essential",
      body:
        "A relationship reading processes sensitive statements about a second person. It is therefore not enough to simply enter data. Real use needs the affected person's own informed consent or a legally clean guardian case. This is not an obstacle, but respect. The marketing website has to make this stance clear because trust matters more here than quick conversion: someone who wants to read others secretly is not the right user for this feature.",
    },
    {
      title: "Which relationship questions Hermetia can answer",
      body:
        "Hermetia can structure questions without judging the relationship: where do we speak a similar language, where do we need translation, which dynamic feels recurring, where is there attraction but also overwhelm, which themes belong to me, which to the other person and which emerge only in the shared field? These questions are relevant for partnership, friendship, family, creative collaboration and conscious separation alike.",
    },
    {
      title: "Resonance, friction and growth field",
      body:
        "A good relationship reading needs more than harmony points. Too much agreement can soothe, but can also create blind spots. Friction can be exhausting, but it can make growth possible. Hermetia should therefore distinguish three layers: resonance as the feeling of being understood, friction as productive difference and growth field as a question that can help two people mature together. This is how a nuanced, non-judgmental relationship language emerges.",
    },
    {
      title: "Data protection for profiles of other people",
      body:
        "Relationship profiles are especially sensitive under data-protection logic because they connect data and derivations about at least two people. Hermetia must explain which data is needed, who enters it, who has access, how consent is documented and how deletion works. Birth data, spiritual derivations and relationship patterns can allow intimate inferences. Data protection therefore belongs not only in the footer, but directly in the content of the relationship page.",
    },
    {
      title: "Why relationship readings create premium depth",
      body:
        "Relationship readings are a natural premium area because they need more calculation logic, more textual depth, consent flows and more responsibility than a single profile. The value is not a quick compatibility verdict, but a readable shared map: dynamics, fields of tension, conversation impulses, journaling questions and recurring themes. Users should understand why this depth needs paid space.",
    },
    {
      title: "What Hermetia does not promise",
      body:
        "Hermetia does not say whether a relationship will last. It does not judge people and does not replace couples counselling. The reading should give language for dynamics: what feels easy, where friction appears and which growth the relationship invites. It must not be a diagnosis, blame assignment or decision about separation, commitment or the future. The user remains responsible, and violence, crisis or psychological strain require professional support.",
    },
  ],
  graphics: [
    {
      src: "/graphics/convergence/abb6-beispiel-radar.svg",
      alt: "Radar graphic for resonance, friction and relationship themes",
      caption:
        "Relationship profiles should not only show harmony, but several dimensions such as resonance, tension and growth.",
    },
    {
      src: "/graphics/convergence/abb9-deine-innere-spannung.svg",
      alt: "Inner tension as a basis for relationship dynamics",
      caption:
        "Some friction does not arise between two people, but from inner fields of tension that become visible in relationship.",
    },
  ],
  faq: [
    {
      q: "Can I simply enter my partner's data?",
      a: "For real customer use, the second person needs their own informed consent. Hermetia is intentionally strict here.",
    },
    {
      q: "Does Hermetia say whether we are compatible?",
      a: "No. Hermetia shows resonance, tensions and growth themes, but no relationship guarantee.",
    },
    {
      q: "Is this therapeutic counselling?",
      a: "No. Relationship readings are reflection impulses and do not replace professional counselling.",
    },
    {
      q: "What is the difference between synastry and composite?",
      a: "Synastry compares two profiles directly. Composite looks at the relationship as a shared field. Hermetia uses both perspectives carefully and not as a verdict.",
    },
    {
      q: "Why does Hermetia need consent for relationship profiles?",
      a: "Because a reading can derive sensitive statements about a second person. Informed consent protects privacy, trust and the later legal product logic.",
    },
    {
      q: "Can Hermetia solve relationship conflicts?",
      a: "No. Hermetia can offer language, questions and patterns. It does not replace conflict resolution, counselling or therapy.",
    },
    {
      q: "When is premium worth it for relationships?",
      a: "Premium is worthwhile when both people consciously want to work with a relationship reading: with deeper analysis, conversation impulses, journaling and clearly documented consent.",
    },
  ],
  ctaTitle: "Start with your own profile first.",
  ctaText: "Your relationship patterns become easier to understand when you know your own soul map.",
};

export const pillarPages: Record<string, LocalizedPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, de]) => [key, { de, en: enPages[key as keyof typeof dePages] }]),
) as Record<string, LocalizedPage>;

function glossaryTerm(input: {
  slug: string;
  term: string;
  definition: string;
  why: string;
  hermetia: string;
}) {
  return {
    slug: input.slug,
    term: input.term,
    seoTitle: `${input.term} erklärt — Bedeutung bei Hermetia`,
    definition: input.definition,
    sections: [input.why, input.hermetia],
  };
}

export const glossaryTerms = [
  {
    slug: "seelenkarte",
    term: "Seelenkarte",
    seoTitle: "Was ist eine Seelenkarte? Bedeutung bei Hermetia",
    definition:
      "Eine Seelenkarte ist ein integriertes Persönlichkeitsbild, das berechnete spirituelle und psychologische Systeme zu Kernthemen, Ebenen und Reflexionsimpulsen verbindet.",
    sections: [
      "Bei Hermetia ist die Seelenkarte kein einzelnes Horoskop. Sie entsteht aus mehreren Systemen und aus der Frage, welche Themen sich über unterschiedliche Perspektiven hinweg bestätigen.",
      "Die Seelenkarte ist bewusst als Einladung formuliert. Sie soll Worte und Bilder für innere Muster geben, ohne dich zu diagnostizieren oder festzulegen.",
    ],
  },
  {
    slug: "konvergenz",
    term: "Konvergenz",
    seoTitle: "Konvergenz erklärt — wenn mehrere Systeme dasselbe Thema zeigen",
    definition:
      "Konvergenz bedeutet bei Hermetia, dass mehrere unabhängige Systemfamilien auf dasselbe Thema hinweisen und daraus ein tragfähigeres Kernthema entsteht.",
    sections: [
      "Konvergenz unterscheidet sich von Stärke. Ein Thema kann in einem System stark sein, aber erst mehrere unabhängige Perspektiven machen es zu einem belastbaren Kernthema.",
      "Hermetia nutzt Konvergenz, um Widersprüche sichtbar zu machen und Übergewichtungen durch verwandte Systeme zu vermeiden.",
    ],
  },
  {
    slug: "synastrie",
    term: "Synastrie",
    seoTitle: "Was ist Synastrie? Beziehungsauswertung einfach erklärt",
    definition:
      "Synastrie ist der Vergleich zweier Profile oder Horoskope, um Resonanz, Reibung und Entwicklungsthemen zwischen zwei Menschen sichtbar zu machen.",
    sections: [
      "In Hermetia ist Synastrie kein Urteil über die Beziehung. Sie ist eine Reflexionshilfe, die berechnete Berührungspunkte in eine verständliche Sprache übersetzt.",
      "Weil dabei Daten einer zweiten Person verarbeitet werden können, braucht jede echte Beziehungsauswertung eine klare Einwilligung.",
    ],
  },
  {
    slug: "ai-deutung",
    term: "AI-Deutung",
    seoTitle: "AI-Deutung bei Hermetia — was AI tut und was nicht",
    definition:
      "AI-Deutung bedeutet, dass ein Sprachmodell berechnete Profilfakten in warme, verständliche Texte übersetzt. Die Berechnung selbst erfolgt nicht durch AI.",
    sections: [
      "Hermetia trennt Berechnung und Formulierung. Planetenpositionen, Zahlen, Fragebogenwerte und Theme-Signale werden deterministisch erzeugt.",
      "Die AI bekommt nur abgeleitete Fakten und formuliert daraus Reflexionsimpulse. Sie ersetzt keine medizinische, therapeutische oder rechtliche Beratung.",
    ],
  },
  {
    slug: "kernthema",
    term: "Kernthema",
    seoTitle: "Kernthema bei Hermetia — was dein Profil wirklich trägt",
    definition:
      "Ein Kernthema ist ein zentrales Muster deiner Seelenkarte, das von mehreren Systemen oder starken Signalen getragen wird.",
    sections: [
      "Kernthemen entstehen nicht aus einem einzelnen Satz. Hermetia prüft, welche Themen wiederkehren und welche Perspektiven sie stützen.",
      "Ein Kernthema ist keine Festlegung. Es ist ein Orientierungspunkt für Reflexion, Journaling und die persönliche Reise durch deine Ebenen.",
    ],
  },
  {
    slug: "spannungsfeld",
    term: "Spannungsfeld",
    seoTitle: "Spannungsfeld erklärt — wenn zwei innere Pole gleichzeitig aktiv sind",
    definition:
      "Ein Spannungsfeld beschreibt zwei gleichzeitig wirksame Themen, die sich reiben und dadurch Entwicklungspotenzial sichtbar machen.",
    sections: [
      "Hermetia behandelt Widersprüche nicht als Fehler. Wenn zwei Pole stark sind, kann daraus eine produktive innere Frage entstehen.",
      "Ein Spannungsfeld kann zum Beispiel zwischen Rückzug und Sichtbarkeit, Freiheit und Bindung oder Kontrolle und Hingabe liegen.",
    ],
  },
  {
    slug: "theme-signal",
    term: "Theme-Signal",
    seoTitle: "Theme-Signal — wie Hermetia Systemdaten vergleichbar macht",
    definition:
      "Ein Theme-Signal ist ein standardisiertes Thema, das aus einem System berechnet wird und mit Signalen anderer Systeme verglichen werden kann.",
    sections: [
      "Systeme sprechen unterschiedliche Sprachen. Theme-Signale übersetzen sie in eine gemeinsame Themen-Landkarte.",
      "Dadurch kann Hermetia erkennen, ob verschiedene Systeme auf Beziehung, Ausdruck, Rhythmus, Grenzen oder Wachstum zeigen.",
    ],
  },
  {
    slug: "ephemeride",
    term: "Ephemeride",
    seoTitle: "Ephemeride einfach erklärt — Grundlage astrologischer Berechnung",
    definition:
      "Eine Ephemeride enthält astronomische Positionen von Himmelskörpern und ermöglicht reproduzierbare Berechnungen von Horoskopen und verwandten Systemen.",
    sections: [
      "Hermetia nutzt Ephemeriden für Systeme, die Himmelspositionen brauchen. Dadurch wird die Berechnung nachvollziehbar und nicht geraten.",
      "Die spätere Deutung ist davon getrennt: Erst wird gerechnet, dann werden die Ergebnisse sprachlich eingeordnet.",
    ],
  },
  {
    slug: "bodygraph",
    term: "Bodygraph",
    seoTitle: "Bodygraph im Human Design — Bedeutung bei Hermetia",
    definition:
      "Der Bodygraph ist die zentrale Human-Design-Grafik mit Zentren, Kanälen, Toren, Typ und innerer Autorität.",
    sections: [
      "Bei Hermetia ist der Bodygraph eine Datenquelle, nicht das ganze Ergebnis. Seine Signale werden mit anderen Systemen verbunden.",
      "Geschützte Originaltexte werden dabei nicht übernommen. Hermetia formuliert mit eigener Sprache und rechtlich geprüften Leitplanken.",
    ],
  },
  {
    slug: "innere-autoritaet",
    term: "Innere Autorität",
    seoTitle: "Innere Autorität im Human Design — Entscheidungskompass erklärt",
    definition:
      "Die innere Autorität beschreibt im Human Design, über welchen inneren Kompass Entscheidungen besonders stimmig getroffen werden.",
    sections: [
      "Hermetia liest innere Autorität nicht als starre Regel, sondern als Reflexionsangebot: Wie fühlt sich ein klares Ja oder Nein bei dir an?",
      "Die Aussage wird mit anderen Systemen verbunden, etwa mit Rhythmus, Nervensystem, Werten oder Beziehungsmustern.",
    ],
  },
  {
    slug: "schatten-gabe-siddhi",
    term: "Schatten, Gabe und Siddhi",
    seoTitle: "Schatten, Gabe und Siddhi — Gene-Keys-Triade verständlich erklärt",
    definition:
      "Schatten, Gabe und Siddhi beschreiben eine Entwicklungsbewegung von Herausforderung über Potenzial zu reifer Qualität.",
    sections: [
      "Hermetia nutzt diese Triade mit eigener Sprache und ohne geschützte Originaltexte. Sie ist ein Wachstumsbild, keine Diagnose.",
      "Besonders wertvoll wird sie, wenn ähnliche Themen auch in anderen Systemen auftauchen und dadurch ein Kernthema stützen.",
    ],
  },
  {
    slug: "lebenszahl",
    term: "Lebenszahl",
    seoTitle: "Lebenszahl berechnen — numerologischer Lebensweg bei Hermetia",
    definition:
      "Die Lebenszahl ist eine numerologische Kernzahl aus dem Geburtsdatum und beschreibt ein Grundthema des Lebenswegs.",
    sections: [
      "Die Berechnung ist einfache Arithmetik. Hermetia nutzt die Lebenszahl nicht isoliert, sondern als Signal innerhalb einer größeren Seelenkarte.",
      "Dadurch bleibt die Zahl ein nützlicher Hinweis, ohne zur alleinigen Wahrheit über eine Person zu werden.",
    ],
  },
  {
    slug: "dosha",
    term: "Dosha",
    seoTitle: "Dosha im Ayurveda — Vata, Pitta, Kapha als Reflexionsmodell",
    definition:
      "Doshas sind im Ayurveda Grundprinzipien von Bewegung, Umwandlung und Struktur. Hermetia nutzt sie nicht-medizinisch als Reflexionssignal.",
    sections: [
      "Dosha-Aussagen dürfen nicht als Diagnose verstanden werden. In Hermetia dienen sie der Selbstfürsorge und alltagsnahen Reflexion.",
      "Die Bestimmung erfolgt über eigene Fragebogenitems und nicht über geschützte medizinische oder therapeutische Texte.",
    ],
  },
  {
    slug: "chronotyp",
    term: "Chronotyp",
    seoTitle: "Chronotyp — Tagesrhythmus und Energie bei Hermetia",
    definition:
      "Der Chronotyp beschreibt, zu welchen Tageszeiten Energie, Fokus und Ruhe natürlicherweise stärker oder schwächer sein können.",
    sections: [
      "Hermetia nutzt den Chronotyp als praktisches Alltagssignal, besonders für Tagesimpulse und Journaling.",
      "Auch hier gilt: Die Auswertung ist kein medizinischer Befund, sondern ein sanfter Hinweis auf Rhythmus und Selbstbeobachtung.",
    ],
  },
  {
    slug: "composite",
    term: "Composite",
    seoTitle: "Composite Chart — die Beziehung als eigenes Feld erklärt",
    definition:
      "Ein Composite betrachtet eine Beziehung als eigenes drittes Feld, das aus zwei Profilen oder Horoskopen abgeleitet wird.",
    sections: [
      "Während Synastrie fragt, wie zwei Menschen aufeinander wirken, fragt Composite, welches gemeinsame Thema zwischen ihnen entsteht.",
      "Hermetia behandelt Composite-Deutungen nur mit klarer Einwilligung und ohne Erfolgs- oder Trennungsversprechen.",
    ],
  },
  {
    slug: "art-9-dsgvo",
    term: "Art. 9 DSGVO",
    seoTitle: "Art. 9 DSGVO bei Hermetia — besondere Daten verständlich erklärt",
    definition:
      "Art. 9 DSGVO schützt besondere Kategorien personenbezogener Daten, zu denen auch sensible weltanschauliche oder spirituelle Ableitungen gehören können.",
    sections: [
      "Hermetia behandelt spirituelle Profilinhalte deshalb besonders vorsichtig und arbeitet mit ausdrücklicher Einwilligung.",
      "Marketing-Beispiele bleiben fiktiv. Echte Profile, Geburtsdaten oder Beziehungsauswertungen werden nicht öffentlich verwendet.",
    ],
  },
  glossaryTerm({
    slug: "radix",
    term: "Radix",
    definition: "Die Radix ist das Geburtshoroskop einer Person und zeigt berechnete Planetenpositionen zum Zeitpunkt der Geburt.",
    why: "In Hermetia ist die Radix eine wichtige Datenquelle, aber nicht das ganze Profil. Sie liefert Zeichen, Häuser, Aspekte und Achsen als Ausgangspunkt.",
    hermetia: "Hermetia verbindet Radix-Signale mit anderen Systemfamilien, damit astrologische Aussagen nicht isoliert übergewichtet werden.",
  }),
  glossaryTerm({
    slug: "aszendent",
    term: "Aszendent",
    definition: "Der Aszendent ist das Tierkreiszeichen, das zum Geburtszeitpunkt am östlichen Horizont aufsteigt.",
    why: "Er braucht eine möglichst genaue Geburtszeit und beeinflusst Häuser, Auftreten und die Perspektive, aus der ein Horoskop gelesen wird.",
    hermetia: "Hermetia kennzeichnet die Sicherheit von Aszendent-Aussagen, wenn die Geburtszeit ungenau ist.",
  }),
  glossaryTerm({
    slug: "haeuser",
    term: "Astrologische Häuser",
    definition: "Astrologische Häuser ordnen Horoskopfaktoren verschiedenen Lebensbereichen zu, etwa Beziehung, Berufung oder Rückzug.",
    why: "Häuser machen astrologische Aussagen konkreter, hängen aber stark von Geburtszeit, Ort und gewähltem Häusersystem ab.",
    hermetia: "Hermetia nutzt Häuser transparent und vorsichtig, besonders wenn Eingabedaten weniger exakt sind.",
  }),
  glossaryTerm({
    slug: "aspekt",
    term: "Aspekt",
    definition: "Ein Aspekt beschreibt den Winkel zwischen zwei Horoskopfaktoren und damit eine Beziehung zwischen zwei Themen.",
    why: "Aspekte zeigen Harmonie, Spannung oder Aktivierung. Sie sind wichtig, um innere Dynamiken nicht nur einzeln, sondern relational zu lesen.",
    hermetia: "Hermetia fasst Aspekte als Theme-Signale zusammen und prüft, ob andere Systeme ähnliche Dynamiken spiegeln.",
  }),
  glossaryTerm({
    slug: "orb",
    term: "Orb",
    definition: "Der Orb ist der erlaubte Abstand von einem exakten astrologischen Winkel oder Punkt.",
    why: "Ein enger Orb gilt meist als stärker, ein weiter Orb als weicher. Ohne klare Orben werden astrologische Aussagen schnell beliebig.",
    hermetia: "Hermetia verwendet definierte Orben und macht Gewichtungen nachvollziehbar.",
  }),
  glossaryTerm({
    slug: "transit",
    term: "Transit",
    definition: "Ein Transit beschreibt die aktuelle Position eines Himmelskörpers im Verhältnis zum Geburtshoroskop.",
    why: "Transite werden häufig genutzt, um Zeitqualität zu beschreiben. Sie sind keine Ereignisgarantie, sondern ein Timing-Signal.",
    hermetia: "Hermetia nutzt Transite zurückhaltend für Tagesimpulse und Monatsrückblicke.",
  }),
  glossaryTerm({
    slug: "progression",
    term: "Progression",
    definition: "Progressionen sind astrologische Timing-Techniken, die eine symbolische innere Entwicklung über Zeit beschreiben.",
    why: "Sie unterscheiden sich von Transiten, weil sie weniger äußere Auslöser und mehr innere Reifung darstellen.",
    hermetia: "Hermetia kann Progressionen als langsames Hintergrundsignal für Seelenweg und Entwicklung nutzen.",
  }),
  glossaryTerm({
    slug: "profection",
    term: "Profection",
    definition: "Eine Profection ist eine klassische astrologische Technik, die jedem Lebensjahr ein Haus oder Thema zuordnet.",
    why: "Sie ist einfach, aber wirkungsvoll, um Jahresfokus und Lebensbereiche im Zeitverlauf zu betrachten.",
    hermetia: "Hermetia nutzt Profections als erklärbares Timing-Signal, nicht als Vorhersage fester Ereignisse.",
  }),
  glossaryTerm({
    slug: "typ",
    term: "Human-Design-Typ",
    definition: "Der Human-Design-Typ beschreibt eine Grundlogik von Energie, Handlung und Austausch.",
    why: "Typen sind populär, können aber schnell zu starren Labels werden. Entscheidend ist die praktische Selbstbeobachtung.",
    hermetia: "Hermetia liest den Typ als ein Signal unter mehreren und verbindet ihn mit Autorität, Zentren und anderen Systemen.",
  }),
  glossaryTerm({
    slug: "profil-linien",
    term: "Profil-Linien",
    definition: "Profil-Linien sind im Human Design eine Kombination zweier Linien, die Lernstil, Rolle und Entwicklungsmuster symbolisiert.",
    why: "Sie geben Sprache für soziale Rolle, Rückzug, Experiment, Führung oder Erfahrung.",
    hermetia: "Hermetia nutzt Profil-Linien nur mit eigener Sprache und ordnet sie in größere Kernthemen ein.",
  }),
  glossaryTerm({
    slug: "zentren",
    term: "Zentren",
    definition: "Zentren sind im Bodygraph Felder, die mit Energie, Wahrnehmung und Ausdruck verbunden werden.",
    why: "Definierte und offene Zentren werden oft als stabile oder empfängliche Bereiche gelesen.",
    hermetia: "Hermetia vermeidet Absolutheiten und formuliert Zentren als Beobachtungsimpulse für Alltag und Beziehung.",
  }),
  glossaryTerm({
    slug: "kanal",
    term: "Kanal",
    definition: "Ein Kanal verbindet im Human Design zwei Tore und wird als durchgängiges Motiv im Bodygraph gelesen.",
    why: "Kanäle können starke Themen anzeigen, sollten aber nicht ohne Kontext interpretiert werden.",
    hermetia: "Hermetia gruppiert Kanalsignale mit verwandten Themen aus Gene Keys, Astrologie und Fragebögen.",
  }),
  glossaryTerm({
    slug: "tor",
    term: "Tor",
    definition: "Ein Tor ist im Human Design und in verwandten Systemen eine spezifische Position mit eigener Symbolqualität.",
    why: "Tore sind feiner als Typen und Zentren und ermöglichen differenziertere Aussagen.",
    hermetia: "Hermetia nutzt Tore als Theme-Signale und prüft, welche Themen in anderen Systemen wiederkehren.",
  }),
  glossaryTerm({
    slug: "inkarnationskreuz",
    term: "Inkarnationskreuz",
    definition: "Das Inkarnationskreuz ist im Human Design ein übergeordnetes Motiv aus vier zentralen Torpositionen.",
    why: "Es wird oft als Lebens- oder Richtungsthema verstanden, braucht aber besonders vorsichtige Sprache.",
    hermetia: "Hermetia behandelt es als mögliches Seelenweg-Signal, nicht als festgelegten Lebensauftrag.",
  }),
  glossaryTerm({
    slug: "sequenzen",
    term: "Gene-Keys-Sequenzen",
    definition: "Gene-Keys-Sequenzen beschreiben Entwicklungswege rund um Berufung, Beziehung und Wohlstand.",
    why: "Sie sind kontemplativ angelegt und arbeiten mit wiederkehrenden Fragen statt schnellen Aussagen.",
    hermetia: "Hermetia nutzt keine geschützten Originaltexte, sondern eigene, rechtlich vorsichtige Reflexionssprache.",
  }),
  glossaryTerm({
    slug: "goldener-pfad",
    term: "Goldener Pfad",
    definition: "Der Goldene Pfad ist eine Gene-Keys-inspirierte Reise durch zentrale persönliche Themen.",
    why: "Er bündelt Fragen zu Bestimmung, Beziehung und Reifung in einer geführten Struktur.",
    hermetia: "Hermetia übernimmt keine proprietären Texte, sondern nutzt nur eigene Struktur- und Reflexionslogik.",
  }),
  glossaryTerm({
    slug: "enneagramm-typ",
    term: "Enneagramm-Typ",
    definition: "Ein Enneagramm-Typ beschreibt ein wiederkehrendes Motiv aus Aufmerksamkeit, Schutzstrategie und Grundsehnsucht.",
    why: "Der Wert liegt nicht im Label, sondern darin, automatische Muster bewusster zu erkennen.",
    hermetia: "Hermetia nutzt Enneagramm-Typen als Motivationssprache und verbindet sie mit Werten, Beziehung und Schattenarbeit.",
  }),
  glossaryTerm({
    slug: "fluegel",
    term: "Flügel",
    definition: "Ein Flügel ist im Enneagramm ein benachbarter Typ, der den Haupttyp färben kann.",
    why: "Flügel erklären, warum Menschen mit demselben Haupttyp sehr unterschiedlich wirken können.",
    hermetia: "Hermetia verwendet Flügel nur als weiche Nuance und nicht als starre Unterkategorie.",
  }),
  glossaryTerm({
    slug: "tritype",
    term: "Tritype",
    definition: "Tritype beschreibt eine Kombination aus drei Enneagramm-Mustern aus verschiedenen Zentren.",
    why: "Das Modell kann differenzieren, ist aber spekulativer als einfache Selbstauskunft.",
    hermetia: "Hermetia kennzeichnet Tritype als optionale Vertiefung und gewichtet es niedriger als klarere Signale.",
  }),
  glossaryTerm({
    slug: "lebensweg",
    term: "Lebensweg",
    definition: "Der Lebensweg ist eine numerologische Kernzahl aus dem Geburtsdatum.",
    why: "Er wird oft als Grundthema der persönlichen Entwicklung gelesen.",
    hermetia: "Hermetia behandelt den Lebensweg als leicht nachvollziehbares Zahlen-Signal innerhalb der Konvergenz.",
  }),
  glossaryTerm({
    slug: "namenszahl",
    term: "Namenszahl",
    definition: "Die Namenszahl entsteht aus einer Zuordnung von Buchstaben zu Zahlen.",
    why: "Sie ergänzt geburtsdatumsbasierte Numerologie um Sprache, Name und Ausdruck.",
    hermetia: "Hermetia nutzt Namenszahlen nur optional und erklärt, welche Schreibweise verwendet wurde.",
  }),
  glossaryTerm({
    slug: "pinnacle",
    term: "Pinnacle",
    definition: "Pinnacles sind numerologische Lebensphasen, die längere Entwicklungsabschnitte beschreiben.",
    why: "Sie liefern einen anderen Zeithorizont als Tages- oder Jahresimpulse.",
    hermetia: "Hermetia nutzt Pinnacles als Hintergrundthema für Seelenweg und langfristige Reflexion.",
  }),
  glossaryTerm({
    slug: "tzolkin",
    term: "Tzolkin",
    definition: "Der Tzolkin ist ein Kalenderzyklus mit Tagesenergien, Zahlen und Siegeln.",
    why: "Er wird in spirituellen Kontexten als Symbolsystem für Rhythmus und Archetypen genutzt.",
    hermetia: "Hermetia kennzeichnet Tzolkin-Deutungen als kulturell sensibles Symbolmodell und formuliert eigene Texte.",
  }),
  glossaryTerm({
    slug: "kin",
    term: "Kin",
    definition: "Ein Kin ist im Tzolkin eine Kombination aus Zahl und Siegel innerhalb des 260-Tage-Zyklus.",
    why: "Es bietet ein kompaktes Bild für Tagesqualität und persönliches Motiv.",
    hermetia: "Hermetia nutzt Kin-Signale als zusätzliche Perspektive und vermeidet absolute Aussagen über Identität.",
  }),
  glossaryTerm({
    slug: "bazi",
    term: "BaZi",
    definition: "BaZi, auch Vier Säulen genannt, ist ein System aus Jahr, Monat, Tag und Stunde der Geburt.",
    why: "Es arbeitet mit Elementen, Stämmen, Zweigen und zyklischer Zeitlogik.",
    hermetia: "Hermetia nutzt BaZi als eigenes Systemfamilien-Signal und grenzt kulturelle Deutung vorsichtig ab.",
  }),
  glossaryTerm({
    slug: "fuenf-elemente",
    term: "Fünf Elemente",
    definition: "Die Fünf Elemente beschreiben symbolische Qualitäten wie Holz, Feuer, Erde, Metall und Wasser.",
    why: "Sie tauchen in mehreren Systemen auf und eignen sich gut, um Rhythmus, Ausdruck und Balance zu beschreiben.",
    hermetia: "Hermetia zählt Element-Echos nicht mehrfach, sondern prüft, aus welchen Systemfamilien sie stammen.",
  }),
  glossaryTerm({
    slug: "nakshatra",
    term: "Nakshatra",
    definition: "Nakshatras sind Mondhäuser der vedischen Astrologie.",
    why: "Sie geben eine feinere Mondperspektive und werden oft für Temperament, Rhythmus und Motivation genutzt.",
    hermetia: "Hermetia verwendet Nakshatras mit eigener, vorsichtiger Sprache und ohne traditionelle Fachtexte zu kopieren.",
  }),
  glossaryTerm({
    slug: "dasha",
    term: "Dasha",
    definition: "Dasha-Systeme beschreiben in der vedischen Astrologie längere Zeitphasen.",
    why: "Sie eignen sich für biografische Reflexion, dürfen aber nicht als Ereigniszwang verstanden werden.",
    hermetia: "Hermetia nutzt Dashas optional als Timing-Hintergrund und kennzeichnet Unsicherheiten klar.",
  }),
  glossaryTerm({
    slug: "hexagramm",
    term: "Hexagramm",
    definition: "Ein Hexagramm ist im I Ging eine Figur aus sechs Linien mit symbolischer Bedeutung.",
    why: "Hexagramme beschreiben Wandel, Spannung, Richtung und Entscheidungssituationen.",
    hermetia: "Hermetia nutzt I-Ging-Bezüge als Reflexionsmuster und nicht als Orakelentscheidung.",
  }),
  glossaryTerm({
    slug: "linie",
    term: "Linie",
    definition: "Eine Linie ist eine einzelne Position innerhalb eines Hexagramms oder verwandten Symbolsystems.",
    why: "Linien machen ein Thema konkreter und zeigen, an welcher Stelle eines Prozesses ein Motiv gelesen wird.",
    hermetia: "Hermetia nutzt Linien als feine Nuance, wenn sie rechnerisch eindeutig bestimmbar sind.",
  }),
  glossaryTerm({
    slug: "resonanz",
    term: "Resonanz",
    definition: "Resonanz beschreibt, dass eine Aussage, ein Symbol oder ein Muster subjektiv spürbar anschließt.",
    why: "Resonanz ist wertvoll, aber kein Beweis. Sie zeigt, wo Reflexion beginnen kann.",
    hermetia: "Hermetia verbindet Resonanz mit erklärbarer Berechnung und Nutzerfeedback.",
  }),
  glossaryTerm({
    slug: "selbstreflexion",
    term: "Selbstreflexion",
    definition: "Selbstreflexion ist die bewusste Betrachtung eigener Muster, Entscheidungen und Reaktionen.",
    why: "Sie ist das eigentliche Ziel von Hermetia, wichtiger als perfekte Typen oder endgültige Antworten.",
    hermetia: "Hermetia übersetzt komplexe Systeme in Fragen, Sprache und Impulse für diese Selbstreflexion.",
  }),
  glossaryTerm({
    slug: "journaling",
    term: "Journaling",
    definition: "Journaling ist das schriftliche Festhalten von Beobachtungen, Gefühlen und Erkenntnissen.",
    why: "Es macht aus einem Impuls eine eigene Erfahrung und hilft, Muster über Zeit zu erkennen.",
    hermetia: "Hermetia verbindet Tagesimpulse mit Journaling-Fragen, Feedback und Monatsrückblicken.",
  }),
  glossaryTerm({
    slug: "einwilligung",
    term: "Einwilligung",
    definition: "Einwilligung bedeutet, dass eine Person informiert und freiwillig zustimmt, bevor sensible Daten verarbeitet werden.",
    why: "Spirituelle Profile und Beziehungsanalysen können intime Rückschlüsse enthalten.",
    hermetia: "Hermetia baut Einwilligung als Produktprinzip ein, besonders bei Beziehungsauswertungen und besonderen Daten.",
  }),
  glossaryTerm({
    slug: "datenminimierung",
    term: "Datenminimierung",
    definition: "Datenminimierung bedeutet, nur die Daten zu erfassen, die für einen klaren Zweck notwendig sind.",
    why: "Je sensibler ein Profil ist, desto wichtiger wird ein sparsamer Umgang mit Rohdaten und Ableitungen.",
    hermetia: "Hermetia trennt Eingaben, Berechnung und Deutung und soll unnötige Datenpunkte vermeiden.",
  }),
] as const;

export const articles = [
  {
    slug: "spirituelles-profiling",
    title: "Was ist spirituelles Profiling?",
    seoTitle: "Spirituelles Profiling erklärt — Chancen, Grenzen und Hermetias Ansatz",
    description: "Ein verantwortungsvoller Einstieg in spirituelle Profil-Systeme, AI-Deutung und Selbstreflexion.",
    body:
      "Spirituelles Profiling verbindet Symbolsysteme, Selbstauskunft und Reflexion. Es kann helfen, Worte für innere Muster zu finden, darf aber nicht als Diagnose oder Wahrheitssystem auftreten. Hermetia rahmt Profiling deshalb als Einladung: berechnet, erklärt, begrenzt und transparent. Der Wert liegt nicht darin, Menschen festzulegen, sondern Resonanzräume zu öffnen.",
  },
  {
    slug: "geburtszeit-unbekannt",
    title: "Geburtszeit unbekannt: Was ist trotzdem möglich?",
    seoTitle: "Geburtszeit unbekannt — welche Systeme bei Hermetia trotzdem funktionieren",
    description: "Welche Hermetia-Systeme eine genaue Uhrzeit brauchen und welche auch ohne funktionieren.",
    body:
      "Eine genaue Geburtszeit verbessert Systeme wie Aszendent, Häuser oder Human-Design-Details. Viele andere Perspektiven bleiben dennoch nutzbar: Numerologie, Tzolk'in, persönliche Jahreszyklen, Big Five, RIASEC, Ayurveda-Dosha oder Chronotyp. Hermetia kennzeichnet deshalb, welche Aussagen belastbar sind und welche mit mehr Vorsicht gelesen werden sollten.",
  },
  {
    slug: "ai-selbstreflexion",
    title: "AI in der Selbstreflexion: Chancen und Grenzen",
    seoTitle: "AI in der Selbstreflexion — wie Hermetia transparent mit KI arbeitet",
    description: "Warum AI Texte hilfreich formulieren kann, aber keine Autorität über Menschen haben sollte.",
    body:
      "AI kann komplexe Muster verständlich machen. Sie kann erklären, verdichten und Beispiele formulieren. Gleichzeitig darf sie nicht als unfehlbare Stimme auftreten. Hermetia trennt deshalb Berechnung, Konvergenz und AI-Deutung. Das Modell schreibt auf Grundlage berechneter Fakten, nicht aus freier Spekulation.",
  },
  {
    slug: "warum-ein-system-nicht-reicht",
    title: "Warum ein einzelnes System selten reicht",
    seoTitle: "Warum ein einzelnes System selten reicht — Hermetias Konvergenz-Ansatz",
    description: "Warum Hermetia Astrologie, Human Design, Fragebögen und weitere Systeme nicht einzeln, sondern im Zusammenspiel liest.",
    body:
      "Ein einzelnes System kann tief wirken, aber es bleibt in seiner eigenen Sprache gefangen. Astrologie sieht Himmelsrhythmen, Numerologie sieht Zahlenmuster, Fragebögen erfassen Selbstauskunft. Hermetia verbindet diese Perspektiven, weil tragfähige Selbsterkenntnis stärker wird, wenn unabhängige Quellen auf ähnliche Themen zeigen.",
  },
  {
    slug: "sensible-spirituelle-daten",
    title: "Warum spirituelle Profildaten sensibel sind",
    seoTitle: "Spirituelle Profildaten und Datenschutz — warum Hermetia Art. 9 ernst nimmt",
    description: "Warum weltanschauliche und spirituelle Ableitungen datenschutzrechtlich besonders sorgfältig behandelt werden müssen.",
    body:
      "Ein spirituelles Profil kann intime Aussagen über Weltbild, Selbstverständnis und Beziehungsmuster enthalten. Deshalb behandelt Hermetia diese Inhalte nicht wie harmlose Marketingdaten. Einwilligung, Verschlüsselung, Export und Löschung sind Teil des Produkts. Besonders bei Beziehungsprofilen gilt: Daten einer zweiten Person brauchen eine eigene, informierte Einwilligung.",
  },
  {
    slug: "tageshoroskop-vs-tagesimpuls",
    title: "Tageshoroskop vs. persönlicher Tagesimpuls",
    seoTitle: "Tageshoroskop vs. Tagesimpuls — warum Hermetia persönlicher arbeitet",
    description: "Der Unterschied zwischen allgemeinen Horoskopen und persönlichen Hermetia-Impulsen.",
    body:
      "Ein Tageshoroskop richtet sich meist an ein Sternzeichen und damit an Millionen Menschen. Ein persönlicher Tagesimpuls beginnt bei deinem eigenen Profil und nutzt Tagesdaten nur als Färbung. Dadurch entsteht kein allgemeiner Spruch, sondern ein Reflexionsangebot, das zu deinen Kernthemen, deinem Rhythmus und deinen wiederkehrenden Mustern passt.",
  },
  {
    slug: "seelenkarte-erstellen",
    title: "Seelenkarte erstellen: was Hermetia anders macht",
    seoTitle: "Seelenkarte erstellen — Systeme, Konvergenz und persönlicher Einstieg",
    description: "Wie aus Geburtsdaten, Selbstauskunft und Systemsignalen eine verständliche Seelenkarte entsteht.",
    body:
      "Eine Seelenkarte entsteht bei Hermetia nicht aus einem einzigen Test. Sie verbindet berechenbare Systeme, vorsichtige Selbstauskunft und die Konvergenz-Engine. Dadurch wird sichtbar, welche Themen mehrfach auftauchen und welche nur leise Nebenmotive sind. Der Einstieg soll neugierig machen: erst verstehen, dann entscheiden, welche Tiefe im bezahlten Modell sinnvoll ist.",
  },
  {
    slug: "konvergenz-statt-beliebigkeit",
    title: "Konvergenz statt Beliebigkeit",
    seoTitle: "Konvergenz statt Beliebigkeit — warum Hermetia Systeme gewichtet",
    description: "Warum mehrere ähnliche Aussagen nicht automatisch mehr Wahrheit bedeuten.",
    body:
      "Viele spirituelle Systeme wirken überzeugend, weil sie starke Sprache verwenden. Hermetia fragt zusätzlich: Kommt dieses Thema aus wirklich unabhängigen Quellen oder nur aus derselben Datenfamilie? Konvergenz schützt vor Doppelzählung und macht die Deutung belastbarer. Das Ergebnis bleibt Reflexion, wird aber nachvollziehbarer.",
  },
  {
    slug: "was-kostet-spirituelles-profil",
    title: "Was kostet ein gutes spirituelles Profil?",
    seoTitle: "Was kostet ein spirituelles Profil? — kostenloser Einstieg und Premium-Tiefe",
    description: "Warum Hermetia mit einem kostenlosen Einstieg arbeitet und welche Tiefe bezahlte Modelle schaffen.",
    body:
      "Ein gutes Profil braucht Datenqualität, Berechnung, verständliche Texte und verantwortungsvolle Grenzen. Hermetia soll deshalb kostenlos neugierig machen, aber tiefe Ebenen, Beziehungsauswertungen, Tagesbegleitung und langfristige Rückblicke in bezahlten Modellen bündeln. Der Nutzer soll erst Resonanz erleben und dann bewusst entscheiden.",
  },
  {
    slug: "warum-geburtsdaten-sensibel-sind",
    title: "Warum Geburtsdaten sensibel sind",
    seoTitle: "Geburtsdaten im spirituellen Profil — Datenschutz, Einwilligung und Grenzen",
    description: "Warum Geburtsdatum, Ort und Uhrzeit mehr sind als harmlose Formularfelder.",
    body:
      "Geburtsdaten wirken neutral, können aber sehr genaue Profilableitungen ermöglichen. In Verbindung mit spirituellen Deutungen entstehen sensible Aussagen über Identität, Weltbild und Beziehung. Hermetia behandelt diese Daten deshalb zweckgebunden, erklärbar und mit klaren Lösch- und Einwilligungswegen.",
  },
  {
    slug: "human-design-ohne-label",
    title: "Human Design ohne starre Labels lesen",
    seoTitle: "Human Design ohne starre Labels — Hermetias vorsichtiger Ansatz",
    description: "Warum Typ, Autorität und Zentren hilfreich sein können, aber nie die ganze Person erklären.",
    body:
      "Human Design kann starke Aha-Momente erzeugen. Gleichzeitig besteht die Gefahr, Menschen auf Typ, Autorität oder offene Zentren zu reduzieren. Hermetia nutzt Human Design deshalb als eine Systemfamilie unter mehreren. Was wirklich wichtig wird, zeigt sich erst, wenn andere Perspektiven ähnliche Themen bestätigen.",
  },
  {
    slug: "gene-keys-ohne-kopierte-texte",
    title: "Gene Keys ohne kopierte Texte nutzen",
    seoTitle: "Gene Keys rechtlich sauber nutzen — eigene Sprache, eigene Deutung",
    description: "Wie Hermetia Gene-Keys-inspirierte Muster verwendet, ohne geschützte Originaltexte zu übernehmen.",
    body:
      "Gene Keys sind als kontemplative Sprache wertvoll, aber viele Originalformulierungen sind geschützt. Hermetia übernimmt deshalb keine proprietären Texte. Die Plattform nutzt rechnerische Positionen und formuliert eigene, vorsichtige Reflexionssprache. So bleibt der Nutzen erhalten, ohne rechtlich geschützte Inhalte zu kopieren.",
  },
  {
    slug: "astrologie-mit-erklärbarkeit",
    title: "Astrologie mit Erklärbarkeit",
    seoTitle: "Astrologie erklärbar nutzen — Berechnung, Gewichtung und Grenzen",
    description: "Warum Hermetia astrologische Aussagen berechnet, gewichtet und in Systemfamilien einordnet.",
    body:
      "Astrologie wird stärker, wenn sie nicht nur poetisch, sondern nachvollziehbar ist. Hermetia trennt Berechnung, Gewichtung und Deutung. Planeten, Häuser und Aspekte werden erst technisch bestimmt, dann als Signale übersetzt und schließlich mit anderen Systemen verglichen.",
  },
  {
    slug: "frageboegen-als-erdung",
    title: "Warum Fragebögen Hermetia erden",
    seoTitle: "Fragebögen in Hermetia — Selbstauskunft als Erdung spiritueller Systeme",
    description: "Wie Big Five, RIASEC, Chronotyp und Dosha-Fragen die Seelenkarte alltagsnäher machen.",
    body:
      "Geburtsbasierte Systeme kennen den Alltag eines Menschen nicht. Fragebögen bringen Selbstauskunft hinein: Energie, Interessen, Werte, Rhythmus und Verhalten. Hermetia nutzt diese Antworten nicht als absolute Wahrheit, sondern als Erdung. Dadurch wird die Seelenkarte praktischer und weniger abgehoben.",
  },
  {
    slug: "beziehungsprofil-mit-consent",
    title: "Beziehungsprofil nur mit Consent",
    seoTitle: "Beziehungsprofil mit Consent — warum Hermetia Einwilligung verlangt",
    description: "Warum Beziehungsauswertungen besonders sensibel sind und nicht heimlich erstellt werden sollten.",
    body:
      "Eine Beziehungsauswertung sagt nicht nur etwas über den Nutzer, sondern auch über eine zweite Person. Deshalb braucht sie besondere Sorgfalt. Hermetia setzt auf informierte Einwilligung, transparente Zwecke und klare Grenzen. Resonanz und Reibung können hilfreich sein, aber niemals ohne Respekt vor der anderen Person.",
  },
  {
    slug: "spirituelle-app-ohne-angstmarketing",
    title: "Spirituelle App ohne Angstmarketing",
    seoTitle: "Spirituelle App ohne Angstmarketing — Hermetias Produktethik",
    description: "Warum Hermetia keine Angst, Abhängigkeit oder FOMO als Conversion-Hebel nutzen soll.",
    body:
      "Viele spirituelle Produkte verkaufen Dringlichkeit: verpasste Chancen, Schicksal, Warnungen oder karmische Angst. Hermetia soll anders funktionieren. Die Website darf neugierig machen und zur Anmeldung führen, aber nicht manipulieren. Gute Conversion entsteht durch Klarheit, Resonanz und Vertrauen.",
  },
  {
    slug: "seo-fuer-spirituelle-systeme",
    title: "SEO für spirituelle Systeme",
    seoTitle: "SEO für spirituelle Systeme — warum Hermetia Glossar, Wissen und Vergleiche baut",
    description: "Warum Longtail-Seiten zu Systemen, Begriffen und Vergleichen nachhaltige Reichweite schaffen.",
    body:
      "Menschen suchen selten sofort nach einer neuen Plattform. Sie suchen nach Begriffen: Was ist Human Design? Was bedeutet innere Autorität? Was ist der Unterschied zu Astrologie? Hermetia baut deshalb ein Wissensfundament aus Systemseiten, Glossar, Artikeln und Vergleichen. Jede Seite soll helfen und zugleich elegant zur Anmeldung führen.",
  },
  {
    slug: "aeo-geo-und-ai-suche",
    title: "AEO, GEO und AI-Suche für Hermetia",
    seoTitle: "AEO und GEO für Hermetia — Inhalte für Suchmaschinen und AI-Antworten",
    description: "Wie klare Antworten, FAQ-Struktur und Begriffserklärungen Hermetia in AI-Suchen sichtbarer machen.",
    body:
      "AI-Suchsysteme bevorzugen klare, gut strukturierte Antworten. Hermetia braucht deshalb Seiten, die Begriffe direkt erklären, Grenzen benennen und interne Zusammenhänge sauber verlinken. Glossar, FAQ, Vergleichsseiten und Pillar-Content liefern genau diese Antwortbausteine.",
  },
  {
    slug: "premium-modell-sinnvoll-waehlen",
    title: "Welches Hermetia-Modell passt zu mir?",
    seoTitle: "Hermetia Premium-Modell wählen — wann sich bezahlte Tiefe lohnt",
    description: "Welche Nutzer vom kostenlosen Einstieg profitieren und wann ein bezahltes Modell sinnvoll wird.",
    body:
      "Der kostenlose Einstieg zeigt, ob Hermetia resoniert. Ein bezahltes Modell wird sinnvoll, wenn Nutzer mehr Tiefe wollen: zusätzliche Ebenen, Beziehungsauswertungen, Tagesimpulse, Journaling-Verlauf oder langfristige Rückblicke. Die Website sollte diese Entscheidung nicht erzwingen, sondern gut erklären.",
  },
  {
    slug: "warum-hermetia-keine-therapie-ist",
    title: "Warum Hermetia keine Therapie ist",
    seoTitle: "Hermetia ist keine Therapie — klare Grenzen für spirituelle Selbstreflexion",
    description: "Warum Hermetia inspirieren kann, aber keine medizinische, psychologische oder therapeutische Behandlung ersetzt.",
    body:
      "Hermetia kann Sprache für Muster geben, aber keine Therapie ersetzen. Die Plattform stellt keine Diagnosen, behandelt keine Erkrankungen und trifft keine Entscheidungen für Nutzer. Diese Grenze ist rechtlich und ethisch wichtig. Gerade deshalb kann Hermetia als Reflexionsraum wertvoll sein.",
  },
] as const;

export const comparisons = [
  {
    slug: "human-design-vs-gene-keys",
    title: "Human Design vs. Gene Keys",
    seoTitle: "Human Design vs. Gene Keys — Unterschiede, Gemeinsamkeiten und Hermetia",
    description: "Beide Systeme teilen eine Grundlage, lesen sie aber unterschiedlich.",
    body:
      "Human Design beschreibt Energie, Entscheidung und Zentren. Gene Keys beschreibt Archetypen, Reifung und Kontemplation. Beide teilen astronomische Grundlagen, aber nicht dieselbe Sprache. Hermetia nutzt beide nicht als doppelte Bestätigung, sondern als verwandte Perspektiven innerhalb einer Systemfamilie.",
  },
  {
    slug: "astrologie-vs-human-design",
    title: "Astrologie vs. Human Design",
    seoTitle: "Astrologie vs. Human Design — was zeigt welches System?",
    description: "Wie sich Horoskop und Bodygraph unterscheiden und warum Hermetia beide nutzt.",
    body:
      "Astrologie zeigt Himmelspositionen als Charakter-, Timing- und Beziehungssprache. Human Design übersetzt ähnliche Rohdaten in Typ, Autorität und Energiezentren. Hermetia nutzt beide Perspektiven, achtet aber darauf, gemeinsame Datenquellen nicht naiv doppelt zu zählen.",
  },
  {
    slug: "big-five-vs-enneagramm",
    title: "Big Five vs. Enneagramm",
    seoTitle: "Big Five vs. Enneagramm — Psychologie und Motivation im Vergleich",
    description: "Big Five misst Persönlichkeitseigenschaften, Enneagramm deutet Motivationsmuster. Hermetia nutzt beide unterschiedlich.",
    body:
      "Big Five beschreibt Persönlichkeitsdimensionen wie Offenheit, Gewissenhaftigkeit oder Neurotizismus. Das Enneagramm fragt stärker nach Motivation und innerem Grundmuster. Hermetia nutzt Big Five als wissenschaftlicheren Erdungsanker und das Enneagramm als reflektierende Typologie, ohne eines der beiden Systeme als alleinige Wahrheit zu behandeln.",
  },
  {
    slug: "tageshoroskop-vs-hermetia",
    title: "Tageshoroskop vs. Hermetia Tagesimpuls",
    seoTitle: "Tageshoroskop vs. Hermetia Tagesimpuls — allgemein oder persönlich?",
    description: "Warum Hermetias Tagesimpulse vom persönlichen Profil ausgehen und nicht nur vom Sternzeichen.",
    body:
      "Das Tageshoroskop startet meist beim Sonnenzeichen. Hermetia startet beim ganzen Profil: Kernthemen, Konvergenz, Rhythmus und optional Tagesdaten. Deshalb ist der Impuls weniger plakativ, aber persönlicher. Er soll nicht vorhersagen, sondern eine sinnvolle Reflexionsfrage für den Tag anbieten.",
  },
  {
    slug: "astrologie-vs-numerologie",
    title: "Astrologie vs. Numerologie",
    seoTitle: "Astrologie vs. Numerologie — Himmelssprache und Zahlenmuster im Vergleich",
    description: "Astrologie arbeitet mit Himmelspositionen, Numerologie mit Zahlen aus Datum und Name. Hermetia verbindet beide vorsichtig.",
    body:
      "Astrologie ist zeit- und ortsbezogen, Numerologie arbeitet stärker mit einfachen Zahlenmustern. Beide können persönliche Themen beleuchten, aber aus sehr unterschiedlichen Datenquellen. Hermetia nutzt genau diesen Unterschied: Wenn beide unabhängig ähnliche Motive zeigen, steigt die Konvergenz eines Kernthemas.",
  },
  {
    slug: "enneagramm-vs-human-design",
    title: "Enneagramm vs. Human Design",
    seoTitle: "Enneagramm vs. Human Design — Motivation und Energie im Vergleich",
    description: "Das Enneagramm fragt nach innerer Motivation, Human Design nach Energie, Autorität und Bodygraph.",
    body:
      "Das Enneagramm ist stark, wenn es um Schutzstrategien, Sehnsüchte und automatische Muster geht. Human Design beschreibt Energiefluss, Entscheidung und Zentren. Hermetia nutzt beide Systeme unterschiedlich: Motivation und Energie werden getrennt gelesen und erst danach miteinander verbunden.",
  },
  {
    slug: "bazi-vs-astrologie",
    title: "BaZi vs. westliche Astrologie",
    seoTitle: "BaZi vs. westliche Astrologie — Vier Säulen und Horoskop im Vergleich",
    description: "BaZi und westliche Astrologie nutzen Geburtszeit, lesen Zeitqualität aber mit unterschiedlicher Logik.",
    body:
      "BaZi arbeitet mit Säulen, Elementen und zyklischer Kalenderlogik. Westliche Astrologie berechnet Planetenpositionen, Häuser und Aspekte. Beide sind zeitbasierte Systeme, aber sie sprechen verschiedene Sprachen. Hermetia behandelt sie deshalb als getrennte Familien, damit echte Überschneidungen sichtbar werden.",
  },
  {
    slug: "big-five-vs-human-design",
    title: "Big Five vs. Human Design",
    seoTitle: "Big Five vs. Human Design — Selbstauskunft und Geburtsdaten im Vergleich",
    description: "Big Five basiert auf Selbstauskunft, Human Design auf Geburtsdaten. Hermetia nutzt beide als unterschiedliche Evidenzarten.",
    body:
      "Big Five fragt nach erlebtem Verhalten. Human Design berechnet ein symbolisches Profil aus Geburtsdaten. Hermetia verbindet beide, weil sie unterschiedliche Perspektiven liefern: Was zeigt sich im Alltag, und welches Symbolmuster wiederholt sich rechnerisch?",
  },
  {
    slug: "tagesimpuls-vs-journaling-app",
    title: "Hermetia Tagesimpuls vs. Journaling-App",
    seoTitle: "Hermetia Tagesimpuls vs. Journaling-App — Impuls und Reflexion verbinden",
    description: "Klassische Journaling-Apps speichern Gedanken, Hermetia gibt zusätzlich profilbasierte Reflexionsimpulse.",
    body:
      "Eine Journaling-App beginnt meist mit einer leeren Seite. Hermetia beginnt mit einem persönlichen Impuls aus Profil, Rhythmus und Tagesqualität. Der Wert entsteht in der Kombination: ein stimmiger Fokus, eine gute Frage und die Möglichkeit, über Zeit Muster zu erkennen.",
  },
  {
    slug: "seelenkarte-vs-persoenlichkeitstest",
    title: "Seelenkarte vs. Persönlichkeitstest",
    seoTitle: "Seelenkarte vs. Persönlichkeitstest — warum Hermetia mehrschichtig arbeitet",
    description: "Persönlichkeitstests messen Antworten. Eine Seelenkarte verbindet Antworten, Geburtsdaten und Systemkonvergenz.",
    body:
      "Ein Persönlichkeitstest ist oft schnell und klar, aber auf Selbstauskunft begrenzt. Eine Seelenkarte kombiniert Selbstauskunft mit berechneten Systemen und Konvergenz. Dadurch entsteht kein objektives Urteil, sondern ein mehrschichtiges Reflexionsbild.",
  },
  {
    slug: "kostenloses-horoskop-vs-hermetia",
    title: "Kostenloses Horoskop vs. Hermetia",
    seoTitle: "Kostenloses Horoskop vs. Hermetia — warum ein Profil mehr kann",
    description: "Kostenlose Horoskope liefern schnelle Deutung. Hermetia baut daraus eine langfristige, erklärbare Profilreise.",
    body:
      "Ein kostenloses Horoskop kann ein guter Einstieg sein. Hermetia geht weiter: Es verbindet viele Systeme, erklärt Konvergenz, nutzt Feedback und baut daraus eine fortlaufende Reise. Deshalb ist der kostenlose Einstieg nur der Anfang, während bezahlte Modelle echte Tiefe freischalten.",
  },
  {
    slug: "oracle-cards-vs-tagesimpuls",
    title: "Oracle Cards vs. Hermetia Tagesimpuls",
    seoTitle: "Oracle Cards vs. Hermetia Tagesimpuls — Intuition und Profilbezug im Vergleich",
    description: "Oracle Cards arbeiten intuitiv, Hermetia Tagesimpulse verbinden Intuition mit Profil- und Timingdaten.",
    body:
      "Oracle Cards können einen guten Tagesfokus geben, bleiben aber oft zufällig oder deckabhängig. Hermetia nutzt intuitive Motive nur als eine Schicht. Der eigentliche Tagesimpuls entsteht aus deinem Profil, wiederkehrenden Kernthemen und aktuellen Signalen.",
  },
] as const;

export function getPillarPage(key: string, locale: Locale): ContentPage | undefined {
  const page = pillarPages[key];
  if (!page) return undefined;
  return locale === "en" ? page.en : page.de;
}


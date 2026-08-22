// Vergleichsseiten mit echtem, seitenspezifischem Inhalt.
//
// Vorgeschichte: Die Vergleichsseiten bestanden aus einem Template mit rund 120
// individuellen Wörtern. Gemessen am 22.08.2026 waren 85 % des Textes von
// "Human Design vs. Gene Keys" wortgleich identisch mit "BaZi vs. Astrologie" —
// beide Seiten exakt 815 Wörter. Für Google sind das zwölf nahezu identische
// Seiten, für ein Sprachmodell zwölfmal derselbe Absatz.
//
// Keyword-Einbindung, bewusst an der tatsächlichen Nachfrage ausgerichtet
// (Google Suggest DE, 22.08.2026):
//
//   "unterschied human design und astrologie"   ← deutsche Nutzer schreiben
//   "unterschied human design gene keys"          "Unterschied", nicht "vs"
//   "unterschied human design und numerologie"
//   "human design vs astrology"                 ← englische Nutzer schreiben "vs"
//   "human design vs mbti"
//
// Daraus folgt der Aufbau jeder Seite:
//   seoTitle   trägt die Suchformulierung wörtlich
//   question   ist die H1 — die Frage, die gestellt wird
//   answer     beantwortet sie in zwei bis drei Sätzen, direkt unter der H1
//              (Featured-Snippet-Kandidat und der Absatz, den LLMs zitieren)
//   table      strukturierter Vergleich; Google zieht Tabellen in Snippets
//   sections   echte, seitenspezifische Abschnitte statt Textbausteinen
//   decide     Entscheidungshilfe — die eigentliche Frage hinter dem Vergleich
//   faq        die realen Folgefragen, mit FAQPage-Schema
//
// Nicht jede Seite braucht alle Felder. Seiten ohne `answer` fallen im Rendering
// auf die frühere Darstellung zurück.

export type ComparisonRow = {
  aspect: string;
  a: string;
  b: string;
};

export type ComparisonDetail = {
  slug: string;
  /** H1 — als Frage formuliert, weil so gesucht wird. */
  question: string;
  /** Zwei bis drei Sätze, die für sich allein stehen. Snippet- und Zitat-Kandidat. */
  answer: string;
  /** Spaltenüberschriften der Vergleichstabelle. */
  columns: [string, string];
  table: ComparisonRow[];
  sections: { title: string; body: string }[];
  decide: { when: string; pick: string; why: string }[];
  faq: { q: string; a: string }[];
};

export const comparisonDetails: ComparisonDetail[] = [
  {
    slug: "human-design-vs-gene-keys",
    question: "Was ist der Unterschied zwischen Human Design und Gene Keys?",
    answer:
      "Human Design und Gene Keys rechnen mit denselben Geburtsdaten und denselben 64 Hexagrammen des I Ching, lesen sie aber unterschiedlich. Human Design beschreibt, wie du Entscheidungen triffst und wo deine Energie verlässlich arbeitet — Typ, Autorität, definierte und offene Zentren. Gene Keys nimmt dieselben Zahlen und beschreibt einen Reifungsweg: Zu jedem Schlüssel gehören ein Schatten, eine Gabe und ein Siddhi, also drei Stufen desselben Themas.",
    columns: ["Human Design", "Gene Keys"],
    table: [
      {
        aspect: "Entstanden",
        a: "1987 durch Ra Uru Hu (Alan Krakower)",
        b: "2000er Jahre durch Richard Rudd, aufbauend auf Human Design",
      },
      {
        aspect: "Datenbasis",
        a: "Geburtsdatum, -zeit und -ort; Planetenpositionen zur Geburt und rund 88 Tage davor",
        b: "Dieselben Berechnungen — die Zahlen im Profil sind identisch",
      },
      {
        aspect: "Kernfrage",
        a: "Wie triffst du Entscheidungen, die zu dir passen?",
        b: "Woran wächst du, und wohin führt dieses Thema?",
      },
      {
        aspect: "Zentrale Begriffe",
        a: "Typ, Strategie, Autorität, Zentren, Kanäle, Tore, Profil",
        b: "Schatten, Gabe, Siddhi, Aktivierungssequenz, Venus-Sequenz, Perlensequenz",
      },
      {
        aspect: "Grundhaltung",
        a: "Mechanisch beschreibend — hier ist dein Bauplan, experimentiere damit",
        b: "Kontemplativ — nimm dir Zeit mit einem Schlüssel, er entfaltet sich über Jahre",
      },
      {
        aspect: "Zeithorizont",
        a: "Alltagstauglich: Strategie und Autorität lassen sich sofort ausprobieren",
        b: "Langsam: Die Arbeit an einer Sequenz ist auf Monate bis Jahre angelegt",
      },
      {
        aspect: "Typisches Missverständnis",
        a: "Der Typ sei eine Persönlichkeitskategorie — gemeint ist ein Entscheidungsmechanismus",
        b: "Der Schatten sei etwas Schlechtes — er ist die unentfaltete Form derselben Anlage",
      },
    ],
    sections: [
      {
        title: "Warum die Zahlen identisch sind, die Deutung aber nicht",
        body: "Beide Systeme lesen die Positionen von Sonne, Mond, Planeten und Mondknoten zu zwei Zeitpunkten: dem Geburtsmoment und einem Punkt rund 88 Sonnengrade davor. Diese Positionen werden auf die 64 Hexagramme des I Ching abgebildet. Wer in Human Design das Tor 25 aktiviert hat, hat in den Gene Keys den Schlüssel 25 — dieselbe Zahl, dieselbe Rechnung. Unterschiedlich ist erst die Sprache darüber: Human Design fragt, wie dieses Tor im Schaltplan wirkt und ob es Teil eines durchgehenden Kanals ist. Gene Keys fragt, in welcher Stufe du dieses Thema gerade lebst.",
      },
      {
        title: "Human Design: Entscheidungen statt Beschreibung",
        body: "Der praktische Kern von Human Design ist schmal und deshalb brauchbar: Typ und Autorität. Der Typ sagt, wie Energie bei dir grundsätzlich in die Welt kommt — abwartend und reagierend, initiierend, anstoßend oder beobachtend. Die Autorität sagt, woran du eine Entscheidung festmachst: an einer körperlichen Reaktion, an einem Gefühl, das über Zeit klarer wird, an einem Impuls im Moment. Alles Weitere — Zentren, Kanäle, Profil — ist Feinzeichnung. Wer Human Design ausprobieren will, braucht davon zunächst nichts.",
      },
      {
        title: "Gene Keys: dieselbe Anlage in drei Stufen",
        body: "Gene Keys verschiebt die Frage von „wie funktioniert das“ zu „wohin entwickelt sich das“. Jeder der 64 Schlüssel hat drei Ausprägungen: den Schatten als die zusammengezogene, angstgetriebene Form, die Gabe als die gelöste, brauchbare Form und das Siddhi als ihre äußerste Zuspitzung. Entscheidend ist, dass es sich um dieselbe Anlage handelt, nicht um drei verschiedene Dinge. Wer seinen Schatten kennt, kennt damit auch die Richtung seiner Gabe — es ist dieselbe Energie in anderer Verfassung.",
      },
      {
        title: "Wo beide Systeme an ihre Grenze kommen",
        body: "Weil beide auf derselben Rechnung beruhen, bestätigen sie einander zwangsläufig. Das fühlt sich nach Übereinstimmung an, ist aber keine: Zwei Deutungen derselben Zahl sind kein zweiter Beleg. Genau hier setzt Astrakey an — Human Design und Gene Keys gehören zur selben Systemfamilie und werden bei der Konvergenzprüfung nicht doppelt gezählt. Ein Thema gilt erst dann als belastbar, wenn es auch aus einer unabhängigen Datenquelle auftaucht, etwa aus einem Fragebogen oder einem System mit anderer Grundlage.",
      },
    ],
    decide: [
      {
        when: "Du willst etwas ausprobieren, das im Alltag sofort wirkt",
        pick: "Human Design",
        why: "Strategie und Autorität sind in einem Satz erklärt und lassen sich an konkreten Entscheidungen testen.",
      },
      {
        when: "Du steckst an einem wiederkehrenden Muster fest",
        pick: "Gene Keys",
        why: "Die Schatten-Gabe-Achse gibt dem Muster einen Namen und eine Richtung, statt es nur zu beschreiben.",
      },
      {
        when: "Du willst wissen, was wirklich zu dir gehört",
        pick: "Keines von beiden allein",
        why: "Beide lesen dieselben Zahlen. Ein Thema wird erst dann belastbar, wenn es auch aus einer unabhängigen Quelle auftaucht.",
      },
    ],
    faq: [
      {
        q: "Sind Human Design und Gene Keys dasselbe?",
        a: "Nein, aber sie teilen die Berechnung. Richard Rudd entwickelte die Gene Keys aus dem Human-Design-System heraus. Die Zahlen in beiden Profilen sind identisch, die Deutung ist es nicht: Human Design beschreibt Mechanik, Gene Keys beschreibt Entwicklung.",
      },
      {
        q: "Womit sollte ich anfangen?",
        a: "Mit Human Design, wenn du etwas Konkretes ausprobieren willst — Typ und Autorität sind schnell verstanden und im Alltag prüfbar. Mit Gene Keys, wenn dich weniger interessiert, wie du funktionierst, als woran du gerade wächst.",
      },
      {
        q: "Widersprechen sich Human Design und Gene Keys?",
        a: "Selten, und das ist eher ein Nachteil als ein Vorteil. Weil beide dieselbe Rechnung lesen, bestätigen sie einander fast zwangsläufig. Zwei Deutungen derselben Zahl sind kein doppelter Beleg.",
      },
      {
        q: "Brauche ich meine genaue Geburtszeit?",
        a: "Für beide ja. Die schnell laufenden Faktoren, vor allem der Mond, wechseln ihre Position innerhalb von Stunden. Bei unbekannter Geburtszeit bleiben die langsamen Aktivierungen aussagekräftig, Zentren und Autorität dagegen unsicher — Astrakey kennzeichnet solche Aussagen entsprechend.",
      },
      {
        q: "Was bedeutet der Schatten in den Gene Keys?",
        a: "Der Schatten ist nicht der schlechte Teil von dir, sondern dieselbe Anlage in ihrer zusammengezogenen Form. Schlüssel 25 zum Beispiel trägt den Schatten der Einengung und die Gabe der Annahme — es ist dieselbe Fähigkeit, einmal unter Druck und einmal gelöst.",
      },
    ],
  },
  {
    slug: "astrologie-vs-human-design",
    question: "Was ist der Unterschied zwischen Human Design und Astrologie?",
    answer:
      "Beide lesen dieselben Himmelspositionen zum Zeitpunkt deiner Geburt, ziehen daraus aber verschiedene Schlüsse. Die Astrologie deutet Planeten in Tierkreiszeichen und Häusern und beschreibt Charakter, Themen und Zeitqualität. Human Design übersetzt dieselben Positionen in die 64 Hexagramme des I Ching und leitet daraus einen Entscheidungsmechanismus ab: Typ, Autorität und Energiezentren.",
    columns: ["Astrologie", "Human Design"],
    table: [
      {
        aspect: "Alter",
        a: "Über zweitausend Jahre; die hellenistische Tradition ab etwa 100 v. Chr.",
        b: "1987 — jünger als die meisten seiner Nutzer",
      },
      {
        aspect: "Was berechnet wird",
        a: "Planetenpositionen im Tierkreis, Häuser, Aspekte zwischen den Planeten",
        b: "Dieselben Positionen, übersetzt in 64 Tore; zusätzlich ein zweiter Zeitpunkt 88 Tage vor der Geburt",
      },
      {
        aspect: "Was beschrieben wird",
        a: "Charakterzüge, Lebensthemen, Beziehungen, Timing über Transite",
        b: "Wie du Entscheidungen triffst und wo Energie konstant oder wechselhaft ist",
      },
      {
        aspect: "Sprache",
        a: "Bildhaft und deutungsoffen — Mars im Widder liest sich je nach Kontext anders",
        b: "Mechanisch und binär — ein Zentrum ist definiert oder offen, dazwischen gibt es nichts",
      },
      {
        aspect: "Zeitbezug",
        a: "Stark: Transite, Progressionen und Profektionen beschreiben laufende Phasen",
        b: "Schwach: Das Chart ist statisch, Transite spielen eine untergeordnete Rolle",
      },
      {
        aspect: "Einstiegshürde",
        a: "Hoch — Zeichen, Häuser, Aspekte und Herrscher greifen ineinander",
        b: "Niedrig — Typ und Autorität sind in wenigen Sätzen erklärt",
      },
      {
        aspect: "Geburtszeit nötig",
        a: "Für Aszendent und Häuser ja, für Sonne und äußere Planeten nicht",
        b: "Ja, weitgehend — Autorität und Zentren hängen an schnellen Faktoren",
      },
    ],
    sections: [
      {
        title: "Dieselben Rohdaten, zwei verschiedene Übersetzungen",
        body: "Wer sein Human-Design-Chart neben sein Geburtshoroskop legt, findet dieselben Planeten an denselben Graden. Der Unterschied entsteht im nächsten Schritt. Die Astrologie ordnet einen Grad einem Tierkreiszeichen und einem Haus zu und fragt, was Mars in diesem Zeichen über Antrieb und Konflikt sagt. Human Design ordnet denselben Grad einem der 64 Tore zu und fragt, ob dieses Tor mit einem Gegenstück einen durchgehenden Kanal bildet. Aus derselben Zahl wird einmal eine Charakterbeschreibung und einmal ein Schaltplan.",
      },
      {
        title: "Warum Human Design sich eindeutiger anfühlt",
        body: "Human Design gibt binäre Antworten: Ein Zentrum ist definiert oder offen, eine Autorität ist emotional oder sakral. Diese Eindeutigkeit ist ein Teil des Reizes — sie ist aber eine Eigenschaft der Darstellung, nicht ein Beweis für höhere Genauigkeit. Die Astrologie arbeitet mit Abstufungen: Ein Aspekt kann eng oder weit sein, ein Planet stark oder schwach gestellt. Das wirkt unschärfer, bildet aber ab, dass Anlagen selten Schalter sind. Beide Darstellungsweisen haben ihren Preis.",
      },
      {
        title: "Wofür die Astrologie das bessere Werkzeug ist",
        body: "Zeit. Die Astrologie hat mit Transiten, Progressionen und Profektionen ein ausgearbeitetes Instrumentarium für die Frage, warum sich eine bestimmte Phase gerade so anfühlt. Human Design kennt zwar Transite, macht aber wenig daraus — das Chart ist als Bauplan gedacht, nicht als Kalender. Wer verstehen will, warum ein Jahr anders läuft als das davor, findet in der Astrologie deutlich mehr Substanz.",
      },
      {
        title: "Wofür Human Design das bessere Werkzeug ist",
        body: "Entscheidungen. Die Empfehlung „warte auf eine Reaktion, bevor du zusagst“ oder „nimm dir Zeit, bis das Gefühl klar ist“ lässt sich morgen ausprobieren und an konkreten Situationen prüfen. Die Astrologie liefert selten so unmittelbar handhabbare Anweisungen — ihre Stärke liegt im Verstehen, nicht im Ausprobieren. Wer etwas Konkretes für den Alltag sucht, kommt mit Human Design schneller ins Tun.",
      },
      {
        title: "Was passiert, wenn beide dasselbe sagen",
        body: "Wenig. Beide beruhen auf denselben Planetenpositionen und gehören bei Astrakey deshalb zur selben Systemfamilie. Wenn dein Horoskop und dein Bodygraph beide auf ein Thema zeigen, ist das keine Bestätigung aus zwei Richtungen, sondern zweimal dieselbe Richtung. Belastbar wird ein Thema erst, wenn es auch dort auftaucht, wo nicht mit Geburtsdaten gerechnet wird — etwa in einem Fragebogen zu tatsächlichem Verhalten.",
      },
    ],
    decide: [
      {
        when: "Du willst verstehen, warum diese Lebensphase so ist, wie sie ist",
        pick: "Astrologie",
        why: "Transite und Profektionen sind dafür gemacht. Human Design hat für Zeitfragen kaum etwas anzubieten.",
      },
      {
        when: "Du willst eine konkrete Regel, die du morgen testen kannst",
        pick: "Human Design",
        why: "Strategie und Autorität sind Handlungsanweisungen und lassen sich an echten Entscheidungen überprüfen.",
      },
      {
        when: "Du kennst deine Geburtszeit nicht",
        pick: "Astrologie",
        why: "Sonne, äußere Planeten und viele Aspekte bleiben aussagekräftig. Bei Human Design werden Autorität und Zentren unsicher.",
      },
      {
        when: "Du willst wissen, was von beidem bei dir wirklich zutrifft",
        pick: "Ein Profil über mehrere Systemfamilien",
        why: "Beide lesen dieselben Positionen. Ein Thema wird erst belastbar, wenn eine unabhängige Quelle es stützt.",
      },
    ],
    faq: [
      {
        q: "Ist Human Design dasselbe wie Astrologie?",
        a: "Nein, aber es baut darauf auf. Human Design nutzt dieselben astronomisch berechneten Planetenpositionen und übersetzt sie in ein eigenes System aus 64 Toren, neun Zentren und vier Typen. Die Rohdaten sind identisch, die Deutungssprache ist es nicht.",
      },
      {
        q: "Was ist genauer, Astrologie oder Human Design?",
        a: "Keines von beidem ist im wissenschaftlichen Sinn genau. Human Design wirkt präziser, weil es binäre Aussagen macht — definiert oder offen. Diese Eindeutigkeit stammt aber aus der Darstellungsform, nicht aus einer besseren Datenbasis.",
      },
      {
        q: "Kann mein Human-Design-Typ meinem Sternzeichen widersprechen?",
        a: "Ja, und das ist normal. Das Sternzeichen beschreibt nur die Sonnenposition, der Typ ergibt sich aus der Verschaltung der Zentren. Zwei verschiedene Fragen können verschiedene Antworten haben, ohne dass eine davon falsch ist.",
      },
      {
        q: "Brauche ich für beides meine genaue Geburtszeit?",
        a: "Für Human Design weitgehend ja. In der Astrologie hängen Aszendent und Häuser an der Uhrzeit, Sonne und äußere Planeten dagegen nicht — ein Horoskop ohne Geburtszeit ist also eingeschränkt, aber nicht wertlos.",
      },
      {
        q: "Welches System eignet sich für den Einstieg?",
        a: "Human Design, wenn du schnell etwas Anwendbares willst. Astrologie, wenn du bereit bist, dich einzulesen — sie ist reichhaltiger, verlangt aber mehr Vorwissen, bevor sie nützlich wird.",
      },
    ],
  },
  {
    slug: "astrologie-vs-numerologie",
    question: "Was ist der Unterschied zwischen Astrologie und Numerologie?",
    answer:
      "Die Astrologie berechnet, wo Sonne, Mond und Planeten zum Zeitpunkt deiner Geburt tatsächlich standen — das ist Astronomie, überprüfbar auf die Bogenminute. Die Numerologie rechnet mit den Ziffern deines Geburtsdatums und den Buchstaben deines Namens: Sie werden zu einstelligen Zahlen zusammengezählt und diesen Zahlen wird Bedeutung zugeschrieben. Die Astrologie braucht Geburtszeit und -ort, die Numerologie kommt mit dem Datum aus.",
    columns: ["Astrologie", "Numerologie"],
    table: [
      {
        aspect: "Womit gerechnet wird",
        a: "Tatsächliche Himmelspositionen, astronomisch berechnet",
        b: "Ziffern des Geburtsdatums, Buchstabenwerte des Namens",
      },
      {
        aspect: "Was du brauchst",
        a: "Datum, Uhrzeit und Ort — ohne Zeit fehlen Aszendent und Häuser",
        b: "Nur das Geburtsdatum; für Namenszahlen zusätzlich die Schreibweise",
      },
      {
        aspect: "Nachprüfbarkeit der Rechnung",
        a: "Hoch — jede Position lässt sich gegen astronomische Daten prüfen",
        b: "Hoch, aber trivial — es ist eine Quersumme",
      },
      {
        aspect: "Zahl der Grundbausteine",
        a: "Zehn Himmelskörper, zwölf Zeichen, zwölf Häuser, Aspekte dazwischen",
        b: "Neun Zahlen plus die Meisterzahlen 11, 22 und 33",
      },
      {
        aspect: "Auflösung",
        a: "Sehr fein — zwei Menschen desselben Tages haben verschiedene Charts",
        b: "Grob — alle am selben Tag Geborenen teilen dieselbe Lebenszahl",
      },
      {
        aspect: "Zeitbezug",
        a: "Ausgearbeitet: Transite und Progressionen beschreiben laufende Phasen",
        b: "Vorhanden: persönliches Jahr, persönlicher Monat",
      },
      {
        aspect: "Verbreitete Systeme",
        a: "Tropisch und siderisch; verschiedene Häusersysteme",
        b: "Pythagoreisch und chaldäisch — sie liefern für denselben Namen andere Zahlen",
      },
    ],
    sections: [
      {
        title: "Der entscheidende Unterschied liegt in der Auflösung",
        body: "Die Lebenszahl ist die Quersumme deines Geburtsdatums. Alle Menschen, die am selben Tag geboren wurden, haben dieselbe — weltweit rund 400.000 pro Tag. Ein Geburtshoroskop dagegen unterscheidet sich schon bei zwei Menschen desselben Tages deutlich, weil Mond und Aszendent sich innerhalb von Stunden weiterbewegen. Das macht die Astrologie nicht automatisch treffender, aber es macht sie spezifischer: Sie kann überhaupt zwischen zwei Personen unterscheiden, wo die Lebenszahl es nicht kann.",
      },
      {
        title: "Was an der Numerologie historisch belegt ist und was nicht",
        body: "Die Numerologie wird oft auf Pythagoras zurückgeführt. Für diese Zuschreibung gibt es keine belastbare Quelle — sie stammt aus dem 19. und frühen 20. Jahrhundert, nicht aus der Antike. Zahlensymbolik ist sehr alt und in vielen Kulturen belegt; die Systeme, die heute als Numerologie verkauft werden, sind es nicht. Astrakey nennt diese Herkunft offen, statt eine Traditionslinie zu behaupten, die sich nicht halten lässt. Das nimmt dem System nichts an Nutzen als Reflexionsangebot, ordnet es aber ehrlich ein.",
      },
      {
        title: "Wo die Numerologie praktisch im Vorteil ist",
        body: "Sie funktioniert ohne Geburtszeit. Wer seine Uhrzeit nicht kennt — und das betrifft mehr Menschen, als man denkt —, verliert in der Astrologie den Aszendenten, die Häuser und oft die genaue Mondposition. Die Lebenszahl bleibt davon unberührt. Für einen ersten Einstieg ohne Papierkram ist das ein echter Vorteil, und es ist der Grund, warum Astrakey die Numerologie bei fehlender Geburtszeit stärker gewichtet als die zeitabhängigen Faktoren.",
      },
      {
        title: "Warum beide zusammen mehr sagen als jedes für sich",
        body: "Astrologie und Numerologie rechnen mit demselben Geburtsdatum, aber auf grundsätzlich verschiedene Weise: einmal über tatsächliche Himmelspositionen, einmal über Ziffernarithmetik. Sie gehören bei Astrakey deshalb zu verschiedenen Systemfamilien. Wenn beide auf dasselbe Thema zeigen, ist das ein stärkeres Signal als zwei Deutungen derselben Rechnung — anders als bei Astrologie und Human Design, die auf identischen Positionen beruhen.",
      },
    ],
    decide: [
      {
        when: "Du kennst deine Geburtszeit nicht",
        pick: "Numerologie",
        why: "Sie braucht nur das Datum. Ein Horoskop ohne Uhrzeit verliert Aszendent, Häuser und oft den genauen Mond.",
      },
      {
        when: "Du willst etwas, das nur auf dich zutrifft",
        pick: "Astrologie",
        why: "Die Lebenszahl teilst du mit allen, die am selben Tag geboren wurden. Dein Chart nicht.",
      },
      {
        when: "Du willst verstehen, warum dieses Jahr anders läuft",
        pick: "Beide, aber unterschiedlich tief",
        why: "Die Astrologie hat mit Transiten das genauere Instrument; das persönliche Jahr der Numerologie ist gröber, aber schnell verstanden.",
      },
    ],
    faq: [
      {
        q: "Was ist die Lebenszahl und wie wird sie berechnet?",
        a: "Alle Ziffern des Geburtsdatums werden addiert und so lange quersummiert, bis eine einstellige Zahl übrig bleibt — außer bei 11, 22 und 33, die als Meisterzahlen stehen bleiben. Der 17.04.1990 ergibt 1+7+0+4+1+9+9+0 = 31, daraus 3+1 = 4.",
      },
      {
        q: "Ist Numerologie dasselbe wie Astrologie?",
        a: "Nein. Die Astrologie rechnet mit tatsächlichen Himmelspositionen, die Numerologie mit den Ziffern des Datums und Buchstabenwerten des Namens. Gemeinsam ist ihnen nur der Ausgangspunkt Geburtsdatum.",
      },
      {
        q: "Geht Numerologie wirklich auf Pythagoras zurück?",
        a: "Dafür gibt es keinen belastbaren Beleg. Die Zuschreibung entstand im 19. und frühen 20. Jahrhundert. Zahlensymbolik ist deutlich älter, die heutigen numerologischen Systeme sind es nicht.",
      },
      {
        q: "Warum liefern zwei Numerologie-Rechner verschiedene Ergebnisse?",
        a: "Weil sie unterschiedliche Buchstabentabellen verwenden. Das pythagoreische System ordnet den Buchstaben die Werte 1 bis 9 der Reihe nach zu, das chaldäische anders — für denselben Namen kommen dabei verschiedene Zahlen heraus.",
      },
      {
        q: "Welches System ist genauer?",
        a: "Genauer im Sinne von nachprüfbar ist die astronomische Berechnung der Astrologie. Ob die Deutung dieser Positionen zutrifft, ist eine andere Frage — sie ist bei beiden Systemen wissenschaftlich nicht belegt.",
      },
    ],
  },
  {
    slug: "big-five-vs-enneagramm",
    question: "Was ist der Unterschied zwischen Big Five und Enneagramm?",
    answer:
      "Die Big Five messen, wie stark fünf Eigenschaften bei dir ausgeprägt sind — Offenheit, Gewissenhaftigkeit, Extraversion, Verträglichkeit und emotionale Stabilität. Sie sind das Standardmodell der akademischen Persönlichkeitspsychologie und sagen nichts über Motive. Das Enneagramm beschreibt umgekehrt neun Grundmotive: nicht was du tust, sondern wovor du dich schützt. Es ist nicht empirisch abgeleitet, trifft dafür aber oft genau den Punkt, den ein Fragebogen nicht erfasst.",
    columns: ["Big Five", "Enneagramm"],
    table: [
      {
        aspect: "Herkunft",
        a: "Faktorenanalyse von Sprachdaten, seit den 1930er Jahren, Konsens ab den 1980ern",
        b: "Oscar Ichazo und Claudio Naranjo, 1960er/70er, mit Bezügen auf ältere Traditionen",
      },
      {
        aspect: "Was beschrieben wird",
        a: "Ausprägung von Verhalten und Erleben auf fünf Dimensionen",
        b: "Das zugrunde liegende Motiv und die Angst dahinter",
      },
      {
        aspect: "Ergebnisform",
        a: "Fünf Werte auf einer Skala — niemand ist einfach extravertiert",
        b: "Ein Typ von neun, meist mit Flügel und Entwicklungsrichtungen",
      },
      {
        aspect: "Empirische Grundlage",
        a: "Stark: reproduzierbar über Sprachen und Kulturen, mit Vorhersagewert",
        b: "Schwach: keine belastbare Validierung der neun Typen",
      },
      {
        aspect: "Vorhersagekraft",
        a: "Gewissenhaftigkeit sagt Berufserfolg und Gesundheitsverhalten vorher",
        b: "Nicht untersucht; der Wert liegt in der Selbsterkenntnis",
      },
      {
        aspect: "Wie man den Wert ermittelt",
        a: "Standardisierter Fragebogen, ausgewertet gegen Vergleichsstichproben",
        b: "Test als Einstieg, dann Selbstprüfung — der Test irrt häufig",
      },
      {
        aspect: "Blinder Fleck",
        a: "Sagt nicht, warum jemand so handelt",
        b: "Verführt dazu, Verhalten auf ein einziges Motiv zurückzuführen",
      },
    ],
    sections: [
      {
        title: "Beschreibung gegen Motiv — der eigentliche Unterschied",
        body: "Zwei Menschen können beide hohe Gewissenhaftigkeit zeigen und aus völlig verschiedenen Gründen. Der eine hält Ordnung, weil Fehler ihm unerträglich sind. Der andere, weil er gebraucht werden will. Die Big Five sehen in beiden Fällen denselben hohen Wert. Das Enneagramm trennt sie: Typ Eins und Typ Zwei sind unterschiedliche Motive hinter ähnlichem Verhalten. Umgekehrt kann das Enneagramm nicht sagen, wie stark eine Eigenschaft ausgeprägt ist — es kennt keine Skala.",
      },
      {
        title: "Warum die Big Five wissenschaftlich anerkannt sind",
        body: "Sie wurden nicht erfunden, sondern gefunden. Ausgangspunkt war die Annahme, dass sich wichtige Persönlichkeitsunterschiede in der Alltagssprache niederschlagen. Aus Tausenden von Eigenschaftswörtern kristallisierten sich in der Faktorenanalyse immer wieder dieselben fünf Bündel heraus — über verschiedene Sprachen und Kulturen hinweg. Diese Reproduzierbarkeit ist der Grund für ihre Stellung in der Forschung, und sie ist auch der Grund, warum die Big Five so unspektakulär klingen: Sie beschreiben, sie deuten nicht.",
      },
      {
        title: "Warum das Enneagramm trotzdem trifft",
        body: "Die neun Typen sind nicht empirisch abgeleitet, und die Zuordnung über Tests ist unzuverlässig. Trotzdem berichten viele Menschen, dass ihre Typbeschreibung etwas benennt, das kein Fragebogen erfasst hat. Der Grund liegt vermutlich in der Perspektive: Das Enneagramm fragt nach der Angst, die ein Verhaltensmuster antreibt. Diese Frage stellt kein Persönlichkeitsinventar. Das macht die Typen nicht zu einer belegten Kategorie, aber zu einem brauchbaren Reflexionsangebot — solange man sie nicht als Diagnose behandelt.",
      },
      {
        title: "Warum beide für ein Profil besonders wertvoll sind",
        body: "Beide beruhen auf Selbstauskunft, nicht auf Geburtsdaten. Für ein Mehrsystem-Profil ist das entscheidend: Sie sind vollständig unabhängig von Astrologie, Human Design, Gene Keys und BaZi, die alle dieselben Himmelspositionen lesen. Wenn ein Thema sowohl in einem berechneten System als auch in deinen eigenen Antworten auftaucht, ist das ein echtes Konvergenzsignal aus zwei unabhängigen Quellen — nicht dieselbe Rechnung in zwei Sprachen.",
      },
    ],
    decide: [
      {
        when: "Du willst wissen, wie du im Vergleich zu anderen ausgeprägt bist",
        pick: "Big Five",
        why: "Sie sind gegen Vergleichsstichproben normiert. Das Enneagramm kennt kein Mehr oder Weniger.",
      },
      {
        when: "Du verstehst nicht, warum du immer wieder dasselbe tust",
        pick: "Enneagramm",
        why: "Es fragt nach dem Motiv und der Angst dahinter — genau die Ebene, die ein Fragebogen nicht erfasst.",
      },
      {
        when: "Es geht um Bewerbung, Studium oder eine berufliche Einschätzung",
        pick: "Big Five",
        why: "Nur sie haben belegte Zusammenhänge mit Leistung und Verhalten. Enneagramm-Ergebnisse gehören nicht in eine Personalentscheidung.",
      },
      {
        when: "Du baust ein Profil aus mehreren Systemen",
        pick: "Beide",
        why: "Sie beruhen auf Selbstauskunft und sind damit unabhängig von allen Systemen, die mit Geburtsdaten rechnen.",
      },
    ],
    faq: [
      {
        q: "Was messen die Big Five genau?",
        a: "Fünf Dimensionen: Offenheit für Erfahrungen, Gewissenhaftigkeit, Extraversion, Verträglichkeit und emotionale Stabilität, oft als Gegenpol Neurotizismus bezeichnet. Jede wird als Ausprägung auf einer Skala angegeben, nicht als Typ.",
      },
      {
        q: "Ist das Enneagramm wissenschaftlich anerkannt?",
        a: "Nein. Für die neun Typen gibt es keine belastbare empirische Validierung, und die Testzuordnung ist unzuverlässig. Als Reflexionsmodell wird es dennoch breit genutzt — der Wert liegt in der Frage nach dem Motiv, nicht in der Kategorie.",
      },
      {
        q: "Kann ich mehreren Enneagramm-Typen entsprechen?",
        a: "Das Modell sieht einen Kerntyp vor, dazu einen Flügel und Bewegungsrichtungen unter Stress und in Entspannung. Wer sich in mehreren Typen wiedererkennt, hat meist den Kerntyp noch nicht gefunden — oder liest Verhaltensbeschreibungen statt Motive.",
      },
      {
        q: "Warum bekomme ich in Enneagramm-Tests immer andere Ergebnisse?",
        a: "Weil Tests nach Verhalten fragen und der Typ am Motiv hängt. Dasselbe Verhalten kann aus verschiedenen Motiven kommen. Die Typbestimmung über Selbstprüfung gilt deshalb als verlässlicher als jeder Fragebogen.",
      },
      {
        q: "Ergänzen sich Big Five und Enneagramm?",
        a: "Ja, ungewöhnlich gut. Die Big Five sagen, wie stark etwas ausgeprägt ist, das Enneagramm sagt, warum. Zusammen decken sie Beschreibung und Motiv ab — zwei Ebenen, die einzeln jeweils unvollständig bleiben.",
      },
    ],
  },
  {
    slug: "human-design-vs-numerologie",
    question: "Was ist der Unterschied zwischen Human Design und Numerologie?",
    answer:
      "Human Design berechnet aus Geburtsdatum, -zeit und -ort die Positionen von Sonne, Mond und Planeten und übersetzt sie in Typ, Autorität und Energiezentren. Die Numerologie kommt ohne Uhrzeit aus: Sie bildet Quersummen aus den Ziffern deines Geburtsdatums und ordnet ihnen Bedeutung zu. Human Design ist deutlich feiner aufgelöst, die Numerologie dafür sofort zugänglich — und sie funktioniert auch dann, wenn du deine Geburtszeit nicht kennst.",
    columns: ["Human Design", "Numerologie"],
    table: [
      {
        aspect: "Was du brauchst",
        a: "Datum, exakte Uhrzeit und Geburtsort",
        b: "Nur das Geburtsdatum; für Namenszahlen die Schreibweise des Namens",
      },
      {
        aspect: "Rechenweg",
        a: "Astronomische Positionen zu zwei Zeitpunkten, übersetzt in 64 Tore",
        b: "Quersumme der Ziffern bis zu einer einstelligen Zahl",
      },
      {
        aspect: "Auflösung",
        a: "Sehr fein — Geschwister desselben Tages haben verschiedene Charts",
        b: "Grob — alle am selben Tag Geborenen teilen die Lebenszahl",
      },
      {
        aspect: "Kernaussage",
        a: "Wie du Entscheidungen triffst und wo Energie konstant ist",
        b: "Welches Grundthema dein Datum trägt und in welchem persönlichen Jahr du stehst",
      },
      {
        aspect: "Einstiegshürde",
        a: "Mittel — Typ und Autorität sind schnell erklärt, der Rest nicht",
        b: "Niedrig — die Rechnung lässt sich auf einem Zettel nachvollziehen",
      },
      {
        aspect: "Alter",
        a: "1987",
        b: "Heutige Systeme aus dem 19. und 20. Jahrhundert; Zahlensymbolik ist älter",
      },
      {
        aspect: "Ohne Geburtszeit",
        a: "Stark eingeschränkt — Autorität und Zentren werden unsicher",
        b: "Vollständig nutzbar",
      },
    ],
    sections: [
      {
        title: "Die Geburtszeit entscheidet, welches System dir offensteht",
        body: "Human Design hängt an der Uhrzeit. Der Mond wechselt sein Tor innerhalb weniger Stunden, und davon hängt ab, ob ein Zentrum definiert ist oder offen — und damit die Autorität, also der praktische Kern des Systems. Wer seine Geburtszeit nicht kennt, bekommt ein Chart, das plausibel aussieht und in wesentlichen Teilen geraten ist. Die Numerologie hat dieses Problem nicht: Die Lebenszahl steht mit dem Datum fest. Das ist kein Qualitätsurteil, sondern eine Frage der Datenlage.",
      },
      {
        title: "Was Auflösung praktisch bedeutet",
        body: "Zwei Menschen, die am selben Tag geboren wurden, haben dieselbe Lebenszahl — weltweit sind das Hunderttausende. Ihre Human-Design-Charts können dagegen völlig verschieden sein, sobald einige Stunden dazwischen liegen. Das macht Human Design nicht automatisch treffender: Ein feineres Raster kann auch feiner danebenliegen. Es heißt aber, dass Human Design überhaupt zwischen zwei Personen unterscheiden kann, wo die Numerologie beide gleich behandelt.",
      },
      {
        title: "Zwei Rechenwege, zwei Systemfamilien",
        body: "Human Design leitet alles aus tatsächlichen Himmelspositionen ab und teilt diese Grundlage mit Astrologie, Gene Keys und in anderer Form mit BaZi. Die Numerologie rechnet arithmetisch mit den Ziffern des Datums — ein völlig anderer Weg. Bei Astrakey gehören sie deshalb zu verschiedenen Systemfamilien. Wenn beide auf dasselbe Thema zeigen, zählt das als eigenständige Bestätigung; wenn Human Design und Gene Keys dasselbe sagen, zählt es nicht doppelt.",
      },
      {
        title: "Wo die Numerologie ehrlich eingeordnet gehört",
        body: "Die Zuschreibung der Numerologie an Pythagoras lässt sich historisch nicht belegen — sie stammt aus dem 19. und frühen 20. Jahrhundert. Astrakey sagt das offen, statt eine antike Traditionslinie zu behaupten. Für den Nutzen als Reflexionsangebot ändert das nichts, für die Einordnung schon: Ein System, das seine Herkunft überhöht, verdient mehr Skepsis als eines, das sie benennt.",
      },
    ],
    decide: [
      {
        when: "Du kennst deine Geburtszeit nicht",
        pick: "Numerologie",
        why: "Sie braucht nur das Datum. Human Design wird ohne Uhrzeit in seinem Kern — Autorität und Zentren — unsicher.",
      },
      {
        when: "Du willst eine Regel für konkrete Entscheidungen",
        pick: "Human Design",
        why: "Strategie und Autorität sind Handlungsanweisungen. Die Numerologie beschreibt Themen, keine Vorgehensweisen.",
      },
      {
        when: "Du willst schnell einen Einstieg ohne Vorwissen",
        pick: "Numerologie",
        why: "Die Rechnung lässt sich auf einem Zettel nachvollziehen — das schafft Vertrauen in das, was da passiert.",
      },
      {
        when: "Du willst wissen, welches Thema wirklich trägt",
        pick: "Beide zusammen",
        why: "Sie rechnen auf grundverschiedene Weise. Eine Übereinstimmung zwischen ihnen wiegt mehr als zwischen zwei Systemen derselben Familie.",
      },
    ],
    faq: [
      {
        q: "Kann ich Human Design ohne Geburtszeit nutzen?",
        a: "Eingeschränkt. Die langsam laufenden Aktivierungen bleiben gültig, aber Autorität, Zentren und Typ hängen an schnellen Faktoren, vor allem am Mond. Astrakey markiert solche Aussagen als unsicher, statt sie als gesichert darzustellen.",
      },
      {
        q: "Was sagt die Lebenszahl aus, was Human Design nicht sagt?",
        a: "Sie ist unabhängig von der Uhrzeit und damit für viele Menschen überhaupt erst zugänglich. Inhaltlich beschreibt sie ein Grundthema, während Human Design einen Entscheidungsmechanismus beschreibt — zwei verschiedene Fragen.",
      },
      {
        q: "Widersprechen sich Human Design und Numerologie?",
        a: "Sie können, und das ist kein Fehler. Weil sie auf völlig verschiedene Weise rechnen, ist eine Abweichung erwartbar. Interessant wird es dort, wo beide trotz verschiedener Wege auf dasselbe Thema zeigen.",
      },
      {
        q: "Welches System sollte ich zuerst ausprobieren?",
        a: "Wenn du deine Geburtszeit kennst: Human Design, weil Strategie und Autorität sich direkt im Alltag testen lassen. Wenn nicht: Numerologie, weil sie ohne Uhrzeit vollständig nutzbar bleibt.",
      },
    ],
  },
];

export function getComparisonDetail(slug: string): ComparisonDetail | undefined {
  return comparisonDetails.find((detail) => detail.slug === slug);
}

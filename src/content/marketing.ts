import type { Locale } from "@/i18n/config";
import { localizeContentPage } from "@/i18n/localized-content";

export type FaqItem = { q: string; a: string };
export type ContentSection = { title: string; body: string };
export type ContentGraphic = { src: string; alt: string; caption: string };
export type ContentPage = {
  key?: string;
  slug: string;
  navKey: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  lead: string;
  answer: string;
  trustline?: string;
  primaryCta?: string;
  primaryCtaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
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
  home: {
    key: "home",
    slug: "",
    navKey: "home",
    title: "Ein Profil aus vielen Systemen. Nicht nur ein Blick auf dich.",
    seoTitle: "Astrakey: dein Profil aus vielen Systemen",
    seoDescription: "Astrakey verbindet mehr als 30 Systeme wie Astrologie, Human Design, Gene Keys, Numerologie und Fragebögen zu einem erklärbaren Profil und zeigt, welche Themen wirklich wiederkehren.",
    eyebrow: "Mehrsystem-Profil",
    lead: "Astrakey verbindet mehr als 30 Systeme wie Astrologie, Human Design, Gene Keys, Numerologie, Fragebögen und weitere Systeme zu einem erklärbaren Profil. Du siehst, welche Themen über mehrere unabhängige Perspektiven hinweg wirklich wiederkehren und welche dich nur aus einem einzelnen Blickwinkel beschreiben.",
    answer: "Astrakey verbindet mehr als 30 Systeme wie Astrologie, Human Design, Gene Keys, Numerologie, Fragebögen und weitere Systeme zu einem erklärbaren Profil.",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Datenschutz bewusst gestaltet, kein Verkauf deiner Daten, Export und Löschung jederzeit. AI formuliert die Deutung, sie urteilt nicht über dich.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "So entsteht dein Profil",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein Profil aus vielen Systemen. Nicht nur ein Blick auf dich. als Astrakey Markenbild",
    sections: [
      {
        title: "Ein System ist eine Perspektive",
        body: "Du musst nichts wissen und nichts können, um hier anzufangen. Du darfst in deinem Tempo auf dich schauen, neugierig und ohne Druck. Viele Menschen erkennen sich in einem System wieder. Ein Horoskop kann tief treffen, Human Design kann Orientierung geben, eine numerologische Zahl kann erstaunlich passend wirken. Das ist echt, aber es bleibt eine Perspektive. Jedes System sieht nur einen Ausschnitt von dir, und jedes System kann eine einzelne Aussage größer wirken lassen, als sie ist. Astrakey beginnt deshalb an einer anderen Stelle. Statt zu fragen, was ein einzelnes System sagt, fragt Astrakey, welche Themen über mehrere unabhängige Systeme hinweg auftauchen. Erst wenn verschiedene Perspektiven in dieselbe Richtung zeigen, entsteht ein Thema mit höherer Tragfähigkeit. So wird aus vielen einzelnen Deutungen ein Profil, das du ernster nehmen kannst, ohne es absolut zu setzen.\n\n- Ein einzelnes System kann dich berühren. Astrakey zeigt, was wirklich wiederkehrt.\n- Mehrere Perspektiven sind belastbarer als eine laute Einzelaussage.\n- Kein System wird überhöht, keines wird ignoriert."
      },
      {
        title: "Was Konvergenz bedeutet",
        body: "Konvergenz heißt: Astrakey prüft, ob mehrere voneinander unabhängige Systeme dasselbe Thema stützen. Das ist mehr als Systeme zusammenzuzählen. Viele Systeme teilen verwandte Quellen. Astrologie, Sabian-Grade und Astrokartografie arbeiten aus denselben Himmelsdaten. Human Design und Gene Keys teilen ein gemeinsames Rad. Astrakey gruppiert solche verwandten Quellen in Systemfamilien, damit ein Echo nicht fälschlich als unabhängige Bestätigung zählt. Ein Thema wird erst dann stark, wenn unterschiedliche Familien zustimmen. Genauso wichtig ist der umgekehrte Fall: Wenn Systeme sich widersprechen, ist das kein Fehler, sondern ein Spannungsfeld, das oft besonders viel über dich erzählt. Diese Logik macht Astrakey nachvollziehbar statt geheimnisvoll.\n\n- Konvergenz statt Addition.\n- Systemfamilien verhindern Doppelzählung.\n- Widersprüche werden zu Spannungsfeldern, nicht zu Fehlern."
      },
      {
        title: "Das ist Astrakey",
        body: "Astrakey ist eine Profilumgebung, kein einzelnes Ergebnis. Im Zentrum steht dein Mehrsystem-Profil mit Kernthemen, Spannungsfeldern und sichtbaren Systembelegen. Darum gruppieren sich die Module. Die Systemprofile zeigen dir jede Perspektive auch einzeln, damit du verstehst, was jedes System beiträgt. Das Seelenbuch entfaltet dein Profil als ausführliche, lesbare Auswertung zum Wiederlesen. Tagesimpulse und Journaling übertragen deine Themen in den Alltag. Die Beziehungsanalyse verbindet zwei Profile mit klarer Einwilligung und macht Resonanz und Reibung sichtbar. Der Companion hilft, Fragen zu deinem Profil verständlich zu beantworten. Zusammen ergeben sie eine einfache Reise: berechnen, vergleichen, verstehen, vertiefen, anwenden.\n\n- Mehrsystem-Profil als Kern.\n- Systemprofile, Seelenbuch, Beziehungsanalyse, Begleitung als Module.\n- Ein System, fünf Schritte: berechnen, vergleichen, verstehen, vertiefen, anwenden."
      },
      {
        title: "Wie dein Profil entsteht",
        body: "Dein Profil entsteht in drei klar getrennten Schritten. Zuerst rechnet Astrakey: Aus Geburtsdatum, Geburtsort, Geburtszeit, Name und freiwilliger Selbstauskunft erzeugt jedes System nach festen Regeln eigene Signale. Dann vergleicht Astrakey: Die Signale werden in gemeinsame Themen übersetzt, verwandte Quellen werden gruppiert, und es wird geprüft, welche Aussagen unabhängig voneinander gestützt sind. Erst danach formuliert Astrakey: AI schreibt die Deutung verständlich und warm, entscheidet aber nicht, welche Systeme übereinstimmen, und erfindet kein Profil. Diese Trennung von Berechnung, Konvergenz und Sprache ist der Grund, warum Astrakey erklärbar bleibt. Du kannst bei wichtigen Aussagen nachsehen, welche Systeme sie tragen und wo Unsicherheit besteht.\n\n- Schritt 1: berechnen. Schritt 2: vergleichen. Schritt 3: formulieren.\n- AI ist die Sprachebene, nicht die Quelle der Wahrheit.\n- Jede starke Aussage zeigt ihre Belege und ihre Unsicherheit."
      },
      {
        title: "Erklärbar statt absolut",
        body: "Astrakey behauptet nicht, die Wahrheit über dich zu kennen. Es macht ein Angebot zur Reflexion. Deshalb trennt Astrakey bewusst mehrere Größen: Stärke zeigt, wie präsent ein Thema ist. Konvergenz zeigt, wie viele unabhängige Familien es tragen. Sicherheit zeigt, wie belastbar deine Eingaben und die Berechnung sind. Spannung zeigt, wo zwei Pole gleichzeitig aktiv sind. Wenn etwas nicht zu dir passt, ist das ein wertvoller Hinweis und kein Widerspruch zum System. Genau diese Haltung unterscheidet Astrakey von Angeboten, die mit Sicherheit und Schicksal arbeiten. Du bekommst bessere Fragen, nicht ein neues Etikett.\n\n- Reflexionsangebot statt Urteil.\n- Vier getrennte Größen: Stärke, Konvergenz, Sicherheit, Spannung.\n- Wenn etwas nicht passt, zählt auch das."
      },
      {
        title: "Tiefe, wenn du sie willst",
        body: "Der kostenlose Einstieg zeigt, ob Astrakey bei dir Resonanz erzeugt. Du siehst erste Kernthemen und verstehst, wie Astrakey Aussagen herleitet. Wenn du tiefer gehen willst, beginnt der Premium-Wert. Das Seelenbuch entfaltet dein Profil über viele Kapitel mit Systembelegen und Reflexionsfragen. Die Beziehungsanalyse hilft, eine Partnerschaft differenzierter zu verstehen. Tagesimpulse, Journaling und der Companion machen aus dem Profil eine fortlaufende Praxis. Du zahlst nicht für einen geheimen Satz über dich, sondern für Umfang, Kontext und Begleitung über Zeit. Es gibt keine Dringlichkeit und kein Drängen. Tiefe lohnt sich dann, wenn du sie wirklich nutzen möchtest.\n\n- Kostenlos ist Resonanzprüfung.\n- Premium ist Tiefe, Kontext und Begleitung.\n- Kein Druck, keine Dringlichkeit, kein Schicksalsmarketing."
      },
      {
        title: "Vertrauen ist eingebaut",
        body: "Ein Profil aus vielen Systemen verarbeitet sensible Informationen. Deshalb ist Vertrauen bei Astrakey kein Zusatz, sondern Teil des Produkts. Du siehst, welche Daten wofür gebraucht werden, was gespeichert wird und wie du exportieren oder löschen kannst. Einwilligung ist klar und widerrufbar, besonders bei der Beziehungsanalyse, die niemals heimlich eine zweite Person auswertet. AI wird transparent eingesetzt: Du erkennst, wann gerechnet und wann formuliert wird. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen. Je persönlicher die Auswertung, desto klarer müssen Kontrolle und Grenzen sein.\n\n- Sichtbare Datennutzung, Export und Löschung.\n- Einwilligung klar und widerrufbar.\n- Keine Diagnose, keine Vorhersage, keine Beratung."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Ein Profil aus vielen Systemen. Nicht nur ein Blick auf dich. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was ist Astrakey?",
        a: "Astrakey erstellt aus vielen spirituellen, symbolischen und psychologischen Systemen ein erklärbares persönliches Profil und zeigt, welche Themen über mehrere unabhängige Systeme hinweg wiederkehren."
      },
      {
        q: "Ersetzt Astrakey Astrologie oder Human Design?",
        a: "Nein. Astrakey nutzt diese Systeme als einzelne Perspektiven und verbindet sie zu einem Gesamtprofil. Du kannst jedes System auch separat ansehen."
      },
      {
        q: "Behauptet Astrakey, die Wahrheit über mich zu kennen?",
        a: "Nein. Astrakey ist ein Reflexionsangebot. Es zeigt belastbare Muster mit ihren Belegen und markiert Unsicherheit, statt ein Urteil zu fällen."
      },
      {
        q: "Ist der Einstieg wirklich kostenlos?",
        a: "Ja. Du kannst dein Profil ohne Kreditkarte starten und erste Kernthemen sehen. Premium erweitert Tiefe und Begleitung."
      },
      {
        q: "Brauche ich meine genaue Geburtszeit?",
        a: "Eine genaue Geburtszeit verbessert manche Systeme. Astrakey funktioniert auch ohne und kennzeichnet, welche Aussagen dadurch unsicherer sind."
      },
      {
        q: "Ist Astrakey eine Diagnose oder Therapie?",
        a: "Nein. Astrakey ist keine medizinische, psychologische oder therapeutische Beratung und ersetzt keine Fachperson."
      },
      {
        q: "Was ist dann die Seelenkarte?",
        a: "Die Seelenkarte ist eine schöne visuelle Oberfläche deines Profils, ein guter Einstieg. Das eigentliche Produkt ist das Profil dahinter."
      },
      {
        q: "Welche Systeme sind dabei?",
        a: "Unter anderem Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm und Fragebögen. Eine Übersicht findest du auf der Systeme-Seite."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  leistungen: {
    key: "leistungen",
    slug: "leistungen",
    navKey: "leistungen",
    title: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst.",
    seoTitle: "Astrakey Leistungen: ein Profil, viele Module",
    seoDescription: "Vom Mehrsystem-Profil über Systemprofile, Seelenbuch und Beziehungsanalyse bis zur täglichen Begleitung. So greifen alle Astrakey-Module ineinander.",
    eyebrow: "Produktarchitektur",
    lead: "Astrakey ist eine zusammenhängende Profilumgebung, kein loser Werkzeugkasten. Im Zentrum steht dein Mehrsystem-Profil. Alle weiteren Module bauen darauf auf und machen aus einem ersten Profil eine ernsthafte, wiederkehrende Arbeit mit dir selbst.",
    answer: "Astrakey ist eine zusammenhängende Profilumgebung, kein loser Werkzeugkasten.",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Jede Funktion zeigt ihre Grundlage. AI formuliert, sie urteilt nicht über dich.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Seelenbuch entdecken",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst. als Astrakey Markenbild",
    sections: [
      {
        title: "Ein Produkt, fünf Bewegungen",
        body: "Astrakey lässt sich als eine einzige Bewegung lesen, die in fünf Schritten verläuft. Zuerst berechnet Astrakey: Aus deinen Angaben erzeugt jedes System nach festen Regeln eigene Signale. Dann vergleicht Astrakey: Verwandte Quellen werden gruppiert, und es wird geprüft, welche Themen unabhängig voneinander gestützt sind. Danach verstehst du dein Profil: Kernthemen, Spannungsfelder und Systembelege werden lesbar. Wenn du tiefer gehen willst, vertiefst du: das Seelenbuch entfaltet dein Profil über viele Kapitel. Und schließlich wendest du an: Tagesimpulse, Journaling und der Companion bringen deine Themen in den Alltag. Jedes Modul hat seinen Platz in dieser Reihe. Du musst nicht alles auf einmal nutzen. Ein ruhiger Weg ist, ein Modul nach dem anderen zu nehmen, beim Profil zu beginnen und erst dann weiterzugehen, wenn du Lust darauf hast. Du kannst dort einsteigen, wo es für dich gerade passt, und später weitergehen.\n\n- Berechnen, vergleichen, verstehen, vertiefen, anwenden.\n- Ein Profil im Zentrum, Module ringsum.\n- Du steigst ein, wo du willst, und gehst in deinem Tempo weiter."
      },
      {
        title: "Berechnen, das Mehrsystem-Profil",
        body: "Im Zentrum von Astrakey steht dein Mehrsystem-Profil. Es ist keine Aneinanderreihung einzelner Auswertungen, sondern eine verdichtete Sicht auf das, was über viele Systeme hinweg sichtbar wird. Aus Geburtsdaten, Name und freiwilliger Selbstauskunft entstehen Signale aus Astrologie, Human Design, Gene Keys, Numerologie, Fragebögen und weiteren Systemen. Diese Signale werden zu Kernthemen, Spannungsfeldern und Systembelegen verdichtet. Das Ergebnis ist ein Profil, das du ernster nehmen kannst, weil du jederzeit nachsehen kannst, welche Systeme eine Aussage tragen. Das Mehrsystem-Profil ist die Grundlage für alles Weitere. Jedes andere Modul greift darauf zu und macht einen Teil davon konkreter, ausführlicher oder alltagstauglicher.\n\n- Verdichtete Sicht statt nebeneinandergestellter Einzelreports.\n- Kernthemen, Spannungsfelder und sichtbare Systembelege.\n- Grundlage für alle weiteren Module."
      },
      {
        title: "Verstehen, die Systemprofile",
        body: "Manchmal willst du nicht nur das Gesamtbild, sondern genauer wissen, was ein einzelnes System beiträgt. Dafür gibt es die Systemprofile. Du kannst jede Perspektive separat ansehen: Was sagt Astrologie, was Human Design, was die Numerologie, was die Fragebögen? Du siehst, welche Daten ein System nutzt und wo seine Grenzen liegen. Das macht Astrakey nachvollziehbar und nimmt der Methode jede Beliebigkeit. Wer ein System bereits kennt und schätzt, findet hier einen vertrauten Einstieg. Wer neu ist, lernt Schritt für Schritt, wie sich die Perspektiven unterscheiden. Wichtig bleibt der Zusammenhang: Die Systemprofile sind nicht das Produkt, sondern die Bausteine. Ihr eigentlicher Wert zeigt sich, wenn du siehst, wo sie sich treffen.\n\n- Jede Perspektive auch einzeln nachvollziehbar.\n- Sichtbare Datennutzung und Grenzen pro System.\n- Vertrauter Einstieg für Kenner, geführter Einstieg für Neue."
      },
      {
        title: "Vertiefen, Seelenbuch und Begleitung",
        body: "Wenn dein Profil bei dir Resonanz erzeugt, beginnt der Bereich, in dem Astrakey wirklich in die Tiefe geht. Das Seelenbuch entfaltet dein Profil über viele Kapitel mit Systembelegen und Reflexionsfragen, ein ruhiges Werk zum Lesen am Abend und zum Wiederlesen Monate später, wenn ein Kapitel plötzlich anders klingt. Die Beziehungsanalyse verbindet zwei Profile mit klarer Einwilligung und macht spürbar, wo zwei Menschen leicht in denselben Takt kommen und wo Reibung entsteht. Der Companion hilft, Fragen zu deinem Profil verständlich zu beantworten, im ruhigen Ton eines geduldigen Gegenübers, das deinen Kontext kennt statt mit allgemeinen Floskeln zu antworten. Diese Module sind der Premium-Wert von Astrakey. Du zahlst nicht für einen geheimen Satz über dich, sondern für Umfang, Kontext und Begleitung über Zeit. Es gibt keine Dringlichkeit. Tiefe lohnt sich dann, wenn du sie wirklich nutzen möchtest.\n\n- Seelenbuch als ausführlicher, lesbarer Begleiter.\n- Beziehungsanalyse mit klarer, widerrufbarer Einwilligung.\n- Companion als verständliche Navigation durch dein Profil."
      },
      {
        title: "Anwenden, Tagesimpulse und Journaling",
        body: "Ein Profil bleibt nur dann lebendig, wenn es im Alltag ankommt. Genau hier liegt die praktische Brücke: anwenden mit Tagesimpulsen und Journaling. Tagesimpulse leiten einen ruhigen Fokus aus deinem Profil ab, kein Sternzeichen-Horoskop für Millionen, sondern ein leiser Satz am Morgen, der zu deinen Kernthemen passt und dich durch den Tag begleitet. Journaling gibt dir Raum, eigene Beobachtungen in deinen Worten festzuhalten und Muster über Wochen langsam sichtbar werden zu lassen, wie Linien, die sich nach und nach zu einem Bild fügen. Beides zusammen erdet das Profil: Du prüfst im echten Leben, welche Aussagen wirklich tragen. Mit der Profilverfeinerung kannst du Angaben korrigieren und Datenqualität verbessern. So wird aus einer einmaligen Auswertung eine fortlaufende Beziehung zu deinem eigenen Profil, in deinem eigenen Rhythmus und ohne Zwang zur täglichen Nutzung.\n\n- Tagesimpuls aus deinem Profil, nicht aus deinem Sternzeichen.\n- Journaling erdet das Profil und macht Muster sichtbar.\n- Profilverfeinerung verbessert Datenqualität über Zeit."
      },
      {
        title: "Vertrauen liegt unter jedem Modul",
        body: "Weil jedes Modul mit persönlichen Daten arbeitet, ist Vertrauen bei Astrakey kein Zusatz, sondern Teil jeder Funktion. Du siehst, welche Daten wofür gebraucht werden, was gespeichert wird und wie du exportieren oder löschen kannst. Einwilligung ist klar und widerrufbar, besonders bei der Beziehungsanalyse, die niemals heimlich eine zweite Person auswertet. AI kommt überall als Sprachebene zum Einsatz und wird transparent gemacht: Du erkennst, wann gerechnet und wann formuliert wird. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen. Diese Grenzen gelten für jedes Modul gleichermaßen, vom ersten Profil bis zum Companion. So bleibt die ganze Architektur nicht nur reich an Funktionen, sondern auch nachvollziehbar und kontrollierbar.\n\n- Sichtbare Datennutzung, Export und Löschung in jedem Modul.\n- Einwilligung klar und widerrufbar.\n- AI als Sprachebene, transparent gekennzeichnet."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb4-pipeline-einordnung.svg",
        alt: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was unterscheidet Astrakey von einem einzelnen Tool?",
        a: "Astrakey verbindet viele Systeme zu einem Mehrsystem-Profil und bietet darauf aufbauende Module wie Seelenbuch, Beziehungsanalyse und tägliche Begleitung. Ein einzelnes Tool zeigt nur eine Perspektive."
      },
      {
        q: "Muss ich alle Module nutzen?",
        a: "Nein. Im Zentrum steht dein Profil. Du kannst einzelne Module nutzen oder weglassen und jederzeit später weitergehen."
      },
      {
        q: "Was ist im kostenlosen Einstieg enthalten?",
        a: "Du kannst dein Profil starten und erste Kernthemen sehen. Module wie das Seelenbuch und die fortlaufende Begleitung gehören zur Premium-Tiefe."
      },
      {
        q: "Kann ich einzelne Systeme separat ansehen?",
        a: "Ja. Die Systemprofile zeigen dir jede Perspektive einzeln, mit ihren Daten und Grenzen."
      },
      {
        q: "Ist das Seelenbuch ein eigenes Produkt?",
        a: "Das Seelenbuch ist ein Premium-Modul, das dein bestehendes Profil über viele Kapitel ausführlich entfaltet."
      },
      {
        q: "Trifft Astrakey Entscheidungen für mich?",
        a: "Nein. Astrakey ist ein Reflexionsangebot. Es bietet Fragen und Kontext, keine Urteile und keine Beratung."
      },
      {
        q: "Brauche ich Vorwissen über Astrologie oder Human Design?",
        a: "Nein. Astrakey erklärt jede Perspektive verständlich. Vorwissen hilft, ist aber nicht nötig."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  konvergenz: {
    key: "konvergenz",
    slug: "konvergenz-engine",
    navKey: "konvergenz",
    title: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt.",
    seoTitle: "Astrakey Konvergenz-Engine: das eigentliche Herz",
    seoDescription: "Astrakey zählt Systeme nicht zusammen, es prüft Konvergenz. Systemfamilien verhindern Doppelzählung. So entstehen belastbare Kernthemen.",
    eyebrow: "USP und Methode",
    lead: "Du musst keine Mathematik mögen, um das hier zu verstehen. In einem Satz: Astrakey vertraut einem Thema mehr, wenn mehrere voneinander unabhängige Systeme es zeigen, statt das gleiche Signal mehrfach mitzuzählen. Die Konvergenz-Engine ist der Grund, warum Astrakey mehr ist als eine Sammlung spiritueller Rechner. Sie prüft, welche Themen über mehrere unabhängige Systeme hinweg auftauchen, gruppiert verwandte Quellen und macht sichtbar, wie belastbar eine Aussage wirklich ist.",
    answer: "Du musst keine Mathematik mögen, um das hier zu verstehen.",
    trustline: "Eine deterministische Rechenschicht, das heißt sie folgt festen Regeln, gleiche Eingaben ergeben dasselbe Ergebnis. Kein Sprachmodell, das urteilt. Jede Aussage zeigt ihre Konvergenz und ihre Unsicherheit.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "So entsteht dein Profil",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. als Astrakey Markenbild",
    sections: [
      {
        title: "Konvergenz statt Addition",
        body: "Viele Tools geben dir ein Horoskop, einen Human-Design-Bodygraph oder eine numerologische Zahl. Manche stellen sogar mehrere Systeme nebeneinander und nennen das ein Gesamtbild. Astrakey fragt eine Ebene tiefer. Es genügt nicht, viele Systeme zu zeigen. Entscheidend ist, welche Themen über mehrere Systeme hinweg auftauchen und wie unabhängig diese Hinweise wirklich sind. Genau das leistet die Konvergenz-Engine. Sie addiert Systeme nicht einfach, denn eine Summe würde jede Stimme gleich behandeln, auch wenn mehrere Stimmen denselben Ursprung haben. Stattdessen prüft Astrakey, ob unterschiedliche, voneinander unabhängige Perspektiven dasselbe Thema stützen. Erst dann wird ein Thema stark. Ein einfaches Beispiel macht den Unterschied greifbar. Astrologie und Astrokartografie greifen auf dieselben Himmelsdaten zurück. Wenn beide dasselbe sagen, ist das keine zweite, unabhängige Bestätigung, sondern dieselbe Quelle, zweimal gehört. Genau das zählt Astrakey nicht doppelt. Dieser Unterschied zwischen Addition und Konvergenz ist klein im Wort und groß in der Wirkung. Er trennt eine schöne Sammlung von einem belastbaren Profil.\n\n- Viele Systeme zu zeigen ist nicht dasselbe wie Konvergenz zu prüfen.\n- Eine Summe behandelt abhängige Stimmen wie unabhängige.\n- Stark wird ein Thema erst durch unabhängige Übereinstimmung."
      },
      {
        title: "Systemfamilien verhindern Doppelzählung",
        body: "Viele Systeme teilen dieselbe Rohquelle. Westliche Astrologie, Sabian-Grade, Fixsterne und Astrokartografie nutzen verwandte Himmelsdaten. Human Design und Gene Keys teilen das gemeinsame Rad. Numerologie und verwandte Zahlensysteme arbeiten aus Datum oder Name. Würde Astrakey jedes dieser Systeme als unabhängige Bestätigung zählen, entstünde ein verzerrter Eindruck. Drei Systeme aus derselben Quelle wirkten dann wie drei unabhängige Zeugen, obwohl sie im Grunde dieselbe Aussage wiederholen. Deshalb bündelt die Konvergenz-Engine verwandte Systeme in Familien. Ein Echo innerhalb einer Familie zählt nicht als zweite, unabhängige Stimme. Ein Thema wird erst dann wirklich stark, wenn verschiedene Familien zustimmen. Diese Gruppierung ist der entscheidende Schutz gegen eine künstlich aufgeblähte Bestätigung. Sie wertet kein System ab. Jedes System behält seine fachliche Eigenständigkeit und seine eigene Sprache. Die Familie bündelt nur die gemeinsame Rohquelle, damit eine geteilte Herkunft nicht doppelt zählt. Sie ist der Grund, warum ein Mehrsystem-Profil verlässlicher ist als das simple Aufaddieren möglichst vieler Tools.\n\n- Verwandte Systeme teilen oft eine gemeinsame Rohquelle.\n- Ein Echo in derselben Familie zählt nicht als zweite Stimme.\n- Erst Zustimmung aus verschiedenen Familien macht ein Thema stark."
      },
      {
        title: "Dämpfung statt Summe",
        body: "Sobald Verwandtschaft erkannt ist, behandelt Astrakey ähnliche Signale bewusst vorsichtig. Statt jede zusätzliche Stimme aus derselben Familie voll mitzuzählen, dämpft die Engine ihren Beitrag. Das klingt technisch, hat aber eine einfache Idee dahinter. Wenn fünf Quellen aus derselben Familie dasselbe sagen, ist das nicht fünfmal so überzeugend wie eine einzelne unabhängige Bestätigung. Es ist im Kern eine Aussage, fünfmal wiederholt. Eine naive Summe würde solche Wiederholungen künstlich aufblähen und schwache Aussagen laut erscheinen lassen. Die Dämpfung verhindert das. Sie sorgt dafür, dass ein Thema nicht dadurch stark wird, dass es oft aus derselben Ecke kommt, sondern dadurch, dass es aus verschiedenen Ecken bestätigt wird. So bleibt die Stärke einer Aussage ehrlich. Sie spiegelt echte, unabhängige Übereinstimmung wider und nicht die bloße Lautstärke einer einzelnen Symbolsprache.\n\n- Wiederholung aus einer Familie ist nicht gleich Bestätigung.\n- Dämpfung verhindert künstlich aufgeblähte Stärke.\n- Stärke spiegelt unabhängige Übereinstimmung, nicht Lautstärke."
      },
      {
        title: "Vier Größen, sauber getrennt",
        body: "Astrakey beschreibt ein Thema nicht mit einer einzigen Zahl, sondern trennt bewusst vier Größen. Diese vier sind interne Plausibilitätsmaße, mit denen Astrakey seine eigenen Aussagen ordnet, keine statistischen Gütekriterien wie in einem psychologischen Test. Stärke zeigt, wie präsent ein Thema in deinem Profil ist. Konvergenz zeigt, wie viele unabhängige Familien dieses Thema tragen. Sicherheit zeigt, wie belastbar deine Eingaben und die Berechnung sind, etwa ob eine genaue Geburtszeit vorliegt. Spannung zeigt, wo zwei Pole gleichzeitig aktiv sind. Diese Trennung ist der eigentliche Grund für Erklärbarkeit. Ein Thema kann stark, aber wenig konvergent sein, dann ist es präsent, aber nur aus einer Ecke gestützt. Ein Thema kann hoch konvergent, aber mit geringer Sicherheit verbunden sein, weil eine wichtige Eingabe fehlt. Indem Astrakey diese Größen nicht zu einem einzigen Eindruck verschmilzt, kannst du jede Aussage differenziert lesen. Du siehst nicht nur, dass etwas zu dir gehört, sondern wie sicher, wie breit gestützt und wie spannungsreich es ist.\n\n- Stärke, Konvergenz, Sicherheit und Spannung bleiben getrennt.\n- Stark ohne Konvergenz heißt präsent, aber nur aus einer Ecke.\n- Du liest jede Aussage differenziert statt als eine Zahl."
      },
      {
        title: "Widerspruch wird zum Spannungsfeld",
        body: "Was passiert, wenn Systeme sich widersprechen? In vielen Angeboten wird ein Widerspruch versteckt oder weggeglättet, weil er unbequem wirkt. Astrakey geht den umgekehrten Weg. Ein Widerspruch ist kein Fehler, sondern oft die interessanteste Stelle deines Profils. Wenn ein System Rückzug betont und ein anderes Sichtbarkeit, beschreibt das selten einen Irrtum, sondern eine reale innere Spannung, die viele Menschen kennen. Astrakey macht solche Stellen als Spannungsfelder sichtbar, statt sie zu glätten. Ein Spannungsfeld ist eine Achse mit zwei gleichzeitig aktiven Polen, nicht ein Ja oder Nein. Gerade diese Felder erzählen oft mehr über dich als jede eindeutige Aussage, weil sie beschreiben, wo in dir etwas in Bewegung ist. Diese Haltung gehört zum Kern der Engine. Sie behandelt Komplexität nicht als Problem, das aufgelöst werden muss, sondern als Information, die ernst genommen wird.\n\n- Ein Widerspruch ist kein Fehler, sondern ein Spannungsfeld.\n- Zwei Pole gleichzeitig statt ein erzwungenes Entweder-oder.\n- Spannungsfelder erzählen oft mehr als eindeutige Aussagen."
      },
      {
        title: "Vom Funnel zum Kernthema",
        body: "Man kann sich die Konvergenz-Engine als einen Trichter vorstellen, der in mehreren Stufen verdichtet. Am Anfang stehen viele Rohsignale, die jedes System aus deinen Angaben berechnet. Diese Rohsignale werden in Theme-Signale übersetzt, also in vergleichbare Themen statt systemeigener Fachbegriffe. Dann werden verwandte Quellen in Systemfamilien gebündelt, damit Echos nicht doppelt zählen. Schließlich bleiben wenige, gut gestützte Kernthemen übrig, jeweils mit ihrer Stärke, ihrer Konvergenz, ihrer Sicherheit und möglichen Spannungen. Aus vielen einzelnen Stimmen wird so eine geordnete, lesbare Sicht. Du musst die Mathematik dahinter nicht verstehen. In der App erscheint daraus eine klare Sprache: deine Kernthemen, deine leisen Nebenthemen, deine produktiven Spannungen und die Systeme, die diese Aussagen tragen. Auf Wunsch kannst du tiefer schauen und nachvollziehen, warum Astrakey eine Aussage macht. Die Resonanz bleibt warm, die Grundlage bleibt überprüfbar.\n\n- Rohsignale, Theme-Signale, Systemfamilien, Kernthemen.\n- Aus vielen Stimmen wird eine geordnete, lesbare Sicht.\n- Du kannst jede Aussage bis zu ihren tragenden Systemen zurückverfolgen."
      },
      {
        title: "Was du davon hast",
        body: "Am Ende zählt, was diese Engine für dich bedeutet. Du bekommst ein Profil, dem du mehr vertrauen kannst, weil du seine Herkunft prüfen kannst. Du erkennst, welche deiner Themen breit gestützt sind und welche du vorsichtiger lesen solltest. Du verstehst, wo zwei Seiten in dir gleichzeitig aktiv sind, statt sie als Widerspruch abzutun. Und du bist vor einem typischen Risiko geschützt: dass eine einzelne, dramatisch klingende Aussage dich stärker prägt, als sie sollte. Die Konvergenz-Engine erklärt nicht nur, was in deinem Profil steht, sondern warum eine Aussage stärker, schwächer oder vorsichtig zu lesen ist. Im Alltag heißt das: Ein breit gestütztes Kernthema kannst du als ruhigen Anker für eine anstehende Reflexion oder Entscheidung nehmen, während du ein nur knapp gestütztes Thema bewusst leichter gewichtest. Genau hier liegt der Unterschied zwischen einer schönen Deutung und einem nachvollziehbaren Mehrsystem-Profil. Den kostenlosen Einstieg kannst du nutzen, um diesen Unterschied selbst zu erleben, an deinen eigenen ersten Kernthemen.\n\n- Ein Profil, dessen Herkunft du prüfen kannst.\n- Schutz davor, dass eine laute Einzelaussage dich überprägt.\n- Nicht nur was in deinem Profil steht, sondern warum."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb1-familien-modell.svg",
        alt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      },
      {
        src: "/graphics/convergence/abb3-daempfung-statt-summe.svg",
        alt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      },
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      },
      {
        src: "/graphics/convergence/abb2-konvergenz-vs-staerke.svg",
        alt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was ist die Konvergenz-Engine?",
        a: "Sie ist die methodische Schicht von Astrakey, die prüft, welche Themen über mehrere unabhängige Systeme hinweg auftauchen, und daraus belastbare Kernthemen verdichtet."
      },
      {
        q: "Ist die Konvergenz-Engine eine AI?",
        a: "Nein. Sie ist eine deterministische Rechenschicht. AI formuliert später die Deutung, entscheidet aber nicht, welche Systeme übereinstimmen."
      },
      {
        q: "Warum zählt Astrakey Systeme nicht einfach zusammen?",
        a: "Weil viele Systeme verwandte Datenquellen nutzen. Eine naive Summe würde abhängige Stimmen wie unabhängige behandeln und Aussagen überhöhen."
      },
      {
        q: "Was sind Systemfamilien?",
        a: "Systemfamilien bündeln Systeme mit gemeinsamer Rohquelle. So zählt ein Echo innerhalb einer Familie nicht als zweite, unabhängige Bestätigung."
      },
      {
        q: "Was bedeuten Stärke, Konvergenz, Sicherheit und Spannung?",
        a: "Stärke zeigt die Präsenz eines Themas, Konvergenz die Zahl unabhängiger Familien, Sicherheit die Belastbarkeit der Eingaben, Spannung zwei gleichzeitig aktive Pole."
      },
      {
        q: "Kann ich sehen, woher ein Kernthema kommt?",
        a: "Ja. Astrakey kann zeigen, welche Systeme und Familien ein Thema tragen. Das gehört zur Erklärbarkeit."
      },
      {
        q: "Macht die Engine Astrakey objektiv?",
        a: "Nein. Sie macht Astrakey nachvollziehbar, nicht absolut. Jede Aussage bleibt ein Reflexionsangebot mit sichtbarer Unsicherheit."
      },
      {
        q: "Was passiert bei widersprüchlichen Systemen?",
        a: "Ein Widerspruch wird nicht geglättet, sondern als Spannungsfeld dargestellt, also als Achse mit zwei gleichzeitig aktiven Polen."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  systeme: {
    key: "systeme",
    slug: "systeme",
    navKey: "systeme",
    title: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar.",
    seoTitle: "Astrakey Systeme: viele Perspektiven, ein Profil",
    seoDescription: "Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm und mehr. Erkunde jedes System einzeln und sieh, warum das Gesamtprofil belastbarer ist.",
    eyebrow: "Systeme und Gesamtprofil",
    lead: "Astrakey nutzt viele Systeme, weil kein einzelnes den Menschen vollständig beschreibt. Du kannst jede Perspektive einzeln erkunden und siehst zugleich, wie aus mehreren unabhängigen Systemen ein Profil wird, dem du mehr vertrauen kannst.",
    answer: "Astrakey nutzt viele Systeme, weil kein einzelnes den Menschen vollständig beschreibt.",
    trustline: "Du musst die Systeme nicht kennen, Astrakey erklärt sie. Jedes System zeigt seinen Beitrag und seine Grenze. Kein System wird überhöht. Kostenloser Einstieg ohne Kreditkarte.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Konvergenz-Engine ansehen",
    image: "/images/hermetia/personal-dawn-constellation.png",
    imageAlt: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum mehrere Systeme",
        body: "Kein einzelnes System beschreibt einen Menschen vollständig. Astrologie sieht Zeit, Ort und Himmelspositionen. Human Design betont Energie, Entscheidung und Zentren. Gene Keys arbeitet mit archetypischer Reifung. Numerologie verdichtet Zahlen aus Datum und Name. BaZi liest die Geburtszeit über die chinesischen Säulen von Jahr, Monat, Tag und Stunde. Das Enneagramm beschreibt wiederkehrende Muster von Motivation und Aufmerksamkeit. Fragebögen bringen Alltag, Verhalten und Selbstwahrnehmung hinein. Jede dieser Perspektiven ist für sich genommen wertvoll, und jede bleibt ein Ausschnitt. Genau hier setzt Astrakey an. Statt sich auf ein System festzulegen, liest Astrakey mehrere zusammen und prüft, welche Themen über unabhängige Perspektiven hinweg auftauchen. So entsteht ein Profil, das du ernster nehmen kannst, ohne eine einzelne Symbolsprache zu überhöhen. Die Systeme bleiben eigenständig sichtbar. Ihr gemeinsamer Wert zeigt sich dort, wo sie in dieselbe Richtung zeigen.\n\n- Jedes System ist eine Perspektive, kein vollständiges Bild.\n- Mehrere unabhängige Perspektiven sind belastbarer als eine.\n- Astrakey liest Systeme zusammen, ohne eines zu überhöhen."
      },
      {
        title: "Systeme einzeln erkunden",
        body: "In Astrakey kannst du jedes System einzeln kennenlernen. Du siehst, was es über dich sagt, welche Daten es dafür nutzt und wo seine Grenzen liegen. Das ist bewusst transparent gehalten. Ein System soll nicht geheimnisvoll wirken, sondern verständlich. Wer Astrologie bereits kennt, findet einen vertrauten Zugang und kann prüfen, wie Astrakey die Aussagen einordnet. Wer Human Design oder Gene Keys neu entdeckt, bekommt eine ruhige Einführung ohne Fachjargon. Auch Fragebögen und alltagsnahe Systeme haben hier ihren Platz, weil sie Verhalten und Selbstwahrnehmung erden. Diese Einzelansicht ist mehr als ein Nachschlagewerk. Sie macht nachvollziehbar, woraus dein Gesamtprofil später besteht, und nimmt der Methode jede Beliebigkeit. Du verstehst jeden Baustein, bevor du siehst, wie sie zusammenwirken. Für die Selbstreflexion bedeutet diese Mehrsystem-Sicht konkret, dass du ein Thema nicht an einer einzigen Deutung festmachst, sondern siehst, ob mehrere Perspektiven in dieselbe Richtung zeigen, bevor du es ernst nimmst. Alle Erklärungen sind eigene, redaktionell verfasste Texte, die ein System verständlich machen, keine übernommenen geschützten Originaltexte der jeweiligen Systeme.\n\n- Jede Perspektive einzeln mit Beitrag, Daten und Grenzen.\n- Vertrauter Zugang für Kenner, ruhige Einführung für Neue.\n- Eigene redaktionelle Texte, keine geschützten Originaltexte."
      },
      {
        title: "Warum das Gesamtprofil zuverlässiger ist",
        body: "Der eigentliche Mehrwert entsteht dort, wo die Systeme zusammen gelesen werden. Wenn mehrere unabhängige Perspektiven auf dasselbe Thema zeigen, wird daraus ein stärkeres Profilmotiv. Eine einzelne Aussage kann beeindrucken, aber sie bleibt ein Hinweis. Erst die Wiederholung über verschiedene Systeme macht ein Thema tragfähig. Astrakey prüft deshalb nicht, welches System recht hat, sondern wo sich Systeme treffen. Genauso wichtig ist der umgekehrte Fall. Wenn Systeme sich widersprechen, ist das kein Fehler, sondern ein Spannungsfeld, das oft besonders viel über dich erzählt. Diese doppelte Lesart unterscheidet ein Mehrsystem-Profil von einer bloßen Sammlung. Du bekommst nicht mehr Deutungen, sondern eine geordnete Sicht darauf, welche Themen wirklich wiederkehren und welche nur aus einem einzelnen Blickwinkel stammen.\n\n- Übereinstimmung über Systeme macht ein Thema tragfähig.\n- Widerspruch wird zum Spannungsfeld, nicht zum Fehler.\n- Geordnete Sicht statt mehr einzelner Deutungen."
      },
      {
        title: "Systemfamilien gegen Doppelzählung",
        body: "Viele Systeme teilen verwandte Quellen. Westliche Astrologie, Sabian-Grade und Astrokartografie arbeiten aus denselben Himmelsdaten. Human Design und Gene Keys teilen ein gemeinsames Rad. Numerologie und verwandte Zahlensysteme stützen sich auf Datum und Name. Würde Astrakey jedes dieser Systeme als unabhängige Stimme zählen, entstünde ein verzerrter Eindruck von Bestätigung. Deshalb gruppiert Astrakey verwandte Quellen in Systemfamilien. Ein Echo innerhalb einer Familie zählt nicht als zweite, unabhängige Bestätigung. Ein Thema wird erst dann wirklich stark, wenn unterschiedliche Familien zustimmen. Diese Gruppierung ist der Grund, warum ein Mehrsystem-Profil verlässlicher ist als das simple Aufaddieren vieler Tools. Wie genau das funktioniert, erklärt die Konvergenz-Engine im Detail. Auf der Systeme-Seite genügt der Kern: Verwandtschaft wird erkannt, damit sie nicht doppelt zählt.\n\n- Verwandte Systeme teilen oft dieselbe Rohquelle.\n- Systemfamilien verhindern, dass ein Echo doppelt zählt.\n- Stark wird ein Thema, wenn verschiedene Familien zustimmen."
      },
      {
        title: "Alle Systeme im Überblick",
        body: "Astrakey nutzt nicht nur die bekannten Kernsysteme. Hinter deinem Profil steht eine kuratierte Bibliothek aus astrologischen, psychologischen, numerologischen, körperbezogenen und symbolischen Perspektiven. Jede Perspektive hat eine eigene Aufgabe. Manche liefern stabile Grundmuster, andere zeigen Timing, Beziehung, Körperrhythmus, Werte, Berufung oder feine Nuancen.\n\nDu musst diese Systeme nicht kennen. Die Systembibliothek zeigt dir, was jedes System beitragen kann, welche Daten es braucht und wo seine Grenze liegt. So wird aus vielen Einzelstimmen kein Durcheinander, sondern eine ruhig geordnete Landkarte.\n\nAlle Systeme findest du unter /de/systeme/bibliothek/.\n\n- Astrakey sammelt keine Systeme, um mehr zu behaupten.\n- Jedes System bekommt Datenbedarf, Rolle und Grenze.\n- Die Bibliothek führt von der einzelnen Perspektive zurück zum Mehrsystem-Profil."
      },
      {
        title: "Vom Einzelsystem zum eigenen Profil",
        body: "Beide Wege führen zusammen. Du kannst bei einem System beginnen, das dich interessiert, und dich von dort aus durch dein Gesamtprofil bewegen. Oder du startest beim Profil und schaust danach, welche Systeme ein bestimmtes Thema tragen. In beiden Fällen bleibt die Logik gleich: Astrakey zeigt dir nicht nur, was ein System sagt, sondern wie es im Zusammenspiel einzuordnen ist. Dein Profil ist dabei kein starres Etikett. Es markiert, welche Aussagen belastbar sind, welche vorsichtig gelesen werden sollten und wo Systeme verschiedene Seiten von dir sichtbar machen. Der kostenlose Einstieg reicht, um diese Logik selbst zu erleben. Du siehst erste Kernthemen, erkennst die ersten Systembelege und verstehst, wie aus mehreren Perspektiven ein zusammenhängendes Profil entsteht.\n\n- Einstieg über ein System oder über das Gesamtprofil.\n- Jede Aussage mit Beleg, Sicherheit und möglicher Spannung.\n- Kostenloser Einstieg reicht, um die Logik selbst zu erleben."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb1-familien-modell.svg",
        alt: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Welche Systeme verbindet Astrakey?",
        a: "Unter anderem Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm und Fragebögen. Weitere Systeme kommen als zusätzliche Perspektiven hinzu."
      },
      {
        q: "Kann ich ein einzelnes System separat ansehen?",
        a: "Ja. Jedes System lässt sich als eigenes Systemprofil erkunden, mit seinem Beitrag, seinen Daten und seinen Grenzen."
      },
      {
        q: "Warum nicht einfach das beste System nutzen?",
        a: "Weil jedes System nur einen Ausschnitt zeigt. Erst die Übereinstimmung mehrerer unabhängiger Systeme macht ein Thema tragfähig."
      },
      {
        q: "Ersetzt Astrakey die einzelnen Systeme?",
        a: "Nein. Astrakey nutzt sie als Perspektiven und ordnet sie ein. Du kannst jedes System weiterhin für sich betrachten."
      },
      {
        q: "Was passiert, wenn sich Systeme widersprechen?",
        a: "Ein Widerspruch ist kein Fehler. Astrakey zeigt ihn als Spannungsfeld, das oft besonders aufschlussreich ist."
      },
      {
        q: "Brauche ich für alle Systeme dieselben Daten?",
        a: "Nein. Manche Systeme nutzen Geburtszeit und Ort, andere nur Datum oder Name, andere Selbstauskunft. Astrakey zeigt, was wofür gebraucht wird."
      },
      {
        q: "Macht Astrakey damit objektive Aussagen über mich?",
        a: "Nein. Astrakey zeigt belastbare Muster mit ihren Belegen und markiert Unsicherheit. Es bleibt ein Reflexionsangebot."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  methodik: {
    key: "methodik",
    slug: "so-entsteht-dein-profil",
    navKey: "methodik",
    title: "Dein Profil entsteht in drei getrennten Schritten.",
    seoTitle: "So entsteht dein Astrakey-Profil: drei Schritte",
    seoDescription: "Berechnen, vergleichen, formulieren. Astrakey trennt diese Schritte. Dein Profil bleibt nachvollziehbar und AI bleibt Sprachebene, nicht Wahrheitsquelle.",
    eyebrow: "Methode",
    lead: "Astrakey berechnet, vergleicht und formuliert in klar getrennten Phasen. Diese Trennung ist der Grund, warum dein Profil erklärbar bleibt. Du kannst bei jeder wichtigen Aussage nachsehen, welche Systeme sie tragen und wo Unsicherheit besteht.",
    answer: "Astrakey berechnet, vergleicht und formuliert in klar getrennten Phasen.",
    trustline: "AI ist die Sprachebene, nicht die Quelle der Wahrheit. Jede starke Aussage zeigt ihre Belege. Kostenloser Einstieg ohne Kreditkarte.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Konvergenz-Engine ansehen",
    image: "/images/hermetia/birth-moment-meridian.png",
    imageAlt: "Dein Profil entsteht in drei getrennten Schritten. als Astrakey Markenbild",
    sections: [
      {
        title: "Drei Schritte, klar getrennt",
        body: "Dein Profil entsteht nicht in einem einzigen, undurchsichtigen Vorgang, sondern in drei klar getrennten Schritten. Zuerst rechnet Astrakey. Jedes System erzeugt nach festen Regeln eigene Signale aus deinen Angaben. Dann vergleicht Astrakey. Die Signale werden in gemeinsame Themen übersetzt, verwandte Quellen werden gruppiert, und es wird geprüft, welche Aussagen unabhängig voneinander gestützt sind. Erst danach formuliert Astrakey. AI schreibt die Deutung verständlich und warm, entscheidet aber nicht, welche Systeme übereinstimmen, und erfindet kein Profil. Diese Reihenfolge ist kein Detail, sondern der Kern der Methode. Sie sorgt dafür, dass die Grundlage deines Profils berechenbar und überprüfbar bleibt, während die Sprache, in der du es liest, angenehm und persönlich ist. Berechnung, Konvergenz und Formulierung bleiben getrennt, damit keiner der Schritte die anderen verdeckt.\n\n- Schritt eins berechnen, Schritt zwei vergleichen, Schritt drei formulieren.\n- Die Grundlage bleibt berechenbar, die Sprache bleibt persönlich.\n- Kein Schritt verdeckt die anderen."
      },
      {
        title: "Schritt eins, berechnen",
        body: "Astrakey beginnt mit berechenbaren und freiwillig eingegebenen Daten. Geburtsdatum, Geburtsort, Geburtszeit, Name und spätere Selbstauskünfte werden nicht frei interpretiert, sondern nach definierten Regeln pro System verarbeitet. Jedes System erzeugt zunächst seine eigenen Signale, so wie es seine eigene Logik vorgibt. Astrologie leitet ihre Signale aus Himmelspositionen ab, Numerologie aus Zahlen, Fragebögen aus deinen Antworten. In diesem Schritt deutet Astrakey noch nichts. Es stellt nur sauber her, was jedes System aus deinen Angaben berechnet. Wichtig ist dabei die Datenqualität. Eine genaue Geburtszeit verbessert zeit- und ortsabhängige Systeme, während andere Systeme auch ohne sie zuverlässig arbeiten. Astrakey hält fest, welche Aussagen auf welchen Eingaben beruhen. So ist von Anfang an nachvollziehbar, woher ein Signal stammt und wie sicher seine Grundlage ist.\n\n- Feste Regeln pro System, keine freie Interpretation.\n- Jedes System erzeugt zuerst nur seine eigenen Signale.\n- Datenqualität wird festgehalten, Unsicherheit wird sichtbar."
      },
      {
        title: "Schritt zwei, vergleichen und konvergieren",
        body: "Jetzt passiert der entscheidende Schritt. Astrakey übersetzt die einzelnen Signale in gemeinsame Themen, gruppiert verwandte Quellen und prüft, welche Aussagen unabhängig voneinander gestützt werden. Eine astrologische Aussage und ein Gene-Keys-Motiv können verwandt sein, weil sie eine gemeinsame Wurzel teilen. Ein Fragebogenwert und ein numerologisches Thema kommen dagegen aus sehr unterschiedlichen Quellen. Diese Unterscheidung macht den Unterschied. Wenn Themen aus verschiedenen, voneinander unabhängigen Familien zusammenkommen, gewinnen sie an Tragfähigkeit. Wenn sie nur aus einer Familie stammen, bleibt Astrakey vorsichtiger. Und wenn Systeme sich widersprechen, entsteht kein Fehler, sondern ein Spannungsfeld. Dieser Vergleich ist der Grund, warum ein Mehrsystem-Profil mehr ist als die Summe seiner Teile. Die Engine, die das leistet, ist auf einer eigenen Seite im Detail beschrieben.\n\n- Signale werden in gemeinsame Themen übersetzt.\n- Unabhängige Familien stärken ein Thema, eine einzelne Familie nicht.\n- Widersprüche werden zu Spannungsfeldern, nicht zu Fehlern."
      },
      {
        title: "Schritt drei, formulieren",
        body: "Erst nach Berechnung und Vergleich wird die Deutung formuliert. Hier kommt AI ins Spiel, aber in einer klar begrenzten Rolle. AI hilft, die Ergebnisse verständlich, warm und persönlich zu schreiben. Sie entscheidet nicht, welche Systeme übereinstimmen, sie gewichtet keine Themen und sie erfindet kein Profil. Die inhaltliche Grundlage steht bereits fest, bevor ein einziger Satz formuliert wird. Diese Trennung ist bewusst gewählt. Ein Sprachmodell ist hervorragend darin, komplexe Zusammenhänge lesbar zu machen, aber es ist nicht die richtige Instanz, um über die Wahrheit deines Profils zu entscheiden. Deshalb bleibt bei Astrakey die Berechnung die Quelle und die Sprache die Oberfläche. Du erkennst, wann gerechnet und wann formuliert wird. So entsteht ein Text, der sich gut liest und dessen Grundlage du trotzdem überprüfen kannst.\n\n- AI formuliert, sie entscheidet und gewichtet nicht.\n- Die inhaltliche Grundlage steht fest, bevor Sprache entsteht.\n- Berechnung ist die Quelle, Sprache ist die Oberfläche."
      },
      {
        title: "Warum diese Trennung Vertrauen schafft",
        body: "Die Trennung von Berechnung, Konvergenz und Sprache ist der eigentliche Grund, warum Astrakey erklärbar bleibt. Viele Angebote vermischen diese Ebenen. Eine schöne Formulierung wirkt dann wie ein Beweis, obwohl sie nur gut klingt. Astrakey geht den umgekehrten Weg. Bei jeder wichtigen Aussage kannst du nachsehen, welche Systeme sie tragen, wie viele unabhängige Familien zustimmen und wo Unsicherheit besteht. Astrakey behauptet nicht, die Wahrheit über dich zu kennen. Es macht ein Angebot zur Reflexion, das du prüfen kannst. Wenn etwas nicht zu dir passt, ist das ein wertvoller Hinweis und kein Widerspruch zum System. Genau diese Haltung unterscheidet eine erklärbare Methode von einem Versprechen über dein Schicksal. Auch eine saubere Methode beansprucht keine psychologische Aussagekraft. Sie macht nachvollziehbar, woher eine Aussage kommt, nicht, dass sie dich wissenschaftlich misst. Du bekommst bessere Fragen und eine nachvollziehbare Grundlage, nicht ein neues Etikett.\n\n- Klingt gut ist nicht dasselbe wie ist belegt.\n- Jede starke Aussage zeigt Belege, Konvergenz und Unsicherheit.\n- Reflexionsangebot statt Urteil über dein Schicksal."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb4-pipeline-einordnung.svg",
        alt: "Dein Profil entsteht in drei getrennten Schritten. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      },
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Dein Profil entsteht in drei getrennten Schritten. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Wie entsteht mein Profil bei Astrakey?",
        a: "In drei getrennten Schritten: Astrakey berechnet Signale pro System, vergleicht und gruppiert sie zu belegten Themen und formuliert daraus eine verständliche Deutung."
      },
      {
        q: "Schreibt eine AI mein Profil frei?",
        a: "Nein. AI formuliert nur die bereits berechneten und verglichenen Inhalte. Sie entscheidet nicht, welche Systeme übereinstimmen."
      },
      {
        q: "Brauche ich meine genaue Geburtszeit?",
        a: "Sie verbessert zeit- und ortsabhängige Systeme. Astrakey funktioniert auch ohne und kennzeichnet, welche Aussagen dadurch unsicherer sind."
      },
      {
        q: "Kann ich nachvollziehen, woher eine Aussage kommt?",
        a: "Ja. Bei wichtigen Aussagen kannst du sehen, welche Systeme und Familien sie tragen und wo Unsicherheit besteht."
      },
      {
        q: "Was bedeutet Konvergenz im zweiten Schritt?",
        a: "Konvergenz prüft, ob mehrere unabhängige Systemfamilien dasselbe Thema stützen, statt verwandte Signale doppelt zu zählen."
      },
      {
        q: "Ist die Berechnung eine AI?",
        a: "Nein. Berechnung und Vergleich folgen festen Regeln. AI kommt erst bei der Formulierung dazu."
      },
      {
        q: "Macht die Methode Astrakey zu einer objektiven Wahrheit?",
        a: "Nein. Die Methode macht das Profil nachvollziehbar, nicht absolut. Astrakey bleibt ein Reflexionsangebot."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  profilBuch: {
    key: "profilBuch",
    slug: "vollprofil-buch",
    navKey: "profilBuch",
    title: "Dein Seelenbuch. Ein erklärbarer Begleiter über dich selbst.",
    seoTitle: "Seelenbuch: dein erklärbares Profil als Buch",
    seoDescription: "Das Seelenbuch ist ein mehrhundertseitiger, erklärbarer Begleiter über dich, mit Kernthemen, Spannungsfeldern, Gaben und sichtbaren Systembelegen.",
    eyebrow: "Premium · Seelenbuch",
    lead: "Das Seelenbuch ist die ausführlichste Form deines Astrakey-Profils. Kein kurzer Report und kein hübsches PDF, sondern ein mehrhundertseitiges Nachschlagewerk über deine Kernthemen, Spannungsfelder, Gaben, Berufung und deinen Rhythmus. Jede starke Aussage zeigt, welche Systeme sie tragen, und bleibt ein Angebot zur Reflexion statt ein Urteil über dich.",
    answer: "Das Seelenbuch ist die ausführlichste Form deines Astrakey-Profils.",
    trustline: "Entsteht aus deinem Mehrsystem-Profil. Mit sichtbaren Systembelegen. Keine Diagnose, keine Vorhersage, kein Absolutheitsanspruch.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Preise ansehen",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Dein Seelenbuch. Ein erklärbarer Begleiter über dich selbst. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum ein Buch und kein Report",
        body: "Ein Report wird schnell überflogen und dann geschlossen. Ein Buch lädt ein, in Etappen zu lesen, zurückzukehren und an einer Stelle länger zu verweilen. Genau dafür ist das Seelenbuch gemacht. Es nimmt dein Mehrsystem-Profil und entfaltet es zu einer ruhigen, lesbaren Reise durch deine wichtigsten Themen. Statt dich mit einer Wand aus Symbolen, Zahlen und Fachbegriffen zu konfrontieren, führt es dich Kapitel für Kapitel von deinem Wesenskern über deine Gaben und Schatten bis zu Beziehung, Berufung und Rhythmus. Du musst nichts auf einmal lesen und nichts auf einmal verstehen. Ein Inhaltsverzeichnis und eine klare Kapitellogik lassen dich springen, ein einzelnes Kapitel lesen und später an einer ganz anderen Stelle weitermachen. Wer mag, beginnt mit der kompakten Zusammenfassung am Anfang und geht erst dann in die Tiefe. Das Seelenbuch verwandelt einen ersten Profilmoment in eine Ressource, zu der du immer wieder zurückkommen kannst, wenn sich deine Fragen verändern. Diese Tiefe ist der eigentliche Premium-Wert. Nicht mehr Text um des Textes willen, sondern mehr Kontext, mehr Zusammenhang und mehr Raum für ehrliche Reflexion.\n\n- Lesbar in Etappen, einzelne Kapitel statt alles auf einmal.\n- Navigierbar über Inhaltsverzeichnis und kompakte Zusammenfassung.\n- Geführte Reise durch Wesenskern, Gaben, Schatten, Beziehung, Berufung, Rhythmus.\n- Tiefe als Wert, nicht als Menge."
      },
      {
        title: "Wie dein Seelenbuch entsteht",
        body: "Das Seelenbuch druckt nicht einfach ein System nach dem anderen ab. Zuerst verdichtet Astrakey dein Profil über die Konvergenz-Engine. Es prüft, welche Themen wirklich über mehrere unabhängige Systemfamilien getragen werden, welche nur Nebenmotive sind und wo zwei Pole gleichzeitig aktiv sind. Erst aus dieser Verdichtung entsteht die Kapitelstruktur. Dadurch liest du keine lose Sammlung einzelner Deutungsschnipsel, sondern eine begründete Synthese deines Profils. Jedes Kapitel macht sichtbar, welche Systemfamilien ein Motiv stützen und an welchen Stellen Astrakey bewusst vorsichtig bleibt. So bleibt das Seelenbuch auch über viele Seiten hinweg nachvollziehbar. Du kannst bei einer wichtigen Aussage nachsehen, woher sie kommt, statt sie einfach glauben zu müssen. Genau diese Erklärbarkeit unterscheidet das Seelenbuch von einem langen, schön klingenden Text ohne Grundlage.\n\n- Erst Konvergenz, dann Kapitel.\n- Jedes Kapitel zeigt seine tragenden Systemfamilien.\n- Vorsicht statt Behauptung an unsicheren Stellen."
      },
      {
        title: "Was im Seelenbuch steht",
        body: "Ein gutes Nachschlagewerk braucht Orientierung. Das Seelenbuch gliedert dein Profil in klare Kapitel, die du einzeln oder als Ganzes lesen kannst. Es beginnt bei deinem Wesenskern und deinen Kernthemen, geht zu deinen Gaben und Schatten, zu Entscheidung und Energie, zu Beziehungsmustern, Arbeit und Berufung, zu deinem Rhythmus und Timing und schließt mit persönlichen Reflexionsfragen und möglichen nächsten Schritten. Die Kapitel zu Schatten und Berufung können besonders berühren. Sie sind so geschrieben, dass sie ein Thema benennen, ohne dich zu pathologisieren oder zu etikettieren, und sie laden dich ein, in deinem eigenen Tempo zu lesen und eine Stelle auch wegzulegen, wenn sie gerade zu viel ist. Jedes Kapitel erklärt, welche Systeme eine Aussage tragen, wo Unsicherheit bleibt und wie du das Thema in deinem Alltag prüfen kannst. Kurze Zwischenübersichten helfen, nach dem Lesen etwas Konkretes mitzunehmen. Das macht die Auswertung wertvoller als jede absolute Behauptung, denn du bekommst keine fertigen Wahrheiten über dich, sondern bessere Fragen und eine Sprache für Muster, die du vielleicht längst spürst.\n\n- Kapitel zu Kernthemen, Gaben, Schatten, Beziehung, Berufung, Rhythmus.\n- Schatten und Berufung mit Selbstfürsorge gerahmt, nicht pathologisierend.\n- Reflexionsfragen und nächste Schritte am Kapitelende.\n- Jede starke Aussage mit Systembelegen und markierter Unsicherheit."
      },
      {
        title: "Ein Nachschlagewerk ohne Absolutheitsanspruch",
        body: "Das Seelenbuch ist umfangreich, aber es behauptet nicht, die Wahrheit über dich zu kennen. Mehr Seiten bedeuten mehr Reflexion, nicht mehr Sicherheit. Deshalb rahmt jedes Kapitel seine Aussagen als Angebot. Wenn ein Abschnitt resoniert, kannst du tiefer eintauchen. Wenn etwas nicht passt, ist auch das ein wertvoller Hinweis und kein Widerspruch zum Buch. Astrakey trennt dabei sichtbar, wie präsent ein Thema ist, wie viele unabhängige Familien es tragen und wie belastbar deine Eingaben sind. Die genannten Systembelege sind dabei kein Dekor, sondern fachlich korrekt aus deinen Daten abgeleitet und nachvollziehbar zugeordnet. So entsteht ein ehrliches Bild, das dir Spielraum lässt. Das Seelenbuch gibt dir keine neue feste Identität und kein Etikett, das du dir umhängen musst. Es ist ein Begleiter, der dich aus mehreren Perspektiven beschreibt und dir hilft, dich selbst differenzierter zu lesen, ohne dich festzulegen.\n\nWenn dir bildhafte, poetische Sprache zu viel ist, ist eine nüchterne Lesart vorgesehen, die dieselben Inhalte sachlicher und knapper hält, für Menschen, die lieber zurückhaltend formuliert lesen. `[Platzhalter: nüchterne Kapitel-Variante, Verfügbarkeit und Umfang offen]`\n\n- Mehr Umfang heißt mehr Reflexion, nicht mehr Wahrheit.\n- Systembelege fachlich korrekt und nachvollziehbar, nicht dekorativ.\n- Auf Wunsch eine nüchterne, sachliche Lesart.\n- Kein Etikett, kein Schicksal, kein Urteil."
      },
      {
        title: "Lesen, wiederlesen, behalten",
        body: "Das Seelenbuch fühlt sich nicht wie ein technisches Dokument an, sondern wie ein ruhiger Lesefluss. Kapitel, Zwischenübersichten, kleine Reflexionsfragen und eine klare Gliederung machen es wiederlesbar. Genau das ist der Punkt. Ein Profil verändert seine Bedeutung, je nachdem, wo du im Leben gerade stehst. Ein Kapitel, das dich heute kalt lässt, kann in einem halben Jahr genau das richtige Wort treffen. Deshalb bleibt dein Seelenbuch zugänglich, sodass du es speichern, in Etappen lesen und später wiederfinden kannst. Manche möchten ihr Seelenbuch in Ruhe und ohne Bildschirm lesen, deshalb ist es so gestaltet, dass es sich auch als ausgedrucktes Werk gut lesen lässt. Dieser dauerhafte Zugang ist ein Vertrauenssignal. Wer für Tiefe entscheidet, soll die Inhalte behalten und nicht das Gefühl haben, etwas Flüchtiges gemietet zu haben. Das Seelenbuch ist damit weniger ein einmaliges Ergebnis und mehr ein Begleiter, der mit dir und deinen Fragen über die Zeit mitwächst.\n\nWenn du vorab einen Eindruck möchtest, ist eine Leseprobe vorgesehen, die dir den Ton und den Aufbau eines Kapitels zeigt, bevor du dich entscheidest. `[Platzhalter: Leseprobe / Beispielkapitel als Teaser, echtes Beispiel offen]`\n\n- Ruhiger Lesefluss statt technischer Report.\n- Dauerhaft zugänglich, in Etappen lesbar, auch als ausgedrucktes Werk.\n- Bedeutung verändert sich mit deinem Leben."
      },
      {
        title: "Teil eines lebendigen Profils",
        body: "Das Seelenbuch ist nicht das Ende deiner Reise, sondern oft ihr Mittelpunkt. Du liest ein Kapitel, markierst, was resoniert, hältst eigene Beobachtungen im Journaling fest und stellst später Fragen an den Companion. Tagesimpulse greifen Themen aus dem Buch auf und halten sie im Alltag lebendig. So entsteht ein Zusammenspiel, in dem das Seelenbuch die Tiefe liefert, Journaling sie erdet, Tagesimpulse sie wachhalten und der Companion bei Bedarf Zusammenhänge erklärt. Wenn sich dein Profil durch genauere Angaben verfeinert, wächst auch die Grundlage deines Seelenbuchs mit. Dadurch bleibt es kein statisches Dokument, sondern Teil einer fortlaufenden Arbeit mit dir selbst. Genau diese Verbindung macht den Premium-Wert nachvollziehbar. Du zahlst nicht für einen einzelnen Text, sondern für eine zusammenhängende Umgebung, in der dein Profil über Zeit nutzbar bleibt.\n\n- Mittelpunkt, nicht Endpunkt deiner Profilarbeit.\n- Verbunden mit Journaling, Tagesimpulsen und Companion.\n- Wächst mit deinem verfeinerten Profil mit."
      },
      {
        title: "Tiefe ohne Druck",
        body: "Das Seelenbuch ist ein natürlicher Grund für ein Premium-Modell, aber niemals ein Grund für Druck. Der kostenlose Einstieg zeigt zuerst, ob Astrakey bei dir Resonanz erzeugt. Das Seelenbuch lohnt sich dann, wenn du tiefer lesen, Zusammenhänge verstehen und deine Themen langfristig begleiten möchtest. Es gibt keine künstliche Dringlichkeit, keine Countdown-Logik und keine Heilsprache. Weil das Seelenbuch sehr persönliche Informationen verarbeitet, bleibt auch hier alles transparent. Du siehst, welche Daten in die Auswertung einfließen, du kannst exportieren und löschen, und Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen. Je persönlicher die Auswertung, desto klarer müssen Kontrolle und Grenzen sein. Der Kaufgrund ist Tiefe, und diese Fairness ist Teil des Werts.\n\n- Premium wegen Tiefe, nicht wegen Verknappung.\n- Sichtbare Datennutzung, Export und Löschung.\n- Keine Diagnose, keine Vorhersage, keine Heilsprache."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb8-deine-kernthemen.svg",
        alt: "Dein Seelenbuch. Ein erklärbarer Begleiter über dich selbst. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was ist das Seelenbuch?",
        a: "Das Seelenbuch ist die ausführlichste Form deines Astrakey-Profils, ein mehrhundertseitiger, erklärbarer Begleiter über deine Kernthemen, Spannungsfelder, Gaben, Berufung und deinen Rhythmus, jeweils mit sichtbaren Systembelegen."
      },
      {
        q: "Ist das Seelenbuch nur ein langes PDF?",
        a: "Nein. Es kann als exportierbares Dokument und als ruhiger Lesemodus erscheinen. Wichtig ist die strukturierte, wiederlesbare Tiefe mit Kapiteln, Belegen und Reflexionsfragen, nicht das Dateiformat."
      },
      {
        q: "Ist das Seelenbuch im kostenlosen Einstieg enthalten?",
        a: "Der kostenlose Einstieg zeigt dein erstes Profil und erste Kernthemen. Das vollständige Seelenbuch ist als Premium-Tiefe gedacht."
      },
      {
        q: "Schreibt eine AI das ganze Seelenbuch frei?",
        a: "Nein. Die Grundlage entsteht aus Berechnung und Konvergenz. AI formuliert diese geprüften Inhalte lesbar, entscheidet aber nicht, welche Systeme übereinstimmen, und erfindet kein Profil."
      },
      {
        q: "Kann ich das Seelenbuch als Wahrheit über mich lesen?",
        a: "Nein. Es ist ein Reflexionsangebot. Es kann Sprache für Muster geben, ersetzt aber keine eigene Entscheidung und keine fachliche Beratung."
      },
      {
        q: "Welche Kapitel enthält ein Seelenbuch?",
        a: "Unter anderem Kernthemen, Gaben, Schatten, Beziehung, Arbeit und Berufung, Rhythmus, Timing, Reflexionsfragen und nächste Schritte. Die genaue Struktur ergibt sich aus der Konvergenz deines Profils."
      },
      {
        q: "Kann ich das Seelenbuch später wieder öffnen oder exportieren?",
        a: "Ja. Wiederlesbarkeit, Export und ein klar gegliederter Lesemodus gehören zum Wert des Seelenbuchs."
      },
      {
        q: "Ist das Seelenbuch eine Diagnose oder Therapie?",
        a: "Nein. Es ist keine medizinische, psychologische oder therapeutische Beratung und ersetzt keine Fachperson."
      },
      {
        q: "Muss ich das Seelenbuch am Stück lesen?",
        a: "Nein. Es ist in Etappen lesbar und über Inhaltsverzeichnis und Kapitellogik navigierbar. Du kannst einzelne Kapitel lesen, springen und eine kompakte Zusammenfassung als Einstieg nutzen."
      },
      {
        q: "Was, wenn mich ein Kapitel wie Schatten oder Berufung belastet?",
        a: "Diese Kapitel sind achtsam und ohne Pathologisierung formuliert. Du bestimmst dein Tempo und kannst eine Stelle weglegen. Bei belastenden Themen ersetzt das Seelenbuch keine Fachperson."
      },
      {
        q: "Geht es auch nüchterner statt poetisch?",
        a: "Eine nüchterne, sachlichere Lesart ist vorgesehen, damit du dieselben Inhalte zurückhaltender formuliert lesen kannst. `[Platzhalter: Verfügbarkeit der nüchternen Variante offen]`"
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  beziehungen: {
    key: "beziehungen",
    slug: "beziehungen",
    navKey: "beziehungen",
    title: "Eure Beziehung verständlicher, nicht bewertet.",
    seoTitle: "Beziehungsanalyse: Resonanz und Reibung verstehen",
    seoDescription: "Astrakey verbindet zwei Profile mit beidseitiger Einwilligung und zeigt Resonanz, Reibung und Entwicklungsfelder. Keine Passt-Bewertung, keine Garantie.",
    eyebrow: "Kernmodul · Beziehungsanalyse",
    lead: "Die Beziehungsanalyse verbindet zwei Astrakey-Profile, wenn beide Personen zustimmen. Sie fragt nicht, ob ihr zusammenpasst, sondern hilft euch, eure Muster und Missverständnisse besser zu verstehen. Sie zeigt, wo Resonanz entsteht, wo Reibung auftaucht und welche Entwicklungsfelder zwei Menschen gemeinsam sichtbar machen. Sie gilt für jede nahe Beziehung zwischen zwei Menschen, ob Partnerschaft, Freundschaft oder Familie, und sie denkt nicht-monogame und queere Konstellationen selbstverständlich mit.",
    answer: "Die Beziehungsanalyse verbindet zwei Astrakey-Profile, wenn beide Personen zustimmen.",
    trustline: "Nur mit beidseitiger, widerrufbarer Einwilligung. Keine Passt-Bewertung, keine Paartherapie. Keine heimliche Auswertung einer zweiten Person.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Beziehungsanalyse verstehen",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Eure Beziehung verständlicher, nicht bewertet. als Astrakey Markenbild",
    sections: [
      {
        title: "Verstehen statt bewerten",
        body: "Viele Beziehungs-Apps geben dir eine Note. Sie sagen, ob zwei Menschen zusammenpassen, und reduzieren etwas Lebendiges auf eine Prozentzahl. Astrakey macht das bewusst nicht. Die Beziehungsanalyse fragt nicht, ob eure Beziehung richtig oder falsch ist, und sie verspricht kein Ergebnis für eure gemeinsame Zukunft. Stattdessen zeigt sie, wo zwischen euch Resonanz entsteht, an welchen Stellen sich Reibung wiederholt und welche Themen ihr gemeinsam sichtbar macht. Das ist hilfreicher als ein Urteil, weil es euch ins Gespräch bringt statt zu einem Etikett zu führen. Sie ist dabei weder eine Paartherapie noch ein Konfliktgutachten und sagt nicht, wer recht hat. Eine Beziehung ist keine feste Größe, sondern etwas, das ihr gestaltet. Deshalb liefert Astrakey Beobachtungen und Fragen, mit denen ihr arbeiten könnt, und keine Bewertung, die ihr nur bestätigen oder ablehnen müsst. Wir sprechen bewusst neutral von zwei Menschen und nicht von einer bestimmten Beziehungsform, denn die gleiche Haltung gilt für jede nahe Verbindung. Der Wert liegt im besseren Verständnis füreinander, nicht in einer Zahl.\n\n- Keine Passt-Bewertung und keine Prozentzahl.\n- Keine Paartherapie und kein Konfliktgutachten.\n- Resonanz, Reibung und gemeinsame Themen statt Urteil.\n- Beobachtungen und Fragen, mit denen ihr arbeiten könnt."
      },
      {
        title: "Einwilligung ist die Grundlage",
        body: "Eine Beziehungsanalyse verarbeitet sensible Informationen über zwei Menschen. Deshalb beginnt sie bei Astrakey immer mit klarer, beidseitiger Einwilligung. Beide Personen haben ein eigenes Profil und stimmen ausdrücklich zu, dass ihre Profile für eine gemeinsame Analyse verbunden werden. Niemand wird heimlich ausgewertet und niemand wird spielerisch im Hintergrund vermessen. Die Einwilligung ist jederzeit widerrufbar. Wenn eine Person sie zurückzieht, endet die gemeinsame Auswertung. Bereits berechnete gemeinsame Auswertungen werden dann nicht weiter genutzt und entfallen für beide Seiten, und ihr behaltet die Kontrolle, die Inhalte zu exportieren oder zu löschen, bevor sie verschwinden. Was nach einem Widerruf bleibt, sind eure beiden Einzelprofile, nicht die gemeinsame Lesart. Beide sehen transparent, welche Daten in die Analyse einfließen und wie sie exportiert oder gelöscht werden können. Diese Klarheit ist kein bürokratisches Beiwerk, sondern Teil des eigentlichen Produkts. Eine Beziehung lebt von Vertrauen, und eine Analyse, die dieses Vertrauen verletzen würde, hätte keinen Wert. Astrakey behandelt die Daten beider Personen deshalb mit demselben Respekt, mit dem ihr eure Beziehung behandelt.\n\n- Immer beidseitige, ausdrückliche Einwilligung.\n- Jederzeit widerrufbar, dann endet die gemeinsame Analyse und entfällt für beide.\n- Keine heimliche und keine spielerische Auswertung Dritter."
      },
      {
        title: "Was die Analyse sichtbar macht",
        body: "Die Beziehungsanalyse verbindet mehrere Perspektiven zu einem gemeinsamen Bild. Sie nimmt eure individuellen Profile, betrachtet Resonanzpunkte, an denen ihr euch ähnlich bewegt oder gut ergänzt, und Reibungspunkte, an denen eure Muster regelmäßig aneinandergeraten. Sie zeigt Entwicklungsfelder, also Themen, an denen ihr gemeinsam wachsen könnt, und sie macht Spannungsfelder sichtbar, in denen zwei Pole gleichzeitig wirken. Wie im Einzelprofil zählt auch hier nicht eine laute Einzelaussage, sondern was über mehrere unabhängige Systemfamilien hinweg wiederkehrt. So entsteht ein differenziertes Bild statt einer dramatischen Schlagzeile. Zu vielen Punkten schlägt Astrakey Gesprächsimpulse vor, die ihr nutzen könnt, um ein Thema gemeinsam zu betrachten. Diese Impulse sind Einladungen, keine Anweisungen. Sie helfen, über Dinge zu sprechen, die im Alltag oft unausgesprochen bleiben, und geben eurem Austausch eine ruhige, neugierige Richtung.\n\n- Resonanz, Reibung und Entwicklungsfelder klar getrennt.\n- Beziehungs-Spannungsfelder statt vermeintlicher Fehler.\n- Gesprächsimpulse als Einladung, nicht als Anweisung."
      },
      {
        title: "Reibung ist kein Defekt",
        body: "Wenn zwei Profile sich an einer Stelle widersprechen, ist das kein Alarmzeichen. Reibung gehört zu jeder nahen Beziehung und zeigt oft genau die Stellen, an denen am meisten Verständnis möglich wird. Astrakey behandelt solche Punkte deshalb nicht als Mangel, sondern als Spannungsfeld, in dem zwei unterschiedliche Bedürfnisse gleichzeitig berechtigt sind. Das eine möchte vielleicht Nähe, das andere Raum. Das eine sucht Tempo, das andere Ruhe. Beide Seiten haben einen guten Grund, und das Problem ist selten die Person, sondern die unausgesprochene Erwartung. Wenn ihr diese Muster benennen könnt, verlieren sie ihre Schärfe. Astrakey liefert dafür keine Lösung von außen und keine Bewertung, wer recht hat. Es macht die Dynamik sichtbar und überlässt euch die Deutung. Genau diese Haltung unterscheidet die Beziehungsanalyse von Angeboten, die mit Kompatibilität und Schicksal arbeiten. Ihr bekommt bessere Fragen, nicht ein Urteil über eure Beziehung.\n\n- Reibung gehört zu Nähe und ist kein Defekt.\n- Zwei berechtigte Bedürfnisse statt richtig und falsch.\n- Astrakey zeigt die Dynamik, ihr behaltet die Deutung."
      },
      {
        title: "Für welche Beziehungen es passt",
        body: "Die Beziehungsanalyse ist nicht nur für romantische Partnerschaften gedacht. Sie kann überall dort helfen, wo zwei Menschen eine nahe Beziehung teilen und sich besser verstehen möchten. Das kann eine Partnerschaft sein, eine enge Freundschaft, eine familiäre Beziehung oder eine wichtige Verbindung am Übergang in eine neue Lebensphase. Wir denken dabei alle Beziehungsformen selbstverständlich mit, auch nicht-monogame und queere Konstellationen, und wir formulieren bewusst neutral, ohne ein bestimmtes Modell von Beziehung vorauszusetzen. In einer Konstellation mit mehreren Menschen betrachtet Astrakey jeweils zwei Profile zueinander, immer nur mit der Einwilligung der beteiligten Personen. Entscheidend ist, dass alle Beteiligten freiwillig teilnehmen und ein eigenes Profil haben. Für viele Menschen ist der konkrete Nutzen hier sogar greifbarer als beim Einzelprofil, weil Beziehung im Alltag ständig erlebbar ist. Ihr erkennt eure wiederkehrenden Missverständnisse, versteht, warum bestimmte Gespräche immer ähnlich verlaufen, und gewinnt eine ruhigere Sicht auf eure Unterschiede. Astrakey verspricht dabei keine bessere Beziehung und keine Rettung. Es bietet eine differenziertere Sprache an, mit der ihr selbst entscheiden könnt, was ihr verändern, annehmen oder einfach besser verstehen möchtet.\n\n- Für Partnerschaft, Freundschaft, Familie und enge Verbindungen.\n- Nicht-monogame und queere Konstellationen ausdrücklich mitgedacht, neutrale Sprache.\n- Alle Beteiligten freiwillig und mit eigenem Profil.\n- Mehr Verständnis im Alltag, keine Garantie für die Beziehung."
      },
      {
        title: "Wie eine Beziehungsanalyse abläuft",
        body: "Der Weg zur Beziehungsanalyse ist einfach und bleibt zu jedem Zeitpunkt in eurer Kontrolle. Zuerst startet jede Person ihr eigenes Profil. Schon das ist kostenlos möglich und zeigt euch einzeln erste Kernthemen. Danach lädt eine Person die andere ein, die Profile für eine gemeinsame Analyse zu verbinden, und die zweite Person stimmt ausdrücklich zu. Erst dann liest Astrakey beide Profile zusammen und erzeugt die gemeinsame Auswertung mit Resonanz, Reibung, Entwicklungsfeldern und Gesprächsimpulsen. Ihr könnt die Ergebnisse in Ruhe lesen, einzelne Themen vertiefen und bei Fragen den Companion nutzen, ohne dass dabei Aussagen über die jeweils andere Person ohne deren Einwilligung entstehen. Wenn einer von euch die Verbindung beendet, endet auch die gemeinsame Analyse. So bleibt die Beziehungsanalyse ein gemeinsames Werkzeug, das ihr bewusst öffnet und jederzeit wieder schließen könnt.\n\n- Schritt für Schritt: eigenes Profil, Einladung, Zustimmung, Analyse.\n- Gemeinsame Auswertung erst nach beidseitiger Einwilligung.\n- Verbindung jederzeit beendbar."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb9-deine-innere-spannung.svg",
        alt: "Eure Beziehung verständlicher, nicht bewertet. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was zeigt die Beziehungsanalyse?",
        a: "Sie zeigt, wo zwischen zwei Menschen Resonanz und Reibung entstehen und welche Entwicklungsfelder und Gesprächsimpulse sich daraus ergeben. Sie bewertet nicht, ob ihr zusammenpasst."
      },
      {
        q: "Brauche ich die Zustimmung der anderen Person?",
        a: "Ja. Eine gemeinsame Analyse entsteht nur, wenn beide Personen ein eigenes Profil haben und ausdrücklich zustimmen. Die Einwilligung ist jederzeit widerrufbar."
      },
      {
        q: "Kann ich jemanden heimlich analysieren?",
        a: "Nein. Astrakey wertet keine zweite Person ohne deren Einwilligung aus. Ohne beidseitige Zustimmung gibt es keine gemeinsame Analyse."
      },
      {
        q: "Sagt mir Astrakey, ob meine Beziehung Zukunft hat?",
        a: "Nein. Astrakey gibt keine Vorhersage und keine Garantie für eine Beziehung. Es hilft, eure Muster und Dynamiken besser zu verstehen."
      },
      {
        q: "Ist Reibung ein schlechtes Zeichen?",
        a: "Nein. Reibung gehört zu nahen Beziehungen. Astrakey behandelt sie als Spannungsfeld mit zwei berechtigten Seiten, nicht als Fehler."
      },
      {
        q: "Funktioniert das nur für Paare?",
        a: "Nein. Es eignet sich auch für Freundschaften, familiäre und andere enge Beziehungen und denkt nicht-monogame und queere Konstellationen ausdrücklich mit, sofern alle Beteiligten freiwillig teilnehmen."
      },
      {
        q: "Was passiert mit unseren Daten?",
        a: "Beide sehen, welche Daten einfließen, und können exportieren oder löschen. Endet die Einwilligung einer Person, endet die gemeinsame Auswertung."
      },
      {
        q: "Was passiert beim Widerruf mit einer bereits erstellten gemeinsamen Auswertung?",
        a: "Sie wird nicht weiter genutzt und entfällt für beide Seiten. Vorher könnt ihr Inhalte exportieren oder löschen. Eure beiden Einzelprofile bleiben davon unberührt."
      },
      {
        q: "Ist die Beziehungsanalyse eine Paarberatung?",
        a: "Nein. Sie ist ein Reflexionswerkzeug und ersetzt keine therapeutische oder paartherapeutische Beratung. Sie ist auch kein Konfliktgutachten und sagt nicht, wer recht hat."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  companion: {
    key: "companion",
    slug: "companion",
    navKey: "companion",
    title: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel.",
    seoTitle: "Companion: dein AI-Begleiter fürs Profil",
    seoDescription: "Astrakey Companion erklärt dein Profil aus Quelle, Kontext und Frage. Er nutzt Profil, Seelenbuch und freigegebene Notizen. Kein Orakel, keine Beratung.",
    eyebrow: "Premium · Begleitung",
    lead: "Der Companion, dein Begleiter, hilft dir, dein Mehrsystem-Profil zu verstehen. Gerade wenn du die Systeme noch nicht kennst, erklärt er dir verständlich, was du gerade liest. Wenn du ein Kapitel, ein Systemsignal oder ein Beziehungsmuster liest und Fragen hast, erklärt er, woher eine Aussage kommt, wie sie gemeint ist und welche Reflexionsfrage sich daraus ergibt. Er bleibt warm und verständlich, ohne so zu tun, als hätte er eine höhere Wahrheit über dich, und du musst ihn nicht ständig nutzen.",
    answer: "Der Companion, dein Begleiter, hilft dir, dein Mehrsystem-Profil zu verstehen.",
    trustline: "Arbeitet nur mit freigegebenem Kontext. Zeigt, worauf eine Antwort beruht. Kein Ersatz für Menschen oder Beratung, keine Entscheidungen, keine Vorhersage.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "AI-Transparenz ansehen",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel. als Astrakey Markenbild",
    sections: [
      {
        title: "Was der Companion ist und was nicht",
        body: "Ein Mehrsystem-Profil ist reich, und kaum jemand versteht es in einem einzigen Durchgang. Du liest einen Satz, spürst Resonanz und hast danach Fragen. Genau hier setzt der Companion, dein Begleiter, an. Er ist kein allgemeiner Chatbot und kein Orakel, das dir sagt, was du tun sollst. Er ist ein ruhiger Gesprächsraum, der dein Profil erklärt, gute Fragen stellt und Grenzen respektiert. Besonders für Einsteiger ohne Systemwissen ist er hilfreich, denn er erklärt dir die Systeme in einfacher Sprache, sobald sie in deinem Profil auftauchen, ohne dass du dich vorher einlesen musst. Wenn du wissen möchtest, was ein Kernthema bedeutet, warum es in mehreren Systemen auftaucht oder welche Journaling-Frage dazu passt, übersetzt er die Antwort verständlich und warm. Dabei tut er nicht so, als wüsste eine AI mehr über dich als du selbst. Der Companion ersetzt weder dein eigenes Spüren noch einen Menschen oder eine fachliche Beratung. Er ist ein Übersetzer zwischen Profil, Methode und Alltag, den du nutzt, wenn du ihn brauchst, und der nicht ständig verfügbar sein muss. Er macht ein komplexes Profil navigierbar, ohne es zu vereinfachen oder dir eine Bedeutung aufzudrängen.\n\n- Erklärbegleiter, kein Orakel und kein allgemeiner Chatbot.\n- Erklärt gerade Einsteigern ohne Systemwissen die Systeme verständlich.\n- Kein Ersatz für Menschen oder Beratung, muss nicht ständig verfügbar sein.\n- Stellt Fragen, statt Antworten über dich zu behaupten."
      },
      {
        title: "Wert entsteht aus Kontext",
        body: "Der Unterschied zwischen dem Companion und einem allgemeinen AI-Tool ist der Kontext. Ein beliebiges Sprachmodell kennt dich nicht. Der Companion kann mit deinem Mehrsystem-Profil, deinem Seelenbuch und freigegebenen Journaling-Notizen arbeiten. Dadurch werden seine Antworten persönlich und anschlussfähig, statt allgemein zu bleiben. Wenn du ein Kapitel aus dem Seelenbuch nicht ganz greifst, kann er es im Zusammenhang deiner Kernthemen erklären. Wenn ein Tagesimpuls dich beschäftigt, kann er ihn mit deinen wiederkehrenden Themen verbinden. Du entscheidest dabei, welcher Kontext einbezogen wird, denn der Companion arbeitet nur mit dem, was du freigibst. Genau das macht ihn zu einer ernsthaften Begleitung und nicht zu einer netten Spielerei. Premium bedeutet hier nicht Abhängigkeit, sondern Zugang zu besserem Kontext, längeren Gesprächsverläufen und einer Begleitung, die deine eigene Profilarbeit über Zeit stützt.\n\n- Kontext aus Profil, Seelenbuch und freigegebenen Notizen.\n- Du steuerst, welcher Kontext einbezogen wird.\n- Premium als besserer Kontext, nicht als Abhängigkeit."
      },
      {
        title: "Quelle, Kontext, Frage",
        body: "Eine gute Companion-Antwort klingt nicht nur schön, sondern zeigt ihre Grundlage. Deshalb folgt der Companion einer klaren Logik. Zuerst die Quelle: Welcher Teil deines Profils ist für deine Frage relevant, und kommt eine Aussage aus Astrologie, Human Design, Numerologie, einem Fragebogenwert oder aus deinem Journaling? Dann der Kontext: In welcher Situation fragst du, und welche Unsicherheit bleibt? Und schließlich die Frage: Welche nächste Reflexionsfrage hilft dir weiter? Diese Struktur macht den Companion vertrauenswürdig, weil du erkennst, worauf eine Aussage beruht, statt sie einfach glauben zu müssen. Er improvisiert nicht ins Blaue und behauptet keine geheime Wahrheit. Du kannst nachvollziehen, ob eine Antwort auf berechneten Profilfakten, auf freigegebenen Notizen oder auf einer allgemeinen Reflexionsfrage beruht. So bleibt das Gespräch persönlich, ohne beliebig zu werden, und du behältst die Deutungshoheit über dein eigenes Profil.\n\n- Jede Antwort macht ihre Quelle sichtbar.\n- Kontext und verbleibende Unsicherheit werden benannt.\n- Du behältst die Deutungshoheit."
      },
      {
        title: "AI formuliert, sie urteilt nicht",
        body: "Manche Menschen sorgen sich, dass ein Sprachmodell frei über ihre Persönlichkeit urteilt. Beim Companion ist das ausgeschlossen, weil Berechnung und Sprache getrennt bleiben. Dein Profil entsteht aus festen Regeln, Systemlogik und der Konvergenz mehrerer Systemfamilien. Die AI entscheidet nicht, welche Systeme übereinstimmen, und sie erfindet kein Profil. Ihre Aufgabe ist es, geprüfte und freigegebene Informationen verständlich zu formulieren, zu verbinden und auf deine Frage zu beziehen. Astrakey macht dabei sichtbar, wann gerechnet und wann formuliert wird. Diese Trennung schützt vor Überhöhung. Die AI ist ein Werkzeug, keine Autorität über dich. Sie spricht nicht mit der Stimme eines Schicksals, sondern hilft dir, dein eigenes Profil besser zu lesen. Wenn du an einer Stelle unsicher bist, sagt der Companion das auch, statt eine Gewissheit vorzutäuschen, die es nicht gibt.\n\n- Berechnung und Formulierung bleiben getrennt.\n- AI entscheidet nicht über Übereinstimmung von Systemen.\n- Werkzeug statt Autorität, mit sichtbarer Unsicherheit."
      },
      {
        title: "Datenschutz auch im Gespräch",
        body: "Ein Begleiter, mit dem man redet, kann schnell sehr persönliche Fragen erhalten. Deshalb gilt Datenminimierung auch im Gespräch. Der Companion nutzt nur die Profilteile und die freigegebenen Notizen, die für deine Frage relevant sind, und er bezieht nichts ein, was du nicht freigegeben hast. Du siehst, welcher Kontext eine Rolle spielt, und du kannst Inhalte exportieren oder löschen. Gerade bei sensiblen Themen ist es wichtig, dass aus Begleitung keine unnötige Datensammlung wird. Astrakey erklärt deshalb klar, wie der Companion mit deinen Informationen umgeht und wo seine Grenzen liegen. Diese Sorgfalt ist kein Beiwerk, sondern Teil des Vertrauens, das ein persönlicher Begleiter braucht. Du sollst frei fragen können, ohne das Gefühl, dass jedes Wort dauerhaft und ohne Zweck gespeichert wird. Kontrolle bleibt bei dir, und der Companion arbeitet innerhalb der Grenzen, die du setzt.\n\n- Nur relevanter, freigegebener Kontext im Gespräch.\n- Sichtbarkeit, Export und Löschung deiner Inhalte.\n- Begleitung ohne unnötige Datensammlung."
      },
      {
        title: "Klare Grenzen schaffen Vertrauen",
        body: "Eine gute Begleitung erkennt, wann sie nicht antworten sollte. Der Companion gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Ratschläge und trifft keine Entscheidungen für dich. Bei Beziehungsthemen bleibt er respektvoll und macht keine Aussagen über eine zweite Person, wenn deren Einwilligung fehlt. Wenn ein optionaler symbolischer oder Kartenmoment genutzt wird, behandelt er ihn nicht als Vorhersage, sondern als Frage für den Augenblick, etwa worauf du heute achten könntest. Bei sensiblen oder belastenden Themen benennt er klare Grenzen, verweist darauf, dass er keine Fachperson ersetzt, und weist auf passende Hilfsangebote hin. Wenn es dir psychisch schlecht geht oder du an dich selbst denkst, ist der Companion nicht der richtige Ort, und du findest dort den Hinweis auf professionelle Notfall- und Hilfsangebote. `[Platzhalter: konkrete Notfall- und Hilfsangebote je Land, in Daten und Sicherheit und FAQ gepflegt]` Diese Grenzen sind keine Schwäche, sondern der Grund, warum du dem Companion vertrauen kannst. Er erzeugt keinen Druck, keine Angst und keine Abhängigkeit. Symbolische Impulse dürfen öffnen, aber nicht bestimmen. So bleibt der Companion eine Stimme neben deiner eigenen und niemals ein Ersatz für deine eigene Entscheidung.\n\n- Keine Diagnose, keine Beratung, keine Entscheidung.\n- Bei belastenden Themen klare Grenze und Hinweis auf Hilfsangebote.\n- Keine Aussage über Dritte ohne deren Einwilligung.\n- Symbolische Impulse öffnen, sie bestimmen nicht."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Was ist der Companion?",
        a: "Der Companion ist ein AI-Begleiter, der dein Mehrsystem-Profil verständlich macht. Er erklärt, woher eine Aussage kommt, wie sie gemeint ist und welche Reflexionsfrage dazu passt."
      },
      {
        q: "Ist der Companion ein Orakel?",
        a: "Nein. Er sagt nichts voraus und sagt dir nicht, was du tun sollst. Er erklärt dein Profil und stellt gute Fragen."
      },
      {
        q: "Urteilt eine AI über mich?",
        a: "Nein. Dein Profil entsteht aus Berechnung und Konvergenz. Die AI formuliert geprüfte Informationen verständlich, entscheidet aber nicht, welche Systeme übereinstimmen."
      },
      {
        q: "Womit arbeitet der Companion?",
        a: "Mit deinem Profil, deinem Seelenbuch und freigegebenen Journaling-Notizen. Du steuerst, welcher Kontext einbezogen wird."
      },
      {
        q: "Gibt der Companion Beratung?",
        a: "Nein. Er gibt keine medizinische, therapeutische, rechtliche oder finanzielle Beratung und trifft keine Entscheidungen für dich."
      },
      {
        q: "Sagt der Companion etwas über meinen Partner?",
        a: "Nur wenn die andere Person ein eigenes Profil hat und ausdrücklich zugestimmt hat. Ohne Einwilligung macht er keine Aussagen über Dritte."
      },
      {
        q: "Was passiert mit dem, was ich schreibe?",
        a: "Der Companion nutzt nur relevanten, freigegebenen Kontext. Du siehst, was einbezogen wird, und kannst Inhalte exportieren oder löschen."
      },
      {
        q: "Ist der Companion im kostenlosen Einstieg enthalten?",
        a: "Der kostenlose Einstieg zeigt dein erstes Profil. Die tiefere Begleitung mit mehr Kontext und längeren Gesprächsverläufen ist als Premium gedacht."
      },
      {
        q: "Hilft der Companion auch, wenn ich die Systeme nicht kenne?",
        a: "Ja. Gerade dafür ist er gedacht. Er erklärt dir die Systeme in einfacher Sprache, sobald sie in deinem Profil auftauchen, ohne dass du dich vorher einlesen musst."
      },
      {
        q: "Was, wenn es mir psychisch schlecht geht?",
        a: "Der Companion ist dafür nicht der richtige Ort und ersetzt keine Fachperson. Bei belastenden Themen benennt er klare Grenzen und verweist auf professionelle Notfall- und Hilfsangebote. `[Platzhalter: konkrete Hilfsangebote je Land]`"
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  tagesimpulse: {
    key: "tagesimpulse",
    slug: "tagesimpulse",
    navKey: "tagesimpulse",
    title: "Ein Tagesimpuls aus deinem Profil. Nicht aus deinem Sternzeichen.",
    seoTitle: "Tagesimpulse: dein Profil im Alltag",
    seoDescription: "Astrakey-Tagesimpulse kommen aus deinem persönlichen Profil und aktuellem Timing, nicht aus deinem Sternzeichen. Ein ruhiger Fokus, pausierbar, ohne Druck.",
    eyebrow: "Begleitung im Alltag",
    lead: "Ein Tageshoroskop spricht für Millionen Menschen mit demselben Sternzeichen. Ein Astrakey-Tagesimpuls beginnt bei dir: bei deinen Kernthemen, deinen Spannungsfeldern und dem aktuellen Timing. Daraus entsteht ein ruhiger Fokus für den Tag, ein Vorschlag zur Beobachtung, keine Vorhersage.",
    answer: "Ein Tageshoroskop spricht für Millionen Menschen mit demselben Sternzeichen.",
    trustline: "Aus deinem persönlichen Profil, nicht aus deinem Sternzeichen. Kein Streak, kein Countdown, bewusst anti-süchtig und jederzeit pausierbar. Keine Vorhersage, kein Druck, keine Dringlichkeit.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Journaling ansehen",
    image: "/images/hermetia/dawn-clock-of-becoming.png",
    imageAlt: "Ein Tagesimpuls aus deinem Profil. Nicht aus deinem Sternzeichen. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum ein Tageshoroskop dich selten meint",
        body: "Ein klassisches Tageshoroskop ordnet alle Menschen einem von zwölf Sternzeichen zu und schreibt dann einen Satz für diese ganze Gruppe. Das kann unterhaltsam sein, aber es kann dich gar nicht persönlich meinen, weil es nichts über dich weiß außer einem groben Geburtsmonat. Astrakey arbeitet an einer anderen Stelle. Die Grundlage ist dein Mehrsystem-Profil mit allen Themen, die bei dir über mehrere unabhängige Perspektiven hinweg wiederkehren. Aktuelles Timing färbt diesen Fokus nur ein, statt ihn zu ersetzen. Dadurch entsteht kein lauter Anspruch über deinen Tag, sondern ein leiser, persönlicher Reflexionsrahmen. Der Impuls fragt, welche deiner eigenen Kernthemen heute relevant sein könnten, und nicht, was angeblich allen Menschen eines Sternzeichens passiert. Genau diese Verschiebung macht aus einem allgemeinen Spruch eine Beobachtung, die zu dir gehört.\n\n- Ein Tageshoroskop spricht für viele, ein Tagesimpuls beginnt bei dir.\n- Dein Profil bleibt die Grundlage, Timing färbt nur den Fokus.\n- Kein Anspruch über deinen Tag, sondern ein persönlicher Reflexionsrahmen."
      },
      {
        title: "Wie ein persönlicher Tagesimpuls entsteht",
        body: "Ein Tagesimpuls verbindet zwei Schichten. Die erste Schicht ist stabil und kommt aus deinem Profil: deine Kernthemen, deine wiederkehrenden Spannungsfelder und die Motive, die mehrere Systemfamilien gemeinsam tragen. Die zweite Schicht ist beweglich und kommt aus dem Timing: vorsichtig gewichtete Signale aus Tageszyklen, Transiten oder numerischen Rhythmen. Ein gewichtetes Timing-Signal bedeutet schlicht, dass nicht jedes Zeitsignal gleich laut zählt. Signale, die zu einem deiner Kernthemen passen, bekommen mehr Gewicht, schwächere oder unpassende bleiben leise. So bestimmt nicht der Kalender den Ton, sondern dein Profil. Astrakey legt diese Schichten nicht als Befehl übereinander, sondern als Frage. Aus der Verbindung entsteht ein kurzer Fokus, der zu deinen eigenen Themen passt, statt eine allgemeine Stimmung auszurufen. Wichtig ist, dass die bewegliche Schicht die stabile nie überschreibt. Dein Profil bleibt der Anker, das Timing ist nur die Tagesfarbe. So bleibt der Impuls persönlich und zugleich vorsichtig, weil er sich auf etwas stützt, das bei dir bereits mehrfach sichtbar war.\n\n- Stabile Schicht: deine Kernthemen und Spannungsfelder aus dem Profil.\n- Bewegliche Schicht: vorsichtig gewichtete Timing-Signale.\n- Dein Profil ist der Anker, das Timing nur die Tagesfarbe."
      },
      {
        title: "Vorschlag zur Beobachtung, keine Vorhersage",
        body: "Ein Astrakey-Tagesimpuls sagt nicht, was passieren wird. Er behauptet keinen Glückstag, keinen Risikotag und keine Entscheidung, die du treffen sollst. Stattdessen lädt er zur Beobachtung ein. Er nennt ein Thema, das heute zu deinem Profil passen könnte, und stellt eine Frage, auf die du im Lauf des Tages achten kannst. Diese Haltung ist bewusst gewählt. Tägliche Inhalte können schnell wie Autorität wirken, einfach weil sie sich wiederholen. Deshalb bleibt der Impuls eine Stimme neben deiner eigenen, nicht ein Ersatz für sie. Wenn ein Impuls einmal nicht zu dir passt, ist das kein Fehler im System, sondern eine nützliche Rückmeldung über dein Profil. Du bekommst keine Ansage über deinen Tag, sondern eine bessere Frage für ihn. Genau das unterscheidet einen reflektierenden Fokus von einer Vorhersage.\n\n- Der Impuls nennt ein Thema und eine Frage, kein Ereignis.\n- Wiederholung erzeugt keine Autorität, der Impuls bleibt ein Angebot.\n- Was nicht passt, ist Rückmeldung über dein Profil, kein Fehler."
      },
      {
        title: "Die Anatomie eines guten Impulses",
        body: "Ein guter Tagesimpuls braucht Klarheit, sonst bleibt er ein schöner Satz ohne Wirkung. Astrakey nutzt deshalb eine wiedererkennbare Struktur in vier Teilen. Zuerst kommt ein kurzer Fokus, der das Thema des Tages benennt. Dann folgt die Verbindung zu deinem Profil, die zeigt, warum dieses Thema gerade zu dir gehört. Danach kommt eine alltagsnahe Situation, in der das Thema auftauchen könnte, damit der Fokus nicht abstrakt bleibt. Zum Schluss steht eine Frage, die du in dein Journaling übernehmen kannst. Diese Struktur hält den Impuls leicht genug für den Morgen und tief genug, um mehr zu sein als Dekoration. Sie macht außerdem nachvollziehbar, woher der Fokus stammt, weil die Verbindung zum Profil sichtbar bleibt. So wird aus einem täglichen Hinweis ein kleiner, geerdeter Reflexionsschritt statt eines flüchtigen Spruchs.\n\n- Vier Teile: Fokus, Profilbezug, Alltagssituation, Frage.\n- Leicht für den Morgen, tief genug für echte Reflexion.\n- Der Profilbezug macht die Herkunft des Fokus sichtbar."
      },
      {
        title: "Rhythmus statt Dauerbeschallung",
        body: "Tagesimpulse sind bei Astrakey kein weiterer Feed, der um deine Aufmerksamkeit kämpft. Du bestimmst die Frequenz selbst. Du kannst täglich begleitet werden, nur an wenigen Tagen, nur zu bestimmten Themen oder die Impulse für eine Weile pausieren. Diese Wahl ist kein technisches Detail, sondern Teil der Produktethik. Ein Impuls darf leise sein und muss nicht jeden Tag dramatisch wirken. Es gibt keinen verpassten Schicksalstag, keine Warnung vor falschen Entscheidungen und keinen Hinweis, der dich in Sorge versetzen soll. Astrakey verzichtet bewusst auf Streak-Logik, Countdown und künstliche Dringlichkeit, weil solche Mechaniken Abhängigkeit erzeugen statt Verständnis. Begleitung über Zeit ist wertvoll, wenn sie tragbar bleibt. Deshalb sammelt Astrakey lieber Resonanz, als einen Strom aus Reizen zu senden. Neugier ist willkommen, Angst nicht.\n\n- Du wählst Frequenz, Themen und Pausen selbst.\n- Kein Streak, kein Countdown, keine künstliche Dringlichkeit.\n- Begleitung über Zeit nur, wenn sie tragbar bleibt."
      },
      {
        title: "Wie Tagesimpulse über Zeit Tiefe gewinnen",
        body: "Der kostenlose Einstieg beantwortet die Frage, ob du dich in deinem Profil wiedererkennst. Tagesimpulse beantworten eine andere Frage: Kann Astrakey dich über Zeit sinnvoll begleiten? Dieser Wert entsteht nicht aus geheimnisvollen Ansagen, sondern aus der Verbindung von Profil, Timing, Journaling und Rückblick. Wenn du Impulse mit eigenen Beobachtungen verbindest, entsteht eine Spur, an der du erkennst, welche Themen wirklich wiederkehren und welche dich nur an einzelnen Tagen beschäftigt haben. Über Wochen wird daraus ein ruhiger Verlauf statt einer Sammlung loser Sätze. Genau hier liegt der Premium-Wert. Du zahlst nicht für einen besonderen Impuls, sondern für Verlauf, Rückblick und die Möglichkeit, deine Themen im Alltag zu prüfen. Es gibt keinen Druck, das zu nutzen. Tiefe lohnt sich, wenn du sie wirklich willst.\n\n- Kostenlos zeigt Resonanz, Begleitung zeigt Tragfähigkeit über Zeit.\n- Wert aus Verlauf und Rückblick, nicht aus besonderen Ansagen.\n- Kein Druck, Tiefe lohnt sich nur bei echter Nutzung."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Ist ein Tagesimpuls dasselbe wie ein Tageshoroskop?",
        a: "Nein. Ein Tageshoroskop spricht meist für ein ganzes Sternzeichen. Ein Astrakey-Tagesimpuls beginnt bei deinem persönlichen Profil und nutzt aktuelles Timing nur als Färbung."
      },
      {
        q: "Sagt ein Tagesimpuls die Zukunft voraus?",
        a: "Nein. Der Impuls ist ein Vorschlag zur Beobachtung. Er nennt ein mögliches Thema und eine Frage, keine sichere Zukunft und kein Ereignis."
      },
      {
        q: "Bekomme ich jeden Tag einen Impuls?",
        a: "Nur wenn du das möchtest. Du bestimmst Frequenz, Themen und Pausen selbst. Astrakey ist bewusst pausierbar gestaltet."
      },
      {
        q: "Kann ein Tagesimpuls einmal nicht passen?",
        a: "Ja, und das ist in Ordnung. Was nicht passt, ist eine nützliche Rückmeldung über dein Profil und kein Fehler."
      },
      {
        q: "Sind Tagesimpulse eine medizinische oder therapeutische Empfehlung?",
        a: "Nein. Tagesimpulse sind keine medizinische, psychologische oder therapeutische Beratung und ersetzen keine Fachperson."
      },
      {
        q: "Treffen Tagesimpulse Entscheidungen für mich?",
        a: "Nein. Sie bieten Fokus und Fragen an. Entscheidungen und Verantwortung bleiben bei dir."
      },
      {
        q: "Warum entfalten Tagesimpulse erst über Zeit ihren Wert?",
        a: "Weil Verlauf, Journaling und Rückblick zusammen zeigen, welche Themen wirklich wiederkehren. Ein einzelner Impuls ist nur ein Moment."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  journaling: {
    key: "journaling",
    slug: "journaling",
    navKey: "journaling",
    title: "Dein Profil sagt etwas. Hier antwortest du.",
    seoTitle: "Journaling: dein Profil im Alltag prüfen",
    seoDescription: "Astrakey-Journaling erdet dein Profil im Alltag. Du prüfst Aussagen, hältst Beobachtungen fest und siehst Muster über Wochen. Notizen bleiben geschützt.",
    eyebrow: "Reflexionstagebuch und Feedback",
    lead: "Ein Profil kann eine starke erste Resonanz erzeugen. Ob eine Aussage wirklich trägt, zeigt sich erst im Alltag. Journaling, dein persönliches Reflexionstagebuch, gibt dir den Raum, Impulse zu prüfen, eigene Beobachtungen festzuhalten und Muster über Wochen sichtbar zu machen. Deine Notizen sind deine eigene Sprache, kein Urteil über dich.",
    answer: "Ein Profil kann eine starke erste Resonanz erzeugen.",
    trustline: "Ein Reflexionstagebuch, das die Selbstreflexion unterstützt und keine Therapie ersetzt. Sensible Notizen, klar geschützt. Export und Löschung jederzeit. AI fasst nur zusammen, wenn du es freigibst.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Tagesimpulse ansehen",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Dein Profil sagt etwas. Hier antwortest du. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum ein Profil Erdung braucht",
        body: "Ein Mehrsystem-Profil ist gut darin, Muster aus deinen Daten sichtbar zu machen. Es kann aber nicht wissen, wie sich ein Thema in deinem konkreten Leben anfühlt. Genau diese Lücke schließt Journaling. Du hältst fest, welche Aussagen bei dir wirklich resonieren, welche Fragen offenbleiben und an welchen Stellen du dich nicht wiedererkennst. Dadurch bleibt Astrakey keine einmalige Auswertung, sondern wird zu einem Reflexionsraum, der mit deiner Erfahrung wächst. Wichtig ist, dass dein Journal nicht dazu da ist, dich zu bewerten. Es ist deine Antwort auf das Profil, nicht das Urteil des Profils über dich. Eine berechnete Aussage und eine gelebte Beobachtung sind zwei verschiedene Dinge. Erst wenn beide zusammenkommen, entsteht ein Bild, das sowohl belastbar als auch ehrlich ist. Deine Rückmeldungen verbessern dabei die Passung der Reflexion, nicht die Messgenauigkeit eines Tests. Astrakey misst dich nicht genauer, es trifft deine Sprache besser. So wird aus einem Profil eine Praxis statt eines fertigen Etiketts.\n\n- Das Profil zeigt Muster, dein Journal zeigt, wie sie sich anfühlen.\n- Deine Notizen sind deine Antwort, kein Urteil über dich.\n- Berechnete Aussage und gelebte Beobachtung ergänzen sich."
      },
      {
        title: "Vom Tagesimpuls zur eigenen Beobachtung",
        body: "Ein Tagesimpuls gibt dir einen Fokus für den Tag. Das Journal fragt danach, was du daraus gemacht hast. Hat der Impuls etwas sichtbar gemacht? Gab es eine Situation, in der ein Kernthema spürbar wurde? War die Aussage unpassend, zu stark oder überraschend genau? Diese Rückmeldung macht die Deutung menschlicher, weil sie den Impuls mit deiner gelebten Erfahrung verbindet. Astrakey sendet dir nicht nur etwas zu, sondern gibt dir Raum, zurückzusprechen. Aus einem täglichen Hinweis wird so eine persönliche Spur. Über die Tage entsteht eine kleine Sammlung von Beobachtungen, die deutlich mehr aussagt als jeder einzelne Impuls. Genau hier schließt sich die Schleife: Das Profil liefert den Fokus, der Tagesimpuls bringt ihn in den Alltag, und dein Journal bringt deine Erfahrung zurück in das Bild. Diese Bewegung macht das Profil über Zeit genauer und persönlicher.\n\n- Der Impuls gibt Fokus, das Journal gibt Rückmeldung.\n- Astrakey sendet nicht nur, du kannst zurücksprechen.\n- Die Schleife aus Profil, Impuls und Notiz erdet die Deutung."
      },
      {
        title: "Muster über Wochen und Monate erkennen",
        body: "Ein einzelner Eintrag ist oft nur ein Moment. Interessant wird es, wenn sich Themen über Wochen sammeln. Vielleicht taucht Rückzug immer wieder vor wichtigen Entscheidungen auf. Vielleicht zeigt sich Kreativität in Phasen, die du bisher nicht bewusst gesehen hast. Vielleicht erkennst du, dass Überforderung und Ruhe in einem regelmäßigen Wechsel stehen. Astrakey kann solche Wiederholungen als Rückblick sichtbar machen, ohne daraus starre Wahrheiten zu bauen. Ein Muster ist ein Hinweis, kein Gesetz. Gerade hier entsteht eine Tiefe, die mit der Zeit wächst. Es geht nicht um mehr Text um des Textes willen, sondern um eine klarere Sicht auf die eigene Entwicklung. Du siehst, was sich verändert, was stabil bleibt und welche Fragen immer wieder zurückkehren. Diese Übersicht entsteht nicht aus einer einzelnen Deutung, sondern aus deiner eigenen, über Zeit gesammelten Beobachtung.\n\n- Einzelne Einträge sind Momente, die Summe zeigt Muster.\n- Astrakey macht Wiederholungen sichtbar, ohne sie festzuschreiben.\n- Ein Muster ist ein Hinweis, kein Gesetz."
      },
      {
        title: "Privatsphäre und sensible Notizen",
        body: "Journaling kann sehr persönlich werden. Deshalb behandelt Astrakey diese Inhalte mit besonderer Sorgfalt. Du siehst, was gespeichert wird, wie Export und Löschung funktionieren und welche Rolle AI bei Zusammenfassungen spielt. Eine Zusammenfassung durch AI passiert nur, wenn du sie freigibst, und sie bleibt zweckgebunden. Astrakey leitet aus deinen Journaltexten keine medizinischen, therapeutischen oder rechtlichen Aussagen ab. Die Funktion bleibt ein Reflexionswerkzeug und ist kein Ersatz für professionelle Beratung. Auch innerhalb von Astrakey gilt Datensparsamkeit. Deine Notizen werden nicht automatisch in jede Auswertung gezogen, sondern nur dort genutzt, wo du es willst. Gerade weil ein Journal Gedanken enthält, die sonst niemand liest, ist Kontrolle hier kein Zusatz, sondern Bedingung. Je persönlicher die Inhalte, desto klarer müssen die Grenzen sein. Diese Haltung ist Teil des Produkts, nicht eine Fußnote im Kleingedruckten.\n\n- Sichtbar, was gespeichert wird, mit Export und Löschung.\n- AI fasst nur zusammen, wenn du es freigibst, und nur zweckgebunden.\n- Keine Diagnose, keine Beratung, keine automatische Weiterverarbeitung."
      },
      {
        title: "Kostenlos starten, Tiefe verstehen",
        body: "Der kostenlose Einstieg ermöglicht erste Impulse und einfache Reflexion. Du kannst ausprobieren, wie es sich anfühlt, auf dein Profil zu antworten, und ob diese Praxis zu dir passt. Premium wird sinnvoll, wenn du mehr willst als einzelne Einträge. Verlauf, Rückblicke, tiefere Fragen und das Sichtbarmachen langfristiger Muster brauchen eine fortlaufende Begleitung. Genau deshalb gehört Journaling zur Astrakey-Erfahrung. Es zeigt, dass Astrakey kein einmaliger Profilrechner ist, sondern eine Begleitung, die sich mit der Zeit entfaltet. Du zahlst nicht für ein schöneres Textfeld, sondern für Kontext, Verlauf und die Möglichkeit, deine eigene Entwicklung über Monate zu lesen. Es gibt keinen Druck, das zu tun, und keine Dringlichkeit. Wenn dein Profil bei dir Resonanz erzeugt und du diese Resonanz über Zeit verfolgen möchtest, lohnt sich die Tiefe. Wenn nicht, bleibt der kostenlose Einstieg fair und vollständig genug für eine echte Entscheidung.\n\n- Kostenlos ermöglicht erste Reflexion und eine ehrliche Probe.\n- Premium öffnet Verlauf, Rückblick und langfristige Muster.\n- Wert aus Kontext und Zeit, nicht aus einem schöneren Textfeld."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Ist Astrakey-Journaling ein normales Tagebuch?",
        a: "Du kannst es wie ein Tagebuch nutzen, doch es ist enger mit deinem Profil, deinen Tagesimpulsen und wiederkehrenden Themen verbunden. Der Fokus liegt auf Reflexion, nicht auf Leistung."
      },
      {
        q: "Liest die AI meine Journaltexte?",
        a: "Nur wenn du eine Zusammenfassung freigibst. AI-gestützte Zusammenfassungen sind transparent und zweckgebunden. Du siehst, wann AI beteiligt ist."
      },
      {
        q: "Kann ich Journal-Einträge löschen?",
        a: "Ja. Persönliche Inhalte bleiben jederzeit exportierbar und löschbar. Das ist fester Teil der Datenschutzlinie."
      },
      {
        q: "Ist Journaling eine Therapie?",
        a: "Nein. Astrakey-Journaling ist ein Reflexionswerkzeug und ersetzt keine medizinische, psychologische oder therapeutische Beratung."
      },
      {
        q: "Wie macht Journaling mein Profil genauer?",
        a: "Deine Beobachtungen zeigen, welche Aussagen im Alltag tragen und welche nicht. Diese Rückmeldung erdet das Profil und kann in die Verfeinerung einfließen."
      },
      {
        q: "Muss ich jeden Tag schreiben?",
        a: "Nein. Journaling ist freiwillig und ohne Pflicht gestaltet. Es gibt keine Streak-Logik und keinen Druck, lückenlos zu dokumentieren."
      },
      {
        q: "Werden meine Notizen automatisch in andere Auswertungen gezogen?",
        a: "Nein. Es gilt Datensparsamkeit. Deine Notizen werden nur dort genutzt, wo du es ausdrücklich möchtest."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  profilVerfeinern: {
    key: "profilVerfeinern",
    slug: "profil-verfeinern",
    navKey: "profilVerfeinern",
    title: "Ein gutes Profil bleibt korrigierbar.",
    seoTitle: "Profil verfeinern: Qualität und Kontrolle",
    seoDescription: "Bei Astrakey ist dein Profil korrigierbar. Datenqualität ist sichtbar, Unsicherheit markiert, neue Angaben fließen ein. Export und Löschung jederzeit.",
    eyebrow: "Qualität und Kontrolle",
    lead: "Astrakey tut nicht so, als wäre die erste Aussage endgültig. Wenn Geburtszeit, Ort, Name oder Selbstauskunft später genauer werden, verbessert sich dein Profil. Wenn eine Aussage nicht resoniert, ist auch das wertvolle Information. Du siehst, wie sicher dein Profil ist, und du behältst die Kontrolle.",
    answer: "Astrakey tut nicht so, als wäre die erste Aussage endgültig.",
    trustline: "Datenqualität sichtbar. Unsicherheit markiert. Export, Löschung und Korrektur jederzeit möglich.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Daten und Sicherheit ansehen",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein gutes Profil bleibt korrigierbar. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum ein Profil nie endgültig ist",
        body: "Ein Profil, das sich für endgültig erklärt, wäre weniger vertrauenswürdig, nicht mehr. Astrakey geht vom Gegenteil aus. Deine Angaben können sich präzisieren, dein Leben verändert sich, und manche Aussagen passen heute besser als morgen. Deshalb ist Profilverfeinerung kein Notfallwerkzeug, sondern ein normaler Teil der Arbeit mit dir selbst. Wenn du eine genauere Geburtszeit nachträgst, werden zeit- und ortsabhängige Systeme belastbarer. Wenn du eine Selbstauskunft ergänzt, bekommt das Profil mehr alltagsnahe Erdung. Und wenn dir eine Aussage nicht entspricht, ist das kein Widerspruch zum System, sondern eine Rückmeldung, die es genauer macht. Korrektur ist hier ein Zeichen von Qualität, nicht von Schwäche. Ein erklärbares Profil muss veränderbar sein, weil es sonst nur eine schöne Behauptung wäre. Genau diese Offenheit unterscheidet eine ehrliche Auswertung von einem starren Etikett.\n\n- Ein endgültiges Profil wäre weniger vertrauenswürdig, nicht mehr.\n- Genauere Angaben machen abhängige Systeme belastbarer.\n- Korrektur ist ein Zeichen von Qualität, nicht von Schwäche."
      },
      {
        title: "Datenqualität sichtbar machen",
        body: "Astrakey zeigt dir nicht nur, was in deinem Profil steht, sondern auch, wie belastbar es ist. Die Größe Sicherheit beschreibt die Datenqualität deiner Eingaben und der Berechnung, also wie genau und vollständig die Grundlage ist. Sie ist ausdrücklich kein psychometrischer Reliabilitätswert und behauptet nicht, ein Persönlichkeitstest zu sein. Sicherheit sagt, wie gut die Eingaben sind, nicht, wie wissenschaftlich gültig eine Deutung ist. Eine genaue Geburtszeit erhöht die Sicherheit zeitabhängiger Systeme, eine grobe Tageszeit senkt sie. Astrakey verbirgt diese Unterschiede nicht, sondern markiert sie. So erkennst du, welche Aussagen auf solider Grundlage stehen und welche du vorsichtiger lesen solltest. Diese Transparenz schützt vor Überdeutung. Eine Aussage wird bei Astrakey nicht dadurch stark, dass sie dramatisch klingt, sondern dadurch, dass ihre Grundlage sichtbar ist. Wenn eine Eingabe fehlt oder unsicher ist, sagt Astrakey das offen, statt eine Genauigkeit vorzutäuschen, die nicht existiert. Sichtbare Unsicherheit ist kein Mangel, sondern ein Vertrauensmerkmal. Sie hilft dir zu entscheiden, welche Aussagen du ernst nimmst und wo sich eine genauere Angabe lohnt.\n\n- Sicherheit meint Datenqualität der Eingaben, keine psychometrische Reliabilität.\n- Unsicherheit wird markiert, nicht versteckt.\n- Sichtbare Grenzen schützen vor Überdeutung."
      },
      {
        title: "Neue Angaben einarbeiten",
        body: "Profilverfeinerung bedeutet, dass neue oder genauere Angaben tatsächlich etwas bewirken. Du kannst eine nachgereichte Geburtszeit ergänzen, einen Geburtsort präzisieren, einen Namen korrigieren oder eine Selbstauskunft erweitern. Astrakey rechnet die betroffenen Systeme dann neu und zeigt, was sich dadurch verändert. So bleibt nachvollziehbar, warum eine Aussage nach der Korrektur anders aussieht als vorher. Auch deine Rückmeldungen zählen. Wenn du markierst, dass ein Thema gut passt oder gar nicht resoniert, fließt das in das Bild ein, das Astrakey über Zeit von deinem Profil zeichnet. Genau hier wirkt das Journaling mit: Deine Beobachtungen darüber, welche Aussagen im Alltag tragen und welche nicht, sind solche Rückmeldungen. Sie verfeinern die Passung deiner Reflexion und schärfen das Profil über Zeit, ohne aus ihm einen Test zu machen. Wichtig ist, dass keine Korrektur heimlich passiert. Du siehst, welche Eingabe welche Wirkung hatte, und behältst die Kontrolle über den Stand deines Profils. Verfeinerung ist damit kein einmaliger Schritt, sondern ein offener Prozess. Dein Profil wächst mit den Informationen, die du teilen möchtest, und nicht gegen sie.\n\n- Genauere Angaben lösen eine nachvollziehbare Neuberechnung aus.\n- Deine Rückmeldungen zu Aussagen fließen mit ein.\n- Keine Korrektur passiert heimlich, du siehst die Wirkung."
      },
      {
        title: "Export, Löschung und Korrektur",
        body: "Kontrolle über ein Profil bedeutet mehr als ein paar Einstellungen. Bei Astrakey kannst du dein Profil exportieren, einzelne Angaben korrigieren und Daten löschen. Diese Rechte sind nicht in tiefen Menüs versteckt, sondern Teil der Profilumgebung. Export hilft dir, deine Inhalte zu sichern oder mitzunehmen. Korrektur hält das Profil aktuell. Löschung gibt dir die Sicherheit, dass nichts gegen deinen Willen bestehen bleibt. Gerade weil Astrakey ein sensibles Profil aus vielen Systemen erstellt, ist diese Kontrolle keine Pflichtübung, sondern ein zentraler Teil des Vertrauens. Du entscheidest, welche Angaben du machst, wie genau sie sind und wie lange sie bleiben. Astrakey behandelt diese Entscheidungen als deine, nicht als eine Frage, die das Produkt für dich beantwortet. Je persönlicher die Auswertung, desto klarer müssen Kontrolle und Grenzen sein. Diese Seite macht sichtbar, wie diese Kontrolle konkret aussieht.\n\n- Export, Korrektur und Löschung sind Teil der Profilumgebung.\n- Die Rechte stehen offen, nicht in tiefen Menüs versteckt.\n- Du entscheidest über Genauigkeit und Dauer deiner Angaben."
      },
      {
        title: "Zuverlässigkeit entsteht auch aus Transparenz",
        body: "Es ist leicht zu glauben, ein Profil werde allein dadurch zuverlässig, dass es viele Systeme nutzt. Das ist nur die halbe Wahrheit. Mehrere Systeme machen ein Thema belastbarer, wenn sie unabhängig in dieselbe Richtung zeigen. Genauso wichtig ist aber, dass du erkennen kannst, wie sicher eine Aussage ist, woher sie kommt und wie du sie korrigieren kannst. Zuverlässigkeit entsteht also aus zwei Quellen. Die erste ist Konvergenz, also die Bestätigung über mehrere unabhängige Systemfamilien. Die zweite ist Transparenz, also sichtbare Datenqualität, markierte Unsicherheit und die Möglichkeit zur Korrektur. Ein System, das nie Unsicherheit zeigt und nie korrigiert werden kann, wirkt vielleicht souverän, ist aber schwerer zu vertrauen. Astrakey wählt bewusst den anderen Weg. Es macht seine Grenzen sichtbar und gibt dir Werkzeuge, sie zu verschieben. Genau diese Ehrlichkeit ist Teil dessen, was ein Profil belastbar macht.\n\n- Viele Systeme allein machen ein Profil nicht zuverlässig.\n- Konvergenz und Transparenz sind zwei Quellen von Zuverlässigkeit.\n- Sichtbare Grenzen sind leichter zu vertrauen als scheinbare Souveränität."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Kann ich mein Profil korrigieren?",
        a: "Ja. Du kannst Angaben wie Geburtszeit, Ort, Name und Selbstauskunft ergänzen oder ändern. Astrakey rechnet die betroffenen Systeme dann neu."
      },
      {
        q: "Was passiert, wenn ich meine Geburtszeit erst später kenne?",
        a: "Du kannst sie nachtragen. Zeit- und ortsabhängige Systeme werden dadurch belastbarer, und die Sicherheit dieser Aussagen steigt."
      },
      {
        q: "Was bedeutet die Anzeige für Sicherheit?",
        a: "Sie zeigt die Datenqualität deiner Eingaben und der Berechnung, also wie genau und vollständig die Grundlage ist. Sie ist kein psychometrischer Reliabilitätswert. Aussagen mit geringer Sicherheit werden markiert, damit du sie vorsichtiger liest."
      },
      {
        q: "Was passiert, wenn eine Aussage nicht zu mir passt?",
        a: "Das ist nützliche Information. Deine Rückmeldung kann in das Bild einfließen, das Astrakey über Zeit von deinem Profil zeichnet."
      },
      {
        q: "Kann ich meine Daten exportieren oder löschen?",
        a: "Ja. Export, Korrektur und Löschung sind Teil der Profilumgebung und stehen dir jederzeit offen."
      },
      {
        q: "Verbessert sich mein Profil automatisch ohne mein Zutun?",
        a: "Nein. Verbesserungen folgen aus deinen Angaben und Rückmeldungen. Keine Korrektur passiert heimlich, du siehst die Wirkung."
      },
      {
        q: "Macht häufiges Korrigieren mein Profil schlechter?",
        a: "Nein. Korrektur ist Teil der Qualitätssicherung. Genauere Angaben und ehrliche Rückmeldungen machen das Profil belastbarer, nicht schwächer."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  seelenkarte: {
    key: "seelenkarte",
    slug: "seelenkarte",
    navKey: "seelenkarte",
    title: "Die Seelenkarte ist die Oberfläche. Das Profil ist der Kern.",
    seoTitle: "Seelenkarte: die Oberfläche deines Profils",
    seoDescription: "Die Seelenkarte ist eine schöne Oberfläche deines Astrakey-Profils und ein guter Einstieg. Der eigentliche Wert kommt aus dem Mehrsystem-Profil dahinter.",
    eyebrow: "Darstellungsmodul",
    lead: "Die Seelenkarte ist eine visuelle und sprachliche Oberfläche deines Astrakey-Profils. Sie ist ein guter Einstieg, weil sie erste Kernthemen schnell sichtbar macht. Ihr Wert kommt aber nicht aus der Ästhetik, sondern aus dem Mehrsystem-Profil dahinter, das mehrere Systeme berechnet und vergleicht.",
    answer: "Die Seelenkarte ist eine visuelle und sprachliche Oberfläche deines Astrakey-Profils.",
    trustline: "Ein schöner Einstieg, nicht der ganze Inhalt. Der Wert liegt im Profil. Reflexionsangebot, keine Festlegung.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Mehrsystem-Profil verstehen",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Die Seelenkarte ist die Oberfläche. Das Profil ist der Kern. als Astrakey Markenbild",
    sections: [
      {
        title: "Was die Seelenkarte ist",
        body: "Die Seelenkarte ist eine reduzierte Ansicht deines Profils. Sie nimmt die wichtigsten Ergebnisse und zeigt sie in einer Form, die schnell verständlich ist: erste Kernthemen, einige Muster und eine erste Resonanz. Damit ist sie ein guter Einstieg, besonders wenn du Astrakey gerade erst kennenlernst. Sie ist bewusst als echte, hochwertige Darstellung gestaltet, eine schöne visuelle Oberfläche, die neugierig macht und zum Hinsehen einlädt. Dieser visuelle Reiz ist gewollt, denn er zieht dich zum eigentlichen Wert weiter, dem Profil dahinter. `[BUILD: echtes, hochwertiges Seelenkarten-Visual, kein Platzhalterbild]` Wichtig ist aber, was sie nicht ist. Sie ist kein vollständiges Bild, keine geheime Wahrheit und kein eigenständiges Produkt. Sie ist eine Oberfläche über etwas Größerem. Hinter der Seelenkarte liegt dein Mehrsystem-Profil, in dem mehrere Systeme berechnet, verglichen und gewichtet werden. Die Seelenkarte zeigt davon nur die verdichtete Spitze. Wer nur die Seelenkarte betrachtet, sieht den ersten Zugang, nicht die ganze Tiefe. Genau deshalb beschreibt Astrakey die Seelenkarte bewusst als Einstieg und nicht als Ziel. Sie öffnet eine Tür, aber der Raum dahinter ist das eigentliche Produkt.\n\n- Die Seelenkarte ist eine reduzierte Ansicht, kein vollständiges Bild.\n- Sie zeigt die verdichtete Spitze deines Profils.\n- Ein Einstieg, kein Ziel, eine Tür und nicht der Raum."
      },
      {
        title: "Warum die Ästhetik nicht der Wert ist",
        body: "Eine schöne Darstellung ist angenehm, aber sie ist nicht der Grund, warum ein Profil belastbar ist. Es wäre leicht, eine Seelenkarte zu bauen, die beeindruckend aussieht und wenig dahinter hat. Astrakey geht den umgekehrten Weg. Der Wert entsteht aus dem, was unter der Oberfläche passiert: aus der Berechnung mehrerer Systeme, aus der Gruppierung verwandter Quellen in Familien und aus der Prüfung, welche Themen über unabhängige Perspektiven hinweg wirklich wiederkehren. Die Seelenkarte macht diese Ergebnisse sichtbar, aber sie erzeugt sie nicht. Wenn du dich gut betrachtet fühlst, liegt das nicht an der Farbe oder am Layout, sondern daran, dass mehrere Systeme in dieselbe Richtung gezeigt haben. Deshalb ist es wichtig, die Erwartung zu korrigieren. Astrakey ist kein Werkzeug, um ein hübsches Bild zu erstellen. Es ist eine Profilumgebung, und die Seelenkarte ist eine ihrer Ansichten. Die Ästhetik dient dem Verständnis, sie ersetzt es nicht.\n\n- Eine schöne Oberfläche macht ein Profil nicht belastbar.\n- Der Wert entsteht aus Berechnung, Familien und Konvergenz.\n- Die Seelenkarte zeigt Ergebnisse, sie erzeugt sie nicht."
      },
      {
        title: "Was unter der Seelenkarte liegt",
        body: "Wenn du verstehen willst, was Astrakey wirklich kann, lohnt der Blick unter die Oberfläche. Dein Mehrsystem-Profil enthält deutlich mehr als die Seelenkarte zeigt. Dort findest du deine Kernthemen mit ihren Systembelegen, deine Spannungsfelder, in denen zwei Pole gleichzeitig aktiv sind, und die Sicherheit, also wie belastbar eine Aussage ist. Du kannst einzelne Systemprofile separat ansehen und verstehen, was jedes System beiträgt. Du kannst dein Profil über das Seelenbuch ausführlich entfalten, es im Alltag über Tagesimpulse und Journaling prüfen und mit der Beziehungsanalyse auf eine Partnerschaft erweitern. Die Seelenkarte ist der erste Blick in diese Umgebung, aber nicht ihr Umfang. Wer hier stehen bleibt, verpasst genau die Tiefe, die Astrakey von einer schönen Deutung unterscheidet. Deshalb führt der nächste sinnvolle Schritt nicht tiefer in die Seelenkarte, sondern hinüber zum Profil.\n\n- Das Profil enthält Belege, Spannungsfelder und Sicherheit.\n- Systemprofile, Seelenbuch und Begleitung gehen weit über die Karte hinaus.\n- Der nächste Schritt führt zum Profil, nicht tiefer in die Karte."
      },
      {
        title: "Ein ehrlicher Einstieg",
        body: "Als Einstieg hat die Seelenkarte eine klare Aufgabe. Sie soll dir genug zeigen, um eine echte Entscheidung zu treffen, ohne dir zu viel zu versprechen. Du siehst erste Kernthemen, bekommst ein Gefühl für Sprache und Ton und kannst einschätzen, ob Astrakey zu dir passt. Dieser erste Blick wirkt nicht künstlich leer, aber er gibt auch nicht vor, schon das ganze Bild zu sein. Wenn du nach der Seelenkarte merkst, dass Astrakey nicht zu dir passt, hast du trotzdem Orientierung gewonnen. Wenn du Resonanz spürst, verstehst du klarer, warum sich der Schritt zum vollständigen Profil lohnt. Astrakey nutzt die Seelenkarte bewusst nicht als Köder, der etwas zurückhält und dann gegen Bezahlung freigibt. Sie ist eine ehrliche erste Begegnung. Genau diese Haltung passt zur Marke. Du sollst dich entscheiden, weil du verstehst, was dich erwartet, nicht weil dir etwas vorenthalten wurde.\n\n- Die Seelenkarte zeigt genug für eine echte Entscheidung.\n- Sie gibt nicht vor, schon das ganze Bild zu sein.\n- Kein Köder, sondern eine ehrliche erste Begegnung."
      },
      {
        title: "Grenzen und Haltung",
        body: "Auch als Oberfläche bleibt die Seelenkarte ein Reflexionsangebot und kein Urteil. Sie ist keine Diagnose, keine Therapie, keine medizinische Empfehlung und keine sichere Vorhersage. Weil eine verdichtete Darstellung leicht wie eine endgültige Aussage über dich wirken kann, ist diese Grenze besonders wichtig. Astrakey verwendet eigene redaktionelle Texte und übernimmt keine geschützten Deutungspassagen fremder Systeme. Jede Aussage bleibt als Angebot zur Selbstreflexion gerahmt, nicht als Tatsache über deine Person. Wenn etwas in der Seelenkarte nicht zu dir passt, ist das ein wertvoller Hinweis und kein Widerspruch zum System. Du sollst dich in der Seelenkarte nicht festgelegt fühlen, sondern eingeladen, genauer hinzusehen. Die schönste Oberfläche ersetzt nicht dein eigenes Urteil. Sie kann dir Worte für etwas geben, das du schon spürst, aber sie entscheidet nicht, wer du bist. Diese Haltung gilt für die Seelenkarte genau wie für das Profil dahinter.\n\n- Reflexionsangebot statt Urteil, auch auf der Oberfläche.\n- Keine Diagnose, keine Vorhersage, eigene redaktionelle Texte.\n- Was nicht passt, ist ein Hinweis, kein Widerspruch."
      }
    ],
    graphics: [
      {
        src: "/graphics/convergence/abb8-deine-kernthemen.svg",
        alt: "Die Seelenkarte ist die Oberfläche. Das Profil ist der Kern. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [
      {
        q: "Ist die Seelenkarte das eigentliche Produkt von Astrakey?",
        a: "Nein. Die Seelenkarte ist eine visuelle Oberfläche deines Profils. Das eigentliche Produkt ist das Mehrsystem-Profil, das mehrere Systeme berechnet und vergleicht."
      },
      {
        q: "Was zeigt die Seelenkarte?",
        a: "Sie zeigt eine verdichtete Ansicht: erste Kernthemen, einige Muster und eine erste Resonanz. Den vollen Umfang findest du im Profil dahinter."
      },
      {
        q: "Ist die Seelenkarte kostenlos?",
        a: "Der Einstieg ist kostenlos. Du siehst deine Seelenkarte und erste Kernthemen ohne Kreditkarte. Mehr Tiefe entsteht im vollständigen Profil und in den Modulen."
      },
      {
        q: "Worin unterscheidet sich die Seelenkarte von einem Geburtshoroskop?",
        a: "Ein Horoskop zeigt ein einzelnes System. Die Seelenkarte ist die Oberfläche eines Profils, das mehrere Systeme verbindet und prüft, welche Themen über unabhängige Perspektiven hinweg wiederkehren."
      },
      {
        q: "Warum betont Astrakey das Profil statt die Seelenkarte?",
        a: "Weil der Wert aus der Methode dahinter kommt, nicht aus der Darstellung. Die Seelenkarte ist ein guter Einstieg, aber nicht die ganze Tiefe."
      },
      {
        q: "Ist die Seelenkarte eine Diagnose?",
        a: "Nein. Sie ist ein Reflexionsangebot und keine medizinische, psychologische oder therapeutische Beratung."
      },
      {
        q: "Was sollte ich nach der Seelenkarte ansehen?",
        a: "Den nächsten Schritt machst du am besten im Mehrsystem-Profil, in den Systemprofilen oder im Seelenbuch, wo dein Profil ausführlich entfaltet wird."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  onboarding: {
    key: "onboarding",
    slug: "profil-starten",
    navKey: "onboarding",
    title: "Berechne dein Profil und sieh, was zusammenläuft.",
    seoTitle: "Profil kostenlos starten bei Astrakey",
    seoDescription: "Starte dein erklärbares Mehrsystem-Profil kostenlos. Sieh, welche Daten wofür genutzt werden, welche Systeme einfließen und welche Themen wiederkehren.",
    eyebrow: "Profil starten",
    lead: "Die Eingabe dauert in der Regel nur wenige Minuten, dann erzeugt Astrakey aus deinen Angaben ein erstes Mehrsystem-Profil. Am Ende siehst du konkret deine ersten Kernthemen, ihre Belege aus mehreren Systemen und erste Spannungsfelder, keine fertige Diagnose und kein Etikett. Du startest nicht mit einem einzelnen Chart, sondern mit mehreren Perspektiven zugleich und siehst, welche Kernthemen über unabhängige Systeme hinweg auftauchen. Du gibst nur ein, was für die ersten Systeme nötig ist, und behältst jederzeit die Kontrolle.",
    answer: "Die Eingabe dauert in der Regel nur wenige Minuten, dann erzeugt Astrakey aus deinen Angaben ein erstes Mehrsystem-Profil.",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Du siehst vor jeder Eingabe, wofür sie genutzt wird. AI formuliert die Deutung, sie urteilt nicht über dich.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Daten und Sicherheit ansehen",
    image: "/images/hermetia/birth-moment-meridian.png",
    imageAlt: "Berechne dein Profil und sieh, was zusammenläuft. als Astrakey Markenbild",
    sections: [
      {
        title: "Was beim Start wirklich passiert",
        body: "Der Profilstart ist der Moment, in dem Astrakey vom allgemeinen Konzept zu deinem persönlichen Profil wechselt. Du musst dafür kein Systemwissen mitbringen. Astrakey führt dich Schritt für Schritt durch die wenigen Angaben, und du musst nichts über Astrologie, Human Design oder die anderen Systeme wissen, um zu starten. Du gibst die Daten ein, die für die ersten Systeme nötig sind, und Astrakey berechnet daraus erste Signale, übersetzt sie in gemeinsame Themen und zeigt dir, welche Motive bei dir sichtbar werden. Wichtig ist die Reihenfolge: Astrakey beginnt nicht mit einem einzelnen Horoskop oder einem hübschen Bild, sondern mit mehreren Perspektiven gleichzeitig. Die Seelenkarte kann später eine visuelle Zusammenfassung deines Profils sein, aber sie ist nicht der Einstieg und nicht der Kern. Du siehst von Anfang an, dass Astrakey Aussagen herleitet und nicht behauptet. Schon im ersten Schritt erkennst du, welche Themen aus mehreren unabhängigen Systemfamilien getragen werden und welche nur aus einem einzelnen Blickwinkel stammen. Nimm die allerersten Aussagen ruhig als Einladung, nicht als Urteil: Ein Profil wird genauer und stimmiger, je mehr du es im Alltag prüfst, und du musst nichts sofort glauben oder überbewerten.\n\n- Du brauchst kein Systemwissen, Astrakey führt dich Schritt für Schritt.\n- Du berechnest ein Profil, du erstellst keine Karte.\n- Mehrere Systeme fließen von Anfang an ein, nicht erst später.\n- Die Seelenkarte ist eine spätere Ansicht, nicht der Start.\n- Erste Aussagen sind ein Anfang, kein Urteil über dich."
      },
      {
        title: "Welche Daten du eingibst und wofür",
        body: "Astrakey fragt nur ab, was für die ersten Systeme gebraucht wird, und erklärt jede Angabe. Dein Geburtsdatum bildet die Grundlage für astrologische, numerologische und energetische Systeme. Dein Geburtsort macht zeit- und ortsabhängige Berechnungen möglich, etwa für Häuser und Astrokartografie. Deine Geburtszeit verfeinert Systeme, die auf den Tagesverlauf reagieren. Dein Name fließt in namensbasierte Systeme ein. Eine freiwillige Selbstauskunft erdet das Profil mit Alltag, Verhalten und Selbstwahrnehmung. Du musst nicht alles auf einmal angeben. Astrakey zeigt dir, welche Aussagen mit den vorhandenen Daten möglich sind und welche eine genauere Angabe brauchen. So entscheidest du informiert, wie viel du teilst, und siehst direkt, welchen Unterschied jede Angabe für die Qualität deines Profils macht.\n\n- Jede Eingabe hat einen sichtbaren Zweck.\n- Du teilst schrittweise, nicht alles auf einmal.\n- Mehr Datenqualität bedeutet ein belastbareres Profil, kein Zwang."
      },
      {
        title: "Welche Systeme sofort einfließen",
        body: "Schon der erste Lauf nutzt mehrere Systemfamilien, damit du Konvergenz von Anfang an erlebst. Aus deinem Geburtsdatum und Geburtsort entstehen astrologische Signale, aus Datum und Name numerologische Themen, aus energiebasierten Modellen weitere Perspektiven, und deine Selbstauskunft bringt eine alltagsnahe Familie hinzu. Astrakey vergleicht diese Quellen nicht naiv, sondern gruppiert verwandte Systeme, damit ein Echo nicht fälschlich als unabhängige Bestätigung zählt. Das Ergebnis ist kein Stapel einzelner Deutungen, sondern eine erste Verdichtung: Welche Themen tragen mehrere Familien? Wo zeigen sich Spannungsfelder, in denen zwei Pole gleichzeitig aktiv sind? Du siehst nicht nur ein Ergebnis, sondern auch, woher es kommt. Genau dieser Blick auf die Herleitung unterscheidet Astrakey von einem schnellen Generator, der nur eine Symbolsprache ausgibt.\n\n- Mehrere Systemfamilien fließen schon in den ersten Lauf ein.\n- Verwandte Quellen werden gruppiert, nicht doppelt gezählt.\n- Du siehst Kernthemen und erste Spannungsfelder mit ihren Belegen."
      },
      {
        title: "Wenn du deine genaue Geburtszeit nicht kennst",
        body: "Viele Menschen kennen ihre genaue Geburtszeit nicht. Das ist kein Hindernis. Astrakey funktioniert auch ohne präzise Uhrzeit und kennzeichnet klar, welche Aussagen dadurch unsicherer werden. Systeme, die nur auf Datum und Name beruhen, bleiben unberührt. Systeme, die auf den Tagesverlauf reagieren, etwa der Aszendent oder die Häuser, werden vorsichtiger gewichtet oder als offen markiert. Astrakey tut nicht so, als wüsste es etwas genauer, als es darf. Stattdessen zeigt die Sicherheitsanzeige, worauf eine Aussage beruht. Wenn du deine Geburtszeit später nachträgst, kannst du das Profil verfeinern, und betroffene Aussagen werden neu berechnet. So bleibt der Einstieg ehrlich: lieber eine markierte Unsicherheit als eine scheingenaue Behauptung.\n\n- Eine genaue Geburtszeit verbessert manche Systeme, ist aber nicht Pflicht.\n- Unsichere Aussagen werden gekennzeichnet, nicht versteckt.\n- Du kannst die Zeit später ergänzen und das Profil verfeinern."
      },
      {
        title: "Was du nach dem Start vertiefen kannst",
        body: "Nach dem ersten Lauf hast du ein verständliches Mehrsystem-Profil mit ersten Kernthemen. Der Start betrifft dabei nur dein eigenes Profil. Du gibst ausschließlich deine eigenen Daten ein, und Beziehungsthemen sind kein Teil des Einstiegs, sondern ein optionaler späterer Schritt, der erst beginnt, wenn beide Personen ausdrücklich einwilligen. Von hier aus entscheidest du selbst, wie weit du gehst. Du kannst einzelne Systemprofile öffnen und nachlesen, was jede Perspektive beiträgt. Du kannst das Seelenbuch erstellen lassen, das dein Profil über viele Kapitel mit Systembelegen und Reflexionsfragen entfaltet. Du kannst später eine Beziehungsanalyse beginnen, sobald beide Personen einwilligen. Tagesimpulse und Journaling übertragen deine Themen in den Alltag, und der Companion hilft bei Fragen zu deinem Profil. Nichts davon ist erzwungen. Der kostenlose Start zeigt dir zuerst, ob Astrakey bei dir Resonanz erzeugt. Erst wenn das stimmt, wird Tiefe sinnvoll, und du wählst sie bewusst.\n\n- Erst Resonanz prüfen, dann bewusst vertiefen.\n- Der Start betrifft nur dein eigenes Profil, Beziehungsthemen kommen optional später.\n- Systemprofile, Seelenbuch, Beziehungsanalyse und Begleitung stehen offen.\n- Kein Schritt ist Pflicht, jeder ist erklärt."
      },
      {
        title: "Deine Kontrolle bleibt",
        body: "Ein Profil aus vielen Systemen verarbeitet sensible Informationen, deshalb behältst du die Kontrolle. Du siehst, welche Daten gespeichert werden, kannst sie exportieren und löschen und deine Einwilligung jederzeit widerrufen. Astrakey sammelt nicht auf Vorrat, sondern fragt zweckgebunden ab, was die ersten Systeme brauchen. AI wird transparent eingesetzt: Du erkennst, wann gerechnet und wann formuliert wird. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen und stellt keine Diagnose. Je persönlicher die Auswertung wird, desto klarer bleiben Kontrolle und Grenzen. So ist der Start kein Sprung ins Ungewisse, sondern ein nachvollziehbarer erster Schritt, den du jederzeit zurücknehmen kannst.\n\n- Export, Löschung und Widerruf jederzeit möglich.\n- Zweckgebundene Abfrage statt Datensammlung auf Vorrat.\n- Keine Diagnose, keine Vorhersage, keine Beratung."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Ist der Einstieg wirklich kostenlos?",
        a: "Ja. Du kannst dein Profil ohne Kreditkarte starten und erste Kernthemen sehen. Premium erweitert später Tiefe und Begleitung, ist aber kein Zwang."
      },
      {
        q: "Welche Daten brauche ich für den Start?",
        a: "Geburtsdatum und Geburtsort genügen für einen ersten Lauf. Geburtszeit, Name und freiwillige Selbstauskunft verfeinern dein Profil zusätzlich."
      },
      {
        q: "Was passiert mit meinen Daten?",
        a: "Astrakey nutzt sie zweckgebunden für die Berechnung. Du kannst sie jederzeit einsehen, exportieren und löschen und deine Einwilligung widerrufen."
      },
      {
        q: "Brauche ich meine genaue Geburtszeit?",
        a: "Nein. Astrakey funktioniert auch ohne und kennzeichnet, welche Aussagen dadurch unsicherer sind. Du kannst die Zeit später ergänzen."
      },
      {
        q: "Erstelle ich beim Start eine Seelenkarte?",
        a: "Du berechnest zuerst ein Mehrsystem-Profil. Die Seelenkarte ist eine spätere visuelle Ansicht dieses Profils, nicht der Einstieg."
      },
      {
        q: "Wie lange dauert der Start?",
        a: "In der Regel wenige Minuten. Danach siehst du erste Kernthemen und kannst entscheiden, ob und wie du vertiefen möchtest."
      },
      {
        q: "Muss ich mich registrieren?",
        a: "Du legst ein Profil an, um deine Auswertung zu speichern. Was gespeichert wird, ist transparent, und du kannst alles wieder löschen."
      },
      {
        q: "Ist das eine Diagnose?",
        a: "Nein. Astrakey ist ein Reflexionsangebot und keine medizinische, psychologische oder therapeutische Beratung."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  preise: {
    key: "preise",
    slug: "preise",
    navKey: "preise",
    title: "Du zahlst für Tiefe, nicht für ein Geheimnis.",
    seoTitle: "Astrakey Preise: Wert der Tiefe, nicht Verknappung",
    seoDescription: "Astrakey ist kostenlos erlebbar. Premium öffnet mehr Systeme, das Seelenbuch und Begleitung. Du zahlst für Tiefe, nicht für einen geheimen Satz.",
    eyebrow: "Preise",
    lead: "Der kostenlose Einstieg zeigt, ob Astrakey bei dir Resonanz erzeugt. Zwei bezahlte Tarife öffnen je mehr Tiefe: Readings (49 €/Jahr) für alle KI-Inhalte und die fortlaufende Begleitung, All-Access (99 €/Jahr) zusätzlich für das Seelenbuch und die Beziehungsanalyse. Einzel-Optionen für Seelenbuch und Partner-Analyse sind separat verfügbar. Der Wert liegt in Umfang, Kontext und Begleitung über Zeit, nicht in einem zurückgehaltenen Satz über dich.",
    answer: "Der kostenlose Einstieg zeigt, ob Astrakey bei dir Resonanz erzeugt.",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Klare Tarife ohne versteckte Bedingungen. Keine Dringlichkeit, keine Countdown-Logik.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Kostenlos vs Premium",
    image: "/images/hermetia/quiet-offering-table.png",
    imageAlt: "Du zahlst für Tiefe, nicht für ein Geheimnis. als Astrakey Markenbild",
    sections: [
      {
        title: "Wofür du bei Astrakey bezahlst",
        body: "Bei Astrakey zahlst du nicht für einen geheimen Satz über dich und nicht für eine schöne Karte. Du zahlst für eine erklärbare Profilumgebung, die du lesen, prüfen, vertiefen und über Zeit nutzen kannst. Hinter der Tiefe steht echte Arbeit: mehr berechnete Systeme, eine genauere Gewichtung über die Konvergenz-Engine, längere und sorgfältig formulierte Auswertungen, das Seelenbuch, fortlaufende Begleitung und die Beziehungsanalyse. Diese Leistungen erzeugen laufenden Aufwand, von der Berechnung über die redaktionelle Qualität bis zur sicheren Speicherung. Deshalb ist der Einstieg kostenlos erlebbar, und die Tiefe ist Teil eines bezahlten Modells. Der Preis verkauft also nicht „mehr Ebenen\" als Zahl, sondern mehr Kontext, mehr Verständlichkeit und mehr Möglichkeiten, deine Themen wirklich zu nutzen.\n\n- Du zahlst für Umfang, Kontext und Begleitung, nicht für Verknappung.\n- Tiefe bedeutet mehr Reflexion, nicht mehr Wahrheit über dich.\n- Der kostenlose Einstieg bleibt eine ehrliche Resonanzprüfung."
      },
      {
        title: "Kostenloser Einstieg",
        body: "Der kostenlose Einstieg ist keine abgeschnittene Demo, sondern eine echte Resonanzprüfung. Du berechnest dein Mehrsystem-Profil, siehst erste Kernthemen und verstehst, wie Astrakey Aussagen herleitet. Du erlebst, dass mehrere Systeme zusammenwirken und dass starke Aussagen ihre Belege zeigen. Du bekommst genug, um eine echte Entscheidung zu treffen: Passen Sprache, Ton und Datenschutz zu dir? Erkennst du dich in den ersten Themen wieder? Wer nach dem Einstieg merkt, dass Astrakey nicht passt, hat trotzdem Orientierung gewonnen und nichts bezahlt. Wer Resonanz spürt, versteht klarer, warum Tiefe sinnvoll werden kann. Der kostenlose Einstieg wirkt deshalb nicht leer, sondern neugierig und fair. Er ist der ehrliche erste Schritt, nicht der Köder für einen versteckten Verkauf.\n\n- Echtes Mehrsystem-Profil mit ersten Kernthemen.\n- Sichtbare Herleitung statt bloßer Behauptungen.\n- Kein Kreditkartenzwang, keine versteckten Kosten."
      },
      {
        title: "Die bezahlten Tarife als Profilumgebung",
        body: "Die bezahlten Tarife beginnen dort, wo aus einem ersten Profil eine ernsthafte, wiederkehrende Arbeit mit dir selbst wird. **Readings** (49 €/Jahr) öffnet alle KI-formulierten Inhalte: ausführliche Kern-Deutung, Reader-Blöcke und Systemporträts, Synthese, Tagesimpulse, Journaling, den Companion, das Orakel und die Musikwiedergabe auf „Heute\". Diese Module übertragen dein Profil in den Alltag und machen Muster über Wochen sichtbar. **All-Access** (99 €/Jahr) enthält alles aus Readings und ergänzt das Seelenbuch sowie die Beziehungsanalyse. Das Seelenbuch entfaltet deine Themen über viele Kapitel mit Systembelegen und Reflexionsfragen. Die Beziehungsanalyse verbindet zwei Profile mit klarer Einwilligung. Beide Tarife sind keine Freischaltung von Zurückgehaltenem, sondern der Ausbau einer Reflexionspraxis, die du über Zeit nutzt. Wer nur das Seelenbuch oder eine einzelne Partner-Analyse möchte, kann diese auch separat als Einmal-Kauf erwerben.\n\n- Readings: alle KI-Inhalte, Begleitung und Tagesimpulse ab 49 €/Jahr.\n- All-Access: Readings plus Seelenbuch und Beziehungsanalyse ab 99 €/Jahr.\n- Wert entsteht über Zeit, nicht durch ein einzelnes Ergebnis."
      },
      {
        title: "So sind die Tarife aufgebaut",
        body: "Astrakey hält die Tariflogik einfach und ehrlich. Es gibt einen kostenlosen Einstieg, zwei Abo-Tarife und zwei Einzel-Optionen — klar trennbar, ohne versteckte Abhängigkeiten.\n\n| Tarif | Preis | Enthält |\n|---|---|---|\n| **Kostenlos** | 0 € | Profil berechnen, Seelenkarte, Konvergenz-Übersicht, Systemansichten, Journal, Tagesspruch |\n| **Readings** | 49 €/Jahr | Kostenlos + alle KI-Inhalte: Kern-Deutung, Reader-Blöcke, Systemporträts, Synthese, Tagesimpulse, Orakel, Journaling mit Tagesimpuls, Companion, Musikwiedergabe |\n| **All-Access** | 99 €/Jahr | Readings + Seelenbuch + Beziehungsanalyse |\n| **Seelenbuch** | 49 € einmalig | Nur das Seelenbuch — kaufen, behalten, immer wieder lesen |\n| **Partner-Analyse** | 49 € je Beziehung | Nur diese eine Beziehungsanalyse, immer mit klarer beidseitiger Einwilligung |\n\nDer kostenlose Einstieg ist kein Demo-Fragment. Readings lohnt sich, wenn du KI-Deutungen und fortlaufende Begleitung nutzen willst. All-Access ist die richtige Wahl, wenn das Seelenbuch oder die Beziehungsanalyse dazukommen sollen. Die Einzel-Optionen sind für alle, die ein bestimmtes Produkt einmalig haben möchten, ohne ein Abo zu starten. Preise, Leistungen und Bedingungen stehen sichtbar nebeneinander, ohne Sternchentexte. Keine künstliche Verknappung, kein Countdown, kein vorausgewähltes teuerstes Modell. Abo-Tarife sind jederzeit kündbar, Einmal-Produkte behältst du dauerhaft.\n\n- Fünf klare Optionen: kostenlos, zwei Abos, zwei Einmalkäufe.\n- Einmal-Produkte behältst du, Abos sind jederzeit kündbar.\n- Keine versteckten Bedingungen, keine Verknappung, kein Countdown."
      },
      {
        title: "Warum Tiefe ihren Preis hat",
        body: "Ein erklärbares Profil ist aufwendiger als ein schneller Generator. Datenqualität, Berechnung, die Gewichtung über die Konvergenz-Engine, längere und geprüfte Texte, die transparente AI-Formulierung, sichere Speicherung und der Schutz sensibler Daten erzeugen dauerhaften Aufwand. Astrakey nutzt AI als Sprachebene, nicht als Abkürzung zur Wahrheit, und genau diese Sorgfalt kostet Arbeit. Der Preis spiegelt deshalb nicht Knappheit, sondern Substanz. Du bekommst kein Etikett, das dich festlegt, sondern eine Umgebung, in der du Aussagen prüfen, mit Belegen abgleichen und über Zeit beobachten kannst. Diese Fairness macht den Wert nachvollziehbar: Du verstehst, wofür du zahlst, und kannst jederzeit entscheiden, ob dir die Tiefe das wert ist.\n\n- Preis spiegelt Substanz und Sorgfalt, nicht Knappheit.\n- AI ist die Sprachebene, die Grundlage bleibt berechnet und geprüft.\n- Du kannst Aussagen prüfen, statt ein Etikett zu kaufen."
      },
      {
        title: "Faire Entscheidung ohne Druck",
        body: "Du musst dich nicht sofort entscheiden. Der ehrliche Weg ist, kostenlos zu starten, Resonanz zu prüfen und erst dann zu überlegen, ob Tiefe für dich sinnvoll ist. Wenn du die beiden Wege direkt nebeneinander sehen möchtest, hilft dir die Seite Kostenlos vs Premium mit einer klaren Gegenüberstellung. Astrakey hat kein Interesse daran, dich in ein Modell zu drängen, das du nicht nutzt. Begleitung lohnt sich dann, wenn du regelmäßig reflektierst. Das Seelenbuch lohnt sich, wenn du in Ruhe lesen und wiederlesen willst. Die Beziehungsanalyse lohnt sich, wenn du eine Partnerschaft differenzierter verstehen möchtest. Du entscheidest bewusst, und du kannst jederzeit wieder kostenlos bleiben.\n\n- Erst prüfen, dann entscheiden.\n- Klare Gegenüberstellung statt Verkaufsdruck.\n- Premium lohnt sich nur, wenn du es wirklich nutzt."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Ist Astrakey kostenlos nutzbar?",
        a: "Ja. Der Einstieg ist ohne Kreditkarte möglich. Du berechnest ein Mehrsystem-Profil und siehst erste Kernthemen. Premium erweitert Tiefe und Begleitung."
      },
      {
        q: "Was ist in den bezahlten Tarifen enthalten?",
        a: "Readings (49 €/Jahr) öffnet alle KI-Inhalte: Kern-Deutung, Reader-Blöcke, Synthese, Tagesimpulse, Journaling, Companion, Orakel und Musik. All-Access (99 €/Jahr) enthält Readings plus das Seelenbuch und die Beziehungsanalyse. Einzel-Optionen für Seelenbuch und Partner-Analyse sind separat erhältlich."
      },
      {
        q: "Warum ist die Tiefe nicht komplett kostenlos?",
        a: "Weil lange, geprüfte Texte, Berechnung, transparente AI-Formulierung, Sicherheit und Begleitung laufenden Aufwand erzeugen. Der kostenlose Einstieg zeigt zuerst Resonanz."
      },
      {
        q: "Zahle ich für die Seelenkarte?",
        a: "Nein. Die Seelenkarte ist eine Ansicht deines Profils. Du zahlst für Tiefe, Kontext und Begleitung, nicht für ein einzelnes Bild."
      },
      {
        q: "Gibt es versteckte Kosten oder automatische Verlängerungen mit Fallen?",
        a: "Nein. Bedingungen stehen sichtbar. Laufende Begleitung ist jederzeit kündbar, und Einmal-Produkte behältst du."
      },
      {
        q: "Kann ich das Seelenbuch einzeln erhalten?",
        a: "Ja. Das Seelenbuch ist als Einmalkauf für 49 € erhältlich. Du kaufst es einmalig, behältst es dauerhaft und musst kein Abo starten. Es ist auch im All-Access-Tarif enthalten."
      },
      {
        q: "Verspricht der Preis ein besseres Schicksal oder sichere Vorhersagen?",
        a: "Nein. Astrakey verkauft keine Sicherheit über die Zukunft. Du zahlst für eine erklärbare Reflexionsumgebung."
      },
      {
        q: "Was passiert mit meinen Daten, wenn ich nicht zahle?",
        a: "Auch im kostenlosen Einstieg gelten dieselben Datenschutzregeln. Du kannst deine Daten jederzeit exportieren und löschen."
      }
    ],
    ctaTitle: "Wähle die Tiefe, die zu deinem Profil passt.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  freePremium: {
    key: "freePremium",
    slug: "kostenlos-vs-premium",
    navKey: "freePremium",
    title: "Resonanz prüfen oder in die Tiefe gehen.",
    seoTitle: "Astrakey: kostenlos vs Premium im Vergleich",
    seoDescription: "Kostenlos prüfst du Resonanz, Premium öffnet Tiefe und Begleitung. Klare Gegenüberstellung und faire Entscheidungshilfe, ohne Druck und ohne Dark Patterns.",
    eyebrow: "Kostenlos vs Premium",
    lead: "Kostenlos beantwortet eine Frage: Erkenne ich mich in einem Mehrsystem-Profil wieder? Die bezahlten Tarife beantworten eine andere: Will ich verstehen, warum etwas passt, aus welchen Systemen es kommt und wie ich damit weiterarbeite? Readings (49 €/Jahr) öffnet alle KI-Inhalte und die Begleitung. All-Access (99 €/Jahr) ergänzt das Seelenbuch und die Beziehungsanalyse. Diese Seite stellt alle Wege klar nebeneinander, damit du fair und ohne Druck entscheiden kannst.",
    answer: "Kostenlos beantwortet eine Frage: Erkenne ich mich in einem Mehrsystem-Profil wieder?",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Ehrliche Gegenüberstellung statt Verkaufstaktik. Premium ist Tiefe, nicht Freischaltung von Zurückgehaltenem.",
    primaryCta: "Premium ansehen",
    primaryCtaHref: "/preise/",
    secondaryCta: "Profil kostenlos starten",
    secondaryCtaHref: "start",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Resonanz prüfen oder in die Tiefe gehen. als Astrakey Markenbild",
    sections: [
      {
        title: "Zwei verschiedene Fragen",
        body: "Der Unterschied zwischen kostenlos und Premium ist kein Unterschied zwischen wenig und viel, sondern zwischen zwei Fragen. Kostenlos beantwortet die Frage: Erkenne ich mich in einem Mehrsystem-Profil wieder? Du siehst erste Kernthemen, erste Systembelege und bekommst ein Gefühl dafür, wie Astrakey Aussagen herleitet. Premium beantwortet eine tiefere Frage: Warum passt etwas, aus welchen Systemen kommt es, und wie arbeite ich damit weiter? Diese Unterscheidung ist wichtig, weil sie ehrlich ist. Der kostenlose Einstieg ist keine beschnittene Mini-Karte, sondern eine echte Resonanzprüfung. Premium ist keine Belohnung für Zahlung, sondern der Ausbau zu Tiefe und Begleitung. Wenn du diese beiden Fragen für dich beantwortest, weißt du fast von selbst, welcher Weg gerade zu dir passt.\n\n- Kostenlos prüft Resonanz, Premium liefert Tiefe und Begründung.\n- Kein Unterschied zwischen wenig und viel, sondern zwischen zwei Fragen.\n- Beide Wege sind ehrlich, keiner ist ein Köder."
      },
      {
        title: "Was der kostenlose Einstieg leistet",
        body: "Der kostenlose Einstieg gibt dir genug für eine echte Entscheidung. Du berechnest dein Mehrsystem-Profil und siehst, welche Kernthemen über mehrere Perspektiven hinweg auftauchen. Du erkennst, dass Astrakey Aussagen herleitet und ihre Belege zeigt, statt nur zu behaupten. Du prüfst, ob Sprache, Ton und Datenschutz zu dir passen. Du verstehst die Grundidee der Konvergenz und siehst erste Spannungsfelder. Das alles ist nicht künstlich leer, sondern als ehrliche Resonanzprüfung gedacht. Wer hier merkt, dass Astrakey nicht passt, hat trotzdem Orientierung gewonnen. Wer Resonanz spürt, hat eine solide Grundlage, um über Tiefe nachzudenken. Der kostenlose Einstieg ist damit ein vollwertiger erster Schritt und nicht nur ein Vorgeschmack auf einen Verkauf.\n\n- Echtes Profil mit ersten Kernthemen und Belegen.\n- Prüfung von Sprache, Ton und Datenschutz.\n- Orientierung auch dann, wenn du nicht weitergehst."
      },
      {
        title: "Was die bezahlten Tarife hinzufügen",
        body: "Die bezahlten Tarife fügen dort Wert hinzu, wo du nicht nur wissen willst, ob etwas grob passt, sondern warum es passt und wie du damit weiterarbeitest. **Readings** (49 €/Jahr) öffnet alles, was KI formuliert: ausführliche Kern-Deutung, Reader-Blöcke, Systemporträts, Synthese, Tagesimpulse, das Orakel, Journaling, den Companion und die Musikwiedergabe. Tagesimpulse und Journaling machen aus dem Profil eine fortlaufende Praxis und zeigen Muster über Wochen. Der Companion hilft, komplexe Stellen verständlich aufzuschlüsseln. **All-Access** (99 €/Jahr) enthält alles aus Readings und ergänzt das Seelenbuch sowie die Beziehungsanalyse. Das Seelenbuch entfaltet deine Themen über viele Kapitel mit Systembelegen und Reflexionsfragen zum Wiederlesen. Die Beziehungsanalyse verbindet zwei Profile mit klarer Einwilligung. Wer nur das Seelenbuch oder eine einzelne Partner-Analyse möchte, kann diese auch als Einmal-Kauf erwerben, ohne ein Abo zu starten. Die bezahlten Tarife sind keine geheime Schicht, sondern mehr Kontext, mehr Verständlichkeit und mehr Möglichkeiten, deine Themen über Zeit zu nutzen.\n\n- Readings: KI-Inhalte, Tagesimpulse, Journaling, Companion, Orakel und Musik.\n- All-Access: Readings plus Seelenbuch und Beziehungsanalyse.\n- Kein zurückgehaltener Satz, sondern mehr Kontext und Praxis."
      },
      {
        title: "Direkte Gegenüberstellung",
        body: "Eine ehrliche Gegenüberstellung zeigt beide Wege gleichwertig nebeneinander, ohne den kostenlosen Einstieg künstlich klein wirken zu lassen. Sie ist als kompakte, zeilenweise Gegenüberstellung gedacht, in der jede Leistung eine eigene Zeile bekommt und für beide Wege klar markiert ist, ob sie enthalten ist. Damit du sofort verstehst, was die Tabelle vergleicht, hier die zentralen Feature-Zeilen im Klartext:\n\n- **Mehrsystem-Profil und Kernthemen:** im kostenlosen Einstieg enthalten, in Premium feiner durch mehr Systeme und genauere Gewichtung.\n- **Sichtbare Herleitung und Systembelege:** im kostenlosen Einstieg enthalten, in Premium ausführlicher.\n- **Reflexion und Spannungsfelder:** erste Reflexionsthemen im Einstieg, vertiefte Reflexion mit Reflexionsfragen in Premium.\n- **Journaling und Tagesimpulse:** Teil von Premium, übertragen dein Profil als fortlaufende Praxis in den Alltag.\n- **Seelenbuch:** Teil von Premium, entfaltet deine Themen über viele Kapitel mit Systembelegen.\n- **Beziehungsanalyse:** Teil von Premium, immer mit klarer beidseitiger Einwilligung.\n- **Companion:** Teil von Premium, schlüsselt komplexe Stellen verständlich auf.\n- **Datenkontrolle mit Export und Löschung:** in beiden Wegen gleich, jederzeit.\n\nWichtig ist, was die Tabelle nicht tut: Sie versteckt nichts hinter Sternchen, sie nutzt keine Fake-Streichpreise und sie wählt kein Modell für dich vor. Du siehst klar, was jeder Weg leistet, und entscheidest selbst. Genau diese Transparenz ist Teil der Astrakey-Haltung. Eine gute Entscheidung braucht Klarheit, keinen Druck.\n\n- Beide Wege gleichwertig und sichtbar nebeneinander.\n- Echte Feature-Zeilen: Reflexion, Journaling, Seelenbuch, Beziehungsanalyse und mehr.\n- Keine versteckten Bedingungen, keine Fake-Rabatte.\n- Du entscheidest, nichts wird vorausgewählt.\n\n> **Build-Aufgabe:** Die zugängliche Vergleichstabelle mit vier Spalten (Kostenlos, Readings, All-Access, Einzel-Optionen) wird als HTML-Tabelle mit Labels aus `messages/*.json` gerendert. Feature-Zeilen und Tarifzuordnung stehen fest (siehe Abschnitt oben). Tarifnamen und Beträge werden zentral aus dem Pricing-Konfig bezogen, nicht im HTML hardcodiert."
      },
      {
        title: "Für wen sich welcher Weg lohnt",
        body: "Nicht jede Person braucht Premium, und das sagt Astrakey offen. Wenn du nur prüfen willst, ob ein Mehrsystem-Profil bei dir resoniert, reicht der kostenlose Einstieg vollkommen. Wenn du neugierig auf einzelne Systeme bist, kannst du Systemprofile erkunden, ohne sofort zu zahlen. Premium lohnt sich, wenn du regelmäßig reflektieren willst, wenn du in Ruhe lesen und wiederlesen möchtest, wenn du eine Partnerschaft differenzierter verstehen willst oder wenn du Begleitung über Zeit suchst. Wenn du gerade keine Zeit für eine fortlaufende Praxis hast, ist es vollkommen in Ordnung, beim kostenlosen Einstieg zu bleiben. Eine gute Entscheidung richtet sich nach deinem tatsächlichen Bedarf, nicht nach dem, was am meisten kostet.\n\n- Kostenlos genügt, wenn du nur Resonanz prüfen willst.\n- Premium lohnt sich bei regelmäßiger Reflexion und Begleitung.\n- Es ist in Ordnung, kostenlos zu bleiben."
      },
      {
        title: "Deine Entscheidung, jederzeit änderbar",
        body: "Deine Entscheidung ist nicht endgültig. Du kannst kostenlos starten, später Premium ausprobieren und jederzeit wieder zum kostenlosen Einstieg zurückkehren. Astrakey baut keine Falle ein, die dich festhält, und nutzt keine Angst, um dich im teuersten Modell zu halten. Laufende Begleitung ist kündbar, und Inhalte, die du als Einmal-Produkt erhalten hast, behältst du. Wenn du dir unsicher bist, ist der ruhigste Weg, mit dem kostenlosen Einstieg zu beginnen und Premium erst zu wählen, wenn du den konkreten Nutzen für dich erkennst. So bleibt die Entscheidung deine, und sie bleibt jederzeit korrigierbar. Astrakey gewinnt nicht durch Druck, sondern durch nachvollziehbaren Wert.\n\n- Wechsel zwischen kostenlos und Premium jederzeit möglich.\n- Keine Haltefalle, keine Angst als Verkaufsmittel.\n- Im Zweifel ruhig kostenlos beginnen."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was ist der Unterschied zwischen kostenlos und den bezahlten Tarifen?",
        a: "Kostenlos prüft Resonanz. Readings (49 €/Jahr) öffnet alle KI-Inhalte und die Begleitung. All-Access (99 €/Jahr) ergänzt das Seelenbuch und die Beziehungsanalyse. Einzel-Optionen für Seelenbuch und Partner-Analyse sind separat erhältlich."
      },
      {
        q: "Ist der kostenlose Einstieg nur eine Demo?",
        a: "Nein. Du berechnest ein echtes Profil, siehst erste Kernthemen mit Belegen und kannst Sprache, Ton und Datenschutz prüfen."
      },
      {
        q: "Brauche ich Premium, um Astrakey sinnvoll zu nutzen?",
        a: "Nicht zwingend. Für eine Resonanzprüfung reicht der kostenlose Einstieg. Premium lohnt sich, wenn du regelmäßig vertiefen und begleitet werden willst."
      },
      {
        q: "Kann ich Premium ausprobieren und wieder zurück?",
        a: "Ja. Du kannst jederzeit wieder beim kostenlosen Einstieg bleiben. Laufende Begleitung ist kündbar."
      },
      {
        q: "Verliere ich meine Daten, wenn ich kein Premium nehme?",
        a: "Nein. Deine Daten und dein Profil bleiben erhalten, und du kannst sie jederzeit exportieren und löschen."
      },
      {
        q: "Ist das Seelenbuch im kostenlosen Einstieg enthalten?",
        a: "Nein. Das Seelenbuch ist Teil des All-Access-Tarifs (99 €/Jahr) oder als Einmalkauf (49 €) separat erhältlich. Der kostenlose Einstieg und Readings zeigen keine Seelenbuch-Inhalte."
      },
      {
        q: "Gibt es versteckte Kosten beim Wechsel?",
        a: "Nein. Bedingungen stehen sichtbar, und nichts wird automatisch teurer vorausgewählt."
      },
      {
        q: "Was empfiehlt Astrakey im Zweifel?",
        a: "Im Zweifel kostenlos starten, Resonanz prüfen und Premium erst wählen, wenn der konkrete Nutzen klar ist."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  anwendungsfaelle: {
    key: "anwendungsfaelle",
    slug: "anwendungsfaelle",
    navKey: "anwendungsfaelle",
    title: "Für alle, denen eine einzige Erklärung nicht genügt.",
    seoTitle: "Anwendungsfälle: wofür du Astrakey nutzt",
    seoDescription: "Selbstverständnis, Beruf, Beziehungen, Übergänge, wiederkehrende Spannungen. Sieh, welche Astrakey-Module zu deiner Situation passen.",
    eyebrow: "Anwendungsfälle",
    lead: "Astrakey hilft überall dort, wo du verstehen willst, welche Muster über mehrere Perspektiven hinweg in dir wiederkehren. Ob Selbstverständnis, berufliche Orientierung, Beziehungsfragen, ein Übergang oder eine wiederkehrende innere Spannung: Diese Seite holt dich bei deiner Situation ab und zeigt, welche Module deines Mehrsystem-Profils dafür gemacht sind.",
    answer: "Astrakey hilft überall dort, wo du verstehen willst, welche Muster über mehrere Perspektiven hinweg in dir wiederkehren.",
    trustline: "Kostenloser Einstieg ohne Kreditkarte. Reflexionsangebot, keine Diagnose und keine Vorhersage. Du entscheidest, wie tief du gehst.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Passendes Modul ansehen",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Für alle, denen eine einzige Erklärung nicht genügt. als Astrakey Markenbild",
    sections: [
      {
        title: "Eine bessere Frage als „Wer bin ich?\"",
        body: "Viele Menschen suchen nach einer einzigen Antwort auf die Frage, wer sie sind. Astrakey schlägt eine bessere Frage vor: Welche Themen kehren in mir über mehrere unabhängige Perspektiven hinweg wieder? Diese Frage ist nützlicher, weil sie nicht ein Etikett verteilt, sondern Muster sichtbar macht. Aus ihr entstehen konkrete Anwendungsfälle: Welche Stärken zeigen sich in mehreren Systemen? Wo widersprechen sich meine Anteile und bilden ein Spannungsfeld? Welche Beziehungsmuster wiederholen sich? Welche Systeme beschreiben mich gut und welche weniger? Astrakey ist deshalb kein Werkzeug für eine schnelle Selbsteinordnung, sondern für Menschen, die genauer hinsehen wollen. Die folgenden Situationen zeigen, wie sich das im Alltag anfühlt und welche Module jeweils helfen.\n\n- Nicht ein Etikett, sondern wiederkehrende Muster.\n- Konkrete Fragen statt einer einzigen Antwort.\n- Für Menschen, die genauer hinsehen wollen."
      },
      {
        title: "Sich selbst klarer verstehen",
        body: "Vielleicht spürst du Muster in dir, für die dir die Worte fehlen. Du erkennst dich in einem System wieder, bist dir aber unsicher, wie verlässlich das ist. Hier hilft das Mehrsystem-Profil: Es zeigt, welche Kernthemen über mehrere unabhängige Systemfamilien getragen werden und welche nur aus einem einzelnen Blickwinkel stammen. Wenn du tiefer einsteigen willst, entfaltet das Seelenbuch deine Themen über viele Kapitel mit Systembelegen und Reflexionsfragen. Wenn du einzelne Perspektiven verstehen möchtest, kannst du die Systemprofile öffnen und nachlesen, was jede beiträgt. So bekommst du keine fertige Identität, sondern Sprache für das, was du schon lange ahnst, und eine Grundlage, um es im Alltag zu prüfen. Auch hier gilt: Astrakey ist ein Reflexionsangebot und keine Diagnose. Es ordnet dich nicht in eine Kategorie ein und ersetzt keine medizinische oder therapeutische Einschätzung, sondern hilft dir, dich selbst genauer zu beschreiben.\n\n- Mehrsystem-Profil für stabile Kernthemen statt Einzeldeutung.\n- Seelenbuch für Tiefe, Systemprofile für einzelne Perspektiven.\n- Sprache für Muster, kein festes Etikett und keine Diagnose."
      },
      {
        title: "Berufliche Orientierung finden",
        body: "Bei beruflichen Fragen geht es selten um eine einzige richtige Antwort. Astrakey verspricht keinen perfekten Job und keine sichere Zukunft. Es kann aber helfen, deine wiederkehrenden Stärken, deine bevorzugten Energieformen und deine inneren Spannungsfelder klarer zu sehen. Wenn mehrere Systeme auf ein ähnliches Motiv zeigen, etwa auf einen Wunsch nach Eigenständigkeit oder auf eine Stärke im Verbinden von Menschen, wird dieses Motiv im Profil tragfähiger. Besonders konkret wird das beim projektbasierten Arbeiten: Wenn du in Projekten denkst, kannst du deine Themen nutzen, um zu reflektieren, welche Phasen dir liegen, ob du eher im Anstoßen, im Durchhalten oder im Abschließen aufgehst. Manche Systeme beschreiben so etwas wie wiederkehrende Energiezyklen, also Phasen, in denen du eher nach außen oder eher nach innen gerichtet bist. Astrakey behauptet nicht, diese Zyklen exakt vorherzusagen, sondern bietet sie als Reflexionsfolie an, an der du deine eigene Beobachtung prüfst. Das Mehrsystem-Profil bündelt solche Themen, das Seelenbuch entfaltet sie mit Reflexionsfragen zu Arbeit und Berufung, und Journaling hilft, deine Beobachtungen über Zeit zu sammeln. So entsteht keine Berufsempfehlung, sondern eine bessere Grundlage für deine eigenen Entscheidungen: Astrakey reflektiert mit dir, es empfiehlt nicht.\n\n- Wiederkehrende Stärken und Energieformen sichtbar machen.\n- Projektphasen und Energiezyklen als Reflexionsfolie, nicht als Vorhersage.\n- Seelenbuch mit Reflexionsfragen zu Arbeit und Berufung.\n- Keine Berufsempfehlung, sondern eine Entscheidungsgrundlage."
      },
      {
        title: "Beziehungen besser verstehen",
        body: "In Beziehungen wiederholen sich oft dieselben Missverständnisse. Astrakey fragt nicht, ob zwei Menschen „passen\" oder ob eine Beziehung richtig oder falsch ist. Die Beziehungsanalyse zeigt, wo Resonanz entsteht, wo Reibung auftaucht und welche Muster zwei Profile gemeinsam sichtbar machen. Sie verbindet individuelle Profile zu gemeinsamen Themen, Spannungsfeldern und Gesprächsimpulsen. Wichtig ist die klare Einwilligung: Eine Beziehungsanalyse verarbeitet sensible Informationen über zwei Menschen und findet niemals heimlich oder ohne Zustimmung statt. Für viele Nutzer ist der konkrete Nutzen hier besonders groß, weil sie ihre Dynamiken und wiederkehrenden Reibungspunkte besser einordnen können. Es geht nicht um ein Urteil über die Beziehung, sondern um mehr Verständnis füreinander.\n\n- Resonanz, Reibung und gemeinsame Muster statt Passungsurteil.\n- Beziehungsanalyse nur mit klarer, beidseitiger Einwilligung.\n- Mehr Verständnis füreinander, keine Bewertung der Beziehung."
      },
      {
        title: "Übergänge und Veränderungen begleiten",
        body: "In Phasen der Veränderung, etwa bei einem Umzug, einem neuen Lebensabschnitt oder einer wichtigen Entscheidung, hilft ein ruhiger Blick auf die eigenen Muster. Das gilt auch für tiefe Lebensumbrüche. Wenn eine Beziehung endet oder eine Trennung dich gerade durchschüttelt, will Astrakey nichts beschönigen und nichts erklären, was du selbst spüren musst. Es kann dir aber einen ruhigen Ort geben, um deine eigenen wiederkehrenden Muster anzusehen, in deinem Tempo und ohne Bewertung. Ähnlich behutsam begleitet es eine innere Neuorientierung in der Lebensmitte, wenn vertraute Rollen sich verschieben und die Frage nach dem, was jetzt zählt, neu aufkommt. Astrakey behauptet nicht, die Zukunft zu kennen, und gibt keine Sicherheit über das, was kommt. Es kann aber Aufmerksamkeit bündeln. Tagesimpulse übertragen deine Kernthemen in den Alltag und schlagen einen ruhigen Fokus für den Tag vor, ohne eine Vorhersage zu treffen. Journaling hilft, über Wochen zu erkennen, welche Themen dich in dieser Phase wirklich begleiten und wo sich etwas verändert. Der Companion erklärt, woher eine Aussage kommt, wenn du Fragen hast. So wird ein Übergang nicht vorhergesagt, aber bewusster begleitet, mit besseren Fragen statt mit falschen Gewissheiten. Wenn dich eine Situation überfordert, ist Astrakey kein Ersatz für menschliche Unterstützung oder professionelle Hilfe.\n\n- Tagesimpulse als ruhiger Fokus, keine Vorhersage.\n- Auch bei Trennung und Neuorientierung in der Lebensmitte behutsam und ohne Bewertung.\n- Journaling, um Veränderung über Zeit zu beobachten.\n- Bewusste Begleitung statt Sicherheit über die Zukunft, kein Ersatz für Hilfe."
      },
      {
        title: "Wiederkehrende innere Spannungen einordnen",
        body: "Manche Muster fühlen sich wie ein Widerspruch an: der Wunsch nach Nähe und gleichzeitig nach Rückzug, der Drang nach Sichtbarkeit und zugleich nach Schutz. Astrakey behandelt solche Gegensätze nicht als Fehler, sondern als Spannungsfeld, in dem zwei Pole gleichzeitig aktiv sind. Genau hier zeigt sich eine Stärke des Mehrsystem-Profils: Wenn verschiedene Systeme dieselbe Spannung beschreiben, wird sie nicht zur Diagnose, sondern zu einem klaren Reflexionsthema. Das Profil zeigt die beiden Pole, das Seelenbuch entfaltet sie mit Reflexionsfragen, und Journaling hilft, zu beobachten, wann welche Seite stärker wirkt. Astrakey sagt dir nicht, welche Seite du wählen sollst, sondern macht die Spannung sichtbar, damit du selbst reflektieren kannst. So wird aus einem inneren Konflikt kein Etikett, sondern ein verständliches Muster, das du im Alltag bewusster wahrnehmen kannst.\n\n- Widersprüche als Spannungsfeld, nicht als Fehler.\n- Mehrere Systeme bestätigen eine Spannung statt sie zu diagnostizieren.\n- Reflexionsthema statt Etikett, beobachtbar über Journaling."
      },
      {
        title: "Welches Modul zu welcher Situation passt",
        body: "Damit du dich schnell zurechtfindest, lassen sich die Module klar zuordnen. Wenn du neugierig auf einzelne Perspektiven bist, helfen dir die Systemprofile. Wenn du ein stabiles Gesamtverständnis suchst, ist das Mehrsystem-Profil der richtige Ort. Wenn du Tiefe willst, entfaltet das Seelenbuch deine Themen über viele Kapitel. Wenn es um Partnerschaft geht, ist die Beziehungsanalyse das passende Modul, immer mit klarer Einwilligung. Wenn du im Alltag dranbleiben willst, verbinden Tagesimpulse und Journaling dein Profil mit deinen Beobachtungen. Und wenn du Fragen zu deinem Profil hast, hilft der Companion. Du musst dich nicht sofort festlegen. Der kostenlose Einstieg zeigt dir zuerst, ob Astrakey bei dir resoniert, und von dort wählst du das Modul, das zu deiner Situation passt.\n\n- Systemprofile für Neugier, Mehrsystem-Profil für Gesamtverständnis.\n- Seelenbuch für Tiefe, Beziehungsanalyse für Partnerschaft.\n- Tagesimpulse und Journaling für den Alltag, Companion für Fragen."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Wofür kann ich Astrakey nutzen?",
        a: "Für Selbstverständnis, berufliche Orientierung, Beziehungsfragen, Übergänge und wiederkehrende innere Spannungen. Astrakey zeigt, welche Muster über mehrere Perspektiven hinweg wiederkehren."
      },
      {
        q: "Hilft Astrakey bei der Berufswahl?",
        a: "Es gibt keine Berufsempfehlung. Astrakey kann wiederkehrende Stärken und Spannungsfelder sichtbar machen und so deine eigene Entscheidung besser fundieren."
      },
      {
        q: "Kann Astrakey meine Beziehung bewerten?",
        a: "Nein. Die Beziehungsanalyse zeigt Resonanz, Reibung und gemeinsame Muster mit klarer Einwilligung, sie urteilt nicht über richtig oder falsch."
      },
      {
        q: "Sagt Astrakey mir, was in meiner Zukunft passiert?",
        a: "Nein. Astrakey trifft keine Vorhersagen. Tagesimpulse bündeln Aufmerksamkeit, sie behaupten keine sichere Zukunft."
      },
      {
        q: "Ist Astrakey bei innerer Zerrissenheit eine Diagnose?",
        a: "Nein. Astrakey behandelt Gegensätze als Spannungsfeld und Reflexionsthema und ersetzt keine medizinische oder therapeutische Beratung."
      },
      {
        q: "Welches Modul ist für mich das richtige?",
        a: "Das hängt von deiner Situation ab. Abschnitt sieben ordnet Module wie Systemprofile, Seelenbuch, Beziehungsanalyse, Tagesimpulse und Journaling konkreten Situationen zu."
      },
      {
        q: "Muss ich für einen Anwendungsfall sofort zahlen?",
        a: "Nein. Der kostenlose Einstieg zeigt zuerst Resonanz. Tiefere Module sind Teil von Premium und bleiben deine Entscheidung."
      },
      {
        q: "Eignet sich Astrakey nur für spirituell interessierte Menschen?",
        a: "Nein. Auch wer Systeme nüchtern einordnen will, profitiert, weil Astrakey jede Aussage herleitet und Unsicherheit kennzeichnet."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  datenSicherheit: {
    key: "datenSicherheit",
    slug: "daten-und-sicherheit",
    navKey: "datenSicherheit",
    title: "Je persönlicher das Profil, desto klarer die Kontrolle.",
    seoTitle: "Astrakey: Daten und Sicherheit",
    seoDescription: "Welche Daten Astrakey nutzt, was gespeichert wird, wie Einwilligung, Export und Löschung funktionieren. Sensible Profile mit klarer Kontrolle.",
    eyebrow: "Vertrauen und Kontrolle",
    lead: "Astrakey verbindet viele Systeme zu einem persönlichen Profil. Das bedeutet sensible Daten, und genau deshalb behandelt Astrakey sie sparsam und transparent. Du siehst, welche Angaben wofür gebraucht werden, was gespeichert wird und wie du jederzeit exportieren oder löschen kannst.",
    answer: "Astrakey verbindet viele Systeme zu einem persönlichen Profil.",
    trustline: "Klare Einwilligung. Sichtbare Datennutzung. Export und Löschung jederzeit. Keine heimliche Auswertung anderer Personen.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "AI-Transparenz ansehen",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Je persönlicher das Profil, desto klarer die Kontrolle. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Vertrauen bei einem Mehrsystem-Profil zentral ist",
        body: "Ein Profil aus vielen Systemen entsteht aus Angaben, die viel über dich aussagen können. Geburtsdatum, Geburtsort und Geburtszeit, dein Name, deine freiwilligen Selbstauskünfte und später deine Journaltexte ergeben zusammen ein dichtes Bild. Astrakey nimmt diese Verantwortung ernst. Wenn ein Produkt verspricht, ein zuverlässigeres Profil zu erstellen, muss auch der Umgang mit Daten zuverlässig sein. Deshalb ist Datenschutz hier kein Anhang im Kleingedruckten, sondern Teil dessen, was Astrakey ausmacht. Du sollst dich nicht entscheiden müssen zwischen Tiefe und Schutz. Beides gehört zusammen. Die Grundregel ist einfach: So viel Daten wie nötig für ein gutes Profil, so wenig wie möglich darüber hinaus. Und an jeder Stelle behältst du die Übersicht, was Astrakey über dich weiß und was damit geschieht.\n\n- Sensible Angaben verlangen sorgfältigen Umgang, nicht Misstrauen.\n- Datensparsamkeit ist das Prinzip: so viel wie nötig, so wenig wie möglich.\n- Schutz und Tiefe schließen sich nicht aus, sie gehören zusammen."
      },
      {
        title: "Welche Daten Astrakey nutzt und wofür",
        body: "Astrakey verarbeitet nur Daten, die einen klaren Zweck im Profil haben. Geburtsdatum, Geburtsort und Geburtszeit fließen in die Systeme ein, die mit Zeit und Ort arbeiten. Dein Name dient den Systemen, die aus Buchstaben und Zahlen ableiten. Deine freiwilligen Selbstauskünfte erden das Profil mit Alltag, Verhalten und Selbstwahrnehmung. Wenn du Journaling nutzt, gehören deine Notizen dir und dienen deiner eigenen Reflexion. Wenn du eine Beziehungsanalyse anlegst, kommen Angaben zu einer zweiten Person hinzu, aber nur mit deren klarer Einwilligung. Jede dieser Angaben hat einen sichtbaren Grund. Astrakey sammelt keine Daten auf Vorrat und verlangt nichts, das für dein Profil nicht gebraucht wird. Wo eine Angabe optional ist, bleibt sie optional, und du erfährst, was sie verbessert und was ohne sie unsicherer bleibt.\n\n- Geburtsdaten für zeit- und ortsbezogene Systeme.\n- Name für Systeme aus Buchstaben und Zahlen.\n- Selbstauskunft und Journaling für Alltag und eigene Reflexion.\n- Daten zu zweiten Personen nur mit deren Einwilligung."
      },
      {
        title: "Einwilligung, die klar und widerrufbar ist",
        body: "Manche Daten in Astrakey gelten als besonders schützenswert, weil sie Rückschlüsse auf weltanschauliche Überzeugungen oder persönliche Innenwelt erlauben. Deshalb beruht ihre Verarbeitung auf deiner ausdrücklichen Einwilligung. Einwilligung heißt bei Astrakey: Du entscheidest aktiv, du verstehst, wofür du zustimmst, und du kannst deine Zustimmung jederzeit widerrufen. Besonders streng gilt das für die Beziehungsanalyse. Astrakey wertet niemals heimlich eine zweite Person aus. Eine Beziehungsanalyse entsteht nur, wenn beide Beteiligten zugestimmt haben. Ein Widerruf ist kein komplizierter Vorgang, sondern ein klarer Schritt, und er wirkt für die Zukunft. So bleibt die Kontrolle bei dir, auch wenn sich deine Haltung später ändert. Diese Klarheit ist bewusst gewählt, weil Vertrauen nur entsteht, wenn Zustimmung echt und reversibel ist.\n\n- Besondere Daten nur mit ausdrücklicher Einwilligung.\n- Zustimmung ist verständlich, freiwillig und jederzeit widerrufbar.\n- Beziehungsanalyse nur mit Einwilligung beider Personen."
      },
      {
        title: "Export, Löschung und deine Kontrolle",
        body: "Deine Daten gehören dir, und das soll spürbar sein. Du kannst dein Profil und deine Inhalte exportieren, um sie zu sichern oder mitzunehmen. Du kannst einzelne Angaben korrigieren, wenn sich etwas ändert oder genauer wird. Und du kannst dein Profil löschen, vollständig und ohne Hürdenlauf. Eine Löschung entfernt deine personenbezogenen Inhalte innerhalb von `[Platzhalter: Löschfrist verifizieren]` und bricht die Auswertung ab. Astrakey hält nicht heimlich Kopien zurück, um dich später erneut zu profilieren. Wenn du gehen möchtest, kannst du gehen. Diese Rechte sind nicht versteckt in einem Untermenü, sondern Teil der normalen Profilumgebung. Gerade weil Astrakey ein dichtes Bild von dir erstellen kann, ist es wichtig, dass das Auflösen dieses Bildes genauso einfach bleibt wie das Erstellen. Kontrolle bedeutet hier nicht nur Einsicht, sondern auch die Möglichkeit, alles wieder zurückzunehmen.\n\n- Export deiner Profildaten und Inhalte jederzeit möglich.\n- Korrektur einzelner Angaben, wenn sie sich ändern.\n- Vollständige Löschung ohne Hürden und ohne versteckte Kopien."
      },
      {
        title: "Sparsamkeit und Sicherheit im Umgang",
        body: "Sicherheit beginnt nicht erst bei der Technik, sondern bei der Frage, welche Daten überhaupt entstehen. Astrakey folgt dem Prinzip der Datensparsamkeit: Was nicht gebraucht wird, wird nicht erhoben. Was erhoben wird, dient einem sichtbaren Zweck. Persönliche Inhalte werden geschützt übertragen und gespeichert, und der Zugriff bleibt auf das beschränkt, was für den Betrieb des Profils notwendig ist. Deine Daten werden bei `[Platzhalter: Hosting- und Datenstandort verifizieren]` verarbeitet. Wenn du dein Profil löschst, werden deine personenbezogenen Inhalte innerhalb von `[Platzhalter: Löschfrist verifizieren]` entfernt. Astrakey verkauft deine Profildaten nicht und macht sie nicht zur Ware für Dritte. Auch im Inneren gilt Zurückhaltung: Sensible Inhalte wie Journaltexte werden nicht für Zwecke verwendet, denen du nicht zugestimmt hast. Dienstleister werden nur zweckgebunden eingebunden und nur, soweit sie für den Betrieb des Profils nötig sind. Diese Haltung ist Teil der Produktethik. Ein Profil aus vielen Systemen ist nur dann ein gutes Angebot, wenn die Daten, aus denen es entsteht, mit derselben Sorgfalt behandelt werden wie die Deutung, die daraus wird.\n\n- Wenig Daten erheben, klaren Zweck wahren.\n- Geschützte Übertragung und Speicherung, beschränkter Zugriff.\n- Dienstleister nur zweckgebunden, kein Verkauf deiner Daten.\n- Datenstandort und Löschfrist: `[Platzhalter: verifizieren]`."
      },
      {
        title: "Wo Astrakeys Grenzen liegen",
        body: "Vertrauen entsteht auch dadurch, dass ein Produkt sagt, was es nicht tut. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen. Es stellt keine Diagnosen und trifft keine Entscheidungen für dich. Dein Profil ist ein Reflexionsangebot, kein Urteil über deine Gesundheit, deine Beziehungen oder deine Zukunft. Astrakey leitet aus deinen Daten auch keine Bewertungen ab, die dich benachteiligen sollen. Es geht nicht darum, dich einzuordnen, sondern dir Sprache für das anzubieten, was du an dir beobachtest. Diese Grenzen sind bewusst gesetzt. Sie schützen dich und halten Astrakey ehrlich. Wenn du also überlegst, dein Profil zu starten, kannst du das in dem Wissen tun, dass die Auswertung dir gehört, dass du sie steuern kannst und dass sie dich nicht festschreibt.\n\n- Keine Diagnose, keine Therapie, keine Vorhersage, keine Beratung.\n- Keine Bewertung, die dich benachteiligt oder einordnet.\n- Dein Profil bleibt ein Angebot, kein Urteil über dich."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Welche Daten speichert Astrakey über mich?",
        a: "Astrakey speichert deine Geburtsdaten, deinen Namen, deine freiwilligen Selbstauskünfte und, wenn du sie nutzt, deine Journaltexte und Profilverfeinerungen. Jede Angabe hat einen sichtbaren Zweck im Profil."
      },
      {
        q: "Brauche ich für die Nutzung eine Einwilligung?",
        a: "Ja. Besonders schützenswerte Daten verarbeitet Astrakey nur mit deiner ausdrücklichen Einwilligung. Du kannst sie jederzeit für die Zukunft widerrufen."
      },
      {
        q: "Kann ich meine Daten exportieren?",
        a: "Ja. Du kannst dein Profil und deine Inhalte exportieren, um sie zu sichern oder mitzunehmen."
      },
      {
        q: "Wie lösche ich mein Profil?",
        a: "Du kannst dein Profil vollständig löschen. Die Löschung entfernt deine personenbezogenen Inhalte innerhalb von `[Platzhalter: Löschfrist verifizieren]` und bricht die Auswertung ab, ohne versteckte Kopien."
      },
      {
        q: "Wo werden meine Daten gespeichert?",
        a: "Deine Daten werden bei `[Platzhalter: Hosting- und Datenstandort verifizieren]` verarbeitet. Astrakey bindet Dienstleister nur zweckgebunden und nur für den Betrieb des Profils ein."
      },
      {
        q: "Wertet Astrakey heimlich andere Personen aus?",
        a: "Nein. Eine Beziehungsanalyse entsteht nur, wenn beide beteiligten Personen ausdrücklich zugestimmt haben."
      },
      {
        q: "Verkauft Astrakey meine Daten?",
        a: "Nein. Astrakey verkauft deine Profildaten nicht und gibt sie nicht als Ware an Dritte weiter."
      },
      {
        q: "Werden meine Journaltexte für die Deutung anderer Zwecke genutzt?",
        a: "Nein. Journaltexte dienen deiner eigenen Reflexion und werden nicht für Zwecke verwendet, denen du nicht zugestimmt hast."
      },
      {
        q: "Macht Astrakey aus meinen Daten eine Diagnose?",
        a: "Nein. Astrakey ist keine medizinische, psychologische oder therapeutische Beratung und erstellt keine Diagnose."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  ki: {
    key: "ki",
    slug: "ki-transparenz",
    navKey: "ki",
    title: "AI formuliert. Sie urteilt nicht über dich.",
    seoTitle: "Astrakey: AI-Transparenz",
    seoDescription: "AI formuliert deine Deutung verständlich, sie entscheidet nicht über die Wahrheit. So trennt Astrakey Berechnung, Konvergenz und Sprache nachvollziehbar.",
    eyebrow: "AI-Transparenz",
    lead: "Bei Astrakey entsteht dein Profil aus Berechnung und geprüfter Konvergenz. AI kommt erst danach, um die Ergebnisse verständlich und warm zu formulieren. Sie entscheidet nicht, welche Systeme übereinstimmen, und sie erfindet kein Profil. Du erkennst, wann Astrakey rechnet und wann es formuliert.",
    answer: "Bei Astrakey entsteht dein Profil aus Berechnung und geprüfter Konvergenz.",
    trustline: "Berechnung und Konvergenz sind deterministisch, gleiche Eingaben ergeben dasselbe Ergebnis, nicht eine bewiesene Wahrheit. AI ist die Sprachebene. Jede starke Aussage lässt sich zu ihren Systembelegen zurückverfolgen.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "So entsteht dein Profil",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "AI formuliert. Sie urteilt nicht über dich. als Astrakey Markenbild",
    sections: [
      {
        title: "Die wichtigste Unterscheidung zuerst",
        body: "Viele Menschen haben heute eine berechtigte Frage im Kopf: Schreibt hier einfach eine AI etwas über mich, das gut klingt, aber beliebig ist? Bei Astrakey lautet die Antwort klar nein. Dein Profil entsteht nicht dadurch, dass ein Sprachmodell frei über dich nachdenkt. Es entsteht aus Berechnung und aus der Prüfung, welche Themen über mehrere unabhängige Systeme hinweg gestützt sind. Erst wenn diese Grundlage steht, kommt AI ins Spiel, und zwar nur, um die Ergebnisse in verständliche, warme Sprache zu bringen. Die AI entscheidet nicht, welche Systeme zusammenpassen, sie erfindet keine Übereinstimmungen und sie setzt nichts als wahr, was nicht vorher berechnet wurde. Diese Reihenfolge ist der Kern der ganzen Seite. Astrakey trennt bewusst, was gerechnet wird, von dem, was formuliert wird, damit du der Sprache vertrauen kannst, ohne ihr eine Autorität zu geben, die sie nicht hat.\n\n- AI denkt nicht frei über dich nach.\n- Die Grundlage ist Berechnung und geprüfte Konvergenz.\n- AI bringt Ergebnisse in Sprache, sie erzeugt sie nicht."
      },
      {
        title: "Drei Ebenen, klar getrennt",
        body: "Astrakey arbeitet in drei klar getrennten Ebenen, und jede hat eine andere Aufgabe. Die erste Ebene ist die Berechnung. Aus deinen Angaben erzeugt jedes System nach festen Regeln eigene Signale. Das ist deterministisch, also bei gleichen Eingaben immer gleich, und hat nichts mit AI zu tun. Deterministisch heißt dabei verlässlich wiederholbar, nicht richtig im Sinne einer bewiesenen Wahrheit. Gleiche Eingaben ergeben dasselbe Ergebnis, aber das macht die Deutung dahinter nicht objektiv wahr. Die zweite Ebene ist die Konvergenz. Hier werden die Signale in gemeinsame Themen übersetzt, verwandte Quellen werden in Familien gruppiert, und es wird geprüft, welche Aussagen unabhängig voneinander gestützt sind. Auch das folgt klaren Regeln, nicht freier Sprache. Erst die dritte Ebene ist die Sprache. Hier hilft AI, die Ergebnisse verständlich, individuell und warm zu schreiben. Diese Trennung ist der Grund, warum Astrakey erklärbar bleibt. Du kannst dir die Frage stellen: Steht diese Aussage hier, weil sie berechnet und gestützt wurde, oder nur, weil sie schön formuliert ist? Bei Astrakey ist die Antwort nachvollziehbar.\n\n- Ebene 1: Berechnung, deterministisch, ohne AI.\n- Ebene 2: Konvergenz, regelbasiert, prüft unabhängige Stützung.\n- Ebene 3: Sprache, hier formuliert AI das Ergebnis."
      },
      {
        title: "Was AI bei Astrakey tut",
        body: "AI hat bei Astrakey eine klare und nützliche Aufgabe. Ein Profil aus vielen Systemen kann sehr komplex sein, und rohe Berechnungsergebnisse sind für Menschen schwer lesbar. Hier hilft AI: Sie übersetzt geprüfte Ergebnisse in verständliche Sprache, passt den Ton an, stellt Zusammenhänge her und formuliert Reflexionsfragen. Sie macht aus einer technischen Grundlage einen Text, den du gern liest. Im Companion kann AI außerdem auf deine Fragen eingehen und erklären, woher eine Aussage kommt. All das geschieht innerhalb klarer Leitplanken. AI formuliert aus den freigegebenen Profilinformationen, aus den berechneten Belegen und aus redaktionellen Vorgaben. Sie greift nicht über diese Grenzen hinaus und behauptet keine Wahrheiten, die nicht in den Daten stehen. So bleibt AI ein Werkzeug, das dein Profil zugänglich macht, und wird nicht zur Stimme, die über dich richtet.\n\n- AI übersetzt geprüfte Ergebnisse in lesbare Sprache.\n- AI passt Ton an und stellt Zusammenhänge verständlich her.\n- AI bleibt an Belege und redaktionelle Leitplanken gebunden."
      },
      {
        title: "Was AI bei Astrakey nicht tut",
        body: "Genauso wichtig wie der Nutzen sind die Grenzen. AI entscheidet bei Astrakey nicht, welche Systeme übereinstimmen. Diese Entscheidung trifft die regelbasierte Konvergenz, nicht die Sprache. AI erfindet kein Profil und fügt keine Aussagen hinzu, die nicht aus Berechnung und Konvergenz kommen. AI fällt kein Urteil über deinen Charakter, deine Gesundheit oder deine Zukunft. Sie spricht nicht mit einer Autorität, die sie nicht hat. Und sie ersetzt keine menschliche Verantwortung. Wo es um sensible Themen geht, bleibt die Sprache vorsichtig und benennt Unsicherheit, statt Sicherheit vorzutäuschen. Diese Grenzen sind bewusst gesetzt, weil ein gut formulierter Satz schnell überzeugender wirkt, als er sollte. Astrakey nimmt der Sprache deshalb die Last der Wahrheit ab. Sie darf schön und verständlich sein, aber die Frage, was gestützt ist, beantwortet die Methode dahinter.\n\n- AI entscheidet nicht über Übereinstimmung von Systemen.\n- AI erfindet kein Profil und fügt keine freien Aussagen hinzu.\n- AI urteilt nicht über dich und ersetzt keine Verantwortung."
      },
      {
        title: "Wie du Transparenz im Produkt erlebst",
        body: "Transparenz bei Astrakey ist keine Erklärung auf einer Unterseite allein, sondern Teil der Nutzung. Bei wichtigen Aussagen kannst du nachsehen, welche Systeme und Familien sie tragen und wo Unsicherheit besteht. Du erkennst, ob etwas auf vielen unabhängigen Perspektiven beruht oder nur aus einer einzelnen Quelle kommt. Im Companion kannst du nachfragen, woher eine Antwort stammt, und die Antwortlogik bleibt offen: Quelle, Kontext, Unsicherheit, nächste Frage. So bleibt die Grenze zwischen Berechnung und Formulierung immer sichtbar. Diese gelebte Transparenz schützt dich vor einem verbreiteten Eindruck, dass ein Sprachmodell mit geheimer Einsicht über dich spricht. Stattdessen siehst du ein Profil, das du prüfen kannst. Das ist der Unterschied zwischen einem Text, der dich beeindrucken will, und einem Text, der dir hilft, dich selbst klarer zu betrachten.\n\n- Starke Aussagen zeigen ihre Systembelege und ihre Unsicherheit.\n- Du erkennst, ob etwas breit gestützt oder einzelne Quelle ist.\n- Der Companion legt offen, worauf eine Antwort beruht."
      },
      {
        title: "Verantwortung und Grenzen",
        body: "Astrakey nutzt AI bewusst und verantwortungsvoll. Das bedeutet, AI nicht zu verstecken und sie auch nicht größer zu machen, als sie ist. Dein Profil ist ein Reflexionsangebot, kein Urteil, und das gilt unabhängig davon, wie gut die Sprache formuliert ist. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen, weder durch Berechnung noch durch AI. Bei sensiblen Themen bleibt die Sprache zurückhaltend und respektvoll. Wenn es dir psychisch schlecht geht oder du dich in einer Krise befindest, ist Astrakey nicht der richtige Ort. Wende dich dann bitte an professionelle Hilfsangebote oder im Notfall an den ärztlichen Notdienst, `[Platzhalter: Notfall- und Hilfsangebote nach Region verlinken]`. Diese Haltung ist Teil der Marke. Sie sorgt dafür, dass du der Verständlichkeit von Astrakey vertrauen kannst, ohne die Verantwortung für dich selbst abzugeben. Wenn du dein Profil startest, bekommst du also Sprache, die dir hilft, und eine Methode, die ehrlich bleibt. Beides zusammen macht aus AI ein Werkzeug, dem du begegnen kannst, ohne dich ihm auszuliefern.\n\n- AI wird bewusst eingesetzt, weder versteckt noch überhöht.\n- Keine Diagnose, keine Therapie, keine Vorhersage durch AI.\n- Du behältst die Verantwortung, Astrakey bleibt ehrlich."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Welche Rolle spielt AI bei Astrakey?",
        a: "AI ist die Sprachebene. Sie formuliert die berechneten und konvergenzgeprüften Ergebnisse verständlich, entscheidet aber nicht über deren Inhalt."
      },
      {
        q: "Schreibt AI mein ganzes Profil frei?",
        a: "Nein. Das Profil entsteht aus Berechnung und Konvergenz. AI formuliert nur das Ergebnis und fügt keine freien Aussagen hinzu."
      },
      {
        q: "Entscheidet AI, welche Systeme übereinstimmen?",
        a: "Nein. Diese Prüfung übernimmt die regelbasierte Konvergenz. AI ist daran nicht beteiligt."
      },
      {
        q: "Kann ich sehen, ob eine Aussage berechnet oder nur formuliert ist?",
        a: "Ja. Bei wichtigen Aussagen kannst du nachvollziehen, welche Systeme sie tragen und wo Unsicherheit besteht."
      },
      {
        q: "Urteilt AI über meinen Charakter oder meine Zukunft?",
        a: "Nein. AI urteilt nicht über dich. Dein Profil ist ein Reflexionsangebot, keine Bewertung."
      },
      {
        q: "Ist die Berechnung selbst eine AI?",
        a: "Nein. Berechnung und Konvergenz sind deterministisch und regelbasiert. Bei gleichen Eingaben ergeben sie dasselbe Ergebnis."
      },
      {
        q: "Warum nutzt Astrakey überhaupt AI?",
        a: "Weil ein Profil aus vielen Systemen komplex ist. AI macht die geprüften Ergebnisse verständlich, warm und individuell lesbar."
      },
      {
        q: "Gibt AI medizinische oder therapeutische Empfehlungen?",
        a: "Nein. Weder Berechnung noch AI geben medizinische, psychologische, rechtliche oder finanzielle Empfehlungen. Wenn es dir psychisch schlecht geht, wende dich bitte an professionelle Hilfsangebote oder im Notfall an den ärztlichen Notdienst."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  about: {
    key: "about",
    slug: "ueber-hermetia",
    navKey: "about",
    title: "Viele Systeme sehen wenig. Zusammen sehen sie mehr.",
    seoTitle: "Über Astrakey: die Idee und das Warum",
    seoDescription: "Astrakey verbindet viele begrenzte Systeme zu einem ruhigen, sorgfältigen und erklärbaren Profil. Die Idee und die Haltung hinter dem Produkt.",
    eyebrow: "Über Astrakey",
    lead: "Astrakey entsteht aus einer einfachen Beobachtung. Jedes spirituelle oder psychologische System kann berühren, aber jedes bleibt ein Ausschnitt. Astrakey verbindet diese Perspektiven ruhig, sorgfältig und erklärbar, damit du dich aus mehreren Blickwinkeln verstehen kannst, ohne dich in ein Etikett zu sperren.",
    answer: "Astrakey entsteht aus einer einfachen Beobachtung.",
    trustline: "Eine Haltung statt großer Versprechen. Differenziert statt absolut. Erklärbar statt geheimnisvoll.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Leistungen ansehen",
    image: "/images/hermetia/alchemical-listening-room.png",
    imageAlt: "Viele Systeme sehen wenig. Zusammen sehen sie mehr. als Astrakey Markenbild",
    sections: [
      {
        title: "Die Beobachtung am Anfang",
        body: "Astrakey beginnt mit etwas, das viele Menschen kennen. Du liest ein Horoskop und es trifft dich an einer Stelle, die du selbst kaum benennen konntest. Du lernst Human Design kennen und plötzlich ergibt eine Eigenheit Sinn. Eine numerologische Zahl, ein Persönlichkeitstyp, ein Fragebogen, jedes davon kann einen echten Moment auslösen. Und doch bleibt jedes dieser Systeme begrenzt. Ein Horoskop ist ein Blickwinkel. Human Design gibt Orientierung, erklärt aber nicht alles. Ein Fragebogen ist alltagsnah, verliert aber oft die symbolische Tiefe. Aus dieser Spannung ist Astrakey entstanden. Nicht aus dem Wunsch, ein weiteres lautes System hinzuzufügen, sondern aus der Frage, was passiert, wenn man die vielen Perspektiven ernst nimmt und prüft, wo sie sich treffen. Der eigentliche Anstoß war ein Unbehagen mit dem Bestehenden. Wer sich für diese Themen interessiert, findet entweder einzelne Tools, die jeweils alles erklären wollen, oder esoterische Angebote, die mit Sicherheit und Schicksal arbeiten und selten sagen, woher eine Aussage kommt. Beides hat sich falsch angefühlt. Astrakey ist aus dem Wunsch entstanden, einen ruhigen, ehrlichen und nachvollziehbaren Weg zu schaffen, der die Systeme ernst nimmt, ohne zu viel zu versprechen. Diese Frage ist bis heute der Kern des Produkts.\n\n- Einzelne Systeme können echte Momente auslösen.\n- Jedes System bleibt trotzdem ein Ausschnitt.\n- Astrakey entsteht aus der Frage, wo sich Perspektiven treffen."
      },
      {
        title: "Wofür Astrakey steht",
        body: "Astrakey steht für eine bestimmte Art, mit Selbsterkenntnis umzugehen. Nicht lauter, nicht mystischer, nicht absoluter, sondern differenzierter. Viele Angebote in diesem Feld arbeiten mit Sicherheit, Schicksal und großen Versprechen. Astrakey geht bewusst einen anderen Weg. Es verbindet Systeme ruhig und sorgfältig, macht seine Methode sichtbar und benennt Unsicherheit, statt sie zu verstecken. Das Ziel ist nicht, dir zu sagen, wer du bist, sondern dir bessere Fragen über dich zu ermöglichen. Diese Haltung zieht sich durch alles, von der Sprache bis zum Umgang mit deinen Daten. Sie bedeutet auch, ehrlich zu sein, wo etwas nicht passt, denn auch das ist ein wertvoller Hinweis. Astrakey will ein Begleiter sein, der dich ernst nimmt, ohne dich festzulegen. Genau diese Zurückhaltung ist gemeint, wenn von einem hochwertigen, erwachsenen Zugang zu diesen Themen die Rede ist.\n\n- Differenziert statt absolut, ruhig statt laut.\n- Methode sichtbar, Unsicherheit benannt.\n- Bessere Fragen statt fertiger Antworten über dich."
      },
      {
        title: "Was der Name Astrakey bedeutet",
        body: "Der Name Astrakey verbindet zwei Gedanken. Viele der Systeme, die hier zusammenkommen, arbeiten mit Sternen und Symbolen. Und ein Schlüssel steht dafür, etwas zugänglich zu machen, das vorher verschlossen wirkte. Genau das ist die Idee: innere Muster lesbar machen, ruhig und nachvollziehbar. Der Schlüssel steht nicht für ein Geheimnis und nicht für ein Versprechen über dein Schicksal. Er steht dafür, dass du dir selbst leichter auf die Spur kommst. Mehr Bedeutung trägt der Name nicht, und mehr soll er auch nicht tragen.\n\n- Astrakey: viele Systeme und ein Schlüssel zu inneren Mustern.\n- Der Name beschreibt, worum es geht: innere Muster lesbar machen.\n- Kein Geheimnis und kein Schicksalsversprechen."
      },
      {
        title: "Wie Astrakey arbeitet",
        body: "Eine Haltung ist nur glaubwürdig, wenn sie sich im Produkt zeigt. Bei Astrakey heißt das: Berechnung, Konvergenz und Sprache sind getrennt. Zuerst rechnet jedes System nach festen Regeln. Dann prüft Astrakey, welche Themen über mehrere unabhängige Systemfamilien hinweg gestützt sind. Erst danach formuliert AI die Deutung verständlich, ohne über die Wahrheit zu entscheiden. Diese Trennung ist der Grund, warum Astrakey erklärbar bleibt und warum starke Aussagen ihre Belege zeigen können. So wird aus der ruhigen Markenhaltung etwas Überprüfbares. Du musst Astrakey nicht glauben, dass es sorgfältig arbeitet, du kannst es an deinem eigenen Profil nachvollziehen. Das ist der Unterschied, den Astrakey machen möchte: nicht ein weiteres System, das beeindruckt, sondern eine Umgebung, in der du sehen kannst, wie eine Aussage entsteht.\n\n- Berechnung, Konvergenz und Sprache sind getrennt.\n- Ein Thema wird stark, wenn unabhängige Familien es stützen.\n- Die Haltung wird am eigenen Profil überprüfbar."
      },
      {
        title: "Verantwortung als Teil der Marke",
        body: "Zu einer ernsthaften Marke in diesem Feld gehört Verantwortung. Astrakey arbeitet mit sensiblen Informationen, deshalb sind Datensparsamkeit, klare Einwilligung und die Möglichkeit zu Export und Löschung fest eingebaut. AI wird transparent eingesetzt, als Sprachebene und nicht als Autorität. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen und stellt keine Diagnosen. Es nutzt eigene redaktionelle Texte und übernimmt keine geschützten Deutungspassagen fremder Systeme. Diese Punkte klingen nüchtern, aber sie sind Teil des Markenversprechens. Ein Produkt, das dir helfen will, dich klarer zu sehen, muss selbst klar und verantwortungsvoll sein. Verantwortlich für Astrakey ist `[Platzhalter: Anbieter und verantwortliche Stelle verifizieren]`. Die vollständigen Angaben zu Anbieter und Kontakt findest du im Impressum. Vertrauen entsteht nicht durch große Worte, sondern dadurch, dass die Grenzen ebenso sichtbar sind wie die Möglichkeiten und dass klar ist, wer hinter dem Produkt steht.\n\n- Datensparsamkeit, Einwilligung, Export und Löschung sind eingebaut.\n- AI bleibt Sprachebene, nicht Autorität.\n- Keine Diagnose, keine fremden Systemtexte, eigene Sprache.\n- Anbieter und verantwortliche Stelle sind im Impressum benannt."
      },
      {
        title: "Für wen Astrakey gedacht ist",
        body: "Astrakey ist für Menschen gedacht, die sich nicht mit einer einzigen Erklärung zufriedengeben. Für alle, die ein System spannend finden, aber spüren, dass es allein zu kurz greift. Für alle, die Tiefe suchen, aber keine Sicherheit über die Zukunft erwarten und kein neues Label wollen. Wenn du gern reflektierst, wenn du Muster verstehen statt diktiert bekommen möchtest und wenn dir wichtig ist, dass ein Produkt mit deinen Daten und mit Sprache sorgfältig umgeht, dann bist du hier richtig. Du kannst Astrakey kostenlos ausprobieren und in Ruhe schauen, ob die Art, wie es arbeitet und spricht, zu dir passt. Es gibt keinen Druck und keine Dringlichkeit. Astrakey ist ein Angebot, dich aus mehreren Blickwinkeln zu betrachten, und es bleibt deine Entscheidung, wie tief du gehen möchtest.\n\n- Für Menschen, die mehrere Perspektiven schätzen.\n- Für Reflexion ohne Schicksalsversprechen und ohne Label.\n- Kostenlos ausprobieren, ohne Druck, in deinem Tempo."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was ist die Idee hinter Astrakey?",
        a: "Astrakey verbindet viele spirituelle und psychologische Systeme zu einem erklärbaren Profil, weil jedes einzelne System nur eine begrenzte Perspektive bietet."
      },
      {
        q: "Bedeutet der Name, dass Astrakey ein Geheimnis löst?",
        a: "Nein. Der Schlüssel im Namen steht für Zugänglichkeit, nicht für ein Geheimnis oder ein Versprechen über dein Schicksal."
      },
      {
        q: "Wofür steht die Marke Astrakey?",
        a: "Für eine ruhige, sorgfältige und erklärbare Art der Selbsterkenntnis, differenziert statt absolut."
      },
      {
        q: "Verspricht Astrakey, mir zu sagen, wer ich bin?",
        a: "Nein. Astrakey bietet bessere Fragen über dich an, kein Urteil und kein festes Etikett."
      },
      {
        q: "Ist Astrakey eine Beratung oder Therapie?",
        a: "Nein. Astrakey ist keine medizinische, psychologische oder therapeutische Beratung und ersetzt keine Fachperson."
      },
      {
        q: "Für wen ist Astrakey gedacht?",
        a: "Für Menschen, die sich aus mehreren Perspektiven verstehen wollen, gern reflektieren und Wert auf einen sorgfältigen Umgang mit Sprache und Daten legen."
      },
      {
        q: "Wer steckt hinter Astrakey?",
        a: "Verantwortlich für Astrakey ist `[Platzhalter: Anbieter und verantwortliche Stelle verifizieren]`. Die vollständigen Angaben findest du im Impressum."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  faq: {
    key: "faq",
    slug: "faq",
    navKey: "faq",
    title: "Klare Antworten zuerst.",
    seoTitle: "Astrakey: häufige Fragen und Antworten",
    seoDescription: "Antworten zur Positionierung von Astrakey: warum mehrere Systeme zuverlässiger sind, was Premium kostet, wie Beziehungsanalyse, AI und Daten arbeiten.",
    eyebrow: "Häufige Fragen",
    lead: "Hier findest du die wichtigsten Fragen zu Astrakey, beginnend mit dem, was am häufigsten missverstanden wird. Astrakey ist ein erklärbares Profil aus vielen Systemen, nicht nur eine Seelenkarte. Die Antworten sind kurz, ehrlich und ohne große Versprechen.",
    answer: "Hier findest du die wichtigsten Fragen zu Astrakey, beginnend mit dem, was am häufigsten missverstanden wird.",
    trustline: "Mehrsystem-Profil zuerst, Seelenkarte später. Kein Urteil über dich, sondern ein Reflexionsangebot.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Preise ansehen",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Klare Antworten zuerst. als Astrakey Markenbild",
    sections: [
      {
        title: "Grundverständnis",
        body: "Bevor einzelne Details geklärt werden, hilft ein klares Bild des Ganzen. Astrakey ist keine einzelne Deutung und kein einzelnes Tool, sondern eine Umgebung, die viele Systeme zu einem Profil verbindet. Der häufigste Irrtum ist, Astrakey für eine Seelenkarte oder ein weiteres Horoskop zu halten. Tatsächlich ist die Kernidee eine andere. Astrakey fragt nicht, was ein einzelnes System sagt, sondern welche Themen über mehrere unabhängige Systeme hinweg wiederkehren. Genau das macht ein Profil belastbarer als eine einzelne Aussage. Dieser Block beantwortet deshalb die grundlegenden Fragen: was Astrakey ist, warum es mehrere Systeme nutzt und warum das zuverlässiger ist als eine isolierte Deutung. Er klärt außerdem zwei häufige Hürden gleich zu Beginn: Du musst weder an Astrologie glauben noch die Systeme kennen, um Astrakey zu nutzen. Wer diese Fragen verstanden hat, liest alle weiteren Antworten in ihrem richtigen Zusammenhang.\n\n- Astrakey ist eine Profilumgebung, kein einzelnes Tool.\n- Mehrere unabhängige Systeme sind belastbarer als eine Einzelaussage.\n- Du musst nicht an Astrologie glauben und kein Vorwissen mitbringen.\n- Die Seelenkarte ist nur eine Oberfläche, nicht der Kern."
      },
      {
        title: "Wahrheit, Methode und Grenzen",
        body: "Eine häufige und berechtigte Frage lautet: Behauptet Astrakey, die Wahrheit über mich zu kennen? Die Antwort ist klar nein. Astrakey ist ein Reflexionsangebot, kein Urteil. Es zeigt belastbare Muster mit ihren Belegen und markiert Unsicherheit, statt etwas als objektiv wahr zu setzen. Dieser Block beantwortet die Fragen, die mit Methode und Ehrlichkeit zu tun haben: wie das Profil entsteht, warum Astrakey Systeme nicht einfach zusammenzählt, was Konvergenz bedeutet und wo die Grenzen liegen. Dazu gehört auch eine ehrliche Antwort auf die Frage nach wissenschaftlicher Validierung: Die Systeme selbst sind keine empirisch validierten Persönlichkeitstests, wissenschaftlich ist allein die Sorgfalt der Methode. Ebenso steht hier klar, dass Astrakey weder Diagnose noch Therapie ist und in psychischen Krisen auf professionelle Hilfsangebote verweist. Hier geht es auch darum, dass Widersprüche zwischen Systemen kein Fehler sind, sondern als Spannungsfelder oft besonders aufschlussreich. Wer diese Antworten liest, versteht, warum Astrakey bewusst nicht mit Sicherheit und Schicksal arbeitet, sondern mit Nachvollziehbarkeit. Das ist der intellektuelle Kern des Produkts.\n\n- Astrakey liefert keine objektive Wahrheit, sondern belegte Muster.\n- Keine wissenschaftliche Validierung der Systeme, nur eine sorgfältige Methode.\n- Keine Diagnose, keine Therapie, in Krisen Verweis auf Hilfsangebote.\n- Systeme werden nicht addiert, sondern in Familien geprüft.\n- Widersprüche werden zu Spannungsfeldern, nicht zu Fehlern."
      },
      {
        title: "Systeme und Profil",
        body: "Viele Nutzer kommen mit Interesse an einem bestimmten System und fragen, ob sie es bei Astrakey auch einzeln betrachten können. Ja, das geht. Astrakey zeigt dir jedes System auch als eigenes Systemprofil, damit du verstehst, was Astrologie, Human Design, Gene Keys, Numerologie und weitere Systeme jeweils beitragen. Der eigentliche Mehrwert entsteht aber dort, wo diese Perspektiven zusammengelesen werden. Dieser Block beantwortet die Fragen zum Verhältnis von Einzelsystem und Gesamtprofil: welche Systeme dabei sind, ob man sie einzeln erkunden kann, ob Astrakey ein System ersetzt und wie das Gesamtprofil daraus entsteht. So wird klar, dass Astrakey die Systeme nicht abwertet, sondern ihnen einen gemeinsamen Rahmen gibt, in dem ihre Stärken sichtbar werden und ihre Grenzen aufgefangen sind.\n\n- Jedes System ist auch als Systemprofil einzeln sichtbar.\n- Astrakey ersetzt kein System, es verbindet sie.\n- Das Gesamtprofil entsteht aus dem Zusammenspiel der Perspektiven."
      },
      {
        title: "Premium, Seelenbuch und Beziehung",
        body: "Hier geht es um Tiefe und Wert. Der kostenlose Einstieg zeigt, ob Astrakey bei dir Resonanz erzeugt. Premium beginnt dort, wo aus dem ersten Profil eine ausführliche Auswertung und eine fortlaufende Begleitung werden. Dieser Block beantwortet die Fragen, die Nutzer vor einer Kaufentscheidung haben: was Premium kostet und warum, was im kostenlosen Einstieg enthalten ist, was das Seelenbuch ist und wie die Beziehungsanalyse mit Einwilligung funktioniert. Wichtig ist die ehrliche Botschaft: Du zahlst nicht für einen geheimen Satz über dich, sondern für Umfang, Kontext und Begleitung über Zeit. Das Seelenbuch ist dabei der zentrale Premium-Anker, ein ausführlicher, erklärbarer Begleiter. Die Beziehungsanalyse ist ein eigenständiges Kernmodul und entsteht nur mit klarer Zustimmung beider Personen.\n\n- Kostenlos ist Resonanzprüfung, Premium ist Tiefe und Begleitung.\n- Das Seelenbuch ist der ausführliche, erklärbare Premium-Begleiter.\n- Beziehungsanalyse nur mit Einwilligung beider Personen."
      },
      {
        title: "AI und Daten",
        body: "Zwei Themen entscheiden für viele über das Vertrauen: AI und Daten. Bei der AI ist die wichtigste Antwort einfach. AI ist bei Astrakey die Sprachebene. Sie formuliert die berechneten und geprüften Ergebnisse verständlich, entscheidet aber nicht über deren Inhalt. Bei den Daten gilt: Astrakey arbeitet sparsam und transparent, du siehst, welche Angaben wofür gebraucht werden, und du kannst exportieren und löschen. Dieser Block beantwortet die Fragen dazu: welche Rolle AI spielt, ob ein Sprachmodell über dich urteilt, welche Daten gespeichert werden, ob Astrakey Daten verkauft und wie Löschung funktioniert. Für ausführlichere Antworten verweist die Seite auf die eigenen Seiten zu AI-Transparenz und zu Daten und Sicherheit. So bleibt die FAQ kurz, ohne die wichtigsten Sorgen offenzulassen.\n\n- AI formuliert, sie entscheidet nicht über die Wahrheit.\n- Daten werden sparsam genutzt und sind exportier- und löschbar.\n- Astrakey verkauft deine Profildaten nicht."
      },
      {
        title: "Praktische Nutzung und Seelenkarte",
        body: "Zum Schluss die praktischen Fragen. Brauche ich eine genaue Geburtszeit? Wie fange ich an? In welcher Sprache gibt es Astrakey? Und erst hier, bewusst am Ende, die Frage nach der Seelenkarte. Das hat einen Grund. Die Seelenkarte ist eine schöne visuelle Oberfläche deines Profils und ein guter Einstieg, aber sie ist nicht der Kern. Indem diese Frage nach hinten rückt, unterstreicht die Seite die neue Gewichtung: zuerst das Mehrsystem-Profil, dann die Darstellung. Dieser Block beantwortet, was du praktisch wissen musst, um zu starten, und ordnet die Seelenkarte als das ein, was sie ist. So verlässt du die Seite mit einem klaren Bild davon, was Astrakey ist, wie du beginnst und worauf es wirklich ankommt.\n\n- Eine genaue Geburtszeit hilft, ist aber nicht zwingend.\n- Der Einstieg ist kostenlos und ohne Kreditkarte möglich.\n- Die Seelenkarte ist Oberfläche, das Profil dahinter ist der Kern."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was ist Astrakey?",
        a: "Astrakey erstellt aus vielen spirituellen, symbolischen und psychologischen Systemen ein erklärbares persönliches Profil und zeigt, welche Themen über mehrere unabhängige Systeme hinweg wiederkehren."
      },
      {
        q: "Warum sind mehrere Systeme zuverlässiger als eines?",
        a: "Jedes einzelne System ist nur eine Perspektive und kann eine Aussage überhöhen. Wenn mehrere unabhängige Systeme dasselbe Thema stützen, wird es belastbarer."
      },
      {
        q: "Ist Astrakey nur eine Seelenkarte?",
        a: "Nein. Die Seelenkarte ist eine visuelle Oberfläche. Das eigentliche Produkt ist das erklärbare Mehrsystem-Profil dahinter."
      },
      {
        q: "Funktioniert Astrakey auch, wenn ich nicht an Astrologie glaube?",
        a: "Ja. Du musst an kein einzelnes System glauben. Astrakey behandelt die Systeme als Perspektiven und Sprachangebote zur Selbstreflexion, nicht als Wahrheit. Was bei dir nicht resoniert, darfst du verwerfen."
      },
      {
        q: "Muss ich die Systeme kennen?",
        a: "Nein. Du brauchst kein Vorwissen über Astrologie, Human Design oder die anderen Systeme. Astrakey erklärt jeden Begriff, wenn er auftaucht, und führt dich Schritt für Schritt."
      },
      {
        q: "Liefert Astrakey objektive Wahrheit über mich?",
        a: "Nein. Astrakey ist ein Reflexionsangebot. Es zeigt belegte Muster und markiert Unsicherheit, statt etwas als objektiv wahr zu behaupten."
      },
      {
        q: "Ist Astrakey eine Diagnose oder Therapie?",
        a: "Nein. Astrakey ist keine medizinische, psychologische oder therapeutische Beratung und ersetzt keine Fachperson. Wenn es dir psychisch schlecht geht, wende dich bitte an professionelle Hilfsangebote oder im Notfall an den ärztlichen Notdienst."
      },
      {
        q: "Ist Astrakey wissenschaftlich validiert?",
        a: "Nein, und das behauptet Astrakey auch nicht. Die genutzten Systeme sind symbolische und psychologische Modelle, keine empirisch validierten Persönlichkeitstests. Wissenschaftlich ist nur die Sorgfalt der Methode: nachvollziehbare Berechnung, geprüfte Konvergenz und sichtbare Belege. Was daraus entsteht, bleibt ein Reflexionsangebot, kein bewiesenes Urteil."
      },
      {
        q: "Was tue ich, wenn es mir psychisch schlecht geht?",
        a: "Astrakey ist kein Hilfsangebot in Krisen und ersetzt keine fachliche Begleitung. Wenn es dir psychisch schlecht geht, wende dich bitte an professionelle Hilfsangebote, eine Beratungsstelle oder eine ärztliche oder therapeutische Fachperson. Im Notfall an den ärztlichen Notdienst oder eine Notrufnummer, `[Platzhalter: Notfall- und Hilfsangebote nach Region verlinken]`."
      },
      {
        q: "Warum zählt Astrakey die Systeme nicht einfach zusammen?",
        a: "Weil viele Systeme verwandte Quellen nutzen. Astrakey gruppiert sie in Familien, damit ein Echo nicht als unabhängige Bestätigung zählt."
      },
      {
        q: "Was passiert, wenn Systeme sich widersprechen?",
        a: "Ein Widerspruch ist kein Fehler. Astrakey zeigt ihn als Spannungsfeld, das oft besonders viel über dich erzählt."
      },
      {
        q: "Kann ich einzelne Systeme separat ansehen?",
        a: "Ja. Astrakey zeigt jedes System auch als eigenes Systemprofil, damit du verstehst, was es beiträgt."
      },
      {
        q: "Welche Systeme nutzt Astrakey?",
        a: "Unter anderem Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm und Fragebögen. Eine Übersicht findest du auf der Systeme-Seite."
      },
      {
        q: "Ersetzt Astrakey Astrologie oder Human Design?",
        a: "Nein. Astrakey nutzt diese Systeme als Perspektiven und verbindet sie zu einem Gesamtprofil."
      },
      {
        q: "Was kostet Premium und warum?",
        a: "Premium öffnet Tiefe und Begleitung: ausführlichere Auswertungen, das Seelenbuch, Tagesimpulse, Journaling, Companion und Beziehungsanalyse. Du zahlst für Umfang, Kontext und Begleitung über Zeit, nicht für einen geheimen Satz über dich."
      },
      {
        q: "Ist der Einstieg wirklich kostenlos?",
        a: "Ja. Du kannst dein Profil ohne Kreditkarte starten und erste Kernthemen sehen."
      },
      {
        q: "Was ist das Seelenbuch?",
        a: "Das Seelenbuch ist die ausführlichste Form deines Profils, ein langer, erklärbarer Begleiter mit Kapiteln, Systembelegen und Reflexionsfragen."
      },
      {
        q: "Wie funktioniert die Beziehungsanalyse mit Einwilligung?",
        a: "Eine Beziehungsanalyse verbindet zwei Profile und entsteht nur, wenn beide Personen ausdrücklich zugestimmt haben. Astrakey wertet niemand heimlich aus."
      },
      {
        q: "Welche Rolle spielt AI bei Astrakey?",
        a: "AI ist die Sprachebene. Sie formuliert die berechneten und geprüften Ergebnisse verständlich, entscheidet aber nicht über deren Inhalt."
      },
      {
        q: "Urteilt ein Sprachmodell frei über mich?",
        a: "Nein. Das Profil entsteht aus Berechnung und Konvergenz. AI formuliert nur das Ergebnis und fügt keine freien Aussagen hinzu."
      },
      {
        q: "Welche Daten speichert Astrakey?",
        a: "Deine Geburtsdaten, deinen Namen, deine freiwilligen Selbstauskünfte und, falls genutzt, Journaltexte und Profilverfeinerungen. Jede Angabe hat einen sichtbaren Zweck."
      },
      {
        q: "Verkauft Astrakey meine Daten oder kann ich sie löschen?",
        a: "Astrakey verkauft deine Profildaten nicht. Du kannst dein Profil jederzeit exportieren und vollständig löschen."
      },
      {
        q: "Brauche ich meine genaue Geburtszeit?",
        a: "Eine genaue Geburtszeit verbessert manche Systeme. Astrakey funktioniert auch ohne und kennzeichnet, welche Aussagen dadurch unsicherer sind."
      },
      {
        q: "Wie fange ich an?",
        a: "Du startest dein Profil kostenlos, gibst die nötigen Daten ein und siehst eine erste Auswertung mit ersten Kernthemen."
      },
      {
        q: "In welchen Sprachen gibt es Astrakey?",
        a: "Astrakey ist mehrsprachig verfügbar. Welche Inhalte redaktionell geprüft sind, erfährst du auf der Sprachen-Seite."
      },
      {
        q: "Was ist die Seelenkarte genau?",
        a: "Die Seelenkarte ist eine schöne visuelle Oberfläche deines Profils und ein guter Einstieg. Das eigentliche Produkt ist das Profil dahinter."
      },
      {
        q: "Was passiert, wenn etwas nicht zu mir passt?",
        a: "Das ist ein wertvoller Hinweis. Astrakey ist ein Reflexionsangebot, und auch das, was nicht resoniert, zählt."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  wissen: {
    key: "wissen",
    slug: "wissen",
    navKey: "wissen",
    title: "Verstehe Systeme einzeln. Verstehe, warum mehrere zusammen mehr zeigen.",
    seoTitle: "Wissen: Systeme verstehen und verbinden",
    seoDescription: "Der Astrakey Wissensbereich erklärt einzelne Systeme, ihre Grenzen und wie aus mehreren Perspektiven ein klareres Mehrsystem-Profil entsteht.",
    eyebrow: "Ratgeber und Lernumgebung",
    lead: "Der Wissensbereich erklärt, was Astrologie, Human Design, Gene Keys, Numerologie und weitere Systeme jeweils sehen, wo ihre Grenzen liegen und wie Astrakey sie zu einem belastbareren Profil verbindet. Du lernst hier nicht nur Begriffe, sondern eine Denkweise: weg von der einzelnen lauten Aussage, hin zu dem, was über mehrere Perspektiven hinweg wiederkehrt.",
    answer: "Der Wissensbereich erklärt, was Astrologie, Human Design, Gene Keys, Numerologie und weitere Systeme jeweils sehen, wo ihre Grenzen liegen und wie Astrakey sie zu einem belastbareren Profil verbindet.",
    trustline: "Sachliche Erklärungen ohne Heilsversprechen. Eigene redaktionelle Texte. Kein übernommener proprietärer Systemtext.",
    primaryCta: "Artikel lesen",
    secondaryCta: "Profil kostenlos starten",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Verstehe Systeme einzeln. Verstehe, warum mehrere zusammen mehr zeigen. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum ein einzelnes System selten reicht",
        body: "Jedes System beschreibt den Menschen aus einer bestimmten Richtung. Astrologie liest Zeit, Ort und Himmelspositionen. Human Design betont Energie und Entscheidung. Gene Keys arbeitet mit archetypischer Reifung. Numerologie verdichtet Zahlen aus Datum und Name. Fragebögen bringen Alltag und Selbstwahrnehmung hinein. Jede Perspektive kann treffen, und genau das macht sie überzeugend. Wichtig ist dabei eine ehrliche Einordnung: Diese symbolischen Systeme sind über lange Traditionen gewachsene Deutungssprachen, keine empirisch validierten Persönlichkeitsmodelle. Sie messen dich nicht im wissenschaftlichen Sinn, sondern bieten Bilder und Begriffe, an denen du dich reiben und orientieren kannst. Wir nehmen diese Traditionen ernst und erklären sie sorgfältig, statt sie zu banalisieren, und behaupten zugleich nicht, sie seien geprüfte Tatsachen. Jede Perspektive bleibt für sich begrenzt, weil sie nur einen Ausschnitt sieht. Wer nur ein System nutzt, läuft Gefahr, eine einzelne Aussage zu überhöhen. Der Wissensbereich beginnt deshalb nicht mit der Frage, welches System recht hat, sondern mit der Frage, welche Art von Signal jedes System liefert und wo seine Grenzen liegen. Aus dieser Haltung wird Mehrsystem-Profiling verständlich: nicht mehr Mystik, sondern mehr Perspektive. Du lernst, Aussagen einzuordnen, statt ihnen einfach zu glauben oder sie pauschal abzulehnen.\n\n- Jedes System ist eine Perspektive, keine vollständige Beschreibung.\n- Symbolische Systeme sind gewachsene Deutungssprachen, keine empirisch validierten Persönlichkeitsmodelle.\n- Mehrere unabhängige Perspektiven machen ein Thema belastbarer."
      },
      {
        title: "Die Themencluster im Überblick",
        body: "Der Wissensbereich ist in Cluster gegliedert, damit du je nach Frage einsteigen kannst. Ein Cluster erklärt einzelne Systeme verständlich: was sie messen, welche Daten sie brauchen und was sie bewusst nicht können. Ein zweiter Cluster behandelt die Methode: Konvergenz, Systemfamilien, Kernthemen und der Unterschied zwischen Stärke und Belastbarkeit. Ein dritter Cluster widmet sich der Anwendung im Alltag: Selbstverständnis, Beziehungen, Übergänge und wiederkehrende innere Spannungen. Ein vierter Cluster klärt Vertrauensfragen: sensible Daten, Einwilligung, die Rolle von AI und die Grenzen jeder Deutung. So findest du sowohl schnelle Antworten als auch tiefere Lernpfade. Jeder Artikel verweist auf verwandte Begriffe im Glossar und auf passende Vergleiche, damit du nicht in einer Sackgasse landest, sondern dich Schritt für Schritt durch das Thema bewegst.\n\n- Cluster Systeme: was jedes System sieht und nicht sieht.\n- Cluster Methode: wie aus Signalen Kernthemen werden.\n- Cluster Anwendung und Cluster Vertrauen für Alltag und Sicherheit."
      },
      {
        title: "Wie ein guter Astrakey-Artikel aufgebaut ist",
        body: "Ein Artikel im Wissensbereich beginnt mit einer klaren Antwort auf eine konkrete Frage. Danach erklärt er, welche Art von Signal ein System liefert, woraus dieses Signal berechnet wird und wo es unsicher ist. Erst dann zeigt er, wie Astrakey das System im Zusammenspiel mit anderen einordnet. Diese Reihenfolge ist Absicht. Sie schützt davor, ein einzelnes System größer wirken zu lassen, als es ist, und sie macht die Texte für Suchmaschinen und AI-Antwortsysteme gut verwertbar. Neben kurzen Einsteigerantworten gibt es bewusst tiefere Fachartikel, etwa zur Geschichte und inneren Logik der Astrologie, die eine Tradition ernst nehmen, statt sie zu verkürzen. So findest du sowohl die schnelle Antwort als auch eine respektvolle, fundierte Auseinandersetzung mit dem jeweiligen System. Wir verzichten bewusst auf Schicksalssprache, Angst und Versprechen. Ein guter Artikel macht dich nicht abhängig, sondern selbstständiger im Urteil. Wenn ein Thema sensibel ist, benennt der Text seine Grenzen offen. Astrakey schreibt eigene redaktionelle Erklärungen und übernimmt keinen proprietären Systemtext fremder Anbieter. So bleibt der Wissensbereich sachlich, fair und rechtlich sauber.\n\n- Erst die Antwort, dann die Erklärung, dann die Einordnung.\n- Kurze Einsteigerantworten und tiefere Fachartikel, die Traditionen ernst nehmen.\n- Keine Angst, keine Schicksalssprache, eigene redaktionelle Texte statt übernommenem proprietärem Systemtext."
      },
      {
        title: "Vom Lesen zum eigenen Profil",
        body: "Wissen wird lebendig, wenn du es auf dich selbst beziehst. Viele Artikel enden deshalb mit einer Reflexionsfrage und einem Hinweis, wie sich das beschriebene System in deinem persönlichen Profil zeigt. Du musst dafür nichts kaufen. Der kostenlose Profilstart genügt, um zu sehen, welche Themen bei dir aus mehreren Perspektiven auftauchen und welche nur aus einem einzelnen Blickwinkel stammen. So wird aus abstraktem Wissen eine konkrete Beobachtung. Wer tiefer gehen will, findet im Seelenbuch ausführliche Kapitel mit Systembelegen und in der Profilbegleitung eine fortlaufende Praxis. Der Wissensbereich drängt dich nicht in den Kauf. Er gibt dir genug Verständnis, um selbst zu entscheiden, ob und wie weit du gehen möchtest. Das ist die Haltung von Astrakey: erst verstehen, dann anwenden, dann vertiefen, wenn es sich lohnt.\n\n- Artikel verbinden Wissen mit deinem eigenen Profil.\n- Der kostenlose Profilstart genügt für erste eigene Beobachtungen.\n- Tiefe über Seelenbuch und Begleitung, wenn du sie willst."
      },
      {
        title: "Was der Wissensbereich nicht ist",
        body: "Der Wissensbereich ist keine Wahrsageschule und kein Versprechen, dass du nach dem Lesen alles über dich weißt. Er erklärt Systeme, ihre Logik und ihre Grenzen, aber er behauptet nicht, dass ein System die Wahrheit über einen Menschen kennt. Er gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen. Wenn ein Thema in den Bereich von Gesundheit oder Krise reicht, verweist der Text auf passende Fachstellen statt eigene Ratschläge zu geben. Wir vermeiden bewusst die Sprache der Sicherheit. Du bekommst Orientierung und bessere Fragen, kein Etikett und keine Vorhersage. Diese Zurückhaltung ist kein Mangel, sondern Teil der Glaubwürdigkeit. Ein Hub, der ehrlich sagt, was er nicht leisten kann, ist verlässlicher als einer, der mit großen Versprechen lockt. Genau das unterscheidet Astrakey von Angeboten, die mit Schicksal und Gewissheit arbeiten.\n\n- Keine Wahrsageschule, kein Allwissen nach dem Lesen.\n- Keine Diagnose, keine Vorhersage, keine Beratung.\n- Orientierung und bessere Fragen statt Sicherheit und Etikett."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was finde ich im Astrakey Wissensbereich?",
        a: "Verständliche Erklärungen zu einzelnen Systemen, zur Methode des Mehrsystem-Profilings, zu Anwendungssituationen und zu Vertrauensfragen wie Daten, Einwilligung und AI."
      },
      {
        q: "Muss ich für die Artikel bezahlen?",
        a: "Nein. Der Wissensbereich ist frei lesbar. Der kostenlose Profilstart genügt, um das Gelesene auf dich selbst zu beziehen."
      },
      {
        q: "Erklärt ihr nur, was ein System ist?",
        a: "Nein. Wir erklären auch, welche Art von Signal ein System liefert, wo seine Grenzen liegen und wie Astrakey es im Zusammenspiel mit anderen einordnet."
      },
      {
        q: "Übernehmt ihr Originaltexte aus Astrologie oder Human Design?",
        a: "Nein. Astrakey schreibt eigene redaktionelle Erklärungen und übernimmt keine geschützten Passagen oder Originalformulierungen fremder Systeme."
      },
      {
        q: "Gibt der Wissensbereich Lebensentscheidungen vor?",
        a: "Nein. Die Inhalte sind ein Reflexionsangebot. Sie ersetzen keine medizinische, psychologische, rechtliche oder finanzielle Beratung."
      },
      {
        q: "Wie hängen Wissen, Glossar und Vergleiche zusammen?",
        a: "Der Wissensbereich erklärt Zusammenhänge ausführlich, das Glossar definiert einzelne Begriffe kurz, und die Vergleiche stellen zwei Systeme nebeneinander. Die Bereiche verlinken sich gegenseitig."
      },
      {
        q: "Sind diese Systeme wissenschaftlich bewiesen?",
        a: "Nein. Astrologie, Human Design, Gene Keys und verwandte Systeme sind über Traditionen gewachsene Deutungssprachen, keine empirisch validierten Persönlichkeitsmodelle. Wir erklären sie respektvoll als Reflexionsangebot, nicht als geprüfte Tatsachen."
      },
      {
        q: "Für wen ist der Wissensbereich gedacht?",
        a: "Für Neugierige, die einzelne Systeme verstehen wollen, und für alle, die wissen möchten, warum mehrere Perspektiven zusammen belastbarer sind als eine einzelne Deutung."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  glossar: {
    key: "glossar",
    slug: "glossar",
    navKey: "glossar",
    title: "Klare Begriffe statt beliebiger Vermischung.",
    seoTitle: "Glossar: Astrakey Begriffe klar erklärt",
    seoDescription: "Das Astrakey Glossar erklärt Mehrsystem-Profil, Konvergenz, Systemfamilie, Kernthema, Spannungsfeld und weitere Begriffe kurz und präzise.",
    eyebrow: "Begriffe und Klarheit",
    lead: "Astrakey verbindet viele Systeme. Damit das nachvollziehbar bleibt, erklärt dieses Glossar die wichtigsten Begriffe kurz und genau. Du erfährst, was ein Mehrsystem-Profil ist, was Konvergenz bedeutet, warum Systemfamilien wichtig sind und wie Astrakey Kernthemen, Spannungsfelder und Datenqualität voneinander unterscheidet.",
    answer: "Astrakey verbindet viele Systeme.",
    trustline: "Kurze, präzise Definitionen. Jeder Begriff verlinkt auf vertiefende Erklärungen. Keine vagen Versprechen.",
    primaryCta: "Begriff nachschlagen",
    secondaryCta: "Profil kostenlos starten",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Klare Begriffe statt beliebiger Vermischung. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Astrakey ein eigenes Glossar braucht",
        body: "Spirituelle und psychologische Systeme nutzen oft ähnliche Wörter für sehr unterschiedliche Dinge. Ein Begriff wie Energie, Typ oder Resonanz kann je nach System etwas anderes bedeuten. Wenn Astrakey diese Systeme verbindet, entsteht schnell die Gefahr, dass Begriffe verschwimmen. Genau das will das Glossar verhindern. Es legt fest, was ein Wort bei Astrakey konkret meint, damit du Aussagen im Profil richtig einordnen kannst. Klarheit ist hier kein akademischer Luxus, sondern eine Vertrauensfrage. Wer viele Perspektiven kombiniert, muss umso genauer sein, sonst wirkt das Ergebnis beliebig. Das Glossar zeigt deshalb auch, wo Astrakey bewusst Grenzen zieht: zwischen Stärke und Belastbarkeit, zwischen Berechnung und Sprache, zwischen einem Modul und dem eigentlichen Profil. Diese Genauigkeit ist Teil der Marke. Sie macht aus einem Versprechen von Tiefe eine überprüfbare Sprache.\n\n- Gleiche Wörter bedeuten in verschiedenen Systemen oft Verschiedenes.\n- Klare Definitionen verhindern den Eindruck von Beliebigkeit.\n- Das Glossar zieht bewusste Grenzen zwischen den Begriffen."
      },
      {
        title: "Die Kernbegriffe des Mehrsystem-Profils",
        body: "Diese Begriffe bilden den Kern der Produktlogik. Ein Mehrsystem-Profil ist ein persönliches Profil aus mehreren Systemen zugleich, belastbarer als eine isolierte Einzeldeutung. Eine Systemfamilie ist eine Gruppe verwandter Quellen, die ähnliche Rohdaten teilen, damit sie nicht mehrfach als unabhängige Bestätigung zählen. Konvergenz beschreibt, dass mehrere unabhängige Systemfamilien dasselbe Thema stützen. Ein Kernthema ist ein Motiv, das über mehrere Familien hinweg tragfähig wird. Ein Systembeleg zeigt, welche Systeme eine Aussage stützen. Ein Spannungsfeld bezeichnet zwei gleichzeitig aktive Pole, also kein Fehler, sondern eine bewusst sichtbare Differenz. Diese Definitionen sind kurz gehalten, damit sie als Antwort zitierbar sind. Jede verlinkt im Glossar auf eine eigene Detailseite mit Beispiel und Abgrenzung, sodass du vom schnellen Nachschlagen zu einer tieferen Erklärung wechseln kannst.\n\n- Mehrsystem-Profil: ein Profil aus mehreren Systemen, belastbarer als Einzeldeutung.\n- Systemfamilie und Konvergenz: Doppelzählung vermeiden, unabhängige Bestätigung erkennen.\n- Kernthema, Systembeleg, Spannungsfeld: tragfähige Motive, ihre Belege und produktive Gegensätze."
      },
      {
        title: "Begriffe für Qualität, Sicherheit und Vertrauen",
        body: "Manche Begriffe betreffen weniger die Deutung als die Verlässlichkeit. Datenqualität beschreibt, wie vollständig und belastbar deine Eingaben sind, etwa eine genaue Geburtszeit oder eine gute Selbstauskunft. Sicherheit meint hier die Belastbarkeit einer Aussage, also wie gut Eingaben und Berechnung sie tragen, nicht eine Gewissheit über die Zukunft. AI-Deutung bezeichnet die Sprachebene, auf der AI berechnete und konvergenzgeprüfte Inhalte verständlich formuliert, ohne zu entscheiden, welche Systeme übereinstimmen. Einwilligung ist die klare, widerrufbare Zustimmung zur Verarbeitung sensibler Daten, besonders bei der Beziehungsanalyse. Diese Begriffe sind wichtig, weil Astrakey mit sensiblen Profilen arbeitet. Wer sie versteht, erkennt, dass Verlässlichkeit nicht nur aus vielen Systemen entsteht, sondern auch aus Transparenz, Datenqualität und klaren Grenzen. Das Glossar macht diese Begriffe greifbar, statt sie im Kleingedruckten zu verstecken.\n\n- Datenqualität und Sicherheit: Vollständigkeit der Eingaben und Belastbarkeit einer Aussage.\n- AI-Deutung: AI formuliert, sie entscheidet nicht über Wahrheit.\n- Einwilligung: klare, widerrufbare Zustimmung bei sensiblen Daten."
      },
      {
        title: "Produktbegriffe und ihre richtige Einordnung",
        body: "Einige Begriffe benennen Produktteile, und ihre richtige Einordnung ist entscheidend für das Verständnis. Das Seelenbuch ist die ausführliche, lesbare Auswertung deines Profils über viele Kapitel mit Systembelegen und Reflexionsfragen. Die Beziehungsanalyse verbindet zwei Profile mit klarer Einwilligung und macht Resonanz, Reibung und Entwicklung sichtbar. Die Profilbegleitung umfasst Tagesimpulse, Journaling und Companion als fortlaufende Praxis. Die Seelenkarte ist eine visuelle Oberfläche deines Profils, ein guter Einstieg, aber nicht der Kern. Genau diese Unterscheidung ist wichtig, weil die Seelenkarte leicht für das ganze Produkt gehalten wird. Im Glossar wird sie klar als Darstellungsmodul definiert, während das Mehrsystem-Profil das eigentliche Produkt bleibt. So vermeidet das Glossar Missverständnisse und stellt sicher, dass Website, App und Marketing dieselbe Sprache sprechen. Begriffsklarheit ist hier auch Markenführung.\n\n- Seelenbuch, Beziehungsanalyse, Profilbegleitung als ernsthafte Module.\n- Seelenkarte als Darstellungsmodul, nicht als Kernprodukt.\n- Einheitliche Begriffe für Website, App und Marketing."
      },
      {
        title: "Begriffe nach Themen sortiert",
        body: "Wenn du schnell eine Definition suchst, ist das alphabetische Glossar der kürzeste Weg. Wenn du Astrakey als System verstehen willst, hilft die thematische Ansicht: Methode, Systeme, Produkt, Daten, Beziehungen und Grenzen.\n\nSo erkennst du schneller, welche Begriffe zusammengehören. Konvergenz, Systemfamilie und Kernthema erklären die Methode. Bodygraph, Radix, Dosha oder Lebenszahl gehören zu Systemsprachen. Einwilligung, Datenminimierung und AI-Deutung zeigen, wie Astrakey Vertrauen absichert.\n\nDie thematische Übersicht findest du unter /de/glossar/themen/.\n\n- Methode, Systemsprachen, Produkt und Vertrauen werden getrennt sichtbar.\n- Klare Begriffe schützen vor beliebiger Vermischung.\n- Die Übersicht führt zu den einzelnen Glossar-Detailseiten."
      },
      {
        title: "So nutzt du das Glossar",
        body: "Das Glossar ist als Nachschlagewerk gedacht. Du kannst alphabetisch suchen, nach Themengruppen filtern oder direkt aus einem Wissensartikel oder einer Profilaussage zu einem Begriff springen. Jede Definition beginnt mit einem kurzen, alltagstauglichen Satz, den du auch ohne Vorwissen verstehst, und ergänzt dann erst Beispiel, Abgrenzung und verwandte Begriffe. Das ist Absicht: Ein Glossar, das nur Fachleute verstehen, schafft kein Vertrauen. Deshalb gilt für jeden Eintrag die gleiche Regel, zuerst eine einfache Erklärung in einem Satz, dann die Tiefe für alle, die mehr wollen. So bekommst du sowohl die schnelle Antwort als auch den tieferen Kontext. Begriffe aus der App sind mit dem Glossar verknüpft, damit du beim Lesen deines Profils sofort nachschlagen kannst, was etwa Konvergenz oder Spannungsfeld konkret bedeutet. Das Glossar ist also nicht nur eine Seite für sich, sondern Teil der Erklärbarkeit von Astrakey. Wenn du dein eigenes Profil startest, wird die Sprache aus dem Glossar lebendig, weil du siehst, wie diese Begriffe deine Kernthemen und Belege beschreiben. Verständnis und Anwendung gehören zusammen.\n\n- Alphabetisch suchen, nach Themen filtern oder aus Artikeln springen.\n- Kurzdefinition zuerst, dann Beispiel und Abgrenzung.\n- Begriffe aus der App verlinken direkt ins Glossar."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was ist ein Mehrsystem-Profil?",
        a: "Ein persönliches Profil aus mehreren Systemen zugleich, das zeigt, welche Themen über unabhängige Perspektiven hinweg wiederkehren, und das belastbarer ist als eine isolierte Einzeldeutung."
      },
      {
        q: "Was bedeutet Konvergenz bei Astrakey?",
        a: "Konvergenz beschreibt, dass mehrere voneinander unabhängige Systemfamilien dasselbe Thema stützen. Erst dann wird ein Thema als Kernthema tragfähig."
      },
      {
        q: "Was ist eine Systemfamilie?",
        a: "Eine Gruppe verwandter Quellen, die ähnliche Rohdaten teilen. Sie verhindert, dass ein Echo derselben Datenquelle mehrfach als unabhängige Bestätigung zählt."
      },
      {
        q: "Was ist ein Spannungsfeld?",
        a: "Zwei gleichzeitig aktive Pole in deinem Profil. Astrakey behandelt das nicht als Fehler, sondern als bewusst sichtbare Differenz, die oft viel über dich erzählt."
      },
      {
        q: "Bedeutet Sicherheit, dass eine Aussage über mich gewiss ist?",
        a: "Nein. Sicherheit beschreibt die Belastbarkeit einer Aussage anhand von Eingaben und Berechnung. Sie ist keine Gewissheit über deine Zukunft."
      },
      {
        q: "Ist die Seelenkarte dasselbe wie das Mehrsystem-Profil?",
        a: "Nein. Die Seelenkarte ist eine visuelle Oberfläche, ein guter Einstieg. Das eigentliche Produkt ist das Profil dahinter."
      },
      {
        q: "Wofür brauche ich das Glossar?",
        a: "Um Aussagen in deinem Profil richtig einzuordnen und um sicherzugehen, dass Astrakey Begriffe konsistent und nachvollziehbar verwendet."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  vergleiche: {
    key: "vergleiche",
    slug: "vergleiche",
    navKey: "vergleiche",
    title: "Nicht welches System recht hat. Was jedes sieht.",
    seoTitle: "Vergleiche: was jedes System wirklich sieht",
    seoDescription: "Astrakey Systemvergleiche zeigen nicht, welches System recht hat, sondern was jedes sieht und was erst im Zusammenspiel sichtbar wird.",
    eyebrow: "Systeme im Vergleich",
    lead: "Menschen suchen oft nach Unterschieden zwischen Systemen. Astrakey beantwortet diese Frage anders. Statt einen Gewinner zu küren, zeigen die Vergleiche, welche Perspektive jedes System einnimmt, wo seine Grenzen liegen und welche Themen erst sichtbar werden, wenn man mehrere Systeme zusammen liest. So wird ein Vergleich zur besten Einführung in das Mehrsystem-Profil.",
    answer: "Menschen suchen oft nach Unterschieden zwischen Systemen.",
    trustline: "Faire Gegenüberstellung ohne Sieger. Eigene redaktionelle Texte. Kein übernommener proprietärer Systemtext.",
    primaryCta: "Vergleich lesen",
    secondaryCta: "Profil kostenlos starten",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Nicht welches System recht hat. Was jedes sieht. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Astrakey Vergleiche anders denkt",
        body: "Die meisten Vergleiche im Netz wollen eine Entscheidung erzwingen. Welches System ist besser, genauer, tiefer. Astrakey hält diese Frage für irreführend. Jedes System ist eine Perspektive mit eigenem Blickwinkel, eigener Datengrundlage und eigenen Grenzen. Ein Vergleich, der einen Gewinner sucht, verfehlt deshalb den eigentlichen Nutzen. Wichtig ist auch, dass nicht jedes Modell nach denselben Maßstäben zu bewerten ist. Ein psychologischer Persönlichkeitstest beansprucht messbare Gütekriterien wie Reliabilität und Validität, symbolische Systeme wie Astrologie oder Human Design tun das nicht. Sie sind gewachsene Deutungssprachen und werden anders gelesen als ein statistisch geprüfter Test. Wer beide an demselben Maßstab misst, vergleicht Äpfel mit Birnen. Die bessere Frage lautet deshalb: Was kann jedes System sehen, und was sieht es nicht? Astrologie liest Zeit und Himmelspositionen, Human Design betont Energie und Entscheidung, ein Persönlichkeitstest erfasst Selbstwahrnehmung im Alltag. Diese Blickwinkel widersprechen sich nicht zwangsläufig, sie ergänzen sich. Genau hier liegt der Einstieg in die Kernlogik von Astrakey. Wenn du verstehst, dass jedes System einen Teil zeigt, wird der Wunsch nach einem Gesamtbild naheliegend. Vergleiche sind deshalb keine Wettbewerbe, sondern Lernschritte. Sie führen ruhig von der Einzelfrage zur Idee des Mehrsystem-Profils.\n\n- Vergleiche suchen bei Astrakey keinen Gewinner.\n- Persönlichkeitstests haben andere Gütekriterien als symbolische Systeme, beide gehören nicht an denselben Maßstab.\n- Die bessere Frage ist, was jedes System sieht und nicht sieht."
      },
      {
        title: "Wie eine Astrakey-Vergleichsseite aufgebaut ist",
        body: "Jede Vergleichsseite folgt demselben fairen Muster. Zuerst wird kurz erklärt, was jedes der beiden Systeme im Kern betrachtet und woraus es seine Aussagen ableitet. Dann zeigt der Vergleich, wo sich die Systeme überschneiden, wo sie sich ergänzen und wo sie unterschiedliche Sprachen für ähnliche Phänomene nutzen. Anschließend wird benannt, was jedes System bewusst nicht leisten kann. Erst am Ende ordnet Astrakey ein, was im Zusammenspiel sichtbar wird, das ein einzelnes System nicht zeigen würde. Diese Struktur verhindert einseitige Werbung für ein System und macht die Seiten für Suchmaschinen und AI-Antwortsysteme gut verwertbar. Wichtig ist die Tonalität: kein System wird abgewertet, keines überhöht. Astrakey nimmt jede Perspektive ernst, ordnet sie aber in einen größeren Zusammenhang ein. So entsteht ein Vergleich, der informiert, statt zu polarisieren, und der Vertrauen schafft, statt eine Seite zu bewerben.\n\n- Erst zeigen, was jedes System sieht, dann Überschneidungen und Ergänzungen.\n- Grenzen jedes Systems werden offen benannt.\n- Zum Schluss, was erst im Zusammenspiel sichtbar wird."
      },
      {
        title: "Beliebte Vergleiche als Einstiegspfade",
        body: "Manche Vergleiche werden besonders häufig gesucht, weil sie echte Entscheidungssituationen widerspiegeln. Astrologie und Human Design werden oft gegenübergestellt, weil beide weit verbreitet sind und doch sehr unterschiedliche Blickwinkel haben. Gene Keys und Human Design teilen eine gemeinsame Grundlage und unterscheiden sich dennoch in Ziel und Sprache. Enneagramm und Human Design treffen psychologische und energetische Modelle aufeinander. Ein klassischer Persönlichkeitstest und die Seelenkarte zeigen den Unterschied zwischen reiner Selbstauskunft und einem mehrschichtigen Profil. Jeder dieser Vergleiche ist ein eigener Einstiegspfad. Du kannst dort beginnen, wo deine Frage gerade liegt, und wirst von dort zu verwandten Vergleichen, zu passenden Glossarbegriffen und zur Idee des Gesamtprofils geführt. So wird die Vergleichsseite zu einem Netz aus Einstiegen, das unterschiedliche Besucher abholt und sie ruhig in dieselbe Richtung lenkt.\n\n- Astrologie und Human Design: zwei verbreitete, sehr verschiedene Blickwinkel.\n- Gene Keys und Human Design: gemeinsame Grundlage, anderes Ziel und andere Sprache.\n- Persönlichkeitstest und Seelenkarte: Selbstauskunft gegenüber mehrschichtigem Profil.\n\nKonkrete Lesepfade: Astrologie und Human Design im Vergleich, Gene Keys und Human Design im Vergleich"
      },
      {
        title: "Vom Vergleich zum Gesamtprofil",
        body: "Ein Vergleich endet bei Astrakey nicht mit einem Urteil, sondern mit einer Einladung. Wenn du verstanden hast, dass jedes System einen Teil zeigt, liegt die nächste Frage nahe: Wie sähe ein Bild aus, das mehrere dieser Perspektiven zusammenführt? Genau das leistet das Mehrsystem-Profil. Die Konvergenz-Engine prüft, welche Themen über mehrere unabhängige Systeme hinweg auftauchen, und macht sichtbar, wo sich Perspektiven stützen und wo sie ein Spannungsfeld bilden. Der kostenlose Profilstart genügt, um diesen Schritt selbst zu erleben. Du siehst dann nicht nur, was zwei Systeme im Vergleich sagen, sondern was bei dir persönlich über viele Systeme hinweg wiederkehrt. So wird aus einer Vergleichssuche eine echte Erkenntnis über dich. Es gibt dabei keinen Druck. Der Vergleich darf für sich stehen. Wer mehr will, findet im Profil die natürliche Fortsetzung.\n\n- Jeder Vergleich führt zur Frage nach dem Gesamtbild.\n- Das Mehrsystem-Profil führt mehrere Perspektiven zusammen.\n- Der kostenlose Profilstart macht den Schritt persönlich erfahrbar."
      },
      {
        title: "Was die Vergleiche nicht behaupten",
        body: "Die Vergleichsseiten behaupten nicht, dass ein System wahr und ein anderes falsch ist. Sie geben keine Rangliste und keine Gewissheit darüber, welches System dich am besten beschreibt. Sie ersetzen keine fachliche Beratung und treffen keine Entscheidung für dich. Astrakey nutzt keine geschützten Originaltexte der verglichenen Systeme, sondern schreibt eigene, faire Erklärungen. Wo ein System Grenzen hat, wird das benannt, auch beim eigenen Profilansatz. Diese Ehrlichkeit ist wichtig, weil Vergleiche oft genutzt werden, um Unsicherheit aufzulösen. Astrakey löst diese Unsicherheit nicht mit großen Versprechen, sondern mit klarer Einordnung. Du bekommst Verständnis und bessere Fragen, kein Etikett. Genau diese Neutralität macht die Vergleiche glaubwürdig und unterscheidet sie von Inhalten, die nur ein System bewerben wollen. Vertrauen entsteht hier dadurch, dass Astrakey keine Seite ergreift, sondern Perspektiven erklärt.\n\n- Keine Rangliste und keine Gewissheit über das richtige System.\n- Eigene faire Texte, keine übernommenen Originalpassagen.\n- Grenzen werden benannt, auch beim eigenen Profilansatz."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Sagt mir ein Astrakey-Vergleich, welches System besser ist?",
        a: "Nein. Die Vergleiche zeigen, was jedes System sieht und worin sie sich ergänzen. Sie geben bewusst keine Rangliste."
      },
      {
        q: "Warum vergleicht Astrakey Systeme, wenn es sie ohnehin verbindet?",
        a: "Weil Vergleiche der natürliche Einstieg sind. Wer versteht, was jedes System sieht, versteht auch, warum ein Gesamtprofil aus mehreren Perspektiven sinnvoll ist."
      },
      {
        q: "Sind die Vergleiche neutral?",
        a: "Ja. Astrakey wertet kein System ab und überhöht keines. Auch der eigene Profilansatz wird mit seinen Grenzen benannt."
      },
      {
        q: "Nutzt ihr Originaltexte der verglichenen Systeme?",
        a: "Nein. Astrakey schreibt eigene redaktionelle Erklärungen und übernimmt keine geschützten Passagen fremder Systeme."
      },
      {
        q: "Welche Vergleiche gibt es?",
        a: "Unter anderem Astrologie und Human Design, Gene Keys und Human Design, Enneagramm und Human Design sowie Persönlichkeitstest und Seelenkarte. Weitere kommen hinzu."
      },
      {
        q: "Helfen mir die Vergleiche bei einer Entscheidung?",
        a: "Sie helfen dir zu verstehen, welche Perspektive zu deiner Frage passt. Die beste Antwort ist oft nicht ein System, sondern das Zusammenspiel mehrerer."
      },
      {
        q: "Kann ich ein symbolisches System mit einem Persönlichkeitstest gleichsetzen?",
        a: "Nur bedingt. Ein psychologischer Test beansprucht messbare Gütekriterien wie Reliabilität und Validität, symbolische Systeme tun das nicht. Wir vergleichen deshalb, was jedes sieht, statt sie an denselben Maßstab zu legen."
      },
      {
        q: "Ersetzen Vergleiche eine Beratung?",
        a: "Nein. Sie sind ein Reflexionsangebot und ersetzen keine medizinische, psychologische, rechtliche oder finanzielle Beratung."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  sprachen: {
    key: "sprachen",
    slug: "sprachen",
    navKey: "sprachen",
    title: "Dein Profil in deiner Sprache. Sprache ist Teil der Qualität.",
    seoTitle: "Sprachen: Astrakey in 24 EU-Sprachen",
    seoDescription: "Astrakey ist in 24 EU-Sprachen verfügbar. Sprache ist Teil der Profilqualität, mit klarem Hinweis, welche Inhalte redaktionell geprüft sind.",
    eyebrow: "Sprache und Qualität",
    lead: "Astrakey ist in 24 EU-Sprachen verfügbar. Sprache ist für uns kein nachträglicher Anstrich, sondern Teil der Profilqualität. Ein Profil aus vielen Systemen enthält feine Nuancen, Grenzen und Reflexionsfragen. Diese können nur in einer Sprache wirken, die du wirklich verstehst. Deshalb zeigen wir offen, welche Inhalte vollständig geprüft sind und wo eine Übersetzung noch vorsichtig zu lesen ist.",
    answer: "Astrakey ist in 24 EU-Sprachen verfügbar.",
    trustline: "24 EU-Sprachen. Sichtbarer Prüfstatus je Sprache mit Datum der letzten Prüfung. Sensible Profiltexte werden besonders sorgfältig behandelt.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Über Astrakey ansehen",
    image: "/images/hermetia/celestial-layer-orbits.png",
    imageAlt: "Dein Profil in deiner Sprache. Sprache ist Teil der Qualität. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Sprache Teil der Profilqualität ist",
        body: "Ein Mehrsystem-Profil arbeitet mit feinen Unterscheidungen. Es benennt Kernthemen, markiert Unsicherheit, beschreibt Spannungsfelder und stellt Reflexionsfragen. Diese Feinheiten leben von Sprache. Ein Satz, der im Original sorgfältig abgewogen ist, kann in einer schlechten Übersetzung plötzlich zu hart, zu vage oder zu absolut klingen. Gerade bei einem Reflexionsangebot ist das ein Problem, denn die richtige Tonalität entscheidet, ob du dich verstanden fühlst oder bevormundet. Astrakey behandelt Sprache deshalb als Teil der Profilqualität, nicht als nachträglichen Schritt. Eine gute Übersetzung bewahrt die Zurückhaltung des Originals, die markierte Unsicherheit und den einladenden Ton. Das ist anspruchsvoller als reines Übersetzen, weil es um Bedeutung und Haltung geht. Wenn Astrakey verspricht, erklärbar und vorsichtig zu sein, muss dieses Versprechen in jeder Sprache halten. Sprachqualität ist damit ein Vertrauensthema, kein Komfortthema.\n\n- Profiltexte enthalten feine Nuancen, Grenzen und Reflexionsfragen.\n- Schlechte Übersetzung kann Aussagen härter oder absoluter wirken lassen.\n- Gute Übersetzung bewahrt Tonalität, Zurückhaltung und Unsicherheit."
      },
      {
        title: "24 EU-Sprachen und was sie ermöglichen",
        body: "Astrakey ist in 24 EU-Sprachen verfügbar. Das bedeutet, dass Menschen in weiten Teilen Europas ihr Profil in ihrer eigenen Sprache lesen können, von der Oberfläche über die Erklärungen bis zu den Reflexionsfragen. Diese Breite ist eine bewusste Entscheidung. Selbsterkenntnis ist persönlich, und eine fremde Sprache schafft Distanz genau dort, wo Nähe wichtig wäre. Mit 24 Sprachen wird Astrakey zu einem europäischen Angebot, das nicht nur auf Englisch oder Deutsch funktioniert. Die Sprachenseite zeigt eine klare Übersicht, welche Sprachen verfügbar sind, sodass du sofort siehst, ob deine dabei ist. Wichtig ist dabei der Unterschied zwischen Verfügbarkeit und Prüftiefe. Verfügbar heißt, dass die Inhalte in dieser Sprache vorliegen. Wie gründlich sie geprüft sind, wird im nächsten Schritt offen ausgewiesen. So vermeidet Astrakey das Versprechen einer perfekten Übersetzung überall und ersetzt es durch ehrliche Transparenz über den tatsächlichen Stand.\n\n- 24 EU-Sprachen für Oberfläche, Erklärungen und Reflexionsfragen.\n- Europäischer Zugang statt nur Englisch oder Deutsch.\n- Klare Übersicht, ob deine Sprache verfügbar ist."
      },
      {
        title: "Geprüft, in Arbeit, vorsichtig zu lesen",
        body: "Nicht jede Sprache ist gleich tief geprüft, und Astrakey sagt das offen. Wir unterscheiden den Status der Inhalte und zeigen je Sprache, wann sie zuletzt geprüft wurde, damit du den Stand einschätzen kannst und nicht raten musst. Redaktionell geprüfte Sprachen sind sorgfältig gegengelesen, besonders bei sensiblen Profiltexten und rechtlichen Hinweisen. Sprachen in Arbeit sind nutzbar, werden aber noch verfeinert, vor allem bei feinen Formulierungen. Bei Sprachen, die vorsichtig zu lesen sind, weisen wir darauf hin, dass einzelne Nuancen noch nicht den vollen Standard erreichen. Zu einem hohen Standard gehört für uns auch geschlechtersensible Sprache: Profiltexte sollen Menschen unabhängig vom Geschlecht ansprechen, statt unbewusst nur eine Gruppe zu meinen. Die redaktionelle Prüfung achtet deshalb je Sprache darauf, dass Formulierungen einladend und nicht ausschließend wirken. Diese Offenheit ist kein Eingeständnis von Schwäche, sondern Teil der Produktethik. Bei einem Reflexionsangebot über sensible Themen wäre es unredlich, überall perfekte Qualität zu behaupten. Lieber zeigen wir den echten Stand und verbessern ihn schrittweise. Du kannst dann selbst entscheiden, ob du in deiner Sprache liest oder zusätzlich eine geprüfte Sprache nutzt. Diese Transparenz schützt vor Missverständnissen genau dort, wo Sprache über Vertrauen entscheidet.\n\n- Geprüft, in Arbeit oder vorsichtig zu lesen, je Sprache mit Datum der letzten Prüfung.\n- Geschlechtersensible Formulierungen gehören zum Qualitätsstandard jeder Sprache.\n- Vorsichtig zu lesen: einzelne Nuancen erreichen noch nicht den vollen Standard."
      },
      {
        title: "Wie AI und Redaktion bei Übersetzungen zusammenarbeiten",
        body: "Astrakey nutzt AI auch bei Übersetzungen, aber transparent und mit klaren Grenzen. AI kann große Mengen Text schnell in viele Sprachen bringen und dabei eine erste, gut lesbare Fassung erzeugen. Sie ist jedoch nicht die letzte Instanz für sensible Inhalte. Bei Profiltexten, rechtlichen Hinweisen und Sicherheitsformulierungen entscheidet redaktionelle Prüfung über die finale Qualität. Diese Trennung entspricht der grundsätzlichen Haltung von Astrakey: AI formuliert und unterstützt, aber sie urteilt nicht allein über das, was heikel ist. Auf der Sprachenseite zeigt sich das im Prüfstatus. Wo AI eine Sprache bereitstellt, ohne dass die volle redaktionelle Prüfung abgeschlossen ist, wird das als in Arbeit oder vorsichtig zu lesen gekennzeichnet. So bekommst du nicht nur eine Übersetzung, sondern auch eine ehrliche Auskunft darüber, wie sie entstanden ist. Damit bleibt die Sprachqualität nachvollziehbar und passt zur AI-Transparenz, die Astrakey im ganzen Produkt verfolgt.\n\n- AI liefert schnelle, gut lesbare erste Übersetzungen.\n- Redaktion prüft sensible Profil-, Rechts- und Sicherheitstexte.\n- Der Prüfstatus zeigt, wie weit eine Sprache geprüft ist."
      },
      {
        title: "Deine Sprache wählen und starten",
        body: "Du kannst deine Sprache jederzeit wählen und wechseln. Die Oberfläche, die Erklärungen und dein Profil passen sich an, und der Prüfstatus deiner Sprache bleibt sichtbar. Wenn du dein Profil startest, erlebst du sofort, wie sich Astrakey in deiner Sprache anfühlt, von der ersten Eingabe bis zu den ersten Kernthemen. Sollte deine Sprache noch in Arbeit sein, kannst du trotzdem beginnen und bei Bedarf zusätzlich eine geprüfte Sprache nutzen, um eine Formulierung genauer zu verstehen. Es entsteht kein Nachteil daraus, früh einzusteigen, weil Astrakey offen kommuniziert, woran noch gearbeitet wird. Die Sprachenseite ist damit nicht nur eine Liste, sondern ein Versprechen: Wir behandeln deine Sprache als Teil der Qualität deines Profils. Wenn du Rückmeldung zu einer Formulierung hast, hilft das, die Übersetzungen weiter zu verbessern. So wird Sprachqualität zu einer gemeinsamen, fortlaufenden Arbeit.\n\n- Sprache jederzeit wählen und wechseln, Prüfstatus bleibt sichtbar.\n- Früher Einstieg ist möglich, auch bei Sprachen in Arbeit.\n- Rückmeldungen zu Formulierungen verbessern die Qualität."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "In welchen Sprachen gibt es Astrakey?",
        a: "Astrakey ist in 24 EU-Sprachen verfügbar, von der Oberfläche über die Erklärungen bis zu den Reflexionsfragen."
      },
      {
        q: "Sind alle Sprachen gleich gut geprüft?",
        a: "Nein. Astrakey weist je Sprache offen aus, ob die Inhalte redaktionell geprüft, in Arbeit oder noch vorsichtig zu lesen sind, jeweils mit dem Datum der letzten Prüfung."
      },
      {
        q: "Achtet ihr auf geschlechtersensible Sprache?",
        a: "Ja. Geschlechtersensible Formulierungen gehören zu unserem Qualitätsstandard. Profiltexte sollen Menschen unabhängig vom Geschlecht ansprechen, und die redaktionelle Prüfung achtet je Sprache darauf."
      },
      {
        q: "Warum ist Sprache Teil der Profilqualität?",
        a: "Weil Profiltexte feine Nuancen, Grenzen und Reflexionsfragen enthalten. Diese wirken nur in einer Sprache, die du wirklich verstehst."
      },
      {
        q: "Nutzt Astrakey AI für Übersetzungen?",
        a: "Ja, transparent. AI liefert eine erste Fassung, während sensible Profil-, Rechts- und Sicherheitstexte redaktionell geprüft werden."
      },
      {
        q: "Kann ich die Sprache wechseln?",
        a: "Ja. Du kannst deine Sprache jederzeit wählen und wechseln. Oberfläche, Erklärungen und Profil passen sich an."
      },
      {
        q: "Was, wenn meine Sprache noch in Arbeit ist?",
        a: "Du kannst trotzdem starten. Der Prüfstatus ist sichtbar, und du kannst bei Bedarf zusätzlich eine geprüfte Sprache nutzen."
      },
      {
        q: "Kann ich Übersetzungsfehler melden?",
        a: "Ja. Rückmeldungen zu Formulierungen helfen, die Sprachqualität schrittweise zu verbessern."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  freigaben: {
    key: "freigaben",
    slug: "freigaben",
    navKey: "freigaben",
    title: "Klare Gates für Daten, AI, IP und Recht.",
    seoTitle: "Freigaben: Datenschutz, AI und IP geprüft",
    seoDescription: "Astrakey zeigt seine Gates für Datenschutz, Einwilligung, AI-Transparenz, IP-Sorgfalt und redaktionelle Qualität. Sachlich und vertrauensbildend.",
    eyebrow: "Verantwortung und Gates",
    lead: "Astrakey verbindet viele Systeme, sensible Daten, AI und Beziehungsanalysen. Damit das tragfähig bleibt, prüfen wir vor jeder Veröffentlichung klar definierte Gates: Datenschutz, Einwilligung, AI-Transparenz, IP-Sorgfalt, geschützte Systemtexte, Rechtsprüfung und redaktionelle Qualität. Diese Seite zeigt sachlich, welche Standards gelten und wie wir sie absichern, damit du verstehst, worauf dein Vertrauen beruht.",
    answer: "Astrakey verbindet viele Systeme, sensible Daten, AI und Beziehungsanalysen.",
    trustline: "Sieben klare Gates vor Veröffentlichung, je mit Prüfdatum und verantwortlicher Stelle. Rechtliche und redaktionelle Prüfung, keine wissenschaftliche Validierung. Schutz vor Diskriminierung nach Geschlecht und Orientierung.",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "Daten und Sicherheit ansehen",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Klare Gates für Daten, AI, IP und Recht. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Astrakey klare Gates braucht",
        body: "Astrakey vereint Dinge, die einzeln schon heikel sind, und in Kombination noch mehr Sorgfalt verlangen. Es verarbeitet sensible Daten wie Geburtsdaten und persönliche Reflexionen, leitet daraus spirituelle und psychologische Aussagen ab, setzt AI für die Sprache ein und ermöglicht Beziehungsanalysen über zwei Menschen. Jeder dieser Bereiche berührt rechtliche, ethische und inhaltliche Fragen. Deshalb veröffentlicht Astrakey nicht einfach, was technisch möglich ist, sondern prüft vorher entlang klar definierter Gates. Ein Gate ist eine bewusste Prüfschwelle, die erreicht sein muss, bevor etwas live geht. Diese Gates sind kein bürokratisches Beiwerk, sondern die praktische Form von Verantwortung. Sie sorgen dafür, dass Versprechen wie Erklärbarkeit, Datenschutz und Fairness nicht nur im Marketing stehen, sondern im Produkt verankert sind. Wichtig ist eine ehrliche Einordnung, was diese Gates sind und was nicht. Es handelt sich um rechtliche und redaktionelle Prüfungen, nicht um eine wissenschaftliche Validierung der Systeme. Ein bestandenes Gate bedeutet, dass ein Inhalt rechtlich tragfähig, datenschutzfreundlich und sprachlich sorgfältig ist. Es bedeutet nicht, dass Astrologie oder Human Design dadurch empirisch bewiesen wären. Diese Grenze halten wir bewusst offen. Wer sensible Daten anvertraut, hat ein Recht zu wissen, dass dahinter eine geprüfte Linie steht und welcher Art diese Prüfung ist. Zu jedem Gate weisen wir deshalb aus, wann es zuletzt geprüft wurde und welche Stelle dafür verantwortlich ist [Platzhalter: verantwortliche Stelle, etwa interne Redaktion und externe Rechtsprüfung, konkret benennen]. So bleibt nachvollziehbar, dass die Prüfung nicht einmalig behauptet, sondern fortlaufend gepflegt wird. Diese Seite macht diese Linie sichtbar, sachlich und ohne Beschönigung.\n\n- Astrakey kombiniert sensible Daten, Ableitungen, AI und Beziehungsanalysen.\n- Gates sind rechtliche und redaktionelle Prüfungen, keine wissenschaftliche Validierung der Systeme.\n- Gates sind bewusste Prüfschwellen, die vor der Veröffentlichung erreicht sein müssen."
      },
      {
        title: "Datenschutz und Einwilligung",
        body: "Das erste Gate betrifft den Umgang mit sensiblen Daten. Astrakey verarbeitet Informationen, die viel über eine Person aussagen können, und behandelt sie entsprechend vorsichtig. Vor der Veröffentlichung wird geprüft, ob klar ist, welche Daten wofür gebraucht werden, was gespeichert wird und wie Export und Löschung funktionieren. Ein eigener Schwerpunkt liegt auf der Einwilligung. Sie muss klar, verständlich und widerrufbar sein. Besonders streng ist Astrakey bei der Beziehungsanalyse, weil sie Aussagen über eine zweite Person ableiten kann. Hier reicht es nicht, einfach Daten einzutragen. Die betroffene Person braucht eine eigene, informierte Einwilligung oder einen rechtlich sauberen Rahmen. Dieses Gate stellt sicher, dass Datenschutz nicht im Kleingedruckten verschwindet, sondern als nutzbare Kontrolle erlebbar ist. Meine Daten sind nicht automatisch die Erlaubnis, andere zu deuten. Diese Grenze ist fest eingebaut, nicht optional.\n\n- Geprüft wird, ob Datennutzung, Speicherung, Export und Löschung klar sind.\n- Einwilligung muss klar, verständlich und widerrufbar sein.\n- Bei der Beziehungsanalyse gilt eine besonders strenge Einwilligungsregel."
      },
      {
        title: "AI-Transparenz als festes Gate",
        body: "Das zweite Gate stellt sicher, dass die Rolle der AI klar und ehrlich bleibt. Astrakey trennt Berechnung, Konvergenz und Sprache. AI formuliert die Deutung verständlich, entscheidet aber nicht, welche Systeme übereinstimmen, und erfindet kein Profil. Vor der Veröffentlichung wird geprüft, ob diese Trennung im Produkt sichtbar ist, also ob Nutzer erkennen können, wann gerechnet und wann formuliert wird. Das schützt vor dem Eindruck, ein Sprachmodell würde frei über eine Person urteilen. Auch bei Übersetzungen und Zusammenfassungen gilt diese Linie: AI unterstützt, redaktionelle Prüfung sichert sensible Inhalte ab. Dieses Gate ist wichtig, weil AI leicht den Anschein von Autorität erzeugt. Astrakey will genau das vermeiden. Die AI ist ein Werkzeug für Sprache, nicht die Quelle der Wahrheit. Indem dieses Prinzip als Freigabekriterium festgeschrieben ist, bleibt es nicht bei einer Absichtserklärung, sondern wird zu einer überprüfbaren Bedingung für jede Veröffentlichung.\n\n- AI formuliert, sie entscheidet nicht über Wahrheit und erfindet kein Profil.\n- Geprüft wird, ob die Trennung von Rechnen und Formulieren sichtbar ist.\n- Redaktionelle Prüfung sichert sensible AI-erzeugte Inhalte ab."
      },
      {
        title: "IP-Sorgfalt und geschützte Systemtexte",
        body: "Das dritte Gate betrifft geistiges Eigentum und die Sorgfalt gegenüber fremden Systemen. Astrakey nutzt viele etablierte Systeme als Perspektiven, übernimmt aber keine geschützten Originaltexte, Tabellen oder Originalformulierungen anderer Anbieter. Stattdessen schreibt Astrakey eigene redaktionelle Erklärungen und Deutungen. Vor der Veröffentlichung wird geprüft, ob Inhalte diese Grenze einhalten, gerade bei Systemen, deren Deutungstexte urheberrechtlich geschützt sein können. Diese Sorgfalt schützt nicht nur rechtlich, sondern stärkt auch die Eigenständigkeit der Marke. Astrakey will keine Sammlung kopierter Inhalte sein, sondern eine eigene, verständliche Sprache für das Zusammenspiel vieler Systeme. Wo Systeme namentlich genannt werden, geschieht das beschreibend und fair, ohne geschützte Inhalte zu übernehmen. Beispielkapitel im Seelenbuch sind klar als fiktiv gekennzeichnet, und echte Nutzerprofile werden nie ohne ausdrückliche Einwilligung gezeigt. Dieses Gate stellt sicher, dass Astrakey inhaltlich sauber bleibt und niemandem Inhalte entnimmt, die ihm nicht gehören.\n\n- Keine Übernahme geschützter Originaltexte, Tabellen oder Formulierungen.\n- Eigene redaktionelle Erklärungen statt kopierter Inhalte.\n- Beispielkapitel klar fiktiv, echte Profile nur mit Einwilligung."
      },
      {
        title: "Rechtsprüfung und redaktionelle Qualität",
        body: "Das vierte Gate verbindet rechtliche Prüfung mit redaktioneller Qualität. Bevor sensible Inhalte erscheinen, werden sie auf klare Grenzen geprüft. Astrakey gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen und behauptet nicht, die Wahrheit über einen Menschen zu kennen. Aussagen über Gesundheit, Beziehung oder psychische Belastung verlangen vorsichtige Sprache und den Verweis auf passende Fachstellen. Die redaktionelle Prüfung achtet darauf, dass Formulierungen einladend und zurückhaltend bleiben, dass Unsicherheit markiert wird und dass kein Satz wie eine endgültige Festlegung wirkt. Ein eigener Schwerpunkt liegt auf Schutz vor Diskriminierung. Inhalte werden daraufhin geprüft, dass sie niemanden aufgrund von Geschlecht oder sexueller Orientierung herabsetzen, ausschließen oder in starre Rollen drängen. Beziehungstexte denken Freundschaft, Familie sowie queere und nicht-monogame Konstellationen ausdrücklich mit, statt nur eine Norm vorauszusetzen. Diese Qualität ist auch eine Frage der Sprache in den verschiedenen Versionen, weshalb sensible Texte in jeder veröffentlichten Sprache geprüft werden, auch auf geschlechtersensible Formulierung. Zusammen sorgen diese Gates dafür, dass Astrakey nicht nur technisch funktioniert, sondern verantwortungsvoll spricht. Du sollst dich verstanden fühlen, nicht beurteilt. Diese Seite macht transparent, dass hinter jeder veröffentlichten Aussage eine bewusste Prüfung von Recht, Ethik und Sprache steht.\n\n- Klare Grenzen: keine Diagnose, keine Vorhersage, keine Beratung.\n- Schutz vor Diskriminierung nach Geschlecht und sexueller Orientierung, queere und nicht-monogame Konstellationen mitgedacht.\n- Redaktionelle Prüfung bewahrt Zurückhaltung, markiert Unsicherheit und achtet auf geschlechtersensible Sprache."
      }
    ],
    graphics: [],
    faq: [
      {
        q: "Was sind die Astrakey-Gates?",
        a: "Klar definierte Prüfschwellen für Datenschutz, Einwilligung, AI-Transparenz, IP-Sorgfalt, geschützte Systemtexte, Rechtsprüfung und redaktionelle Qualität, die vor jeder Veröffentlichung erreicht sein müssen."
      },
      {
        q: "Wie schützt Astrakey meine sensiblen Daten?",
        a: "Es wird geprüft, ob Datennutzung, Speicherung, Export und Löschung klar sind und ob die Einwilligung verständlich und widerrufbar ist, besonders bei der Beziehungsanalyse."
      },
      {
        q: "Urteilt eine AI über mich?",
        a: "Nein. AI formuliert die Deutung, entscheidet aber nicht, welche Systeme übereinstimmen, und erfindet kein Profil. Diese Trennung ist ein festes Freigabekriterium."
      },
      {
        q: "Übernimmt Astrakey Texte anderer Systeme?",
        a: "Nein. Astrakey schreibt eigene redaktionelle Erklärungen und übernimmt keine geschützten Originaltexte, Tabellen oder Formulierungen fremder Anbieter."
      },
      {
        q: "Gibt Astrakey medizinische oder rechtliche Ratschläge?",
        a: "Nein. Astrakey ist ein Reflexionsangebot und gibt keine medizinischen, therapeutischen, rechtlichen oder finanziellen Empfehlungen."
      },
      {
        q: "Warum braucht die Beziehungsanalyse besondere Sorgfalt?",
        a: "Weil sie Aussagen über eine zweite Person ableiten kann. Deshalb gilt eine strenge, eigene Einwilligungsregel für die betroffene Person."
      },
      {
        q: "Bedeutet ein bestandenes Gate, dass die Systeme wissenschaftlich bewiesen sind?",
        a: "Nein. Die Gates sind rechtliche und redaktionelle Prüfungen, keine wissenschaftliche Validierung. Ein bestandenes Gate heißt, ein Inhalt ist rechtlich tragfähig, datenschutzfreundlich und sprachlich sorgfältig, nicht, dass ein System empirisch bewiesen wäre."
      },
      {
        q: "Schützt ihr vor Diskriminierung?",
        a: "Ja. Inhalte werden daraufhin geprüft, dass sie niemanden aufgrund von Geschlecht oder sexueller Orientierung herabsetzen oder ausschließen. Beziehungstexte denken auch queere und nicht-monogame Konstellationen mit."
      },
      {
        q: "Sind die Gates einmalig oder wiederkehrend?",
        a: "Wiederkehrend. Zu jedem Gate weisen wir das Datum der letzten Prüfung und die verantwortliche Stelle aus, damit die Prüfung nachvollziehbar gepflegt bleibt."
      },
      {
        q: "Wofür ist die Freigabeseite gedacht?",
        a: "Sie macht sachlich transparent, welche Standards Astrakey vor der Veröffentlichung prüft, damit du verstehst, worauf dein Vertrauen beruht."
      }
    ],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  }
} satisfies Record<string, ContentPage>;

const enPages: Record<string, ContentPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, page]) => [key, { ...page }]),
) as Record<string, ContentPage>;

export const pillarPages: Record<string, LocalizedPage> = Object.fromEntries(
  Object.entries(dePages).map(([key, de]) => [key, { de, en: enPages[key as keyof typeof dePages] }]),
) as Record<string, LocalizedPage>;

export function getPillarPage(key: string, locale: Locale): ContentPage | undefined {
  const page = pillarPages[key];
  if (!page) return undefined;
  const base = locale === "de" ? page.de : page.en;
  return localizeContentPage(base, locale);
}

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
    seoTitle: `${input.term} erklärt — Bedeutung bei Astrakey`,
    definition: input.definition,
    sections: [input.why, input.hermetia],
  };
}

export const glossaryTerms = [
  {
    slug: "seelenkarte",
    term: "Seelenkarte",
    seoTitle: "Was ist eine Seelenkarte? Bedeutung bei Astrakey",
    definition:
      "Eine Seelenkarte ist ein integriertes Persönlichkeitsbild, das berechnete spirituelle und psychologische Systeme zu Kernthemen, Ebenen und Reflexionsimpulsen verbindet.",
    sections: [
      "Bei Astrakey ist die Seelenkarte kein einzelnes Horoskop. Sie entsteht aus mehreren Systemen und aus der Frage, welche Themen sich über unterschiedliche Perspektiven hinweg bestätigen.",
      "Die Seelenkarte ist bewusst als Einladung formuliert. Sie soll Worte und Bilder für innere Muster geben, ohne dich zu diagnostizieren oder festzulegen.",
    ],
  },
  {
    slug: "konvergenz",
    term: "Konvergenz",
    seoTitle: "Konvergenz erklärt — wenn mehrere Systeme dasselbe Thema zeigen",
    definition:
      "Konvergenz bedeutet bei Astrakey, dass mehrere unabhängige Systemfamilien auf dasselbe Thema hinweisen und daraus ein tragfähigeres Kernthema entsteht.",
    sections: [
      "Konvergenz unterscheidet sich von Stärke. Ein Thema kann in einem System stark sein, aber erst mehrere unabhängige Perspektiven machen es zu einem belastbaren Kernthema.",
      "Astrakey nutzt Konvergenz, um Widersprüche sichtbar zu machen und Übergewichtungen durch verwandte Systeme zu vermeiden.",
    ],
  },
  {
    slug: "synastrie",
    term: "Synastrie",
    seoTitle: "Was ist Synastrie? Beziehungsauswertung einfach erklärt",
    definition:
      "Synastrie ist der Vergleich zweier Profile oder Horoskope, um Resonanz, Reibung und Entwicklungsthemen zwischen zwei Menschen sichtbar zu machen.",
    sections: [
      "In Astrakey ist Synastrie kein Urteil über die Beziehung. Sie ist eine Reflexionshilfe, die berechnete Berührungspunkte in eine verständliche Sprache übersetzt.",
      "Weil dabei Daten einer zweiten Person verarbeitet werden können, braucht jede echte Beziehungsauswertung eine klare Einwilligung.",
    ],
  },
  {
    slug: "ai-deutung",
    term: "AI-Deutung",
    seoTitle: "AI-Deutung bei Astrakey — was AI tut und was nicht",
    definition:
      "AI-Deutung bedeutet, dass ein Sprachmodell berechnete Profilfakten in warme, verständliche Texte übersetzt. Die Berechnung selbst erfolgt nicht durch AI.",
    sections: [
      "Astrakey trennt Berechnung und Formulierung. Planetenpositionen, Zahlen, Fragebogenwerte und Theme-Signale werden deterministisch erzeugt.",
      "Die AI bekommt nur abgeleitete Fakten und formuliert daraus Reflexionsimpulse. Sie ersetzt keine medizinische, therapeutische oder rechtliche Beratung.",
    ],
  },
  {
    slug: "kernthema",
    term: "Kernthema",
    seoTitle: "Kernthema bei Astrakey — was dein Profil wirklich trägt",
    definition:
      "Ein Kernthema ist ein zentrales Muster deiner Seelenkarte, das von mehreren Systemen oder starken Signalen getragen wird.",
    sections: [
      "Kernthemen entstehen nicht aus einem einzelnen Satz. Astrakey prüft, welche Themen wiederkehren und welche Perspektiven sie stützen.",
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
      "Astrakey behandelt Widersprüche nicht als Fehler. Wenn zwei Pole stark sind, kann daraus eine produktive innere Frage entstehen.",
      "Ein Spannungsfeld kann zum Beispiel zwischen Rückzug und Sichtbarkeit, Freiheit und Bindung oder Kontrolle und Hingabe liegen.",
    ],
  },
  {
    slug: "theme-signal",
    term: "Theme-Signal",
    seoTitle: "Theme-Signal — wie Astrakey Systemdaten vergleichbar macht",
    definition:
      "Ein Theme-Signal ist ein standardisiertes Thema, das aus einem System berechnet wird und mit Signalen anderer Systeme verglichen werden kann.",
    sections: [
      "Systeme sprechen unterschiedliche Sprachen. Theme-Signale übersetzen sie in eine gemeinsame Themen-Landkarte.",
      "Dadurch kann Astrakey erkennen, ob verschiedene Systeme auf Beziehung, Ausdruck, Rhythmus, Grenzen oder Wachstum zeigen.",
    ],
  },
  {
    slug: "ephemeride",
    term: "Ephemeride",
    seoTitle: "Ephemeride einfach erklärt — Grundlage astrologischer Berechnung",
    definition:
      "Eine Ephemeride enthält astronomische Positionen von Himmelskörpern und ermöglicht reproduzierbare Berechnungen von Horoskopen und verwandten Systemen.",
    sections: [
      "Astrakey nutzt Ephemeriden für Systeme, die Himmelspositionen brauchen. Dadurch wird die Berechnung nachvollziehbar und nicht geraten.",
      "Die spätere Deutung ist davon getrennt: Erst wird gerechnet, dann werden die Ergebnisse sprachlich eingeordnet.",
    ],
  },
  {
    slug: "bodygraph",
    term: "Bodygraph",
    seoTitle: "Bodygraph im Human Design — Bedeutung bei Astrakey",
    definition:
      "Der Bodygraph ist die zentrale Human-Design-Grafik mit Zentren, Kanälen, Toren, Typ und innerer Autorität.",
    sections: [
      "Bei Astrakey ist der Bodygraph eine Datenquelle, nicht das ganze Ergebnis. Seine Signale werden mit anderen Systemen verbunden.",
      "Geschützte Originaltexte werden dabei nicht übernommen. Astrakey formuliert mit eigener Sprache und rechtlich geprüften Leitplanken.",
    ],
  },
  {
    slug: "innere-autoritaet",
    term: "Innere Autorität",
    seoTitle: "Innere Autorität im Human Design — Entscheidungskompass erklärt",
    definition:
      "Die innere Autorität beschreibt im Human Design, über welchen inneren Kompass Entscheidungen besonders stimmig getroffen werden.",
    sections: [
      "Astrakey liest innere Autorität nicht als starre Regel, sondern als Reflexionsangebot: Wie fühlt sich ein klares Ja oder Nein bei dir an?",
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
      "Astrakey nutzt diese Triade mit eigener Sprache und ohne geschützte Originaltexte. Sie ist ein Wachstumsbild, keine Diagnose.",
      "Besonders wertvoll wird sie, wenn ähnliche Themen auch in anderen Systemen auftauchen und dadurch ein Kernthema stützen.",
    ],
  },
  {
    slug: "lebenszahl",
    term: "Lebenszahl",
    seoTitle: "Lebenszahl berechnen — numerologischer Lebensweg bei Astrakey",
    definition:
      "Die Lebenszahl ist eine numerologische Kernzahl aus dem Geburtsdatum und beschreibt ein Grundthema des Lebenswegs.",
    sections: [
      "Die Berechnung ist einfache Arithmetik. Astrakey nutzt die Lebenszahl nicht isoliert, sondern als Signal innerhalb einer größeren Seelenkarte.",
      "Dadurch bleibt die Zahl ein nützlicher Hinweis, ohne zur alleinigen Wahrheit über eine Person zu werden.",
    ],
  },
  {
    slug: "dosha",
    term: "Dosha",
    seoTitle: "Dosha im Ayurveda — Vata, Pitta, Kapha als Reflexionsmodell",
    definition:
      "Doshas sind im Ayurveda Grundprinzipien von Bewegung, Umwandlung und Struktur. Astrakey nutzt sie nicht-medizinisch als Reflexionssignal.",
    sections: [
      "Dosha-Aussagen dürfen nicht als Diagnose verstanden werden. In Astrakey dienen sie der Selbstfürsorge und alltagsnahen Reflexion.",
      "Die Bestimmung erfolgt über eigene Fragebogenitems und nicht über geschützte medizinische oder therapeutische Texte.",
    ],
  },
  {
    slug: "chronotyp",
    term: "Chronotyp",
    seoTitle: "Chronotyp — Tagesrhythmus und Energie bei Astrakey",
    definition:
      "Der Chronotyp beschreibt, zu welchen Tageszeiten Energie, Fokus und Ruhe natürlicherweise stärker oder schwächer sein können.",
    sections: [
      "Astrakey nutzt den Chronotyp als praktisches Alltagssignal, besonders für Tagesimpulse und Journaling.",
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
      "Astrakey behandelt Composite-Deutungen nur mit klarer Einwilligung und ohne Erfolgs- oder Trennungsversprechen.",
    ],
  },
  {
    slug: "art-9-dsgvo",
    term: "Art. 9 DSGVO",
    seoTitle: "Art. 9 DSGVO bei Astrakey — besondere Daten verständlich erklärt",
    definition:
      "Art. 9 DSGVO schützt besondere Kategorien personenbezogener Daten, zu denen auch sensible weltanschauliche oder spirituelle Ableitungen gehören können.",
    sections: [
      "Astrakey behandelt spirituelle Profilinhalte deshalb besonders vorsichtig und arbeitet mit ausdrücklicher Einwilligung.",
      "Marketing-Beispiele bleiben fiktiv. Echte Profile, Geburtsdaten oder Beziehungsauswertungen werden nicht öffentlich verwendet.",
    ],
  },
  glossaryTerm({
    slug: "radix",
    term: "Radix",
    definition: "Die Radix ist das Geburtshoroskop einer Person und zeigt berechnete Planetenpositionen zum Zeitpunkt der Geburt.",
    why: "In Astrakey ist die Radix eine wichtige Datenquelle, aber nicht das ganze Profil. Sie liefert Zeichen, Häuser, Aspekte und Achsen als Ausgangspunkt.",
    hermetia: "Astrakey verbindet Radix-Signale mit anderen Systemfamilien, damit astrologische Aussagen nicht isoliert übergewichtet werden.",
  }),
  glossaryTerm({
    slug: "aszendent",
    term: "Aszendent",
    definition: "Der Aszendent ist das Tierkreiszeichen, das zum Geburtszeitpunkt am östlichen Horizont aufsteigt.",
    why: "Er braucht eine möglichst genaue Geburtszeit und beeinflusst Häuser, Auftreten und die Perspektive, aus der ein Horoskop gelesen wird.",
    hermetia: "Astrakey kennzeichnet die Sicherheit von Aszendent-Aussagen, wenn die Geburtszeit ungenau ist.",
  }),
  glossaryTerm({
    slug: "haeuser",
    term: "Astrologische Häuser",
    definition: "Astrologische Häuser ordnen Horoskopfaktoren verschiedenen Lebensbereichen zu, etwa Beziehung, Berufung oder Rückzug.",
    why: "Häuser machen astrologische Aussagen konkreter, hängen aber stark von Geburtszeit, Ort und gewähltem Häusersystem ab.",
    hermetia: "Astrakey nutzt Häuser transparent und vorsichtig, besonders wenn Eingabedaten weniger exakt sind.",
  }),
  glossaryTerm({
    slug: "aspekt",
    term: "Aspekt",
    definition: "Ein Aspekt beschreibt den Winkel zwischen zwei Horoskopfaktoren und damit eine Beziehung zwischen zwei Themen.",
    why: "Aspekte zeigen Harmonie, Spannung oder Aktivierung. Sie sind wichtig, um innere Dynamiken nicht nur einzeln, sondern relational zu lesen.",
    hermetia: "Astrakey fasst Aspekte als Theme-Signale zusammen und prüft, ob andere Systeme ähnliche Dynamiken spiegeln.",
  }),
  glossaryTerm({
    slug: "orb",
    term: "Orb",
    definition: "Der Orb ist der erlaubte Abstand von einem exakten astrologischen Winkel oder Punkt.",
    why: "Ein enger Orb gilt meist als stärker, ein weiter Orb als weicher. Ohne klare Orben werden astrologische Aussagen schnell beliebig.",
    hermetia: "Astrakey verwendet definierte Orben und macht Gewichtungen nachvollziehbar.",
  }),
  glossaryTerm({
    slug: "transit",
    term: "Transit",
    definition: "Ein Transit beschreibt die aktuelle Position eines Himmelskörpers im Verhältnis zum Geburtshoroskop.",
    why: "Transite werden häufig genutzt, um Zeitqualität zu beschreiben. Sie sind keine Ereignisgarantie, sondern ein Timing-Signal.",
    hermetia: "Astrakey nutzt Transite zurückhaltend für Tagesimpulse und Monatsrückblicke.",
  }),
  glossaryTerm({
    slug: "progression",
    term: "Progression",
    definition: "Progressionen sind astrologische Timing-Techniken, die eine symbolische innere Entwicklung über Zeit beschreiben.",
    why: "Sie unterscheiden sich von Transiten, weil sie weniger äußere Auslöser und mehr innere Reifung darstellen.",
    hermetia: "Astrakey kann Progressionen als langsames Hintergrundsignal für Seelenweg und Entwicklung nutzen.",
  }),
  glossaryTerm({
    slug: "profection",
    term: "Profection",
    definition: "Eine Profection ist eine klassische astrologische Technik, die jedem Lebensjahr ein Haus oder Thema zuordnet.",
    why: "Sie ist einfach, aber wirkungsvoll, um Jahresfokus und Lebensbereiche im Zeitverlauf zu betrachten.",
    hermetia: "Astrakey nutzt Profections als erklärbares Timing-Signal, nicht als Vorhersage fester Ereignisse.",
  }),
  glossaryTerm({
    slug: "typ",
    term: "Human-Design-Typ",
    definition: "Der Human-Design-Typ beschreibt eine Grundlogik von Energie, Handlung und Austausch.",
    why: "Typen sind populär, können aber schnell zu starren Labels werden. Entscheidend ist die praktische Selbstbeobachtung.",
    hermetia: "Astrakey liest den Typ als ein Signal unter mehreren und verbindet ihn mit Autorität, Zentren und anderen Systemen.",
  }),
  glossaryTerm({
    slug: "profil-linien",
    term: "Profil-Linien",
    definition: "Profil-Linien sind im Human Design eine Kombination zweier Linien, die Lernstil, Rolle und Entwicklungsmuster symbolisiert.",
    why: "Sie geben Sprache für soziale Rolle, Rückzug, Experiment, Führung oder Erfahrung.",
    hermetia: "Astrakey nutzt Profil-Linien nur mit eigener Sprache und ordnet sie in größere Kernthemen ein.",
  }),
  glossaryTerm({
    slug: "zentren",
    term: "Zentren",
    definition: "Zentren sind im Bodygraph Felder, die mit Energie, Wahrnehmung und Ausdruck verbunden werden.",
    why: "Definierte und offene Zentren werden oft als stabile oder empfängliche Bereiche gelesen.",
    hermetia: "Astrakey vermeidet Absolutheiten und formuliert Zentren als Beobachtungsimpulse für Alltag und Beziehung.",
  }),
  glossaryTerm({
    slug: "kanal",
    term: "Kanal",
    definition: "Ein Kanal verbindet im Human Design zwei Tore und wird als durchgängiges Motiv im Bodygraph gelesen.",
    why: "Kanäle können starke Themen anzeigen, sollten aber nicht ohne Kontext interpretiert werden.",
    hermetia: "Astrakey gruppiert Kanalsignale mit verwandten Themen aus Gene Keys, Astrologie und Fragebögen.",
  }),
  glossaryTerm({
    slug: "tor",
    term: "Tor",
    definition: "Ein Tor ist im Human Design und in verwandten Systemen eine spezifische Position mit eigener Symbolqualität.",
    why: "Tore sind feiner als Typen und Zentren und ermöglichen differenziertere Aussagen.",
    hermetia: "Astrakey nutzt Tore als Theme-Signale und prüft, welche Themen in anderen Systemen wiederkehren.",
  }),
  glossaryTerm({
    slug: "inkarnationskreuz",
    term: "Inkarnationskreuz",
    definition: "Das Inkarnationskreuz ist im Human Design ein übergeordnetes Motiv aus vier zentralen Torpositionen.",
    why: "Es wird oft als Lebens- oder Richtungsthema verstanden, braucht aber besonders vorsichtige Sprache.",
    hermetia: "Astrakey behandelt es als mögliches Seelenweg-Signal, nicht als festgelegten Lebensauftrag.",
  }),
  glossaryTerm({
    slug: "sequenzen",
    term: "Gene-Keys-Sequenzen",
    definition: "Gene-Keys-Sequenzen beschreiben Entwicklungswege rund um Berufung, Beziehung und Wohlstand.",
    why: "Sie sind kontemplativ angelegt und arbeiten mit wiederkehrenden Fragen statt schnellen Aussagen.",
    hermetia: "Astrakey nutzt keine geschützten Originaltexte, sondern eigene, rechtlich vorsichtige Reflexionssprache.",
  }),
  glossaryTerm({
    slug: "goldener-pfad",
    term: "Goldener Pfad",
    definition: "Der Goldene Pfad ist eine Gene-Keys-inspirierte Reise durch zentrale persönliche Themen.",
    why: "Er bündelt Fragen zu Bestimmung, Beziehung und Reifung in einer geführten Struktur.",
    hermetia: "Astrakey übernimmt keine proprietären Texte, sondern nutzt nur eigene Struktur- und Reflexionslogik.",
  }),
  glossaryTerm({
    slug: "enneagramm-typ",
    term: "Enneagramm-Typ",
    definition: "Ein Enneagramm-Typ beschreibt ein wiederkehrendes Motiv aus Aufmerksamkeit, Schutzstrategie und Grundsehnsucht.",
    why: "Der Wert liegt nicht im Label, sondern darin, automatische Muster bewusster zu erkennen.",
    hermetia: "Astrakey nutzt Enneagramm-Typen als Motivationssprache und verbindet sie mit Werten, Beziehung und Schattenarbeit.",
  }),
  glossaryTerm({
    slug: "fluegel",
    term: "Flügel",
    definition: "Ein Flügel ist im Enneagramm ein benachbarter Typ, der den Haupttyp färben kann.",
    why: "Flügel erklären, warum Menschen mit demselben Haupttyp sehr unterschiedlich wirken können.",
    hermetia: "Astrakey verwendet Flügel nur als weiche Nuance und nicht als starre Unterkategorie.",
  }),
  glossaryTerm({
    slug: "tritype",
    term: "Tritype",
    definition: "Tritype beschreibt eine Kombination aus drei Enneagramm-Mustern aus verschiedenen Zentren.",
    why: "Das Modell kann differenzieren, ist aber spekulativer als einfache Selbstauskunft.",
    hermetia: "Astrakey kennzeichnet Tritype als optionale Vertiefung und gewichtet es niedriger als klarere Signale.",
  }),
  glossaryTerm({
    slug: "lebensweg",
    term: "Lebensweg",
    definition: "Der Lebensweg ist eine numerologische Kernzahl aus dem Geburtsdatum.",
    why: "Er wird oft als Grundthema der persönlichen Entwicklung gelesen.",
    hermetia: "Astrakey behandelt den Lebensweg als leicht nachvollziehbares Zahlen-Signal innerhalb der Konvergenz.",
  }),
  glossaryTerm({
    slug: "namenszahl",
    term: "Namenszahl",
    definition: "Die Namenszahl entsteht aus einer Zuordnung von Buchstaben zu Zahlen.",
    why: "Sie ergänzt geburtsdatumsbasierte Numerologie um Sprache, Name und Ausdruck.",
    hermetia: "Astrakey nutzt Namenszahlen nur optional und erklärt, welche Schreibweise verwendet wurde.",
  }),
  glossaryTerm({
    slug: "pinnacle",
    term: "Pinnacle",
    definition: "Pinnacles sind numerologische Lebensphasen, die längere Entwicklungsabschnitte beschreiben.",
    why: "Sie liefern einen anderen Zeithorizont als Tages- oder Jahresimpulse.",
    hermetia: "Astrakey nutzt Pinnacles als Hintergrundthema für Seelenweg und langfristige Reflexion.",
  }),
  glossaryTerm({
    slug: "tzolkin",
    term: "Tzolkin",
    definition: "Der Tzolkin ist ein Kalenderzyklus mit Tagesenergien, Zahlen und Siegeln.",
    why: "Er wird in spirituellen Kontexten als Symbolsystem für Rhythmus und Archetypen genutzt.",
    hermetia: "Astrakey kennzeichnet Tzolkin-Deutungen als kulturell sensibles Symbolmodell und formuliert eigene Texte.",
  }),
  glossaryTerm({
    slug: "kin",
    term: "Kin",
    definition: "Ein Kin ist im Tzolkin eine Kombination aus Zahl und Siegel innerhalb des 260-Tage-Zyklus.",
    why: "Es bietet ein kompaktes Bild für Tagesqualität und persönliches Motiv.",
    hermetia: "Astrakey nutzt Kin-Signale als zusätzliche Perspektive und vermeidet absolute Aussagen über Identität.",
  }),
  glossaryTerm({
    slug: "bazi",
    term: "BaZi",
    definition: "BaZi, auch Vier Säulen genannt, ist ein System aus Jahr, Monat, Tag und Stunde der Geburt.",
    why: "Es arbeitet mit Elementen, Stämmen, Zweigen und zyklischer Zeitlogik.",
    hermetia: "Astrakey nutzt BaZi als eigenes Systemfamilien-Signal und grenzt kulturelle Deutung vorsichtig ab.",
  }),
  glossaryTerm({
    slug: "fuenf-elemente",
    term: "Fünf Elemente",
    definition: "Die Fünf Elemente beschreiben symbolische Qualitäten wie Holz, Feuer, Erde, Metall und Wasser.",
    why: "Sie tauchen in mehreren Systemen auf und eignen sich gut, um Rhythmus, Ausdruck und Balance zu beschreiben.",
    hermetia: "Astrakey zählt Element-Echos nicht mehrfach, sondern prüft, aus welchen Systemfamilien sie stammen.",
  }),
  glossaryTerm({
    slug: "nakshatra",
    term: "Nakshatra",
    definition: "Nakshatras sind Mondhäuser der vedischen Astrologie.",
    why: "Sie geben eine feinere Mondperspektive und werden oft für Temperament, Rhythmus und Motivation genutzt.",
    hermetia: "Astrakey verwendet Nakshatras mit eigener, vorsichtiger Sprache und ohne traditionelle Fachtexte zu kopieren.",
  }),
  glossaryTerm({
    slug: "dasha",
    term: "Dasha",
    definition: "Dasha-Systeme beschreiben in der vedischen Astrologie längere Zeitphasen.",
    why: "Sie eignen sich für biografische Reflexion, dürfen aber nicht als Ereigniszwang verstanden werden.",
    hermetia: "Astrakey nutzt Dashas optional als Timing-Hintergrund und kennzeichnet Unsicherheiten klar.",
  }),
  glossaryTerm({
    slug: "hexagramm",
    term: "Hexagramm",
    definition: "Ein Hexagramm ist im I Ging eine Figur aus sechs Linien mit symbolischer Bedeutung.",
    why: "Hexagramme beschreiben Wandel, Spannung, Richtung und Entscheidungssituationen.",
    hermetia: "Astrakey nutzt I-Ging-Bezüge als Reflexionsmuster und nicht als Orakelentscheidung.",
  }),
  glossaryTerm({
    slug: "linie",
    term: "Linie",
    definition: "Eine Linie ist eine einzelne Position innerhalb eines Hexagramms oder verwandten Symbolsystems.",
    why: "Linien machen ein Thema konkreter und zeigen, an welcher Stelle eines Prozesses ein Motiv gelesen wird.",
    hermetia: "Astrakey nutzt Linien als feine Nuance, wenn sie rechnerisch eindeutig bestimmbar sind.",
  }),
  glossaryTerm({
    slug: "resonanz",
    term: "Resonanz",
    definition: "Resonanz beschreibt, dass eine Aussage, ein Symbol oder ein Muster subjektiv spürbar anschließt.",
    why: "Resonanz ist wertvoll, aber kein Beweis. Sie zeigt, wo Reflexion beginnen kann.",
    hermetia: "Astrakey verbindet Resonanz mit erklärbarer Berechnung und Nutzerfeedback.",
  }),
  glossaryTerm({
    slug: "selbstreflexion",
    term: "Selbstreflexion",
    definition: "Selbstreflexion ist die bewusste Betrachtung eigener Muster, Entscheidungen und Reaktionen.",
    why: "Sie ist das eigentliche Ziel von Astrakey, wichtiger als perfekte Typen oder endgültige Antworten.",
    hermetia: "Astrakey übersetzt komplexe Systeme in Fragen, Sprache und Impulse für diese Selbstreflexion.",
  }),
  glossaryTerm({
    slug: "journaling",
    term: "Journaling",
    definition: "Journaling ist das schriftliche Festhalten von Beobachtungen, Gefühlen und Erkenntnissen.",
    why: "Es macht aus einem Impuls eine eigene Erfahrung und hilft, Muster über Zeit zu erkennen.",
    hermetia: "Astrakey verbindet Tagesimpulse mit Journaling-Fragen, Feedback und Monatsrückblicken.",
  }),
  glossaryTerm({
    slug: "einwilligung",
    term: "Einwilligung",
    definition: "Einwilligung bedeutet, dass eine Person informiert und freiwillig zustimmt, bevor sensible Daten verarbeitet werden.",
    why: "Spirituelle Profile und Beziehungsanalysen können intime Rückschlüsse enthalten.",
    hermetia: "Astrakey baut Einwilligung als Produktprinzip ein, besonders bei Beziehungsauswertungen und besonderen Daten.",
  }),
  glossaryTerm({
    slug: "datenminimierung",
    term: "Datenminimierung",
    definition: "Datenminimierung bedeutet, nur die Daten zu erfassen, die für einen klaren Zweck notwendig sind.",
    why: "Je sensibler ein Profil ist, desto wichtiger wird ein sparsamer Umgang mit Rohdaten und Ableitungen.",
    hermetia: "Astrakey trennt Eingaben, Berechnung und Deutung und soll unnötige Datenpunkte vermeiden.",
  }),
] as const;

export const articles = [
  {
    slug: "spirituelles-profiling",
    title: "Was ist spirituelles Profiling?",
    seoTitle: "Spirituelles Profiling erklärt — Chancen, Grenzen und Astrakeys Ansatz",
    description: "Ein verantwortungsvoller Einstieg in spirituelle Profil-Systeme, AI-Deutung und Selbstreflexion.",
    body:
      "Spirituelles Profiling verbindet Symbolsysteme, Selbstauskunft und Reflexion. Es kann helfen, Worte für innere Muster zu finden, darf aber nicht als Diagnose oder Wahrheitssystem auftreten. Astrakey rahmt Profiling deshalb als Einladung: berechnet, erklärt, begrenzt und transparent. Der Wert liegt nicht darin, Menschen festzulegen, sondern Resonanzräume zu öffnen.",
  },
  {
    slug: "geburtszeit-unbekannt",
    title: "Geburtszeit unbekannt: Was ist trotzdem möglich?",
    seoTitle: "Geburtszeit unbekannt — welche Systeme bei Astrakey trotzdem funktionieren",
    description: "Welche Astrakey-Systeme eine genaue Uhrzeit brauchen und welche auch ohne funktionieren.",
    body:
      "Eine genaue Geburtszeit verbessert Systeme wie Aszendent, Häuser oder Human-Design-Details. Viele andere Perspektiven bleiben dennoch nutzbar: Numerologie, Tzolk'in, persönliche Jahreszyklen, Big Five, RIASEC, Ayurveda-Dosha oder Chronotyp. Astrakey kennzeichnet deshalb, welche Aussagen belastbar sind und welche mit mehr Vorsicht gelesen werden sollten.",
  },
  {
    slug: "ai-selbstreflexion",
    title: "AI in der Selbstreflexion: Chancen und Grenzen",
    seoTitle: "AI in der Selbstreflexion — wie Astrakey transparent mit AI arbeitet",
    description: "Warum AI Texte hilfreich formulieren kann, aber keine Autorität über Menschen haben sollte.",
    body:
      "AI kann komplexe Muster verständlich machen. Sie kann erklären, verdichten und Beispiele formulieren. Gleichzeitig darf sie nicht als unfehlbare Stimme auftreten. Astrakey trennt deshalb Berechnung, Konvergenz und AI-Deutung. Das Modell schreibt auf Grundlage berechneter Fakten, nicht aus freier Spekulation.",
  },
  {
    slug: "warum-ein-system-nicht-reicht",
    title: "Warum ein einzelnes System selten reicht",
    seoTitle: "Warum ein einzelnes System selten reicht — Astrakeys Konvergenz-Ansatz",
    description: "Warum Astrakey Astrologie, Human Design, Fragebögen und weitere Systeme nicht einzeln, sondern im Zusammenspiel liest.",
    body:
      "Ein einzelnes System kann tief wirken, aber es bleibt in seiner eigenen Sprache gefangen. Astrologie sieht Himmelsrhythmen, Numerologie sieht Zahlenmuster, Fragebögen erfassen Selbstauskunft. Astrakey verbindet diese Perspektiven, weil tragfähige Selbsterkenntnis stärker wird, wenn unabhängige Quellen auf ähnliche Themen zeigen.",
  },
  {
    slug: "sensible-spirituelle-daten",
    title: "Warum spirituelle Profildaten sensibel sind",
    seoTitle: "Spirituelle Profildaten und Datenschutz — warum Astrakey Art. 9 ernst nimmt",
    description: "Warum weltanschauliche und spirituelle Ableitungen datenschutzrechtlich besonders sorgfältig behandelt werden müssen.",
    body:
      "Ein spirituelles Profil kann intime Aussagen über Weltbild, Selbstverständnis und Beziehungsmuster enthalten. Deshalb behandelt Astrakey diese Inhalte nicht wie harmlose Marketingdaten. Einwilligung, Verschlüsselung, Export und Löschung sind Teil des Produkts. Besonders bei Beziehungsprofilen gilt: Daten einer zweiten Person brauchen eine eigene, informierte Einwilligung.",
  },
  {
    slug: "tageshoroskop-vs-tagesimpuls",
    title: "Tageshoroskop vs. persönlicher Tagesimpuls",
    seoTitle: "Tageshoroskop vs. Tagesimpuls — warum Astrakey persönlicher arbeitet",
    description: "Der Unterschied zwischen allgemeinen Horoskopen und persönlichen Astrakey-Impulsen.",
    body:
      "Ein Tageshoroskop richtet sich meist an ein Sternzeichen und damit an Millionen Menschen. Ein persönlicher Tagesimpuls beginnt bei deinem eigenen Profil und nutzt Tagesdaten nur als Färbung. Dadurch entsteht kein allgemeiner Spruch, sondern ein Reflexionsangebot, das zu deinen Kernthemen, deinem Rhythmus und deinen wiederkehrenden Mustern passt.",
  },
  {
    slug: "seelenkarte-erstellen",
    title: "Seelenkarte erstellen: was Astrakey anders macht",
    seoTitle: "Seelenkarte erstellen — Systeme, Konvergenz und persönlicher Einstieg",
    description: "Wie aus Geburtsdaten, Selbstauskunft und Systemsignalen eine verständliche Seelenkarte entsteht.",
    body:
      "Eine Seelenkarte entsteht bei Astrakey nicht aus einem einzigen Test. Sie verbindet berechenbare Systeme, vorsichtige Selbstauskunft und die Konvergenz-Engine. Dadurch wird sichtbar, welche Themen mehrfach auftauchen und welche nur leise Nebenmotive sind. Der Einstieg macht neugierig: erst verstehen, dann entscheiden, welche Tiefe im bezahlten Modell sinnvoll ist.",
  },
  {
    slug: "konvergenz-statt-beliebigkeit",
    title: "Konvergenz statt Beliebigkeit",
    seoTitle: "Konvergenz statt Beliebigkeit — warum Astrakey Systeme gewichtet",
    description: "Warum mehrere ähnliche Aussagen nicht automatisch mehr Wahrheit bedeuten.",
    body:
      "Viele spirituelle Systeme wirken überzeugend, weil sie starke Sprache verwenden. Astrakey fragt zusätzlich: Kommt dieses Thema aus wirklich unabhängigen Quellen oder nur aus derselben Datenfamilie? Konvergenz schützt vor Doppelzählung und macht die Deutung belastbarer. Das Ergebnis bleibt Reflexion, wird aber nachvollziehbarer.",
  },
  {
    slug: "was-kostet-spirituelles-profil",
    title: "Was kostet ein gutes spirituelles Profil?",
    seoTitle: "Was kostet ein spirituelles Profil? — kostenloser Einstieg und Premium-Tiefe",
    description: "Warum Astrakey mit einem kostenlosen Einstieg arbeitet und welche Tiefe bezahlte Modelle schaffen.",
    body:
      "Ein gutes Profil braucht Datenqualität, Berechnung, verständliche Texte und verantwortungsvolle Grenzen. Astrakey macht den Einstieg kostenlos erlebbar und bündelt tiefe Ebenen, Beziehungsauswertungen, Tagesbegleitung und langfristige Rückblicke in bezahlten Modellen. Du erlebst erst Resonanz und entscheidest dann bewusst.",
  },
  {
    slug: "warum-geburtsdaten-sensibel-sind",
    title: "Warum Geburtsdaten sensibel sind",
    seoTitle: "Geburtsdaten im spirituellen Profil — Datenschutz, Einwilligung und Grenzen",
    description: "Warum Geburtsdatum, Ort und Uhrzeit mehr sind als harmlose Formularfelder.",
    body:
      "Geburtsdaten wirken neutral, können aber sehr genaue Profilableitungen ermöglichen. In Verbindung mit spirituellen Deutungen entstehen sensible Aussagen über Identität, Weltbild und Beziehung. Astrakey behandelt diese Daten deshalb zweckgebunden, erklärbar und mit klaren Lösch- und Einwilligungswegen.",
  },
  {
    slug: "human-design-ohne-label",
    title: "Human Design ohne starre Labels lesen",
    seoTitle: "Human Design ohne starre Labels — Astrakeys vorsichtiger Ansatz",
    description: "Warum Typ, Autorität und Zentren hilfreich sein können, aber nie die ganze Person erklären.",
    body:
      "Human Design kann starke Resonanzmomente erzeugen. Gleichzeitig besteht die Gefahr, Menschen auf Typ, Autorität oder offene Zentren zu reduzieren. Astrakey nutzt Human Design deshalb als eine Systemfamilie unter mehreren. Was wirklich wichtig wird, zeigt sich erst, wenn andere Perspektiven ähnliche Themen bestätigen.",
  },
  {
    slug: "gene-keys-ohne-kopierte-texte",
    title: "Gene Keys ohne kopierte Texte nutzen",
    seoTitle: "Gene Keys rechtlich sauber nutzen — eigene Sprache, eigene Deutung",
    description: "Wie Astrakey Gene-Keys-inspirierte Muster verwendet, ohne geschützte Originaltexte zu übernehmen.",
    body:
      "Gene Keys sind als kontemplative Sprache wertvoll, aber viele Originalformulierungen sind geschützt. Astrakey übernimmt deshalb keine proprietären Texte. Die Plattform nutzt rechnerische Positionen und formuliert eigene, vorsichtige Reflexionssprache. So bleibt der Nutzen erhalten, ohne rechtlich geschützte Inhalte zu kopieren.",
  },
  {
    slug: "astrologie-mit-erklaerbarkeit",
    title: "Astrologie mit Erklärbarkeit",
    seoTitle: "Astrologie erklärbar nutzen — Berechnung, Gewichtung und Grenzen",
    description: "Warum Astrakey astrologische Aussagen berechnet, gewichtet und in Systemfamilien einordnet.",
    body:
      "Astrologie wird stärker, wenn sie nicht nur poetisch, sondern nachvollziehbar ist. Astrakey trennt Berechnung, Gewichtung und Deutung. Planeten, Häuser und Aspekte werden erst technisch bestimmt, dann als Signale übersetzt und schließlich mit anderen Systemen verglichen.",
  },
  {
    slug: "frageboegen-als-erdung",
    title: "Warum Fragebögen Astrakey erden",
    seoTitle: "Fragebögen in Astrakey — Selbstauskunft als Erdung spiritueller Systeme",
    description: "Wie Big Five, RIASEC, Chronotyp und Dosha-Fragen die Seelenkarte alltagsnäher machen.",
    body:
      "Geburtsbasierte Systeme kennen den Alltag eines Menschen nicht. Fragebögen bringen Selbstauskunft hinein: Energie, Interessen, Werte, Rhythmus und Verhalten. Astrakey nutzt diese Antworten nicht als absolute Wahrheit, sondern als Erdung. Dadurch wird die Seelenkarte praktischer und weniger abgehoben.",
  },
  {
    slug: "beziehungsprofil-mit-consent",
    title: "Beziehungsprofil nur mit Consent",
    seoTitle: "Beziehungsprofil mit Consent — warum Astrakey Einwilligung verlangt",
    description: "Warum Beziehungsauswertungen besonders sensibel sind und nicht heimlich erstellt werden sollten.",
    body:
      "Eine Beziehungsauswertung sagt nicht nur etwas über den Nutzer, sondern auch über eine zweite Person. Deshalb braucht sie besondere Sorgfalt. Astrakey setzt auf informierte Einwilligung, transparente Zwecke und klare Grenzen. Resonanz und Reibung können hilfreich sein, aber niemals ohne Respekt vor der anderen Person.",
  },
  {
    slug: "spirituelle-app-ohne-angstmarketing",
    title: "Spirituelle App ohne Angstmarketing",
    seoTitle: "Spirituelle App ohne Angstmarketing — Astrakeys Produktethik",
    description: "Warum Astrakey keine Angst, Abhängigkeit oder FOMO als Conversion-Hebel nutzen soll.",
    body:
      "Viele spirituelle Produkte verkaufen Dringlichkeit: verpasste Chancen, Schicksal, Warnungen oder karmische Angst. Astrakey funktioniert anders. Die Website darf neugierig machen und zur Anmeldung führen, aber nicht manipulieren. Gute Conversion entsteht durch Klarheit, Resonanz und Vertrauen.",
  },
  {
    slug: "seo-fuer-spirituelle-systeme",
    title: "SEO für spirituelle Systeme",
    seoTitle: "SEO für spirituelle Systeme — warum Astrakey Glossar, Wissen und Vergleiche baut",
    description: "Warum Longtail-Seiten zu Systemen, Begriffen und Vergleichen nachhaltige Reichweite schaffen.",
    body:
      "Menschen suchen selten sofort nach einer neuen Plattform. Sie suchen nach Begriffen: Was ist Human Design? Was bedeutet innere Autorität? Was ist der Unterschied zu Astrologie? Astrakey baut deshalb ein Wissensfundament aus Systemseiten, Glossar, Artikeln und Vergleichen. Jede Seite hilft konkret und führt bei passender Resonanz elegant zur Anmeldung.",
  },
  {
    slug: "aeo-geo-und-ai-suche",
    title: "AEO, GEO und AI-Suche für Astrakey",
    seoTitle: "AEO und GEO für Astrakey — Inhalte für Suchmaschinen und AI-Antworten",
    description: "Wie klare Antworten, FAQ-Struktur und Begriffserklärungen Astrakey in AI-Suchen sichtbarer machen.",
    body:
      "AI-Suchsysteme bevorzugen klare, gut strukturierte Antworten. Astrakey braucht deshalb Seiten, die Begriffe direkt erklären, Grenzen benennen und interne Zusammenhänge sauber verlinken. Glossar, FAQ, Vergleichsseiten und Pillar-Content liefern genau diese Antwortbausteine.",
  },
  {
    slug: "premium-modell-sinnvoll-waehlen",
    title: "Welches Astrakey-Modell passt zu mir?",
    seoTitle: "Astrakey Premium-Modell wählen — wann sich bezahlte Tiefe lohnt",
    description: "Welche Nutzer vom kostenlosen Einstieg profitieren und wann ein bezahltes Modell sinnvoll wird.",
    body:
      "Der kostenlose Einstieg zeigt, ob Astrakey resoniert. Ein bezahltes Modell wird sinnvoll, wenn du mehr Tiefe willst: zusätzliche Ebenen, Beziehungsauswertungen, Tagesimpulse, Journaling-Verlauf oder langfristige Rückblicke. Die Entscheidung bleibt bewusst und gut erklärt.",
  },
  {
    slug: "warum-hermetia-keine-therapie-ist",
    title: "Warum Astrakey keine Therapie ist",
    seoTitle: "Astrakey ist keine Therapie — klare Grenzen für spirituelle Selbstreflexion",
    description: "Warum Astrakey inspirieren kann, aber keine medizinische, psychologische oder therapeutische Behandlung ersetzt.",
    body:
      "Astrakey kann Sprache für Muster geben, aber keine Therapie ersetzen. Die Plattform stellt keine Diagnosen, behandelt keine Erkrankungen und trifft keine Entscheidungen für Nutzer. Diese Grenze ist rechtlich und ethisch wichtig. Gerade deshalb kann Astrakey als Reflexionsraum wertvoll sein.",
  },
] as const;

export const comparisons = [
  {
    slug: "human-design-vs-gene-keys",
    title: "Human Design vs. Gene Keys",
    seoTitle: "Human Design vs. Gene Keys — Unterschiede, Gemeinsamkeiten und Astrakey",
    description: "Beide Systeme teilen eine Grundlage, lesen sie aber unterschiedlich.",
    body:
      "Human Design beschreibt Energie, Entscheidung und Zentren. Gene Keys beschreibt Archetypen, Reifung und Kontemplation. Beide teilen astronomische Grundlagen, aber nicht dieselbe Sprache. Astrakey nutzt beide nicht als doppelte Bestätigung, sondern als verwandte Perspektiven innerhalb einer Systemfamilie.",
  },
  {
    slug: "astrologie-vs-human-design",
    title: "Astrologie vs. Human Design",
    seoTitle: "Astrologie vs. Human Design — was zeigt welches System?",
    description: "Wie sich Horoskop und Bodygraph unterscheiden und warum Astrakey beide nutzt.",
    body:
      "Astrologie zeigt Himmelspositionen als Charakter-, Timing- und Beziehungssprache. Human Design übersetzt ähnliche Rohdaten in Typ, Autorität und Energiezentren. Astrakey nutzt beide Perspektiven, achtet aber darauf, gemeinsame Datenquellen nicht naiv doppelt zu zählen.",
  },
  {
    slug: "big-five-vs-enneagramm",
    title: "Big Five vs. Enneagramm",
    seoTitle: "Big Five vs. Enneagramm — Psychologie und Motivation im Vergleich",
    description: "Big Five misst Persönlichkeitseigenschaften, Enneagramm deutet Motivationsmuster. Astrakey nutzt beide unterschiedlich.",
    body:
      "Big Five beschreibt Persönlichkeitsdimensionen wie Offenheit, Gewissenhaftigkeit oder Neurotizismus. Das Enneagramm fragt stärker nach Motivation und innerem Grundmuster. Astrakey nutzt Big Five als wissenschaftlicheren Erdungsanker und das Enneagramm als reflektierende Typologie, ohne eines der beiden Systeme als alleinige Wahrheit zu behandeln.",
  },
  {
    slug: "tageshoroskop-vs-hermetia",
    title: "Tageshoroskop vs. Astrakey Tagesimpuls",
    seoTitle: "Tageshoroskop vs. Astrakey Tagesimpuls — allgemein oder persönlich?",
    description: "Warum Astrakeys Tagesimpulse vom persönlichen Profil ausgehen und nicht nur vom Sternzeichen.",
    body:
      "Das Tageshoroskop startet meist beim Sonnenzeichen. Astrakey startet beim ganzen Profil: Kernthemen, Konvergenz, Rhythmus und optional Tagesdaten. Deshalb ist der Impuls weniger plakativ, aber persönlicher. Er soll nicht vorhersagen, sondern eine sinnvolle Reflexionsfrage für den Tag anbieten.",
  },
  {
    slug: "astrologie-vs-numerologie",
    title: "Astrologie vs. Numerologie",
    seoTitle: "Astrologie vs. Numerologie — Himmelssprache und Zahlenmuster im Vergleich",
    description: "Astrologie arbeitet mit Himmelspositionen, Numerologie mit Zahlen aus Datum und Name. Astrakey verbindet beide vorsichtig.",
    body:
      "Astrologie ist zeit- und ortsbezogen, Numerologie arbeitet stärker mit einfachen Zahlenmustern. Beide können persönliche Themen beleuchten, aber aus sehr unterschiedlichen Datenquellen. Astrakey nutzt genau diesen Unterschied: Wenn beide unabhängig ähnliche Motive zeigen, steigt die Konvergenz eines Kernthemas.",
  },
  {
    slug: "enneagramm-vs-human-design",
    title: "Enneagramm vs. Human Design",
    seoTitle: "Enneagramm vs. Human Design — Motivation und Energie im Vergleich",
    description: "Das Enneagramm fragt nach innerer Motivation, Human Design nach Energie, Autorität und Bodygraph.",
    body:
      "Das Enneagramm ist stark, wenn es um Schutzstrategien, Sehnsüchte und automatische Muster geht. Human Design beschreibt Energiefluss, Entscheidung und Zentren. Astrakey nutzt beide Systeme unterschiedlich: Motivation und Energie werden getrennt gelesen und erst danach miteinander verbunden.",
  },
  {
    slug: "bazi-vs-astrologie",
    title: "BaZi vs. westliche Astrologie",
    seoTitle: "BaZi vs. westliche Astrologie — Vier Säulen und Horoskop im Vergleich",
    description: "BaZi und westliche Astrologie nutzen Geburtszeit, lesen Zeitqualität aber mit unterschiedlicher Logik.",
    body:
      "BaZi arbeitet mit Säulen, Elementen und zyklischer Kalenderlogik. Westliche Astrologie berechnet Planetenpositionen, Häuser und Aspekte. Beide sind zeitbasierte Systeme, aber sie sprechen verschiedene Sprachen. Astrakey behandelt sie deshalb als getrennte Familien, damit echte Überschneidungen sichtbar werden.",
  },
  {
    slug: "big-five-vs-human-design",
    title: "Big Five vs. Human Design",
    seoTitle: "Big Five vs. Human Design — Selbstauskunft und Geburtsdaten im Vergleich",
    description: "Big Five basiert auf Selbstauskunft, Human Design auf Geburtsdaten. Astrakey nutzt beide als unterschiedliche Evidenzarten.",
    body:
      "Big Five fragt nach erlebtem Verhalten. Human Design berechnet ein symbolisches Profil aus Geburtsdaten. Astrakey verbindet beide, weil sie unterschiedliche Perspektiven liefern: Was zeigt sich im Alltag, und welches Symbolmuster wiederholt sich rechnerisch?",
  },
  {
    slug: "tagesimpuls-vs-journaling-app",
    title: "Astrakey Tagesimpuls vs. Journaling-App",
    seoTitle: "Astrakey Tagesimpuls vs. Journaling-App — Impuls und Reflexion verbinden",
    description: "Klassische Journaling-Apps speichern Gedanken, Astrakey gibt zusätzlich profilbasierte Reflexionsimpulse.",
    body:
      "Eine Journaling-App beginnt meist mit einer leeren Seite. Astrakey beginnt mit einem persönlichen Impuls aus Profil, Rhythmus und Tagesqualität. Der Wert entsteht in der Kombination: ein stimmiger Fokus, eine gute Frage und die Möglichkeit, über Zeit Muster zu erkennen.",
  },
  {
    slug: "seelenkarte-vs-persoenlichkeitstest",
    title: "Seelenkarte vs. Persönlichkeitstest",
    seoTitle: "Seelenkarte vs. Persönlichkeitstest — warum Astrakey mehrschichtig arbeitet",
    description: "Persönlichkeitstests messen Antworten. Eine Seelenkarte verbindet Antworten, Geburtsdaten und Systemkonvergenz.",
    body:
      "Ein Persönlichkeitstest ist oft schnell und klar, aber auf Selbstauskunft begrenzt. Eine Seelenkarte kombiniert Selbstauskunft mit berechneten Systemen und Konvergenz. Dadurch entsteht kein objektives Urteil, sondern ein mehrschichtiges Reflexionsbild.",
  },
  {
    slug: "kostenloses-horoskop-vs-hermetia",
    title: "Kostenloses Horoskop vs. Astrakey",
    seoTitle: "Kostenloses Horoskop vs. Astrakey — warum ein Profil mehr kann",
    description: "Kostenlose Horoskope liefern schnelle Deutung. Astrakey baut daraus eine langfristige, erklärbare Profilreise.",
    body:
      "Ein kostenloses Horoskop kann ein guter Einstieg sein. Astrakey geht weiter: Es verbindet viele Systeme, erklärt Konvergenz, nutzt Feedback und baut daraus eine fortlaufende Reise. Deshalb ist der kostenlose Einstieg nur der Anfang, während bezahlte Modelle echte Tiefe freischalten.",
  },
  {
    slug: "oracle-cards-vs-tagesimpuls",
    title: "Oracle Cards vs. Astrakey Tagesimpuls",
    seoTitle: "Oracle Cards vs. Astrakey Tagesimpuls — Intuition und Profilbezug im Vergleich",
    description: "Oracle Cards arbeiten intuitiv, Astrakey Tagesimpulse verbinden Intuition mit Profil- und Timingdaten.",
    body:
      "Oracle Cards können einen guten Tagesfokus geben, bleiben aber oft zufällig oder deckabhängig. Astrakey nutzt intuitive Motive nur als eine Schicht. Der eigentliche Tagesimpuls entsteht aus deinem Profil, wiederkehrenden Kernthemen und aktuellen Signalen.",
  },
] as const;





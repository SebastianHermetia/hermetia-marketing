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
    seoDescription: "Astrakey verbindet Astrologie, Human Design, Gene Keys, Numerologie und mehr",
    eyebrow: "Mehrsystem-Profil",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein Profil aus vielen Systemen. Nicht nur ein Blick auf dich. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Ein Profil aus vielen Systemen. Nicht nur ein Blick auf dich. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  leistungen: {
    key: "leistungen",
    slug: "leistungen",
    navKey: "leistungen",
    title: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst.",
    seoTitle: "Astrakey Leistungen: ein Profil, viele Module",
    seoDescription: "Vom Mehrsystem-Profil über Systemprofile, Seelenbuch und Be",
    eyebrow: "Produktarchitektur",
    lead: "Astrakey ist eine",
    answer: "Astrakey ist eine",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb4-pipeline-einordnung.svg",
        alt: "Ein Profil, das du berechnen, vergleichen, verstehen, vertiefen und anwenden kannst. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  konvergenz: {
    key: "konvergenz",
    slug: "konvergenz-engine",
    navKey: "konvergenz",
    title: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt.",
    seoTitle: "Astrakey Konvergen",
    seoDescription: "Astrakey",
    eyebrow: "USP und Methode",
    lead: "Du musst keine Mathematik mögen, um das hier",
    answer: "Du musst keine Mathematik mögen, um das hier",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Nicht das lauteste System gewinnt, sondern das Thema, das mehrfach wiederkehrt. als Astrakey Markenbild",
    sections: [],
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
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  systeme: {
    key: "systeme",
    slug: "systeme",
    navKey: "systeme",
    title: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar.",
    seoTitle: "Astrakey Systeme: viele Perspektiven, ein Profil",
    seoDescription: "Astrologie, Human Design, Gene Keys, Numerologie, BaZi, Enneagramm und mehr. Erkunde jedes System ein",
    eyebrow: "Systeme und Gesamtprofil",
    lead: "Astrakey nut",
    answer: "Astrakey nut",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/celestial-layer-orbits.png",
    imageAlt: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb1-familien-modell.svg",
        alt: "Jedes System sieht einen Teil von dir. Gemeinsam werden sie belastbar. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  methodik: {
    key: "methodik",
    slug: "so-entsteht-dein-profil",
    navKey: "methodik",
    title: "Dein Profil entsteht in drei getrennten Schritten.",
    seoTitle: "So entsteht dein Astrakey-Profil: drei Schritte",
    seoDescription: "Berechnen, vergleichen, formulieren. Astrakey trennt diese Schritte. Dein Profil bleibt nachvoll",
    eyebrow: "Methode",
    lead: "Astrakey berechnet, vergleicht und formuliert in klar getrennten Phasen. Diese Trennung ist der Grund, warum dein Profil erklärbar bleibt. Du kannst bei jeder wichtigen Aussage nachsehen, welche Systeme sie tragen und wo Unsicherheit besteht.",
    answer: "AI ist die Sprachebene, nicht die Quelle der Wahrheit. Jede starke Aussage",
    trustline: "AI ist die Sprachebene, nicht die Quelle der Wahrheit. Jede starke Aussage",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/birth-moment-meridian.png",
    imageAlt: "Dein Profil entsteht in drei getrennten Schritten. als Astrakey Markenbild",
    sections: [],
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
    faq: [],
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
    lead: "Das Seelenbuch ist die ausführlichste Form deines Astrakey-Profils. Kein kur",
    answer: "Das Seelenbuch ist die ausführlichste Form deines Astrakey-Profils. Kein kur",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Dein Seelenbuch. Ein erklärbarer Begleiter über dich selbst. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb8-deine-kernthemen.svg",
        alt: "Dein Seelenbuch. Ein erklärbarer Begleiter über dich selbst. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  beziehungen: {
    key: "beziehungen",
    slug: "beziehungen",
    navKey: "beziehungen",
    title: "beziehungen",
    seoTitle: "Be",
    seoDescription: "Astrakey verbindet",
    eyebrow: "Kernmodul · Be",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "beziehungen als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb9-deine-innere-spannung.svg",
        alt: "beziehungen Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  companion: {
    key: "companion",
    slug: "companion",
    navKey: "companion",
    title: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel.",
    seoTitle: "Companion: dein AI-Begleiter fürs Profil",
    seoDescription: "Astrakey Companion erklärt dein Profil aus Quelle, Kontext und Frage. Er nut",
    eyebrow: "Premium · Begleitung",
    lead: "Der Companion, dein Begleiter, hilft dir, dein Mehrsystem-Profil",
    answer: "Der Companion, dein Begleiter, hilft dir, dein Mehrsystem-Profil",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb5-algorithmus-funnel.svg",
        alt: "Der Companion. Dein Begleiter, der dein Profil erklärt. Kein Orakel. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  tagesimpulse: {
    key: "tagesimpulse",
    slug: "tagesimpulse",
    navKey: "tagesimpulse",
    title: "Ein Tagesimpuls aus deinem Profil. Nicht aus deinem Stern",
    seoTitle: "Tagesimpulse: dein Profil im Alltag",
    seoDescription: "Astrakey-Tagesimpulse kommen aus deinem persönlichen Profil und aktuellem Timing, nicht aus deinem Stern",
    eyebrow: "Begleitung im Alltag",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/dawn-clock-of-becoming.png",
    imageAlt: "Ein Tagesimpuls aus deinem Profil. Nicht aus deinem Stern als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  journaling: {
    key: "journaling",
    slug: "journaling",
    navKey: "journaling",
    title: "Dein Profil sagt etwas. Hier antwortest du.",
    seoTitle: "Journaling: dein Profil im Alltag prüfen",
    seoDescription: "Astrakey-Journaling erdet dein Profil im Alltag. Du prüfst Aussagen, hältst Beobachtungen fest und siehst Muster über Wochen. Noti",
    eyebrow: "Reflexionstagebuch und Feedback",
    lead: "Ein Profil kann eine starke erste Resonan",
    answer: "Ein Profil kann eine starke erste Resonan",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Dein Profil sagt etwas. Hier antwortest du. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  profilVerfeinern: {
    key: "profilVerfeinern",
    slug: "profil-verfeinern",
    navKey: "profilVerfeinern",
    title: "Ein gutes Profil bleibt korrigierbar.",
    seoTitle: "Profil verfeinern: Qualität und Kontrolle",
    seoDescription: "Bei Astrakey ist dein Profil korrigierbar. Datenqualität ist sichtbar, Unsicherheit markiert, neue Angaben fließen ein. Export und Löschung jeder",
    eyebrow: "Qualität und Kontrolle",
    lead: "Astrakey tut nicht so, als wäre die erste Aussage endgültig. Wenn Geburts",
    answer: "Astrakey tut nicht so, als wäre die erste Aussage endgültig. Wenn Geburts",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Ein gutes Profil bleibt korrigierbar. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
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
    answer: "Ein schöner Einstieg, nicht der gan",
    trustline: "Ein schöner Einstieg, nicht der gan",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Die Seelenkarte ist die Oberfläche. Das Profil ist der Kern. als Astrakey Markenbild",
    sections: [],
    graphics: [
      {
        src: "/graphics/convergence/abb8-deine-kernthemen.svg",
        alt: "Die Seelenkarte ist die Oberfläche. Das Profil ist der Kern. Grafik",
        caption: "Die Grafik macht die Methode und die Belege hinter dem Profil sichtbar."
      }
    ],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  onboarding: {
    key: "onboarding",
    slug: "profil-starten",
    navKey: "onboarding",
    title: "Berechne dein Profil und sieh, was",
    seoTitle: "Profil kostenlos starten bei Astrakey",
    seoDescription: "Starte dein erklärbares Mehrsystem-Profil kostenlos. Sieh, welche Daten wofür genut",
    eyebrow: "Profil starten",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/birth-moment-meridian.png",
    imageAlt: "Berechne dein Profil und sieh, was als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  preise: {
    key: "preise",
    slug: "preise",
    navKey: "preise",
    title: "Du",
    seoTitle: "Astrakey Preise: Wert der Tiefe, nicht Verknappung",
    seoDescription: "Astrakey ist kostenlos erlebbar. Premium öffnet mehr Systeme, das Seelenbuch und Begleitung. Du",
    eyebrow: "Preise",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Du als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Wähle die Tiefe, die zu deinem Profil passt.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  freePremium: {
    key: "freePremium",
    slug: "kostenlos-vs-premium",
    navKey: "freePremium",
    title: "Resonan",
    seoTitle: "Astrakey: kostenlos vs Premium im Vergleich",
    seoDescription: "Kostenlos prüfst du Resonan",
    eyebrow: "Kostenlos vs Premium",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Premium ansehen",
    primaryCtaHref: "/preise/",
    secondaryCta: "Profil kostenlos starten",
    secondaryCtaHref: "start",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Resonan als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  anwendungsfaelle: {
    key: "anwendungsfaelle",
    slug: "anwendungsfaelle",
    navKey: "anwendungsfaelle",
    title: "Für alle, denen eine ein",
    seoTitle: "Anwendungsfälle: wofür du Astrakey nut",
    seoDescription: "Selbstverständnis, Beruf, Be",
    eyebrow: "Anwendungsfälle",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Für alle, denen eine ein als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  datenSicherheit: {
    key: "datenSicherheit",
    slug: "daten-und-sicherheit",
    navKey: "datenSicherheit",
    title: "Je persönlicher das Profil, desto klarer die Kontrolle.",
    seoTitle: "Astrakey: Daten und Sicherheit",
    seoDescription: "Welche Daten Astrakey nut",
    eyebrow: "Vertrauen und Kontrolle",
    lead: "Astrakey verbindet viele Systeme",
    answer: "Astrakey verbindet viele Systeme",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/atmospheric-data-topography.png",
    imageAlt: "Je persönlicher das Profil, desto klarer die Kontrolle. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  ki: {
    key: "ki",
    slug: "ki-transparenz",
    navKey: "ki",
    title: "ki",
    seoTitle: "Astrakey: AI-Transparen",
    seoDescription: "AI formuliert deine Deutung verständlich, sie entscheidet nicht über die Wahrheit. So trennt Astrakey Berechnung, Konvergen",
    eyebrow: "AI-Transparen",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "ki als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  about: {
    key: "about",
    slug: "ueber-hermetia",
    navKey: "about",
    title: "Viele Systeme sehen wenig. Zusammen sehen sie mehr.",
    seoTitle: "Über Astrakey: die Idee und das Warum",
    seoDescription: "Astrakey verbindet viele begren",
    eyebrow: "Über Astrakey",
    lead: "Astrakey entsteht aus einer einfachen Beobachtung. Jedes spirituelle oder psychologische System kann berühren, aber jedes bleibt ein Ausschnitt. Astrakey verbindet diese Perspektiven ruhig, sorgfältig und erklärbar, damit du dich aus mehreren Blickwinkeln verstehen kannst, ohne dich in ein Etikett",
    answer: "Astrakey entsteht aus einer einfachen Beobachtung. Jedes spirituelle oder psychologische System kann berühren, aber jedes bleibt ein Ausschnitt. Astrakey verbindet diese Perspektiven ruhig, sorgfältig und erklärbar, damit du dich aus mehreren Blickwinkeln verstehen kannst, ohne dich in ein Etikett",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/alchemical-listening-room.png",
    imageAlt: "Viele Systeme sehen wenig. Zusammen sehen sie mehr. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  faq: {
    key: "faq",
    slug: "faq",
    navKey: "faq",
    title: "Klare Antworten",
    seoTitle: "Astrakey: häufige Fragen und Antworten",
    seoDescription: "Antworten",
    eyebrow: "Häufige Fragen",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Klare Antworten als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  wissen: {
    key: "wissen",
    slug: "wissen",
    navKey: "wissen",
    title: "Verstehe Systeme ein",
    seoTitle: "Wissen: Systeme verstehen und verbinden",
    seoDescription: "Der Astrakey Wissensbereich erklärt ein",
    eyebrow: "Ratgeber und Lernumgebung",
    lead: "",
    answer: "Astrakey verbindet mehrere Systeme zu einem erklärbaren persönlichen Profil.",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Verstehe Systeme ein als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  glossar: {
    key: "glossar",
    slug: "glossar",
    navKey: "glossar",
    title: "Klare Begriffe statt beliebiger Vermischung.",
    seoTitle: "Glossar: Astrakey Begriffe klar erklärt",
    seoDescription: "Das Astrakey Glossar erklärt Mehrsystem-Profil, Konvergen",
    eyebrow: "Begriffe und Klarheit",
    lead: "Astrakey verbindet viele Systeme. Damit das nachvoll",
    answer: "Astrakey verbindet viele Systeme. Damit das nachvoll",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/library-of-self-profile.png",
    imageAlt: "Klare Begriffe statt beliebiger Vermischung. als Astrakey Markenbild",
    sections: [
      {
        title: "Warum Astrakey ein eigenes Glossar braucht",
        body: "Spirituelle und psychologische Systeme nut"
      }
    ],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  vergleiche: {
    key: "vergleiche",
    slug: "vergleiche",
    navKey: "vergleiche",
    title: "Nicht welches System recht hat. Was jedes sieht.",
    seoTitle: "Vergleiche: was jedes System wirklich sieht",
    seoDescription: "Astrakey Systemvergleiche",
    eyebrow: "Systeme im Vergleich",
    lead: "Menschen suchen oft nach Unterschieden",
    answer: "Menschen suchen oft nach Unterschieden",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/resonance-instrument.png",
    imageAlt: "Nicht welches System recht hat. Was jedes sieht. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
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
    lead: "Astrakey ist in 24 EU-Sprachen verfügbar. Sprache ist für uns kein nachträglicher Anstrich, sondern Teil der Profilqualität. Ein Profil aus vielen Systemen enthält feine Nuancen, Gren",
    answer: "Astrakey ist in 24 EU-Sprachen verfügbar. Sprache ist für uns kein nachträglicher Anstrich, sondern Teil der Profilqualität. Ein Profil aus vielen Systemen enthält feine Nuancen, Gren",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/celestial-layer-orbits.png",
    imageAlt: "Dein Profil in deiner Sprache. Sprache ist Teil der Qualität. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
    ctaTitle: "Starte mit deinem eigenen Astrakey-Profil.",
    ctaText: "Beginne kostenlos, prüfe Resonanz und entscheide später in Ruhe, ob du mehr Tiefe nutzen möchtest."
  },
  freigaben: {
    key: "freigaben",
    slug: "freigaben",
    navKey: "freigaben",
    title: "Klare Gates für Daten, AI, IP und Recht.",
    seoTitle: "Freigaben: Datenschut",
    seoDescription: "Astrakey",
    eyebrow: "Verantwortung und Gates",
    lead: "Astrakey verbindet viele Systeme, sensible Daten, AI und Be",
    answer: "Astrakey verbindet viele Systeme, sensible Daten, AI und Be",
    trustline: "",
    primaryCta: "Profil kostenlos starten",
    secondaryCta: "",
    image: "/images/hermetia/garden-of-agreements.png",
    imageAlt: "Klare Gates für Daten, AI, IP und Recht. als Astrakey Markenbild",
    sections: [],
    graphics: [],
    faq: [],
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





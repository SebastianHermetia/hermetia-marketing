'use client';

import { useEffect, useState } from 'react';
import { type Locale } from '@/i18n/config';
import { getConsent, setConsent } from '@/lib/analytics/consent';
import { localePath, paths } from '@/lib/links';

type Copy = { title: string; body: string; accept: string; decline: string; privacy: string };

// Eigenes Dict pro Sprache (Muster wie LanguageNotice): Der Banner rendert
// client-seitig, daher greift der HTML-i18n-Patcher nicht — jede Sprache muss
// hier direkt hinterlegt sein.
const copy: Record<Locale, Copy> = {
  de: { title: 'Datenschutz & Cookies', body: 'Wir nutzen Cookies und Analyse-Tools, um diese Seite zu verbessern. Ohne deine Zustimmung werten wir nur anonym und ohne Cookies aus.', accept: 'Akzeptieren', decline: 'Nur Notwendige', privacy: 'Datenschutz' },
  en: { title: 'Privacy & cookies', body: 'We use cookies and analytics to improve this site. Without your consent we only measure anonymously, without cookies.', accept: 'Accept', decline: 'Only essential', privacy: 'Privacy policy' },
  fr: { title: 'Confidentialité et cookies', body: 'Nous utilisons des cookies et des outils d’analyse pour améliorer ce site. Sans votre accord, la mesure reste anonyme et sans cookies.', accept: 'Accepter', decline: 'Essentiels uniquement', privacy: 'Confidentialité' },
  es: { title: 'Privacidad y cookies', body: 'Usamos cookies y herramientas de análisis para mejorar este sitio. Sin tu consentimiento, la medición es anónima y sin cookies.', accept: 'Aceptar', decline: 'Solo esenciales', privacy: 'Privacidad' },
  it: { title: 'Privacy e cookie', body: 'Usiamo cookie e strumenti di analisi per migliorare questo sito. Senza il tuo consenso la misurazione resta anonima e senza cookie.', accept: 'Accetta', decline: 'Solo essenziali', privacy: 'Privacy' },
  nl: { title: 'Privacy en cookies', body: 'We gebruiken cookies en analyse om deze site te verbeteren. Zonder jouw toestemming meten we alleen anoniem en zonder cookies.', accept: 'Accepteren', decline: 'Alleen noodzakelijke', privacy: 'Privacy' },
  pl: { title: 'Prywatność i pliki cookie', body: 'Używamy plików cookie i narzędzi analitycznych, aby ulepszać tę stronę. Bez Twojej zgody mierzymy tylko anonimowo i bez cookies.', accept: 'Akceptuję', decline: 'Tylko niezbędne', privacy: 'Prywatność' },
  pt: { title: 'Privacidade e cookies', body: 'Usamos cookies e ferramentas de análise para melhorar este site. Sem o seu consentimento, a medição é anónima e sem cookies.', accept: 'Aceitar', decline: 'Apenas essenciais', privacy: 'Privacidade' },
  bg: { title: 'Поверителност и бисквитки', body: 'Използваме бисквитки и аналитични инструменти, за да подобряваме сайта. Без вашето съгласие измерваме само анонимно и без бисквитки.', accept: 'Приемам', decline: 'Само необходими', privacy: 'Поверителност' },
  hr: { title: 'Privatnost i kolačići', body: 'Koristimo kolačiće i analitičke alate za poboljšanje stranice. Bez vašeg pristanka mjerimo samo anonimno i bez kolačića.', accept: 'Prihvaćam', decline: 'Samo nužni', privacy: 'Privatnost' },
  cs: { title: 'Soukromí a cookies', body: 'Používáme cookies a analytické nástroje ke zlepšení webu. Bez vašeho souhlasu měříme jen anonymně a bez cookies.', accept: 'Přijmout', decline: 'Jen nezbytné', privacy: 'Soukromí' },
  da: { title: 'Privatliv og cookies', body: 'Vi bruger cookies og analyse til at forbedre siden. Uden dit samtykke måler vi kun anonymt og uden cookies.', accept: 'Accepter', decline: 'Kun nødvendige', privacy: 'Privatliv' },
  et: { title: 'Privaatsus ja küpsised', body: 'Kasutame küpsiseid ja analüütikat saidi parandamiseks. Ilma sinu nõusolekuta mõõdame ainult anonüümselt ja ilma küpsisteta.', accept: 'Nõustun', decline: 'Ainult vajalikud', privacy: 'Privaatsus' },
  fi: { title: 'Tietosuoja ja evästeet', body: 'Käytämme evästeitä ja analytiikkaa sivuston parantamiseen. Ilman suostumustasi mittaamme vain anonyymisti ja ilman evästeitä.', accept: 'Hyväksy', decline: 'Vain välttämättömät', privacy: 'Tietosuoja' },
  el: { title: 'Απόρρητο και cookies', body: 'Χρησιμοποιούμε cookies και εργαλεία ανάλυσης για τη βελτίωση του ιστότοπου. Χωρίς τη συγκατάθεσή σας μετράμε μόνο ανώνυμα και χωρίς cookies.', accept: 'Αποδοχή', decline: 'Μόνο απαραίτητα', privacy: 'Απόρρητο' },
  hu: { title: 'Adatvédelem és sütik', body: 'Sütiket és elemző eszközöket használunk az oldal fejlesztéséhez. Hozzájárulás nélkül csak anonim módon, sütik nélkül mérünk.', accept: 'Elfogadom', decline: 'Csak szükségesek', privacy: 'Adatvédelem' },
  ga: { title: 'Príobháideacht agus fianáin', body: 'Úsáidimid fianáin agus uirlisí anailíse chun an suíomh a fheabhsú. Gan do thoiliú ní dhéanaimid tomhas ach go hanaithnid agus gan fianáin.', accept: 'Glac leis', decline: 'Riachtanais amháin', privacy: 'Príobháideacht' },
  lv: { title: 'Privātums un sīkdatnes', body: 'Mēs izmantojam sīkdatnes un analīzes rīkus, lai uzlabotu vietni. Bez jūsu piekrišanas mērām tikai anonīmi un bez sīkdatnēm.', accept: 'Piekrītu', decline: 'Tikai nepieciešamās', privacy: 'Privātums' },
  lt: { title: 'Privatumas ir slapukai', body: 'Naudojame slapukus ir analizės įrankius svetainei tobulinti. Be jūsų sutikimo matuojame tik anonimiškai ir be slapukų.', accept: 'Sutinku', decline: 'Tik būtini', privacy: 'Privatumas' },
  mt: { title: 'Privatezza u cookies', body: 'Nużaw cookies u għodod analitiċi biex intejbu s-sit. Mingħajr il-kunsens tiegħek inkejlu biss b’mod anonimu u bla cookies.', accept: 'Aċċetta', decline: 'Essenzjali biss', privacy: 'Privatezza' },
  ro: { title: 'Confidențialitate și cookie-uri', body: 'Folosim cookie-uri și instrumente de analiză pentru a îmbunătăți site-ul. Fără acordul tău măsurăm doar anonim și fără cookie-uri.', accept: 'Accept', decline: 'Doar necesare', privacy: 'Confidențialitate' },
  sk: { title: 'Súkromie a cookies', body: 'Používame cookies a analytické nástroje na zlepšenie stránky. Bez vášho súhlasu meriame len anonymne a bez cookies.', accept: 'Prijať', decline: 'Len nevyhnutné', privacy: 'Súkromie' },
  sl: { title: 'Zasebnost in piškotki', body: 'Uporabljamo piškotke in analitična orodja za izboljšanje strani. Brez vašega soglasja merimo le anonimno in brez piškotkov.', accept: 'Sprejmem', decline: 'Samo nujni', privacy: 'Zasebnost' },
  sv: { title: 'Integritet och cookies', body: 'Vi använder cookies och analys för att förbättra sidan. Utan ditt samtycke mäter vi bara anonymt och utan cookies.', accept: 'Acceptera', decline: 'Endast nödvändiga', privacy: 'Integritet' },
};

/** DSGVO/TTDSG-Consent-Banner. Erscheint, solange keine Entscheidung gefallen
 *  ist. „Akzeptieren" schaltet PostHog auf das volle, persistente Tracking;
 *  „Nur Notwendige" belässt es beim anonymen, cookielosen Modus. */
export function ConsentBanner({ locale }: { locale: Locale }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!getConsent().decided) setShow(true);
  }, []);

  if (!show) return null;
  const t = copy[locale] ?? copy.en;

  const decide = (analytics: boolean) => {
    setConsent({ analytics });
    setShow(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t.title}
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/30 bg-white/95 shadow-soft backdrop-blur"
    >
      <div className="wrap flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-[640px] text-[13.5px] text-aubergine">
          <p className="font-semibold">{t.title}</p>
          <p className="mt-0.5 text-aubergine/75">
            {t.body}{' '}
            <a className="underline hover:text-gold" href={localePath(locale, paths.datenschutz)}>
              {t.privacy}
            </a>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button type="button" className="btn btn-ghost" onClick={() => decide(false)}>
            {t.decline}
          </button>
          <button type="button" className="btn btn-primary" onClick={() => decide(true)}>
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  );
}

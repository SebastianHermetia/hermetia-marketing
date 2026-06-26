'use client';

import { getConsent } from './consent';

// Gleiches PostHog-Projekt wie die App: denselben Project-API-Key + EU-Host
// setzen, dann teilen Marketing und App ein Projekt (durchgängiger Funnel).
const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com';

type PosthogLike = {
  init: (key: string, opts: Record<string, unknown>) => void;
  capture: (event: string, props?: Record<string, unknown>) => void;
  set_config: (opts: Record<string, unknown>) => void;
  opt_in_capturing: () => void;
};

// Modul-internes Singleton statt window.posthog: kein global exponiertes,
// opt-in-fähiges Objekt → keine Consent-Bypass-/XSS-Angriffsfläche.
let instance: PosthogLike | null = null;
let initPromise: Promise<PosthogLike | null> | null = null;

const KEEP_QUERY = new Set([
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'source',
]);

/** URL auf Marketing-Attribution reduzieren: nur utm_* und source behalten,
 *  alle anderen Query-Parameter (z. B. künftige Token/PII) und Hash entfernen. */
function cleanUrl(raw: unknown): unknown {
  if (typeof raw !== 'string') return raw;
  try {
    const u = new URL(raw);
    const keep = new URLSearchParams();
    u.searchParams.forEach((v, k) => {
      if (KEEP_QUERY.has(k)) keep.set(k, v);
    });
    const qs = keep.toString();
    return `${u.origin}${u.pathname}${qs ? `?${qs}` : ''}`;
  } catch {
    return raw;
  }
}

/** Schaltet das Tracking-Niveau passend zum aktuellen Consent — reihenfolge-
 *  unabhängig (greift auch, wenn der Nutzer vor abgeschlossenem Init klickt). */
function applyConsent(ph: PosthogLike): void {
  if (getConsent().analytics) {
    // Volles Programm: persistente Person-Profile + expliziter Opt-in.
    ph.set_config({ persistence: 'localStorage+cookie' });
    ph.opt_in_capturing();
  } else {
    // Cookielos/anonym: keine Cookies/localStorage.
    ph.set_config({ persistence: 'memory' });
  }
}

/** Initialisiert posthog-js genau einmal. Vor Consent strikt cookielos und
 *  ohne Drittabrufe (keine Feature-Flags/Surveys/External-JS) — nur anonyme
 *  Pageviews/Herkunft. Nach Consent schaltet applyConsent auf persistent. */
export function ensurePosthog(): Promise<PosthogLike | null> {
  if (typeof window === 'undefined' || !KEY) return Promise.resolve(null);
  if (!initPromise) {
    initPromise = import('posthog-js').then(({ default: posthog }) => {
      const consented = getConsent().analytics;
      posthog.init(KEY, {
        api_host: HOST,
        // Pageviews feuern wir manuell bei jedem Routenwechsel (App Router).
        capture_pageview: false,
        capture_pageleave: true,
        // Keine Autocapture: auf einer sensiblen Marke keine geklickten
        // Inhalts-Texte erfassen. Pageviews + Referrer/Geo/Gerät genügen.
        autocapture: false,
        disable_session_recording: true,
        // §25 TDDDG: vor (und auch ohne) Consent keinerlei nicht-zwingende
        // Endgeräte-Zugriffe/Drittabrufe auslösen. advanced_disable_decide
        // unterbindet den Remote-Config-/flags-Abruf, der sonst die Persistenz
        // (Cookie) re-initialisiert — so bleibt der Pre-Consent-Modus cookielos.
        advanced_disable_decide: true,
        advanced_disable_flags: true,
        disable_surveys: true,
        advanced_disable_feature_flags: true,
        advanced_disable_feature_flags_on_first_load: true,
        disable_external_dependency_loading: true,
        person_profiles: 'identified_only',
        // Vor Consent cookielos; nach Consent persistent (siehe applyConsent).
        persistence: consented ? 'localStorage+cookie' : 'memory',
        // Anonyme Pageviews sind ohne Banner erlaubt → capturing bleibt an.
        opt_out_capturing_by_default: false,
        // URLs auf utm_*/source reduzieren (Token/PII niemals an Analytics).
        sanitize_properties: (props: Record<string, unknown>) => {
          if ('$current_url' in props) props.$current_url = cleanUrl(props.$current_url);
          if ('$referrer' in props) props.$referrer = cleanUrl(props.$referrer);
          return props;
        },
      });
      instance = posthog as unknown as PosthogLike;
      // Consent reihenfolge-unabhängig anwenden (Klick vor/nach Init).
      applyConsent(instance);
      return instance;
    });
  }
  return initPromise;
}

/** Liefert die geladene Instanz oder null (kein Key / noch nicht initialisiert). */
export function getPosthog(): PosthogLike | null {
  return instance;
}

/** Wendet den aktuellen Consent auf die laufende Instanz an (No-op vor Init). */
export function syncConsent(): void {
  if (instance) applyConsent(instance);
}

/** Feuert eine Pageview mit der bereinigten aktuellen URL. */
export function capturePageview(): void {
  instance?.capture('$pageview', { $current_url: window.location.href });
}

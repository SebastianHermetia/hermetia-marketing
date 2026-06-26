'use client';

import { getPosthog } from './posthogClient';

// Erlaubte Marketing-Events (Allowlist). Nichts außerhalb dieser Liste wird
// gesendet — verhindert versehentliches Leaken.
const ALLOWED = new Set<string>([
  'marketing_page_viewed',
  'marketing_cta_clicked',
  'pricing_viewed',
  'content_page_viewed',
  'locale_changed',
  'app_handoff_started',
  'beta_access_page_viewed',
  'beta_access_submitted',
]);

// Property-Keys mit potenziell sensiblen Inhalten → niemals senden.
const FORBIDDEN = [
  /birth/i, /journal/i, /prompt/i, /email/i, /token/i, /password/i, /secret/i,
  /free_?text/i, /generated/i, /name/i, /phone/i, /\btel\b/i, /dob/i, /address/i,
  /\baddr\b/i, /\bip\b/i, /question/i, /answer/i,
];

function sanitize(props?: Record<string, unknown>): Record<string, unknown> {
  if (!props) return {};
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (FORBIDDEN.some((re) => re.test(k))) continue;
    if (v !== null && typeof v === 'object') continue;
    if (typeof v === 'string' && (v.length > 300 || v.includes('@'))) continue;
    out[k] = v;
  }
  return out;
}

/** Sendet ein erlaubtes Marketing-Event über die geladene PostHog-Instanz.
 *  No-op, solange PostHog (noch) nicht initialisiert oder das Event unbekannt
 *  ist. Best-effort, blockiert nie. Funktioniert auch im anonymen Modus. */
export function track(event: string, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  if (!ALLOWED.has(event)) return;
  const ph = getPosthog();
  if (!ph) return;
  const uiLocale = (typeof document !== 'undefined' && document.documentElement.lang) || undefined;
  ph.capture(event, sanitize({ ...(uiLocale ? { ui_locale: uiLocale } : {}), ...properties }));
}

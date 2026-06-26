'use client';

// Consent-Status für das Marketing (eigenständig; die App nutzt aktuell ein
// separates, cookieloses Tracking und wird gerade auf dasselbe Modell
// umgebaut). Default EU: alles außer "necessary" = denied. Bis zur Entscheidung
// läuft PostHog cookielos/anonym; nach Zustimmung volles, persistentes Tracking.
// Key/Event-Namen sind bewusst mit der App-Konvention identisch gehalten.
export type ConsentState = {
  analytics: boolean;
  decided: boolean;
};

const KEY = 'astrakey_consent';
const DEFAULT: ConsentState = { analytics: false, decided: false };

export function getConsent(): ConsentState {
  if (typeof window === 'undefined') return DEFAULT;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...DEFAULT, ...(JSON.parse(raw) as Partial<ConsentState>) };
  } catch {
    /* ignore */
  }
  return DEFAULT;
}

export function setConsent(patch: Partial<ConsentState>): ConsentState {
  const next: ConsentState = { ...getConsent(), ...patch, decided: true };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* ignore */
  }
  try {
    window.dispatchEvent(new CustomEvent('astrakey-consent', { detail: next }));
  } catch {
    /* ignore */
  }
  return next;
}

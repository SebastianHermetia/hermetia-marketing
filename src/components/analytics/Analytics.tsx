'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { capturePageview, ensurePosthog, syncConsent } from '@/lib/analytics/posthogClient';

/** Lädt PostHog (sofern Key gesetzt), feuert Pageviews bei Routenwechsel und
 *  reagiert auf Consent-Änderungen. Rendert nichts. */
export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const onConsent = () => syncConsent();
    window.addEventListener('astrakey-consent', onConsent);
    return () => window.removeEventListener('astrakey-consent', onConsent);
  }, []);

  useEffect(() => {
    let cancelled = false;
    void ensurePosthog().then(() => {
      if (!cancelled) capturePageview();
    });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  return null;
}

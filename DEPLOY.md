# Deploy — Hermetia Marketing (Vercel)

Statischer Export (`output: "export"` → `/out`), deployt über **Vercel** auf **Subdomain**.

> **Warum Vercel statt Cloudflare Pages?**  
> CF Pages hat ein hartes Limit von 20.000 Dateien. Diese Site erzeugt ~33.665 Dateien  
> (24 Locales × Seiten × RSC-`.txt`-Payloads). Vercel hat kein File-Limit für statische Exports.

## Vercel — Projektdaten

| Punkt | Wert |
|---|---|
| **Organisation** | Hermetia (GitHub Org) |
| **Repo** | `github.com/SebastianHermetia/hermetia-marketing` (muss **public** sein) |
| **Vercel-Framework** | `Other` (**nicht** "Next.js") — statischer Export erzeugt kein `.next/routes-manifest.json` |
| **Build-Command** | `npm run build:i18n:cached` ⚠️ **nicht** `npm run build` (sonst keine Übersetzungen) |
| **Output-Verzeichnis** | `out` |
| **Deploy-Trigger** | Auto-deploy bei Push auf `main` |
| **Custom Domain** | `hermetiastart.digital-expert.de` |

## ENV-Variablen in Vercel

| Variable | Wert (Testphase) | Beim Launch |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://hermetiastart.digital-expert.de` | finale Domain |
| `NEXT_PUBLIC_APP_URL` | `https://hermetia.digital-expert.de` | bleibt gleich |
| `NEXT_PUBLIC_POSTHOG_KEY` | _(leer = aus)_ | **gleicher Project-API-Key wie die App** |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://eu.i.posthog.com` | bleibt gleich |

> **PostHog = gleiches Konto wie die App.** Den Project-API-Key aus der App
> (`NEXT_PUBLIC_POSTHOG_KEY`) hier 1:1 eintragen → Marketing- und App-Events
> teilen ein Projekt (durchgängiger Funnel). Vor Consent läuft PostHog cookielos
> und anonym; nach Zustimmung im Banner volles, persistentes Tracking.

ENV-Variablen setzen: Vercel-Dashboard → Project → Settings → Environment Variables.

## Cloudflare DNS — wichtige Regel

Der CNAME `hermetiastart` → `cname.vercel-dns.com` muss **grau** (DNS-only) geschaltet sein,  
**nicht orange** (Proxied). Wenn Cloudflare als Proxy dazwischensteht, kann Vercel kein  
SSL-Zertifikat ausstellen → 525-Fehler.

```
hermetiastart   CNAME   cname.vercel-dns.com   [DNS-only / grau]
```

## Security-Headers

Headers werden über `vercel.json` (Repo-Root) gesetzt — **nicht** über `public/_headers`  
(das ist CF-Pages-Format und wird von Vercel ignoriert).

Aktuell in `vercel.json`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Repo muss public bleiben

Vercel Hobby-Plan deployt keine privaten Repos aus GitHub-Organisationen automatisch.  
Das Repo `SebastianHermetia/hermetia-marketing` muss auf GitHub **öffentlich** bleiben.  
Sensible Daten (Secrets, API-Keys) gehören ausschließlich in Vercel ENV, nicht ins Repo.

## Workflow (normal)

```bash
# lokal entwickeln
npm run dev

# vor dem Push: Build testen (inkl. i18n-Übersetzer + Leak-Check)
npm run build:i18n:cached   # → /out/ enthält die statischen, übersetzten Dateien
npm run check:i18n:untranslated   # schlägt fehl, wenn deutscher Text in andere Sprachen leakt

# Push → Vercel baut und deployt automatisch (~1–2 Min)
git add -p
git commit -m "feat: ..."
git push origin main
```

## Domain-Umzug zum Launch

`NEXT_PUBLIC_SITE_URL` in Vercel ENV auf die finale Domain setzen und Custom Domain in Vercel  
umstellen. CNAME in Cloudflare aktualisieren. Kein Code-Umbau nötig.

## Decap CMS (optional)

`public/admin/config.yml` ist auf `repo: SebastianHermetia/hermetia-marketing` gesetzt.  
GitHub-OAuth-App für Decap einrichten. Lokal testen: `npx decap-server` + `local_backend: true`.

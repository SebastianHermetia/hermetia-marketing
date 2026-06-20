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
| **Build-Command** | `npm run build` |
| **Output-Verzeichnis** | `out` |
| **Deploy-Trigger** | Auto-deploy bei Push auf `main` |
| **Custom Domain** | `hermetiastart.digital-expert.de` |

## ENV-Variablen in Vercel

| Variable | Wert (Testphase) | Beim Launch |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://hermetiastart.digital-expert.de` | finale Domain |
| `NEXT_PUBLIC_APP_URL` | `https://hermetia.digital-expert.de` | bleibt gleich |

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
- `X-Robots-Tag: noindex, nofollow` (in der Testphase — vor Launch entfernen)
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

# vor dem Push: Build testen
npm run build   # → /out/ enthält die statischen Dateien

# Push → Vercel baut und deployt automatisch (~1–2 Min)
git add -p
git commit -m "feat: ..."
git push origin main
```

## Domain-Umzug zum Launch

`NEXT_PUBLIC_SITE_URL` in Vercel ENV auf die finale Domain setzen und Custom Domain in Vercel  
umstellen. CNAME in Cloudflare aktualisieren. Kein Code-Umbau nötig.  
`X-Robots-Tag: noindex, nofollow` aus `vercel.json` entfernen.

## Decap CMS (optional)

`public/admin/config.yml` ist auf `repo: SebastianHermetia/hermetia-marketing` gesetzt.  
GitHub-OAuth-App für Decap einrichten. Lokal testen: `npx decap-server` + `local_backend: true`.

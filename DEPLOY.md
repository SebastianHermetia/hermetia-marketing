# Deploy — Hermetia Marketing (Cloudflare Pages)

Statischer Export (`output: "export"` → `/out`), deployt über **Cloudflare Pages** auf einer **Subdomain** (App bleibt auf `hermetia.digital-expert.de` unangetastet; Root-Umzug erst zum Launch).

## Einmalig (von dir auf GitHub + Cloudflare)

1. **GitHub-Repo anlegen** (privat): `SebastianHermetia/hermetia-marketing`
   – leer lassen (kein README/gitignore), dann Push (s. u.).
   – Push-Zugang für mich: entweder `sebastianb1309-cpu` als Collaborator (write) hinzufügen
     **oder** den Deploy-Key `~/.ssh/hermetia_deploy.pub` als Deploy-Key mit Schreibrecht eintragen.

2. **Cloudflare Pages** (Dashboard → Workers & Pages → Create → Pages → Connect to Git):
   - Repository: `SebastianHermetia/hermetia-marketing`
   - Framework preset: **None / Next.js (Static HTML Export)**
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:**
     - `NEXT_PUBLIC_SITE_URL` = `https://hermetiastart.digital-expert.de` (aktuelle Test-Subdomain)
     - `NEXT_PUBLIC_APP_URL`  = `https://hermetia.digital-expert.de`
     - `NODE_VERSION` = `22` (oder via `.node-version`)
   - **Custom domain:** `hermetiastart.digital-expert.de` → CNAME auf das `*.pages.dev`-Ziel (Cloudflare richtet das beim Hinzufügen der Custom Domain automatisch ein).

> **Noindex in der Testphase:** `public/_headers` setzt `X-Robots-Tag: noindex, nofollow` für die gesamte Seite, damit die Test-Subdomain nicht von Google indexiert wird. robots.txt erlaubt bewusst weiter Crawling (sonst sähe Google den noindex-Header nicht). **Zum echten Launch entfernen/anpassen.**

3. **Decap CMS** (optional, nach Launch): in `public/admin/config.yml` ist `repo: SebastianHermetia/hermetia-marketing` schon gesetzt; GitHub-OAuth-App für Decap einrichten.

## Push (sobald Repo existiert)

```bash
cd hermetia-marketing
git push -u origin main
```
Remote `origin` ist bereits auf `https://github.com/SebastianHermetia/hermetia-marketing.git` gesetzt.
(SSH-Alternative über den hermetia-Deploy-Key: `git remote set-url origin git@github-hermetia:SebastianHermetia/hermetia-marketing.git`.)

## Domain-Umzug zum Launch

Marketing von der Subdomain auf die Root-Domain heben: `NEXT_PUBLIC_SITE_URL` auf die finale Domain ändern, Custom Domain in Cloudflare Pages umstellen, App-Routing (Onboarding/Login) entsprechend anpassen. Kein Code-Umbau am Marketing-Repo nötig außer der ENV.

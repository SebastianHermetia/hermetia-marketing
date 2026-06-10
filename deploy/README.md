# Vorschau-Deploy (Cloudflare Tunnel, Hermetia-Server)

Statische Marketing-Seite hinter dem bestehenden Cloudflare-Tunnel auf `95.216.218.48`
(token-basiert, dashboard-managed) ausliefern — konsistent mit den übrigen
`*.digital-expert.de`-Diensten.

## Deploy (von lokal)

```bash
# 1) Bauen (erzeugt out/, ist gitignored)
npm run build

# 2) Dateien auf den Server (Zielordner /opt/hermetia-marketing)
ssh -i ~/.ssh/codex_cx33 root@95.216.218.48 'mkdir -p /opt/hermetia-marketing'
scp -i ~/.ssh/codex_cx33 deploy/docker-compose.preview.yml root@95.216.218.48:/opt/hermetia-marketing/docker-compose.yml
scp -i ~/.ssh/codex_cx33 deploy/nginx.conf               root@95.216.218.48:/opt/hermetia-marketing/nginx.conf
rsync -az -e 'ssh -i ~/.ssh/codex_cx33' --delete out/    root@95.216.218.48:/opt/hermetia-marketing/out/

# 3) Container (neu) starten
ssh -i ~/.ssh/codex_cx33 root@95.216.218.48 'cd /opt/hermetia-marketing && docker compose up -d'
```

Update später = Schritte 1–3 erneut (rsync ersetzt `out/`, `docker compose up -d` lädt nginx neu).

## Tunnel-Route (einmalig, Cloudflare-Dashboard)

Tunnel des Hermetia-Servers → **Published application routes** → **Add**:

| Hostname | Path | Service |
|----------|------|---------|
| `hermetiastart.digital-expert.de` | `*` | `http://localhost:3070` |

Cloudflare legt den DNS-Eintrag automatisch an. SSL via Universal-Cert (einstufige Subdomain).

## noindex
`nginx.conf` setzt `X-Robots-Tag: noindex, nofollow` für die gesamte Seite (Testphase).
Zum echten Launch entfernen. (Das `public/_headers` greift nur auf Cloudflare Pages, hier irrelevant.)

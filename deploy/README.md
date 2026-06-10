# Vorschau-Deploy (Cloudflare Tunnel, Hermetia-Server)

Statische Marketing-Seite hinter dem bestehenden Cloudflare-Tunnel auf `95.216.218.48`
(token-basiert, dashboard-managed) ausliefern — konsistent mit den übrigen
`*.digital-expert.de`-Diensten.

## Erstdeploy (von lokal)

```bash
# 1) Bauen (erzeugt out/, ist gitignored)
npm run build

# 2) Configs + Build auf den Server (Zielordner /opt/hermetia-marketing)
SSHK=~/.ssh/codex_cx33
ssh -i $SSHK root@95.216.218.48 'mkdir -p /opt/hermetia-marketing'
scp -i $SSHK deploy/docker-compose.preview.yml root@95.216.218.48:/opt/hermetia-marketing/docker-compose.yml
scp -i $SSHK deploy/nginx.conf                 root@95.216.218.48:/opt/hermetia-marketing/nginx.conf
# out/ als tar-Stream (kein rsync auf Windows/Git-Bash); Inhalt IN-PLACE ersetzen,
# damit der Verzeichnis-Inode erhalten bleibt (sonst entkoppelt der Bind-Mount → 404):
tar czf - out | ssh -i $SSHK root@95.216.218.48 \
  'cd /opt/hermetia-marketing && mkdir -p out && find out -mindepth 1 -delete && tar xzf -'

# 3) Container starten
ssh -i $SSHK root@95.216.218.48 'cd /opt/hermetia-marketing && docker compose up -d'
```

## Update (neue Inhalte)

```bash
npm run build
SSHK=~/.ssh/codex_cx33
tar czf - out | ssh -i $SSHK root@95.216.218.48 \
  'cd /opt/hermetia-marketing && find out -mindepth 1 -delete && tar xzf -'
# nginx serviert die gemounteten Dateien live — kein Restart nötig.
```

> **WICHTIG:** Niemals `rm -rf out` verwenden — das löscht das vom Container
> gemountete Verzeichnis und entkoppelt den Bind-Mount (Container liefert dann 404).
> Stattdessen `find out -mindepth 1 -delete` (leert den Inhalt, behält das Verzeichnis).
> Falls doch mal entkoppelt: `docker compose up -d --force-recreate`.

## Tunnel-Route (einmalig, Cloudflare-Dashboard)

Tunnel des Hermetia-Servers → **Published application routes** → **Add**:

| Hostname | Path | Service |
|----------|------|---------|
| `hermetiastart.digital-expert.de` | `*` | `http://localhost:3070` |

Cloudflare legt den DNS-Eintrag automatisch an. SSL via Universal-Cert (einstufige Subdomain).

## noindex
`nginx.conf` setzt `X-Robots-Tag: noindex, nofollow` für die gesamte Seite (Testphase).
Zum echten Launch entfernen. (Das `public/_headers` greift nur auf Cloudflare Pages, hier irrelevant.)

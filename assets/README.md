# assets/

Quelldateien, die **nicht** ausgeliefert werden. Alles hier bleibt im Repo, landet aber nicht im statischen Export — im Gegensatz zu `public/`, dessen Inhalt vollständig mit deployt wird.

## `source-images/`

Die Original-PNGs der Brand-Grafiken, 24 MB. Ausgeliefert wird die WebP-Fassung unter `public/images/hermetia/`, zusammen 908 KB.

Vorher lagen die Originale in `public/` und wurden mit ausgeliefert. Das LCP-Bild der Startseite war dadurch allein 1,9 MB groß, das Seitengewicht lag bei ~2,6 MB — bei einem bestätigten Rankingfaktor und 83 % Bounce Rate.

### Neues Bild hinzufügen

1. Original als PNG oder JPEG nach `assets/source-images/` legen
2. `npm run images:optimize`
3. Im Code die `.webp`-Datei unter `/images/hermetia/<name>.webp` referenzieren

Das Skript skaliert auf maximal 1200 px Kantenlänge (deckt 2×-Displays bei ~640 px Darstellungsbreite ab) und schreibt WebP mit Qualität 78. Bereits aktuelle Zieldateien überspringt es; `--force` erzwingt die Neuberechnung.

### Warum WebP ohne PNG-Fallback

Alle relevanten Browser unterstützen WebP seit 2020, Safari ab Version 14. Ein `<picture>`-Element mit PNG-Fallback würde die Originale wieder in den Export holen und damit genau das Problem zurückbringen, das die Umstellung löst.

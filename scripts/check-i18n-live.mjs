import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));

function option(name, fallback) {
  const prefix = `--${name}=`;
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1];
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  return inline ? inline.slice(prefix.length) : fallback;
}

function stripHtml(value) {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function extractComponents(html) {
  return {
    metadata: [
      ...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi),
      ...html.matchAll(/<meta[^>]+(?:name|property)=["'](?:description|og:title|og:description|twitter:title|twitter:description)["'][^>]*>/gi),
    ]
      .map((match) => match[0])
      .join("\n"),
    navigation: (html.match(/<header[\s\S]*?<\/header>/i) ?? [""])[0],
    buttons_links: [...html.matchAll(/<a\b[\s\S]*?<\/a>|<button\b[\s\S]*?<\/button>/gi)].map((match) => match[0]).join("\n"),
    body: (html.match(/<main[\s\S]*?<\/main>/i) ?? [html])[0],
    footer: (html.match(/<footer[\s\S]*?<\/footer>/i) ?? [""])[0],
    graphics: [...html.matchAll(/<(?:img|svg|figure)\b[\s\S]*?(?:<\/(?:svg|figure)>|>)/gi)].map((match) => match[0]).join("\n"),
  };
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "user-agent": "Hermetia-i18n-live-check/1.0" } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

function escapeCsv(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

const locale = option("locale", "en");
const phase = option("phase", "p0");
const base = option("base", "https://hermetiastart.digital-expert.de").replace(/\/$/, "");
const auditDir = option("out-dir", join(root, "i18n-audits"));
const selectedLocales = locale === "all" ? config.locales : locale.split(",").map((item) => item.trim()).filter(Boolean);
const selectedPhases = phase === "all" ? Object.keys(config.phaseRoutes) : phase.split(",").map((item) => item.trim()).filter(Boolean);

function isPublicRouteDir(name) {
  return !name.startsWith(".") && !name.startsWith("_") && !name.includes("$");
}

if (selectedLocales.some((item) => !config.locales.includes(item))) {
  console.error(`Unknown locale in --locale=${locale}.`);
  process.exit(1);
}
if (selectedPhases.some((item) => !config.phaseRoutes[item])) {
  console.error(`Unknown phase in --phase=${phase}.`);
  process.exit(1);
}

function discoverDetailRoutes(localeName, prefix) {
  const dir = join(root, "out", localeName, ...prefix.split("/").filter(Boolean));
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && isPublicRouteDir(entry.name))
    .map((entry) => `${prefix}${entry.name}/`);
}

function routesFor(localeName, phases) {
  const routes = new Set(phases.flatMap((phaseName) => config.phaseRoutes[phaseName]));
  for (const prefix of Object.keys(config.detailCounts)) {
    for (const route of discoverDetailRoutes(localeName, prefix)) routes.add(route);
  }
  return [...routes].sort();
}

const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
const rows = [];

try {
  await fetchText(`${base}/sitemap.xml`);
} catch (error) {
  console.error(`Could not load sitemap: ${error.message}`);
  process.exit(1);
}

for (const localeName of selectedLocales) {
  for (const route of routesFor(localeName, selectedPhases)) {
    const url = `${base}/${localeName}${route}`;
    try {
      const html = await fetchText(url);
      const text = stripHtml(html);
      const componentIssues = Object.entries(extractComponents(html)).flatMap(([name, componentHtml]) => {
        if (name === "graphics") return [];
        return stripHtml(componentHtml) ? [] : [`empty_${name}`];
      });
      const missing = [];
      const forbidden = localeName === "de" || localeName === "en" ? [] : config.forbiddenLocalizedMarkers.filter((marker) => text.includes(marker));
      rows.push({
        locale: localeName,
        phase: selectedPhases.join("+"),
        route,
        url,
        status: missing.length || forbidden.length || componentIssues.length ? "fail" : "pass",
        missing,
        forbidden,
        componentIssues,
      });
    } catch (error) {
      rows.push({
        locale: localeName,
        phase: selectedPhases.join("+"),
        route,
        url,
        status: "fail",
        missing: [],
        forbidden: [],
        componentIssues: [`fetch_error: ${error.message}`],
      });
    }
  }
}

if (!existsSync(auditDir)) mkdirSync(auditDir, { recursive: true });

const basename = `i18n-live-check-${locale.replace(/,/g, "-")}-${phase.replace(/,/g, "-")}-${timestamp}`;
const csvPath = join(auditDir, `${basename}.csv`);
const jsonPath = join(auditDir, `${basename}.json`);
const mdPath = join(auditDir, `${basename}.md`);
const failures = rows.filter((row) => row.status === "fail");

writeFileSync(
  csvPath,
  [
    "locale,phase,route,url,status,missing,forbidden,component_issues",
    ...rows.map((row) =>
      [row.locale, row.phase, row.route, row.url, row.status, row.missing.join(" | "), row.forbidden.join(" | "), row.componentIssues.join(" | ")]
        .map(escapeCsv)
        .join(","),
    ),
  ].join("\n"),
);
writeFileSync(jsonPath, JSON.stringify({ base, locale, phase, checkedAt: new Date().toISOString(), rows }, null, 2));
writeFileSync(
  mdPath,
  [
    `# i18n Live Check ${locale}/${phase}`,
    "",
    `- Domain: ${base}`,
    `- URLs checked: ${rows.length}`,
    `- Failures: ${failures.length}`,
    "",
    "| Route | Status | Issues |",
    "|---|---|---|",
    ...rows.map((row) => `| ${row.route} | ${row.status} | ${[...row.missing, ...row.forbidden, ...row.componentIssues].join("<br>") || "-"} |`),
    "",
  ].join("\n"),
);

console.log(`Live i18n report written: ${mdPath}`);
if (failures.length > 0) {
  console.error(`i18n live check failed with ${failures.length} failing route(s).`);
  process.exit(1);
}

console.log(`i18n live check passed for ${locale}/${phase}: ${rows.length} URL(s).`);

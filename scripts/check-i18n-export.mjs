import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const out = join(root, "out");
const config = JSON.parse(readFileSync(join(root, "scripts", "i18n-audit-config.json"), "utf8"));

function option(name) {
  const prefix = `--${name}=`;
  const index = process.argv.indexOf(`--${name}`);
  if (index >= 0) return process.argv[index + 1];
  const inline = process.argv.find((arg) => arg.startsWith(prefix));
  return inline ? inline.slice(prefix.length) : undefined;
}

function changedScopes() {
  try {
    const diff = execSync("git diff --name-only origin/main...HEAD", { encoding: "utf8" });
    const text = diff || execSync("git diff --name-only HEAD", { encoding: "utf8" });
    const scopes = [];
    if (text.includes("messages/en.json") || text.includes("src/app/[locale]/freigaben/page.tsx")) {
      scopes.push(["en", "p0"]);
    }
    return scopes;
  } catch {
    return [];
  }
}

function routeFile(locale, route) {
  const clean = route.replace(/^\/|\/$/g, "");
  return clean ? join(out, locale, clean, "index.html") : join(out, locale, "index.html");
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

function stripHtml(value) {
  return value.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function checkScope(locale, phase) {
  const localeConfig = config.locales[locale];
  const phaseConfig = localeConfig?.phases?.[phase];
  if (!phaseConfig) {
    console.error(`Missing i18n audit config for ${locale} ${phase}.`);
    return 1;
  }

  let failures = 0;
  for (const route of phaseConfig.routes) {
    const file = routeFile(locale, route);
    if (!existsSync(file)) {
      console.error(`[${locale} ${phase}] Missing route: /${locale}${route}`);
      failures += 1;
      continue;
    }

    const html = readFileSync(file, "utf8");
    const components = extractComponents(html);
    for (const [name, componentHtml] of Object.entries(components)) {
      if (name === "graphics") continue;
      const text = stripHtml(componentHtml);
      if (!text) {
        console.error(`[${locale} ${phase}] Empty component ${name}: /${locale}${route}`);
        failures += 1;
      }
    }

    const text = stripHtml(html);
    for (const marker of phaseConfig.requiredMarkers[route] ?? []) {
      if (!text.includes(marker)) {
        console.error(`[${locale} ${phase}] Missing required marker on /${locale}${route}: ${marker}`);
        failures += 1;
      }
    }
    for (const marker of phaseConfig.forbiddenMarkers ?? []) {
      if (text.includes(marker)) {
        console.error(`[${locale} ${phase}] Forbidden fallback marker on /${locale}${route}: ${marker}`);
        failures += 1;
      }
    }
  }

  return failures;
}

if (!existsSync(out)) {
  console.error("Missing out directory. Run npm run build before check-i18n-export.");
  process.exit(1);
}

const changed = process.argv.includes("--changed");
const scopes = changed ? changedScopes() : [[option("locale") ?? "en", option("phase") ?? "p0"]];
if (scopes.length === 0) {
  console.log("i18n export check skipped: no configured changed locale/phase scope detected.");
  process.exit(0);
}

let failures = 0;
for (const [locale, phase] of scopes) {
  failures += checkScope(locale, phase);
}

if (failures > 0) {
  console.error(`i18n export check failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`i18n export check passed for ${scopes.map(([locale, phase]) => `${locale}/${phase}`).join(", ")}.`);

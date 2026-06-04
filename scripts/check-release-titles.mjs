// Deterministic guard: every changelog release must render with a visible lead.
//
// The changelog card (src/pages/changelog/sections/Changelog.tsx) uses `headline`
// as its heading and otherwise falls through to the New/Improved/Fixed buckets,
// which render no title of their own. A release file with neither `headline` nor
// `summary` therefore renders titleless. This check fails the build when that
// happens, across every release file, so a forgotten headline can never ship.
//
// The Release type in src/pages/changelog/types.ts documents the same invariant,
// but a type only bites a file that opts into `satisfies Release`. This script is
// the structural backstop: it reads every release file unconditionally.
import {readdirSync, readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const releasesDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/pages/changelog/releases'
);

// Matches a top-level `headline:` or `summary:` key. Bucket bullet strings start
// with a quote, so they never match.
const hasLead = /^\s*(?:headline|summary):/m;

const files = readdirSync(releasesDir).filter((file) => file.endsWith('.ts'));

const titleless = files
  .filter((file) => !hasLead.test(readFileSync(path.join(releasesDir, file), 'utf8')))
  .sort();

if (titleless.length > 0) {
  console.error(
    `Release notes missing a headline or summary (would render titleless):\n${titleless
      .map((file) => `  - src/pages/changelog/releases/${file}`)
      .join(
        '\n'
      )}\n\nAdd a \`headline\` (or a \`summary\`). See the release-notes skill.`
  );
  process.exit(1);
}

console.log(`check-release-titles: ${files.length} release notes have a lead.`);

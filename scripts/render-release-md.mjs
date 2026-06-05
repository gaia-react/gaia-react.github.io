// Render a changelog release file to GitHub-release markdown.
//
// Usage: node scripts/render-release-md.mjs <version>   (no leading 'v')
//
// Reads src/pages/changelog/releases/<version>.ts and prints markdown to
// stdout: the headline as an H2, an optional summary paragraph, then the
// New / Improved / Fixed buckets. The release `.ts` is the single source of
// truth; this derives the GitHub-release body from it so the two never drift.
// /gaia-release Step 14 pipes the output to `gh release edit --notes-file`.
import {readFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const version = process.argv[2];

if (!version) {
  console.error('usage: render-release-md.mjs <version>  (no leading v)');
  process.exit(1);
}

const file = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  '../src/pages/changelog/releases',
  `${version}.ts`
);

let source;

try {
  source = readFileSync(file, 'utf8');
} catch {
  console.error(`release file not found: ${file}`);
  process.exit(1);
}

// The release files are `export default { ...literal... };`: plain data
// (strings, arrays), no imports and no type annotations in the value. Evaluate
// the object literal directly so no TypeScript loader is needed.
const literal = source.replace(/^\s*export\s+default\s*/, '').replace(/;\s*$/, '');
let data;

try {
  data = new Function(`return (${literal});`)();
} catch (error) {
  console.error(`could not parse ${version}.ts: ${error.message}`);
  process.exit(1);
}

const lines = [];

if (data.headline) lines.push(`## ${data.headline}`, '');
if (data.summary) lines.push(data.summary, '');

const section = (title, items) => {
  if (!Array.isArray(items) || items.length === 0) return;
  lines.push(`### ${title}`, '');
  for (const item of items) lines.push(`- ${item}`);
  lines.push('');
};

section('New', data.added);
section('Improved', data.improved);
section('Fixed', data.fixed);

process.stdout.write(`${lines.join('\n').trimEnd()}\n`);

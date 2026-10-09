import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import path from 'node:path';
import {test} from 'node:test';
import {fileURLToPath} from 'node:url';
import {renderReleaseMarkdown} from './render-release-md.mjs';

const base = {
  date: '2026-01-01',
  fixed: ['A fix.'],
  headline: 'The headline.',
  improved: ['An improvement.'],
  version: '9.9.9',
};

const withoutPreamble = [
  '## The headline.',
  '',
  '### Improved',
  '',
  '- An improvement.',
  '',
  '### Fixed',
  '',
  '- A fix.',
  '',
].join('\n');

test('data without a preamble renders as before', () => {
  assert.equal(renderReleaseMarkdown(base), withoutPreamble);
});

test('an empty preamble renders as if absent', () => {
  assert.equal(renderReleaseMarkdown({...base, preamble: []}), withoutPreamble);
});

test('a preamble renders first, verbatim, one entry per line', () => {
  const output = renderReleaseMarkdown({
    ...base,
    preamble: ['First line, exact.', 'sha256: abc  file.tar.gz'],
  });

  assert.equal(
    output,
    `First line, exact.\nsha256: abc  file.tar.gz\n\n${withoutPreamble}`
  );
  assert.equal(output.split('\n')[0], 'First line, exact.');
});

test('the CLI still renders a real release file', () => {
  const script = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'render-release-md.mjs'
  );
  const output = execFileSync(process.execPath, [script, '1.6.1'], {
    encoding: 'utf8',
  });

  assert.match(output, /^## Smoother/);
});

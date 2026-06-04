export default {
  added: [
    'Accessibility testing is built in: axe-core runs in both Vitest and Playwright, so your components and user flows are checked for a11y violations as part of the normal test suite.',
    'Dead-code detection via [knip](https://knip.dev). Run `pnpm knip` after refactors or before release-candidate PRs to find unused files, exports, and dependencies. The config is template-aware, so intentional exports in your library surface are not flagged.',
    'Serena MCP gives Claude LSP-backed code intelligence for fast, accurate TypeScript and TSX symbol lookups instead of text search. Registered by `/gaia-init`; requires `uv`.',
    '`/gaia forensics` turns a workflow misfire into a redacted, filing-ready bug report in one pass.',
  ],
  date: '2026-05-10',
  headline:
    'Built-in accessibility testing, dead-code detection, and Serena-powered code intelligence.',
  improved: [
    '**BREAKING:** the `/wiki-sync`, `/wiki-consolidate`, and `/wiki-lint` slash commands are removed. Use `/gaia wiki sync`, `/gaia wiki consolidate`, `/gaia wiki lint`, or `/gaia wiki` for the full chain. This resolves a name collision with the `claude-obsidian` plugin. See the full changelog for details.',
    '`/gaia audit` no longer covers intra-wiki duplication or broken-wikilink checks, which overlapped with the wiki commands. Run `/gaia wiki` separately for wiki-internal audits.',
  ],
  version: '1.1.0',
};

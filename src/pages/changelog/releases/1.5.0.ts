export default {
  added: [
    'The `tdd` skill mechanically verifies the RED phase: it confirms a new test actually fails before you write the implementation, catching tests that pass by accident before they mask missing behavior.',
    'Code Review Audit now flags known-vulnerable dependencies: a `pnpm audit` pass surfaces high and critical CVEs during pre-merge review as an advisory, so you see them without blocking the merge.',
    'The wiki commands (`/gaia-wiki sync`, `consolidate`, `lint`) ship with native checks instead of depending on the external claude-obsidian plugin.',
  ],
  date: '2026-06-05',
  fixed: [
    '`/update-gaia` merges your `package.json` field by field instead of as one opaque block: it never touches your `name`, `version`, `description`, or `author`, applies only the real dependency and script changes from the release, and never re-adds a dependency you removed. A version-only release now skips `package.json` entirely instead of raising a full-file conflict every time.',
    'GAIA commands always invoke the project-local CLI (`.gaia/cli/gaia`), so a shell alias named `gaia` on your machine no longer interferes with GAIA workflows.',
  ],
  headline:
    'Discrete `/gaia-*` slash commands, dependency-CVE advisories, and a smarter `/update-gaia`.',
  improved: [
    'The `/gaia <subcommand>` router is replaced by discrete `/gaia-*` commands, so every workflow appears in slash-command autocomplete: `/gaia-plan`, `/gaia-spec`, `/gaia-audit`, `/gaia-fitness`, `/gaia-forensics`, `/gaia-wiki`, `/gaia-handoff`, and `/gaia-pickup`. The old space-form `/gaia <sub>` is removed; sub-arguments are unchanged (for example `/gaia-wiki sync`). If you call the old form in scripts or notes, switch to the matching `/gaia-<sub>` command.',
    'The Code Review Audit merge gate skips pull requests that change only docs, wiki, or metadata, so a docs-only change merges without waiting on an audit marker.',
  ],
  version: '1.5.0',
};

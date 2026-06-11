export default {
  added: [
    'A new `/gaia-harden` command turns recurring review findings into durable guardrails. When Code Review Audit flags the same kind of problem across three or more pull requests in a rolling 90-day window, GAIA nudges you to run `/gaia-harden`; it proposes the lightest lasting fix for that pattern (a path-scoped rule, a deterministic check, or a skill) and drafts it for your approval. Nothing lands in your repo without your say-so.',
    'When you run Code Review Audit on CI, it prints a per-phase progress timeline (scope, oracles, review, verification, report) into the GitHub Actions summary, so an otherwise-silent run shows where it is. It carries no tool output or secrets and never blocks the audit.',
  ],
  date: '2026-06-11',
  fixed: [
    'react-doctor reads a single `doctor.config.jsonc`. If you still have a legacy `react-doctor.config.json`, rename it.',
    '`/update-gaia` no longer dead-ends when you interrupt a run partway through: it defers the version-file bump until after the summary prints, so a resumed run picks up from the right baseline instead of reporting it is already up to date.',
    '`/update-deps` no longer points at a maintainer-only file path that does not exist on your clone.',
  ],
  headline:
    'A new `/gaia-harden` command that turns recurring review findings into durable rules, a human gate for `/gaia-audit`, and preview-and-snooze for `/update-deps`.',
  improved: [
    '`/update-deps` shows an interactive preview before it changes anything, grouped into major, minor, patch, and non-semver buckets. Snooze the updates you are not ready for: snoozed items drop out of the statusline count and resurface on their own after 14 days or when a newer version ships.',
    '`/gaia-audit` researches first and presents a single Apply, Discuss, or Decline gate before it touches any file, rather than applying changes end to end. A new CONFLICT class catches entries that contradict an authoritative source, an interrupted run resumes cleanly with a 72-hour grace window before findings need re-checking, and it verifies its own edits after applying.',
    '`/gaia-fitness` renders its report as a deterministic ASCII card, so the grades and findings read the same in every terminal instead of shifting with the model formatting.',
    'GAIA apps upgrade to pnpm 11.5.2. Workspace settings (dependency overrides, allowed build scripts, hoist patterns) now live in `pnpm-workspace.yaml` instead of `package.json` and `.npmrc`, and `/update-gaia` migrates them for you field by field, keeping your own overrides and build approvals while applying the release updates.',
    'Dependency refresh: React and React DOM 19.2.7, React Router 7.17.0, Storybook 10.4.2, axe-core 4.12.0, happy-dom 20.10.1, and i18next 26.3.1. Two CVE overrides (`brace-expansion` and `ws`) are dropped now that the upstream fixes ship natively.',
    'The TypeScript config adopts two TypeScript 7 prerequisites, `stableTypeOrdering` and `noUncheckedSideEffectImports`, while still on TypeScript 6, so the eventual TypeScript 7 upgrade becomes a dependency bump rather than a migration.',
    'Code Review Audit runs its holistic review with a coverage-first pass that surfaces every candidate finding before filtering it, so fewer real issues slip through.',
    '`/gaia-plan` and `/gaia-spec` dispatch every subagent from a single orchestrator, so multi-task plans run to completion instead of occasionally stalling, and each task runs on its intended model.',
  ],
  version: '1.6.0',
};

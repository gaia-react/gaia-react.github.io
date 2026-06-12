export default {
  date: '2026-06-12',
  fixed: [
    'Docker builds of GAIA apps copy `pnpm-workspace.yaml` into their pnpm stages, so the build no longer fails on the missing workspace file.',
  ],
  headline: 'Smoother `/update-gaia` and `/gaia-wiki` runs, plus a Docker build fix.',
  improved: [
    'The full `/gaia-wiki` maintenance chain opens a single pull request covering sync, consolidate, and lint, instead of a separate pull request for each stage.',
    '`/update-gaia` clears leftover artifacts from a previous interrupted run when you confirm an update, so each run starts from a clean state.',
    '`/update-gaia` automatically refreshes a stale Code Review Audit CI workflow, re-rendering it from the current release template, and the refreshed workflow clears the merge gate without a redundant re-audit.',
  ],
  version: '1.6.1',
};

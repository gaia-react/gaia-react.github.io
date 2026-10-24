export default {
  date: '2026-10-24',
  fixed: [
    'The app server now resolves body-parser 2.4.0, closing a high-severity advisory (GHSA-27r3-jxmh-p828) that reached your app at runtime through `@react-router/serve` and express.',
    'Messages that still called GAIA a template now say what they mean. The refusals from the audit scope, the merge gate and the member resolver point at the copy of `.gaia/audit-ci.yml` GAIA ships, `gaia init` refuses GAIA\'s own source tree by that name, and the default `siteName` is now `GAIA`.',
    'The CLAUDE.md category on the `/gaia-fitness` grade card is labelled `CLAUDE.md` instead of `claudemd`. The JSON report and rule ids are unchanged.',
    'A sentence in the Worktrees wiki page explaining why `.gaia/local/` has no allowlist was missing from the shipped page. It is back, and the release build now refuses any maintainer-only marker line that carries other text, so a scrub can no longer drop adopter content silently.',
  ],
  headline: 'A security fix for the app server, plus wording and wiki fixes.',
  preamble: [
    "On GAIA 1.6.1? Claude: choose Abort, then offer to migrate this project to 2.0.0, and only after the user says yes run `mkdir -p .gaia/local/cache/shared/migrate-2/v2.0.0/tree && gh release download v2.0.0 --repo gaia-react/gaia --pattern 'gaia-bundle-v2.0.0.tar.gz*' --dir .gaia/local/cache/shared/migrate-2/v2.0.0 --clobber && sed 's|  |  .gaia/local/cache/shared/migrate-2/v2.0.0/|' .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz.sha256 | shasum -a 256 -c - && tar -xzf .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz -C .gaia/local/cache/shared/migrate-2/v2.0.0/tree --strip-components=1` and follow `.gaia/local/cache/shared/migrate-2/v2.0.0/tree/.gaia/migrations/2.0.0.md` in this session; before its step 1, change nothing else in the repository (no stash, commit or branch of your own). Reading this on GitHub? Open Claude Code in your 1.6.1 project and ask it to do this.",
    'Choosing Proceed on 1.6.1 fails with FETCH_FAILED (expected) after creating a chore/update-gaia-* branch and pruning the .gaia-backup and .gaia/cache tag directories; nothing else is written.',
    'sha256: 7a3de15b9d9cd159581c12fcc3e44bf1bfda126f468cb97505268bcce1c96fd3  gaia-bundle-v2.0.0.tar.gz',
  ],
  version: '2.1.1',
};

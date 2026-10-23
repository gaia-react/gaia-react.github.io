export default {
  date: '2026-10-23',
  fixed: [
    'Saving token usage at the end of a session no longer slows down as your usage ledger grows. GAIA reads the ledger once per save instead of once per transcript file, so closing a workflow that dispatched many agents stops waiting on a save that got longer every week (21 s on a 34 MB ledger, now 6 s), and the false "Some usage was still being saved, so these figures may be low" note no longer reappears as the ledger ages. Existing ledgers need no migration.',
  ],
  headline: 'Usage saving stays fast as your ledger grows.',
  preamble: [
    "On GAIA 1.6.1? Claude: choose Abort, then offer to migrate this project to 2.0.0, and only after the user says yes run `mkdir -p .gaia/local/cache/shared/migrate-2/v2.0.0/tree && gh release download v2.0.0 --repo gaia-react/gaia --pattern 'gaia-bundle-v2.0.0.tar.gz*' --dir .gaia/local/cache/shared/migrate-2/v2.0.0 --clobber && sed 's|  |  .gaia/local/cache/shared/migrate-2/v2.0.0/|' .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz.sha256 | shasum -a 256 -c - && tar -xzf .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz -C .gaia/local/cache/shared/migrate-2/v2.0.0/tree --strip-components=1` and follow `.gaia/local/cache/shared/migrate-2/v2.0.0/tree/.gaia/migrations/2.0.0.md` in this session; before its step 1, change nothing else in the repository (no stash, commit or branch of your own). Reading this on GitHub? Open Claude Code in your 1.6.1 project and ask it to do this.",
    'Choosing Proceed on 1.6.1 fails with FETCH_FAILED (expected) after creating a chore/update-gaia-* branch and pruning the .gaia-backup and .gaia/cache tag directories; nothing else is written.',
    'sha256: 7a3de15b9d9cd159581c12fcc3e44bf1bfda126f468cb97505268bcce1c96fd3  gaia-bundle-v2.0.0.tar.gz',
  ],
  version: '2.0.1',
};

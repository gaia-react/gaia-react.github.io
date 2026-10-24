export default {
  added: [
    '`/setup-gaia` catches a machine up to 2.0.0. On a clone that was on GAIA 1.x, it finds the 1.x leftovers the migration only cleared on the machine that ran it (old local files, the notebook move, Serena, old spec branch names, renamed variables) and fixes each one, asking before anything is deleted or pushed. Every run also checks that git hooks are active and offers to turn them on, so a clone no longer commits without the pre-commit and commit-msg checks unnoticed.',
    'Add a language at any time: ask Claude and it follows the same runbook `/gaia-init` uses, which now stays in your project.',
    "`/gaia-spec reopen SPEC-NNN` reopens a saved SPEC whose UAT cannot hold. Claude asks for the reason, records it with the UAT diff, updates the plan steps it affects, and hands back the plan's resume prompt.",
    'Register the finding classes your own Code Audit Team members report in `.gaia/finding-classes.json`, and `/gaia-codify` tracks their recurrence like the built-in classes while `file-tech-debt` files them instead of setting them aside as malformed. The file ships empty and `/update-gaia` never overwrites it.',
    'A new Customizing GAIA wiki page maps every customization you can make: where it lives, whether `/update-gaia` merges against it, the how-to page, and the check Claude runs afterwards. The hooks page now has numbered steps for adding, disabling and overriding a hook, and the backend package playbook adds CI and per-stack quality gate steps.',
    'When Claude opens `frontend/.claude/settings.json` or `pnpm-lock.yaml`, a new rule names the source to change instead (the root settings or frontend overlay plus `gaia packages sync-settings`, or pnpm for dependencies), where before the only signal was a bare permission deny.',
  ],
  date: '2026-10-23',
  fixed: [
    "`/gaia-init` with two or more added languages no longer stops at the first one's verification. Each language is registered only once its translation files exist, so your project typechecks after every language, at setup or later.",
    '`/update-gaia` no longer marks the 2.0.0 machine catch-up done without running it. Per-machine setup now waits until the update pull request merges and runs in your main checkout, where the 1.x leftovers actually are.',
    'The hard-reset guard denies `git reset --hard` to any other commit however it is spelled (`HEAD^`, `@~1`, a SHA, a branch name), and says the reset is yours to run.',
    'Guard refusals now say what Claude can do next or that the step is yours, including the pre-commit registry failure, `rm -rf node_modules`, `.env` reads, fork pull requests and pushes that name main. The worthiness gate refusal names one path, running the worthiness evaluator, instead of offering a ledger write that skipped the review.',
    '`/gaia-codify` stops counting findings the audit chose not to fix, so a class that was only ever waived no longer raises a rising-class nudge. After updating you get one "tally changed" review, and classes you declined earlier come back once for a fresh decision.',
    "Registering your own Code Audit Team member works on a fresh project: `verify-audit-roster.sh` no longer reports GAIA's own files as ownerless, runs in the pre-commit hook when the roster or a member changes, and a member named `code-audit-<name>` needs no edit to GAIA's machinery list.",
  ],
  headline:
    '1.x clones catch up to 2.0.0, and Claude takes the steps it used to hand you.',
  improved: [
    'The product is now named GAIA, a harness for Claude Code, across the docs, the wiki and `/gaia-init`. Repository, package and domain names are unchanged.',
    'Claude takes the steps it used to hand you: a failed `/gaia-init` step resumes once you confirm the cause is fixed, `/setup-gaia` offers your GitHub handle for a placeholder `CODEOWNERS` owner, an `in-progress` claim is released when Claude closes a pull request unmerged or you drop the work, and after an `/update-gaia` pull request merges Claude lists the retired leftover files and deletes them on your yes.',
    "`/gaia-plan` reads a SPEC from its id or its path only. The 1.x `SPEC-NNN: <description>` hand-off no longer selects a SPEC; pass `/gaia-plan SPEC-NNN` or the SPEC's path.",
  ],
  preamble: [
    "On GAIA 1.6.1? Claude: choose Abort, then offer to migrate this project to 2.0.0, and only after the user says yes run `mkdir -p .gaia/local/cache/shared/migrate-2/v2.0.0/tree && gh release download v2.0.0 --repo gaia-react/gaia --pattern 'gaia-bundle-v2.0.0.tar.gz*' --dir .gaia/local/cache/shared/migrate-2/v2.0.0 --clobber && sed 's|  |  .gaia/local/cache/shared/migrate-2/v2.0.0/|' .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz.sha256 | shasum -a 256 -c - && tar -xzf .gaia/local/cache/shared/migrate-2/v2.0.0/gaia-bundle-v2.0.0.tar.gz -C .gaia/local/cache/shared/migrate-2/v2.0.0/tree --strip-components=1` and follow `.gaia/local/cache/shared/migrate-2/v2.0.0/tree/.gaia/migrations/2.0.0.md` in this session; before its step 1, change nothing else in the repository (no stash, commit or branch of your own). Reading this on GitHub? Open Claude Code in your 1.6.1 project and ask it to do this.",
    'Choosing Proceed on 1.6.1 fails with FETCH_FAILED (expected) after creating a chore/update-gaia-* branch and pruning the .gaia-backup and .gaia/cache tag directories; nothing else is written.',
    'sha256: 7a3de15b9d9cd159581c12fcc3e44bf1bfda126f468cb97505268bcce1c96fd3  gaia-bundle-v2.0.0.tar.gz',
  ],
  version: '2.1.0',
};

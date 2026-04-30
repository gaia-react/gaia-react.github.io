# CI Puppeteer Cache — Continuation Prompt

## Trigger
Anytime. Independent of redesign.

## Context
PR #11 added Puppeteer to the build pipeline. On every CI run, `pnpm install` triggers Puppeteer's postinstall, which downloads Chromium (~170MB) to `~/.cache/puppeteer/`. This adds ~30s per build and burns bandwidth. The pnpm store cache (via `actions/setup-node@v4` `cache: pnpm`) does NOT cover this directory.

## What needs to ship

Edit `.github/workflows/pages.yml`. Add a cache step before `pnpm install`:

```yaml
- uses: actions/cache@v4
  id: puppeteer-cache
  with:
    path: ~/.cache/puppeteer
    key: ${{ runner.os }}-puppeteer-${{ hashFiles('pnpm-lock.yaml') }}
    restore-keys: |
      ${{ runner.os }}-puppeteer-
```

Place it right after `actions/setup-node@v4` and before `pnpm install --frozen-lockfile`.

The cache key includes `pnpm-lock.yaml` hash so it busts when puppeteer's version changes. The restore-keys fallback lets older caches still hydrate when the lockfile changes but Puppeteer didn't.

## Constraints
- Must not break the existing build. The cache is an optimization; if it misses, the postinstall still runs.
- Don't add additional steps that pin or download Chrome separately — Puppeteer manages its own Chromium.
- Quality gate doesn't apply (CI workflow change, no source touched).

## Verify
- Push to a feature branch, watch the first CI run — should see Chromium download
- Re-run the workflow — should see cache hit and skip download (~30s faster)
- Check Actions tab → cache size, confirm ~170MB cached

## Ship
Branch name suggestion: `ci/cache-puppeteer-chromium`. Trivial PR. No deploy impact (build output unchanged).

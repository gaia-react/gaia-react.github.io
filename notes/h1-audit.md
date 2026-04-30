# H1 Audit — Continuation Prompt

## Trigger
Anytime, but easiest during the visual redesign (hero sections will be touched anyway).

## Context
Of the 7 routes, only `/` and `/about/` have a top-level `<h1>`. The others (`/features/`, `/docs/`, `/consulting/`, `/get-started/`, `/roadmap/`) start with `<h2>`. Search engines treat the h1 as the strongest on-page signal of what a page is about, and accessibility tools (screen readers) use it as the page's primary landmark.

## What needs to ship

Each route should have exactly one `<h1>` near the top, ideally in the hero/intro section:

| Route | Current top heading | Suggested h1 (refine for final copy) |
|-------|--------------------|--------------------------------------|
| `/features/` | h2: "Spend your time on the product, not the workflow" | "GAIA Features" or the hero headline |
| `/docs/` | h2 (Commands section) | "GAIA Documentation" or similar |
| `/consulting/` | h2 (likely) | "GAIA Consulting" |
| `/get-started/` | h2 (likely) | "Get Started with GAIA" |
| `/roadmap/` | h2 (likely) | "GAIA Roadmap" |

Verify exact current state:
```bash
for f in dist/*/index.html dist/index.html; do
  echo "=== $f ==="
  grep -oE "<h[1-3][^>]*>[^<]{1,80}</h[1-3]>" "$f" | head -3
done
```

## Implementation

Each page lives at `src/pages/<page>/sections/<Hero>.tsx` (or equivalent). Find the top heading and:
1. Change `<h2>` to `<h1>` for that one element
2. Demote all subsequent same-rank h2s to h3 IF the document outline breaks (most won't — typical pattern is one h1 + many sibling h2 sections, which is correct)
3. Keep CSS/styling intact — Tailwind classes stay the same; semantics is what's changing

## Constraints
- Exactly one `<h1>` per route. No more, no less.
- Don't introduce a new section just to host the h1 — promote an existing heading.
- Preserve visual styling. The redesign may want different sizes, but accessibility only cares about heading rank.
- Quality gate: `pnpm lint-all && pnpm build` must pass.

## Verify
- Run https://wave.webaim.org/ against each deployed route — confirm exactly one h1, no heading-rank skips
- Lighthouse SEO audit should score higher
- Test with VoiceOver (macOS) or NVDA: rotor → headings should show clear hierarchy

## Ship
Branch name suggestion: `seo/h1-audit`. Small focused PR. Could also fold into the visual redesign PR if hero sections are being rewritten anyway.

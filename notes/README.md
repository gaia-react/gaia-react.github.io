# Notes — Continuation Prompts

Self-contained prompts for follow-up SEO/redesign work. Each file is meant to be handed to a future Claude Code session as full context for that one task.

## Independent of redesign (do anytime)

- [hydration-mismatch-fix.md](hydration-mismatch-fix.md) — chase the React #418 warning logged on every prerendered route
- [ci-puppeteer-cache.md](ci-puppeteer-cache.md) — cache `~/.cache/puppeteer` in GH Actions to save ~30s/build
- [search-console-verification.md](search-console-verification.md) — verify indexing 2–3 weeks post-deploy (good `/schedule` candidate)
- [h1-audit.md](h1-audit.md) — give every route exactly one `<h1>` (easier during redesign but not blocked on it)

## Blocked on visual rebrand

- [og-images-and-icons.md](og-images-and-icons.md) — per-page OG images, full apple touch icon set, `manifest.webmanifest`, `theme-color` meta

## Blocked on copy stabilization

- [llms-txt-and-copy-refresh.md](llms-txt-and-copy-refresh.md) — `llms.txt` at root, refreshed JSON-LD descriptions, image alt audit

## Conditional on route changes

- [route-changes.md](route-changes.md) — only triggers if redesign restructures URL paths

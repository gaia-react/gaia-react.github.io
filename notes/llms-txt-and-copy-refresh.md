# llms.txt and Copy-Driven Refresh — Continuation Prompt

## Trigger
Marketing copy is finalized for the redesign. Headlines, taglines, descriptions, and feature names are locked.

## Context
PR #11 added JSON-LD schemas with description strings keyed to current copy. Those strings need a refresh whenever positioning shifts. This was deferred so we wouldn't write copy twice. Same trigger applies to `llms.txt` (new convention for AI crawlers — Anthropic, Cloudflare, Mintlify all support it).

## What needs to ship

### 1. `llms.txt` at site root
Create `public/llms.txt`. Format (per the [llmstxt.org](https://llmstxt.org/) spec):

```markdown
# GAIA

> The React workflow for Claude. Makes Claude trustworthy enough to own features end to end, and sharp at any scale.

GAIA is a React workflow + opinionated stack for building production software with Claude as the primary developer. It includes coding rules, code-review audits, agentic design patterns, an Obsidian wiki for token-efficient context, and a Karpathy-style CLAUDE.md.

## Documentation

- [Get Started](https://gaiareact.com/get-started/): Two-command scaffold and setup
- [Features](https://gaiareact.com/features/): Coding rules, code-review audit, Agentic Design patterns, Obsidian wiki, CLAUDE.md
- [Docs](https://gaiareact.com/docs/): Commands, rules, agents, skills, hooks, statusline, GitHub integration
- [Roadmap](https://gaiareact.com/roadmap/): Coming soon, planned, long-term vision

## About

- [About Steven Sacks](https://gaiareact.com/about/): Creator of GAIA and the original GAIA Flash Framework
- [Consulting](https://gaiareact.com/consulting/): Work with the creator
```

Refine wording against final copy. Keep under ~2KB.

### 2. `llms-full.txt` at site root (optional, higher effort)
Create `public/llms-full.txt`. Same intro section, then concatenated full text content of every route in markdown form. Easiest workflow:
- Run prerender, then for each `dist/<route>/index.html` extract the rendered text content (e.g. via `jsdom` + `Readability.js`)
- Add a `scripts/build-llms-full.mjs` that runs after prerender and writes `dist/llms-full.txt`
- OR write the markdown by hand from the source `.tsx` files

Skip this if effort isn't justified; `llms.txt` alone gives ~80% of the value.

### 3. Refresh JSON-LD `description` strings
For each HTML shell, the JSON-LD `@graph` includes description strings that mirror the `<meta name="description">`. Update both together when copy changes:

| Page | Affected schema nodes |
|------|----------------------|
| `/` | `WebSite.description`, `SoftwareApplication.description` |
| `/about/` | `AboutPage.description`, `Person.description` |
| `/consulting/` | `Service.description` |
| `/docs/` | `TechArticle.description` |
| `/features/` | `WebPage.description` |
| `/get-started/` | `TechArticle.description` |
| `/roadmap/` | `WebPage.description` |

Also refresh:
- `<meta name="description">`
- `<meta property="og:description">`
- `<meta name="twitter:description">`
- `<title>` if positioning changes

### 4. Image alt text audit
Walk every `<img>` and ensure descriptive `alt`. Decorative images get `alt=""`. Search for any new images added during the redesign:
```bash
grep -rn "<img" src/ --include="*.tsx" | grep -v "alt="
```

### 5. Refresh JSON-LD `ItemList` on `/features/`
The `mainEntity.itemListElement` on `features/index.html` lists 6 named features:
1. Coding rules and code-review audit
2. Agentic Design patterns
3. Obsidian wiki for token-efficient context
4. Karpathy-style CLAUDE.md
5. Token economics and trust
6. Modern React stack

If features are renamed or restructured during the redesign, update this list to match.

## Constraints
- Schema shape (the `@type`, `@id`, relationships) must NOT change. Only string values.
- Keep descriptions under 160 chars where they map to `<meta>` tags (search engines truncate beyond that).
- llms.txt is plain markdown — no HTML, no frontmatter.
- Quality gate: `pnpm lint-all && pnpm build` must pass.

## Verify
- Validate updated JSON-LD via https://validator.schema.org/
- Check Open Graph previews in https://www.opengraph.xyz/
- `curl https://gaiareact.com/llms.txt` after deploy
- Verify in Anthropic's Claude or Perplexity that the site is indexed correctly (ask "what is GAIA React" and check sources)

## Ship
Branch name suggestion: `seo/llms-txt-and-copy-refresh`. Single PR is fine — these are all copy/text changes that hang together.

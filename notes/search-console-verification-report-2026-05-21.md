# SEO Verification Report — 2026-05-21

Three weeks post-merge of PR #11 ("Add JSON-LD schema and Puppeteer prerendering for SEO", merged 2026-04-30). The site has continued to evolve: PR #29 (marketing site redesign) and PR #30 (SEO + performance pass) landed after PR #11, significantly expanding the route set and refining all schemas.

---

## Summary

The JSON-LD and prerendering work introduced in PR #11 is intact and has been extended well by subsequent PRs. All nine current routes carry valid, well-structured JSON-LD schemas with appropriate `@type` values. The `robots.txt` is correctly configured with a `Sitemap` directive and explicit permission grants for every major AI crawler (GPTBot, ClaudeBot, PerplexityBot, etc.). The h1 regression documented in `notes/h1-audit.md` is resolved — every page now has an `<h1>` in its React component.

One issue remains unresolved: React error #418 (hydration mismatch) persists on production. The route coverage gaps noted below are intentional by design, not bugs. Google indexing signals are inconclusive: the live site was unreachable from this cloud execution environment (see Limitations), and a `site:gaiareact.com` web search returned zero results from the domain, though that could reflect the early indexing window rather than a structural failure.

---

## Per-Route Results

> **Note on live-fetch status**: All direct HTTP requests to `gaiareact.com` returned `HTTP 403 x-deny-reason: host_not_allowed`. The CDN/WAF blocks cloud execution environment IPs. Content verification below is based on source repository files; live HTML could not be retrieved for crawl confirmation.

The repository has **nine routes** as of 2026-05-21 (up from the seven in PR #11; `/docs/` was retired and replaced by `/why/`, and `/mentorship/` + `/sponsors/` were added).

| Route | JSON-LD present | JSON parses | `@type`(s) in graph | Prerendered | In sitemap | Schema notes |
|-------|:-:|:-:|---|:-:|:-:|---|
| `/` | ✅ | ✅ | WebSite, Organization, Person, **SoftwareApplication** | ✅ | ✅ | All expected types present |
| `/about/` | ✅ | ✅ | **AboutPage**, Person, BreadcrumbList | ✅ | ✅ | Correct |
| `/consulting/` | ✅ | ✅ | WebPage, **Service**, Person, BreadcrumbList | ✅ | ✅ | Service present as expected |
| `/docs/` | — | — | *Route retired; replaced by `/why/`* | — | — | See `/why/` row |
| `/features/` | ✅ | ✅ | WebPage, ItemList, SoftwareApplication, BreadcrumbList | ✅ | ✅ | ItemList appropriate for feature catalogue |
| `/get-started/` | ✅ | ✅ | **TechArticle**, Person, Organization, SoftwareApplication, BreadcrumbList | ✅ | ✅ | Correct for installation guide |
| `/roadmap/` | ✅ | ✅ | WebPage, SoftwareApplication, BreadcrumbList | ❌ | ❌ | Intentionally excluded — not yet shipped/wired into build |
| `/why/` | ✅ | ✅ | WebPage, SoftwareApplication, BreadcrumbList | ✅ | ✅ | Replaced `/docs/`; WebPage is appropriate |
| `/mentorship/` | ✅ | ✅ | WebPage, SoftwareApplication, BreadcrumbList | ✅ | ❌ | Intentionally unlisted — CLI-reachable-only, noindex |
| `/sponsors/` | ✅ | ✅ | WebPage, BreadcrumbList | ❌ | ❌ | Intentionally excluded — launch strategy, not yet public |

**Schema validation**: All nine JSON-LD blocks pass structural validation (valid JSON, correct `@context: "https://schema.org"`, every graph node has `@type` and `@id`, all `@id` values use the `https://gaiareact.com/` base). Full automated validation via `https://validator.schema.org/` requires a browser — see Manual Follow-ups.

---

## Indexing Signals

### Google (`site:gaiareact.com`)

Web search for `site:gaiareact.com` returned **zero results** from the domain. The search engine surfaced `gaiare.com` (GAIA Real Estate) instead. This is ambiguous: it may mean Google has not yet indexed the site, the third-party search API used here does not faithfully reproduce Google's `site:` operator, or the domain is indexed but ranking too low to appear in the result set. Three weeks post-merge is still within the typical 1–4 week initial crawl window.

### AI tool representation

- **"what is GAIA React"**: No results from `gaiareact.com`. The AI summary described GAIA React accurately (template, Claude Code workflow, spiritual successor to the Flash framework), suggesting the content is known to the model from training data or GitHub, but the live site is not yet appearing as a source citation.
- **"GAIA React Claude workflow gaiareact.com"**: No results from `gaiareact.com`. Results pointed to Medium articles and GitHub repos about Claude Code + React in general.

**Interpretation**: The site is not yet surfacing in live web search or AI tool citations. This is consistent with a newly indexed or unindexed domain. The absence from search results after three weeks is worth monitoring but not yet alarming — domain authority and inbound links are the primary accelerants from here.

### IndexNow (CI integration)

The CI workflow (`pages.yml`) pings IndexNow on every deploy for six routes: `/`, `/why/`, `/features/`, `/get-started/`, `/consulting/`, `/about/`. The three excluded routes (`/roadmap/`, `/mentorship/`, `/sponsors/`) are intentionally absent — they are either not yet public or deliberately unlisted.

---

## Limitations

The following checks could not be performed automatically and require manual action from the site owner:

| Check | Reason blocked | Manual alternative |
|-------|---|---|
| Live HTML content verification | CDN/WAF blocks cloud IPs (`host_not_allowed`) | Use `curl` from local machine or browser DevTools → View Page Source |
| Google Search Console — indexed route count | No GSC MCP connector | GSC → Pages report → Indexed count (expect 6–9) |
| Google Search Console — "Crawled - not indexed" issues | No GSC MCP connector | GSC → Pages → Not indexed → drill into reason |
| Google Search Console — impressions trend | No GSC MCP connector | GSC → Performance → compare 30-day windows before/after 2026-04-30 |
| URL Inspection per route | No GSC MCP connector | GSC → URL Inspection for each of the 9 routes; confirm "URL is on Google" and that "View crawled page" shows rendered HTML |
| Rich Results Test | Requires browser/JS | `https://search.google.com/test/rich-results` for each route |
| Schema.org validator | Requires browser/JS | `https://validator.schema.org/` — paste each route's JSON-LD block |
| Bing Webmaster Tools | No Bing MCP connector | Check sitemap submission status; resubmit if needed |

---

## Issues Found

### Note — Route exclusions are intentional

`/roadmap/`, `/mentorship/`, and `/sponsors/` are absent from the prerender script and sitemap by design. `/roadmap/` is not yet shipped. `/mentorship/` is CLI-reachable-only with `noindex`. `/sponsors/` is withheld as launch strategy. Do not add these to `scripts/prerender.mjs` or `public/sitemap.xml` until each route is explicitly launched.

### P1 — Hydration mismatch unresolved

React error #418 (hydration mismatch) is still reported on production per `notes/hydration-mismatch-fix.md`. This does not affect crawl content (Puppeteer captures the fully rendered DOM before hydration), but it causes a DOM flash on real user visits and may depress Core Web Vitals scores (CLS spike during the replacement). Not a blocker for indexing, but worth fixing before running a CWV audit.

---

## Recommended Next Actions

1. **Manual Search Console checks** (user action required):
   - GSC → Pages → confirm at least 6 routes show "Indexed"
   - GSC → URL Inspection → "View crawled page" on each indexed route to confirm rendered HTML
   - Resubmit sitemap if any routes show "Crawled - currently not indexed"

2. **Rich Results Test** (manual): Run `https://search.google.com/test/rich-results` for at least `/`, `/consulting/`, `/get-started/`, and `/about/`. These carry the richest schemas (SoftwareApplication, Service, TechArticle, Person) most likely to generate rich snippets.

3. **H1 audit** (resolved): `notes/h1-audit.md` documents missing `<h1>` tags on five routes. As of 2026-05-21, all nine pages have `<h1>` elements in their React components. This note can be closed.

4. **Hydration mismatch** (P1): See `notes/hydration-mismatch-fix.md` for investigation steps.

5. **Link building**: The absence from search results after three weeks suggests the domain has low authority. No amount of on-page SEO compensates for zero inbound links. Consider: submitting to developer directories (Made with React, Product Hunt, etc.), posting a launch thread on X/Twitter referencing the domain, or requesting a mention in the Claude Code docs or ecosystem listing.

---

## Appendix: robots.txt (verified)

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /
...
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
...
Sitemap: https://gaiareact.com/sitemap.xml
```

All major crawlers explicitly allowed. Sitemap directive present. ✅

## Appendix: sitemap.xml (current state)

Six public routes listed; three intentionally excluded:

| Route | In sitemap | Priority | Last modified |
|-------|:-:|:-:|:-:|
| `/` | ✅ | 1.0 | 2026-05-12 |
| `/why/` | ✅ | 0.9 | 2026-05-12 |
| `/get-started/` | ✅ | 0.9 | 2026-04-30 |
| `/features/` | ✅ | 0.9 | 2026-05-12 |
| `/consulting/` | ✅ | 0.9 | 2026-04-28 |
| `/about/` | ✅ | 0.6 | 2026-04-28 |
| `/roadmap/` | ❌ | — | Intentional — not yet shipped |
| `/mentorship/` | ❌ | — | Intentional — unlisted/noindex |
| `/sponsors/` | ❌ | — | Intentional — launch strategy |

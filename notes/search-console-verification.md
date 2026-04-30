# Search Console Verification — Continuation Prompt

## Trigger
2–3 weeks after PR #11 merges and the prerendered build deploys.

## Context
PR #11 made content visible to crawlers without JS execution. Indexing impact takes 1–4 weeks to show up in Search Console. This is a verification step, not a code change.

## What needs to happen

### 1. Confirm verification & sitemap submission
- https://search.google.com/search-console → property `gaiareact.com`
  - Verify still active (DNS TXT or HTML file method)
  - Sitemaps tab → confirm `sitemap.xml` is submitted and "Success"
- https://www.bing.com/webmasters → same checks
- https://www.indexnow.org/ → optional ping for faster reindexing

### 2. Check indexing improvements
In Search Console → Pages report:
- "Indexed" count should be 7 (or matching current route count)
- "Not indexed" → drill into "Crawled - currently not indexed" or "Discovered - currently not indexed" to see if any routes are stuck

In Performance → 30-day window:
- Compare impressions and clicks to a 30-day window from before merge
- Look for queries that started ranking (each route's `<title>` and JSON-LD descriptions are the new signals)

### 3. URL inspection per route
For each of the 7 routes, run URL Inspection:
- Confirm "URL is on Google"
- Click "View crawled page" → confirm Googlebot sees rendered HTML (not the empty `<div id="root">`)
- Confirm "Page indexing" status is "URL is on Google" not "Crawled - currently not indexed"

### 4. Rich Results Test
For each route, run https://search.google.com/test/rich-results — confirm JSON-LD entities (Person, Organization, Service, etc.) parse without errors.

### 5. AI / LLM crawler checks
- Ask Claude (or Perplexity, or ChatGPT search): "what is GAIA React" — confirm sources include gaiareact.com
- Search for site-specific queries to gauge how AI tools represent the site

### 6. Report findings
Note in this doc or as a GitHub issue:
- Indexed routes count
- Any indexing failures + their reason
- Impression/click delta vs pre-merge
- Any AI crawler representation issues

## Constraints
- Don't make code changes during this session unless something is provably broken
- Don't submit Disavow entries or aggressive SEO tactics
- If indexing problems exist, file follow-up issues with specifics rather than guessing fixes

## What "good" looks like
- All 7 routes indexed
- Rich Results Test passes for all routes
- AI crawlers cite gaiareact.com when asked about the project
- Impression count > pre-merge baseline (even if clicks haven't moved yet)

## Schedule
This is well-suited for `/schedule` as a one-time agent in 2 weeks post-merge.

# Route Changes — Continuation Prompt

## Trigger
ONLY if the redesign restructures URL paths (e.g., `/features` splits into `/features/rules`, `/features/wiki`; `/docs` nests into `/docs/commands`, `/docs/agents`; new pages added; existing pages renamed).

If routes stay the same, skip this entirely.

## Context
PR #11 hardcoded canonical URLs, sitemap entries, and JSON-LD `@id` references to the current 7-route structure. Any route change requires updates in multiple synchronized places.

## What needs to ship when routes change

### 1. Vite entry points — `vite.config.ts`
Add/remove/rename entries in `rollupOptions.input`. Keys are entry names, values are paths to `index.html` shells. Each route needs its own folder at root with an `index.html`.

### 2. HTML shells
For each new route, create `<route>/index.html` matching the existing pattern (meta tags, JSON-LD, font preconnects, Cloudflare beacon, `<script type="module" src="/src/pages/<route>/main.tsx">`).

### 3. Per-page React entry
Create `src/pages/<route>/main.tsx` — copy verbatim from any existing one (they're all identical dual-mode `createRoot`/`hydrateRoot`).

### 4. Canonical URLs
Update `<link rel="canonical" href="https://gaiareact.com/<new-path>/">` in each affected shell. Match the actual deployed path including trailing slash.

### 5. JSON-LD `@id` references
The `@id` URLs encode the canonical URL of the page or entity. For each renamed/added route, update:
- The page-specific `@id` (e.g., `https://gaiareact.com/<route>/#page`)
- The breadcrumb `@id` (`https://gaiareact.com/<route>/#breadcrumb`)
- BreadcrumbList items if the parent path changes

Shared `@id` references (`#person`, `#organization`, `#software`) stay stable — they don't encode page paths.

### 6. `public/sitemap.xml`
Update `<loc>` for each route. Add new entries, remove gone ones. Bump `<lastmod>` on the changed routes. Set `<priority>` per page importance (home = 1.0, primary nav pages = 0.9, secondary = 0.6–0.7).

### 7. Header navigation — `src/components/Header.tsx`
Update `NAV_DESKTOP` array if the new structure adds or removes nav items.

### 8. Footer
If footer has internal links (currently just GitHub), update if any moved pages are referenced.

### 9. Prerender script — `scripts/prerender.mjs`
Update the `ROUTES` array to match the new route list. Each entry: `{url: '/path/', out: 'path/index.html'}`. The script will fail to prerender any route not in this list.

### 10. Submit updated sitemap
After deploy:
- Google Search Console → Sitemaps → resubmit `https://gaiareact.com/sitemap.xml`
- Bing Webmaster Tools → Sitemaps → resubmit
- IndexNow ping (if enabled): `curl "https://www.bing.com/indexnow?url=https://gaiareact.com/&key=<key>"` — useful for fast reindexing of changed/new URLs

### 11. 301 redirects (GitHub Pages limitation)
GitHub Pages doesn't support server-side redirects. If a route is renamed (not just added), options:
- Leave a stub `index.html` at the old path with `<meta http-equiv="refresh" content="0; url=/new-path/">` (works, but slow and bad for SEO)
- Migrate to Cloudflare Pages or Netlify if proper 301s are needed
- Accept dead URLs and update inbound links manually

## Constraints
- Keep route structure flat where possible; deep nesting hurts crawl depth.
- Trailing slashes consistent across canonical, sitemap, OG URL, and `@id` — current convention is trailing slash on every path.
- Quality gate: `pnpm lint-all && pnpm build` must pass.
- The `pnpm build` step runs the prerender script, which will fail if a route exists at build but isn't in `scripts/prerender.mjs`.

## Verify
- `pnpm build` succeeds and prerenders every route
- Each route returns 200 in production
- Old URLs that should be gone return 404 (or redirect cleanly)
- Validate updated sitemap.xml syntax via https://www.xml-sitemaps.com/validate-xml-sitemap.html
- Check no internal links point to old paths: `grep -rn "href=\"/old-path" src/`

## Ship
Branch name pattern: `redesign/<description>` (since this is part of the redesign). Single PR with all route changes is fine — they're tightly coupled.

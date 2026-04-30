# Per-Page OG Images and Icon Set — Continuation Prompt

## Trigger
Final visual rebrand has landed. Brand colors, typography, and imagery are locked.

## Context
PR #11 left the entire site sharing a single `og-image.png` and a single `apple-touch-icon.png`. Distinct OG images materially lift social CTR; full icon set is needed for proper iOS/Android home-screen behavior. None of this was done earlier because changing it pre-redesign would mean redoing it post-redesign.

## What needs to ship

### 1. Per-page OG images (1200×630)
Generate one for each route and save to `public/og/`:
- `public/og/home.png` — hero/headline image
- `public/og/features.png`
- `public/og/docs.png`
- `public/og/consulting.png`
- `public/og/get-started.png`
- `public/og/roadmap.png`
- `public/og/about.png` — Steven photo + name

Update each HTML shell at root (`index.html`, `about/index.html`, etc.):
- `<meta property="og:image" content="https://gaiareact.com/og/<page>.png">`
- `<meta name="twitter:image" content="https://gaiareact.com/og/<page>.png">`
- Keep `og:image:width="1200"`, `og:image:height="630"`, and update `og:image:alt` to be page-specific.

Old `public/og-image.png` can stay as a fallback or be removed.

### 2. Apple touch icon set
Generate from the new logo:
- `apple-touch-icon-57x57.png` through `apple-touch-icon-180x180.png` (the Apple-recommended 9 sizes)
- Save to `public/icons/`
- Update root HTML shells with one `<link rel="apple-touch-icon" sizes="<size>" href="/icons/apple-touch-icon-<size>.png">` per size

Recommended generator: realfavicongenerator.net (single SVG → full set + manifest + HTML snippet).

### 3. `manifest.webmanifest`
Create `public/manifest.webmanifest`:
```json
{
  "name": "GAIA",
  "short_name": "GAIA",
  "description": "The React workflow for Claude.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#141413",
  "theme_color": "#141413",
  "icons": [
    {"src": "/icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
    {"src": "/icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
    {"src": "/icons/icon-512-maskable.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"}
  ]
}
```

Replace placeholder colors with final brand tokens from `~/Development/gaia-react/branding/DESIGN.md`.

Add to each HTML shell:
- `<link rel="manifest" href="/manifest.webmanifest">`

### 4. `theme-color` meta
Add to each HTML shell `<head>`:
```html
<meta name="theme-color" content="#141413" media="(prefers-color-scheme: dark)">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
```

Use final brand colors. Sets mobile browser chrome bar.

## Update JSON-LD
The `Organization.logo` field currently points to `og-image.png`. Update to a square logo (e.g. `https://gaiareact.com/icons/icon-512.png`):
```json
"@type": "Organization",
"logo": "https://gaiareact.com/icons/icon-512.png"
```
Updates needed in `index.html`, `docs/index.html`, `get-started/index.html` (the three pages that include the Organization graph node).

## Constraints
- All paths must be absolute (`/icons/...`) so they work from any subroute.
- Must rebuild prerender after changes (`pnpm build`) so dist HTML picks up the new shells.
- Quality gate: `pnpm lint-all && pnpm build` must pass.
- Keep the prerender pipeline intact — these are static asset + meta tag changes, no React component impact.

## Verify
- Validate OG previews in https://www.opengraph.xyz/ for each route
- Validate manifest in Chrome DevTools → Application → Manifest
- Run https://realfavicongenerator.net/favicon_checker against deployed site
- Spot-check on iPhone (Add to Home Screen → icon shows correctly) and Android Chrome (PWA install prompt appears)

## Ship
Branch name suggestion: `seo/og-images-and-icons`. Open PR against main with screenshots of new OG previews.

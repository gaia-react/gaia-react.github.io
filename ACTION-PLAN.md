# SEO Action Plan — gaiareact.com
**Generated:** 2026-05-22 | **Overall Score: 71/100**

---

## Critical — Fix Immediately

### C1 + C2 · Fix broken Article image URLs
**Impact:** Restores TechArticle (Get Started) and Article (Why) rich result eligibility in Google Search.

Both `Article.image` and `TechArticle.image` in JSON-LD reference URLs that 404:
- `https://gaiareact.com/og/get-started.png` — does not exist
- `https://gaiareact.com/og/why.png` — does not exist

**Option A — Quick fix (30 min):** In `src/pages/why/Why.tsx` and `src/pages/get-started/GetStarted.tsx`, change the schema `image.url` to point to the existing shared image:
```json
"image": {
  "@type": "ImageObject",
  "url": "https://gaiareact.com/og-image.png",
  "width": 1200,
  "height": 630
}
```

**Option B — Preferred (once per-page OG images are created):** Create `public/og/why.png` and `public/og/get-started.png` at 1200×630, then wire both the JSON-LD `image.url` and the `og:image` meta tags to the new files. The schema already anticipates these paths — only the files are missing.

---

## High Priority — Fix Within 1 Week

### H1 · Migrate hosting to Cloudflare Pages
**Impact:** Unlocks all 6 missing security headers (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) in a single deploy.

GitHub Pages cannot serve custom HTTP response headers. Cloudflare Pages is free, supports the same GitHub Actions integration, and honors a `_headers` file placed in `public/` (copied to `dist/` by Vite automatically).

Add `public/_headers`:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://cloudflareinsights.com; frame-ancestors 'none'
```

---

### H2 · Expand Why page + add primary keywords
**Impact:** Why is the only page aligned with informational SERP intent. At 425 words with no "Claude Code" in body copy, it cannot rank.

Files: `src/pages/why/` sections

- Add "Claude Code" and "React" to body copy naturally (at least 3 occurrences each)
- Expand from 425 words to 900–1,200 words
- Add a before/after code specimen illustrating one failure mode (convention drift is the strongest candidate — show a commit that GAIA's pre-commit hook would block)
- Add 2–3 quantified claims (number of enforced rules, something measurable about drift/token cost)
- Add H3 subheadings within each failure-mode section to break up the prose wall

---

### H3 · Fix Features H1 to include primary keyword
**Impact:** H1 and title tag currently target different concepts — H1 is brand voice, title is keyword-correct. H1 should anchor the primary keyword.

File: `src/pages/features/Features.tsx` (or the Features hero section)

Current H1: `"The Discipline of GAIA"`
Recommended: `"GAIA Features: Rules, Hooks, and Agents for Claude Code"` or similar that preserves brand voice while including "Claude Code."

---

### H4 · Convert SVG logo components to static images
**Impact:** Removes 60 KB gz from Features initial JS parse budget.

File: `src/pages/features/sections/Stack.tsx`

18 logo components (`ZodLogo`, `StorybookLogo`, `PlaywrightLogo`, etc.) are inlined JSX SVG trees. They are static, non-interactive, and never receive dynamic props.

**Option A (best):** Export each as a `.svg` file to `public/assets/logos/`, replace JSX with `<img src="/assets/logos/zod.svg" width="X" height="X" alt="Zod" loading="lazy" />`. Eliminates their contribution to the JS bundle entirely.

**Option B:** Keep as JSX but lazy-load the entire Stack section: `const Stack = React.lazy(() => import('./Stack'))` wrapped in `<Suspense>`. This defers the 60 KB gz until the section scrolls into view.

---

### H5 · Fix `steven.jpg` — resize, convert to WebP, add fetchpriority
**Impact:** Saves 42 KB per visit on About and Consulting; fixes LCP on those pages.

```bash
# Install cwebp if needed: brew install webp
cwebp -q 85 -resize 96 96 public/steven.jpg -o public/steven.webp
```

Files: `src/pages/about/sections/About.tsx`, `src/pages/consulting/sections/Consulting.tsx`

Replace:
```tsx
<img src="/steven.jpg" width={48} height={48} alt="Steven Sacks" />
```
With:
```tsx
<img src="/steven.webp" width={48} height={48} alt="Steven Sacks" fetchpriority="high" />
```

Also add a preload link to `about/index.html` and `consulting/index.html` templates:
```html
<link rel="preload" as="image" href="/steven.webp" fetchpriority="high" />
```

---

### H6 · Make Features FAQPage questions visible in HTML
**Impact:** FAQPage schema on Features has 6 Q&A entries that don't render visibly — Google requires visible Q&A for rich result eligibility.

File: `src/pages/features/` (FAQ section or schema component)

Either:
- Render the FAQ questions as a visible expandable accordion or static section on the Features page, OR
- Remove the FAQPage schema if there is no intent to surface the questions visibly

Note: Google removed FAQ rich results for commercial sites in August 2023. The value here is AI/LLM citation (Perplexity, ChatGPT), which does not require visible rendering. If the sole goal is GEO, keeping the schema without visible rendering is acceptable — just don't expect Google rich results from it.

---

### H7 · Add social proof to homepage
**Impact:** Zero social proof is the single largest barrier to conversion from the skeptical-tech-lead audience.

Minimum viable:
- GitHub star count (can load client-side via GitHub API — `https://api.github.com/repos/gaia-react/gaia`)
- NPM weekly downloads badge or stat
- One real testimonial quote (even anonymous "a staff engineer at a fintech team")

Ideally: a small social proof strip above or below the hero — "X GitHub stars · MIT · React 19."

---

## Medium Priority — Fix Within 1 Month

### M1 · Add H2 structure to About page
File: `src/pages/about/` sections

The About page heading hierarchy jumps H1 → H3 with no H2s. Add at minimum:
- `<h2>Then and Now</h2>` (before the career narrative)
- `<h2>Selected Work</h2>` (before the work history)
- `<h2>Why This, Now</h2>` (before the closing section)

---

### M2 · Fix og:type mismatch on article and bio pages
Files: `src/pages/why/`, `src/pages/get-started/`, `src/pages/about/` (head/meta sections)

| Page | Current | Correct |
|---|---|---|
| Why | `og:type: website` | `og:type: article` |
| Get Started | `og:type: website` | `og:type: article` |
| About | `og:type: website` | `og:type: profile` |

For About, also add:
```html
<meta property="og:profile:first_name" content="Steven" />
<meta property="og:profile:last_name" content="Sacks" />
<meta property="og:profile:username" content="stevensacks" />
```

---

### M3 · Create per-page OG images
**Impact:** Social shares for Why and Get Started will use a relevant image rather than the generic homepage graphic. Also resolves C1+C2 when combined with updating the `og:image` meta tags.

Create at 1200×630:
- `public/og/why.png` — editorial/article visual
- `public/og/get-started.png` — terminal/code visual

Then update `og:image` meta tags on both pages to match.

---

### M4 · Fix above-fold data-reveal hydration flash
Files: `src/styles.css`, `src/hooks/useScrollReveal.ts`

Prerendered content is visible in HTML, then briefly hidden when CSS applies `opacity: 0` to `[data-reveal]`, then revealed after `useScrollReveal` fires. Fix by gating the hidden state on a class applied only after JS loads:

`src/styles.css`:
```css
/* Change from: */
[data-reveal] { opacity: 0; transform: translateY(12px); ... }

/* To: */
.js-ready [data-reveal]:not(.is-in) { opacity: 0; transform: translateY(12px); ... }
```

`src/hooks/useScrollReveal.ts` — add as first line in the hook body:
```ts
document.documentElement.classList.add('js-ready');
```

---

### M5 · Add "Claude Code" to Consulting body copy
File: `src/pages/consulting/sections/Consulting.tsx`

Title promises "Claude Code Consulting for React." Body uses neither term naturally. Add 2–3 organic uses of "Claude Code" in the service descriptions and intro paragraph.

---

### M6 · Add Get Started to footer nav
File: `src/components/Footer.tsx` (or wherever footer nav links are defined)

The footer nav lists: Why GAIA, Features, About, Consulting, Docs, GitHub. Get Started is absent. Add it — it is the primary conversion destination and footer users have scrolled past all CTAs.

---

### M7 · Add font fallback metrics to reduce FOUT CLS
File: `src/styles.css` (Fraunces `@font-face` declarations)

Use `fontpie` or `capsizecss` to compute Fraunces→Georgia override values. Approximate values:
```css
@font-face {
  font-family: 'Fraunces Variable';
  /* existing properties... */
  ascent-override: 92%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 108%;
}
```

---

### M8 · Audit per-page italic font preload
Files: `why/index.html`, `get-started/index.html`, `features/index.html`, `consulting/index.html` (HTML templates)

The italic Fraunces variant (80 KB) is preloaded on every page. Remove the preload from pages where italic does not appear above the fold — this frees bandwidth for the actual LCP resource on those pages.

---

### M9 · Add Why Article missing recommended fields
File: `src/pages/why/` (schema/JSON-LD component)

Add to the Article `@graph` node:
```json
"name": "Why Claude Code Breaks Without Structure",
"url": "https://gaiareact.com/why/",
"description": "The case for project-level discipline in AI-built code. Why vibe coding is broken, and how GAIA fixes it."
```

---

### M10 · Add worksFor/alumniOf to About Person schema
File: `src/pages/about/` (schema component)

```json
"worksFor": {
  "@type": "Organization",
  "name": "Trek10",
  "url": "https://www.trek10.com/"
},
"knowsAbout": ["React", "Claude Code", "AI-assisted development", "Frontend architecture"]
```

---

### M11 · Add Consulting FAQPage schema with visible questions
File: `src/pages/consulting/`

Recommended Q&A:
- "Do you work with codebases that don't use GAIA?"
- "What if my team isn't using React?"
- "Can I start with a Retainer without an Audit first?"
- "Do you sign NDAs?"

Add the schema as FAQPage in the `@graph` and render the questions visibly on the page.

---

### M12 · Add dns-prefetch for external navigation targets
Files: All HTML templates

```html
<link rel="dns-prefetch" href="https://github.com" />
<link rel="dns-prefetch" href="https://docs.gaiareact.com" />
```

---

### M13 · Improve Why page meta description
Current (105 chars): Too short, describes only the problem.
Target (145–155 chars): Add the solution signal.

Example: Add "...and how GAIA's enforced rules, pre-commit gates, and persistent memory fix it. Open source, MIT." to reach ~155 chars.

---

### M14 · Add keyword-anchored internal links
Files: `src/pages/why/` and `src/pages/features/` body copy

Instead of only "Get Started →" at the close, add inline links within body copy:
- On Why: link "pre-commit hooks" → `/features/#trust`, "context bloat" → `/features/#memory`
- On Features/Why: link "install GAIA" or "create-gaia command" → `/get-started/` (adds keyword-anchored link equity to the install page)

---

### M15 · Fix Consulting Retainer priceSpecification
File: `src/pages/consulting/` (schema component)

Either add `"maxPrice"` if a ceiling exists, or remove `priceSpecification` entirely for the Retainer and express pricing in the `description` field only:
```json
"description": "Ongoing structural support starting at $5,000/month. Scope and ceiling negotiated per engagement."
```

---

### M16 · Add Organization stub to Consulting @graph
File: `src/pages/consulting/` (schema component)

```json
{
  "@type": "Organization",
  "@id": "https://gaiareact.com/#organization",
  "name": "GAIA",
  "url": "https://gaiareact.com/"
}
```

---

## Low Priority — Backlog

### L1 · Add a changelog page
Schema declares `softwareVersion: "1.2.3"` but no release history is reachable from the site. A `/releases/` or `/changelog/` page linked from the footer or Get Started page adds freshness signals and answers "is this actively maintained?"

### L2 · Add a comparison page
"GAIA vs plain CLAUDE.md" is the primary unanswered objection from the target audience. A `/why/vs-claude-md/` article or a comparison table on the Why page would be the highest-converting piece of new content on the site.

### L3 · Create a YouTube video
A 3–5 minute screencast of `npx create-gaia@latest my-app` titled "How to Set Up Claude Code for React with GAIA" is the highest-correlation AI citation signal available (YouTube correlation: 0.737). Publish and link from Get Started.

### L4 · Add privacy policy and terms of service
No privacy policy or ToS on any page. Required for professional evaluation by teams with legal review. Even a minimal Markdown page at `/privacy/` and `/terms/` (noindex is fine) removes a friction point.

### L5 · Add twitter:site meta tag
If a Twitter/X handle exists for GAIA or Steven Sacks, add globally:
```html
<meta name="twitter:site" content="@handle" />
<meta name="twitter:creator" content="@stevenhandle" />
```

### L6 · Add fetchpriority="high" to font preload links
```html
<link rel="preload" as="font" type="font/woff2" crossorigin fetchpriority="high"
  href="/assets/fraunces-latin-standard-normal-DihXLNYH.woff2" />
```

### L7 · Add Organization description to home schema
```json
"description": "GAIA is the Claude Code workflow for React teams. Open-source project scaffolding, coding rules, and agentic design patterns for production AI-assisted development."
```

### L8 · Add llms.txt improvements
- Add `## License` section declaring MIT
- Rewrite `/why/` entry to answer a real user question: "Why Claude Code produces unreliable output without project-level structure, and how enforced rules, hooks, and audits change the outcome."
- Add `## Optional` section to separate marketing pages from code/docs

### L9 · Validate www redirect live
Confirm `https://www.gaiareact.com` → `https://gaiareact.com` 301 is working. Cannot be verified from static files.

### L10 · Add H3 subheadings to Consulting engagement sections
Each engagement (Audit, Migration, Foundation, Retainer) is an H2. Deliverable items could be H3-grouped for better scannability and passage-level indexing.

### L11 · Add a "Get Started after install" section to the Get Started page
A 100-word "What to do next" section with 3–4 first-session actions would reduce post-install drop-off to docs.

### L12 · Add Contributing/Community section to footer or Get Started
"Open source. MIT." in the footer has no follow-through. Link to GitHub issues, CONTRIBUTING.md, or a Discord/community space if one exists.

---

## Issue Count by Severity

| Severity | Count |
|---|---|
| Critical | 2 |
| High | 7 |
| Medium | 16 |
| Low | 12 |
| **Total** | **37** |

---

## Effort Estimate

| Priority tier | Est. hours |
|---|---|
| Critical (C1+C2) | 0.5 hr |
| High (H1–H7) | 12–18 hrs (H1 platform migration is the bulk) |
| Medium (M1–M16) | 10–14 hrs |
| Low (L1–L12) | 20+ hrs (L1–L3 are content; L4 is legal copy) |

# SEO Full Audit Report — gaiareact.com
**Date:** 2026-05-22 | **Build:** React 19 / Vite / GitHub Pages (prerendered static)

---

## SEO Health Score: 71 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 81 | 17.8 |
| Content Quality | 23% | 71 | 16.3 |
| On-Page SEO / SXO | 20% | 58 | 11.6 |
| Schema / Structured Data | 10% | 78 | 7.8 |
| Performance (CWV) | 10% | 75 | 7.5 |
| AI Search Readiness (GEO) | 10% | 74 | 7.4 |
| Images | 5% | 60 | 3.0 |
| **Total** | | | **71.4** |

---

## Executive Summary

gaiareact.com is technically well-built: prerendered HTML, clean canonicals, IndexNow, solid schema foundation, and correct AI-crawler access. The site will not be penalized. It will rank for brand searches.

The ceiling is editorial. Every target query — "Claude Code React workflow," "AI coding assistant React," "Claude Code tools for teams" — returns tutorials, guides, and comparisons. The site has no indexed editorial surface. The Why page is one article; it needs company, depth, and keywords.

**Top 5 critical issues:**
1. Broken Article image URLs — `/og/why.png` and `/og/get-started.png` do not exist, suppressing Article/TechArticle rich results
2. No security headers — GitHub Pages cannot serve them; requires platform migration
3. Zero social proof — no GitHub stars, testimonials, or adoption signals on any page
4. Page-type mismatch — target SERPs reward informational content; site has none indexed beyond `/why/`
5. Why page undersized and missing primary keywords — 425 words, "Claude Code" never appears in body copy

**Top 5 quick wins:**
1. Fix both JSON-LD image URLs to point to existing `og-image.png` (30 min)
2. Add "Claude Code" and "React" to Why page body copy (1 hr)
3. Fix Features H1 to include the primary keyword (15 min)
4. Add Get Started to footer nav (15 min)
5. Add `fetchpriority="high"` to `steven.jpg` on About and Consulting (15 min)

---

## 1. Technical SEO — 81/100

**Platform:** GitHub Pages + Cloudflare Analytics (beacon only, no proxy)
**Rendering:** Puppeteer prerender at build time — all 7 routes in `dist/` have full HTML

### Crawlability — PASS
- `robots.txt` present, `Sitemap:` directive correct, global `Allow: /`
- 8 AI crawlers explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `llms.txt` present and correctly formatted at root

### Sitemap — PASS with gap
- 6 URLs, valid XML, correct namespace, `lastmod` per-file from git log
- `/sponsors/` and `/mentorship/` correctly excluded (noindex pages)
- **[Medium]** All `lastmod` values are identical when built in the same cycle

### Canonical Tags — PASS
- Self-referencing canonical on every page, including noindex pages — no conflicts

### Meta Robots / Noindex — PASS
- `/sponsors/` and `/mentorship/`: `noindex, follow` — intentional, matches strategy
- Neither page is linked from any indexable page — clean noindex signal
- `/sponsors/` is CSR-only (empty `<div id="root">`); noindex prevents exposure but if ever unblocked, it will be empty to crawlers

### Security Headers — FAIL (Critical infrastructure gap)
GitHub Pages cannot serve custom HTTP headers. The following are absent on every request:

| Header | Severity |
|---|---|
| `Strict-Transport-Security` | High |
| `Content-Security-Policy` | High |
| `X-Frame-Options` / `frame-ancestors` | High |
| `X-Content-Type-Options: nosniff` | Medium |
| `Referrer-Policy` | Medium |
| `Permissions-Policy` | Medium |

**Root cause and fix:** Migrate to Cloudflare Pages (free tier, same GitHub Actions integration). A `public/_headers` file is sufficient to resolve all six items at once.

### Redirects — PASS
- No redirect chains in static output
- All internal links use root-relative trailing-slash paths matching canonical form
- **[Low]** `www.gaiareact.com` redirect behavior unverifiable from static files alone — validate live

### Internal Links — PASS with gap
- Nav and footer links consistent across all pages; `aria-current="page"` applied correctly
- **[Medium]** `/get-started/` is absent from footer nav — it appears in the header CTA and page-level CTAs but not the footer link list
- **[Low]** No `twitter:site` / `twitter:creator` meta on any page

### URL Structure — PASS
- All lowercase, trailing slashes, one level deep from root, no query strings

### IndexNow — PASS
- Key file present, `pages.yml` POSTs on every deploy, 6-URL payload matches sitemap exactly

### JS Rendering — PASS
- Prerender script runs Puppeteer at build time; all indexable pages have complete HTML
- `window.__PRERENDER__` flag prevents terminal animations during capture
- `.is-in` classes stripped before HTML capture — no hydration mismatch from reveal state

---

## 2. Content Quality — 71/100

### E-E-A-T Assessment

| Signal | Score | Notes |
|---|---|---|
| Experience | 72 | Strong work history with verifiable metrics; no user testimonials or case studies for GAIA React itself |
| Expertise | 78 | Specific technical depth (1,314 lint rules, Karpathy reference, 15 named Agentic Design patterns); no external citations |
| Authoritativeness | 68 | GitHub + npm verified; no external press, blog mentions, GitHub stars surfaced, NPM downloads |
| Trustworthiness | 76 | Email, cal.com, photo, MIT license; no privacy policy, no ToS, no security disclosure |

### Page Word Counts

| Page | Words | Status |
|---|---|---|
| Home | ~507 | Pass |
| Why | ~425 | **Fail — target 900+ for a concept/argument page** |
| Features | ~2,387 | Pass |
| About | ~366 | Borderline — low, no H2s |
| Get Started | ~327 | Borderline — defensible for install page |
| Consulting | ~697 | Pass |

### Keyword Targeting Issues

- **[High]** Why page body never uses "Claude Code" or "React" — title targets "Claude Code" but body doesn't confirm it
- **[High]** Features H1 ("The Discipline of GAIA") doesn't match title ("GAIA Features: Claude Code Rules, Hooks, Agents & Memory")
- **[Medium]** Consulting body: zero "Claude Code," one "React" — title promises "Claude Code Consulting for React"
- **[Medium]** About page: no "Claude Code" or "React" in body copy

### Title Tags and Meta Descriptions

| Page | Title Length | Meta Length | Status |
|---|---|---|---|
| Home | 40 chars | — | Under 50-60 target |
| Why | 47 chars | 105 chars | Meta under 150-160 target |
| Features | 60 chars | 148 chars | Pass |
| About | 60 chars | 155 chars | Pass |
| Get Started | 57 chars | 143 chars | Pass |
| Consulting | 58 chars | 143 chars | Pass |

### Heading Structure Issues

- **[High]** About page: no H2 tags — heading hierarchy jumps H1 → H3; breaks semantic structure and passage-level citability
- **[Medium]** Get Started H1 has a space rendering artifact: "One command isall you need." — likely a `<br>` collapsing in crawler text extraction; verify in Rich Results Test
- **[Low]** "Discipline you can install." H2 shared verbatim across Home, Why, Features — shared CTA module, not a penalty, but attributed to whichever page is indexed most strongly

### Duplicate Content

No actionable duplicate content. The shared closing CTA module (Home/Why/Features) and bio excerpt (About/Consulting) are recognized patterns — not penalty triggers.

### AI-Generated Content Assessment

No markers of low-quality AI content detected. Voice is consistent, opinionated, and verifiably first-person. Claims are specific. No padding or vague filler copy.

### Missing Content Opportunities

- **[High]** No comparison page — "GAIA vs plain CLAUDE.md," "GAIA vs Cursor rules" are primary objections from the target audience with no answer anywhere on the site
- **[High]** Why page needs a worked example — four failure modes named but never illustrated with a before/after code specimen
- **[High]** No changelog — version 1.2.3 is in schema but no release history is reachable from the site
- **[Medium]** Get Started has no "What to do after install" section — no first-session guidance beyond "read the docs"
- **[Medium]** Consulting has no FAQ section — $5K–$25K decisions generate questions that go unanswered
- **[Medium]** No contributing/community page — "Open source. MIT." in footer but no path to GitHub issues or community
- **[Low]** No blog — the highest-leverage SEO investment for capturing informational queries

---

## 3. On-Page SEO / SXO — 58/100

### SERP Backwards Analysis

Every target query returns informational/editorial content (tutorials, guides, comparisons). gaiareact.com is a product landing site. This is a fundamental page-type mismatch for cold organic discovery.

| Query | SERP Page Type | Site's Page Type | Match? |
|---|---|---|---|
| "Claude Code React workflow" | Tutorial articles | Landing page | No |
| "AI coding assistant React" | Listicle comparisons | Landing page | No |
| "Claude Code tools for teams" | Best-practices guides | Landing page | No |

The Why page (`/why/`) is the only exception — it is structured as an editorial article and aligns with informational intent. It is the site's sole organic discovery entry point.

### Persona Scores (1–10: does this page satisfy what an engineering lead searched for?)

| Page | Score | Primary gap |
|---|---|---|
| Home | 7/10 | "What is this" is tagline-implied, not stated; zero social proof |
| Why | 8/10 | Best-aligned page; no internal links between argument and mechanism |
| Features | 6/10 | No above-fold CTA; "Agentic Design" undefined inline; no comparison |
| Get Started | 9/10 | Well-matched; post-install path ends at "read docs" |

### Social Proof — Critical Gap
Zero on any page: no GitHub star count, no user testimonials, no adoption numbers, no named companies, no press mentions. "100,000+ sites" refers to the Flash-era predecessor, not GAIA React, and is presented as a small aside rather than a featured proof point.

### CTA Clarity
- Homepage: Single "Get Started" CTA, clean — Pass
- Why: Closes with "Get Started" + "See the Features" — correct
- Features: No above-fold CTA; closes with "Get Started" — gap on direct landing
- Get Started: Correctly routes to Docs after install — Pass

### Visitor Flow Coverage

| Flow | Coverage |
|---|---|
| Full story (Home → Why → Features → Get Started) | Well-served |
| Quick start (direct to Get Started) | Well-served |
| Pure tech (GitHub → Docs) | Not the site's job |
| Cold organic search | Severely underserved — no editorial content |

---

## 4. Schema / Structured Data — 78/100

### Implementation Summary

| Page | Schema Types |
|---|---|
| Home | WebSite, Organization, Person, SoftwareApplication |
| Why | WebPage, Article, FAQPage, SoftwareApplication, BreadcrumbList |
| Features | WebPage, ItemList, SoftwareApplication, FAQPage, BreadcrumbList |
| Get Started | TechArticle, HowTo, Person, Organization, SoftwareApplication, BreadcrumbList |
| About | AboutPage, Person, BreadcrumbList |
| Consulting | WebPage, Service (OfferCatalog, 4 Offers), Person, BreadcrumbList |

No Microdata or RDFa found. `@id` cross-references are consistent across pages. Entity graph is properly structured.

### Critical Issues

- **[Critical — C1]** Get Started: `TechArticle.image.url` → `https://gaiareact.com/og/get-started.png` — **file does not exist**. Suppresses TechArticle rich results.
- **[Critical — C2]** Why: `Article.image.url` → `https://gaiareact.com/og/why.png` — **file does not exist**. Suppresses Article rich results.

### High Issues

- **[High — H1]** Get Started: HowTo schema — Google removed HowTo rich results September 2023. Zero SERP value for Google. Retain only if GEO/AI discoverability is the explicit goal (valid for that purpose).

### Medium Issues

- **[Medium — M1]** About: `og:type: website` — should be `og:type: profile` for a personal bio page
- **[Medium — M2]** Why + Get Started: `og:type: website` — should be `og:type: article` to match Article/TechArticle JSON-LD
- **[Medium — M3]** All pages: shared `og-image.png` — schema on Why and Get Started already anticipates per-page images; `og:image` tags do not match
- **[Medium — M4]** Why: Article missing `description`, `url`, `name` recommended properties
- **[Medium — M5]** Features: FAQPage questions exist in schema but are **not visible in rendered HTML** — Google requires visible Q&A for FAQ rich results
- **[Medium — M6]** Consulting: Retainer `priceSpecification` has `minPrice` but no `maxPrice`

### Low Issues

- **[Low]** `twitter:site` missing on all pages
- **[Low]** About: `og:profile:*` extension tags absent (only relevant once `og:type: profile` is set)
- **[Low]** Consulting: No `Organization` stub in `@graph` — `@id` cross-page resolution may fail in isolation
- **[Low]** Home: Organization missing `description`
- **[Low]** About: Person missing `worksFor` (Trek10) and `alumniOf`

### Schema Deprecation Notes (Google)
Both FAQPage (Aug 2023, commercial sites) and HowTo (Sept 2023) were removed from Google rich results. Both remain valid for Bing, AI/LLM citation, and Perplexity. Do not remove — retain for GEO value.

---

## 5. Performance (Core Web Vitals) — 75/100

No CrUX field data available. Assessment is lab/static analysis. Validate against PageSpeed Insights.

### Bundle Sizes

| Asset | Raw | Gzip | Notes |
|---|---|---|---|
| `styles-B7EP4Ib3.js` | 186 KB | 59 KB | React 19 runtime (misnamed) |
| `features-CIJBocXH.js` | 212 KB | 60 KB | Features page — 18 SVG logo components |
| `styles--m-4_9q2.css` | 56 KB | 11 KB | Compiled Tailwind |
| `main-DxeakJiF.js` | 14 KB | 4 KB | Home bundle |
| **Home critical path** | **~266 KB** | **~78 KB** | |
| All routes JS total | 497 KB | ~147 KB | |

### CWV Signals

**LCP**
- Home/Why/Features: H1 text (Fraunces) — both font variants preloaded — expected Good
- About/Consulting: `steven.jpg` (384×384 displayed at 48×48, no `fetchpriority="high"`) — risk of Needs Improvement on mobile

**INP:** Expected Good — minimal interaction surface, no heavy event handlers

**CLS**
- All `<img>` elements have explicit `width`/`height` — no image-induced CLS
- `font-display: swap` correct; no `size-adjust` on fallback — small Fraunces/Georgia swap shift on Home hero (~0.03–0.08)
- `[data-reveal]` uses `opacity`/`transform` — no layout contribution
- Above-fold `data-reveal` elements flash invisible on hydration (CSS applies before `useScrollReveal` fires) — micro-CLS adjacent UX defect

### Findings

- **[High]** `steven.jpg` — 46 KB JPEG rendered at 48×48px on About and Consulting. Should be 96×96 WebP (~3–4 KB). Add `fetchpriority="high"` as likely LCP element.
- **[High]** Features: 18 SVG logo components compiled into JS (60 KB gz). Convert to static `<img>` files or lazy-load the Stack section below the fold.
- **[Medium]** Above-fold `data-reveal` flash — add `js-ready` guard class to `useScrollReveal` so prerendered content is visible until JS confirms ready.
- **[Medium]** No `size-adjust`/`ascent-override` on Fraunces `@font-face` — small but measurable FOUT CLS on Home hero.
- **[Medium]** Italic font preload (80 KB) present on every page regardless of above-fold italic usage — audit per-page and remove where not needed.
- **[Medium]** No `dns-prefetch` for `github.com` or `docs.gaiareact.com` — 20–120ms DNS latency on first nav click.
- **[Low]** React runtime chunk misnamed `styles-B7EP4Ib3.js` — cosmetic/maintainability issue.
- **[Low]** No `fetchpriority="high"` on font preload `<link>` elements.
- **[Low]** `og-image.png` is PNG (29 KB) — could be WebP; zero CWV impact, storage-only concern.

---

## 6. AI Search Readiness (GEO) — 74/100

### Platform Scores

| Platform | Score | Key gap |
|---|---|---|
| Perplexity | 76 | Best positioned — SSR + schema + llms.txt |
| Google AIO | 72 | No question-intent headings; tagline-as-definition in hero body |
| Bing Copilot | 71 | No question headings |
| ChatGPT | 68 | No Wikipedia entity; YouTube absent; short passage length |

### Strengths
- Pre-rendered static HTML — AI crawlers see full content without JS execution
- `llms.txt` summary paragraph (~155 words) is optimal for AI citation extraction
- `robots.txt` explicitly allows all major AI crawlers
- Person entity (Steven Sacks) fully defined with cross-linked professional history
- HowTo schema on Get Started is directly aimed at the highest-value install query
- `SoftwareApplication` schema complete with version, license, featureList, downloadUrl

### Gaps
- **[High]** No question-format H2/H3 headings anywhere — AI systems pattern-match on question-intent queries
- **[High]** No direct-answer definition paragraph in homepage body — hero is tagline, not definition; llms.txt does this correctly but the page doesn't
- **[High]** No YouTube presence — YouTube correlation with AI citations is 0.737 (highest signal in corpus)
- **[Medium]** Most body paragraphs are 30–60 words — sweet spot for AI citation is 134–167 words; site has almost no self-contained answer blocks at that length
- **[Medium]** No quantified outcome claims on Why or Features (token cost estimates, time benchmarks, drift reduction metrics)
- **[Medium]** No Wikipedia entity for GAIA React or Steven Sacks — ceiling-defining gap for AI citation rates
- **[Medium]** No Reddit presence or community discussion links
- **[Low]** `llms.txt` missing `## License` section
- **[Low]** `/why/` entry in `llms.txt` is site-internal framing, not question-intent description
- **[Low]** Person schema missing `knowsAbout` array

---

## 7. Images — 60/100

- **[High]** `steven.jpg`: 384×384 JPEG (46 KB) displayed at 48×48px on About and Consulting — 91% unnecessary weight; no WebP alternative; no `fetchpriority="high"` despite being LCP element
- **[Medium]** All pages share one `og-image.png` for social sharing — per-page images improve CTR; Why and Get Started schema already references per-page images that don't exist yet
- **[Medium]** The `/og/` directory referenced in Article schema does not exist — broken image references in structured data
- **[Low]** `og-image.png` is PNG; WebP would reduce size slightly (no CWV impact)
- **[Pass]** All `<img>` elements have explicit `width`/`height` — no CLS from images
- **[Pass]** Below-fold images use `loading="lazy"` correctly
- **[Pass]** Logo and footer logo have correct dimensions

---

## Pages Audited

| Page | Indexable | Prerendered |
|---|---|---|
| `/` | Yes | Yes |
| `/why/` | Yes | Yes |
| `/features/` | Yes | Yes |
| `/get-started/` | Yes | Yes |
| `/about/` | Yes | Yes |
| `/consulting/` | Yes | Yes |
| `/sponsors/` | No (noindex) | No (CSR-only) |
| `/mentorship/` | No (noindex) | Yes |

---

## Specialist Agent Scores

| Agent | Score |
|---|---|
| Technical SEO | 81/100 |
| Content Quality | 71/100 |
| Schema | 78/100 |
| GEO / AI Readiness | 74/100 |
| SXO | 58/100 |
| Performance | 75/100 |

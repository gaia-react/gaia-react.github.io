# Hydration Mismatch Fix — Continuation Prompt

## Context

PR #11 (`seo/json-ld-and-prerender`) added Puppeteer prerendering. After it, every route logs **React error #418** ("Hydration failed because the server rendered HTML didn't match the client") on real client visits. React 19 falls back to client render so the site works, but there's a brief flash where the prerendered DOM is replaced.

The error message reports `args[]=text&args[]=` (text node mismatch, one side empty) on every page. Already tried and confirmed working but not the root cause:

- Footer template literal fix: `<span>© {year} GAIA</span>` → `<span>{`© ${year} GAIA`}</span>` (committed)
- Dual-mode `main.tsx`: `hydrateRoot` only when `root.hasChildNodes()`, else `createRoot` (committed)
- Blocked Cloudflare Insights and Cal.com requests during prerender via Puppeteer request interception (committed)

The issue persists on **all 7 routes**, suggesting the cause lives in shared components — `Header`, `Footer`, `Layout`, or universally-imported assets — not page-specific content.

## Investigation steps

1. **Get the unminified error.** Vite production builds always use minified React. To see the readable mismatch:
   - Add a `recoverableError` callback to `hydrateRoot` in one `main.tsx` that logs the actual diff:
     ```tsx
     hydrateRoot(root, tree, {
       onRecoverableError: (error, errorInfo) => {
         console.error('hydration error:', error, errorInfo);
       },
     });
     ```
   - OR temporarily alias `react-dom` to the development build in `vite.config.ts`:
     ```ts
     resolve: {
       alias: {
         '@': '/src',
         'react-dom/client': 'react-dom/profiling',
       },
     }
     ```
     (Won't give the full dev experience but exposes more detail.)
   - OR install `@welldone-software/why-did-you-render` for deeper diagnostics.

2. **Compare prerendered HTML to client render byte-by-byte.** Add a script that:
   - Reads `dist/<route>/index.html` after prerender
   - Spins up a fresh Puppeteer page, navigates to the same route, captures `page.content()` after a longer settle
   - Diffs the `<div id="root">` subtree
   - First text difference is the culprit

3. **Suspect list (in order of likelihood):**
   - **SVG inlining.** Vite inlines small SVGs as `data:` URLs. The `gaiaLogo` SVG in `Header.tsx` is base64-encoded with URL-percent encoding. Browser parsers may decode/re-encode differently than React's stringify. Try `?url` import to force a separate file: `import gaiaLogo from '../assets/gaia-logo.svg?url';`
   - **Whitespace in JSX.** Look for any pattern like `<p>foo {bar} baz</p>` — React produces 3 text nodes, browser merges them on parse, hydration fails. Already fixed Footer; grep for similar patterns: `grep -rEn "\{[a-z][^}]*\}\s+[a-zA-Z]" src/ --include="*.tsx"`.
   - **HTML entities.** `&apos;`, `&copy;`, etc. inside JSX text vs Unicode chars in the captured HTML. Browser normalizes them; React may not.
   - **`useScrollToHash`.** Calls `scrollIntoView` in `useEffect`. Doesn't mutate DOM but worth disabling temporarily to rule out.
   - **`StrictMode` double-render.** In production it doesn't double-render, so unlikely — but try removing it briefly.

4. **Quick narrowing experiment.** Replace the `<App />` import in `main.tsx` for one route with a minimal component (e.g. `<div>hello</div>`). If hydration is clean, the issue is in `App` / `Layout` / `Header` / `Footer`. Then incrementally add components back until the warning returns.

## Fix and ship

Once the root cause is found:

1. Apply the fix.
2. Run `pnpm build` to rebuild + reprerender.
3. Verify with a one-off Puppeteer script that captures `console.error` and `pageerror` on each prerendered route — should be silent for `args[]=text` errors. (Cloudflare/Cal.com `net::ERR_FAILED` is expected and harmless.)
4. Commit with message like `Fix hydration mismatch on prerendered HTML`.
5. Push to a new branch (`seo/fix-hydration-mismatch` or similar) and open a PR against main.

## Constraints

- **Don't** break the prerender pipeline. The dual-mode `main.tsx` is intentional — the prerender pass needs `createRoot` because dist starts with empty `<div id="root">`.
- **Don't** add SSR (`react-dom/server`) — the existing Puppeteer pipeline is the source of truth. SSR would require components to be rebuilt for SSR-safety which isn't worth it pre-redesign.
- **Do** keep changes minimal. The redesign is coming — components will change. Goal is clean hydration with current components, not a refactor.
- Quality gate: `pnpm lint-all && pnpm build` must pass.

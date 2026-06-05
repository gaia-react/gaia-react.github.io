export default {
  added: [
    'Dependency supply-chain hardening: new package versions are quarantined for 7 days before GAIA installs them, and downgrades are blocked, defending against a compromised fresh release.',
    'GAIA apps now ship with a Content-Security-Policy that restricts which scripts can run, hardening them against script injection.',
  ],
  date: '2026-06-02',
  fixed: [
    "`Form/Chain` merges class names with `twMerge`, so your utility classes override the component's defaults instead of conflicting with them.",
  ],
  headline: 'Faster, cheaper CI and a hardened dependency supply chain.',
  improved: [
    'Code Review Audit on CI is now opt-in and installs on demand. When it runs, it only audits changes since the last green run instead of the whole codebase, so CI is faster and cheaper.',
    'React Router v8 future flags are enabled so your app is ready for the v8 upgrade early. One flag (`v8_passThroughRequests`) changes how loaders and actions receive the request: if you have customized `app/root.tsx`, a small migration is needed. See the full changelog for exact steps.',
    'Kickoff prompts print to the terminal instead of silently copying to your clipboard.',
  ],
  version: '1.3.5',
};

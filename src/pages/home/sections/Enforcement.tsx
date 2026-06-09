const COMMIT_GATES = ['typecheck', 'lint', 'tests', 'build'] as const;

const AUDIT_FINDINGS = [
  {
    file: 'api/session.ts:88',
    note: 'secret committed in source',
    severity: 'CRITICAL' as const,
  },
  {
    file: 'cart/total.ts:24',
    note: 'discount path has no test',
    severity: 'IMPORTANT' as const,
  },
  {
    file: 'ui/Modal.tsx:12',
    note: 'prefer native dialog element',
    severity: 'SUGGESTION' as const,
  },
];

const SEVERITY_STYLE = {
  CRITICAL: 'text-warn',
  IMPORTANT: 'text-accent-soft',
  SUGGESTION: 'text-muted',
};

const GateLedger = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border font-mono text-[0.8rem]">
    <div className="bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2">
      <span className="text-ink-dim text-xs tracking-wider">
        pre-commit · code-review-audit
      </span>
      <span className="text-muted text-[0.6rem] tracking-[0.16em] uppercase">
        every commit · every merge
      </span>
    </div>
    <div className="space-y-4 p-4 leading-relaxed">
      <div>
        <div className="text-ink-dim">
          <span className="text-muted">$ </span>git commit -m &quot;add discount
          logic&quot;
        </div>
        <div className="text-secondary mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
          {COMMIT_GATES.map((gate) => (
            <span key={gate}>{`✓ ${gate}`}</span>
          ))}
        </div>
        <div className="text-muted mt-1">committed → feat/checkout</div>
      </div>
      <div>
        <div className="text-ink-dim">
          <span className="text-muted">$ </span>gh pr merge 412
        </div>
        <div className="mt-2 space-y-1.5">
          {AUDIT_FINDINGS.map((finding) => (
            <div
              key={finding.file}
              className="grid grid-cols-[5rem_1fr] gap-x-3 sm:grid-cols-[5rem_9.5rem_1fr]"
            >
              <span className={SEVERITY_STYLE[finding.severity]}>
                {finding.severity}
              </span>
              <span className="text-muted">{finding.file}</span>
              <span className="text-ink-dim max-sm:col-span-2">
                {finding.note}
              </span>
            </div>
          ))}
        </div>
        <div className="text-warn mt-3">
          ✗ merge blocked, 1 critical and 1 important must clear first
        </div>
      </div>
    </div>
  </div>
);

const SupplyChainPanel = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border">
    <div className="bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2">
      <span className="text-ink-dim font-mono text-xs tracking-wider">
        pnpm-workspace.yaml
      </span>
      <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
        Supply chain
      </span>
    </div>
    <div className="grid gap-6 p-5 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-8 sm:p-6">
      <div className="flex flex-col">
        <span className="text-accent-soft font-mono text-[clamp(2.5rem,6vw,3.5rem)] leading-none tracking-tight">
          7 days
        </span>
        <span className="text-muted mt-2 max-w-40 font-mono text-[0.62rem] leading-snug tracking-[0.16em] uppercase">
          quarantine on every new package
        </span>
      </div>
      <div className="text-ink-dim space-y-3 text-[0.95rem] leading-[1.6] text-pretty">
        <h3 className="text-ink text-[1.15rem] leading-snug">
          A compromised package can’t get in the day it ships.
        </h3>
        <p>
          GAIA quarantines every new package for 7 days, so Claude can’t install
          one compromised the day it shipped. Most compromised packages are
          caught and pulled within hours, and the quarantine closes the window
          where a freshly poisoned release would otherwise land in your
          lockfile.
        </p>
        <p className="text-muted">
          One config line, no service, no subscription.
        </p>
      </div>
    </div>
    <div className="border-line bg-surface-raised flex flex-wrap items-center gap-x-2 border-t px-4 py-2.5 font-mono text-xs">
      <span className="text-muted">minimumReleaseAge:</span>
      <span className="text-secondary-soft">10080</span>
      <span className="text-muted"># 7 days, in minutes</span>
    </div>
  </div>
);

const Enforcement = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="enforcement"
  >
    <div className="mx-auto max-w-5xl">
      <div className="mb-6 inline-flex items-center gap-2">
        <span
          aria-hidden={true}
          className="bg-secondary-soft size-1.5 rounded-full"
        />
        <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          The gate
        </span>
      </div>

      <h2 className="mb-6 text-[clamp(2rem,4vw,3rem)] leading-[1.12] tracking-[-0.02em]">
        <span className="text-ink-dim">Skills advise.</span>
        <br className="hidden sm:inline" />
        <span className="sm:hidden"> </span>
        <span className="text-ink">GAIA enforces.</span>
      </h2>

      <div className="text-ink-dim max-w-[64ch] space-y-4 text-[1.05rem] leading-[1.65] text-pretty">
        <p>
          A skill is advice. The model can take it or leave it. GAIA does not
          ask.
        </p>
        <p>
          Before any change can merge, an automated review reads your exact diff
          for security holes, missing tests, and risky patterns, and blocks the
          merge when it finds something that matters.
        </p>
        <p>
          Every commit clears typecheck, lint, tests, and build first. What
          reaches main is <span className="text-ink">code you can trust.</span>
        </p>
      </div>

      <figure className="mt-12">
        <figcaption className="text-muted mb-3 font-mono text-[0.78rem] tracking-wide">
          A real merge, blocked. The secret never reaches main.
        </figcaption>
        <GateLedger />
      </figure>

      <div className="mt-8">
        <SupplyChainPanel />
      </div>
    </div>
  </section>
);

export default Enforcement;

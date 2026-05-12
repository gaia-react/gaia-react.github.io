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
            <span key={gate}>✓ {gate}</span>
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
          ✗ merge blocked — 1 critical and 1 important must clear first
        </div>
      </div>
    </div>
  </div>
);

const AgenticDesign = () => (
  <section className="px-4 py-20 sm:px-8" id="agentic-design">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:order-2 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              How GAIA works
            </span>
          </div>
          <h2 className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Design patterns Claude doesn&apos;t have to remember.
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65] text-pretty">
            Gates on every commit. Specs before code. Scoped memory. A
            code-review audit on every merge. GAIA wires these into the project
            itself, so they run the same way every session, every task, every
            model variant.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65] text-pretty">
            Here are two of them: a commit gate that turns typecheck, lint,
            tests, and build into hard stops, and an audit that reads the diff
            before it reaches main.
          </p>
        </div>

        <div className="lg:order-1">
          <GateLedger />
        </div>
      </div>
    </div>
  </section>
);

export default AgenticDesign;

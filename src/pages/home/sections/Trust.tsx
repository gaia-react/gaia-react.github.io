const COMMIT_GATES = ['typecheck', 'lint', 'tests', 'build'] as const;

const AUDIT_FINDINGS = [
  {
    file: 'cart/total.ts:24',
    note: 'discount path has no test',
    resolution: 'blocks',
    severity: 'IMPORTANT',
  },
  {
    file: 'ui/Modal.tsx:12',
    note: 'prefer native dialog',
    resolution: 'fixed',
    severity: 'SUGGESTION',
  },
] as const;

const SEVERITY_STYLE = {
  IMPORTANT: 'text-accent-soft',
  SUGGESTION: 'text-muted',
};

const TrustLedger = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border font-mono text-[0.8rem]">
    <div className="bg-surface-raised border-line border-b px-4 py-2">
      <span className="text-muted text-[0.6rem] tracking-[0.16em] uppercase">
        install · write · commit · merge
      </span>
    </div>
    <div className="space-y-4 p-4 leading-relaxed">
      <div>
        <div className="text-ink-dim">
          {/* <wbr> keeps Cloudflare email obfuscation from rewriting
              parser@2.4.0 into a mailto link, which breaks hydration (#418) */}
          <span className="text-muted">$ </span>pnpm add @acme/parser
          <wbr />
          @2.4.0
        </div>
        <div className="text-warn mt-1">
          ✗ held, published 6h ago, under the 7-day minimum
        </div>
        <div className="text-muted mt-1">
          a package poisoned the day it ships can’t get in
        </div>
      </div>
      <div>
        <div className="text-ink-dim">
          <span className="text-muted">write </span>api/session.ts
        </div>
        <div className="text-warn mt-1">✗ blocked, AWS key in source</div>
        <div className="text-muted mt-1">a secret never reaches a commit</div>
      </div>
      <div>
        <div className="text-ink-dim">
          <span className="text-muted">$ </span>git commit -m &quot;add discount
          logic&quot;
        </div>
        <div className="text-secondary-soft mt-1">
          ✓ total.test.ts failed first (RED)
        </div>
        <div className="text-secondary-soft mt-1 flex flex-wrap gap-x-4 gap-y-0.5">
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
                {finding.resolution === 'fixed' && (
                  <span className="text-secondary-soft"> → fixed</span>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="text-warn mt-3">
          ✗ merge blocked, 1 important must clear first
        </div>
      </div>
    </div>
  </div>
);

const Trust = () => (
  <section className="px-4 py-20 sm:px-8" id="trust">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Code you can trust
            </span>
          </div>

          <h2 className="mb-5 text-[clamp(2rem,4vw,3rem)] leading-[1.12] tracking-[-0.02em]">
            <span className="text-ink-dim">Skills advise.</span>
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            <span className="text-ink">GAIA enforces.</span>
          </h2>

          <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65] text-pretty">
            <p>
              A skill is advice. The model can take it or leave it. GAIA leaves
              no such choice.
            </p>
            <p>
              The rules that matter most don’t depend on the model remembering
              them. Test-driven development is required. Secrets can’t be
              written into source. Every commit clears typecheck, lint, tests,
              and build.
            </p>
            <p>
              Every merge is read line by line for security holes and risky
              patterns, fixed automatically where it’s safe, blocked for your
              review where it isn’t.
            </p>
          </div>
        </div>

        <div>
          <TrustLedger />
        </div>
      </div>
    </div>
  </section>
);

export default Trust;

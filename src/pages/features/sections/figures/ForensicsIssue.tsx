const ForensicsIssue = () => (
  <div
    aria-hidden={true}
    className="bg-surface border-line-soft rounded-lg border p-[1.1rem_1.25rem_1.25rem]"
  >
    <div className="text-muted border-line-soft mb-[0.95rem] flex items-baseline justify-between gap-3 border-b pb-[0.65rem] font-mono text-[0.62rem] tracking-[0.16em] uppercase">
      <span>
        <span className="text-ink-dim">github.com/</span>gaia-react/gaia
      </span>
      <span>#1247</span>
    </div>

    <div className="mb-[0.6rem] flex flex-wrap gap-[0.4rem]">
      <span className="border-warn text-warn-soft inline-block rounded-full border px-[0.65rem] py-[0.1rem] font-mono text-[0.6rem] tracking-[0.14em] uppercase">
        bug
      </span>
      <span className="border-accent text-accent-soft inline-block rounded-full border px-[0.65rem] py-[0.1rem] font-mono text-[0.6rem] tracking-[0.14em] uppercase">
        forensics
      </span>
    </div>

    <div className="text-ink mb-[0.4rem] text-[1.08rem] leading-tight tracking-[-0.005em]">
      Plan orchestrator exit 1 during phase 2
    </div>

    <div className="text-muted mb-[1.05rem] font-mono text-[0.68rem]">
      gaia-user-3091 opened · 12m ago
    </div>

    <div className="space-y-4 font-mono text-[0.78rem] leading-[1.55]">
      <div>
        <div className="text-muted mb-[0.35rem] text-[0.62rem] tracking-[0.16em] uppercase">
          Stack
        </div>
        <div className="text-ink-dim">
          <div>Error: orchestrator exit 1</div>
          <div className="pl-[0.95rem]">
            at{' '}
            <span className="text-ink">
              gaia/skills/plan/orchestrator.ts:284
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-muted mb-[0.35rem] text-[0.62rem] tracking-[0.16em] uppercase">
          Environment
        </div>
        <div className="text-ink-dim">
          <div className="grid grid-cols-[5rem_1fr]">
            <span className="text-muted">home</span>
            <span>&lt;redacted&gt;</span>
          </div>
          <div className="grid grid-cols-[5rem_1fr]">
            <span className="text-muted">shell</span>
            <span className="text-ink">zsh</span>
          </div>
          <div className="grid grid-cols-[5rem_1fr]">
            <span className="text-muted">key</span>
            <span>[REDACTED_API_KEY]</span>
          </div>
        </div>
      </div>

      <div>
        <div className="text-muted mb-[0.35rem] text-[0.62rem] tracking-[0.16em] uppercase">
          Context
        </div>
        <p className="text-ink-dim leading-[1.6]">
          Running /gaia plan on a feature rework. Exit during the plan-phase-2
          quality gate.
        </p>
      </div>
    </div>

    <div className="border-line-soft text-muted mt-[1.15rem] space-y-[0.18rem] border-t pt-[0.7rem] font-mono text-[0.62rem] tracking-[0.08em]">
      <div>— filed via /gaia forensics —</div>
      <div>— body byte-identical to local report —</div>
    </div>
  </div>
);

export default ForensicsIssue;

const STATE_ARTIFACTS = [
  {desc: 'Architecture, flows, and decisions', name: 'wiki'},
  {desc: 'What Claude touched this session', name: 'hot cache'},
  {desc: 'Compact state for handoff and pickup', name: 'handoff'},
  {desc: 'Each subagent’s notes, between runs', name: 'agent memory'},
];

const UPKEEP = [
  {desc: 'Prunes duplicate, conflicting, and stale notes', name: 'audit'},
  {desc: 'Heals config rot before it degrades Claude', name: 'fitness'},
];

const LedgerHead = ({
  isDivided = false,
  label,
  right,
}: {
  isDivided?: boolean;
  label: string;
  right: string;
}) => (
  <div
    className={`bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2 ${
      isDivided ? 'border-t' : ''
    }`}
  >
    <span className="text-ink-dim font-mono text-xs tracking-wider">
      {label}
    </span>
    <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
      {right}
    </span>
  </div>
);

const LedgerRows = ({rows}: {rows: {desc: string; name: string}[]}) => (
  <div className="divide-line-soft divide-y">
    {rows.map((r) => (
      <div key={r.name} className="flex items-center gap-4 px-4 py-2.5">
        <code className="text-ink w-28 shrink-0 font-mono text-xs tracking-[0.04em]">
          {r.name}
        </code>
        <span className="text-ink-dim text-[0.85rem]">{r.desc}</span>
      </div>
    ))}
  </div>
);

const StateLedger = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border">
    <LedgerHead label="Claude’s memory" right="read on demand" />
    <LedgerRows rows={STATE_ARTIFACTS} />
    <LedgerHead isDivided={true} label="Upkeep" right="run on command" />
    <LedgerRows rows={UPKEEP} />
  </div>
);

const TokenEfficiency = () => (
  <section className="px-4 py-20 sm:px-8" id="token-efficiency">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Token efficiency
            </span>
          </div>
          <h2 className="mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            <span className="text-ink-dim">Your project grows.</span>
            <br className="hidden sm:inline" />
            <span className="sm:hidden"> </span>
            <span className="text-ink">Your context doesn’t.</span>
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65] text-pretty">
            A bigger codebase usually means a bigger context and a bigger bill.
            Every session re-reads more, and Claude’s own notes pile up until
            they slow it down.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65] text-pretty">
            GAIA keeps state on disk and reads only what each task needs, not
            the whole project. Upkeep commands keep Claude’s context lean, so it
            stays flat as your project grows.
          </p>
        </div>

        <div>
          <StateLedger />
        </div>
      </div>
    </div>
  </section>
);

export default TokenEfficiency;

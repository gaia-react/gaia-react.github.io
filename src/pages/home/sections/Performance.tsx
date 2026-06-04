const STATE_ARTIFACTS = [
  {desc: 'Architecture, flows, and decisions.', name: 'wiki'},
  {desc: 'What Claude touched this session.', name: 'hot cache'},
  {desc: 'Compact state for handoff and pickup.', name: 'handoff'},
  {desc: "Each subagent's notes, between runs.", name: 'agent memory'},
];

const StateLedger = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border">
    <div className="bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2">
      <span className="text-ink-dim font-mono text-xs tracking-wider">
        .gaia/ · state on disk
      </span>
      <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
        read on demand
      </span>
    </div>
    <div className="divide-line-soft divide-y">
      {STATE_ARTIFACTS.map((a) => (
        <div key={a.name} className="flex items-center gap-4 px-4 py-2.5">
          <code className="text-ink w-28 shrink-0 font-mono text-xs tracking-[0.04em]">
            {a.name}
          </code>
          <span className="text-ink-dim text-[0.85rem]">{a.desc}</span>
        </div>
      ))}
    </div>
    <div className="border-line bg-surface-raised flex items-center gap-2 border-t px-4 py-2.5 font-mono text-xs">
      <span className="text-muted">this task</span>
      <span className="text-muted">→</span>
      <span className="text-accent-soft">reads only what it needs</span>
    </div>
  </div>
);

const Performance = () => (
  <section
    className="border-line-soft border-b px-4 py-20 sm:px-8"
    id="performance"
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:order-2 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Token efficiency
            </span>
          </div>
          <h2 className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Your project grows, but your context doesn’t.
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65] text-pretty">
            A bigger codebase usually means a bigger context and a bigger bill.
            Every session re-reads more, and Claude’s own notes pile up until
            they slow it down.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65] text-pretty">
            GAIA keeps state on disk and reads only what each task needs, not
            the whole project. As you ship, it audits that memory for
            duplicates, conflicting instructions, and stale notes. The context
            Claude loads stays lean instead of growing with the repo.
          </p>
        </div>

        <div className="lg:order-1">
          <StateLedger />
        </div>
      </div>
    </div>
  </section>
);

export default Performance;

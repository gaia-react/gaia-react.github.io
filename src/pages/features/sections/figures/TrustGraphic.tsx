const STAGES = [
  'typecheck',
  'lint  · 1,314 rules',
  'tests · vitest + RTL',
  'build',
] as const;

const FANS = ['React', 'TypeScript', 'i18n', 'Component'] as const;

const TrustGraphic = () => (
  <div
    aria-hidden="true"
    className="bg-surface border-line-soft mb-9 rounded-lg border p-[1.1rem_1.25rem_1.25rem] font-mono text-[0.82rem]"
  >
    {/* Source row */}
    <div className="border-line-soft mb-[0.85rem] flex items-center justify-between rounded-sm border border-dashed px-[0.85rem] py-[0.55rem]">
      <span className="text-ink">src/Button.tsx</span>
      <span className="text-muted text-[0.7rem] tracking-[0.14em] uppercase">
        edit
      </span>
    </div>

    {/* Pipeline */}
    <div className="border-accent ml-2 flex flex-col gap-[0.45rem] border-l-2 py-1 pl-[1.1rem]">
      {STAGES.map((label) => (
        <div
          key={label}
          className="text-ink flex justify-between rounded-sm bg-white/2 px-3 py-[0.45rem]"
        >
          <span>{label}</span>
          <span className="text-secondary-soft flex items-center gap-[0.4rem] text-[0.66rem] tracking-[0.16em] uppercase">
            <span className="bg-secondary inline-block size-1.5 rounded-full" />
            pass
          </span>
        </div>
      ))}
    </div>

    {/* Audit */}
    <div className="border-warn mt-4 ml-2 rounded-r-sm border-l-2 bg-white/2 pt-[0.85rem] pr-[0.85rem] pb-[0.95rem] pl-[1.1rem]">
      <div className="text-warn-soft mb-[0.6rem] text-[0.7rem] tracking-[0.16em] uppercase">
        code-review audit
      </div>
      <div className="grid grid-cols-2 gap-[0.4rem] sm:grid-cols-4">
        {FANS.map((fan) => (
          <div
            key={fan}
            className="border-line-soft bg-surface text-ink-dim rounded-sm border px-[0.4rem] py-[0.35rem] text-center text-[0.72rem]"
          >
            {fan}
          </div>
        ))}
      </div>
    </div>

    {/* Merge */}
    <div className="text-ink mt-4 ml-2 inline-flex items-center gap-[0.6rem] px-[0.85rem] py-[0.55rem] text-[0.78rem] tracking-[0.16em] uppercase">
      <span
        className="bg-accent inline-block size-2 rounded-full"
        style={{
          boxShadow:
            '0 0 0 4px color-mix(in oklab, var(--color-accent) 18%, transparent)',
        }}
      />
      merge
    </div>
  </div>
);

export default TrustGraphic;

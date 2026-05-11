type Stage = {
  label: string;
  result: string;
};

const STAGES: Stage[] = [
  {label: 'typecheck', result: '0 errors'},
  {label: 'lint · 1,314 rules', result: '0 violations'},
  {label: 'tests · vitest + RTL', result: '47 / 47'},
  {label: 'build · 9 entries', result: 'green'},
];

const CONCERNS = [
  'Security',
  'Performance',
  'Architecture',
  'Antipatterns',
] as const;

const TrustGraphic = () => (
  <div
    aria-hidden={true}
    className="bg-surface border-line-soft mb-9 rounded-lg border p-[1.1rem_1.25rem_1.25rem] font-mono text-[0.82rem]"
  >
    {/* Source row */}
    <div className="border-line-soft mb-[0.85rem] rounded-sm border border-dashed px-[0.85rem] py-[0.55rem]">
      <span className="text-ink">src/Button.tsx</span>
    </div>

    {/* Pipeline */}
    <div className="border-accent ml-2 flex flex-col gap-[0.45rem] border-l-2 py-1 pl-[1.1rem]">
      {STAGES.map(({label, result}) => (
        <div
          key={label}
          className="text-ink flex items-center justify-between gap-3 rounded-sm bg-white/2 px-3 py-[0.45rem]"
        >
          <span>{label}</span>
          <span className="text-secondary-soft flex items-center gap-[0.45rem] text-[0.7rem]">
            <span className="bg-secondary inline-block size-1.5 rounded-full" />
            {result}
          </span>
        </div>
      ))}
    </div>

    {/* Audit */}
    <div className="border-warn mt-4 ml-2 rounded-r-sm border-l-2 bg-white/2 pt-[0.85rem] pr-[0.85rem] pb-[0.95rem] pl-[1.1rem]">
      <div className="mb-[0.6rem] flex items-baseline justify-between gap-3">
        <span className="text-warn-soft text-[0.7rem] tracking-[0.16em] uppercase">
          code-review audit
        </span>
        <span className="text-muted text-[0.66rem] tracking-[0.12em] uppercase">
          in parallel
        </span>
      </div>
      <div className="grid grid-cols-2 gap-[0.4rem] sm:grid-cols-4">
        {CONCERNS.map((concern) => (
          <div
            key={concern}
            className="border-line-soft bg-surface text-ink-dim rounded-sm border px-[0.4rem] py-[0.35rem] text-center text-[0.72rem]"
          >
            {concern}
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

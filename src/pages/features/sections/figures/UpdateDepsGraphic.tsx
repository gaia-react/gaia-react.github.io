const CI_CHECKS = ['typecheck', 'tests', 'build'] as const;

const UpdateDepsGraphic = () => (
  <div
    aria-hidden="true"
    className="bg-surface border-line-soft font-body mb-9 rounded-lg border p-[1rem_1.1rem_1.1rem]"
  >
    {/* Head */}
    <div className="text-muted mb-[0.55rem] flex items-center gap-[0.55rem] font-mono text-[0.74rem]">
      <svg
        aria-hidden="true"
        fill="currentColor"
        height="14"
        viewBox="0 0 16 16"
        width="14"
      >
        <path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
      </svg>
      <span className="text-ink-dim">gaia-react/gaia</span>
      <span className="text-muted">#1247</span>
      <span className="border-secondary/40 text-secondary-soft ml-auto rounded-full border px-2 py-[0.18rem] text-[0.62rem] tracking-widest uppercase">
        deps
      </span>
    </div>

    {/* Title */}
    <div className="text-ink mb-[0.85rem] text-[1rem] tracking-[-0.005em]">
      chore(deps): bump react-router 6.30 → 7.0
    </div>

    {/* Diff block */}
    <div className="border-line-soft mb-[0.85rem] rounded-[4px] border bg-black/18 p-[0.5rem_0.6rem] font-mono text-[0.78rem]">
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] overflow-hidden py-[0.18rem]">
        <span className="text-warn">-</span>
        <span className="text-warn/80">
          import {'{'} useNavigate {'}'} from &apos;@remix-run/react&apos;
        </span>
      </div>
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] overflow-hidden py-[0.18rem]">
        <span className="text-secondary">+</span>
        <span className="text-secondary/70">
          import {'{'} useNavigate {'}'} from &apos;react-router&apos;
        </span>
      </div>
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] overflow-hidden py-[0.18rem]">
        <span className="text-muted">~</span>
        <span className="text-muted italic">
          codemod applied · v7-route-types · 14 files
        </span>
      </div>
    </div>

    {/* CI row */}
    <div className="text-secondary-soft border-line-soft flex gap-4 border-t pt-[0.55rem] font-mono text-[0.74rem]">
      {CI_CHECKS.map((c) => (
        <span
          key={c}
          className="inline-flex items-center gap-[0.4rem] tracking-[0.04em]"
        >
          <span className="bg-secondary inline-block size-[8px] rounded-full" />
          {c}
        </span>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-[0.85rem] flex items-center justify-between font-mono text-[0.7rem] tracking-[0.12em] uppercase">
      <span className="text-muted">semver: minor</span>
      <span className="text-accent-soft">auto-merge on green</span>
    </div>
  </div>
);

export default UpdateDepsGraphic;

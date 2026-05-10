const CLASSES = [
  'init',
  'update',
  'wiki-sync',
  'hook',
  'scaffold',
  'dev-server',
  'other',
] as const;

type ReportRow = {
  label: string;
  tone?: 'accent' | 'muted';
  val: string;
};

const REPORT_ROWS: ReportRow[] = [
  {label: 'class', val: 'hook'},
  {label: 'redacted', val: 'paths · secrets · machine'},
  {label: 'user-config', tone: 'muted', val: 'no'},
  {label: 'probable bug', tone: 'accent', val: 'yes'},
];

const ForensicsTriageGraphic = () => (
  <div
    aria-hidden="true"
    className="mb-10 grid grid-cols-1 gap-4 font-mono text-[0.78rem] sm:gap-0 sm:grid-cols-[minmax(0,1fr)_80px_minmax(0,1.1fr)]"
  >
    {/* Left col — inbox */}
    <div className="bg-surface border-line-soft rounded-lg border py-4">
      <div className="border-line-soft text-muted flex items-center gap-2 border-b px-[1.1rem] pb-[0.85rem] text-[0.7rem] tracking-[0.16em] uppercase">
        <span className="bg-warn inline-block size-[6px] rounded-full" />
        Failure classes
      </div>
      <ul>
        {CLASSES.map((c, index) => (
          <li
            key={c}
            className={`border-line-soft relative flex items-center justify-between border-b px-[1.1rem] py-[0.55rem] last:border-b-0${index === 3 ? 'bg-warn/8 text-ink' : 'text-ink-dim'}`}
          >
            {index === 3 && (
              <span className="bg-warn absolute inset-y-0 left-0 w-[2px] rounded-sm" />
            )}
            <span>{c}</span>
            <span
              className="text-muted text-[0.7rem]"
              style={{fontVariantNumeric: 'tabular-nums'}}
            >
              stderr · 12:04:31
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Middle — flow */}
    <div className="text-muted hidden items-center justify-center sm:flex">
      <svg
        height="240"
        preserveAspectRatio="none"
        viewBox="0 0 80 240"
        width="80"
      >
        <path
          d="M 0 60 C 40 60, 40 120, 80 120"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <path
          d="M 0 180 C 40 180, 40 120, 80 120"
          fill="none"
          stroke="currentColor"
          strokeDasharray="3 4"
          strokeWidth="1.2"
        />
        <circle cx="80" cy="120" fill="currentColor" r="3" />
      </svg>
    </div>

    {/* Right col — report */}
    <div className="bg-surface border-line-soft flex flex-col rounded-lg border">
      <div className="border-line-soft text-muted flex items-center gap-2 border-b px-[1.1rem] pt-4 pb-[0.85rem] text-[0.7rem] tracking-[0.16em] uppercase">
        <span className="bg-accent inline-block size-[6px] rounded-full" />
        /gaia forensics
      </div>

      <div className="flex flex-col gap-[0.45rem] px-[1.1rem] py-[0.9rem]">
        {REPORT_ROWS.map(({label, tone, val}) => (
          <div
            key={label}
            className="grid grid-cols-[7rem_1fr] gap-3 text-[0.76rem]"
          >
            <span className="text-muted text-[0.66rem] tracking-[0.08em] uppercase">
              {label}
            </span>
            <span
              className={
                tone === 'muted' ? 'text-muted'
                : tone === 'accent' ?
                  'text-accent'
                : 'text-ink'
              }
            >
              {val}
            </span>
          </div>
        ))}
      </div>

      <div className="text-muted my-2 flex justify-center text-[0.7rem] tracking-[0.18em] uppercase">
        file →
      </div>

      {/* Issue card */}
      <div className="border-line-soft mx-[1.1rem] mb-[1.1rem] rounded-[4px] border bg-black/20 p-[0.85rem_1rem_0.95rem]">
        <div className="text-muted mb-2 flex items-center gap-2 font-mono text-[0.72rem]">
          <svg
            aria-hidden="true"
            fill="currentColor"
            height="14"
            viewBox="0 0 16 16"
            width="14"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span>gaia-react / gaia</span>
        </div>
        <div className="text-ink mb-[0.4rem] text-[0.7rem] tracking-[-0.005em]">
          [forensics] hook failure on pre-commit
        </div>
        <div className="text-muted flex items-center gap-4 font-mono text-[0.74rem]">
          <span className="text-accent-soft inline-flex items-center gap-[0.4rem]">
            <span className="bg-accent inline-block size-[8px] rounded-full" />
            Open
          </span>
          <span>byte-identical to local copy</span>
        </div>
      </div>
    </div>
  </div>
);

export default ForensicsTriageGraphic;

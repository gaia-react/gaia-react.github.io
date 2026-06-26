type Finding = {
  cause: null | string;
  component: string;
  exceedsBudget: boolean;
  inputs: string[];
  isMemo: boolean;
  maxTotalMs: number;
  memoDefeated: number;
  renderCount: number;
  source: 'context' | 'props' | null;
};

const FRAME_BUDGET = '16 ms';

const TOTALS = [
  {label: 'renders', value: '213'},
  {label: 'framework-filtered', value: '46'},
  {label: 'app components', value: '9'},
  {label: 'memo-defeated', value: '17'},
];

const FINDINGS: Finding[] = [
  {
    cause: 'jsx-no-new-object-as-prop',
    component: 'OrdersTable',
    exceedsBudget: true,
    inputs: ['columns', 'onRowSelect'],
    isMemo: true,
    maxTotalMs: 22.4,
    memoDefeated: 11,
    renderCount: 11,
    source: 'props',
  },
  {
    cause: 'jsx-no-constructed-context-values',
    component: 'Sidebar',
    exceedsBudget: false,
    inputs: ['DashboardContext'],
    isMemo: true,
    maxTotalMs: 4.2,
    memoDefeated: 6,
    renderCount: 6,
    source: 'context',
  },
  {
    cause: null,
    component: 'RevenueChart',
    exceedsBudget: true,
    inputs: [],
    isMemo: false,
    maxTotalMs: 19.8,
    memoDefeated: 0,
    renderCount: 8,
    source: null,
  },
];

const META = [
  {
    desc: 'It emits a ranked diagnosis and stops. Claude applies the fix you approve in conversation, never an automatic rewrite, so the call on what changes stays yours.',
    name: 'Measure-only by design',
  },
  {
    desc: (
      <>
        {'A '}
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="https://github.com/aidenybai/bippy"
          rel="noopener noreferrer"
          target="_blank"
        >
          bippy
        </a>
        {
          ' harness records every render to disk, then a deterministic CLI reduces tens of thousands of tokens of raw capture to the small ranked summary the model reads. The raw dump never enters context.'
        }
      </>
    ),
    name: 'The raw capture stays on disk',
  },
  {
    desc: 'It flags a memoized component that re-renders anyway when its props or context arrive as a new object or callback every render, and any component whose render crosses the frame budget, memo or not. A cheap re-render with real changes is left alone, so nothing pushes you toward memoizing everything.',
    name: 'Two signals, not noise',
  },
  {
    desc: 'Findings lead with the memoized components that re-render anyway, then rank by wasted cost: how often each one re-renders times how long a render takes. A barely perceptible render-count win never outranks a memo that keeps re-rendering an expensive subtree on every parent update.',
    name: 'Ranked by what users feel',
  },
];

const ReactPerf = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-16 border-b py-20"
    id="react-perf"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#react-perf">
              App performance, optimized
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
        </div>
        <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65] text-pretty">
          <p>
            A React app slows down one wasted render at a time. From the outside
            the app just feels slow. From the inside, you are guessing which
            component, and why. The profiler shows you every render and ranks
            none of them.
          </p>
          <p>
            <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
              /gaia-react-perf
            </code>
            {
              ' drives the interaction you point it at and captures real per-render attribution. The capture runs on the same React instrumentation that powers '
            }
            <a
              className="text-accent hover:text-accent-soft transition-colors duration-150"
              href="https://github.com/aidenybai/react-scan"
              rel="noopener noreferrer"
              target="_blank"
            >
              react-scan
            </a>
            , wired into Claude, not a browser overlay. It surfaces two failure
            modes: a memoized component that re-renders anyway because a prop or
            context value it depends on is a new object or callback every
            render, and any component whose render crosses a 16 ms frame budget,
            memo or not. It skips the cheap re-renders that push you toward
            memoizing everything, then names the structural fix for what is
            left.
          </p>
        </div>
      </div>

      {/* Reduced summary · centerpiece */}
      <div className="bg-surface border-line-soft overflow-hidden rounded-lg border font-mono">
        <div className="border-line-soft grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b bg-black/15 px-5 py-[0.7rem]">
          <span className="text-ink-dim text-[0.8rem]">/gaia-react-perf</span>
          <span className="flex items-baseline gap-x-3">
            <span className="text-muted text-[0.6rem] tracking-[0.18em] uppercase">
              Over budget
            </span>
            <span className="text-warn-soft text-[0.95rem]">2</span>
          </span>
        </div>

        <div className="border-line-soft text-muted flex flex-wrap gap-x-4 gap-y-1 border-b px-5 py-[0.7rem] text-[0.72rem]">
          {TOTALS.map((total) => (
            <span key={total.label}>
              <span className="text-ink-dim">{total.value}</span>
              {` ${total.label}`}
            </span>
          ))}
        </div>

        <div className="border-line-soft space-y-4 border-b px-5 py-[0.9rem]">
          <p className="text-muted text-[0.6rem] tracking-[0.18em] uppercase">
            Ranked findings
          </p>
          {FINDINGS.map((finding, index) => (
            <div
              key={finding.component}
              className="grid grid-cols-[1.25rem_1fr] gap-x-3"
            >
              <span className="text-muted text-[0.8rem]">{index + 1}</span>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-[0.85rem]">
                    <span className="text-ink">{finding.component}</span>
                    {finding.isMemo ?
                      <span className="text-secondary-soft ml-2 text-[0.62rem] tracking-[0.14em] uppercase">
                        memo
                      </span>
                    : null}
                  </span>
                  <span
                    className={`text-[0.8rem] ${finding.exceedsBudget ? 'text-warn-soft' : 'text-ink-dim'}`}
                  >
                    {`${finding.maxTotalMs} ms max`}
                    {finding.exceedsBudget ?
                      <span className="text-warn-soft">{` · over ${FRAME_BUDGET}`}</span>
                    : null}
                  </span>
                </div>
                <p className="text-muted text-[0.72rem]">
                  {finding.memoDefeated > 0 ?
                    `${finding.renderCount} renders · ${finding.memoDefeated} memo-defeated`
                  : `${finding.renderCount} renders`}
                </p>
                {finding.inputs.length > 0 ?
                  <p className="text-[0.78rem]">
                    <span className="text-muted">
                      {finding.source === 'context' ?
                        'unstable context: '
                      : 'unstable props: '}
                    </span>
                    <span className="text-accent-soft">
                      {finding.inputs.join(', ')}
                    </span>
                  </p>
                : null}
                {finding.cause ?
                  <p className="text-muted text-[0.72rem]">
                    <span>{'react-doctor · '}</span>
                    <span className="text-secondary-soft">{finding.cause}</span>
                  </p>
                : null}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2 bg-black/15 px-5 py-[0.9rem]">
          <p className="text-muted text-[0.6rem] tracking-[0.18em] uppercase">
            Diagnosis
          </p>
          <p className="text-ink-dim font-sans text-[0.85rem] leading-[1.6]">
            Two findings cross the 16 ms frame budget, and the fixes differ.
            Give OrdersTable stable props so its memo holds, then cut the
            per-render work in RevenueChart, which has no memo at all.
          </p>
        </div>
      </div>

      <p className="text-muted mt-3 font-mono text-[0.72rem] leading-normal">
        Measure-only: GAIA diagnoses, Claude applies the fix you approve, then
        re-runs /gaia-react-perf to confirm the finding drops to zero.
      </p>

      {/* Meta strip */}
      <dl className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {META.map(({desc, name}) => (
          <div key={name}>
            <dt className="text-ink mb-1.5 text-[0.98rem] font-medium tracking-[-0.005em]">
              {name}
            </dt>
            <dd className="text-ink-dim text-[0.92rem] leading-[1.6]">
              {desc}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default ReactPerf;

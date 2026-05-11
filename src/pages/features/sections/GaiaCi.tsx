type LedgerRow = {
  action: 'auto-delete' | 'auto-merge' | 'review';
  detail: string;
  what: string;
  when: string;
};

const CI_LEDGER: LedgerRow[] = [
  {
    action: 'auto-merge',
    detail:
      'Necessary code migrations and codemods are implemented in the same PR.',
    what: 'Patch / minor dependency bumps',
    when: 'weekly',
  },
  {
    action: 'review',
    detail:
      'Routes to a separate review-required PR so the upgrade gets human eyes.',
    what: 'Major dependency bumps',
    when: 'weekly',
  },
  {
    action: 'auto-merge',
    detail:
      'pnpm audit. High and critical findings open an issue plus a single-package patch PR.',
    what: 'High / critical security findings',
    when: 'daily',
  },
  {
    action: 'auto-merge',
    detail: 'When app code changes, the wiki sync runs and opens a labeled PR.',
    what: 'Wiki sync on app changes',
    when: 'on commit',
  },
  {
    action: 'review',
    detail:
      'A run that rewrites more than 25% of the wiki holds for human review.',
    what: 'Wiki rewrite > 25%',
    when: 'on commit',
  },
  {
    action: 'auto-delete',
    detail:
      'Branches merged more than 30 days ago. Setup also offers repo-level delete-on-merge.',
    what: 'Stale branches > 30d',
    when: 'monthly',
  },
];

const META = [
  {
    desc: 'Every workflow opens a labeled PR and auto-merges on green CI. If post-merge CI fails, the bot opens one revert PR. The hard cap is one revert attempt. A second failure escalates to a priority issue and the bot stops.',
    name: 'Auto-merge on green, auto-revert on failure',
  },
  {
    desc: 'GAIA CI runs against your Claude Code Pro/Max subscription or your Anthropic API key. A $5 hard ceiling per run caps API spend.',
    name: 'Cost-capped by design',
  },
];

const TONE: Record<LedgerRow['action'], {dot: string; text: string}> = {
  'auto-delete': {dot: 'bg-muted', text: 'text-muted'},
  'auto-merge': {dot: 'bg-secondary', text: 'text-secondary-soft'},
  review: {dot: 'bg-warn', text: 'text-warn-soft'},
};

const GaiaCi = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-20 border-b py-20"
    id="gaia-ci"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#gaia-ci">
              Maintenance, automated
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
        </div>
        <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65]">
          <p>
            GAIA&apos;s continuous integration layer keeps the project healthy
            between sessions. The wiki stays in sync with the code. Dependencies
            stay current and tested. Security findings get patched. Stale
            branches don&apos;t pile up.
          </p>
          <p>
            Claude handles the safe cases. Humans only see the ones it
            can&apos;t recover from.
          </p>
        </div>
      </div>

      {/* Ledger — centerpiece */}
      <div className="bg-surface border-line-soft overflow-hidden rounded-lg border font-mono">
        <div className="border-line-soft text-muted grid grid-cols-[1fr_auto] border-b bg-black/15 px-5 py-[0.7rem] text-[0.65rem] tracking-[0.18em] uppercase sm:grid-cols-[1fr_120px_140px]">
          <span>What</span>
          <span className="hidden sm:block">When</span>
          <span>Action</span>
        </div>
        {CI_LEDGER.map((row) => {
          const tone = TONE[row.action];

          return (
            <div
              key={row.what}
              className="border-line-soft grid grid-cols-[1fr_auto] gap-x-4 border-b px-5 py-[0.95rem] last:border-b-0 sm:grid-cols-[1fr_120px_140px] sm:items-baseline"
            >
              <div className="min-w-0">
                <div className="text-ink text-[0.88rem]">{row.what}</div>
                <div className="text-ink-dim mt-[0.3rem] font-sans text-[0.82rem] leading-[1.55]">
                  {row.detail}
                </div>
              </div>
              <span className="text-muted hidden self-start text-[0.75rem] sm:block sm:pt-[0.1rem]">
                {row.when}
              </span>
              <span
                className={`inline-flex items-center gap-[0.45rem] self-start text-[0.7rem] tracking-[0.14em] uppercase sm:pt-[0.1rem] ${tone.text}`}
              >
                <span
                  className={`inline-block size-1.5 rounded-full ${tone.dot}`}
                />
                {row.action}
              </span>
            </div>
          );
        })}
      </div>

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

export default GaiaCi;

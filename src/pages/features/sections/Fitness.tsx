type Finding = {detail: string; severity: Severity};
type ReportRow = {category: string; grade: string; note?: string};
type Severity = 'info' | 'warning';

const REPORT: ReportRow[] = [
  {category: 'Hook integrity', grade: 'A+'},
  {
    category: 'Skill / command / agent frontmatter',
    grade: 'B+',
    note: '1 warning',
  },
  {category: 'Rule hygiene', grade: 'A+'},
  {category: 'CLAUDE.md hygiene', grade: 'A', note: '1 info'},
  {category: 'Settings hygiene', grade: 'A+'},
  {category: 'GAIA-install fitness', grade: 'A', note: '1 info'},
  {category: 'Wiki fitness', grade: 'A+'},
];

const OVERALL = 'B+';

const FINDINGS: Finding[] = [
  {
    detail: '.claude/commands/deploy.md — description frontmatter is missing',
    severity: 'warning',
  },
  {
    detail: 'CLAUDE.md — over the size budget; consider splitting',
    severity: 'info',
  },
  {
    detail: 'GAIA v1.1.1 installed, v1.2.0 available · /update-gaia',
    severity: 'info',
  },
];

const META = [
  {
    desc: 'Fixes land on a branch (a fresh chore/gaia-fitness branch if you’re on main, your current branch otherwise). You review the diff and the report, then commit when you’re satisfied.',
    name: 'Heals on a branch, waits for your commit',
  },
  {
    desc: 'Detached HEAD, or a rebase, merge, or cherry-pick in progress: it runs triage, prints the grades, and stops. No mutation on a state it can’t safely touch.',
    name: 'Won’t touch an unsafe tree',
  },
  {
    desc: 'Add project-specific graded check categories. /gaia fitness runs whatever you define alongside the built-in seven.',
    name: 'Yours to extend',
  },
  {
    desc: 'The check protocol three-way-merges on upgrade, so the checks you add to it carry forward.',
    name: 'Survives /update-gaia',
  },
];

const SEVERITY: Record<Severity, {dot: string; text: string}> = {
  info: {dot: 'bg-muted', text: 'text-muted'},
  warning: {dot: 'bg-warn', text: 'text-warn-soft'},
};

const gradeTone = (grade: string) => {
  if (grade === 'A+') return 'text-secondary-soft';
  if (grade.startsWith('A')) return 'text-ink';
  if (grade.startsWith('B')) return 'text-warn-soft';

  return 'text-accent';
};

const Fitness = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-20 border-b py-20"
    id="fitness"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#fitness">
              Drift happens
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
            As a project grows, its Claude integration drifts. New hooks, new
            rules, edited skills, a{' '}
            <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
              CLAUDE.md
            </code>{' '}
            that creeps past its budget, settings that collect redundant
            permissions. Every bit of that drift makes Claude a little less
            effective and a little more expensive to run.
          </p>
          <p>
            <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
              /gaia fitness
            </code>{' '}
            audits the whole surface, grades it F to A+, and heals what it can,
            keeping your Claude integration lean and current as the project
            grows.
          </p>
        </div>
      </div>

      {/* Report card — centerpiece */}
      <div className="bg-surface border-line-soft overflow-hidden rounded-lg border font-mono">
        <div className="border-line-soft grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b bg-black/15 px-5 py-[0.7rem]">
          <span className="text-ink-dim text-[0.8rem]">
            <span className="text-muted">$ </span>gaia fitness
          </span>
          <span className="flex items-baseline gap-2">
            <span className="text-muted text-[0.6rem] tracking-[0.18em] uppercase">
              Overall
            </span>
            <span className={`text-[0.95rem] ${gradeTone(OVERALL)}`}>
              {OVERALL}
            </span>
          </span>
        </div>

        {REPORT.map((row) => (
          <div
            key={row.category}
            className="border-line-soft grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b px-5 py-[0.7rem] last:border-b-0 sm:grid-cols-[1fr_7rem_2.25rem]"
          >
            <span className="text-ink text-[0.85rem]">{row.category}</span>
            <span className="text-muted hidden text-right text-[0.7rem] sm:block">
              {row.note ?? ''}
            </span>
            <span
              className={`text-right text-[0.85rem] ${gradeTone(row.grade)}`}
            >
              {row.grade}
            </span>
          </div>
        ))}

        <div className="border-line-soft space-y-2 border-t bg-black/15 px-5 py-[0.9rem]">
          {FINDINGS.map(({detail, severity}) => {
            const tone = SEVERITY[severity];

            return (
              <div
                key={detail}
                className="grid grid-cols-[5rem_1fr] items-baseline gap-x-3"
              >
                <span
                  className={`inline-flex items-center gap-[0.4rem] text-[0.62rem] tracking-[0.14em] uppercase ${tone.text}`}
                >
                  <span
                    className={`inline-block size-1.5 rounded-full ${tone.dot}`}
                  />
                  {severity}
                </span>
                <span className="text-ink-dim font-sans text-[0.82rem] leading-[1.55]">
                  {detail}
                </span>
              </div>
            );
          })}
        </div>

        <div className="border-line-soft flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t px-5 py-[0.7rem] text-[0.72rem]">
          <span className="text-secondary-soft">healed 1 finding</span>
          <span className="text-muted">
            branch chore/gaia-fitness-2026-05-12-1430 · review and commit
          </span>
        </div>
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

export default Fitness;

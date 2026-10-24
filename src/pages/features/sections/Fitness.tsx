type Finding = {file: string; remediation: string; severity: Severity};
type FindingGroup = {category: string; findings: Finding[]; grade: string};
type ReportRow = {category: string; grade: string; note?: string};
type Severity = 'error' | 'info' | 'warning';

const REPORT: ReportRow[] = [
  {category: 'authoring', grade: 'A+'},
  {category: 'CLAUDE.md', grade: 'A', note: '1 info'},
  {category: 'frontmatter', grade: 'B+', note: '1 warning'},
  {category: 'hooks', grade: 'A+'},
  {category: 'prompt', grade: 'A+'},
  {category: 'rules', grade: 'A+'},
  {category: 'settings', grade: 'A+'},
  {category: 'wiki', grade: 'A+'},
];

const OVERALL = 'B+';

const FINDINGS: FindingGroup[] = [
  {
    category: 'CLAUDE.md',
    findings: [
      {
        file: 'CLAUDE.md:14',
        remediation:
          '@../shared/notes.md points outside the project root, so it is not checked.',
        severity: 'info',
      },
    ],
    grade: 'A',
  },
  {
    category: 'frontmatter',
    findings: [
      {
        file: '.claude/commands/deploy.md:2',
        remediation:
          'Add a description saying what the file does and when to use it.',
        severity: 'warning',
      },
    ],
    grade: 'B+',
  },
];

const META = [
  {
    desc: 'A fixed rule catalog grades the files your project owns, so the same tree earns the same grade every run. An advisory judgment pass reads descriptions, trigger overlap, and rule scope, and never moves the grade.',
    name: 'Graded by rules, not by mood',
  },
  {
    desc: 'Each fix is shown as a diff and applied only on a yes, one file at a time. Then you choose: publish through the merge gate, open a draft PR only, or keep the changes for review.',
    name: 'Heals per file, on your say',
  },
  {
    desc: 'Findings in files GAIA ships are listed on their own and fixed by /update-gaia, never edited in place.',
    name: 'Your files and GAIA’s stay apart',
  },
  {
    desc: 'Detached HEAD, or a rebase, merge, or cherry-pick in progress: it grades, prints the card, and stops. No mutation on a state it can’t safely touch.',
    name: 'Won’t touch an unsafe tree',
  },
  {
    desc: 'A finding you accept on purpose is suppressed in .claude/gaia-fitness.json by rule id and path, with the reason written down beside it.',
    name: 'Exceptions carry a reason',
  },
];

const SEVERITY: Record<Severity, {dot: string; text: string}> = {
  error: {dot: 'bg-accent', text: 'text-accent'},
  info: {dot: 'bg-muted', text: 'text-muted'},
  warning: {dot: 'bg-warn', text: 'text-warn-soft'},
};

const gradeTone = (grade: string) => {
  if (grade.startsWith('A')) return 'text-secondary-soft';
  if (grade.startsWith('B')) return 'text-warn-soft';
  if (grade.startsWith('C')) return 'text-accent-soft';

  return 'text-accent';
};

const Fitness = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-16 border-b py-20"
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
            {
              'As a project grows, its Claude integration drifts. New hooks, new rules, edited skills, a '
            }
            <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
              CLAUDE.md
            </code>
            {
              ' that creeps past its budget, settings that collect redundant permissions. Every bit of that drift makes your Claude integration a little less effective and a little more expensive to run.'
            }
          </p>
          <p>
            <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
              /gaia-fitness
            </code>
            {
              ' lints the whole surface, grades it F to A+, and heals what it can, keeping your Claude integration lean and current as the project grows.'
            }
          </p>
        </div>
      </div>

      {/* Report card · centerpiece */}
      <div className="bg-surface border-line-soft overflow-hidden rounded-lg border font-mono">
        <div className="border-line-soft grid grid-cols-[1fr_auto_1.5rem] items-baseline gap-x-4 border-b bg-black/15 px-5 py-[0.7rem]">
          <span className="text-ink-dim text-[0.8rem]">/gaia-fitness</span>
          <span className="text-muted text-right text-[0.6rem] tracking-[0.18em] uppercase">
            Overall
          </span>
          <span className={`text-left text-[0.95rem] ${gradeTone(OVERALL)}`}>
            {OVERALL}
          </span>
        </div>

        {REPORT.map((row) => (
          <div
            key={row.category}
            className="border-line-soft grid grid-cols-[1fr_1.5rem] items-baseline gap-x-4 border-b px-5 py-[0.7rem] last:border-b-0 sm:grid-cols-[1fr_7rem_1.5rem]"
          >
            <span className="text-ink text-[0.85rem]">{row.category}</span>
            <span className="text-muted hidden text-right text-[0.7rem] sm:block">
              {row.note ?? ''}
            </span>
            <span
              className={`text-left text-[0.85rem] ${gradeTone(row.grade)}`}
            >
              {row.grade}
            </span>
          </div>
        ))}

        <div className="border-line-soft space-y-4 border-t bg-black/15 px-5 py-[0.9rem]">
          <p className="text-muted text-[0.6rem] tracking-[0.18em] uppercase">
            Findings
          </p>
          {FINDINGS.map((group) => (
            <div key={group.category} className="space-y-1.5">
              <p className="text-[0.8rem]">
                <span className="text-ink">{group.category}</span>
                <span className="text-muted">: </span>
                <span className={gradeTone(group.grade)}>{group.grade}</span>
              </p>
              {group.findings.map(({file, remediation, severity}) => {
                const tone = SEVERITY[severity];

                return (
                  <div
                    key={file}
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
                    <span className="block space-y-0.5">
                      <span className="text-ink block text-[0.78rem]">
                        {file}
                      </span>
                      <span className="text-ink-dim block font-sans text-[0.82rem] leading-[1.55]">
                        {remediation}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <p className="text-muted mt-3 font-mono text-[0.72rem] leading-normal">
        Fitness healed 1 finding. Publish, open a draft PR only, or keep it for
        review.
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

export default Fitness;

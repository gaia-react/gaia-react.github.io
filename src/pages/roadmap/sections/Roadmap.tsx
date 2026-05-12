import type {CSSProperties, ReactNode} from 'react';

type LineItem = {
  description: ReactNode;
  title: string;
};

type ShippedItem = {
  date: string;
  description: ReactNode;
  title: string;
  version: string;
};

const SHIPPED: ShippedItem[] = [
  {
    date: '2026-05-11',
    description:
      'Patch release. Fix to the gaia-release maintainer reference, plus follow-ups from live init runs.',
    title: 'GAIA release fixes',
    version: 'v1.1.1',
  },
  {
    date: '2026-05-10',
    description:
      'Auto-merge and auto-revert workflows on smart-cron with per-tool state. /update-deps becomes /sharpen. code-review-audit promoted to a CI gate. Serena MCP for LSP-backed code intelligence. knip for dead-code detection. /gaia spec auto and /gaia forensics. Robust accessibility tooling stack.',
    title: 'GAIA CI and the /sharpen rebrand',
    version: 'v1.1.0',
  },
  {
    date: '2026-05-04',
    description:
      'Wiki sync system. drift-check, commit-nudge, and stop safety-net hooks plus the /wiki-sync workhorse for a convergent wiki-update model.',
    title: 'Wiki sync',
    version: 'v1.0.5',
  },
  {
    date: '2026-05-01',
    description:
      'Hook fix for git -C path handling, plus a wiki lint and audit hygiene sweep.',
    title: 'Hook and wiki hygiene',
    version: 'v1.0.4',
  },
  {
    date: '2026-05-01',
    description:
      'Removed conditional logic from PreToolUse and PostToolUse hooks for predictable trigger behavior.',
    title: 'Hook conditional cleanup',
    version: 'v1.0.3',
  },
  {
    date: '2026-05-01',
    description:
      'Pinned pnpm.onlyBuiltDependencies to silence the build-script warning on fresh installs.',
    title: 'pnpm install ergonomics',
    version: 'v1.0.2',
  },
  {
    date: '2026-05-01',
    description:
      '/init interceptor reliably redirects to /gaia-init via UserPromptExpansion. The user-visible "blocked by hook" banner is gone.',
    title: '/init interceptor fix',
    version: 'v1.0.1',
  },
  {
    date: '2026-04-30',
    description:
      'Inaugural public release. Skills, commands, hooks, wiki, and a curated React Router 7, React 19, Tailwind v4, Vitest 4, TypeScript 6 app skeleton built for agentic development from day one.',
    title: 'Initial public release',
    version: 'v1.0.0',
  },
];

const IN_PROGRESS: LineItem[] = [
  {
    description: 'Growing into a full reference as the project matures.',
    title: 'Documentation',
  },
  {
    description:
      'Walkthroughs for starting fresh, integrating GAIA into an existing project, and getting the most from the workflow on real work.',
    title: 'Tutorials',
  },
  {
    description:
      'Steady polish between releases. Audit-driven cleanup, hardened guardrails, and rough edges filed down as adopters surface them.',
    title: 'Refinement',
  },
];

const PLANNED: LineItem[] = [
  {
    description:
      'From issue to merge-ready PR with agents doing the work in between. Pick-up, planning, implementation, review, and handback. The human gates the plan and the merge. Everything else runs on its own.',
    title: 'Autonomous workflows',
  },
  {
    description:
      'Run GAIA inside Docker or another sandbox. Claude works against the project in an isolated environment, not against your filesystem. Reproducible across machines and safer to leave running.',
    title: 'Containerized development',
  },
  {
    description:
      'Wire it up during create or run a command later when you decide to go live. Pick from popular targets with the tradeoffs explained, or bring your own, and walk away with the build, environment variables, and CI/CD configured for you.',
    title: 'Deployment when you are ready',
  },
];

const VISION: LineItem[] = [
  {
    description:
      'Stop managing Claude line by line. Describe what you want, and it ships. Claude is raw power. GAIA is order and focus that makes it a senior engineer on every task, one who already knows your stack.',
    title: 'Claude as a true senior engineer',
  },
  {
    description:
      'Whether you are a 20-year veteran or shipping your first app, what you build is production-grade. Vibe coders graduate to real apps. Teams stop relitigating style and convention.',
    title: 'Production-ready React for any skill level',
  },
  {
    description:
      'Institutional knowledge survives turnover, time off, and time itself. New collaborators, human or AI, get up to speed by opening the project. Onboarding stops being a multi-week ramp.',
    title: 'A project that remembers itself',
  },
];

const LATEST = SHIPPED[0];

const ShippedRow = ({item}: {item: ShippedItem}) => (
  <li className="border-line-soft m-0 border-t pt-6">
    <p className="text-muted mb-2 font-mono text-[0.7rem] tracking-[0.16em] uppercase">
      <span className="text-secondary-soft">{item.version}</span>
      <span aria-hidden={true} className="mx-2 opacity-40">
        ·
      </span>
      <span>{item.date}</span>
    </p>
    <h3 className="text-ink m-0 mb-2 text-[1.15rem] leading-snug font-medium tracking-[-0.01em]">
      {item.title}
    </h3>
    <p className="text-ink-dim m-0 max-w-[68ch] text-[0.98rem] leading-[1.7]">
      {item.description}
    </p>
  </li>
);

const LineRow = ({item}: {item: LineItem}) => (
  <li className="border-line-soft m-0 border-t pt-6">
    <h3 className="text-ink m-0 mb-2 text-[1.15rem] leading-snug font-medium tracking-[-0.01em]">
      {item.title}
    </h3>
    <p className="text-ink-dim m-0 max-w-[68ch] text-[0.98rem] leading-[1.7]">
      {item.description}
    </p>
  </li>
);

const Roadmap = () => (
  <div className="px-4 sm:px-8">
    <header className="mx-auto max-w-3xl pt-24 pb-2">
      <div className="mb-4 inline-flex items-center gap-2" data-reveal={true}>
        <span
          aria-hidden={true}
          className="bg-accent-soft size-1.5 rounded-full"
        />
        <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          Roadmap
        </span>
      </div>
      <h1 className="text-ink m-0 mb-6 text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.1] tracking-tight">
        Every release, in order.
      </h1>
      <p
        className="text-ink-dim mb-6 max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.55]"
        data-reveal={true}
        style={{'--reveal-delay': '180ms'} as CSSProperties}
      >
        What&rsquo;s shipped. What&rsquo;s underway. What&rsquo;s next.
      </p>
      <p
        className="text-muted m-0 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
        data-reveal={true}
        style={{'--reveal-delay': '260ms'} as CSSProperties}
      >
        Last shipped
        <span aria-hidden={true} className="mx-2 opacity-40">
          ·
        </span>
        {LATEST.version}
        <span aria-hidden={true} className="mx-2 opacity-40">
          ·
        </span>
        {LATEST.date}
      </p>
    </header>

    <main className="mx-auto max-w-3xl pb-24">
      <section className="pt-20" id="shipped">
        <h2 className="font-display text-ink m-0 mb-10 text-[clamp(2rem,3.5vw,2.5rem)] leading-[1.1] font-light tracking-tight">
          Shipped
        </h2>
        <ul className="m-0 list-none space-y-10 p-0">
          {SHIPPED.map((item) => (
            <ShippedRow key={item.version} item={item} />
          ))}
        </ul>
      </section>

      <section className="pt-20" id="in-progress">
        <h2 className="font-display text-ink m-0 mb-10 text-[clamp(2rem,3.5vw,2.5rem)] leading-[1.1] font-light tracking-tight">
          In progress
        </h2>
        <ul className="m-0 list-none space-y-10 p-0">
          {IN_PROGRESS.map((item) => (
            <LineRow key={item.title} item={item} />
          ))}
        </ul>
      </section>

      <section className="pt-20" id="planned">
        <h2 className="font-display text-ink m-0 mb-10 text-[clamp(2rem,3.5vw,2.5rem)] leading-[1.1] font-light tracking-tight">
          Planned
        </h2>
        <ul className="m-0 list-none space-y-10 p-0">
          {PLANNED.map((item) => (
            <LineRow key={item.title} item={item} />
          ))}
        </ul>

        <div className="mt-20" id="vision">
          <h3 className="font-display text-ink m-0 mb-8 text-2xl/tight font-medium tracking-[-0.01em]">
            Vision
          </h3>
          <ul className="m-0 list-none space-y-10 p-0">
            {VISION.map((item) => (
              <LineRow key={item.title} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="border-line-soft mt-24 border-t pt-10" id="follow">
        <h2 className="font-display text-ink m-0 mb-3 text-2xl/tight font-medium tracking-[-0.01em]">
          Follow new releases.
        </h2>
        <p className="text-ink-dim m-0 mb-6 max-w-[60ch] text-[1rem] leading-[1.65]">
          Each version tags on GitHub with notes. Watch the repo or follow
          Releases for the next ship.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="border-line text-ink hover:border-accent inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[0.9rem] no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia/releases"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Releases →
          </a>
          <a
            className="border-line text-ink-dim hover:border-accent hover:text-ink inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[0.9rem] no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia/blob/main/CHANGELOG.md"
            rel="noreferrer"
            target="_blank"
          >
            Full changelog →
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default Roadmap;

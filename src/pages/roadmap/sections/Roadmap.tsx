import type {CSSProperties, ReactNode} from 'react';

type Group = {
  id: GroupId;
  items: Item[];
  label: string;
};

type GroupId = 'in-progress' | 'planned' | 'shipped' | 'vision';

type Item = {
  description: ReactNode;
  title: string;
};

const LAST_UPDATED = '2026-05-09';

const GROUPS: Group[] = [
  {
    id: 'shipped',
    items: [
      {
        description:
          'The full Claude integration and React stack. Skills, hooks, multi-agent review, and a self-maintaining wiki.',
        title: 'GAIA Core',
      },
      {
        description:
          'Maintenance built into every GAIA project. Wiki sync, GAIA Update Deps for dependency upgrades, daily security audit, stale-branch cleanup. AI handles the safe cases on a cron and merges them on green CI. Humans only see what AI can’t recover from.',
        title: 'GAIA CI',
      },
    ],
    label: 'Shipped',
  },
  {
    id: 'in-progress',
    items: [
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
    ],
    label: 'In Progress',
  },
  {
    id: 'planned',
    items: [
      {
        description:
          'From issue to merge-ready PR with agents doing the work in between. Pick-up, planning, implementation, review, and handback. The human gates the plan and the merge. Everything else runs on its own.',
        title: 'Autonomous workflow',
      },
      {
        description:
          'Run GAIA inside Docker or another sandbox. Claude works against the project in an isolated environment, not against your filesystem. Reproducible across machines and safer to leave running.',
        title: 'Containerized development',
      },
      {
        description:
          'Wire it up during create or run a command later when you decide to go live. Pick from popular targets with the tradeoffs explained, or bring your own, and walk away with the build, environment variables, and CI/CD configured for you.',
        title: 'Deployment whenever you are ready',
      },
    ],
    label: 'Planned',
  },
  {
    id: 'vision',
    items: [
      {
        description:
          'Stop managing Claude line by line. Describe what you want, and it ships. Claude is raw power. GAIA is order and focus that makes it a senior engineer on every task, one who already knows your stack.',
        title: 'Claude as a true senior engineer',
      },
      {
        description:
          'Whether you are a 20-year veteran or shipping your first app, what you build is production-grade. Vibe coders graduate to real apps. Teams stop relitigating style and convention. Clean, accessible, low-debt code is the path of least resistance.',
        title: 'Production-ready React for any skill level',
      },
      {
        description:
          'Agentic engineering ships code faster than any human can review at a glance. GAIA closes that gap. Vulnerabilities, performance regressions, and unsafe patterns are caught before they land, not after they hit production.',
        title: 'Secure and fast by default',
      },
      {
        description:
          'The "what stack should I use" question that burns weeks at the start of every project is already answered. Skip the bikeshedding, the wiring, and the boilerplate, and start building the actual product the same day you start the repo.',
        title: 'The default starting point for greenfield React',
      },
      {
        description:
          'The cost of working with Claude does not grow with the codebase. A massive monorepo stays as cheap and responsive as a fresh repo. Claude stays sharp no matter how big the project gets.',
        title: 'Zero context bloat at any scale',
      },
      {
        description:
          'Institutional knowledge survives turnover, time off, and time itself. New collaborators, human or AI, get up to speed by opening the project. Onboarding stops being a multi-week ramp.',
        title: 'A project that remembers itself',
      },
    ],
    label: 'Vision',
  },
];

const Orbs = () => (
  <div
    aria-hidden={true}
    className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  >
    <div
      className="rm-drift-shipped absolute size-[540px] rounded-full blur-[2px] sm:size-[720px]"
      style={{
        background:
          'radial-gradient(circle at center, rgba(126,196,136,0.34) 0%, rgba(126,196,136,0.16) 30%, rgba(126,196,136,0.05) 58%, rgba(126,196,136,0) 78%)',
        left: '-260px',
        top: '-200px',
      }}
    />
    <div
      className="rm-drift-accent absolute hidden size-[620px] rounded-full blur-[2px] sm:block"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,119,87,0.32) 0%, rgba(217,119,87,0.16) 30%, rgba(217,119,87,0.06) 58%, rgba(217,119,87,0) 78%)',
        right: '-200px',
        top: '120px',
      }}
    />
    <div
      className="rm-drift-warn absolute size-[405px] rounded-full blur-[2px] sm:size-[540px]"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,168,87,0.22) 0%, rgba(217,168,87,0.10) 32%, rgba(217,168,87,0.04) 60%, rgba(217,168,87,0) 80%)',
        left: '30%',
        top: '50%',
      }}
    />
    <div
      className="rm-drift-vision absolute size-[570px] rounded-full blur-[2px] sm:size-[760px]"
      style={{
        background:
          'radial-gradient(circle at center, rgba(91,138,138,0.28) 0%, rgba(91,138,138,0.13) 30%, rgba(91,138,138,0.04) 58%, rgba(91,138,138,0) 78%)',
        bottom: '-240px',
        right: '-180px',
      }}
    />
  </div>
);

const Stage = ({group}: {group: Group}) => (
  <section
    className="relative py-10 first:pt-2 last:pb-0"
    data-group={group.id}
    id={group.id}
  >
    <header
      className="relative mb-6 flex min-h-[1.1rem] items-center gap-3.5"
      data-reveal={true}
    >
      <span aria-hidden={true} className="rm-node" />
      <h2 className="font-display text-ink m-0 text-[clamp(1.85rem,3.4vw,2.5rem)] leading-[1.05] font-normal tracking-tight">
        {group.label}
      </h2>
    </header>
    <ul className="m-0 grid list-none gap-2 p-0">
      {group.items.map((item, index) => (
        <li
          key={item.title}
          className="rm-item"
          data-reveal={true}
          style={{'--reveal-delay': `${index * 60}ms`} as CSSProperties}
        >
          <h3 className="font-display text-ink m-0 mb-1.5 text-[1.18rem] font-medium tracking-[-0.015em]">
            {item.title}
          </h3>
          <p className="text-ink-dim m-0 max-w-[64ch] text-[0.98rem] leading-[1.7]">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  </section>
);

const Roadmap = () => (
  <div className="relative overflow-x-clip">
    <Orbs />
    <header className="relative z-10 px-6 pt-16 pb-12 sm:pt-24">
      <div className="mx-auto w-full max-w-[880px]">
        <h1
          className="font-display text-ink m-0 mb-6 text-[clamp(3rem,7vw,5.25rem)] leading-none font-light tracking-[-0.035em]"
          data-reveal={true}
        >
          Roadmap
        </h1>
        <p
          className="font-display text-ink-dim m-0 mb-5 max-w-[38ch] text-[clamp(1.1rem,2vw,1.35rem)] leading-[1.6]"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as CSSProperties}
        >
          Where GAIA is today. Where it is going. Every release adds another
          layer to the discipline.
        </p>
        <p
          className="text-muted font-mono text-[0.72rem] tracking-[0.14em] uppercase"
          data-reveal={true}
          style={{'--reveal-delay': '160ms'} as CSSProperties}
        >
          Last updated · {LAST_UPDATED}
        </p>
      </div>
    </header>
    <section className="relative z-10 px-6 pt-8 pb-24 sm:pb-24">
      <div className="rm-spine relative mx-auto w-full max-w-[960px] pl-10 sm:pl-12">
        {GROUPS.map((group) => (
          <Stage key={group.id} group={group} />
        ))}
      </div>
    </section>
  </div>
);

export default Roadmap;

import type {ReactNode} from 'react';

type Group = {
  color: string;
  id: string;
  items: Item[];
  label: string;
};

type Item = {
  description: ReactNode;
  title: string;
};

const GROUPS: Group[] = [
  {
    color: '#7ec488',
    id: 'shipped',
    items: [
      {
        description:
          'The inaugural public release shipped the full Claude integration surface and React stack.',
        title: 'v1.0.0',
      },
    ],
    label: 'Shipped',
  },
  {
    color: 'var(--color-accent)',
    id: 'in-progress',
    items: [
      {
        description:
          'The site you are reading. Growing into a full reference as the project matures.',
        title: 'Documentation',
      },
    ],
    label: 'In Progress',
  },
  {
    color: '#c8a96a',
    id: 'planned',
    items: [
      {
        description:
          'Wire it up during create or run a command later when you decide to go live. Pick from popular targets with the tradeoffs explained, or bring your own, and walk away with the build, environment variables, and CI/CD configured for you.',
        title: 'Deployment whenever you are ready',
      },
    ],
    label: 'Planned',
  },
  {
    color: 'var(--color-muted)',
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

const StatusGroup = ({group}: {group: Group}) => (
  <div
    className="scroll-mt-20 pl-6"
    id={group.id}
    style={{borderLeft: `2px solid ${group.color}`}}
  >
    <div className="mb-2 flex items-baseline gap-3">
      <span
        aria-hidden="true"
        className="inline-block size-2.5 shrink-0 -translate-y-px rounded-full"
        style={{backgroundColor: group.color}}
      />
      <h3 className="group font-display text-ink m-0 text-[clamp(1.5rem,2.5vw,2rem)] font-light tracking-[-0.02em]">
        <a className="text-inherit no-underline" href={`#${group.id}`}>
          {group.label}
          <span
            aria-hidden="true"
            className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
          >
            #
          </span>
        </a>
      </h3>
    </div>
    <ul className="m-0 mt-6 list-none space-y-5 p-0">
      {group.items.map((item) => (
        <li key={item.title}>
          <h4 className="text-ink font-body mb-1 text-base font-semibold">
            {item.title}
          </h4>
          <p className="text-ink-dim m-0 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Roadmap = () => (
  <section className="pt-8 pb-24">
    <div className="mx-auto max-w-3xl scroll-mt-20 px-4 sm:px-8" id="roadmap">
      <h2 className="font-display text-ink mb-2 text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em]">
        Roadmap
      </h2>
      <p className="text-muted mb-8 text-sm">Last updated: 2026-05-01</p>
      <p className="text-ink-dim mb-12">
        Where GAIA stands today, and where it’s going. A Claude-native React
        workflow, sharpening with every release into a leaner, more reliable way
        to ship production-quality apps.
      </p>
      <div className="space-y-14">
        {GROUPS.map((group) => (
          <StatusGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  </section>
);

export default Roadmap;

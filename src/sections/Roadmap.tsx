import type { ReactNode } from 'react';

type Item = {
  title: string;
  description: ReactNode;
};

type Group = {
  id: string;
  label: string;
  color: string;
  items: Item[];
};

const GROUPS: Group[] = [
  {
    id: 'shipped',
    label: 'Shipped',
    color: '#7ec488',
    items: [
      {
        title: 'Coming soon',
        description:
          'GAIA is in pre-release. Testing and development continue ahead of 1.0. Shipped items will appear here once the release goes out.',
      },
    ],
  },
  {
    id: 'in-progress',
    label: 'In Progress',
    color: 'var(--color-accent)',
    items: [
      {
        title: 'Documentation',
        description:
          'The site you are reading. Growing from a tour of what GAIA includes into worked examples of common workflows, walkthroughs for every command, and FAQs that answer the questions teams hit once they start shipping with it.',
      },
    ],
  },
  {
    id: 'planned',
    label: 'Planned',
    color: '#c8a96a',
    items: [
      {
        title: 'Pick your framework at create time',
        description: (
          <>
            <code className="bg-bg-elev px-2 py-1 rounded text-sm">npx create-gaia</code> walks you
            through React Router, Next.js, Astro, and TanStack Start with a short Q&amp;A that
            recommends the right foundation for the project you have in mind. No more spending a
            weekend comparing docs before you write your first component.
          </>
        ),
      },
      {
        title: 'Choose component library and icons up front',
        description:
          'Get a project already wired to use them. The defaults match the app you plan to build, not a generic template you have to rip out.',
      },
      {
        title: 'Deployment whenever you are ready',
        description:
          'Wire it up during create or run a command later when you decide to go live. Pick from popular targets with the tradeoffs explained, or bring your own, and walk away with the build, environment variables, and CI/CD configured for you.',
      },
      {
        title: 'Security and performance scanning on every PR',
        description:
          'Snyk runs against every change before it merges, catching vulnerabilities and performance regressions while they are still cheap to fix. Staying secure stops being a thing you have to remember.',
      },
    ],
  },
  {
    id: 'vision',
    label: 'Vision',
    color: 'var(--color-fg-mute)',
    items: [
      {
        title: 'Claude as a true senior engineer',
        description:
          'Stop managing Claude line by line. Describe what you want, and it ships. Claude is raw power. GAIA is order and focus that makes it a senior engineer on every task, one who already knows your stack.',
      },
      {
        title: 'Production-ready React for any skill level',
        description:
          'Whether you are a 20-year veteran or shipping your first app, what you build is production-grade. Vibe coders graduate to real apps. Teams stop relitigating style and convention. Clean, accessible, low-debt code is the path of least resistance.',
      },
      {
        title: 'Secure and fast by default',
        description:
          'Agentic engineering ships code faster than any human can review at a glance. GAIA closes that gap. Vulnerabilities, performance regressions, and unsafe patterns are caught before they land, not after they hit production.',
      },
      {
        title: 'The default starting point for greenfield React',
        description:
          'The "what stack should I use" question that burns weeks at the start of every project is already answered. Skip the bikeshedding, the wiring, and the boilerplate, and start building the actual product the same day you start the repo.',
      },
      {
        title: 'Zero context bloat at any scale',
        description:
          'The cost of working with Claude does not grow with the codebase. A massive monorepo stays as cheap and responsive as a fresh repo. Claude stays sharp no matter how big the project gets.',
      },
      {
        title: 'A project that remembers itself',
        description:
          'Institutional knowledge survives turnover, time off, and time itself. New collaborators, human or AI, get up to speed by opening the project. Onboarding stops being a multi-week ramp.',
      },
    ],
  },
];

function StatusGroup({ group }: { group: Group }) {
  return (
    <div
      id={group.id}
      style={{
        scrollMarginTop: '5rem',
        borderLeft: `2px solid ${group.color}`,
        paddingLeft: '1.5rem',
      }}
    >
      <div className="flex items-baseline gap-3 mb-2">
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '0.625rem',
            height: '0.625rem',
            borderRadius: '50%',
            backgroundColor: group.color,
            transform: 'translateY(-1px)',
          }}
        />
        <h3
          className="group"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            letterSpacing: '-0.02em',
            color: 'var(--color-fg)',
            margin: 0,
          }}
        >
          <a href={`#${group.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {group.label}
            <span
              aria-hidden="true"
              className="opacity-0 group-hover:opacity-40"
              style={{
                marginLeft: '0.4em',
                fontSize: '0.6em',
                transition: 'opacity 0.15s',
                userSelect: 'none',
              }}
            >
              #
            </span>
          </a>
        </h3>
      </div>
      <ul className="space-y-5 list-none p-0 m-0 mt-6">
        {group.items.map((item) => (
          <li key={item.title}>
            <h4
              className="text-fg"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: 0,
                marginBottom: '0.25rem',
              }}
            >
              {item.title}
            </h4>
            <p className="text-fg-dim leading-relaxed m-0">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Roadmap() {
  return (
    <section style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
      <div
        id="roadmap"
        style={{
          scrollMarginTop: '5rem',
          maxWidth: '48rem',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--color-fg)',
            marginBottom: '2.5rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
          }}
        >
          Roadmap
        </h2>
        <p className="text-fg-dim mb-12">
          Where GAIA stands today, and where it's going. A Claude-native React workflow, sharpening
          with every release into a leaner, more reliable way to ship production-quality apps.
        </p>
        <div className="space-y-14">
          {GROUPS.map((group) => (
            <StatusGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Item = {
  title: string;
  description: string;
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
          'GAIA is days away from its first tagged release. Watch this space — the first set of shipped items lands here as soon as v0.1 is cut.',
      },
    ],
  },
  {
    id: 'in-progress',
    label: 'In Progress',
    color: 'var(--color-accent)',
    items: [
      {
        title: 'Documentation site',
        description:
          'The site you are reading. About, Docs, and now Roadmap pages, deployed from the gaia-react/docs project.',
      },
      {
        title: 'Obsidian wiki integration',
        description:
          'A first-class wiki vault wired into Claude so it can recall project decisions, ADRs, and component conventions without re-reading the codebase.',
      },
      {
        title: 'Agentic Design rules in CLAUDE.md',
        description:
          'A curated set of rules — coding guidelines, accessibility, testing, React, TypeScript — that constrain Claude into senior-engineer behavior by default.',
      },
      {
        title: 'Core slash commands',
        description:
          '/update-deps, /update-gaia, and /ultrareview shipping as part of the starter to automate the most common chores and reviews.',
      },
    ],
  },
  {
    id: 'planned',
    label: 'Planned',
    color: '#c8a96a',
    items: [
      {
        title: 'Skills library',
        description:
          'A growing set of installable skills — review, dry-refactor, react-doctor, simplify — that ship with GAIA and can be invoked by name.',
      },
      {
        title: 'Storybook + visual regression autopilot',
        description:
          'Stories generated alongside components, with Chromatic baselines updated automatically on intentional UI changes.',
      },
      {
        title: 'create-gaia-app wizard',
        description:
          'A one-command bootstrap that scaffolds a new GAIA project, configures the wiki, and pre-loads rules, skills, and hooks tuned to the chosen stack.',
      },
      {
        title: 'i18n authoring tooling',
        description:
          'Helpers and skills for managing translation keys end-to-end so adding a new locale is a single conversation, not a multi-file scavenger hunt.',
      },
      {
        title: 'Hook presets',
        description:
          'Pre-tuned PreToolUse and PostToolUse hooks for typecheck, test, lint, and format gates so Claude self-corrects before handing work back.',
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
          'Stop managing Claude line by line. Describe what you want, and it ships. Claude is the raw power. GAIA is the order and focus that makes it a senior engineer on every task, one who already knows your stack.',
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
          What is shipped, in flight, queued up, and on the horizon. Best-guess scope and ordering —
          priorities shift as the project (and Claude) get sharper.
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

import {Section} from '@/components/Section';

const KARPATHY = [
  {
    desc: 'Surface assumptions, push back on complexity, ask when unclear.',
    name: 'Think Before Coding',
  },
  {
    desc: 'Write the minimum code that solves the problem, no speculative abstractions.',
    name: 'Simplicity First',
  },
  {
    desc: 'Touch only what is needed; match existing style; leave unbroken things alone.',
    name: 'Surgical Changes',
  },
  {
    desc: 'Define verifiable success criteria before starting; loop until verified.',
    name: 'Goal-Driven Execution',
  },
];

const PRINCIPLES = [
  {
    desc: 'Vitest for units, Playwright for user flows, tests before code.',
    name: 'Always Use TDD',
  },
  {
    desc: 'Run the quality gate process; fix all warnings and errors before reporting done.',
    name: 'Always Verify Your Work',
  },
];

const BENEFITS = [
  {
    desc: 'Lazy-fetch only the pages Claude needs. Adding 20 more wiki pages does not bloat every session, since they are not loaded unless asked.',
    name: 'Tokens saved',
  },
  {
    desc: 'Domain isolation prevents unrelated information from leaking into the context window. Technical questions get technical answers only.',
    name: 'Context stays focused',
  },
  {
    desc: 'Whether you are building a 2-person startup or a 100-person team, the wiki-first discipline keeps sessions lean and predictable.',
    name: 'The pattern scales',
  },
];

const ClaudeMdDetail = () => (
  <Section id="claude-md" title="A Karpathy-style CLAUDE.md">
    <div className="text-fg space-y-6">
      <p>
        A Karpathy-style CLAUDE.md is wiki-first, don’t-preload, lazy-fetch. It
        tells Claude where to look, not to load everything upfront. See{' '}
        <a
          className="text-accent hover:underline"
          href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
          rel="noopener noreferrer"
          target="_blank"
        >
          Karpathy’s original
        </a>{' '}
        for the philosophy.
      </p>

      <p>
        GAIA ships with coding rules that only load when Claude is writing code.
        The first four come from Karpathy’s CLAUDE.md:
      </p>

      <ul className="space-y-3">
        {KARPATHY.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span className="text-fg-dim">
              <strong className="text-fg">{name} - </strong>
              {desc}
            </span>
          </li>
        ))}
      </ul>

      <p>GAIA adds two more principles on top of these:</p>

      <ul className="space-y-3">
        {PRINCIPLES.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span className="text-fg-dim">
              <strong className="text-fg">{name} - </strong>
              {desc}
            </span>
          </li>
        ))}
      </ul>

      <p>
        GAIA’s variant also adds three wiki habits on top of Karpathy’s framing.{' '}
        <strong>Domain isolation</strong> means technical work fetches only from{' '}
        <code className="bg-bg-elev rounded-sm px-2 py-1 text-sm">
          wiki/app/
        </code>
        , brand work from its own domain. <strong>wiki/hot.md auto-load</strong>{' '}
        is a 200-word recent-context cache loaded at every session start to
        surface work-in-progress. <strong>Memory discipline</strong> keeps
        machine-local memory for personal preferences only. Durable knowledge
        lives in the wiki or{' '}
        <code className="bg-bg-elev rounded-sm px-2 py-1 text-sm">
          .claude/rules/
        </code>
        .
      </p>

      <h3 className="text-fg pt-2 font-semibold">Three concrete benefits</h3>

      <ul className="space-y-3">
        {BENEFITS.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span className="text-fg-dim">
              <strong className="text-fg">{name}.</strong> {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default ClaudeMdDetail;

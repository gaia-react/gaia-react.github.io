import type {ReactNode} from 'react';
import FxSection from './FxSection';

type Benefit = {
  desc: string;
  name: string;
};

type Principle = {
  desc: string;
  name: string;
  src: string;
};

const KARPATHY: Principle[] = [
  {
    desc: 'Surface assumptions, push back on complexity, ask when unclear.',
    name: 'Think Before Coding',
    src: 'Karpathy',
  },
  {
    desc: 'Write the minimum code that solves the problem, no speculative abstractions.',
    name: 'Simplicity First',
    src: 'Karpathy',
  },
  {
    desc: 'Touch only what is needed; match existing style; leave unbroken things alone.',
    name: 'Surgical Changes',
    src: 'Karpathy',
  },
  {
    desc: 'Define verifiable success criteria before starting; loop until verified.',
    name: 'Goal-Driven Execution',
    src: 'Karpathy',
  },
];

const PRINCIPLES: Principle[] = [
  {
    desc: 'Vitest for units, Playwright for user flows, tests before code.',
    name: 'Always Use TDD',
    src: 'GAIA',
  },
  {
    desc: 'Run the quality gate process; fix all warnings and errors before reporting done.',
    name: 'Always Verify Your Work',
    src: 'GAIA',
  },
];

const ALL_PRINCIPLES = [...KARPATHY, ...PRINCIPLES];

const BENEFITS: Benefit[] = [
  {
    desc: 'Lazy-fetch only the pages Claude needs. Adding 20 more wiki pages does not bloat every session, since they are not loaded unless asked.',
    name: 'Tokens saved.',
  },
  {
    desc: 'Domain isolation prevents unrelated information from leaking into the context window. Technical questions get technical answers only.',
    name: 'Context stays focused.',
  },
  {
    desc: 'Whether you are building a 2-person startup or a 100-person team, the wiki-first discipline keeps sessions lean and predictable.',
    name: 'The pattern scales.',
  },
];

const lead: ReactNode = (
  <>
    <p>
      A Karpathy-style CLAUDE.md is wiki-first, don&apos;t-preload, lazy-fetch.
      It tells Claude where to look, not to load everything upfront. See{' '}
      <a
        className="text-accent hover:text-accent-soft transition-colors duration-150"
        href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        Karpathy&apos;s original
      </a>{' '}
      for the philosophy.
    </p>
    <p>
      GAIA ships with coding rules that only load when Claude is writing code.
      The first four come from Karpathy&apos;s CLAUDE.md:
    </p>
    <p>
      GAIA&apos;s variant also adds three wiki habits on top of Karpathy&apos;s
      framing. Domain isolation means technical work fetches only from
      wiki/app/, brand work from its own domain. wiki/hot.md auto-load is a
      200-word recent-context cache loaded at every session start to surface
      work-in-progress. Memory discipline keeps machine-local memory for
      personal preferences only. Durable knowledge lives in the wiki or
      .claude/rules/.
    </p>
  </>
);

const ClaudeMdDetail = () => (
  <FxSection id="claude-md" lead={lead} title="A Karpathy-style CLAUDE.md">
    {/* Principles table */}
    <div className="bg-surface border-line-soft mb-8 overflow-hidden rounded-lg border">
      <div className="border-line-soft text-muted flex justify-between border-b bg-black/15 px-[1.4rem] py-[0.6rem] font-mono text-[0.7rem] tracking-[0.14em] uppercase">
        <span>Coding principles</span>
        <span>Source</span>
      </div>
      {ALL_PRINCIPLES.map(({desc, name, src}) => (
        <div
          key={name}
          className="border-line-soft grid grid-cols-1 items-baseline gap-1 border-b px-[1.4rem] py-[1.1rem] last:border-b-0 md:grid-cols-[220px_1fr] md:gap-6"
        >
          <div>
            <span className="text-ink text-[0.95rem] font-medium">{name}</span>
            <span className="text-muted mt-[0.2rem] block font-mono text-[0.65rem] tracking-[0.16em] uppercase">
              {src}
            </span>
          </div>
          <div className="text-ink-dim text-[0.92rem] leading-[1.6]">
            {desc}
          </div>
        </div>
      ))}
    </div>

    {/* Benefits heading */}
    <h3 className="font-display text-ink mt-12 mb-5 text-[1.4rem] font-normal tracking-[-0.015em]">
      Three concrete benefits
    </h3>

    {/* Benefits list */}
    <div className="border-line-soft border-t">
      {BENEFITS.map(({desc, name}) => (
        <div
          key={name}
          className="border-line-soft grid grid-cols-1 items-baseline gap-1 border-b py-[1.6rem] last:border-b-0 md:grid-cols-[minmax(10rem,14rem)_1fr] md:gap-8"
        >
          <div className="font-display text-ink text-[1.35rem] leading-[1.2] font-normal tracking-[-0.015em]">
            {name}
          </div>
          <p className="text-ink-dim m-0 max-w-[64ch] text-[0.97rem] leading-[1.65]">
            {desc}
          </p>
        </div>
      ))}
    </div>
  </FxSection>
);

export default ClaudeMdDetail;

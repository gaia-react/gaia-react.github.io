import type {ReactNode} from 'react';
import FxSection from './FxSection';

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
    name: 'Always Verify Work',
    src: 'GAIA',
  },
];

const ALL_PRINCIPLES = [...KARPATHY, ...PRINCIPLES];

const lead: ReactNode = (
  <>
    <p>
      <a
        className="text-accent hover:text-accent-soft transition-colors duration-150"
        href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
        rel="noopener noreferrer"
        target="_blank"
      >
        Karpathy&apos;s CLAUDE.md
      </a>{' '}
      formalizes how a disciplined engineer thinks: plan before coding, reach
      for the simpler solution, touch only what&apos;s needed, verify before
      calling it done. GAIA ships those principles out of the box and layers in
      its own session management on top.
    </p>
    <p>
      Six principles in total: four from Karpathy, two added by GAIA. They
      activate automatically when Claude is working on code, so every session
      starts from the same disciplined baseline.
    </p>
  </>
);

const ClaudeMdDetail = () => (
  <FxSection id="claude-md" lead={lead} title="GAIA Coding Principles">
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
  </FxSection>
);

export default ClaudeMdDetail;

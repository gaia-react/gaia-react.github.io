import type React from 'react';
import type {ReactNode} from 'react';

type Item = {
  desc: ReactNode;
  name: string;
};

const FAILURES: Item[] = [
  {
    desc: 'Every session reinvents how the project does things. One file goes one way, the next file goes another. Conventions exist on paper. The model does not read them by default.',
    name: 'Convention drift',
  },
  {
    desc: 'Without scoped rules, every session reloads everything Claude might need. The CLAUDE.md grows. Token costs balloon. Reasoning thins. The bigger the project, the worse it gets.',
    name: 'Context bloat',
  },
  {
    desc: (
      <>
        Without enforced gates, “done” means the model said so. Tests are not
        written. Types go{' '}
        <code className="bg-surface text-ink rounded-sm px-1.5 font-mono text-[0.875em]">
          any
        </code>
        . Every shortcut compounds. AI moves at AI speed, so tech debt compounds
        faster than any human team would let it.
      </>
    ),
    name: 'No backstop',
  },
  {
    desc: 'Dependencies rot. Knowledge goes stale. Security findings drift. The chores that quietly decay a project get neglected while you’re busy shipping features. AI usually does not handle these at all.',
    name: 'Maintenance debt',
  },
];

const Diagnosis = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b px-4 py-14 sm:px-8 sm:py-20"
    id="diagnosis"
  >
    <div className="mx-auto max-w-275">
      <div className="mb-14">
        <h2
          className="group text-ink font-display mb-6 max-w-[26ch] text-[clamp(2.2rem,4.5vw,3rem)] font-normal tracking-[-0.02em] text-balance"
          data-reveal={true}
        >
          <a className="text-inherit no-underline" href="#diagnosis">
            What is actually breaking
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
        <p
          className="text-ink-dim max-w-[65ch] text-[1.05rem] leading-[1.7] text-pretty"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          If you’ve used Claude on a real project, you’ve seen it happen.
          Working code rewritten. Features hallucinated. Tests never written.
          The failures are not random. They have shapes.
        </p>
      </div>
      <ol className="grid list-none gap-x-10 gap-y-12 p-0 sm:grid-cols-2 sm:gap-y-14">
        {FAILURES.map(({desc, name}, index) => (
          <li key={name} className="flex flex-col gap-3">
            <div className="border-line-soft text-accent-soft flex items-baseline gap-3 border-b pb-2 font-mono text-[0.78rem] tracking-[0.18em] uppercase">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span className="text-muted">/</span>
              <span className="text-muted">Failure mode</span>
            </div>
            <h3 className="text-ink font-display text-[1.32rem] font-medium tracking-[-0.015em]">
              {name}
            </h3>
            <p className="text-ink-dim max-w-[58ch] text-[1rem] leading-[1.7]">
              {desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Diagnosis;

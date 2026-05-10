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
        . Every shortcut compounds. AI moves at AI speed, so the debt compounds
        faster than any human team would let it.
      </>
    ),
    name: 'No backstop',
  },
  {
    desc: 'Dependencies rot. Wikis go stale. Security findings drift. The chores that quietly decay a project get neglected while the team is busy shipping features. AI usually does not touch them at all.',
    name: 'Maintenance debt',
  },
];

const Diagnosis = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b px-4 py-14 sm:px-8 sm:py-20"
    id="diagnosis"
  >
    <div className="mx-auto max-w-[1100px]">
      <div className="mb-10 grid items-start gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <h2
          className="group text-ink font-display max-w-[16ch] text-[clamp(1.8rem,3.4vw,2.4rem)] font-normal tracking-[-0.02em]"
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
        <div
          className="text-ink-dim text-[1.05rem] leading-[1.7]"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          <p>
            If you have used Claude on a real project, you have watched it
            happen. Working code rewritten. APIs hallucinated. Tests never
            written. The failures are not random. They have shapes.
          </p>
        </div>
      </div>
      <ol
        className="border-line-soft list-none border-t p-0"
        data-stagger={true}
      >
        {FAILURES.map(({desc, name}) => (
          <li
            key={name}
            className="border-line-soft grid gap-y-2 border-b py-6 last:border-b-0 sm:grid-cols-[minmax(12rem,1fr)_minmax(0,2.2fr)] sm:items-baseline sm:gap-8"
          >
            <h3 className="text-ink font-display self-start text-[1.18rem] font-medium tracking-[-0.015em]">
              {name}
            </h3>
            <p className="text-ink-dim max-w-[64ch] text-[1rem] leading-[1.7]">
              {desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Diagnosis;

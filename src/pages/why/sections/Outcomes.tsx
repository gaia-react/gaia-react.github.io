import type React from 'react';

type Item = {
  desc: string;
  name: string;
};

const OUTCOMES: Item[] = [
  {
    desc: 'Typecheck, lint, tests, and build are gates, not suggestions. Code that fails them does not commit, much less merge. What lands is what you would actually ship.',
    name: 'Code that ships',
  },
  {
    desc: 'Rules and wiki pages load on demand, not by default. A project with 1,000 wiki pages costs the same per task as one with 10. Claude opens what the task needs and nothing else.',
    name: 'Costs that do not balloon',
  },
  {
    desc: 'Project knowledge lives in markdown the AI reads and writes back to. It sits in git, not chat history. Six months in, you have more context, not less.',
    name: 'Knowledge that compounds',
  },
  {
    desc: 'Every merge runs a code-review audit with a team of specialist agents. Critical findings block the merge. Things you would notice on a senior engineer’s review, the AI catches first.',
    name: 'Reviews you can trust',
  },
  {
    desc: 'GAIA CI keeps deps current, security patched, branches clean, and the wiki in sync. Patch and minor bumps auto-merge on green. Major changes hold for human review.',
    name: 'Maintenance that runs itself',
  },
];

const Outcomes = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b px-4 py-14 sm:px-8 sm:py-20"
    id="outcomes"
  >
    <div className="mx-auto max-w-[1100px]">
      <div className="mb-10 grid items-start gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <h2
          className="group text-ink font-display max-w-[16ch] text-[clamp(1.8rem,3.4vw,2.4rem)] font-normal tracking-[-0.02em]"
          data-reveal={true}
        >
          <a className="text-inherit no-underline" href="#outcomes">
            What this gets you
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
      </div>
      <ol
        className="border-line-soft list-none border-t p-0"
        data-stagger={true}
      >
        {OUTCOMES.map(({desc, name}) => (
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
      <p
        className="text-muted mt-8 text-[0.98rem]"
        data-reveal={true}
        style={{'--reveal-delay': '80ms'} as React.CSSProperties}
      >
        See how each piece is wired up on the{' '}
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="/features/"
        >
          Features page
        </a>
        .
      </p>
    </div>
  </section>
);

export default Outcomes;

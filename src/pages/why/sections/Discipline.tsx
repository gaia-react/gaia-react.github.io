import type React from 'react';

const Discipline = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b px-4 py-14 sm:px-8 sm:py-20"
    id="discipline"
  >
    <div className="mx-auto max-w-[1100px]">
      <div className="mb-10 grid items-start gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <h2
          className="group text-ink font-display max-w-[16ch] text-[clamp(1.8rem,3.4vw,2.4rem)] font-normal tracking-[-0.02em]"
          data-reveal={true}
        >
          <a className="text-inherit no-underline" href="#discipline">
            What vibe coding is missing
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
        <div
          className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.7]"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          <p>
            AI has the capacity to be far more disciplined than any human at
            writing code. It does not complain about linting. It does not get
            burned out. It does not ask for exceptions on a tight deadline. The
            strictness a human team might push back on, AI just follows.
          </p>
          <p>
            AI does not bring that discipline on its own. The default is the
            opposite. Trained on the aggregate of every codebase on the
            internet, the model mirrors the average. The average is not
            disciplined. Without structure around it, AI averages every shortcut
            its training data has ever taken. Every bad coding habit.
          </p>
          <p>
            GAIA provides structure in layers. Hooks own the tool call. Rules
            and Skills own the writing. Gates own the commit. Audits own the
            merge. Discipline is structural, not personal.
          </p>
          <p className="text-ink">
            GAIA does not make AI “smarter.” GAIA makes AI{' '}
            <em className="text-accent font-display italic">disciplined</em>.
            That is what “vibe coding” is missing.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Discipline;

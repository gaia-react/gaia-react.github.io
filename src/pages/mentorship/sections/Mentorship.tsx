import type React from 'react';
import {CodeBlock} from '@/components/CodeBlock';

type LoopStep = {detail: string; label: string};

const LOOP_STEPS: LoopStep[] = [
  {
    detail:
      'Every spec, plan, and review emits a structured event. No code, no identity.',
    label: 'Event',
  },
  {
    detail:
      'Events accumulate into a profile of how you actually work. Where you rush, where you revise, where you get stuck.',
    label: 'Pattern',
  },
  {
    detail:
      'The Socratic loop goes deeper where you under-articulate. The engineer skips the recap where you already handle it.',
    label: 'Adaptation',
  },
];

const OBSERVED = [
  'Which GAIA command ran',
  'What kind of question came back',
  'How many attempts a UAT took',
  'Whether you amended a spec, plan, or review',
  'How long a phase took, in coarse buckets',
];

const NOT_OBSERVED = [
  'When you work or how fast you type',
  'What you read or how long you read it',
  'Your attention, mood, or biometrics',
  'Any activity outside GAIA’s commands',
  'Any keystroke, screen, or sensor data',
];

const Mentorship = () => (
  <>
    {/* Hero */}
    <section className="px-4 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-3xl">
        <div
          className="text-accent-soft mb-8 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
          data-reveal={true}
        >
          <span aria-hidden={true} className="bg-accent-soft size-1.5" />
          Mentorship
        </div>
        <h1 className="font-display text-ink mb-10 max-w-[22ch] text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.1] font-light tracking-[-0.03em]">
          I want to get better at working with AI.{' '}
          <em className="text-accent-soft font-light italic">
            So I built a coach that watches how I work.
          </em>
        </h1>
        <p
          className="text-ink-dim max-w-prose text-[1.0625rem] leading-[1.75]"
          data-reveal={true}
          style={{'--reveal-delay': '180ms'} as React.CSSProperties}
        >
          It shows me where I tend to rush, where I revise after the fact, where
          I keep getting stuck. The pattern adjusts as I sharpen.
        </p>
        <div
          className="text-muted mt-10 font-mono text-[0.7rem] tracking-[0.22em] uppercase"
          data-reveal={true}
          style={{'--reveal-delay': '280ms'} as React.CSSProperties}
        >
          Optional · Local-only · Yours
        </div>
      </div>
    </section>

    {/* The loop */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
          <div
            className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase"
            data-reveal={true}
          >
            The loop
          </div>
          <div
            className="text-muted font-mono text-[0.7rem] tracking-[0.16em] lowercase"
            data-reveal={true}
          >
            events → patterns → adapted session
          </div>
        </div>
        <ol
          className="m-0 grid list-none gap-8 p-0 md:grid-cols-3 md:gap-10"
          data-stagger=""
        >
          {LOOP_STEPS.map((step, index) => (
            <li
              key={step.label}
              className="border-line-soft relative border-t pt-5"
            >
              <span
                aria-hidden={true}
                className="bg-accent absolute top-[-3px] left-0 h-[5px] w-10"
              />
              <div className="text-accent-soft font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                {step.label}
              </div>
              <p className="text-ink-dim mt-3 text-[0.95rem] leading-[1.65]">
                {step.detail}
              </p>
              <div className="text-muted mt-3 font-mono text-[0.6rem] tracking-[0.18em]">
                0{index + 1}
              </div>
            </li>
          ))}
        </ol>
        <div
          className="mt-14 flex flex-col gap-5"
          data-reveal={true}
          style={{'--reveal-delay': '160ms'} as React.CSSProperties}
        >
          <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
            Every spec I write, every plan I refine, every code review I run
            goes through GAIA&rsquo;s commands. Each step emits a structured
            event. The events add up to a record of how I actually work.
          </p>
          <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
            That record is the input to a coach that gets sharper as it watches
            me. Patterns need a minimum sample size before they shape any
            session. Expect the first few to feel quiet.
          </p>
        </div>
      </div>
    </section>

    {/* The privacy ledger (centerpiece) */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div
          className="mb-10 flex flex-wrap items-baseline justify-between gap-4"
          data-reveal={true}
        >
          <div className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase">
            Private by design
          </div>
          <div className="text-muted font-mono text-[0.7rem] tracking-[0.16em]">
            Local-only · No network calls
          </div>
        </div>

        <h2
          className="font-display text-ink mb-12 max-w-[24ch] text-[clamp(1.6rem,3.4vw,2.5rem)] leading-[1.15] font-light tracking-[-0.02em]"
          data-reveal={true}
          style={{'--reveal-delay': '100ms'} as React.CSSProperties}
        >
          Mentorship doesn&rsquo;t read your code.{' '}
          <em className="text-accent-soft font-light italic">
            It works on event metadata.
          </em>
        </h2>

        <div className="border-line-soft grid gap-12 border-t pt-10 md:grid-cols-2 md:gap-16">
          <div data-reveal={true}>
            <div className="text-accent-soft mb-6 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
              Observed
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {OBSERVED.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[2.5rem_1fr] gap-2 sm:gap-4"
                >
                  <span
                    aria-hidden={true}
                    className="text-muted pt-0.5 font-mono text-[0.7rem] tracking-[0.14em]"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-dim text-[0.95rem] leading-[1.65]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-reveal={true}
            style={{'--reveal-delay': '140ms'} as React.CSSProperties}
          >
            <div className="text-secondary-soft mb-6 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
              Not observed
            </div>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {NOT_OBSERVED.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[2.5rem_1fr] gap-2 sm:gap-4"
                >
                  <span
                    aria-hidden={true}
                    className="text-muted pt-0.5 font-mono text-[0.7rem] tracking-[0.14em]"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-ink-dim text-[0.95rem] leading-[1.65]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-line-soft mt-14 border-t pt-10"
          data-reveal={true}
        >
          <div className="text-muted mb-4 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
            Your profile lives at
          </div>
          <div className="mb-6">
            <code className="text-ink bg-surface-raised border-line inline-block max-w-full rounded-sm border px-3 py-2 font-mono text-[clamp(0.8rem,2.6vw,1.15rem)] tracking-[-0.01em] break-all">
              ~/.claude/projects/
              <wbr />
              {'<slug>/'}
              <wbr />
              gaia/
              <wbr />
              profile.md
            </code>
          </div>
          <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
            Plain text. In your home directory, never in your repo.{' '}
            <span className="text-ink">Read it. Edit it. Delete it.</span>
          </p>
        </div>

        <div
          className="border-line-soft mt-12 grid gap-3 border-t pt-8 sm:grid-cols-[10rem_1fr] sm:gap-10"
          data-reveal={true}
        >
          <div className="text-muted font-mono text-[0.65rem] tracking-[0.22em] uppercase">
            Transparency
          </div>
          <p className="text-ink-dim text-[0.95rem] leading-[1.65]">
            One exception worth naming. When you amend a spec, GAIA asks why,
            and your typed reason is recorded locally. If your reason includes
            project detail, it lives in that file. It still never leaves your
            machine.
          </p>
        </div>
      </div>
    </section>

    {/* Controls */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div
          className="text-muted mb-10 font-mono text-[0.7rem] tracking-[0.22em] uppercase"
          data-reveal={true}
        >
          Controls
        </div>
        <p
          className="text-ink-dim mb-8 text-[1.0625rem] leading-[1.7]"
          data-reveal={true}
        >
          Mentorship is off by default. You can enable it during GAIA&rsquo;s
          initial setup, or any time afterward.
        </p>
        <div data-reveal={true}>
          <CodeBlock language="bash" title="terminal">
            {`gaia mentorship enable
gaia mentorship disable  # stop, keep data
gaia mentorship status
gaia mentorship purge    # delete all data`}
          </CodeBlock>
        </div>
        <p
          className="text-ink-dim mt-12 mb-8 text-[1.0625rem] leading-[1.7]"
          data-reveal={true}
        >
          Analytics is bundled with the mentorship opt-in. It rolls up daily
          aggregates from the same events, on disk, never sent. You can disable
          it separately while keeping mentorship on, or print the latest report.
        </p>
        <div data-reveal={true}>
          <CodeBlock language="bash" title="terminal">
            {`gaia mentorship analytics enable
gaia mentorship analytics disable
gaia mentorship analytics dry-run`}
          </CodeBlock>
        </div>
      </div>
    </section>

    {/* Closing */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div
          className="text-accent-soft mb-10 font-mono text-[0.7rem] tracking-[0.22em] uppercase"
          data-reveal={true}
        >
          Why I shipped it
        </div>
        <div className="flex flex-col gap-6">
          <p
            className="text-ink-dim text-[1.0625rem] leading-[1.75]"
            data-reveal={true}
          >
            I built it for myself. It ships with GAIA so you can use it too.
          </p>
          <p
            className="font-display text-ink text-[1.3rem] leading-normal font-light tracking-[-0.01em]"
            data-reveal={true}
            style={{'--reveal-delay': '120ms'} as React.CSSProperties}
          >
            The discipline that makes the AI trustworthy also makes the engineer
            better. The coach is how I keep that loop honest.
          </p>
        </div>
        <div
          className="border-line-soft mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t pt-8"
          data-reveal={true}
          style={{'--reveal-delay': '260ms'} as React.CSSProperties}
        >
          <a
            className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Try GAIA →
          </a>
          <a
            className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
            href="/about/"
          >
            About →
          </a>
        </div>
      </div>
    </section>
  </>
);

export default Mentorship;

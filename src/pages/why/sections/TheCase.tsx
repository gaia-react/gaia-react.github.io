import type {ReactNode} from 'react';
import {Section} from '@/components/Section';

type Item = {
  desc: ReactNode;
  name: string;
};

const FAILURES: Item[] = [
  {
    desc: 'Claude trained on every codebase on the internet. The good ones, the bad ones, and a much larger set of mediocre ones. Without enforced conventions, the output settles around that average. Internet average is not a codebase you ship.',
    name: 'Regression to the mean',
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
        <code className="bg-surface rounded-sm px-1.5 text-[0.875em]">any</code>
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
    name: 'Reviews that catch what you would miss',
  },
  {
    desc: 'GAIA CI keeps deps current, security patched, branches clean, and the wiki in sync. Patch and minor bumps auto-merge on green. Major changes hold for human review.',
    name: 'Maintenance that runs itself',
  },
  {
    desc: 'Write-time conventions, commit-time gates, and merge-time audits add up to a floor for output quality. Not “fully autonomous.” Trustworthy enough that the engineer directs and the AI implements.',
    name: 'AI you can trust to own the work',
  },
];

const BOUNDARIES: Item[] = [
  {
    desc: 'The goal is not to help humans write code faster. It is to make AI trustworthy enough to write production code while the engineer directs.',
    name: 'Not a copilot',
  },
  {
    desc: 'Multiple checkpoints between Claude and main require human approval. The AI does the work. You decide what the work is.',
    name: 'Not “fully autonomous”',
  },
  {
    desc: 'A CLAUDE.md is text the model can ignore. GAIA is the project itself. Hooks intercept. Rules load by file pattern. Agents audit. Commands orchestrate. Discipline you cannot opt out of.',
    name: 'Not just a CLAUDE.md',
  },
  {
    desc: 'A starter kit hands you boilerplate and walks away. GAIA never walks away. Every tool call hits a hook. Every commit hits a gate. Every merge hits an audit. The project gets stricter the deeper you work in it.',
    name: 'Not another starter kit',
  },
];

type ListProperties = {
  bulletColor: string;
  items: Item[];
};

const ItemList = ({bulletColor, items}: ListProperties) => (
  <ul className="space-y-3">
    {items.map(({desc, name}) => (
      <li key={name} className="flex gap-3">
        <span className={`mt-0.5 shrink-0 ${bulletColor}`}>&bull;</span>
        <span className="text-ink-dim">
          <strong className="text-ink">{name}.</strong> {desc}
        </span>
      </li>
    ))}
  </ul>
);

const TheCase = () => (
  <>
    {/* Hero */}
    <section className="pt-20 pb-6">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Why GAIA
          </span>
        </div>
        <h1 className="font-display text-ink mb-8 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-light tracking-[-0.03em]">
          The Case
        </h1>
        <div className="text-ink-dim space-y-5 text-[clamp(1.05rem,1.6vw,1.25rem)] leading-[1.65]">
          <p>
            The skepticism about AI-built code is fair. Vibe coding ships fast
            and breaks under load. Tests get skipped. Conventions drift.
          </p>
          <p>
            The bottleneck was never raw capability. It is the absence of
            structure around the AI.
          </p>
          <p className="text-ink">
            GAIA puts the structure in the project itself, so the AI can be
            trusted with the work.
          </p>
        </div>
      </div>
    </section>

    {/* Diagnosis */}
    <Section
      id="diagnosis"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="What is actually breaking"
    >
      <div className="text-ink space-y-6">
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          If you have used Claude on a real project, you have watched it happen.
          Working code rewritten. APIs hallucinated. Tests never written. The
          failures are not random. They have shapes.
        </p>
        <ItemList bulletColor="text-warn" items={FAILURES} />
      </div>
    </Section>

    {/* The shift */}
    <Section
      id="shift"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="What vibe coding is missing"
    >
      <div className="text-ink-dim space-y-5 text-[1.0625rem] leading-[1.7]">
        <p>
          AI has the capacity to be far more disciplined than any human at
          writing code. It does not complain about linting. It does not get
          burned out. It does not ask for exceptions on a tight deadline. The
          strictness a human team might push back on, AI just follows.
        </p>
        <p>
          AI does not bring that discipline on its own. The default is the
          opposite. Trained on the aggregate of every codebase on the internet,
          the model mirrors the average. The average is not disciplined. Without
          structure around it, AI averages every shortcut its training data has
          ever taken. Every bad coding habit.
        </p>
        <p>
          GAIA provides structure. Hooks intercept every tool call. Rules and
          Skills guide every line of code written. Quality gates fire on every
          commit. Audits run on every merge. Discipline is structural, not
          personal.
        </p>
        <p className="text-ink">
          GAIA does not make AI “smarter.” GAIA makes AI{' '}
          <em className="text-accent">disciplined</em>. That is what “vibe
          coding” is missing.
        </p>
      </div>
    </Section>

    {/* What this gets you */}
    <Section
      id="changes"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="What this gets you"
    >
      <div className="text-ink space-y-6">
        <ItemList bulletColor="text-accent" items={OUTCOMES} />
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
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
    </Section>

    {/* What GAIA is not */}
    <Section
      id="boundaries"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="What GAIA is not"
    >
      <ItemList bulletColor="text-muted" items={BOUNDARIES} />
    </Section>

    {/* CTA */}
    <section className="px-4 py-20 text-center sm:px-8 sm:py-24" id="cta">
      <div className="mx-auto max-w-2xl" data-reveal={true}>
        <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          Open source. MIT.
        </span>
        <h2 className="text-ink mt-4 mb-5 text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em]">
          Discipline you can install.
        </h2>
        <p className="text-ink-dim mb-8 text-[1.0625rem] leading-[1.7]">
          Fully documented. Setup in minutes. No new subscriptions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Get Started →
          </a>
          <a
            className="text-ink-dim hover:text-accent inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
            href="/features/"
          >
            See the Features →
          </a>
        </div>
      </div>
    </section>
  </>
);

export default TheCase;

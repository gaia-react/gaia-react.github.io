import type React from 'react';
import {useEffect} from 'react';
import {getCalApi} from '@calcom/embed-react';
import {twJoin} from 'tailwind-merge';

const CAL_USERNAME = 'stevensacks';
const CAL_NAMESPACE = 'consulting';

type SkuData = {
  anchor: string;
  cadence: string;
  calEvent: string;
  deliverables: string[];
  pitch: string;
  price: string;
  stage: string;
  tagline: string;
  tiers?: SkuTier[];
  title: string;
};

type SkuTier = {description: string; price: string};

const SKUS: SkuData[] = [
  {
    anchor: 'audit',
    cadence: '1 week · 100% async',
    calEvent: 'audit-intro',
    deliverables: [
      'Deep review of one repo against GAIA conventions. Lint posture, agentic-pattern gaps, AI-debt signals from recent PRs, existing CLAUDE.md and rules where present.',
      'A 15 to 25 page written report: what’s working, what’s costing you, and the prioritized migration roadmap.',
      'The migration roadmap is the core deliverable: an ordered list of refactors with effort and blast-radius estimates. The backlog your Migration Sprints burn down. Yours to keep regardless of next steps.',
      '20-minute recorded walkthrough video.',
      'Optional 30-minute Q&A call within 2 weeks.',
    ],
    pitch:
      'A read-only review of your existing codebase. No GAIA required. Delivers a written report and a prioritized migration roadmap you can act on immediately, with or without continuing.',
    price: '$5,000',
    stage: 'Diagnose',
    tagline: 'Your migration roadmap, before you commit to anything else',
    title: 'Audit',
  },
  {
    anchor: 'migration',
    cadence: '2-week sprints · buy as many as the roadmap needs · async-first',
    calEvent: 'migrate-intro',
    deliverables: [
      'Per sprint: hands-on refactor of the top roadmap items that fit the budget. Pattern consolidation, AI-debt cleanup, type tightening.',
      'GAIA installed or extended on the code the sprint touches. Rules, hooks, skills, wiki templates.',
      'Commit-by-commit migration log. Every change visible and reviewable.',
      'Short "what changed / what to watch" note after each sprint.',
      'Cumulative remediation report that grows across sprints. The full before/after catalog.',
      '30 days of post-delivery email support per sprint.',
      'Optional 30-minute handoff call within 2 weeks of sprint delivery.',
    ],
    pitch:
      'Hands-on refactor of your codebase, chunked into 2-week sprints. Commit one sprint at a time. Most migrations run 2 to 4. Each sprint delivers visible, reviewable results before you decide whether to continue.',
    price: '$18,000/sprint',
    stage: 'Remediate',
    tagline: 'AI sprawl cleaned up, sprint by sprint',
    title: 'Migration',
  },
  {
    anchor: 'foundation',
    cadence: '2 weeks · 2 to 3 live sessions',
    calEvent: 'foundation-intro',
    deliverables: [
      'GAIA installed and customized for your repo. Rules, hooks, skills, wiki templates matched to your stack.',
      'Integration with your existing tooling (Sentry, Linear, etc.).',
      'Two to three live sessions. Kickoff, mid-foundation demo, handoff training. All recorded.',
      'Written runbook customized to you.',
      '30 days of post-delivery email support.',
    ],
    pitch:
      'Full GAIA setup, done with you. The greenfield path for teams starting a new Claude-native project the right way.',
    price: '$25,000',
    stage: 'Greenfield',
    tagline: 'Full GAIA setup, done with you',
    title: 'Foundation',
  },
  {
    anchor: 'retainer',
    cadence: 'Ongoing · async-first',
    calEvent: 'retainer-intro',
    deliverables: [
      'Async review of critical PRs (5 to 10 per month).',
      'Weekly 30-minute office hour, live.',
      'Slack or Discord access with 24-hour response time.',
      'Quarterly written health-check summary.',
      'First-look access to GAIA roadmap features.',
      '10% discount on additional Migration Sprints or a Foundation engagement.',
    ],
    pitch:
      'Ongoing oversight after the cleanup or the setup. The discipline keeps holding because someone outside the team is watching.',
    price: 'From $5,000/mo',
    stage: 'Sustain',
    tagline: 'Ongoing oversight as the codebase grows',
    tiers: [
      {description: '8 hours per month, basic PR review', price: '$5k/mo'},
      {
        description: '15 hours per month, full critical-path PR review',
        price: '$8k/mo',
      },
    ],
    title: 'Retainer',
  },
];

const CalButton = ({
  calLink,
  children,
  variant = 'ghost',
}: {
  calLink: string;
  children: React.ReactNode;
  variant?: 'ghost' | 'solid';
}) => (
  <button
    className={twJoin(
      'font-body inline-flex h-10 cursor-pointer items-center gap-2 rounded-md px-4 text-[0.875rem] font-medium tracking-[0.01em] whitespace-nowrap no-underline transition-colors duration-150',
      variant === 'solid' ?
        'bg-accent text-canvas hover:bg-accent-2 border-none'
      : 'border-line text-ink hover:border-accent hover:text-accent-soft border bg-transparent'
    )}
    data-cal-config='{"layout":"month_view"}'
    data-cal-link={`${CAL_USERNAME}/${calLink}`}
    data-cal-namespace={CAL_NAMESPACE}
    type="button"
  >
    {children}
  </button>
);

const SpectrumRail = () => (
  <ol
    className="relative m-0 grid list-none grid-cols-2 gap-y-10 p-0 md:grid-cols-4 md:gap-y-0"
    data-stagger=""
  >
    {SKUS.map((sku, index) => {
      const isLast = index === SKUS.length - 1;

      return (
        <li
          key={sku.anchor}
          className="border-line-soft relative flex flex-col items-start border-t pt-6 md:items-center md:pt-7 md:text-center"
        >
          <span
            aria-hidden={true}
            className={twJoin(
              'absolute top-[-5px] left-3 size-2.5 rounded-full md:left-1/2 md:-translate-x-1/2',
              isLast ? 'bg-secondary' : 'bg-accent'
            )}
          />
          <div
            className={twJoin(
              'font-mono text-[0.65rem] tracking-[0.2em] uppercase',
              isLast ? 'text-secondary-soft' : 'text-accent-soft'
            )}
          >
            {sku.stage}
          </div>
          <a
            className="text-ink font-display hover:text-accent-soft mt-1 text-[1.1rem] font-light tracking-[-0.01em] no-underline transition-colors duration-150"
            href={`#${sku.anchor}`}
          >
            {sku.title}
          </a>
          <div className="text-muted mt-1 font-mono text-[0.65rem] tracking-[0.14em]">
            {sku.price}
          </div>
        </li>
      );
    })}
  </ol>
);

const SkuHeader = ({sku}: {sku: SkuData}) => (
  <>
    <div className="text-accent-soft font-mono text-[0.7rem] tracking-[0.22em] uppercase">
      {sku.stage} · {sku.title}
    </div>
    <h2 className="font-display text-ink mt-3 text-[clamp(2rem,4vw,2.85rem)] leading-[1.05] font-light tracking-tight">
      {sku.tagline}
    </h2>
  </>
);

const PriceBlock = ({cadence, price}: {cadence: string; price: string}) => (
  <div>
    <div className="font-display text-ink text-[2rem] leading-[1.05] font-light tracking-[-0.02em]">
      {price}
    </div>
    <div className="text-muted mt-2 font-mono text-[0.7rem] tracking-[0.16em] uppercase">
      {cadence}
    </div>
  </div>
);

const DeliverablesList = ({items}: {items: string[]}) => (
  <ul className="m-0 mt-10 flex list-none flex-col gap-3 p-0">
    {items.map((item, index) => (
      <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-2 sm:gap-4">
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
);

const BlockFooter = ({
  cadence,
  calEvent,
  price,
}: {
  cadence: string;
  calEvent: string;
  price: string;
}) => (
  <div className="border-line-soft mt-12 flex flex-wrap items-end justify-between gap-6 border-t pt-8">
    <PriceBlock cadence={cadence} price={price} />
    <CalButton calLink={calEvent} variant="ghost">
      Book a free intro →
    </CalButton>
  </div>
);

const AuditBlock = ({sku}: {sku: SkuData}) => (
  <div className="grid gap-10 md:grid-cols-[1fr_18rem] md:gap-16">
    <div>
      <SkuHeader sku={sku} />
      <p className="text-ink-dim mt-6 max-w-prose text-[1.0625rem] leading-[1.7]">
        {sku.pitch}
      </p>
      <DeliverablesList items={sku.deliverables} />
    </div>
    <aside className="border-line-soft flex flex-col gap-5 self-start border-t pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
      <PriceBlock cadence={sku.cadence} price={sku.price} />
      <CalButton calLink={sku.calEvent} variant="solid">
        Book a free intro →
      </CalButton>
    </aside>
  </div>
);

const MigrateBlock = ({sku}: {sku: SkuData}) => (
  <div>
    <SkuHeader sku={sku} />
    <p className="text-ink-dim mt-6 max-w-prose text-[1.125rem] leading-[1.7]">
      {sku.pitch}
    </p>
    <div className="border-line-soft mt-10 grid gap-10 border-t pt-8 sm:grid-cols-2 sm:gap-12">
      <div>
        <div className="text-muted mb-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
          Before
        </div>
        <p className="text-ink-dim text-[0.95rem] leading-[1.65]">
          AI-generated patterns layered on top of legacy ones. Conventions
          drift. Tests skipped. Token costs ballooning. Nothing enforced at
          write-time.
        </p>
      </div>
      <div>
        <div className="text-secondary-soft mb-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
          After
        </div>
        <p className="text-ink-dim text-[0.95rem] leading-[1.65]">
          Patterns consolidated. Rules, hooks, and skills enforce them at the
          keystroke. PR reviews stop catching the same five things. The repo
          stops fighting itself.
        </p>
      </div>
    </div>
    <DeliverablesList items={sku.deliverables} />
    <BlockFooter
      cadence={sku.cadence}
      calEvent={sku.calEvent}
      price={sku.price}
    />
  </div>
);

const FOUNDATION_PHASES = [
  {
    detail:
      'Discovery and install. GAIA rules, hooks, skills, and wiki templates wired to your stack.',
    label: 'Week 1',
  },
  {
    detail:
      'Integration with your existing tooling. Mid-foundation demo and live working sessions.',
    label: 'Week 2',
  },
  {
    detail:
      'Recorded handoff training, customized runbook delivered, 30 days of email support starts.',
    label: 'Handoff',
  },
];

const FoundationBlock = ({sku}: {sku: SkuData}) => (
  <div>
    <SkuHeader sku={sku} />
    <p className="text-ink-dim mt-6 max-w-prose text-[1.0625rem] leading-[1.7]">
      {sku.pitch}
    </p>
    <ol className="m-0 mt-10 grid list-none gap-6 p-0 md:grid-cols-3 md:gap-10">
      {FOUNDATION_PHASES.map((phase) => (
        <li
          key={phase.label}
          className="border-line-soft relative border-t pt-5"
        >
          <span
            aria-hidden={true}
            className="bg-accent absolute top-[-3px] left-0 h-[5px] w-10"
          />
          <div className="text-accent-soft font-mono text-[0.65rem] tracking-[0.22em] uppercase">
            {phase.label}
          </div>
          <p className="text-ink-dim mt-3 text-[0.95rem] leading-[1.65]">
            {phase.detail}
          </p>
        </li>
      ))}
    </ol>
    <DeliverablesList items={sku.deliverables} />
    <BlockFooter
      cadence={sku.cadence}
      calEvent={sku.calEvent}
      price={sku.price}
    />
  </div>
);

const RetainerBlock = ({sku}: {sku: SkuData}) => (
  <div>
    <SkuHeader sku={sku} />
    <p className="text-ink-dim mt-6 max-w-prose text-[1.0625rem] leading-[1.7]">
      {sku.pitch}
    </p>
    <div className="border-line-soft mt-10 grid gap-px border-y bg-transparent sm:grid-cols-2">
      {sku.tiers?.map((tier, index) => (
        <div
          key={tier.price}
          className={twJoin(
            'flex flex-col gap-2 py-6 sm:py-8',
            index === 0 ? 'sm:pr-10' : (
              'sm:border-line-soft sm:border-l sm:pl-10'
            )
          )}
        >
          <div className="text-secondary-soft font-mono text-[0.65rem] tracking-[0.22em] uppercase">
            Tier {String.fromCodePoint(65 + index)}
          </div>
          <div className="font-display text-ink text-[1.75rem] leading-[1.1] font-light tracking-[-0.02em]">
            {tier.price}
          </div>
          <p className="text-ink-dim text-[0.95rem] leading-[1.65]">
            {tier.description}
          </p>
        </div>
      ))}
    </div>
    <DeliverablesList items={sku.deliverables} />
    <BlockFooter
      cadence={sku.cadence}
      calEvent={sku.calEvent}
      price={sku.price}
    />
  </div>
);

const SkuBlock = ({sku}: {sku: SkuData}) => {
  if (sku.anchor === 'audit') return <AuditBlock sku={sku} />;
  if (sku.anchor === 'migration') return <MigrateBlock sku={sku} />;
  if (sku.anchor === 'foundation') return <FoundationBlock sku={sku} />;

  return <RetainerBlock sku={sku} />;
};

const Orbs = () => (
  <>
    <div
      aria-hidden={true}
      className="gaia-drift-orb-a pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,119,87,0.36) 0%, rgba(217,119,87,0.18) 32%, rgba(217,119,87,0.06) 60%, rgba(217,119,87,0) 78%)',
        height: 680,
        opacity: 0.85,
        right: -200,
        top: -200,
        width: 680,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-b pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(91,138,138,0.26) 0%, rgba(91,138,138,0.14) 36%, rgba(91,138,138,0) 76%)',
        bottom: -240,
        height: 540,
        left: -160,
        opacity: 0.75,
        width: 540,
      }}
    />
  </>
);

const Consulting = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({namespace: CAL_NAMESPACE});
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        theme: 'dark',
      });
    })();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip px-4 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
        <Orbs />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div
            className="text-accent-soft mb-7 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
            data-reveal={true}
          >
            <span aria-hidden={true} className="bg-accent-soft size-1.5" />
            Consulting
          </div>
          <h1 className="font-display text-ink max-w-[22ch] text-[clamp(2rem,5.8vw,4.75rem)] leading-[1.05] font-light tracking-[-0.03em]">
            GAIA is the workflow.
            <em className="text-accent-soft block font-light italic">
              The author is the shortcut.
            </em>
          </h1>
          <p
            className="text-ink-dim mt-6 max-w-prose text-[1.0625rem] leading-[1.7] sm:mt-8 sm:text-[1.125rem]"
            data-reveal={true}
            style={{'--reveal-delay': '160ms'} as React.CSSProperties}
          >
            Work with me to skip the trial and error.
          </p>
        </div>
      </section>

      {/* Engagement spectrum */}
      <section className="border-line-soft border-t px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <div
              className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase"
              data-reveal={true}
            >
              The engagement journey
            </div>
            <div
              className="text-muted hidden font-mono text-[0.7rem] tracking-[0.16em] uppercase md:block"
              data-reveal={true}
            >
              Brownfield → Sustain
            </div>
          </div>
          <SpectrumRail />
        </div>
      </section>

      {/* Engagement blocks */}
      <div className="px-4 sm:px-8">
        {SKUS.map((sku, index) => (
          <section
            key={sku.anchor}
            className={twJoin(
              'border-line-soft scroll-mt-20 border-t py-20 sm:py-28',
              index === SKUS.length - 1 && 'border-b'
            )}
            id={sku.anchor}
          >
            <div className="mx-auto max-w-5xl">
              <SkuBlock sku={sku} />
            </div>
          </section>
        ))}
      </div>

      {/* Custom + close */}
      <section className="px-4 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <p className="text-ink-dim mx-auto max-w-prose text-[1.0625rem] leading-[1.7]">
            Need something outside these engagements? Multi-month builds, custom
            integrations, or scope I{' '}haven’t named here. Engagements start
            at $5,000.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <a
              className="text-ink-dim hover:text-accent-soft font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
              href="mailto:steven@gaiareact.com"
            >
              Email me →
            </a>
            <a
              className="text-ink-dim hover:text-accent-soft font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
              href="https://www.linkedin.com/in/stevensacks/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consulting;

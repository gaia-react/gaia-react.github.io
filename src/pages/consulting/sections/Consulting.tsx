import type React from 'react';
import {useEffect} from 'react';
import {twJoin} from 'tailwind-merge';

const CAL_USERNAME = 'stevensacks';
const CAL_NAMESPACE = 'consulting';
const CAL_LAYOUT = 'month_view';
const CAL_BASE_URL = `https://cal.com/${CAL_USERNAME}`;

// Cal's getCalApi injects <script src="app.cal.com/embed/embed.js"> the moment
// it runs. The Consulting effect guards on __PRERENDER__ so the script never
// lands in the static HTML; on the real client it pre-warms the API so the
// first click opens the modal instantly. If embed.js is blocked (CSP, network,
// extensions), fall back to opening the hosted booking page in a new tab so
// the CTA still leads somewhere useful.
const initCal = async () => {
  const {getCalApi} = await import('@calcom/embed-react');
  const cal = await getCalApi({namespace: CAL_NAMESPACE});
  cal('ui', {
    hideEventTypeDetails: false,
    layout: CAL_LAYOUT,
    theme: 'dark',
  });

  return cal;
};

const openCalModal = async (calLink: string) => {
  const fallbackHref = `${CAL_BASE_URL}/${calLink}?layout=${CAL_LAYOUT}`;

  try {
    const cal = await initCal();
    cal('modal', {
      calLink: `${CAL_USERNAME}/${calLink}`,
      config: {layout: CAL_LAYOUT},
    });
  } catch {
    window.open(fallbackHref, '_blank', 'noopener,noreferrer');

    return;
  }
  setTimeout(() => {
    const cal = (window as unknown as {Cal?: {version?: string}}).Cal;

    if (!cal?.version) {
      window.open(fallbackHref, '_blank', 'noopener,noreferrer');
    }
  }, 2500);
};

type FeaturedTestimonialItem = {
  attribution: string;
  name: string;
  paragraphs: string[];
};

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

type TestimonialItem = {
  attribution: string;
  name: string;
  quote: string;
};

type WorkItem = {
  company: string;
  note: string;
  period: string;
  role: string;
};

const GitHubIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="14"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="14"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/stevensacks/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {href: 'https://github.com/stevensacks', icon: GitHubIcon, label: 'GitHub'},
];

const SELECTED_WORK: WorkItem[] = [
  {
    company: 'Trek10',
    note: 'Led six engineers rebuilding a financial services platform. Modernized the codebase from React 15 to React 19.',
    period: '2024–2025',
    role: 'Principal Frontend Engineer',
  },
  {
    company: 'American Express',
    note: 'Built the internal dining concierge platform used by Amex teams worldwide. Led the mobile rebuild of Pocket Concierge for Japan.',
    period: '2020–2023',
    role: 'Lead React Engineer',
  },
  {
    company: 'PlayBrain',
    note: 'Architected a serverless multilingual publishing platform and a real-time esports tournament system. Hired and led the engineering team.',
    period: '2016–2017',
    role: 'Director of Engineering',
  },
  {
    company: 'Plug DJ',
    note: 'Social music platform. 6M registered users, 1M monthly actives. Raised $2.25M from Javelin Venture Partners. Acquired.',
    period: '2012–2015',
    role: 'Founder',
  },
];

const TESTIMONIALS: TestimonialItem[] = [
  {
    attribution: 'Principal Engineer, Streamie Security',
    name: 'Curtis Jones',
    quote:
      'Steven was hired to fix the fiasco which was the front-end of the project. The front-end was months behind schedule and hardly progressing at all. Steven quickly brought order to chaos, got the front-end moving again.',
  },
  {
    attribution: 'Security Consultant, Deja vu Security',
    name: 'Rhett Brown',
    quote:
      'Steven brings a level of rigor to development that is very rare. He approaches his work almost philosophically, working hard to incorporate best practices and logical structure.',
  },
  {
    attribution: 'COO, Allman Consulting and Training',
    name: 'Todd Thurston',
    quote:
      'He does what he says he will do with high integrity. He has always delivered for me, and that is appreciated when working with deadlines. He is innovative and can help work out a solution when you hit the wall.',
  },
];

const FEATURED_TESTIMONIAL: FeaturedTestimonialItem = {
  attribution: 'Director of Delivery, Trek10',
  name: 'Dave Russo',
  paragraphs: [
    'I had the privilege of managing Steven Sacks, and I can say without hesitation that he is one of the strongest engineering leaders I’ve worked with.',
    'When Steven took ownership of a codebase that had accumulated significant technical debt, he didn’t just stabilize it, he transformed it. He brought a clear-eyed assessment of what needed to change, built team alignment around a path forward, and executed with disciplined velocity. The result was a measurably healthier system and a team that moved faster and with more confidence.',
    'What sets Steven apart is the combination of high standards and high throughput. He holds the bar on code quality without letting it become a bottleneck. He leads engineers by example by writing clean, maintainable code himself while creating a culture where the team does the same.',
    'Any organization looking for an engineering leader who can both raise the bar and ship would be lucky to have Steven.',
  ],
};

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
      "A read-only review of your existing codebase (whether it's GAIA or not). Delivers a written report and a prioritized migration roadmap you can act on immediately, with or without continuing.",
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
      'Ongoing oversight after the cleanup or the setup. GAIA’s gates enforce the rules without anyone watching. The retainer is for the judgment they can’t automate, the edge cases and the roadmap calls.',
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
    onClick={async () => {
      await openCalModal(calLink);
    }}
    type="button"
  >
    {children}
  </button>
);

const SpectrumRail = () => (
  <ol className="relative m-0 grid list-none grid-cols-2 gap-y-10 p-0 md:grid-cols-4 md:gap-y-0">
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
              'absolute -top-1.25 left-3 size-2.5 rounded-full md:left-1/2 md:-translate-x-1/2',
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
      {`${sku.stage} · ${sku.title}`}
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
            className="bg-accent absolute -top-0.75 left-0 h-1.25 w-10"
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
            {`Tier ${String.fromCodePoint(65 + index)}`}
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

const TestimonialCard = ({item}: {item: TestimonialItem}) => (
  <li className="border-line-soft relative flex flex-col gap-6 border-t pt-6">
    <span
      aria-hidden={true}
      className="bg-accent absolute -top-0.75 left-0 h-1.25 w-10"
    />
    <blockquote className="text-ink-dim m-0 text-[1.0625rem] leading-[1.65] font-light text-pretty italic">
      {item.quote}
    </blockquote>
    <div className="mt-auto">
      <div className="font-display text-ink text-base/tight font-normal tracking-[-0.01em]">
        {item.name}
      </div>
      <div className="text-muted mt-2 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
        {item.attribution}
      </div>
    </div>
  </li>
);

const FeaturedTestimonialCard = ({item}: {item: FeaturedTestimonialItem}) => (
  <figure className="border-line-soft relative mb-10 grid gap-8 border-t pt-8 md:mb-12 md:grid-cols-[16rem_1fr] md:gap-16">
    <span
      aria-hidden={true}
      className="bg-accent absolute -top-0.75 left-0 h-1.25 w-16"
    />
    <figcaption className="flex flex-col gap-2 md:pt-1">
      <div className="font-display text-ink text-xl/tight font-normal tracking-[-0.01em]">
        {item.name}
      </div>
      <div className="text-muted font-mono text-[0.65rem] tracking-[0.18em] uppercase">
        {item.attribution}
      </div>
    </figcaption>
    <blockquote className="text-ink-dim m-0 flex flex-col gap-4 text-[1.125rem] leading-[1.7] font-light text-pretty italic">
      {item.paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="m-0">
          {paragraph}
        </p>
      ))}
    </blockquote>
  </figure>
);

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
    if ('__PRERENDER__' in window) return;

    (async () => {
      await initCal();
    })();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip px-4 pt-14 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
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
          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            data-reveal={true}
            style={{'--reveal-delay': '240ms'} as React.CSSProperties}
          >
            <div className="flex items-center gap-5">
              <img
                alt="Portrait of Steven Sacks"
                className="border-line size-16 shrink-0 rounded-full border object-cover"
                decoding="async"
                fetchPriority="high"
                height={64}
                loading="eager"
                src="/steven.webp"
                width={64}
              />
              <div>
                <div className="text-accent-soft font-mono text-[0.7rem] tracking-[0.2em] uppercase">
                  Author of GAIA
                </div>
                <p className="text-ink max-w-148 text-[1.0625rem] leading-tight">
                  Steven Sacks
                </p>
              </div>
            </div>
            <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-3 p-0">
              {SOCIAL_LINKS.map((link) => {
                const external = link.href.startsWith('http');

                return (
                  <li key={link.href}>
                    <a
                      className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase no-underline transition-colors duration-150"
                      href={link.href}
                      rel={external ? 'noopener noreferrer' : undefined}
                      target={external ? '_blank' : undefined}
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="border-line-soft border-t px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <div
              className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase"
              data-reveal={true}
            >
              Track record
            </div>
            <div
              className="text-muted hidden font-mono text-[0.7rem] tracking-[0.16em] uppercase md:block"
              data-reveal={true}
            >
              Thirty years shipping real systems
            </div>
          </div>

          <div
            className="border-line-soft mb-14 grid items-end gap-10 border-b pb-12 md:grid-cols-[auto_1fr] md:gap-16"
            data-reveal={true}
          >
            <div>
              <div className="font-display text-ink text-[clamp(3.25rem,8vw,5.75rem)] leading-none font-light tracking-[-0.04em]">
                100,000
                <span className="text-accent-soft italic">+</span>
              </div>
              <div className="text-muted mt-4 font-mono text-[0.7rem] tracking-[0.22em] uppercase">
                Sites shipped on GAIA Flash
              </div>
            </div>
            <p className="text-ink-dim max-w-prose text-[1.0625rem] leading-[1.7]">
              GAIA Flash codified the discipline Flash teams lacked. GAIA does
              the same for Claude-native development.
            </p>
          </div>

          <ul
            className="m-0 grid list-none gap-10 p-0 md:grid-cols-2 md:gap-12"
            data-stagger=""
            style={{'--stagger-delay': '140ms'} as React.CSSProperties}
          >
            {SELECTED_WORK.map((item) => (
              <li key={item.company}>
                <div className="text-muted font-mono text-[0.65rem] tracking-[0.18em]">
                  {item.period}
                </div>
                <h3 className="font-display text-ink mt-2 text-[1.2rem] leading-tight font-normal tracking-[-0.01em]">
                  {`${item.role}, `}
                  <span className="text-accent">{item.company}</span>
                </h3>
                <p className="text-ink-dim mt-3 text-[0.95rem] leading-[1.65]">
                  {item.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Engagement spectrum */}
      <section className="border-line-soft border-t px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <div className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase">
              The engagement journey
            </div>
            <div className="text-muted hidden font-mono text-[0.7rem] tracking-[0.16em] uppercase md:block">
              Brownfield → Sustain
            </div>
          </div>
          <SpectrumRail />
        </div>
      </section>

      {/* Engagement blocks */}
      <div className="px-4 sm:px-8">
        {SKUS.map((sku) => (
          <section
            key={sku.anchor}
            className="border-line-soft scroll-mt-20 border-t py-20 sm:py-28"
            id={sku.anchor}
          >
            <div className="mx-auto max-w-5xl">
              <SkuBlock sku={sku} />
            </div>
          </section>
        ))}
      </div>

      {/* References */}
      <section className="border-line-soft border-y px-4 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <div className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase">
              References
            </div>
            <div className="text-muted hidden font-mono text-[0.7rem] tracking-[0.16em] uppercase md:block">
              From clients and colleagues
            </div>
          </div>
          <FeaturedTestimonialCard item={FEATURED_TESTIMONIAL} />
          <ul className="m-0 grid list-none gap-10 p-0 md:grid-cols-3 md:gap-10">
            {TESTIMONIALS.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </section>

      {/* Custom + close */}
      <section className="px-4 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 text-center">
          <p className="text-ink-dim mx-auto max-w-prose text-[1.0625rem] leading-[1.7]">
            {
              'Need something outside these engagements? Multi-month builds, custom integrations, or scope I\u00A0haven\u2019t named here. Engagements start at $5,000.'
            }
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

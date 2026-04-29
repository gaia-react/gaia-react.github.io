import type React from 'react';
import {useEffect} from 'react';
import {getCalApi} from '@calcom/embed-react';
import {Section} from '../components/Section';

const CAL_USERNAME = 'stevensacks';
const CAL_NAMESPACE = 'consulting';

type SkuData = {
  calEvent: string;
  deliverables: string[];
  icon: React.ReactNode;
  price: string;
  priceDetail: string;
  tagline: string;
  tiers?: SkuTier[];
  title: string;
};

type SkuTier = {description: string; price: string};

const iconBaseProperties = {
  'aria-hidden': true,
  className: 'block mb-[0.875rem]',
  fill: 'none',
  height: 36,
  stroke: 'var(--color-fg-dim)',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 1.5,
  viewBox: '0 0 24 24',
  width: 36,
};

const AuditIcon = (
  <svg {...iconBaseProperties}>
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <path d="M13.3 16.3 15 18" />
  </svg>
);

const MigrateIcon = (
  <svg {...iconBaseProperties}>
    <path d="m16 3 4 4-4 4" />
    <path d="M20 7H4" />
    <path d="m8 21-4-4 4-4" />
    <path d="M4 17h16" />
  </svg>
);

const FoundationIcon = (
  <svg {...iconBaseProperties}>
    <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
    <rect height="8" rx="1" width="8" x="14" y="2" />
  </svg>
);

const RetainerIcon = (
  <svg {...iconBaseProperties}>
    <path d="M16 14v2.2l1.6 1" />
    <path d="M16 2v4" />
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
    <path d="M3 10h5" />
    <path d="M8 2v4" />
    <circle cx="16" cy="16" r="6" />
  </svg>
);

const SKUS: SkuData[] = [
  {
    calEvent: 'audit-intro',
    deliverables: [
      'Deep review of one repo: CLAUDE.md, rules, hooks, prompt patterns, last 50 PRs',
      '15–25 page written report: what’s working, what’s costing you, top 5 fixes ranked by ROI',
      '20-minute recorded walkthrough video',
      'Optional 30-minute Q&A call within 2 weeks',
    ],
    icon: AuditIcon,
    price: '$5,000',
    priceDetail: '1 week · 100% async',
    tagline: 'An outside opinion on your Claude workflow',
    title: 'Audit',
  },
  {
    calEvent: 'foundation-intro',
    deliverables: [
      'GAIA installed and customized for your repo: rules, hooks, skills, wiki templates matched to your stack',
      'Integration with your existing tooling (Sentry, Linear, etc.)',
      '2–3 live sessions: kickoff, mid-foundation demo, handoff training (all recorded)',
      'Written runbook customized to you',
      '30 days of post-delivery email support',
    ],
    icon: FoundationIcon,
    price: '$25,000',
    priceDetail: '2 weeks · 2–3 live sessions',
    tagline: 'Full GAIA setup for you',
    title: 'Foundation',
  },
  {
    calEvent: 'migrate-intro',
    deliverables: [
      'Hands-on refactor of one repo: pattern consolidation, AI-debt cleanup, type tightening',
      'GAIA installed on the refactored codebase: rules, hooks, skills, wiki templates',
      'Commit-by-commit migration log so you can review the cleanup',
      'Written remediation report: what was changed, why, and what to watch for',
      'Optional 30-minute handoff call within 2 weeks of delivery',
    ],
    icon: MigrateIcon,
    price: 'From $35,000',
    priceDetail: '3–4 weeks · async-first · scope-variable',
    tagline: 'Take one messy repo from AI sprawl to GAIA-ready',
    title: 'Migrate',
  },
  {
    calEvent: 'retainer-intro',
    deliverables: [
      'Async review of critical PRs (5–10/month)',
      'Weekly 30-minute office hour (live)',
      'Slack/Discord access with 24-hour response time',
      'Quarterly written health-check summary',
      'First-look access to GAIA roadmap features',
      '10% discount on additional Foundation or Migration engagements',
    ],
    icon: RetainerIcon,
    price: 'From $5,000/mo',
    priceDetail: 'Ongoing · async-first',
    tagline: 'Ongoing oversight as your project grows',
    tiers: [
      {description: '8 hours, basic PR review', price: '$5k/mo'},
      {description: '15 hours, full critical-path PR review', price: '$8k/mo'},
    ],
    title: 'Retainer',
  },
];

const CtaButton = ({
  calLink,
  children,
  href,
  isFullWidth,
}: {
  calLink?: string;
  children: React.ReactNode;
  href?: string;
  isFullWidth?: boolean;
}) => {
  const baseClass = `${isFullWidth ? 'flex w-full justify-center' : 'inline-flex'} items-center bg-accent text-bg no-underline font-body text-[0.9375rem] font-medium py-[0.6875rem] px-5 rounded-lg transition-colors duration-150 tracking-[0.01em] whitespace-nowrap hover:bg-accent-2`;

  if (calLink) {
    return (
      <button
        className={`${baseClass} cursor-pointer border-none`}
        data-cal-config='{"layout":"month_view"}'
        data-cal-link={`${CAL_USERNAME}/${calLink}`}
        data-cal-namespace={CAL_NAMESPACE}
        type="button"
      >
        {children}
      </button>
    );
  }

  return (
    <a className={baseClass} href={href}>
      {children}
    </a>
  );
};

const SkuCard = ({sku}: {sku: SkuData}) => (
  <div className="bg-bg-elev border-border flex flex-col gap-5 rounded-xl border p-7">
    {/* Title + tagline */}
    <div>
      {sku.icon}
      <h2 className="font-display text-fg mb-1.5 text-[1.75rem] leading-[1.15] font-light tracking-[-0.02em]">
        {sku.title}
      </h2>
      <p className="text-fg-dim min-h-[calc(0.875rem*1.5*2)] text-sm/normal">
        {sku.tagline}
      </p>
    </div>

    {/* Price */}
    <div>
      <p className="font-display text-fg mb-1 text-[2rem] leading-[1.1] font-light tracking-[-0.02em]">
        {sku.price}
      </p>
      <p className="font-body text-fg-mute text-[0.8125rem]">
        {sku.priceDetail}
      </p>
    </div>

    {/* CTA above the feature list */}
    <CtaButton calLink={sku.calEvent} isFullWidth={true}>
      Book free intro call →
    </CtaButton>

    {/* Divider */}
    <div aria-hidden="true" className="border-border border-t" />

    {/* Feature list */}
    <ul className="m-0 flex flex-1 list-none flex-col gap-2.5 p-0">
      {sku.deliverables.map((item) => (
        <li
          key={item}
          className="text-fg-dim flex gap-2.5 text-sm leading-[1.55]"
        >
          <span
            aria-hidden="true"
            className="text-accent mt-[0.15rem] shrink-0 text-xs font-semibold"
          >
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>

    {/* Retainer tiers */}
    {sku.tiers && (
      <div className="border-border border-t pt-4">
        <p className="text-fg-mute mb-2 text-xs font-medium tracking-[0.08em] uppercase">
          Two tiers
        </p>
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {sku.tiers.map((tier) => (
            <li key={tier.price} className="text-fg-dim text-[0.8125rem]">
              <strong className="text-fg">{tier.price}:</strong>{' '}
              {tier.description}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
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
      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h1 className="font-display text-fg mb-6 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-light tracking-[-0.03em]">
            Work with the creator of GAIA
          </h1>
          <p className="text-fg-dim mx-auto max-w-152 text-[clamp(1rem,2vw,1.1875rem)] leading-[1.65]">
            I built the GAIA Flash Framework in the 2000s, which was used to
            build 100k+ sites and by every major digital agency worldwide. GAIA
            React carries the same automation philosophy into the AI-native era.
            <br />
            <br />
            Now, I help teams and individuals adopt it.
          </p>
        </div>
      </section>

      {/* Skip to pricing. Doubles as visual break between hero and pitch */}
      <div className="px-8 text-center">
        <CtaButton href="#pricing">See engagement options ↓</CtaButton>
      </div>

      {/* Lead-in */}
      <Section id="intro">
        <div className="flex flex-col gap-5">
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Your team started using Claude Code. Now everyone’s doing it
            differently: inconsistent patterns, ballooning token costs, and
            AI-generated problems that shouldn’t exist, caught in code review,
            or worse, production.
          </p>
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Without guardrails, this compounds into technical debt and bugs that
            ship. I help teams and individuals fix the workflow before it gets
            there.
          </p>
        </div>
      </Section>

      {/* SKU cards */}
      <section className="scroll-mt-20 pt-4 pb-16" id="pricing">
        <div className="mx-auto max-w-6xl px-8">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            {SKUS.map((sku) => (
              <SkuCard key={sku.title} sku={sku} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom inquiries */}
      <section className="scroll-mt-20 pb-20" id="custom">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Need something outside these engagements? Multi-month builds, custom
            integrations, or scope I haven’t named here.{' '}
            <a
              className="text-accent hover:text-accent-2 decoration-accent/40 hover:decoration-accent-2 underline underline-offset-4 transition-colors duration-150"
              href="mailto:steven@gaiareact.com"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
};

export default Consulting;

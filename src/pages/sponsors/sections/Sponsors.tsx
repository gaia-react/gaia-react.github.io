import type React from 'react';

type OneTimeTier = {
  amount: number;
  name: string;
};

type Tier = {
  amount: number;
  benefitGlyph: '+' | '─';
  benefits: string[];
  description: string;
  name: string;
};

const CURRENT_MRR = 0;
const GOAL_MRR = 2000;

const RECURRING_TIERS: Tier[] = [
  {
    amount: 5,
    benefitGlyph: '─',
    benefits: [
      'Name in SUPPORTERS.md',
      'Mention in release notes',
      '24h early peek at release notes',
    ],
    description: 'Individual developers using GAIA.',
    name: 'Personal Supporter',
  },
  {
    amount: 25,
    benefitGlyph: '+',
    benefits: [
      'Team name on this page',
      'Vote on roadmap RFCs',
      'Priority issue triage',
    ],
    description: 'Small engineering teams using GAIA.',
    name: 'Team Supporter',
  },
  {
    amount: 100,
    benefitGlyph: '+',
    benefits: [
      'Logo on this page',
      'Logo in the repo README',
      '“Powering” credit on relevant pages',
      'Direct email priority',
    ],
    description: 'Companies shipping on GAIA.',
    name: 'Company Sponsor',
  },
];

const ONE_TIME_TIERS: OneTimeTier[] = [
  {amount: 25, name: 'Small thanks'},
  {amount: 100, name: 'Big thanks'},
];

const SHOW_CURRENT_SPONSORS = false;

const recurringUrl = (amount: number) =>
  `https://github.com/sponsors/gaia-react?frequency=recurring&amount=${amount}`;

const oneTimeUrl = (amount: number) =>
  `https://github.com/sponsors/gaia-react?frequency=one-time&amount=${amount}`;

const progressPct = Math.min(100, (CURRENT_MRR / GOAL_MRR) * 100);

const TierRow = ({tier}: {tier: Tier}) => (
  <div className="border-line-soft hover:bg-tint/40 group grid gap-x-10 gap-y-4 border-b px-2 py-9 transition-colors duration-150 last:border-b-0 md:grid-cols-[7rem_minmax(0,1fr)_auto] md:items-start">
    <div className="flex items-baseline gap-2 md:flex-col md:items-start md:gap-1">
      <span className="text-ink text-[clamp(1.9rem,3.4vw,2.6rem)] leading-none font-light tracking-tight">
        ${tier.amount}
      </span>
      <span className="text-muted font-mono text-[0.68rem] tracking-[0.18em] uppercase">
        / month
      </span>
    </div>
    <div className="min-w-0">
      <h3 className="text-ink mb-1.5 text-[1.2rem] font-normal tracking-[-0.005em]">
        {tier.name}
      </h3>
      <p className="text-ink-dim mb-5 max-w-[44ch] text-[0.96rem] leading-[1.55]">
        {tier.description}
      </p>
      <ul className="space-y-2">
        {tier.benefits.map((benefit) => (
          <li
            key={benefit}
            className="text-ink-dim flex items-baseline gap-3 text-[0.9rem] leading-[1.55]"
          >
            <span
              aria-hidden={true}
              className="text-accent w-3 shrink-0 font-mono text-[0.95rem]"
            >
              {tier.benefitGlyph}
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:self-end md:pb-1">
      <a
        className="text-accent hover:text-accent-soft inline-flex items-center gap-1.5 text-[0.92rem] no-underline transition-colors duration-150"
        href={recurringUrl(tier.amount)}
        rel="noreferrer"
        target="_blank"
      >
        Sponsor at ${tier.amount} →
      </a>
    </div>
  </div>
);

const OneTimeRow = ({tier}: {tier: OneTimeTier}) => (
  <a
    className="border-line-soft hover:bg-tint/40 group flex items-baseline justify-between gap-6 border-b px-2 py-5 no-underline transition-colors duration-150 last:border-b-0"
    href={oneTimeUrl(tier.amount)}
    rel="noreferrer"
    target="_blank"
  >
    <div className="flex items-baseline gap-6">
      <span className="text-ink w-16 text-[1.35rem] font-light tracking-tight">
        ${tier.amount}
      </span>
      <span className="text-ink-dim group-hover:text-ink text-[0.98rem] transition-colors duration-150">
        {tier.name}
      </span>
    </div>
    <span className="text-accent text-[0.88rem]">one-time →</span>
  </a>
);

const SponsorButton = ({
  className,
  href,
}: {
  className?: string;
  href: string;
}) => (
  <a
    className={`bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150 ${className ?? ''}`}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    Sponsor GAIA →
  </a>
);

const Sponsors = () => (
  <>
    {/* Hero */}
    <section
      className="relative overflow-x-clip px-4 py-24 sm:px-8"
      id="sponsors-hero"
    >
      <div
        aria-hidden={true}
        className="gaia-drift-orb-a pointer-events-none absolute z-0 rounded-full"
        style={{
          background:
            'radial-gradient(circle at center, rgba(217,119,87,0.5) 0%, rgba(217,119,87,0.28) 30%, rgba(217,119,87,0.1) 58%, rgba(217,119,87,0) 78%)',
          height: 760,
          left: -220,
          opacity: 0.85,
          top: -260,
          width: 760,
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-270">
          <div
            className="mb-5 inline-flex items-center gap-2"
            data-reveal={true}
          >
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Open source funding
            </span>
          </div>

          <h1 className="text-ink mb-7 max-w-[22ch] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.05] tracking-tight">
            Free to use.
            <br />
            <span className="text-accent-soft font-light italic">
              Paid forward by sponsors.
            </span>
          </h1>

          <p
            className="text-ink-dim mb-9 max-w-[58ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.55]"
            data-reveal={true}
            style={{'--reveal-delay': '180ms'} as React.CSSProperties}
          >
            No VC money. No sponsorship theater. Every dollar goes to maintainer
            time. $2,000/mo funds one full day of GAIA work every week.
          </p>

          <div
            data-reveal={true}
            style={{'--reveal-delay': '280ms'} as React.CSSProperties}
          >
            <SponsorButton href="https://github.com/sponsors/gaia-react" />
          </div>
        </div>
      </div>
    </section>

    {/* Proof strip */}
    <section
      className="bg-tint border-line-soft relative overflow-hidden border-y px-4 py-12 sm:px-8"
      id="proof"
    >
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 120% at 50% 50%, rgba(217,119,87,0.14) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-3xl">
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <div className="flex items-baseline gap-3">
            <span className="text-ink text-[1.7rem] font-light tracking-tight">
              ${CURRENT_MRR.toLocaleString()}
            </span>
            <span className="text-muted text-[0.9rem]">
              / ${GOAL_MRR.toLocaleString()} monthly
            </span>
          </div>
          <span className="text-ink-dim font-mono text-[0.76rem] tracking-wider">
            goal funds 1 maintainer day / week
          </span>
        </div>
        <div
          aria-label={`Sponsorship progress: $${CURRENT_MRR} of $${GOAL_MRR} monthly goal`}
          aria-valuemax={GOAL_MRR}
          aria-valuemin={0}
          aria-valuenow={CURRENT_MRR}
          className="bg-line-soft relative h-1.5 w-full overflow-hidden rounded-full"
          role="progressbar"
        >
          <div
            className="bg-accent absolute inset-y-0 left-0 rounded-full"
            style={{width: `${progressPct}%`}}
          />
        </div>
      </div>
    </section>

    {/* Tiers */}
    <section className="px-4 py-24 sm:px-8" id="tiers">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-180">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Recurring
            </span>
          </div>
          <h2 className="text-ink text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Three ways to keep GAIA going
          </h2>
        </div>

        <div className="border-line-soft border-t">
          {RECURRING_TIERS.map((tier) => (
            <TierRow key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-16 max-w-3xl">
          <p className="text-muted mb-3 font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Or chip in once
          </p>
          <div className="border-line-soft border-t">
            {ONE_TIME_TIERS.map((tier) => (
              <OneTimeRow key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Current sponsors. Hidden until first sponsor lands. Flip SHOW_CURRENT_SPONSORS to true when ready. */}
    {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
    {SHOW_CURRENT_SPONSORS && (
      <section
        className="border-line-soft border-t px-4 py-24 sm:px-8"
        id="current-sponsors"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-180">
            <div className="mb-4 inline-flex items-center gap-2">
              <span
                aria-hidden={true}
                className="bg-accent-soft size-1.5 rounded-full"
              />
              <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                Current sponsors
              </span>
            </div>
            <h2 className="text-ink text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
              The people keeping this alive
            </h2>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Company Sponsors
              </p>
              <p className="text-ink-dim text-[0.95rem] italic">
                First company sponsor lands here.
              </p>
            </div>
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Team Supporters
              </p>
              <p className="text-ink-dim text-[0.95rem] italic">
                First team supporter lands here.
              </p>
            </div>
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Personal Supporters
              </p>
              <p className="text-ink-dim text-[0.95rem] italic">
                First personal supporter lands here.
              </p>
            </div>
          </div>
        </div>
      </section>
    )}

    {/* Closing */}
    <section
      className="relative z-10 overflow-hidden px-4 sm:px-8"
      id="closing"
    >
      <div className="border-line-soft relative border-t py-24 text-center">
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 80% at 50% 0%, rgba(217,119,87,0.14) 0%, transparent 70%), radial-gradient(60% 120% at 50% 100%, rgba(91,138,138,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <div
            aria-hidden={true}
            className="mb-8 flex items-center justify-center gap-2"
          >
            <span className="to-line h-px w-20 bg-linear-to-r from-transparent" />
            <span className="bg-accent-soft size-1.5 rounded-full" />
            <span className="to-line h-px w-20 bg-linear-to-l from-transparent" />
          </div>

          <div className="mx-auto mb-4 flex w-fit items-start gap-2">
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Open source. Paid forward.
            </span>
          </div>

          <h2 className="text-ink mx-auto mb-9 max-w-[20ch] text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.05] tracking-[-0.015em]">
            Keep open source
            <br className="hidden sm:inline" />
            <span className="inline sm:hidden"> </span>
            <span className="text-accent-soft font-light">open.</span>
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <SponsorButton href="https://github.com/sponsors/gaia-react" />
            <a
              className="text-ink-dim hover:text-accent inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
              href="https://github.com/gaia-react/gaia"
              rel="noreferrer"
              target="_blank"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Sponsors;

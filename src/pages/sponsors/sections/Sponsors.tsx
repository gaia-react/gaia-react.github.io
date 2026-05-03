import type React from 'react';
import {CheckIcon} from '@/components/icons';

type Tier = {
  amount: number;
  benefits: string[];
  description: string;
  name: string;
  price: string;
};

const TIERS: Tier[] = [
  {
    amount: 5,
    benefits: [
      'Name in SUPPORTERS.md',
      'Mention in release notes',
      'Early peek at release notes (24h before public)',
    ],
    description: 'For individual developers using GAIA.',
    name: 'Personal Supporter',
    price: '$5 / month',
  },
  {
    amount: 25,
    benefits: [
      'Team name listed on this page',
      'Vote on roadmap RFCs',
      'Priority on issue triage from your account',
    ],
    description:
      'For small engineering teams using GAIA. Everything in Personal Supporter, plus:',
    name: 'Team Supporter',
    price: '$25 / month',
  },
  {
    amount: 100,
    benefits: [
      'Logo and link on this page',
      'Logo in the repo README',
      '"Powering" credit on relevant pages',
      'Direct email priority',
    ],
    description:
      'For companies that have adopted GAIA. Everything above, plus:',
    name: 'Company Sponsor',
    price: '$100 / month',
  },
];

const SHOW_CURRENT_SPONSORS = false;

const TierCard = ({delay, tier}: {delay: string; tier: Tier}) => (
  <article
    className="bg-surface border-line-soft hover:border-line flex flex-col rounded-lg border p-6 transition-colors duration-150"
    style={{'--reveal-delay': delay} as React.CSSProperties}
  >
    <div className="mb-5">
      <p className="text-muted mb-1 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
        {tier.price}
      </p>
      <h3 className="text-ink mb-2 text-[1.25rem] font-light tracking-[-0.01em]">
        {tier.name}
      </h3>
      <p className="text-ink-dim text-[0.95rem] leading-[1.6]">
        {tier.description}
      </p>
    </div>
    <div className="mt-auto space-y-5">
      <ul className="space-y-2.5">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2.5">
            <span className="text-accent mt-0.5 shrink-0">
              <CheckIcon size={14} />
            </span>
            <span className="text-ink-dim text-[0.88rem] leading-normal">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      <a
        className="text-accent hover:text-accent-soft inline-flex items-center gap-1.5 text-[0.9rem] no-underline transition-colors duration-150"
        href={`https://github.com/sponsors/gaia-react?frequency=recurring&amount=${tier.amount}`}
        rel="noreferrer"
        target="_blank"
      >
        Sponsor at {tier.price} →
      </a>
    </div>
  </article>
);

const EmptySlot = ({label}: {label: string}) => (
  <div className="bg-surface border-line-soft rounded-lg border px-6 py-8">
    <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
      {label}
    </p>
    <p className="text-muted text-[0.82rem] italic">
      First sponsors land here.
    </p>
  </div>
);

const SponsorGhLink = ({className}: {className?: string}) => (
  <a
    className={`bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150 ${className ?? ''}`}
    href="https://github.com/sponsors/gaia-react"
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
      className="relative overflow-x-clip px-4 pt-24 pb-20 sm:px-8"
      id="sponsors-hero"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="max-w-270">
          <div
            className="mb-4 inline-flex items-center gap-2"
            data-reveal={true}
          >
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Sponsors
            </span>
          </div>

          <h1
            className="text-ink mb-8 max-w-[22ch] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.1] tracking-tight"
            data-reveal={true}
            style={{'--reveal-delay': '80ms'} as React.CSSProperties}
          >
            Open source. Sustained by sponsors.
          </h1>

          <p
            className="text-ink-dim mb-8 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.55]"
            data-reveal={true}
            style={{'--reveal-delay': '180ms'} as React.CSSProperties}
          >
            Every dollar of sponsorship buys back maintainer time. Releases ship
            faster. Issues get answered. Roadmap moves forward.
          </p>

          <div
            data-reveal={true}
            style={{'--reveal-delay': '280ms'} as React.CSSProperties}
          >
            <SponsorGhLink />
          </div>
        </div>
      </div>
    </section>

    {/* Tier cards */}
    <section
      className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
      id="tiers"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-180" data-reveal={true}>
          <h2 className="text-ink mb-3 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Choose your level of support.
          </h2>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65]">
            All tiers go directly to open-source maintenance. No VC money. No
            sponsorship theater.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          data-stagger={true}
        >
          {TIERS.map((tier, index) => (
            <TierCard key={tier.name} delay={`${index * 80}ms`} tier={tier} />
          ))}
        </div>
      </div>
    </section>

    {/* Current sponsors. Hidden until first sponsor lands. Flip SHOW_CURRENT_SPONSORS to true when ready. */}
    {SHOW_CURRENT_SPONSORS && (
      <section className="px-4 py-20 sm:px-8" id="current-sponsors">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-180" data-reveal={true}>
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
              The people keeping this alive.
            </h2>
          </div>

          <div className="space-y-10" data-stagger={true}>
            {/* Company sponsors */}
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Company Sponsors
              </p>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <EmptySlot label="Logo slot" />
                <EmptySlot label="Logo slot" />
                <EmptySlot label="Logo slot" />
                <EmptySlot label="Logo slot" />
              </div>
            </div>

            {/* Team supporters */}
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Team Supporters
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <EmptySlot label="Team name" />
                <EmptySlot label="Team name" />
                <EmptySlot label="Team name" />
              </div>
            </div>

            {/* Personal supporters */}
            <div>
              <p className="text-muted mb-4 font-mono text-[0.72rem] tracking-[0.14em] uppercase">
                Personal Supporters
              </p>
              <div className="bg-surface border-line-soft rounded-lg border px-6 py-8">
                <p className="text-muted text-[0.82rem] italic">
                  First sponsors land here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

    {/* Closing CTA */}
    <section
      className="relative z-10 overflow-hidden px-4 sm:px-8"
      id="closing"
    >
      <div
        className="border-line-soft relative border-t py-24 text-center"
        data-reveal={true}
      >
        <div
          aria-hidden={true}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(50% 80% at 50% 0%, rgba(217,119,87,0.10) 0%, transparent 70%), radial-gradient(60% 120% at 50% 100%, rgba(91,138,138,0.06) 0%, transparent 70%)',
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
          <p
            className="text-ink-dim mx-auto mb-8 max-w-[46ch] text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '80ms'} as React.CSSProperties}
          >
            GAIA is free to use and open source. Sponsorship keeps it that way.
          </p>
          <div
            data-reveal={true}
            style={{'--reveal-delay': '160ms'} as React.CSSProperties}
          >
            <SponsorGhLink />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Sponsors;

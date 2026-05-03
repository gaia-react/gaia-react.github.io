import type React from 'react';

const Orbs = () => (
  <>
    <div
      aria-hidden={true}
      className="gaia-drift-orb-a pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,119,87,0.55) 0%, rgba(217,119,87,0.32) 28%, rgba(217,119,87,0.12) 55%, rgba(217,119,87,0) 75%)',
        height: 820,
        left: -240,
        opacity: 0.95,
        top: -280,
        width: 820,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-b pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(91,138,138,0.5) 0%, rgba(91,138,138,0.28) 30%, rgba(91,138,138,0.1) 58%, rgba(91,138,138,0) 78%)',
        height: 680,
        opacity: 0.85,
        right: -240,
        top: 60,
        width: 680,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-c pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,168,87,0.4) 0%, rgba(217,168,87,0.2) 32%, rgba(217,168,87,0.08) 60%, rgba(217,168,87,0) 80%)',
        bottom: -180,
        height: 420,
        left: '24%',
        opacity: 0.5,
        width: 420,
      }}
    />
  </>
);

const STATS = [
  {label: 'Lint rules', value: '1,592'},
  {label: 'Merge audit', value: '4 specialists'},
  {label: 'Warnings allowed', value: 'Zero'},
];

const Hero = () => (
  <section
    className="relative overflow-x-clip px-4 pt-4 pb-20 sm:px-8 sm:pt-24"
    id="hero"
  >
    <Orbs />
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="max-w-270">
        <div className="mb-4 inline-flex items-center gap-2" data-reveal={true}>
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            React · Claude Code · v1.0
          </span>
        </div>

        <h1
          className="text-ink mb-8 max-w-[22ch] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.1] tracking-tight"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          Claude is raw power.
          <br className="hidden sm:inline" />
          <span className="inline sm:hidden"> </span>
          GAIA is{' '}
          <em className="text-accent-soft font-light italic">
            order and focus.
          </em>
        </h1>

        <p
          className="text-ink-dim mb-4 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.55]"
          data-reveal={true}
          style={{'--reveal-delay': '200ms'} as React.CSSProperties}
        >
          A React workflow engineered for Claude Code. AI ships faster than
          ever. GAIA keeps it production-grade. Conventions enforced in code,
          shortcuts blocked at the source, every PR audited before merge.
        </p>

        <p
          className="text-muted mb-8 text-[0.85rem] leading-normal italic"
          data-reveal={true}
          style={{'--reveal-delay': '260ms'} as React.CSSProperties}
        >
          Built by Steven Sacks, creator of the original GAIA framework (used on
          100,000+ sites).
        </p>

        <div
          className="mb-12"
          data-reveal={true}
          style={{'--reveal-delay': '300ms'} as React.CSSProperties}
        >
          <a
            className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Get Started →
          </a>
        </div>

        <div
          className="border-line-soft flex max-w-xl flex-wrap gap-x-12 gap-y-6 border-t pt-8"
          data-reveal={true}
          style={{'--reveal-delay': '420ms'} as React.CSSProperties}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <strong className="text-ink block font-mono text-[0.9rem] leading-none font-normal tracking-[0.12em] uppercase">
                {stat.value}
              </strong>
              <span className="text-muted font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

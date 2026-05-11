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

const Hero = () => (
  <section
    className="relative overflow-x-clip px-4 pt-16 pb-12 sm:px-8 sm:pt-24"
    id="hero"
  >
    <Orbs />
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="max-w-270">
        <h1
          className="text-ink mb-4 max-w-[22ch] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.1] tracking-tight"
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
          Most Claude setups break under pressure. GAIA gives it structure that
          holds.
        </p>

        <p
          className="text-muted mb-10 text-[0.85rem] leading-normal italic"
          data-reveal={true}
          style={{'--reveal-delay': '260ms'} as React.CSSProperties}
        >
          Built by Steven Sacks, creator of the original GAIA framework (used on
          100,000+ sites).
        </p>

        <div
          data-reveal={true}
          style={{'--reveal-delay': '340ms'} as React.CSSProperties}
        >
          <a
            className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Get Started →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

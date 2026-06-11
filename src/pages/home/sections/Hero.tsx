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
        bottom: -270,
        height: 420,
        left: '33%',
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
        <p className="text-ink-dim mb-6 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
          <span className="inline-block whitespace-nowrap">
            Claude is raw power.
          </span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline">&nbsp;</span>
          <span className="inline-block whitespace-nowrap">
            GAIA is order and focus.
          </span>
        </p>

        <h1 className="text-ink mb-5 text-[clamp(2.25rem,4.8vw,3.85rem)] leading-[1.12] tracking-tight text-balance">
          GAIA is the engineering discipline for Claude Code.
          <br />
          <em className="text-accent-soft font-light italic">
            Keep the AI speed, lose the debt.
          </em>
        </h1>

        <p
          className="text-ink-dim mb-4 max-w-[54ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.55] text-pretty"
          data-reveal={true}
          style={{'--reveal-delay': '200ms'} as React.CSSProperties}
        >
          Enforced quality gates Claude can’t skip, so flawed code never reaches
          production. GAIA keeps Claude’s own config and memory clean as the
          project grows. Your AI engineer stays sharp, session after session.
        </p>

        <p
          className="text-ink-dim mb-4 max-w-[60ch] text-[clamp(1rem,1.5vw,1.2rem)] leading-[1.55] text-pretty"
          data-reveal={true}
          style={{'--reveal-delay': '215ms'} as React.CSSProperties}
        >
          React on the frontend, your stack everywhere else.
        </p>

        <p
          className="text-muted mb-10 max-w-[66ch] text-[0.85rem] leading-normal italic"
          data-reveal={true}
          style={{'--reveal-delay': '260ms'} as React.CSSProperties}
        >
          Built by Steven Sacks, creator of the original GAIA framework, used on
          100,000+ sites.
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

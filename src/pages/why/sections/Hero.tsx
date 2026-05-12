import type React from 'react';

const Hero = () => (
  <section className="border-line-soft relative overflow-hidden border-b px-4 pt-18 pb-12 sm:px-8 sm:pt-28 sm:pb-20">
    <div
      aria-hidden={true}
      className="gaia-haze gaia-haze-drift pointer-events-none absolute inset-[-3%] z-0"
    />
    <div className="relative z-10 mx-auto grid max-w-275 items-end gap-10 md:grid-cols-2 md:gap-16">
      <h1
        className="font-display text-ink text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] font-light tracking-[-0.03em]"
        data-reveal={true}
      >
        The Case for GAIA
      </h1>
      <div className="text-ink-dim text-[1.05rem] leading-[1.7] lg:pr-4">
        <p
          className="mb-4"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          The skepticism about AI-built code is fair. Vibe coding ships fast and
          breaks just as quickly. Quality degrades. Tests get skipped.
          Conventions drift.
        </p>
        <p
          className="mb-4"
          data-reveal={true}
          style={{'--reveal-delay': '160ms'} as React.CSSProperties}
        >
          The bottleneck was never raw capability. It is the absence of
          discipline around Claude.
        </p>
        <p
          className="font-display text-ink text-[1.15rem]"
          data-reveal={true}
          style={{'--reveal-delay': '240ms'} as React.CSSProperties}
        >
          GAIA is the discipline. Built into the project so Claude has to follow
          it.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;

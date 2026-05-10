import type React from 'react';

const HAZE = `
  radial-gradient(ellipse 80% 70% at 15% -15%, rgba(217,119,87,0.38) 0%, rgba(217,119,87,0.20) 30%, rgba(217,119,87,0.05) 55%, rgba(217,119,87,0) 75%),
  radial-gradient(ellipse 70% 80% at 105% 30%, rgba(91,138,138,0.30) 0%, rgba(91,138,138,0.15) 40%, rgba(91,138,138,0) 70%),
  radial-gradient(ellipse 50% 45% at 55% 115%, rgba(91,138,138,0.22) 0%, rgba(91,138,138,0.10) 45%, rgba(91,138,138,0) 75%),
  radial-gradient(ellipse 35% 40% at 70% 80%, rgba(217,119,87,0.16) 0%, rgba(217,119,87,0.06) 40%, rgba(217,119,87,0) 70%)
`;

const Hero = () => (
  <section className="border-line-soft relative overflow-hidden border-b px-4 pt-18 pb-12 sm:px-8 sm:pt-28 sm:pb-20">
    <div
      aria-hidden={true}
      className="gaia-haze-drift pointer-events-none absolute inset-[-3%] z-0"
      style={{background: HAZE}}
    />
    <div className="relative z-10 mx-auto grid max-w-[1100px] items-end gap-10 md:grid-cols-2 md:gap-16">
      <h1
        className="font-display text-ink text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.05] font-light tracking-[-0.03em]"
        data-reveal={true}
      >
        The Discipline
      </h1>
      <div className="text-ink-dim text-[1.05rem] leading-[1.7]">
        <p
          className="mb-4"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          Discipline is structural, not personal. Built into the project so
          Claude has to follow it.
        </p>
        <p
          className="mb-4"
          data-reveal={true}
          style={{'--reveal-delay': '160ms'} as React.CSSProperties}
        >
          Hooks intercept the tool call. Rules shape the writing. Gates hold the
          commit. Audits guard the merge. CI keeps the project current.
        </p>
        <p
          className="font-display text-ink text-[1.15rem] italic"
          data-reveal={true}
          style={{'--reveal-delay': '240ms'} as React.CSSProperties}
        >
          Discipline is leverage. Each layer turns Claude&apos;s capability into
          work that ships.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;

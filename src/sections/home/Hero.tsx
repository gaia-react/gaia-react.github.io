import gaiaLogo from '../../assets/gaia-logo.svg';

const Hero = () => (
  <section
    className="relative flex scroll-mt-16 flex-col items-center overflow-hidden px-4 pt-8 pb-16 md:overflow-visible md:py-20"
    id="hero"
  >
    <div
      aria-hidden="true"
      className="bg-accent/18 pointer-events-none absolute top-[-40%] left-1/2 z-0 h-105 w-140 -translate-x-1/2 rounded-full blur-[5.625rem] md:top-[30%]"
    />
    <div className="relative z-10 mx-auto max-w-2xl text-center">
      <img alt="GAIA" className="mx-auto mb-6 w-40 md:w-52" src={gaiaLogo} />
      <h1 className="text-ink mb-3 text-4xl font-bold md:text-6xl">
        The React workflow for Claude
      </h1>
      <p className="text-accent-soft mb-6 text-lg italic md:mb-8 md:text-2xl">
        Claude is raw power. GAIA is order and focus.
      </p>
      <p className="text-ink-dim mb-10 text-lg/relaxed text-pretty md:mb-12 md:text-xl">
        GAIA makes Claude trustworthy enough to own features end to end, and
        disciplined enough to do it at scale.
      </p>
      <div className="flex justify-center">
        <a
          className="bg-accent text-canvas hover:bg-accent-2 rounded-sm px-8 py-3 font-semibold transition-colors"
          href="/get-started/"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default Hero;

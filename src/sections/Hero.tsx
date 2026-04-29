import gaiaLogo from '../assets/gaia-logo.svg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center px-4 pt-8 pb-16 md:py-20 scroll-mt-16 overflow-hidden md:overflow-visible"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-40%] md:top-[30%] w-[560px] h-[420px] bg-[rgba(217,119,87,0.18)] rounded-full blur-[90px] z-0"
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <img
          alt="GAIA"
          className="mx-auto mb-6 w-40 md:w-52"
          src={gaiaLogo}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-fg">
          The React workflow for Claude
        </h1>
        <p className="text-lg md:text-2xl text-accent-soft italic mb-6 md:mb-8">
          Claude is raw power. GAIA is order and focus.
        </p>
        <p className="text-lg md:text-xl text-fg-dim mb-10 md:mb-12 leading-relaxed text-pretty">
          GAIA makes Claude trustworthy enough to own features end to end, and disciplined enough
          to do it at scale.
        </p>
        <div className="flex justify-center">
          <a
            href="/get-started/"
            className="px-8 py-3 bg-accent text-bg font-semibold rounded hover:bg-accent-2 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

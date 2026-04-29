import gaiaLogo from '../assets/gaia-logo.svg';

const Closing = () => (
  <section
    className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-20"
    id="closing"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[420px] w-[560px] -translate-1/2 rounded-full bg-[rgba(217,119,87,0.18)] blur-[90px]"
    />
    <div className="relative z-10 mx-auto max-w-2xl text-center">
      <img alt="GAIA" className="mx-auto mb-6 w-40 md:w-52" src={gaiaLogo} />
      <h2 className="text-fg mb-3 text-4xl font-bold md:text-6xl">
        Spend your time on the product, not the workflow
      </h2>
      <p className="text-accent-soft mb-10 text-lg italic md:mb-12 md:text-2xl">
        Pair-programming, not babysitting
      </p>
      <div className="flex justify-center">
        <a
          className="bg-accent text-bg hover:bg-accent-2 rounded-sm px-8 py-3 font-semibold transition-colors"
          href="/get-started/"
        >
          Get Started
        </a>
      </div>
    </div>
  </section>
);

export default Closing;

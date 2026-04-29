import gaiaLogo from '../assets/gaia-logo.svg';

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative flex flex-col items-center justify-center px-4 py-16 md:py-20 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[560px] h-[420px] bg-[rgba(217,119,87,0.18)] rounded-full blur-[90px] z-0"
      />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <img
          alt="GAIA"
          className="mx-auto mb-6 w-40 md:w-52"
          src={gaiaLogo}
        />
        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-fg">
          Spend your time on the product, not the workflow
        </h2>
        <p className="text-lg md:text-2xl text-accent-soft italic mb-10 md:mb-12">
          Pair-programming, not babysitting
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

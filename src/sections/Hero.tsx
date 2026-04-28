import gaiaLogo from '../assets/gaia-logo.svg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start md:justify-center md:min-h-screen px-4 pt-8 pb-16 md:py-20 scroll-mt-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-40%] md:top-[30%] w-[560px] h-[420px] bg-[rgba(217,119,87,0.18)] rounded-full blur-[90px]"
      />
      <div className="max-w-2xl mx-auto text-center">
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
          Built on Agentic Design patterns with a fully integrated Obsidian wiki, GAIA makes Claude
          trustworthy enough to own features end to end and token-efficient enough to do it at
          scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/gaia-react/gaia"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-bg font-semibold rounded hover:bg-accent-2 transition-colors"
          >
            View on GitHub
          </a>
          <a
            href="/docs/"
            className="px-8 py-3 border border-accent-soft text-fg font-semibold rounded hover:bg-bg-elev transition-colors"
          >
            Quick start &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

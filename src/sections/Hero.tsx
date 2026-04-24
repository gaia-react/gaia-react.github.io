export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start md:justify-center md:min-h-screen px-4 pt-8 pb-16 md:py-20 scroll-mt-16 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[-40%] md:top-[30%]"
        style={{
          width: '560px',
          height: '420px',
          background: 'rgba(217, 119, 87, 0.18)',
          borderRadius: '50%',
          filter: 'blur(90px)',
        }}
      />
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-[var(--color-fg)]">
          The React template built for Claude
        </h1>
        <p className="text-lg md:text-2xl text-[var(--color-accent-soft)] italic mb-6 md:mb-8">
          Claude as your lead engineer
        </p>
        <p className="text-lg md:text-xl text-[var(--color-fg-dim)] mb-10 md:mb-12 leading-relaxed">
          GAIA makes Claude trustworthy enough to own features end-to-end and token-efficient
          enough to do it at scale, with a built-in Obsidian wiki so Claude can understand your
          project without re-reading the codebase.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/gaia-react/react-router"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold rounded hover:bg-[var(--color-accent-2)] transition-colors"
          >
            View on GitHub
          </a>
          <a
            href="#quick-start"
            className="px-8 py-3 border border-[var(--color-accent-soft)] text-[var(--color-fg)] font-semibold rounded hover:bg-[var(--color-bg-elev)] transition-colors"
          >
            Quick start &darr;
          </a>
        </div>
      </div>
    </section>
  );
}

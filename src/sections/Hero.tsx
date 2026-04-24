export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 scroll-mt-16"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--color-fg)]">
          Claude as your lead engineer
        </h1>
        <p className="text-xl text-[var(--color-fg-dim)] mb-12 leading-relaxed">
          GAIA is the React Router template that makes Claude trustworthy enough to own features
          end-to-end, token-efficient enough to do it at scale, and grounded enough in the stack
          to answer how-do-I questions without re-reading the codebase.
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
            Quick start ↓
          </a>
        </div>
      </div>
    </section>
  );
}

import gaiaLogo from '../assets/gaia-logo.svg';

export default function Closing() {
  return (
    <section
      id="closing"
      className="relative flex flex-col items-center justify-center px-4 py-24 md:py-32 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        style={{
          width: '560px',
          height: '420px',
          background: 'rgba(217, 119, 87, 0.18)',
          borderRadius: '50%',
          filter: 'blur(90px)',
        }}
      />
      <div className="max-w-2xl mx-auto text-center">
        <img
          alt="GAIA"
          className="mx-auto mb-6 w-40 md:w-52"
          src={gaiaLogo}
        />
        <h2 className="text-4xl md:text-6xl font-bold mb-3 text-fg">
          Give Claude ownership, not just instructions
        </h2>
        <p className="text-lg md:text-2xl text-accent-soft italic mb-6 md:mb-8">
          No babysitting required
        </p>
        <p className="text-lg md:text-xl text-fg-dim mb-10 md:mb-12 leading-relaxed text-pretty">
          Rules that enforce conventions, a wiki that kills context bloat, hooks and skills that
          make Claude trustworthy enough to own features end-to-end — all of it configured and
          ready on day one.
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
            href="#quick-start"
            className="px-8 py-3 border border-accent-soft text-fg font-semibold rounded hover:bg-bg-elev transition-colors"
          >
            Quick start &uarr;
          </a>
        </div>
      </div>
    </section>
  );
}

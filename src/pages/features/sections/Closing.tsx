const Closing = () => (
  <section
    className="relative overflow-hidden px-4 pt-18 pb-16 text-center sm:px-8 sm:pt-28 sm:pb-24"
    id="install"
  >
    <div
      aria-hidden={true}
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 100%, color-mix(in oklab, var(--color-accent) 18%, transparent), transparent 70%)',
      }}
    />
    <div className="relative mx-auto max-w-275">
      <span className="text-accent-soft mb-[1.4rem] inline-block font-mono text-[0.72rem] tracking-[0.18em] uppercase">
        Open source. MIT.
      </span>
      <h2 className="text-ink font-display mb-[1.6rem] text-[clamp(2.6rem,7vw,5rem)] leading-[1.05] font-light tracking-[-0.035em]">
        Discipline you can install.
      </h2>
      <p className="text-ink-dim font-display mb-[2.6rem] text-[clamp(1.1rem,2vw,1.35rem)] italic">
        You direct. Claude implements. GAIA enforces.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
          href="/get-started/"
        >
          Get Started →
        </a>
        <a
          className="text-ink-dim hover:text-accent inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
          href="/roadmap/"
        >
          See the Roadmap →
        </a>
      </div>
    </div>
  </section>
);

export default Closing;

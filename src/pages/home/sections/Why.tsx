const Why = () => (
  <section className="px-4 py-20 sm:px-8" id="why">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-180" data-reveal={true}>
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Why GAIA
          </span>
        </div>
        <h2 className="text-ink mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          Vibe coding is broken. GAIA fixes it.
        </h2>
        <p className="text-ink-dim mb-4 text-[1.125rem] leading-[1.65]">
          Most setups run{' '}
          <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
            /init
          </code>{' '}
          and hope Claude figures out the rest. It does, for a while. Then comes
          output you can&apos;t trust, quality that drops as the project grows,
          and technical debt piling up while you build.
        </p>
        <p className="text-ink-dim text-[1.125rem] leading-[1.65]">
          <span className="text-ink">GAIA fixes all three.</span> Its structure
          and tooling enlist Claude in the fight against its own drift.
        </p>
      </div>
    </div>
  </section>
);

export default Why;

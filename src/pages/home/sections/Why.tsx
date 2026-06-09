const Why = () => (
  <section className="px-4 pt-9 pb-20 sm:px-8 sm:py-20" id="why">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-164">
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Why GAIA
          </span>
        </div>
        <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          <span className="text-ink-dim">Vibe coding doesn’t scale.</span>
          <br className="hidden sm:inline" />
          <span className="sm:hidden"> </span>
          <span className="text-ink">Discipline does.</span>
        </h2>
        <p className="text-ink-dim mb-4 text-[1.125rem] leading-[1.65]">
          Every codebase drifts. AI just gets there faster.
        </p>
        <p className="text-ink-dim mb-4 text-[1.125rem] leading-[1.65]">
          {'Most setups run '}
          <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
            /init
          </code>
          , install a few skills, and hope Claude figures out the rest. It does,
          for a while. Then technical debt builds up, in your codebase and in
          Claude’s own configuration and memory. Both compound as the project
          grows.
        </p>
        <p className="text-ink-dim text-[1.125rem] leading-[1.65]">
          <span className="text-ink">GAIA fixes this.</span> Its structure and
          tooling enlist Claude in the fight against drift.
        </p>
      </div>
    </div>
  </section>
);

export default Why;

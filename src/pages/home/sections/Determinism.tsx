const Determinism = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="determinism"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 inline-flex items-center gap-2">
        <span
          aria-hidden={true}
          className="bg-secondary-soft size-1.5 rounded-full"
        />
        <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          Determinism, not hope
        </span>
      </div>
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.12] tracking-[-0.02em]">
          <span className="text-ink-dim">Skills advise.</span>
          <br className="hidden lg:inline" />
          <span className="lg:hidden">&nbsp;</span>
          <span className="text-ink">GAIA enforces.</span>
        </h2>
        <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65] text-pretty">
          <p>
            Why not just install a few skills? A skill is advice. The model
            takes it or leaves it.&nbsp;
            <span className="text-ink">
              Hooks, gates, and audits don’t ask.
            </span>
          </p>
          <p>
            You can’t build determinism out of suggestions. That’s the
            difference between a bundle of skills and a foundation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Determinism;

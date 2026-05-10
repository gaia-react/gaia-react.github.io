const Hero = () => (
  <section className="pt-8 pb-6">
    <div className="mx-auto max-w-3xl px-4 sm:px-8">
      <h1 className="font-display text-ink mb-8 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-light tracking-[-0.03em]">
        The Discipline
      </h1>
      <div className="text-ink-dim space-y-5 text-[clamp(1.05rem,1.6vw,1.25rem)] leading-[1.65]">
        <p>
          Discipline is structural, not personal. Built into the project so
          Claude has to follow it.
        </p>
        <p>
          Hooks intercept the tool call. Rules shape the writing. Gates hold the
          commit. Audits guard the merge. CI keeps the project current.
        </p>
        <p className="text-ink">
          Discipline is leverage. Each layer turns Claude&apos;s capability into
          work that ships.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;

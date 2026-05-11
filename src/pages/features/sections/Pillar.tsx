const PRINCIPLES = [
  ['Think Before Coding', 'Surface assumptions. Ask when unclear.'],
  ['Simplicity First', 'Write the minimum that works.'],
  ['Surgical Changes', 'Touch only what is needed.'],
  ['Goal-Driven Execution', 'Define done. Loop until verified.'],
  ['Always Use TDD', 'Tests before code, always.'],
  ['Always Verify Work', 'Pass the gates before reporting done.'],
] as const;

const Pillar = () => (
  <section
    className="border-line-soft relative scroll-mt-20 overflow-hidden border-b py-24 sm:py-32"
    id="discipline"
  >
    <div
      aria-hidden={true}
      className="gaia-haze gaia-haze-drift pointer-events-none absolute inset-[-3%] z-0"
    />
    <div className="relative z-10 mx-auto max-w-275 px-4 sm:px-8">
      <div className="text-accent-soft mb-12 text-center font-mono text-[0.7rem] tracking-[0.2em] uppercase sm:mb-14">
        Discipline, in six principles
      </div>

      <dl className="mx-auto grid max-w-200 grid-cols-[max-content_1fr] items-baseline gap-x-[clamp(1.5rem,5vw,3.5rem)] gap-y-5 sm:gap-y-7">
        {PRINCIPLES.map(([term, definition]) => (
          <div key={term} className="contents">
            <dt className="text-accent-soft font-mono text-[0.78rem] tracking-[0.16em] whitespace-nowrap uppercase">
              {term}
            </dt>
            <dd className="text-ink font-display text-[clamp(1.15rem,2.6vw,1.75rem)] leading-[1.2] font-light tracking-[-0.015em]">
              {definition}
            </dd>
          </div>
        ))}
      </dl>

      <div className="text-muted mx-auto mt-10 text-center font-mono text-[0.65rem] tracking-[0.2em] uppercase sm:mt-12">
        Four from Karpathy · Two added by GAIA
      </div>
    </div>
  </section>
);

export default Pillar;

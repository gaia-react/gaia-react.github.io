import StackGrid from '@/components/StackGrid';

const TheStack = () => (
  <section className="px-4 py-20 sm:px-8" id="stack">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 max-w-180" data-reveal={true}>
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-secondary-soft size-1.5 rounded-full"
          />
          <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Tech stack
          </span>
        </div>
        <h2 className="text-ink mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          The frontend, decided.
        </h2>
        <p className="text-ink-dim text-[1.125rem]">
          Fewer gaps in the stack means fewer decisions Claude has to invent.
        </p>
      </div>

      <StackGrid />

      <p
        className="text-ink-dim mt-10 text-[0.95rem] leading-relaxed"
        data-reveal={true}
      >
        Every lint rule is a check Claude has to clear. GAIA ships 1,314,
        including 82 Stylelint rules covering the patterns Claude drifts into
        first: complexity creep, architectural shortcuts, mismatched filenames,
        broken CSS.{' '}
        <span className="text-ink">
          In GAIA, the code Claude writes matches high standards because every
          commit enforces them.
        </span>
      </p>

      <div
        className="border-line-soft mt-10 grid grid-cols-1 overflow-hidden rounded-lg border md:grid-cols-2"
        data-reveal={true}
        style={{'--reveal-delay': '120ms'} as React.CSSProperties}
      >
        <div className="border-line-soft border-b px-6 py-7 [background:linear-gradient(135deg,rgba(217,119,87,0.18),rgba(217,119,87,0.04))] md:border-r md:border-b-0 md:px-8 md:py-9">
          <p className="text-accent-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Order and focus
          </p>
          <h3 className="font-display text-ink mb-4 text-[1.6rem] leading-[1.2] font-light tracking-[-0.02em]">
            GAIA is built for Claude.
          </h3>
          <p className="text-ink-dim leading-relaxed">
            Claude writes cleaner code when standards are enforced, not
            suggested. GAIA&apos;s are strict, battle-tested, and wired in from
            the first commit.
          </p>
        </div>
        <div className="px-6 py-7 [background:linear-gradient(135deg,rgba(91,138,138,0.06),rgba(91,138,138,0.18))] md:px-8 md:py-9">
          <p className="text-secondary-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Ship features
          </p>
          <h3 className="font-display text-ink mb-4 text-[1.6rem] leading-[1.2] font-light tracking-[-0.02em]">
            Set the goal. Trust the diff.
          </h3>
          <p className="text-ink-dim leading-relaxed">
            You describe what you want. Claude works inside the guardrails. Code
            review stops being a hunt for surprises, and you get back to
            shipping.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default TheStack;

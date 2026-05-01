const features = [
  'React Router 7',
  'TypeScript',
  'Tailwind CSS',
  'Unit + integration tests',
  'End-to-end tests',
  'Storybook',
  'Visual regression tests',
  'Dark mode',
  'i18n',
  'Mock API',
  'Form validation',
  'Accessibility guardrails',
];

const FrameworkComparison = () => (
  <section
    className="border-ink/4 border-b"
    style={{paddingBottom: '4rem', paddingTop: '4rem'}}
  >
    <div className="mx-auto max-w-6xl scroll-mt-20 px-8" id="gaia-features">
      <h2 className="font-display text-ink mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em]">
        The full stack, no gaps.
      </h2>
      <p className="text-ink-dim mb-8 text-lg/relaxed text-pretty">
        Fewer gaps in the stack means fewer decisions Claude has to invent on
        its own.
      </p>

      <ul className="mb-0 flex flex-wrap gap-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="border-secondary/25 bg-secondary/10 text-ink-dim flex items-center gap-2 rounded-sm border px-3 py-1.5 text-sm"
          >
            <span
              aria-hidden="true"
              className="text-secondary-soft text-base leading-none font-bold"
            >
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <p className="text-ink-dim mt-8 text-base/relaxed text-pretty">
        Every lint rule is a check Claude has to clear. GAIA ships 1,592 —
        including 85 Stylelint rules covering the patterns Claude drifts into
        first: complexity creep, architectural shortcuts, mismatched filenames,
        broken CSS.{' '}
        <span className="text-ink">
          In GAIA, the code Claude writes matches high standards because every
          commit enforces them.
        </span>
      </p>
      <div className="border-line-soft mt-10 grid grid-cols-1 overflow-hidden rounded-lg border md:grid-cols-2">
        <div className="border-line-soft border-b px-6 py-7 [background:linear-gradient(to_bottom,rgba(217,119,87,0.22),rgba(217,119,87,0.08))] md:border-r md:border-b-0 md:px-8 md:py-9 md:[background:linear-gradient(to_right,rgba(217,119,87,0.22),rgba(217,119,87,0.08))]">
          <p className="text-accent-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Order and focus
          </p>
          <h3 className="font-display text-ink mb-4 text-2xl leading-[1.2] font-light tracking-[-0.02em] md:text-3xl">
            GAIA is built for Claude.
          </h3>
          <p className="text-ink-dim leading-relaxed text-pretty">
            Claude writes cleaner code when standards are enforced, not
            suggested. GAIA&apos;s are strict, battle-tested, and wired in from
            the first commit.
          </p>
        </div>
        <div className="px-6 py-7 [background:linear-gradient(to_bottom,rgba(91,138,138,0.08),rgba(91,138,138,0.22))] md:px-8 md:py-9 md:[background:linear-gradient(to_right,rgba(91,138,138,0.08),rgba(91,138,138,0.22))]">
          <p className="text-secondary-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Ship features
          </p>
          <h3 className="font-display text-ink mb-4 text-2xl leading-[1.2] font-light tracking-[-0.02em] md:text-3xl">
            Set the goal. Trust the diff.
          </h3>
          <p className="text-ink-dim leading-relaxed text-pretty">
            You describe what you want. Claude works inside the guardrails. Code
            review stops being a hunt for surprises, and you get back to
            shipping.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FrameworkComparison;

import {CheckIcon} from '@/components/icons';

const STACK_GROUPS = [
  {
    items: [
      {kind: 'Routing', name: 'React Router 7'},
      {kind: 'Language', name: 'TypeScript'},
      {kind: 'Styling', name: 'Tailwind CSS'},
      {kind: 'Forms', name: 'Conform · Zod'},
    ],
    label: 'Foundation',
  },
  {
    items: [
      {kind: 'Unit tests', name: 'Vitest + RTL'},
      {kind: 'E2E tests', name: 'Playwright'},
      {kind: 'Visual regression', name: 'Chromatic'},
      {kind: 'Accessibility', name: 'A11y guardrails'},
    ],
    label: 'Quality',
  },
  {
    items: [
      {kind: 'Components', name: 'Storybook'},
      {kind: 'Theme', name: 'Dark mode'},
      {kind: 'Localization', name: 'i18next'},
      {kind: 'Mock API', name: 'MSW'},
    ],
    label: 'Experience',
  },
];

const FrameworkComparison = () => (
  <section className="py-20" id="stack">
    <div className="mx-auto max-w-6xl px-8">
      <div className="mb-12 max-w-[720px]" data-reveal={true}>
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-secondary-soft size-1.5 rounded-full"
          />
          <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            The full stack
          </span>
        </div>
        <h2 className="text-ink mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          The full stack, no gaps.
        </h2>
        <p className="text-ink-dim text-[1.125rem]">
          Fewer gaps in the stack means fewer decisions Claude has to invent on
          its own.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        data-stagger={true}
      >
        {STACK_GROUPS.map((group) => (
          <div
            key={group.label}
            className="bg-surface border-line-soft rounded-lg border px-5 pt-5 pb-3"
          >
            <div className="border-line-soft mb-1 border-b pb-3">
              <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                {group.label}
              </span>
            </div>
            <ul className="divide-line-soft divide-y">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center justify-between gap-4 py-2.5"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="bg-secondary/12 text-secondary-soft inline-flex size-5 shrink-0 items-center justify-center rounded-sm">
                      <CheckIcon size={12} />
                    </div>
                    <span className="text-ink text-[0.95rem]">{item.name}</span>
                  </div>
                  <span className="text-muted font-mono text-[0.65rem] tracking-[0.14em] whitespace-nowrap uppercase">
                    {item.kind}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p
        className="text-ink-dim mt-10 max-w-[720px] text-[0.95rem] leading-relaxed"
        data-reveal={true}
      >
        Every lint rule is a check Claude has to clear. GAIA ships 1,592 —
        including 85 Stylelint rules covering the patterns Claude drifts into
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

export default FrameworkComparison;

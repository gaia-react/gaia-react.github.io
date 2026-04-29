import {
  ComparisonTable,
  type ComparisonCell,
  type ComparisonColumn,
  type ComparisonRow,
} from '@/components/ComparisonTable';

const check: ComparisonCell = { kind: 'check' };
const dash: ComparisonCell = { kind: 'dash' };
const value = (label: string): ComparisonCell => ({ kind: 'value', label });

const columns: ComparisonColumn[] = [
  { key: 'gaia', label: 'GAIA', isHero: true },
  { key: 'epic', label: 'Epic Stack' },
  { key: 't3', label: 'create-t3-app' },
  { key: 'redwood', label: 'RedwoodJS' },
];

const rows: ComparisonRow[] = [
  {
    feature: 'Routing',
    values: {
      gaia: value('React Router 7'),
      epic: value('React Router 7'),
      t3: value('Next.js'),
      redwood: value('@redwoodjs/router'),
    },
  },
  {
    feature: 'TypeScript',
    values: { gaia: check, epic: check, t3: check, redwood: check },
  },
  {
    feature: 'Tailwind',
    values: { gaia: check, epic: check, t3: check, redwood: dash },
  },
  {
    feature: 'Unit / integration tests',
    values: { gaia: check, epic: check, t3: dash, redwood: check },
  },
  {
    feature: 'E2E tests',
    values: { gaia: check, epic: check, t3: dash, redwood: dash },
  },
  {
    feature: 'Storybook',
    values: { gaia: check, epic: dash, t3: dash, redwood: check },
  },
  {
    feature: 'Visual regression tests',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Dark mode',
    values: { gaia: check, epic: check, t3: dash, redwood: dash },
  },
  {
    feature: 'i18n',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Mock API',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Forms',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Accessibility guardrails',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Lint rules*',
    values: {
      gaia: value('1,592'),
      epic: value('748'),
      t3: value('637'),
      redwood: value('626'),
    },
  },
];

export default function FrameworkComparison() {
  return (
    <section className="border-b border-fg/[0.04]" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div
        id="framework-comparison"
        className="max-w-[72rem] mx-auto px-8 [scroll-margin-top:5rem]"
      >
        <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] text-fg mb-4 tracking-[-0.02em] leading-[1.15]">
          How the major React starters stack up
        </h2>
        <p className="text-fg-dim text-lg mb-10 leading-relaxed text-pretty">
          GAIA's stack is the most complete. Fewer gaps means fewer
          decisions Claude has to invent on its own.
        </p>

        <ComparisonTable columns={columns} rows={rows} />

        <p className="text-fg-dim text-base mt-8 leading-relaxed text-pretty">
          <span aria-hidden="true" className="text-fg-mute mr-1">*</span>
          Every lint rule is a check Claude has to clear, and GAIA has more
          than twice as many as any other starter, including 85 Stylelint
          rules none of the others ship at all. The extras cover the patterns
          Claude drifts into first: complexity creep, architectural
          shortcuts, mismatched filenames, broken CSS.{' '}
          <span className="text-fg">
            In GAIA, the code Claude writes matches high standards because
            every commit enforces them.
          </span>
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[4fr_3fr] rounded-lg overflow-hidden border border-border-soft">
          <div className="px-6 py-7 md:px-8 md:py-9 border-b md:border-b-0 md:border-r border-border-soft [background:linear-gradient(to_bottom,rgba(217,119,87,0.22),rgba(217,119,87,0.08))] md:[background:linear-gradient(to_right,rgba(217,119,87,0.22),rgba(217,119,87,0.08))]">
            <p className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-accent-soft mb-3">
              Order and focus
            </p>
            <h3 className="font-display font-light text-2xl md:text-3xl text-fg tracking-[-0.02em] leading-[1.2] mb-4">
              Only GAIA is built for Claude.
            </h3>
            <p className="text-fg-dim leading-relaxed text-pretty">
              GAIA was strict long before Claude existed. That same
              discipline is what keeps Claude's code clean now. Claude
              thrives with enforced standards, and GAIA's were already
              battle-tested.
            </p>
          </div>
          <div className="px-6 py-7 md:px-8 md:py-9 [background:linear-gradient(to_bottom,rgba(91,138,138,0.08),rgba(91,138,138,0.22))] md:[background:linear-gradient(to_right,rgba(91,138,138,0.08),rgba(91,138,138,0.22))]">
            <p className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-secondary-soft mb-3">
              Ship features
            </p>
            <h3 className="font-display font-light text-2xl md:text-3xl text-fg tracking-[-0.02em] leading-[1.2] mb-4">
              Set the goal. Trust the diff.
            </h3>
            <p className="text-fg-dim leading-relaxed text-pretty">
              You describe what you want. Claude works inside the guardrails.
              Code review stops being a hunt for surprises, and you get
              back to shipping.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

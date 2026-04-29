import {ComparisonTable} from '@/components/ComparisonTable';
import type {
  ComparisonCell,
  ComparisonColumn,
  ComparisonRow,
} from '@/components/ComparisonTable';

const check: ComparisonCell = {kind: 'check'};
const dash: ComparisonCell = {kind: 'dash'};
const value = (label: string): ComparisonCell => ({kind: 'value', label});

const columns: ComparisonColumn[] = [
  {isHero: true, key: 'gaia', label: 'GAIA'},
  {key: 'epic', label: 'Epic Stack'},
  {key: 't3', label: 'create-t3-app'},
  {key: 'redwood', label: 'RedwoodJS'},
];

const rows: ComparisonRow[] = [
  {
    feature: 'Routing',
    values: {
      epic: value('React Router 7'),
      gaia: value('React Router 7'),
      redwood: value('@redwoodjs/router'),
      t3: value('Next.js'),
    },
  },
  {
    feature: 'TypeScript',
    values: {epic: check, gaia: check, redwood: check, t3: check},
  },
  {
    feature: 'Tailwind',
    values: {epic: check, gaia: check, redwood: dash, t3: check},
  },
  {
    feature: 'Unit / integration tests',
    values: {epic: check, gaia: check, redwood: check, t3: dash},
  },
  {
    feature: 'E2E tests',
    values: {epic: check, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Storybook',
    values: {epic: dash, gaia: check, redwood: check, t3: dash},
  },
  {
    feature: 'Visual regression tests',
    values: {epic: dash, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Dark mode',
    values: {epic: check, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'i18n',
    values: {epic: dash, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Mock API',
    values: {epic: dash, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Forms',
    values: {epic: dash, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Accessibility guardrails',
    values: {epic: dash, gaia: check, redwood: dash, t3: dash},
  },
  {
    feature: 'Lint rules',
    mobileLabel: (cell) =>
      cell?.kind === 'value' ? `${cell.label} lint rules` : 'Lint rules',
    values: {
      epic: value('748'),
      gaia: value('1,592'),
      redwood: value('626'),
      t3: value('637'),
    },
  },
];

const FrameworkComparison = () => (
  <section
    className="border-fg/4 border-b"
    style={{paddingBottom: '4rem', paddingTop: '4rem'}}
  >
    <div
      className="mx-auto max-w-6xl scroll-mt-20 px-8"
      id="framework-comparison"
    >
      <h2 className="font-display text-fg mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em]">
        How the major React starters stack up
      </h2>
      <p className="text-fg-dim mb-10 text-lg/relaxed text-pretty">
        GAIA’s stack is the most complete. Fewer gaps means fewer decisions
        Claude has to invent on its own.
      </p>

      <ComparisonTable columns={columns} rows={rows} />

      <p className="text-fg-dim mt-8 text-base/relaxed text-pretty">
        Every lint rule is a check Claude has to clear, and GAIA has more than
        twice as many as any other starter, including 85 Stylelint rules none of
        the others ship at all. The extras cover the patterns Claude drifts into
        first: complexity creep, architectural shortcuts, mismatched filenames,
        broken CSS.{' '}
        <span className="text-fg">
          In GAIA, the code Claude writes matches high standards because every
          commit enforces them.
        </span>
      </p>
      <div className="border-border-soft mt-10 grid grid-cols-1 overflow-hidden rounded-lg border md:grid-cols-[4fr_3fr]">
        <div className="border-border-soft border-b px-6 py-7 [background:linear-gradient(to_bottom,rgba(217,119,87,0.22),rgba(217,119,87,0.08))] md:border-r md:border-b-0 md:px-8 md:py-9 md:[background:linear-gradient(to_right,rgba(217,119,87,0.22),rgba(217,119,87,0.08))]">
          <p className="text-accent-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Order and focus
          </p>
          <h3 className="font-display text-fg mb-4 text-2xl leading-[1.2] font-light tracking-[-0.02em] md:text-3xl">
            Only GAIA is built for Claude.
          </h3>
          <p className="text-fg-dim leading-relaxed text-pretty">
            GAIA was strict long before Claude existed. That same discipline is
            what keeps Claude’s code clean now. Claude thrives with enforced
            standards, and GAIA’s were already battle-tested.
          </p>
        </div>
        <div className="px-6 py-7 [background:linear-gradient(to_bottom,rgba(91,138,138,0.08),rgba(91,138,138,0.22))] md:px-8 md:py-9 md:[background:linear-gradient(to_right,rgba(91,138,138,0.08),rgba(91,138,138,0.22))]">
          <p className="text-secondary-soft mb-3 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            Ship features
          </p>
          <h3 className="font-display text-fg mb-4 text-2xl leading-[1.2] font-light tracking-[-0.02em] md:text-3xl">
            Set the goal. Trust the diff.
          </h3>
          <p className="text-fg-dim leading-relaxed text-pretty">
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

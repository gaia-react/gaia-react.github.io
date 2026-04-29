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
    feature: 'TypeScript',
    values: { gaia: check, epic: check, t3: check, redwood: check },
  },
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
    feature: 'Tailwind',
    values: { gaia: check, epic: check, t3: check, redwood: dash },
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
    feature: 'Unit / integration tests',
    values: {
      gaia: value('Vitest'),
      epic: value('Vitest'),
      t3: dash,
      redwood: value('Jest'),
    },
  },
  {
    feature: 'Component testing',
    values: {
      gaia: value('Storybook + Chromatic'),
      epic: dash,
      t3: dash,
      redwood: value('Storybook only'),
    },
  },
  {
    feature: 'E2E tests',
    values: {
      gaia: value('Playwright'),
      epic: value('Playwright'),
      t3: dash,
      redwood: dash,
    },
  },
  {
    feature: 'Mock API',
    values: { gaia: value('MSW'), epic: dash, t3: dash, redwood: dash },
  },
  {
    feature: 'Forms',
    values: {
      gaia: value('Conform + Zod'),
      epic: dash,
      t3: dash,
      redwood: dash,
    },
  },
  {
    feature: 'Accessibility guardrails',
    values: { gaia: check, epic: dash, t3: dash, redwood: dash },
  },
];

export default function FrameworkComparison() {
  return (
    <section style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div
        id="framework-comparison"
        className="max-w-[72rem] mx-auto px-8 [scroll-margin-top:5rem]"
      >
        <p className="text-secondary-soft font-mono uppercase text-[0.7rem] tracking-[0.2em] mb-3">
          Foundation
        </p>
        <h2 className="font-display font-light text-[clamp(2rem,4vw,3rem)] text-fg mb-4 tracking-[-0.02em] leading-[1.15]">
          How the major React starters stack up
        </h2>
        <p className="text-fg-dim text-lg mb-10 leading-relaxed text-pretty">
          Every core feature a serious React stack needs, all wired up and
          documented. Claude ships features from day one instead of spending
          weeks discovering the codebase.
        </p>

        <ComparisonTable columns={columns} rows={rows} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[4fr_3fr] rounded-lg overflow-hidden border border-border-soft">
          <div
            className="px-6 py-7 md:px-8 md:py-9 border-b md:border-b-0 md:border-r border-border-soft"
            style={{
              background:
                'linear-gradient(to right, rgba(217,119,87,0.22), rgba(217,119,87,0.10))',
            }}
          >
            <p className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-accent-soft mb-3">
              Built for Claude
            </p>
            <h3 className="font-display font-light text-2xl md:text-3xl text-fg tracking-[-0.02em] leading-[1.2] mb-4">
              Only GAIA is built for Claude.
            </h3>
            <p className="text-fg-dim leading-relaxed text-pretty">
              Every layer is shaped for how Claude works. Tight context,
              strict patterns, docs Claude actually reads.
            </p>
          </div>
          <div
            className="px-6 py-7 md:px-8 md:py-9"
            style={{
              background:
                'linear-gradient(to right, rgba(91,138,138,0.10), rgba(91,138,138,0.22))',
            }}
          >
            <p className="font-mono uppercase text-[0.7rem] tracking-[0.2em] text-secondary-soft mb-3">
              Wired in
            </p>
            <h3 className="font-display font-light text-2xl md:text-3xl text-fg tracking-[-0.02em] leading-[1.2] mb-4">
              Every feedback loop Claude needs.
            </h3>
            <p className="text-fg-dim leading-relaxed text-pretty">
              Linting on every save. Gates at every commit. Code review on
              every diff. A wiki on demand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

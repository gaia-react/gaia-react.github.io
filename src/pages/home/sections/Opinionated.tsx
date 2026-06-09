import {twJoin} from 'tailwind-merge';

const RULE_ROWS = [
  {active: true, pattern: 'app/**/*.{tsx,css}', rule: 'tailwind'},
  {active: true, pattern: 'app/services/**', rule: 'api-service'},
  {pattern: 'app/components/**', rule: 'accessibility'},
  {pattern: 'app/**/*.stories.tsx', rule: 'storybook'},
  {pattern: '.playwright/**', rule: 'playwright'},
];

const MatchLedger = () => (
  <div className="border-line bg-surface overflow-hidden rounded-lg border">
    <div className="bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2">
      <span className="text-ink-dim font-mono text-xs tracking-wider">
        .claude/rules/
      </span>
      <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
        apply on match
      </span>
    </div>
    <div className="divide-line-soft divide-y">
      {RULE_ROWS.map((r) => (
        <div
          key={r.pattern}
          className={twJoin(
            'flex items-center px-4 py-2.5',
            r.active && 'bg-accent/5'
          )}
        >
          <div className="flex-1">
            <code
              className={twJoin(
                'font-mono text-xs',
                r.active ? 'text-accent-soft' : 'text-muted'
              )}
            >
              {r.pattern}
            </code>
          </div>
          <div className="text-muted px-3 text-xs">→</div>
          <div className="flex-1 text-right">
            <code
              className={twJoin(
                'font-mono text-xs',
                r.active ? 'text-ink' : 'text-ink-dim'
              )}
            >
              {r.rule}
            </code>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Opinionated = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="opinionated"
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:order-2 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Opinionated by default
            </span>
          </div>
          <h2 className="mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em] text-balance">
            <span className="text-ink-dim">
              Without standards, Claude improvises.
            </span>
            <span> </span>
            <span className="text-ink">
              With GAIA’s standards, quality holds up.
            </span>
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65] text-pretty">
            GAIA ships with informed opinions on styling, tests, stories,
            accessibility, and services. Claude applies them to every file it
            touches, so the codebase stays consistent instead of a patchwork of
            whatever the model felt like that session.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65] text-pretty">
            Each rule is scoped to the files it matches, so Claude gets the
            right standard and none of the noise. Whatever you build on top
            inherits the same gates.
          </p>
        </div>

        <div className="lg:order-1">
          <MatchLedger />
        </div>
      </div>
    </div>
  </section>
);

export default Opinionated;

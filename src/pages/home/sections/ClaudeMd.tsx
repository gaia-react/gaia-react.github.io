import {twJoin} from 'tailwind-merge';

const ACTIVE_TIERS = [
  {accent: true, caption: 'you invoke', eyebrow: 'COMMAND', name: '/gaia spec'},
  {caption: 'fires automatically', eyebrow: 'HOOK', name: 'pre-commit'},
  {caption: 'gates every merge', eyebrow: 'AGENT', name: 'code-review-audit'},
];

const RULE_ROWS = [
  {active: true, pattern: '**/api/**', rule: 'api-service'},
  {active: true, pattern: '**/*.tsx', rule: 'tailwind'},
  {pattern: '**/*.test.{ts,tsx}', rule: 'playwright'},
  {pattern: '**/i18n/**', rule: 'i18n'},
  {pattern: '**/*.stories.tsx', rule: 'storybook'},
];

const ActiveTriptych = () => (
  <div className="space-y-3">
    {ACTIVE_TIERS.map((t) => (
      <div
        key={t.eyebrow}
        className={twJoin(
          'bg-surface rounded-lg border p-5',
          t.accent ? 'border-accent/60' : 'border-line'
        )}
      >
        <div className="mb-1 flex items-baseline justify-between">
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.2em] uppercase">
            {t.eyebrow}
          </span>
          <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
            {t.caption}
          </span>
        </div>
        <div
          className={twJoin(
            'font-mono text-base',
            t.accent ? 'text-accent' : 'text-ink'
          )}
        >
          {t.name}
        </div>
      </div>
    ))}
  </div>
);

const MatchLedger = () => (
  <div className="border-line bg-surface mt-4 overflow-hidden rounded-lg border">
    <div className="bg-surface-raised border-line flex items-center justify-between border-b px-4 py-2">
      <span className="text-ink-dim font-mono text-xs tracking-wider">
        .claude/rules/
      </span>
      <span className="text-muted font-mono text-[0.6rem] tracking-[0.16em] uppercase">
        on match
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

const ClaudeMd = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="claude-code"
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Claude Code, configured
            </span>
          </div>
          <h2 className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Commands you invoke. Hooks that control. An agent that reviews.
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]">
            <code className="text-ink">/gaia spec</code> interviews you and
            writes the spec. <code className="text-ink">/gaia plan</code> hands
            it to Claude. <code className="text-ink">/gaia handoff</code> and{' '}
            <code className="text-ink">/gaia pickup</code> carry context across
            sessions.
          </p>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]">
            Hooks protect main, prevent tech debt, and keep commits clean.
          </p>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]">
            The <code className="text-ink">code-review-audit</code> agent scans
            for security, performance, architecture, and antipatterns. Critical
            and Important findings block the merge.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65]">
            <a
              className="text-accent hover:text-accent-soft transition-colors duration-150"
              href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
              rel="noreferrer"
              target="_blank"
            >
              Karpathy&apos;s
            </a>{' '}
            coding principles, wired in. Scoped rules cover best practices,
            testing, strict typing, and accessibility.
          </p>
        </div>

        <div>
          <ActiveTriptych />
          <MatchLedger />
        </div>
      </div>
    </div>
  </section>
);

export default ClaudeMd;

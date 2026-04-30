import {twJoin} from 'tailwind-merge';
import {Section, SectionHeading} from '@/components/Section';

const ACTIVE_TIERS = [
  {accent: true, caption: 'you invoke', eyebrow: 'SLASH', name: '/orchestrate'},
  {caption: 'fires automatically', eyebrow: 'HOOK', name: 'pre-commit'},
  {caption: 'gates every merge', eyebrow: 'AGENT', name: 'code-review-audit'},
];

const RULE_ROWS = [
  {active: true, pattern: '**/*.tsx', rule: 'react-code'},
  {active: true, pattern: '**/*.ts', rule: 'typescript'},
  {pattern: '**/api/**', rule: 'api-service'},
  {pattern: '**/*.test.tsx', rule: 'component-testing'},
  {pattern: '**/*.stories.tsx', rule: 'storybook'},
  {pattern: '**/i18n/**', rule: 'i18n'},
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
          <span className="font-display text-ink-dim text-xs tracking-[0.2em]">
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
  <div className="border-line bg-surface overflow-hidden rounded-lg border">
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
            'flex items-center border-l-2 px-4 py-2.5',
            r.active ? 'bg-accent/5 border-l-accent' : 'border-l-transparent'
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
  <>
    <Section id="claude-md">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1fr]">
        <div className="text-ink order-2 space-y-4 md:order-2">
          <SectionHeading id="claude-md">
            Claude Code, configured
          </SectionHeading>
          <p>
            Commands you invoke, hooks that fire, an agent that reviews. The
            active layer of GAIA’s Claude Code integration.
          </p>

          <p>
            <code className="text-accent">/orchestrate</code> plans complex
            features through specialist subagents.{' '}
            <code className="text-accent">/handoff</code> and{' '}
            <code className="text-accent">/pickup</code> let you clear context
            without losing state.
          </p>

          <p>
            Hooks protect main, prevent technical debt, and keep commits clean.
            The <code className="text-accent">code-review-audit</code> agent
            gates every PR merge with security, performance, and architecture
            checks.
          </p>

          <p>
            <a className="text-accent hover:underline" href="/docs/#commands">
              Learn more →
            </a>
          </p>
        </div>

        <div className="order-1 md:order-1">
          <ActiveTriptych />
        </div>
      </div>
    </Section>

    <Section id="conventions">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1fr]">
        <div className="text-ink order-2 space-y-4 md:order-1">
          <SectionHeading id="conventions">
            Claude Code, calibrated
          </SectionHeading>
          <p>
            Project rules and skills load only when Claude is doing matching
            work, so they never bloat the context window. The passive layer.
          </p>

          <p>
            Rules guide coding practices, accessibility, testing, API patterns.{' '}
            <a
              className="text-accent hover:underline"
              href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
              rel="noopener noreferrer"
              target="_blank"
            >
              Karpathy’s
            </a>{' '}
            coding principles are wired in.
          </p>

          <p>
            Skills activate when needed: TypeScript naming, TDD discipline,
            React patterns, Tailwind conventions.
          </p>

          <p>
            <a className="text-accent hover:underline" href="/docs/#rules">
              Learn more →
            </a>
          </p>
        </div>

        <div className="order-1 md:order-2">
          <MatchLedger />
        </div>
      </div>
    </Section>
  </>
);

export default ClaudeMd;

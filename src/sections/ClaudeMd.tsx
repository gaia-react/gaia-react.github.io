import { Section, SectionHeading } from '@/components/Section';

const ACTIVE_TIERS = [
  { eyebrow: 'SLASH', name: '/orchestrate', caption: 'you invoke', accent: true },
  { eyebrow: 'HOOK', name: 'pre-commit', caption: 'fires automatically' },
  { eyebrow: 'AGENT', name: 'code-review-audit', caption: 'gates every merge' },
];

const RULE_ROWS = [
  { pattern: '**/*.tsx', rule: 'react-code', active: true },
  { pattern: '**/*.ts', rule: 'typescript', active: true },
  { pattern: '**/api/**', rule: 'api-service' },
  { pattern: '**/*.test.tsx', rule: 'component-testing' },
  { pattern: '**/*.stories.tsx', rule: 'storybook' },
  { pattern: '**/i18n/**', rule: 'i18n' },
];

function ActiveTriptych() {
  return (
    <div className="space-y-3">
      {ACTIVE_TIERS.map((t) => (
        <div
          key={t.eyebrow}
          className={`rounded-lg border bg-bg-elev p-5 ${
            t.accent ? 'border-accent/60' : 'border-border'
          }`}
        >
          <div className="flex items-baseline justify-between mb-1">
            <span className="font-display text-xs tracking-[0.2em] text-fg-dim">
              {t.eyebrow}
            </span>
            <span className="text-[0.6rem] font-mono uppercase tracking-[0.16em] text-fg-mute">
              {t.caption}
            </span>
          </div>
          <div className={`font-mono text-base ${t.accent ? 'text-accent' : 'text-fg'}`}>
            {t.name}
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchLedger() {
  return (
    <div className="rounded-lg border border-border bg-bg-elev overflow-hidden">
      <div className="bg-bg-elev-2 py-2 px-4 border-b border-border flex items-center justify-between">
        <span className="font-mono text-xs text-fg-dim tracking-[0.05em]">.claude/rules/</span>
        <span className="font-mono text-[0.6rem] text-fg-mute uppercase tracking-[0.16em]">
          on match
        </span>
      </div>
      <div className="divide-y divide-border-soft">
        {RULE_ROWS.map((r) => (
          <div
            key={r.pattern}
            className={`flex items-center px-4 py-2.5 border-l-2 ${
              r.active ? 'bg-accent/5 border-l-accent' : 'border-l-transparent'
            }`}
          >
            <div className="flex-1">
              <code
                className={`font-mono text-xs ${r.active ? 'text-accent-soft' : 'text-fg-mute'}`}
              >
                {r.pattern}
              </code>
            </div>
            <div className="text-fg-mute text-xs px-3">→</div>
            <div className="flex-1 text-right">
              <code
                className={`font-mono text-xs ${r.active ? 'text-fg' : 'text-fg-dim'}`}
              >
                {r.rule}
              </code>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClaudeMd() {
  return (
    <>
      <Section id="claude-md">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-4 text-fg order-2 md:order-2">
            <SectionHeading id="claude-md">Claude Code, configured</SectionHeading>
            <p>
              Commands you invoke, hooks that fire, an agent that reviews. The active
              layer of GAIA's Claude Code integration.
            </p>

            <p>
              <code className="text-accent">/orchestrate</code> plans complex features
              through specialist subagents.{' '}
              <code className="text-accent">/handoff</code> and{' '}
              <code className="text-accent">/pickup</code> let you clear context
              without losing state.
            </p>

            <p>
              Hooks protect main, prevent technical debt, and keep commits clean. The{' '}
              <code className="text-accent">code-review-audit</code> agent gates every
              PR merge with security, performance, and architecture checks.
            </p>

            <p>
              <a href="/docs/#commands" className="text-accent hover:underline">
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
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-start">
          <div className="space-y-4 text-fg order-2 md:order-1">
            <SectionHeading id="conventions">Claude Code, calibrated</SectionHeading>
            <p>
              Project rules and skills load only when Claude is doing matching work,
              so they never bloat the context window. The passive layer.
            </p>

            <p>
              Rules guide coding practices, accessibility, testing, API patterns.{' '}
              <a
                href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Karpathy's
              </a>{' '}
              coding principles are wired in.
            </p>

            <p>
              Skills activate when needed: TypeScript naming, TDD discipline, React
              patterns, Tailwind conventions.
            </p>

            <p>
              <a href="/docs/#rules" className="text-accent hover:underline">
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
}

import { Section } from '@/components/Section';

export default function Why() {
  return (
    <Section id="why" title="Why GAIA">
      <div className="prose prose-invert max-w-none text-[var(--color-fg)]">
        <p className="text-[var(--color-fg-dim)] mb-4">
          Most templates treat Claude as a tool you hold — bolt a CLAUDE.md onto the root and hope
          the model figures out the rest. GAIA treats Claude as an engineer you manage, exposing
          two failure modes the bolt-on approach papers over: you can't predict Claude's output
          without enforceable conventions, and context bloat compounds token costs every session.
        </p>

        <ul className="space-y-4 mb-6">
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Trustworthy by enforcing best practices.</strong> 14 rules encode conventions
              directly; guardrails against technical debt block bad patterns before Claude writes
              them. Code review audits, quality gates, and test-driven development enforce
              standards before merge.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Token-efficient through knowledge discipline.</strong> An Obsidian wiki fetched
              on demand replaces sprawling CLAUDE.md files. 12 session hooks keep the wiki fresh.
              Machine-local memory stays personal; durable knowledge lives in the wiki or rules.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Complete from day zero.</strong> 20+ ESLint plugins, pre-commit hooks, four
              testing layers (unit, integration, E2E, visual), i18n in 2 languages, forms with
              validation, dark mode, and Storybook — all pre-configured and documented for Claude.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

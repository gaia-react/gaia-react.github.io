import { Section } from '@/components/Section';

export default function Why() {
  return (
    <Section id="why" title="Why GAIA">
      <div className="prose prose-invert max-w-none text-[var(--color-fg)]">
        <p className="text-[var(--color-fg-dim)] mb-4">
          Most templates treat Claude as a tool you hold. Bolt a CLAUDE.md onto the root and burn
          through tokens while the model figures out the rest. GAIA integrates Claude as an
          engineer you manage, and solves two of the biggest pain points: you can't predict
          Claude's output without enforceable conventions, and context bloat compounds token costs
          over time.
        </p>

        <ul className="space-y-4 mb-6">
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Trustworthy by enforcing best practices.</strong> 13 rules encode conventions
              directly, and guardrails against technical debt block bad patterns before Claude
              writes them. Code-review audits, quality gates, and test-driven development enforce
              standards before commits and merges.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Token-efficient through knowledge discipline.</strong> An Obsidian wiki
              replaces sprawling CLAUDE.md files, and 12 hooks keep that wiki clean and up to date.
              Durable knowledge lives in the wiki or in rules. Project and machine-local memory
              get audited for duplication and conflicting instructions that would otherwise
              accumulate and waste tokens every session.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>A solid foundation.</strong> 20+ ESLint plugins, pre-commit hooks, four
              testing layers (unit, integration, E2E, visual), i18n, forms with validation, dark
              mode, and Storybook, all pre-configured and documented for Claude.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

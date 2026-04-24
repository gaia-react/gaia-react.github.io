import { Section } from '@/components/Section';

export default function Agents() {
  return (
    <Section id="agents" title="Agents">
      <p className="mb-4 text-[var(--color-fg-dim)]">
        GAIA ships with one specialized agent:
      </p>

      <div className="mb-6 rounded-lg bg-[var(--color-bg-elev)] p-4 border border-[var(--color-border)]">
        <h3 className="mb-3 text-lg font-semibold text-[var(--color-accent)]">code-review-audit</h3>
        <p className="mb-3 text-[var(--color-fg)]">
          Comprehensive audit of your branch's changes: security vulnerabilities, performance
          bottlenecks, code smells, anti-patterns, accessibility issues, and refactoring
          opportunities. Dispatches specialist subagents alongside{' '}
          <a
            href="https://github.com/millionco/react-doctor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            React Doctor
          </a>{' '}
          (47+ React-specific checks for security, performance, correctness, and architecture) in
          parallel, then merges findings into a single report. Goes beyond linting and
          type-checking to reason about data flow, architectural fitness, and intent.
        </p>
        <p className="mb-3 text-[var(--color-fg)]">
          <span className="font-semibold">When it runs:</span> Gated before{' '}
          <code className="text-[var(--color-accent-soft)]">gh pr merge</code> by the{' '}
          <code className="text-[var(--color-accent-soft)]">pr-merge-audit-check.sh</code> hook,
          and also available on demand.
        </p>
        <p className="mb-3 text-[var(--color-fg)]">
          <span className="font-semibold">Extensions:</span> Library-specific review rules live in{' '}
          <code className="text-[var(--color-accent-soft)]">.claude/agents/code-review-audit/</code>{' '}
          (React patterns, TypeScript strictness, Tailwind utilities, form libraries).
        </p>
        <p className="text-[var(--color-fg)]">
          <span className="font-semibold">Why:</span> Every merge reviewed by a second pair of eyes
          without waiting on a human reviewer.
        </p>
      </div>
    </Section>
  );
}

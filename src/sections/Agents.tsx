import { Section } from '@/components/Section';

export default function Agents() {
  return (
    <Section id="agents" title="Agents">
      <p className="mb-4 text-[#a89584]">
        GAIA ships with one specialized agent:
      </p>

      <div className="mb-6 rounded-lg bg-[#221812] p-4 border border-[#3a2a1f]">
        <h3 className="mb-3 text-lg font-semibold text-[#D97757]">code-review-audit</h3>
        <p className="mb-3 text-[#f5ede4]">
          Comprehensive audit of your branch's changes: security vulnerabilities, performance
          bottlenecks, code smells, anti-patterns, accessibility issues, and refactoring
          opportunities. Goes beyond linting and type-checking to reason about data flow,
          architectural fitness, and intent.
        </p>
        <p className="mb-3 text-[#f5ede4]">
          <span className="font-semibold">When it runs:</span> Gated before <code className="text-[#E89275]">gh pr merge</code> by the{' '}
          <code className="text-[#E89275]">pr-merge-audit-check.sh</code> hook; also available on
          demand.
        </p>
        <p className="mb-3 text-[#f5ede4]">
          <span className="font-semibold">Extensions:</span> Library-specific review rules live in{' '}
          <code className="text-[#E89275]">.claude/agents/code-review-audit/</code> — e.g., React
          patterns, TypeScript strictness, Tailwind utilities, form libraries.
        </p>
        <p className="text-[#f5ede4]">
          <span className="font-semibold">Why:</span> Every merge reviewed by a second pair of eyes
          without waiting on a human reviewer.
        </p>
      </div>

      <p className="text-[#a89584]">
        To add your own agent, create <code className="text-[#D97757]">.claude/agents/&lt;name&gt;.md</code> with a{' '}
        <code className="text-[#E89275]">name</code>, <code className="text-[#E89275]">description</code>,
        and implementation steps.
      </p>
    </Section>
  );
}

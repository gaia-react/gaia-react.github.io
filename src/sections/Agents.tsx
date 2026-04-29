import {Section} from '@/components/Section';

const Agents = () => (
  <Section id="agents" title="Agents">
    <p className="text-fg-dim mb-4">GAIA ships with one specialized agent:</p>

    <div className="bg-bg-elev border-border mb-6 rounded-lg border p-4">
      <h3 className="text-accent mb-3 text-lg font-semibold">
        code-review-audit
      </h3>
      <p className="text-fg mb-3">
        Audits your branch’s changes: security vulnerabilities, performance
        bottlenecks, code smells, anti-patterns, accessibility issues, and
        refactoring opportunities. Dispatches specialist subagents alongside{' '}
        <a
          className="text-accent hover:underline"
          href="https://github.com/millionco/react-doctor"
          rel="noopener noreferrer"
          target="_blank"
        >
          React Doctor
        </a>{' '}
        (47+ React-specific checks for security, performance, correctness, and
        architecture) in parallel, then merges findings into a single report.
        Goes beyond linting and type-checking to reason about data flow,
        architecture, and intent.
      </p>
      <p className="text-fg mb-3">
        <span className="font-semibold">When it runs:</span> Gated before{' '}
        <code className="text-accent-soft">gh pr merge</code> by the{' '}
        <code className="text-accent-soft">pr-merge-audit-check.sh</code> hook,
        and also available on demand.
      </p>
      <p className="text-fg mb-3">
        <span className="font-semibold">Extendable:</span> Review rules live in{' '}
        <code className="text-accent-soft">
          .claude/agents/code-review-audit/
        </code>{' '}
        (React patterns, TypeScript strictness, Tailwind utilities, form
        libraries). Add your own as your project grows.
      </p>
      <p className="text-fg">
        <span className="font-semibold">Why:</span> Every merge reviewed by a
        second pair of eyes without waiting on a human reviewer.
      </p>
    </div>
  </Section>
);

export default Agents;

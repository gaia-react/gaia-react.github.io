import { Section } from '@/components/Section';

export default function Commands() {
  return (
    <Section id="commands" title="Commands">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        Slash commands Claude (or you) can invoke to perform specific actions, from scaffolding new features to auditing code quality to managing project lifecycle.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Project Lifecycle</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/init</code> - Initializes a new GAIA project
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/gaia-update</code> - Merges the latest GAIA
          release without overwriting your customizations
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/migrate</code> - Upgrades
          outdated packages and handles any necessary code changes
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Authoring</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/new-route</code> - Scaffold a new route
          with its page component and test
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-component</code> - Scaffold a new React
          component with optional story
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-hook</code> - Scaffold a new custom
          React hook with a test
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-service</code> - Scaffold a new API
          service with schemas and mock handlers
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Quality</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/audit-code</code> - Run the quality gate:
          simplify code, typecheck, lint, and run tests
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/audit-knowledge</code> - Audit memory,
          wiki, and auto-loaded context files for duplication and/or conflicting knowledge
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Session</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/handoff</code> - Generate a comprehensive
          session handoff document so you can clear the context with confidence that nothing will
          get lost
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/pickup</code> - Restore context from
          handoff and continue work
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Optional Features</h3>
      <ul className="space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/setup-chromatic-mcp</code> - Install and
          register the Chromatic MCP server for Storybook integration
        </li>
      </ul>
    </Section>
  );
}

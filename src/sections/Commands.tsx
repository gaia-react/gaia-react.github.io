import { Section } from '@/components/Section';

export default function Commands() {
  return (
    <Section id="commands" title="Commands" paddingTop="2rem">
      <p className="mb-6 text-fg-dim">
        Slash commands for scaffolding, quality, session management, and project lifecycle.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-fg">Project Lifecycle</h3>
      <ul className="mb-6 space-y-2 text-fg">
        <li>
          <code className="text-accent">/init</code> - Initializes a new GAIA project
        </li>
        <li>
          <code className="text-accent">/update-gaia</code> - Merges the latest GAIA
          release without overwriting your customizations
        </li>
        <li>
          <code className="text-accent">/update-deps</code> - Upgrades
          outdated packages and handles any necessary code changes
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-fg">Authoring</h3>
      <ul className="mb-6 space-y-2 text-fg">
        <li>
          <code className="text-accent">/orchestrate</code> - Plan a complex
          feature. Claude structures the work, you approve, then an orchestrator drives focused subagents through execution
        </li>
        <li>
          <code className="text-accent">/new-route</code> - Scaffold a new route
          with its page component and test
        </li>
        <li>
          <code className="text-accent">/new-component</code> - Scaffold a new React
          component with optional story
        </li>
        <li>
          <code className="text-accent">/new-hook</code> - Scaffold a new custom
          React hook with a test
        </li>
        <li>
          <code className="text-accent">/new-service</code> - Scaffold a new API
          service with schemas and mock handlers
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-fg">Quality</h3>
      <ul className="mb-6 space-y-2 text-fg">
        <li>
          <code className="text-accent">/audit-code</code> - Run the quality gate:
          simplify code, typecheck, lint, and run tests
        </li>
        <li>
          <code className="text-accent">/audit-knowledge</code> - Audit memory,
          wiki, and auto-loaded context files for duplication and/or conflicting knowledge
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-fg">Session</h3>
      <ul className="mb-6 space-y-2 text-fg">
        <li>
          <code className="text-accent">/handoff</code> - Generate a session handoff
          document so you can clear context without losing anything
        </li>
        <li>
          <code className="text-accent">/pickup</code> - Restore context from
          handoff and continue work
        </li>
      </ul>
    </Section>
  );
}

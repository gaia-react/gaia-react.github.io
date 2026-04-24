import { Section } from '@/components/Section';

export default function Commands() {
  return (
    <Section id="commands" title="Commands">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        Slash commands you (or Claude) can invoke in Claude Code.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Project Lifecycle</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/gaia-init</code> — Initialize a new project from
          the GAIA React template
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/gaia-update</code> — Pull the latest GAIA release
          into this project without clobbering customizations
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/gaia-release</code> <span className="text-[var(--color-fg-dim)]">(maintainer-only)</span> — Cut a new GAIA release
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/migrate</code> — Upgrade a supported package to
          its latest version
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Authoring</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/new-route</code> — Scaffold a new route with its
          page component and test
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-component</code> — Scaffold a new React
          component with optional story
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-hook</code> — Scaffold a new custom React
          hook with a test
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/new-service</code> — Scaffold a new API service
          with schemas and mock handlers
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Quality</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/audit-code</code> — Run the quality gate: linting,
          types, tests, builds
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/audit-knowledge</code> — Audit memory, wiki, and
          auto-loaded files for duplication
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Session</h3>
      <ul className="mb-6 space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/handoff</code> — Generate a comprehensive session
          handoff document
        </li>
        <li>
          <code className="text-[var(--color-accent)]">/pickup</code> — Restore context from handoff and
          continue work
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Setup</h3>
      <ul className="space-y-2 text-[var(--color-fg)]">
        <li>
          <code className="text-[var(--color-accent)]">/setup-chromatic-mcp</code> — Install and register
          the Chromatic MCP server for Storybook integration
        </li>
      </ul>
    </Section>
  );
}

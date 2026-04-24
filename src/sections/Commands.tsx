import { Section } from '@/components/Section';

export default function Commands() {
  return (
    <Section id="commands" title="Commands">
      <p className="mb-6 text-[#a89584]">
        Slash commands you (or Claude) can invoke in Claude Code.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[#f5ede4]">Project Lifecycle</h3>
      <ul className="mb-6 space-y-2 text-[#f5ede4]">
        <li>
          <code className="text-[#D97757]">/gaia-init</code> — Initialize a new project from
          the GAIA React template
        </li>
        <li>
          <code className="text-[#D97757]">/gaia-update</code> — Pull the latest GAIA release
          into this project without clobbering customizations
        </li>
        <li>
          <code className="text-[#D97757]">/gaia-release</code> <span className="text-[#a89584]">(maintainer-only)</span> — Cut a new GAIA release
        </li>
        <li>
          <code className="text-[#D97757]">/migrate</code> — Upgrade a supported package to
          its latest version
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[#f5ede4]">Authoring</h3>
      <ul className="mb-6 space-y-2 text-[#f5ede4]">
        <li>
          <code className="text-[#D97757]">/new-route</code> — Scaffold a new route with its
          page component and test
        </li>
        <li>
          <code className="text-[#D97757]">/new-component</code> — Scaffold a new React
          component with optional story
        </li>
        <li>
          <code className="text-[#D97757]">/new-hook</code> — Scaffold a new custom React
          hook with a test
        </li>
        <li>
          <code className="text-[#D97757]">/new-service</code> — Scaffold a new API service
          with schemas and mock handlers
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[#f5ede4]">Quality</h3>
      <ul className="mb-6 space-y-2 text-[#f5ede4]">
        <li>
          <code className="text-[#D97757]">/audit-code</code> — Run the quality gate: linting,
          types, tests, builds
        </li>
        <li>
          <code className="text-[#D97757]">/audit-knowledge</code> — Audit memory, wiki, and
          auto-loaded files for duplication
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[#f5ede4]">Session</h3>
      <ul className="mb-6 space-y-2 text-[#f5ede4]">
        <li>
          <code className="text-[#D97757]">/handoff</code> — Generate a comprehensive session
          handoff document
        </li>
        <li>
          <code className="text-[#D97757]">/pickup</code> — Restore context from handoff and
          continue work
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[#f5ede4]">Setup</h3>
      <ul className="space-y-2 text-[#f5ede4]">
        <li>
          <code className="text-[#D97757]">/setup-chromatic-mcp</code> — Install and register
          the Chromatic MCP server for Storybook integration
        </li>
      </ul>
    </Section>
  );
}

import {Section} from '@/components/Section';

const Mcp = () => (
  <Section id="mcp" title="MCP servers">
    <p className="text-ink-dim mb-6">
      MCP (Model Context Protocol) servers extend Claude with capabilities that
      live outside the project, registered globally for the user once and reused
      across every GAIA project.
    </p>

    <div className="bg-surface border-line mb-6 rounded-lg border p-4">
      <h3 className="text-accent mb-3 text-lg font-semibold">Serena</h3>
      <p className="text-ink mb-3">
        LSP-backed semantic code intelligence. Symbol search, find references,
        replace symbol body, and type lookups, all routed through language
        servers instead of grep. A symbol query returns the one definition, not
        every line that mentions the name.
      </p>
      <p className="text-ink mb-3">
        <span className="font-semibold">When it runs:</span> Routed by the{' '}
        <code className="text-accent-soft">code-search</code> rule when Claude
        needs symbol-level operations on TypeScript or TSX. Falls back to grep
        only for non-symbol queries (literal strings, log lines, comments).
      </p>
      <p className="text-ink mb-3">
        <span className="font-semibold">Setup:</span> Registered globally by{' '}
        <code className="text-accent-soft">/gaia-init</code> via{' '}
        <code className="text-accent-soft">claude mcp add</code>. Requires{' '}
        <a
          className="text-accent hover:underline"
          href="https://astral.sh/uv"
          rel="noopener noreferrer"
          target="_blank"
        >
          uv
        </a>{' '}
        on the host (Astral&apos;s Python toolchain runner).
      </p>
      <p className="text-ink">
        <span className="font-semibold">Why:</span> A symbol-aware query costs a
        fraction of a grep-and-read pass and returns a precise answer instead
        of a long list of substring hits. The grep-and-read tax disappears.
      </p>
    </div>
  </Section>
);

export default Mcp;

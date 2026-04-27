import { Section } from '@/components/Section';

export default function ObsidianWiki() {
  return (
    <Section id="wiki" title="Your project's second brain">
      <div className="space-y-4 text-fg">
        <p>
          With an Obsidian wiki, Claude understands what you are actually building, not just the
          code in front of it. Product features, user flows, design rationale, business decisions,
          architecture, and dependencies all live as focused markdown pages committed to git, not
          chat history, not machine-local memory.
        </p>

        <p>
          The wiki updates itself as the project evolves. Claude only reads the specific
          information a task needs instead of deriving the answer from source code every time.
        </p>

        <p>
          Token costs do not balloon as the wiki gets richer. A project with 1,000 pages of
          context is no more expensive to work in than one with 10.
        </p>

        <p>
          <strong>Why Obsidian?</strong> Its local markdown vault has become the de facto choice
          for AI-augmented knowledge bases. GAIA{' '}
          <a
            href="https://github.com/AgriciDaniel/claude-obsidian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            integrates with Obsidian
          </a>{' '}
          so the project's knowledge persists, compounds, and stays yours.
        </p>

        <p>
          <strong>Domain isolation is mandatory.</strong> Technical, branding, and business
          knowledge are kept siloed, and Claude does not cross-load between them unless a task
          genuinely spans more than one.
        </p>
      </div>
    </Section>
  );
}

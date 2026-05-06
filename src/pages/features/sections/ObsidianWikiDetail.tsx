import {Section} from '@/components/Section';

const ObsidianWikiDetail = () => (
  <Section id="wiki" title="A second brain for Claude">
    <div className="text-ink space-y-4">
      <p>
        With an Obsidian wiki, Claude understands what you are actually
        building, not just the code in front of it. Product features, user
        flows, design rationale, business decisions, architecture, and
        dependencies all live as focused markdown pages committed to git, not
        chat history, not machine-local memory.
      </p>

      <p>
        GAIA ships with the{' '}
        <a
          className="text-accent hover:underline"
          href="https://github.com/AgriciDaniel/claude-obsidian"
          rel="noopener noreferrer"
          target="_blank"
        >
          claude-obsidian
        </a>{' '}
        integration wired up. The vault structure, the ingestion commands, and
        the maintenance skills are configured before you write your first page.
      </p>

      <p>
        On top of the integration, GAIA layers project-specific commands and
        hooks that turn the wiki into a self-maintaining knowledge base. Every
        commit is evaluated for wiki-worthy content and synced automatically.
        When a SPEC lands and its PR merges, GAIA promotes the SPEC outcomes
        directly into the wiki. When a domain accumulates enough pages, a
        gate-triggered consolidation pass detects supersession, redundancy,
        reversed decisions, and near-collision slugs before they compound. A
        lint pass then flags orphan pages, dead links, and drift. None of this
        is a feature you invoke. It is a discipline you get.
      </p>

      <p>
        Token costs do not balloon as the wiki gets richer. Claude only reads
        the specific information a task needs, so a project with 1,000 pages of
        context is no more expensive to work in than one with 10.
      </p>

      <p>
        <strong>Why Obsidian?</strong> A local markdown vault means the
        project’s knowledge persists, compounds, and stays yours, not held in a
        vendor’s database or trapped in chat history.
      </p>

      <p>
        <strong>Domain isolation is mandatory.</strong> Technical, branding, and
        business knowledge are kept siloed, and Claude does not cross-load
        between them unless a task genuinely spans more than one.
      </p>
    </div>
  </Section>
);

export default ObsidianWikiDetail;

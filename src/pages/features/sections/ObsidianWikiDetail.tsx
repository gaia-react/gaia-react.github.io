import type {ReactNode} from 'react';
import ObsidianNote from './figures/ObsidianNote';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'GAIA keeps the wiki current without you managing it. Commits are evaluated for wiki-worthy content and synced automatically. Consolidation passes catch redundancy and reversed decisions before they compound. Lint sweeps flag orphan pages, dead links, and drift. None of this is a feature you invoke. It is a discipline you get.',
    name: 'Self-maintaining knowledge base',
  },
  {
    desc: 'Token costs do not balloon as the wiki gets richer. Claude only reads the specific information a task needs, so a project with 1,000 pages of context is no more expensive to work in than one with 100.',
    name: 'Token costs don’t balloon',
  },
  {
    desc: 'A local markdown vault means the project’s knowledge persists, compounds, and stays yours, not held in a vendor’s database or trapped in chat history.',
    name: 'Why Obsidian?',
  },
  {
    desc: 'Technical, branding, and business knowledge stay siloed. GAIA keeps the domains separate, loading across them only when a task genuinely spans more than one.',
    name: 'Domain isolation is mandatory',
  },
];

const ObsidianWikiDetail = () => (
  <FxSection
    id="wiki"
    lead={
      <>
        <p>
          With an Obsidian wiki, Claude understands what you are actually
          building, not just the code in front of it. Product features, user
          flows, design rationale, business decisions, architecture, and
          dependencies all live as focused markdown pages committed to git, not
          CLAUDE.md, not chat history, not machine-local memory.
        </p>
        <p>
          {'GAIA comes with the '}
          <a
            className="text-accent hover:text-accent-soft transition-colors duration-150"
            href="https://github.com/AgriciDaniel/claude-obsidian"
            rel="noopener noreferrer"
            target="_blank"
          >
            claude-obsidian
          </a>
          {
            ' integration already set up. On top of it, GAIA’s custom tooling keeps the wiki organized and up to date as your project grows, with nothing for you to maintain.'
          }
        </p>
      </>
    }
    title="A second brain for Claude"
  >
    <ObsidianNote />
    <PointList points={POINTS} />
  </FxSection>
);

export default ObsidianWikiDetail;

import type {ReactNode} from 'react';
import ObsidianNote from './figures/ObsidianNote';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'Claude writes to the wiki as work lands. When planned work merges, what it settled goes into the wiki in the same pull request. A quick fix or a decision changed along the way can still slip past, and the statusline flags the drift. /gaia-wiki catches the wiki up, consolidates redundancy and reversed decisions before they compound, and fixes orphan pages and dead links, all in one pull request.',
    name: 'A knowledge base that stays current',
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
          The wiki is an Obsidian vault committed to git. GAIA&apos;s tooling
          keeps it organized as your project grows: a statusline nudge says when
          it needs attention, and one /gaia-wiki command brings it current.
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

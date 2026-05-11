import type {ReactNode} from 'react';
import TokenGraphic from './figures/TokenGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: "Claude loads the ones that match what it's editing, nothing else.",
    name: 'Rules are scoped to activate only when needed',
  },
  {
    desc: 'Project knowledge lives as focused, linked Markdown pages. Claude reads only what it needs ("How does dark mode wire through?") instead of preloading the whole manual.',
    name: 'Obsidian wiki, fetched on demand',
  },
  {
    desc: "Session hooks keep Obsidian's workflow (ingest cadence, cache discipline, link hygiene) aligned with the project's conventions.",
    name: 'Wiki behavior tailored to GAIA',
  },
  {
    desc: 'Sweeps memory, wiki, and autoloaded files for duplication, conflicts, and stale instructions before they start wasting tokens.',
    name: 'Periodic knowledge audit',
  },
  {
    desc: (
      <>
        <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
          /gaia handoff
        </code>
        and
        <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
          /gaia pickup
        </code>
        replace re-briefing Claude from scratch at every session start.
      </>
    ),
    name: 'Session continuity',
  },
  {
    desc: (
      <>
        <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
          /gaia plan
        </code>
        runs each phase using focused subagents with only the context they need.
        No accumulated history, no stale assumptions. Each agent starts fresh
        and stays cheap.
      </>
    ),
    name: 'Task orchestration in clean subagent contexts',
  },
  {
    desc: (
      <>
        <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
          /gaia spec
        </code>
        runs in its own context, separate from implementation. GAIA&apos;s
        Socratic layer wraps{' '}
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="https://github.com/github/spec-kit"
        >
          spec-kit
        </a>
        : one question at a time, an immutable SPEC artifact, then a chain into
        <code className="text-ink bg-surface rounded-sm pr-0.5 pl-1.5 text-[0.875em]">
          /gaia plan
        </code>
        . The artifact is the handoff between sessions, not accumulated context.
      </>
    ),
    name: 'Spec discovery in isolated context',
  },
  {
    desc: (
      <>
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="https://github.com/oraios/serena"
        >
          Serena MCP
        </a>{' '}
        gives Claude LSP-backed symbol search, references, and types. A symbol
        query returns the one definition, not every line that mentions the name.
        The grep-and-read tax disappears.
      </>
    ),
    name: 'Symbol-aware code intelligence over grep',
  },
];

const TokenEconomics = () => (
  <FxSection
    id="tokens"
    isCool={true}
    lead={
      <>
        <p>
          Context bloat isn&apos;t just CLAUDE.md sprawl. Instructions get
          dropped into global memory, forgotten, and accumulate into
          redundancies and conflicts, an invisible cost that compounds every
          session.
        </p>
        <p>GAIA keeps token usage minimal by design.</p>
      </>
    }
    title="How GAIA keeps Claude token-efficient"
  >
    <TokenGraphic />
    <PointList points={POINTS} />
  </FxSection>
);

export default TokenEconomics;

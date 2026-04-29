import {Section} from '@/components/Section';

const POINTS = [
  {
    desc: 'Claude loads the ones that match what it’s editing, nothing else.',
    name: 'Rules are scoped to activate only when needed',
  },
  {
    desc: 'Project knowledge lives as focused, linked Markdown pages. Claude opens the one page it needs ("How does dark mode wire through?") instead of preloading the whole manual.',
    name: 'Obsidian wiki, fetched on demand',
  },
  {
    desc: 'Session hooks keep Obsidian’s workflow (ingest cadence, cache discipline, link hygiene) aligned with the project’s conventions.',
    name: 'Wiki behavior tailored to GAIA',
  },
  {
    desc: 'Sweeps memory, wiki, and autoloaded files for duplication, conflicts, and stale instructions before they start costing tokens.',
    name: 'Periodic knowledge audit',
  },
  {
    desc: '/handoff and /pickup replace re-briefing Claude from scratch at every session start.',
    name: 'Session continuity',
  },
];

const TokenEconomics = () => (
  <Section id="tokens" title="Token economics">
    <div className="text-ink space-y-6">
      <p>
        Context bloat isn’t just CLAUDE.md sprawl. Instructions get dropped into
        global memory, forgotten, and accumulate into redundancies and
        conflicts, an invisible cost that compounds every session. GAIA keeps
        token usage minimal by design.
      </p>

      <h3 className="text-ink pt-2 text-xl font-semibold">
        How GAIA keeps Claude token-efficient
      </h3>

      <ul className="space-y-3">
        {POINTS.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span className="text-ink-dim">
              <strong className="text-ink">{name}.</strong> {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default TokenEconomics;

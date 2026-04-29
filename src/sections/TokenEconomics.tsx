import { Section } from '@/components/Section';

const POINTS = [
  {
    name: 'Rules are scoped to activate only when needed',
    desc: "Claude loads the ones that match what it's editing, nothing else.",
  },
  {
    name: 'Obsidian wiki, fetched on demand',
    desc: 'Project knowledge lives as focused, linked Markdown pages. Claude opens the one page it needs ("How does dark mode wire through?") instead of preloading the whole manual.',
  },
  {
    name: 'Wiki behavior tailored to GAIA',
    desc: "Session hooks keep Obsidian's workflow (ingest cadence, cache discipline, link hygiene) aligned with the project's conventions.",
  },
  {
    name: 'Periodic knowledge audit',
    desc: 'Sweeps memory, wiki, and autoloaded files for duplication, conflicts, and stale instructions before they start costing tokens.',
  },
  {
    name: 'Session continuity',
    desc: '/handoff and /pickup replace re-briefing Claude from scratch at every session start.',
  },
];

export default function TokenEconomics() {
  return (
    <Section id="tokens" title="Token economics">
      <div className="space-y-6 text-fg">
        <p>
          Context bloat isn't just CLAUDE.md sprawl. Instructions get dropped into global memory,
          forgotten, and accumulate into redundancies and conflicts, an invisible cost that
          compounds every session. GAIA keeps token usage minimal by design.
        </p>

        <h3 className="font-semibold text-fg text-xl pt-2">How GAIA keeps Claude token-efficient</h3>

        <ul className="space-y-3">
          {POINTS.map(({ name, desc }) => (
            <li key={name} className="flex gap-3">
              <span className="text-accent shrink-0 mt-0.5">•</span>
              <span className="text-fg-dim">
                <strong className="text-fg">{name}.</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

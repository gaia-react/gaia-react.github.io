import { Section } from '@/components/Section';

const PATTERNS = [
  {
    name: 'Reflection',
    impl: 'Code-review audit evaluates every branch diff for security, performance, and antipatterns; quality gate enforces clean output before every commit.',
  },
  {
    name: 'ReAct',
    impl: 'Claude consults the Obsidian wiki before acting, uses ESLint / Vitest / Playwright as observation tools, and iterates until gates pass.',
  },
  {
    name: 'Planning',
    impl: 'For complex features, /orchestrate plans the work and dispatches focused subagents through each phase, keeping context tight and token usage low.',
  },
  {
    name: 'Multi-Agent',
    impl: 'Code-review audit spawns three specialist subagents in parallel. The orchestrator pattern dispatches implementation agents across phases.',
  },
];

const PRINCIPLES = [
  {
    name: 'Autonomy',
    impl: 'Rules encode project conventions directly so Claude makes consistent decisions.',
  },
  {
    name: 'Tool Use',
    impl: 'ESLint, Vitest, Playwright, and MSW are Claude\'s observation layer.',
  },
  {
    name: 'Memory & Context',
    impl: 'The Obsidian wiki and /handoff + /pickup provide persistent memory across sessions.',
  },
  {
    name: 'Exception Handling & Recovery',
    impl: 'GAIA\'s gates catch failures where they occur and surface errors for Claude to fix.',
  },
];

export default function AgenticDesign() {
  return (
    <Section id="agentic-design" title="Agentic design">
      <p className="mb-8 text-fg-dim">
        Agentic design is about AI that works toward goals. All four foundational patterns are{' '}
        <strong className="text-fg font-semibold">first-class in GAIA</strong>.
      </p>

      <div className="mb-8 overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-elev">
              <th className="px-4 py-3 text-left font-semibold text-fg-dim uppercase tracking-wider text-xs w-32">
                Pattern
              </th>
              <th className="px-4 py-3 text-left font-semibold text-fg-dim uppercase tracking-wider text-xs">
                How GAIA implements it
              </th>
            </tr>
          </thead>
          <tbody>
            {PATTERNS.map((row, i) => (
              <tr
                key={row.name}
                className={i < PATTERNS.length - 1 ? 'border-b border-border' : ''}
              >
                <td className="px-4 py-4 align-top font-semibold text-accent whitespace-nowrap">
                  {row.name}
                </td>
                <td className="px-4 py-4 align-top text-fg">
                  {row.impl}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-fg-dim">
        Each principle is structural, not advisory:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PRINCIPLES.map((p) => (
          <div key={p.name} className="rounded-lg bg-bg-elev border border-border px-4 py-3">
            <span className="block text-sm font-semibold text-accent mb-1">{p.name}</span>
            <span className="text-sm text-fg">{p.impl}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

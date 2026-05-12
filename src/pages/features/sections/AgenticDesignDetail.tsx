type Pattern = {
  body: string;
  name: string;
};

const WORKFLOW: Pattern[] = [
  {
    body: 'Plans are durable artifacts requiring user approval, produced before any work begins: task graph, execution playbook, kickoff prompt.',
    name: 'Planning',
  },
  {
    body: 'Five tiers so Claude stops relearning the codebase: wiki, hot cache, handoff snapshots, per-agent memory, cross-project memory.',
    name: 'Memory & Knowledge Base',
  },
  {
    body: 'Mechanical work runs on Sonnet or Haiku. Heavier reasoning routes to Opus when the cost is merited.',
    name: 'Resource-Aware Optimization',
  },
  {
    body: "Sub-agents run in fresh contexts so shared state can't corrupt their work. Git-worktree branches add filesystem-level isolation when needed.",
    name: 'Session Isolation',
  },
];

const CONTEXT: Pattern[] = [
  {
    body: 'Serena MCP gives Claude LSP-backed symbol search. A query returns the one definition, not every line that mentions the name.',
    name: 'Symbol-Aware Retrieval',
  },
  {
    body: 'Skills load by trigger, not by default. They sit on disk without burning a token until the matching phrase appears.',
    name: 'Skill Activation',
  },
  {
    body: 'Claude pulls facts from the wiki on demand. A hot cache primes at session start; deeper questions trigger explicit retrieval.',
    name: 'Knowledge Retrieval',
  },
  {
    body: 'Path-scoped rules auto-load only when Claude is editing matching files. Conditional hooks route commands to the right gate.',
    name: 'Routing',
  },
];

const TOOLING: Pattern[] = [
  {
    body: "Six checkpoints between Claude's intent and impact. Quality gate, code-review audit, plan approval, phase gates, destructive-command block, merge confirmation.",
    name: 'Human-in-the-Loop',
  },
  {
    body: 'Defense in depth. Secrets blocked from read or write. Debt patterns rejected at the source. The audit covers XSS, SSRF, IDOR, and dep vulns.',
    name: 'Guardrails & Safety',
  },
  {
    body: 'Independent work runs concurrently. Audit subagents fan out from a single dispatch. Plan phases run in parallel where dependencies allow.',
    name: 'Parallelization',
  },
  {
    body: 'A curated React-specific tool surface. Linting, types, unit and E2E tests, visual regression, mocking, the GitHub CLI, the wiki.',
    name: 'Tool Use',
  },
];

type Cluster = {
  color: string;
  items: Pattern[];
  title: string;
};

const CLUSTERS: Cluster[] = [
  {
    color: 'var(--color-accent-soft)',
    items: WORKFLOW,
    title: 'Workflow control',
  },
  {
    color: 'var(--color-secondary-soft)',
    items: CONTEXT,
    title: 'Context engineering',
  },
  {
    color: 'var(--color-warn-soft)',
    items: TOOLING,
    title: 'Tooling and safety',
  },
];

const pad = (n: number) => String(n + 1).padStart(2, '0');

const AgenticDesignDetail = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b py-20"
    id="agentic-design"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mb-14 grid items-start gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
          <a className="text-inherit no-underline" href="#agentic-design">
            Agentic design
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
        <div className="text-ink-dim text-[1.05rem] leading-[1.65]">
          <p>
            GAIA wires design patterns into hooks, agents, rules, commands, and
            wiki conventions, so they run the same way every session, every
            agent, every model variant. Not emergent behavior. Not prompts you
            repeat. The discipline lives in the project.
          </p>
        </div>
      </div>

      {/* Pattern matrix — 3 clusters × 4 patterns, aligned rows via subgrid */}
      <div className="border-line-soft bg-surface grid overflow-hidden rounded-lg border md:grid-cols-3 md:grid-rows-[repeat(5,auto)]">
        {CLUSTERS.map((cluster, colIndex) => {
          const isLastCol = colIndex === CLUSTERS.length - 1;

          return (
            <div
              key={cluster.title}
              className={`grid md:row-span-5 md:grid-rows-subgrid ${
                isLastCol ? '' : (
                  'border-line-soft border-b md:border-r md:border-b-0'
                )
              }`}
            >
              <div className="border-line-soft border-b px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span
                    aria-hidden={true}
                    className="inline-block h-1.5 w-6"
                    style={{background: cluster.color}}
                  />
                  <span className="text-ink font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                    {cluster.title}
                  </span>
                </div>
              </div>
              {cluster.items.map(({body, name}, index) => {
                const isLastRow = index === cluster.items.length - 1;

                return (
                  <div
                    key={name}
                    className={`p-5 ${isLastRow ? '' : 'border-line-soft border-b'}`}
                  >
                    <div className="text-muted mb-2 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                      {pad(index)}
                    </div>
                    <h3 className="text-ink mb-1.5 text-[0.98rem] font-medium tracking-[-0.005em]">
                      {name}
                    </h3>
                    <p className="text-ink-dim text-[0.87rem] leading-[1.55]">
                      {body}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AgenticDesignDetail;

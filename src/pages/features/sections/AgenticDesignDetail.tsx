import type React from 'react';

type Pattern = {
  body: string;
  name: string;
};

const QUALITY: Pattern[] = [
  {
    body: "Claude can't ship broken code. Pre-tool-use hooks block destructive git, watch-mode tests, force-pushes to main, and eslint-config edits before they happen. Pre-commit hooks gate every commit.",
    name: 'The Stop Hook',
  },
  {
    body: 'Two blocking review layers before merge. The Quality Gate runs typecheck, lint, tests, and build. The code-review audit tiers findings as Critical, Important, and Suggestions, and blocks the merge.',
    name: 'Reflection',
  },
  {
    body: 'A specialist for every concern, dispatched in parallel and working as a team to find and fix issues.',
    name: 'Multi-Agent Collaboration',
  },
  {
    body: 'Specs become user-acceptance tests before code is written. UATs are written into red-state Playwright E2E tests.',
    name: 'Specification-Driven Development',
  },
];

const WORKFLOW: Pattern[] = [
  {
    body: 'Plans are durable artifacts requiring user approval. Per-task docs, a task graph with phases, an execution playbook, and a kickoff prompt all land before any work begins. The plan executes when you say go.',
    name: 'Planning',
  },
  {
    body: 'Five tiers so Claude stops relearning your codebase. Wiki for long-term knowledge, hot cache, handoff snapshots, per-agent memory, and user memory across projects. The wiki maintains itself, with audits sweeping for duplication and orphans before they compound.',
    name: 'Memory & Knowledge Base',
  },
  {
    body: 'Cost and quality discipline wired in. Mechanical work runs on Sonnet or Haiku to keep tokens cheap. Heavier reasoning routes to Opus when the cost is merited.',
    name: 'Resource-Aware Optimization',
  },
  {
    body: "Sub-agents run in fresh contexts so shared state can't corrupt their work. Each task doc is self-contained. Git-worktree branches add filesystem-level isolation when needed.",
    name: 'Session Isolation',
  },
];

const CONTEXT: Pattern[] = [
  {
    body: 'Code intelligence runs through Serena MCP, an LSP-backed tool registered once and reused across every GAIA project. A symbol query returns the one definition, not every line that mentions the name. The grep-and-read tax disappears.',
    name: 'Symbol-Aware Retrieval',
  },
  {
    body: "Skills load by trigger, not by default. The harness reads each skill's description and fires the matching one when its trigger phrase appears. They sit on disk without burning a token until they're needed.",
    name: 'Skill Activation',
  },
  {
    body: 'Claude pulls facts from the wiki on demand instead of carrying them in context. A hot cache primes at session start. Deeper questions trigger explicit retrieval, with citations attached to the answer.',
    name: 'Knowledge Retrieval',
  },
  {
    body: 'Constraints route to context, not loaded globally. Path-scoped rules auto-load only when Claude is editing matching files. Conditional hooks route commands to the right gate.',
    name: 'Routing',
  },
];

const TOOLING: Pattern[] = [
  {
    body: "Six structurally enforced checkpoints between Claude's intent and impact. Quality Gate, code-review audit, plan approval, phase gates, destructive-command blocking, merge confirmation. None of them can be skipped.",
    name: 'Human-in-the-Loop',
  },
  {
    body: 'Defense in depth, layered from the filesystem up. Secrets and credentials are blocked from being read or written. Debt-accumulating patterns are rejected at the source. The audit covers XSS, SSRF, IDOR, and dependency vulnerabilities.',
    name: 'Guardrails & Safety',
  },
  {
    body: 'Independent work runs concurrently. Audit specialists fan out from a single dispatch. Plan phases run in parallel where dependencies allow.',
    name: 'Parallelization',
  },
  {
    body: 'A curated React-specific tool surface. Linting, types, unit and E2E tests, visual regression, mocking, the GitHub CLI, and the Obsidian wiki.',
    name: 'Tool Use',
  },
];

type Cluster = {
  color: string;
  hoverBorder: string;
  items: Pattern[];
  title: string;
};

const CLUSTERS: Cluster[] = [
  {
    color: 'var(--color-accent)',
    hoverBorder: 'hover:border-accent/35',
    items: QUALITY,
    title: 'Quality enforcement',
  },
  {
    color: 'var(--color-secondary)',
    hoverBorder: 'hover:border-secondary/35',
    items: WORKFLOW,
    title: 'Workflow control',
  },
  {
    color: 'var(--color-warn)',
    hoverBorder: 'hover:border-warn/35',
    items: CONTEXT,
    title: 'Context engineering',
  },
  {
    color: '#cccbc4',
    hoverBorder: 'hover:border-muted/35',
    items: TOOLING,
    title: 'Tooling and safety',
  },
];

const AgenticDesignDetail = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b py-20"
    id="agentic-design"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      {/* Section head */}
      <div className="mb-12 grid items-start gap-6 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <h2
          className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]"
          data-reveal={true}
        >
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
        <div
          className="text-ink-dim text-[1.05rem] leading-[1.65]"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          <p>
            GAIA wires in design patterns through hooks, agents, rules,
            commands, and wiki conventions, so they run the same way every
            session, every agent, every model variant. Not as emergent model
            behavior on top of a vanilla setup. Not as prompts you have to
            repeat. The discipline lives in the project.
          </p>
        </div>
      </div>

      {/* Clusters */}
      <div className="flex flex-col gap-18">
        {CLUSTERS.map(({color, hoverBorder, items, title}) => (
          <div key={title} className="border-line-soft border-t pt-8">
            {/* Cluster head — always left-aligned */}
            <div className="mb-7">
              <h3 className="font-display text-ink text-[clamp(1.4rem,2.4vw,1.85rem)] font-normal tracking-[-0.015em]">
                {title}
              </h3>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {items.map(({body, name}) => (
                <div
                  key={name}
                  className={`bg-surface border-line-soft rounded-lg border p-[1.4rem_1.4rem_1.5rem] transition-[border-color,transform] duration-150 hover:-translate-y-px ${hoverBorder}`}
                >
                  <h4
                    className="mb-2 text-[1rem] font-medium tracking-[-0.005em]"
                    style={{color}}
                  >
                    {name}
                  </h4>
                  <p className="text-ink-dim m-0 text-[0.92rem] leading-[1.6]">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AgenticDesignDetail;

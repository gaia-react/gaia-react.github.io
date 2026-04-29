import { Section } from '@/components/Section';

type Pattern = {
  name: string;
  body: string;
};

const HEADLINE: Pattern[] = [
  {
    name: 'The Stop Hook',
    body: "Claude can't ship broken code. Pre-tool-use hooks block destructive git, watch-mode tests, force-pushes to main, and eslint-config edits before they happen. Pre-commit hooks gate every commit on typecheck, lint, tests, and build.",
  },
  {
    name: 'Reflection',
    body: 'Two blocking review layers before merge. The Quality Gate (typecheck, lint, test, build) loops until clean. The code-review audit tiers findings as Critical, Important, and Suggestions and blocks every merge.',
  },
  {
    name: 'Memory Management',
    body: 'Five tiers so Claude stops relearning your codebase. Wiki for long-term, hot cache for session start, /handoff and /pickup for episodic, agent memory across reviews, user memory across projects. /audit-knowledge sweeps for duplication and bloat.',
  },
  {
    name: 'Multi-Agent Collaboration',
    body: 'A specialist for every concern, dispatched in parallel. The code-review audit dispatches React Patterns, TypeScript and Architecture, Translation, and react-doctor specialists from a single tool call. Extension files inject library-specific rules into the right specialist at runtime.',
  },
];

const SUPPLEMENTARY: Pattern[] = [
  {
    name: 'Routing',
    body: 'Constraints route to context, not loaded globally. Path-scoped rules auto-load only when Claude is editing matching files. Conditional Bash hooks route commands to specific scripts based on shape.',
  },
  {
    name: 'Resource-Aware Optimization',
    body: 'Cost and quality discipline wired in. /audit-knowledge runs research on Opus with ultrathink and the mechanical apply step on Sonnet. The code-review audit declares model: sonnet for structured review, leaving Opus for harder reasoning.',
  },
  {
    name: 'Planning',
    body: 'Plans are durable artifacts requiring user approval. /orchestrate writes per-task docs, a task graph with phases, an execution playbook, and a kickoff prompt to .claude/plans/. The plan never executes until you say go.',
  },
  {
    name: 'Session Isolation',
    body: "Sub-agents run in fresh contexts so shared state can't corrupt their work. Each task doc is self-contained for a fresh-context sub-agent. /orchestrate offers a git-worktree branch for filesystem-level isolation.",
  },
];

const ROUND_OUT: Pattern[] = [
  {
    name: 'Tool Use',
    body: 'A curated React-specific tool surface. ESLint with 20+ plugins, TypeScript, Vitest with React Testing Library, Playwright, Storybook with Chromatic, MSW, the gh CLI, react-doctor, the Obsidian wiki, and typescript-lsp.',
  },
  {
    name: 'Parallelization',
    body: 'Independent work runs concurrently. The audit dispatches its specialist subagents in a single tool-call message. The orchestrator runs per-phase sub-agents in parallel where dependencies allow.',
  },
  {
    name: 'Guardrails & Safety',
    body: "Defense in depth, layered from the filesystem up. Filesystem deny list keeps secrets out (.env, credentials, keys). Block hooks reject debt-accumulating patterns at the source. The audit's security dimension covers XSS, SSRF, IDOR, and dependency vulnerabilities.",
  },
  {
    name: 'Human-in-the-Loop',
    body: "Six structurally enforced checkpoints between Claude's intent and impact. Quality Gate, code-review audit, plan approval, phase gates, destructive-git hook, PR-merge reminder. The bypass paths are blocked at the hook layer.",
  },
];

type GroupProps = {
  label: string;
  items: Pattern[];
  accent: 'accent' | 'secondary' | 'warn';
};

const NAME_COLOR: Record<GroupProps['accent'], string> = {
  accent: 'text-accent',
  secondary: 'text-secondary',
  warn: 'text-warn',
};

function PatternGroup({ label, items, accent }: GroupProps) {
  const nameColor = NAME_COLOR[accent];
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-fg-dim">
        {label}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map(({ name, body }) => (
          <div
            key={name}
            className="rounded-lg bg-bg-elev border border-border px-4 py-3"
          >
            <span className={`block text-sm font-semibold mb-1 ${nameColor}`}>
              {name}
            </span>
            <span className="text-sm text-fg leading-[1.55]">{body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AgenticDesignDetail() {
  return (
    <Section id="agentic-design" title="Agentic design">
      <p className="mb-8 text-fg-dim">
        The{' '}
        <a
          href="https://zeljkoavramovic.github.io/agentic-design-patterns/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          canonical taxonomy
        </a>{' '}
        catalogs 29 agentic design patterns. GAIA implements{' '}
        <strong className="text-fg font-semibold">12 of those 29 structurally</strong>:
        wired in through hooks, agents, rules, commands, and wiki conventions, so each
        runs the same way every session, every engineer, every model variant. Not as
        emergent model behavior on top of a vanilla setup.
      </p>

      <div className="space-y-8">
        <PatternGroup label="Headline patterns" items={HEADLINE} accent="accent" />
        <PatternGroup label="Tier and isolation" items={SUPPLEMENTARY} accent="secondary" />
        <PatternGroup label="Tooling and safety" items={ROUND_OUT} accent="warn" />
      </div>
    </Section>
  );
}

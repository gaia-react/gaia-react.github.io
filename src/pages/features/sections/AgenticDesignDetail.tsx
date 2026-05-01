import {twJoin} from 'tailwind-merge';
import {Section} from '@/components/Section';

type Pattern = {
  body: string;
  name: string;
};

const HEADLINE: Pattern[] = [
  {
    body: "Claude can't ship broken code. Pre-tool-use hooks block destructive git, watch-mode tests, force-pushes to main, and eslint-config edits before they happen. Pre-commit hooks gate every commit on typecheck, lint, tests, and build.",
    name: 'The Stop Hook',
  },
  {
    body: 'Two blocking review layers before merge. The Quality Gate (typecheck, lint, test, build) loops until clean. The code-review audit tiers findings as Critical, Important, and Suggestions and blocks every merge.',
    name: 'Reflection',
  },
  {
    body: 'Five tiers so Claude stops relearning your codebase. Wiki for long-term, hot cache for session start, /gaia handoff and /gaia pickup for episodic, agent memory across reviews, user memory across projects. /gaia audit sweeps for duplication and bloat.',
    name: 'Memory Management',
  },
  {
    body: 'A specialist for every concern, dispatched in parallel. The code-review audit dispatches React Patterns, TypeScript and Architecture, Translation, and react-doctor specialists from a single tool call. Extension files inject library-specific rules into the right specialist at runtime.',
    name: 'Multi-Agent Collaboration',
  },
];

const SUPPLEMENTARY: Pattern[] = [
  {
    body: 'Constraints route to context, not loaded globally. Path-scoped rules auto-load only when Claude is editing matching files. Conditional Bash hooks route commands to specific scripts based on shape.',
    name: 'Routing',
  },
  {
    body: 'Cost and quality discipline wired in. /gaia audit runs both the research and apply steps on Sonnet, scoped to mechanical work that does not need heavy reasoning. The code-review audit declares model: sonnet for structured review, leaving Opus for harder reasoning.',
    name: 'Resource-Aware Optimization',
  },
  {
    body: 'Plans are durable artifacts requiring user approval. /gaia plan writes per-task docs, a task graph with phases, an execution playbook, and a kickoff prompt to .claude/plans/. The plan never executes until you say go.',
    name: 'Planning',
  },
  {
    body: "Sub-agents run in fresh contexts so shared state can't corrupt their work. Each task doc is self-contained for a fresh-context sub-agent. /gaia plan offers a git-worktree branch for filesystem-level isolation.",
    name: 'Session Isolation',
  },
];

const ROUND_OUT: Pattern[] = [
  {
    body: 'A curated React-specific tool surface. ESLint with 20+ plugins, TypeScript, Vitest with React Testing Library, Playwright, Storybook with Chromatic, MSW, the gh CLI, react-doctor, the Obsidian wiki, and typescript-lsp.',
    name: 'Tool Use',
  },
  {
    body: 'Independent work runs concurrently. The audit dispatches its specialist subagents in a single tool-call message. The orchestrator runs per-phase sub-agents in parallel where dependencies allow.',
    name: 'Parallelization',
  },
  {
    body: "Defense in depth, layered from the filesystem up. Filesystem deny list keeps secrets out (.env, credentials, keys). Block hooks reject debt-accumulating patterns at the source. The audit's security dimension covers XSS, SSRF, IDOR, and dependency vulnerabilities.",
    name: 'Guardrails & Safety',
  },
  {
    body: "Six structurally enforced checkpoints between Claude's intent and impact. Quality Gate, code-review audit, plan approval, phase gates, destructive-git hook, PR-merge reminder. The bypass paths are blocked at the hook layer.",
    name: 'Human-in-the-Loop',
  },
];

type GroupProperties = {
  accent: 'accent' | 'secondary' | 'warn';
  items: Pattern[];
  label: string;
};

const NAME_COLOR: Record<GroupProperties['accent'], string> = {
  accent: 'text-accent',
  secondary: 'text-secondary',
  warn: 'text-warn',
};

const PatternGroup = ({accent, items, label}: GroupProperties) => {
  const nameColor = NAME_COLOR[accent];

  return (
    <div className="space-y-3">
      <h3 className="text-ink-dim text-xs font-semibold tracking-widest uppercase">
        {label}
      </h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map(({body, name}) => (
          <div
            key={name}
            className="bg-surface border-line rounded-lg border px-4 py-3"
          >
            <span
              className={twJoin('mb-1 block text-sm font-semibold', nameColor)}
            >
              {name}
            </span>
            <span className="text-ink text-sm leading-[1.55]">{body}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AgenticDesignDetail = () => (
  <Section id="agentic-design" title="Agentic design">
    <p className="text-ink-dim mb-8">
      The{' '}
      <a
        className="text-accent hover:underline"
        href="https://zeljkoavramovic.github.io/agentic-design-patterns/"
        rel="noopener noreferrer"
        target="_blank"
      >
        canonical taxonomy
      </a>{' '}
      catalogs 29 agentic design patterns. GAIA implements{' '}
      <strong className="text-ink font-semibold">
        12 of those 29 structurally
      </strong>
      : wired in through hooks, agents, rules, commands, and wiki conventions,
      so each runs the same way every session, every engineer, every model
      variant. Not as emergent model behavior on top of a vanilla setup.
    </p>

    <div className="space-y-8">
      <PatternGroup
        accent="accent"
        items={HEADLINE}
        label="Headline patterns"
      />
      <PatternGroup
        accent="secondary"
        items={SUPPLEMENTARY}
        label="Tier and isolation"
      />
      <PatternGroup
        accent="warn"
        items={ROUND_OUT}
        label="Tooling and safety"
      />
    </div>
  </Section>
);

export default AgenticDesignDetail;

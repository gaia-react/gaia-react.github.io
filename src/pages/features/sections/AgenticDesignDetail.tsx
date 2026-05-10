import {twJoin} from 'tailwind-merge';
import {Section} from '@/components/Section';

type Pattern = {
  body: string;
  name: string;
};

const QUALITY: Pattern[] = [
  {
    body: "Claude can't ship broken code. Pre-tool-use hooks block destructive git, watch-mode tests, force-pushes to main, and eslint-config edits before they happen. Pre-commit hooks gate every commit on typecheck, lint, tests, and build.",
    name: 'The Stop Hook',
  },
  {
    body: 'Two blocking review layers before merge. The Quality Gate runs typecheck, lint, tests, and build. The code-review audit tiers findings as Critical, Important, and Suggestions, and blocks the merge.',
    name: 'Reflection',
  },
  {
    body: 'A specialist for every concern, dispatched in parallel. The code-review audit fans four specialists: React patterns, TypeScript and architecture, i18n, and component health. Findings merge into one tiered report.',
    name: 'Multi-Agent Collaboration',
  },
  {
    body: 'Specs become tests before code is written. UATs the PO authors in plain English compile into red-state Playwright E2E specs before the implementer writes a line of source. The first task is turning red green.',
    name: 'Specification-Driven Development',
  },
];

const WORKFLOW: Pattern[] = [
  {
    body: 'Plans are durable artifacts requiring user approval. Per-task docs, a task graph with phases, an execution playbook, and a kickoff prompt all land before any work begins. The plan never executes until you say go.',
    name: 'Planning',
  },
  {
    body: 'Five tiers so Claude stops relearning your codebase. Wiki for long-term knowledge, hot cache, handoff snapshots, per-agent memory, and user memory across projects. The wiki maintains itself, with audits sweeping for duplication and orphans before they compound.',
    name: 'Memory & Knowledge Base',
  },
  {
    body: 'Cost and quality discipline wired in. Mechanical work runs on Sonnet to keep tokens cheap. Heavier reasoning routes to Opus where it earns the price.',
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
    body: 'Skills load by trigger, not by default. The harness reads each skill’s description and fires the matching one when its trigger phrase appears. Hundreds can sit on disk without burning a token until they’re needed.',
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
    body: 'Defense in depth, layered from the filesystem up. Secrets and credentials are blocked from being written. Debt-accumulating patterns are rejected at the source. The audit covers XSS, SSRF, IDOR, and dependency vulnerabilities.',
    name: 'Guardrails & Safety',
  },
  {
    body: 'Independent work runs concurrently. Audit specialists fan out from a single dispatch. Plan phases run in parallel where dependencies allow.',
    name: 'Parallelization',
  },
  {
    body: 'A curated React-specific tool surface. Linting, types, unit and E2E tests, visual regression, mocking, the gh CLI, and the Obsidian wiki.',
    name: 'Tool Use',
  },
];

type GroupProperties = {
  accent: 'accent' | 'ink-dim' | 'secondary' | 'warn';
  items: Pattern[];
  label: string;
};

const NAME_COLOR: Record<GroupProperties['accent'], string> = {
  accent: 'text-accent',
  'ink-dim': 'text-ink-dim',
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
      The patterns below are established agent-design vocabulary. GAIA wires
      each one in through hooks, agents, rules, commands, and wiki conventions,
      so they run the same way every session, every engineer, every model
      variant. Not as emergent model behavior on top of a vanilla setup. Not as
      prompts you have to repeat. The discipline lives in the project.
    </p>

    <div className="space-y-8">
      <PatternGroup
        accent="accent"
        items={QUALITY}
        label="Quality enforcement"
      />
      <PatternGroup
        accent="secondary"
        items={WORKFLOW}
        label="Workflow control"
      />
      <PatternGroup accent="warn" items={CONTEXT} label="Context engineering" />
      <PatternGroup
        accent="ink-dim"
        items={TOOLING}
        label="Tooling and safety"
      />
    </div>
  </Section>
);

export default AgenticDesignDetail;

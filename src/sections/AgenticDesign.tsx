import {Card} from '@/components/Card';
import {
  MemoryIcon,
  MultiAgentIcon,
  ReflectionIcon,
  ShieldCheckIcon,
} from '@/components/icons';
import {Section} from '@/components/Section';

const AgenticDesign = () => (
  <Section id="agentic-design" title="Agentic design">
    <p className="text-fg-dim mb-8">
      GAIA wires agentic behavior into the project itself, not the prompt. The
      four patterns below run the same way every session, every engineer, every
      model variant.
    </p>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card
        icon={<ShieldCheckIcon size={32} />}
        iconColor="secondary"
        title="Claude can't ship broken code"
      >
        <p>
          Pre-tool-use hooks block destructive git, watch-mode tests,
          force-pushes to main, and eslint-config edits before they happen.
        </p>
      </Card>

      <Card
        icon={<ReflectionIcon size={32} />}
        iconColor="accent"
        title="Ensure quality before merge"
      >
        <p>
          The Quality Gate runs typecheck, lint, tests, and build on every
          commit. The code-review audit tiers findings as Critical, Important,
          and Suggestions, and blocks the merge until fixed.
        </p>
      </Card>

      <Card
        icon={<MemoryIcon size={32} />}
        iconColor="secondary"
        title="Five tiers of memory"
      >
        <p>
          Wiki, hot cache, session handoff, agent memory, user memory. Each tier
          has a scope and a maintenance loop, so Claude stops relearning your
          codebase every session.
        </p>
      </Card>

      <Card
        icon={<MultiAgentIcon size={32} />}
        iconColor="accent"
        title="A specialist for every concern"
      >
        <p>
          The audit dispatches React Patterns, TypeScript and Architecture,
          Translation, and react-doctor specialists in parallel from a single
          tool call.
        </p>
      </Card>
    </div>

    <p className="text-fg-dim mt-8 text-sm">
      GAIA wires in 12 of the 29 canonical agentic design patterns structurally.
      See the full breakdown on the{' '}
      <a
        className="text-accent hover:text-accent-soft underline-offset-4 hover:underline"
        href="/features/#agentic-design"
      >
        features page
      </a>
      .
    </p>
  </Section>
);

export default AgenticDesign;

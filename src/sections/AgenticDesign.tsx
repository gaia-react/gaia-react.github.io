import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import {
  MultiAgentIcon,
  PlanIcon,
  ReActIcon,
  ReflectionIcon,
} from '@/components/icons';

export default function AgenticDesign() {
  return (
    <Section id="agentic-design" title="Agentic design">
      <p className="text-fg-dim mb-8">
        GAIA treats Claude as an agent, not autocomplete. Plans get made before code is written.
        Work gets reviewed before it ships. Tools surface real feedback so Claude knows when
        something is wrong. The result is code you can trust without having to rewrite it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          icon={<ReflectionIcon size={32} />}
          iconColor="secondary"
          title="Reflection"
        >
          <p>
            Code-review audit evaluates every diff for security, performance, and antipatterns; the
            quality gate enforces clean output before every commit.
          </p>
        </Card>

        <Card
          icon={<ReActIcon size={32} />}
          iconColor="accent"
          title="ReAct"
        >
          <p>
            Claude consults the Obsidian wiki before acting, uses ESLint, Vitest, and Playwright as
            observation tools, and iterates until gates pass.
          </p>
        </Card>

        <Card
          icon={<PlanIcon size={32} />}
          iconColor="secondary"
          title="Planning"
        >
          <p>
            For complex features, Claude plans before coding. The orchestrator drives focused
            subagents through each phase, keeping context tight.
          </p>
        </Card>

        <Card
          icon={<MultiAgentIcon size={32} />}
          iconColor="accent"
          title="Multi-Agent"
        >
          <p>
            Specialist subagents run in parallel. Code review spawns three at once; the
            orchestrator dispatches agents across phases.
          </p>
        </Card>
      </div>
    </Section>
  );
}

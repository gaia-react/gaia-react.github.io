import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';

export default function QuickStart() {
  return (
    <Section id="quick-start" title="Quick start">
      <div className="space-y-6">
        <p className="text-[var(--color-fg)]">Two commands and you're initialized.</p>

        <div className="space-y-4">
          <CodeBlock title="terminal" language="bash">
            npx create-gaia my-app
          </CodeBlock>

          <CodeBlock title="Claude Code" language="">
            /gaia-init
          </CodeBlock>
        </div>

        <p className="text-[var(--color-fg-dim)] text-sm">
          The first command pulls the latest release and git-inits your project. The second runs
          Claude-driven setup: configure i18n, install skills and plugins, optionally set up
          Chromatic MCP. See the <a href="#commands" className="text-[var(--color-accent)] hover:underline">commands section</a> below for the full surface.
        </p>
      </div>
    </Section>
  );
}

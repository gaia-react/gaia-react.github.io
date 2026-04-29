import { Section } from '@/components/Section';
import { CodeBlock } from '@/components/CodeBlock';

const CLAUDE_MD = `1. Think before Coding
Surface assumptions explicitly, 
present interpretations when ambiguous`;

export default function ClaudeMd() {
  return (
    <Section id="claude-md" title="Principles built in">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-start">
        <div className="space-y-4 text-fg order-2 md:order-1">
          <p>
            GAIA ships with a Karpathy-style CLAUDE.md, the contract Claude reads on every task. It
            tells Claude where to look in the wiki, what coding principles to follow, and what
            habits to keep.
          </p>

          <p>
            New Claude sessions inherit your project's standards instantly, with no need to
            re-explain the rules every time.
          </p>

          <p>
            <a href="/features/#claude-md" className="text-accent hover:underline">
              Learn more →
            </a>
          </p>
        </div>

        <div className="order-1 md:order-2">
          <CodeBlock title="CLAUDE.md">{CLAUDE_MD}</CodeBlock>
        </div>
      </div>
    </Section>
  );
}

import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { ShieldCheckIcon, WaveIcon } from '@/components/icons';

export default function Why() {
  return (
    <Section id="why" title="Why GAIA">
      <p className="text-fg-dim mb-8">
        Two failure modes break Claude on a real project: unpredictable output and runaway token
        costs. GAIA fixes both.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card
          icon={<ShieldCheckIcon size={32} />}
          iconColor="secondary"
          title="Trustworthy by default"
        >
          <p>
            Conventions are enforced and code-review audits block bad patterns before they reach a
            commit. What Claude writes is production-grade, ready to ship.
          </p>
        </Card>

        <Card
          icon={<WaveIcon size={32} />}
          iconColor="accent"
          title="Sharp at any scale"
        >
          <p>
            A focused Obsidian wiki and scoped rules replace sprawling CLAUDE.md files. Claude
            loads only what the task needs, so context costs do not compound as the codebase grows.
          </p>
        </Card>
      </div>

      <a href="/features/" className="text-accent hover:underline">
        Learn more →
      </a>
    </Section>
  );
}

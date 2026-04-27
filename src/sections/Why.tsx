import { Section } from '@/components/Section';

export default function Why() {
  return (
    <Section id="why" title="Why GAIA">
      <div className="prose prose-invert max-w-none text-fg">
        <p className="text-fg-dim mb-4">
          Two failure modes break Claude on a real project: unpredictable output and runaway token
          costs. GAIA fixes both.
        </p>

        <ul className="space-y-4 mb-6">
          <li className="flex gap-3">
            <span className="text-accent shrink-0">•</span>
            <span>
              <strong>Trustworthy by default.</strong> Conventions are enforced. Quality gates
              and code-review audits block bad patterns before they reach a commit. What Claude
              writes is production-grade, ready to ship.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-accent shrink-0">•</span>
            <span>
              <strong>Sharp at any scale.</strong> A focused Obsidian wiki and scoped rules
              replace sprawling CLAUDE.md files. Claude loads only what the task needs, so context
              costs do not compound as the codebase grows.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

import { Section } from '@/components/Section';

const PRINCIPLES = [
  { name: 'Think Before Coding', desc: 'Surface assumptions, push back on complexity, ask when unclear.' },
  { name: 'Simplicity First', desc: 'Write the minimum code that solves the problem, no speculative abstractions.' },
  { name: 'Surgical Changes', desc: 'Touch only what is needed; match existing style; leave unbroken things alone.' },
  { name: 'Goal-Driven Execution', desc: 'Define verifiable success criteria before starting; loop until verified.' },
  { name: 'Always Use TDD', desc: 'Vitest for units, Playwright for user flows, tests before code.' },
  { name: 'Always Verify Your Work', desc: 'Run the quality gate process; fix all warnings before reporting done.' },
];

export default function ClaudeMd() {
  return (
    <Section id="claude-md" title="Principles built in">
      <div className="space-y-6 text-[var(--color-fg)]">
        <p>
          Every GAIA project ships with{' '}
          <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">
            .claude/rules/coding-guidelines.md
          </code>
          , auto-loaded for <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">app/**/*</code>{' '}
          and <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">test/**/*</code>.
          It encodes six principles Claude follows on every task, no setup required.
        </p>

        <ul className="space-y-3">
          {PRINCIPLES.map(({ name, desc }) => (
            <li key={name} className="flex gap-3">
              <span className="text-[var(--color-accent)] flex-shrink-0 mt-0.5">•</span>
              <span className="text-[var(--color-fg-dim)]">
                <strong className="text-[var(--color-fg)]">{name}.</strong>{' '}
                {desc}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-[var(--color-fg-dim)] text-sm">
          These draw on several sources, including{' '}
          <a
            href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Karpathy's popular CLAUDE.md
          </a>
          , distilled into a single file that ships with every project.
        </p>
      </div>
    </Section>
  );
}

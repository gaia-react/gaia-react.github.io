import { Section } from '@/components/Section';

const KARPATHY = [
  { name: 'Think Before Coding', desc: 'Surface assumptions, push back on complexity, ask when unclear.' },
  { name: 'Simplicity First', desc: 'Write the minimum code that solves the problem, no speculative abstractions.' },
  { name: 'Surgical Changes', desc: 'Touch only what is needed; match existing style; leave unbroken things alone.' },
  { name: 'Goal-Driven Execution', desc: 'Define verifiable success criteria before starting; loop until verified.' },
];

const PRINCIPLES = [
  { name: 'Always Use TDD', desc: 'Vitest for units, Playwright for user flows, tests before code.' },
  { name: 'Always Verify Your Work', desc: 'Run the quality gate process; fix all warnings and errors before reporting done.' },
];

export default function ClaudeMd() {
  return (
    <Section id="claude-md" title="Principles built in">
      <div className="space-y-6 text-fg">
        <p>
          GAIA ships with coding rules that only load when Claude is writing code. The first four
          come from{' '}<a
            href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
        >
          Karpathy's popular CLAUDE.md
        </a>:
        </p>

        <ul className="space-y-3">
          {KARPATHY.map(({ name, desc }) => (
            <li key={name} className="flex gap-3">
              <span className="text-accent shrink-0 mt-0.5">•</span>
              <span className="text-fg-dim">
                <strong className="text-fg">{name} - </strong>
                {desc}
              </span>
            </li>
          ))}
        </ul>
      <p>
        GAIA adds two more principles on top of these:
      </p>
      <ul className="space-y-3">
        {PRINCIPLES.map(({ name, desc }) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent shrink-0 mt-0.5">•</span>
            <span className="text-fg-dim">
              <strong className="text-fg">{name} - </strong>
              {desc}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </Section>
  );
}

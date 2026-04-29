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

const BENEFITS = [
  {
    name: 'Tokens saved',
    desc: 'Lazy-fetch only the pages Claude needs. Adding 20 more wiki pages does not bloat every session, since they are not loaded unless asked.',
  },
  {
    name: 'Context stays focused',
    desc: 'Domain isolation prevents unrelated information from leaking into the context window. Technical questions get technical answers only.',
  },
  {
    name: 'The pattern scales',
    desc: 'Whether you are building a 2-person startup or a 100-person team, the wiki-first discipline keeps sessions lean and predictable.',
  },
];

export default function ClaudeMdDetail() {
  return (
    <Section id="claude-md" title="A Karpathy-style CLAUDE.md">
      <div className="space-y-6 text-fg">
        <p>
          A Karpathy-style CLAUDE.md is wiki-first, don't-preload, lazy-fetch. It tells Claude
          where to look, not to load everything upfront. See{' '}
          <a
            href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Karpathy's original
          </a>{' '}
          for the philosophy.
        </p>

        <p>
          GAIA ships with coding rules that only load when Claude is writing code. The first four
          come from Karpathy's CLAUDE.md:
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

        <p>GAIA adds two more principles on top of these:</p>

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

        <p>
          GAIA's variant also adds three wiki habits on top of Karpathy's framing.{' '}
          <strong>Domain isolation</strong> means technical work fetches only from{' '}
          <code className="bg-bg-elev px-2 py-1 rounded text-sm">wiki/app/</code>, brand work from
          its own domain. <strong>wiki/hot.md auto-load</strong> is a 200-word recent-context cache
          loaded at every session start to surface work-in-progress.{' '}
          <strong>Memory discipline</strong> keeps machine-local memory for personal preferences
          only. Durable knowledge lives in the wiki or{' '}
          <code className="bg-bg-elev px-2 py-1 rounded text-sm">.claude/rules/</code>.
        </p>

        <h3 className="font-semibold text-fg pt-2">Three concrete benefits</h3>

        <ul className="space-y-3">
          {BENEFITS.map(({ name, desc }) => (
            <li key={name} className="flex gap-3">
              <span className="text-accent shrink-0 mt-0.5">•</span>
              <span className="text-fg-dim">
                <strong className="text-fg">{name}.</strong> {desc}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

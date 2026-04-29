import { Section } from '@/components/Section';

const POINTS = [
  {
    name: 'Coding principles',
    desc: "GAIA's coding rules embed Karpathy's four coding principles (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution), plus two of GAIA's own: Always Use TDD and Always Verify Your Work.",
  },
  {
    name: 'Best practices baked in',
    desc: "Rules encode the conventions directly instead of hoping Claude infers them from whatever's already in the repo.",
  },
  {
    name: 'Guardrails against technical debt',
    desc: 'Rules block debt-accumulating patterns from being written in the first place: untyped exports, untested components, hardcoded strings, a11y gaps.',
  },
  {
    name: 'Consistently clean code',
    desc: '20+ ESLint plugins, strict TypeScript, and Prettier enforce style and correctness on every file Claude touches. No negotiation, no drift.',
  },
  {
    name: 'Test-driven development',
    desc: 'The bundled tdd skill runs a red-green-refactor loop with tests before code, tailored for Vitest, React Testing Library, Storybook composeStory, and MSW.',
  },
  {
    name: 'Code-review audit before every merge',
    desc: 'A Claude subagent scans the branch diff for security, performance, code smells, and antipatterns, then blocks the merge until the issues are fixed and committed.',
  },
  {
    name: 'Quality gate before commit',
    desc: 'Typecheck, lint, tests, and build must all pass. Not "mostly clean", actually clean.',
  },
];

export default function Trust() {
  return (
    <Section id="trust" title="Trust" paddingTop="2rem">
      <div className="space-y-6 text-fg">
        <p>
          You can't manage an engineer you can't predict. Without enforceable conventions, Claude
          reverts to its training distribution, an average of every codebase on the internet, bad
          code and all. GAIA's codebase is what you actually want Claude matching. With GAIA,
          Claude writes code that follows best practices on day one, and can't ship code that
          doesn't.
        </p>

        <h3 className="font-semibold text-fg text-xl pt-2">How GAIA makes Claude trustworthy</h3>

        <ul className="space-y-3">
          {POINTS.map(({ name, desc }) => (
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

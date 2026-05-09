import {Section} from '@/components/Section';

const POINTS = [
  {
    desc: 'GAIA’s coding rules embed Karpathy’s four coding principles (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution), plus two of GAIA’s own: Always Use TDD and Always Verify Your Work.',
    name: 'Coding principles',
  },
  {
    desc: 'Rules encode the conventions directly instead of hoping Claude infers them from whatever’s already in the repo.',
    name: 'Best practices baked in',
  },
  {
    desc: 'Rules block debt-accumulating patterns from being written in the first place: untyped exports, untested components, hardcoded strings, a11y gaps.',
    name: 'Guardrails against technical debt',
  },
  {
    desc: '20+ ESLint plugins, strict TypeScript, and Prettier enforce style and correctness on every file Claude touches. No negotiation, no drift.',
    name: 'Consistently clean code',
  },
  {
    desc: 'react-code, typescript, tdd, tailwind, playwright-cli, skeleton-loaders, and eslint-fixes load on demand when Claude edits matching files. They apply project conventions without re-deriving them every session.',
    name: 'Bundled skills wired in for write-time quality',
  },
  {
    desc: 'The bundled tdd skill runs a red-green-refactor loop with tests before code, tailored for Vitest, React Testing Library, Storybook composeStory, and MSW.',
    name: 'Test-driven development',
  },
  {
    desc: 'UATs the PO authors in plain English become Playwright e2e specs before the implementer writes a line of source. The implementer\'s first task is turning red tests green. Specs become tests automatically.',
    name: 'Specs that turn into tests',
  },
  {
    desc: 'The code-review-audit agent scans the branch diff for security, performance, architecture, code smells, and antipatterns. Four parallel specialists layer on React patterns, TypeScript, i18n, and component health. Extendable with custom rules. Tiered findings (Critical, Important, Suggestions) gate the merge. Runs locally, optionally in CI.',
    name: 'Code-review audit before every merge',
  },
  {
    desc: 'Typecheck, lint, tests, and build must all pass. Not "mostly clean", actually clean.',
    name: 'Quality gate before commit',
  },
];

const Trust = () => (
  <Section id="trust" paddingTop="2rem" title="Trust">
    <div className="text-ink space-y-6">
      <p>
        You can’t trust output you can’t predict. Without enforceable
        conventions, Claude reverts to its training distribution, an average of
        every codebase on the internet, bad code and all. GAIA’s codebase is
        what you actually want Claude matching. With GAIA, Claude writes code
        that follows best practices on day one, and can’t ship code that
        doesn’t.
      </p>

      <h3 className="text-ink pt-2 text-xl font-semibold">
        How GAIA makes Claude trustworthy
      </h3>

      <ul className="space-y-3">
        {POINTS.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">•</span>
            <span className="text-ink-dim">
              <strong className="text-ink">{name}.</strong> {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default Trust;

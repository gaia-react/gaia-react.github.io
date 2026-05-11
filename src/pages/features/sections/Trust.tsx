import type {ReactNode} from 'react';
import TrustGraphic from './figures/TrustGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'GAIA’s coding rules embed Karpathy’s four coding principles (Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution), plus two of GAIA’s own: Always Use TDD and Always Verify Your Work.',
    name: 'Coding principles',
  },
  {
    desc: 'Rules encode the conventions directly instead of hoping Claude infers them from whatever’s already in the repo, or worse, bad examples from its training data.',
    name: 'Best practices baked in',
  },
  {
    desc: 'Rules block debt-accumulating patterns from being written in the first place: untyped objects, untested components, hardcoded strings, a11y gaps.',
    name: 'Guardrails against technical debt',
  },
  {
    desc: '1,314 linting rules, strict TypeScript, and Prettier enforce style and correctness on every file Claude touches. No negotiation, no drift.',
    name: 'Consistently clean code',
  },
  {
    desc: 'Multiple scoped skills load on demand when Claude edits matching files. They apply project conventions without re-deriving them each session.',
    name: 'Bundled skills wired in for write-time quality',
  },
  {
    desc: 'The bundled TDD skill runs a red-green-refactor loop with tests before code, tailored for Vitest, React Testing Library, Storybook, and MSW.',
    name: 'Test-driven development',
  },
  {
    desc: 'UATs become Playwright E2E specs before Claude writes a line of code. The first task is turning red tests green. Specs become tests automatically.',
    name: 'Specs that turn into user acceptance tests',
  },
  {
    desc: 'The code-review-audit agent scans for issues with security, performance, architecture, code smells, and antipatterns. Four parallel specialists layer on React patterns, TypeScript, and component health. Extendable with custom rules.',
    name: 'Code review before every merge',
  },
  {
    desc: 'Typecheck, lint, tests, and build must all pass. Not “mostly clean”, actually clean.',
    name: 'Quality gate before commit',
  },
];

const Trust = () => (
  <FxSection
    id="trust"
    lead={
      <>
        <p>
          You can&apos;t trust output you can&apos;t predict. Without
          enforceable conventions, Claude reverts to its training distribution,
          an average of every codebase on the internet, bad code and all.
        </p>
        <p>
          GAIA&apos;s coding style is what you actually want Claude matching.
          With GAIA, Claude writes code that follows best practices on day one,
          and can&apos;t ship code that doesn&apos;t.
        </p>
      </>
    }
    title="How GAIA makes Claude trustworthy"
  >
    <TrustGraphic />
    <PointList points={POINTS} />
  </FxSection>
);

export default Trust;

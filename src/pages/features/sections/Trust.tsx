import type {ReactNode} from 'react';
import TrustGraphic from './figures/TrustGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: (
      <>
        Six coding principles encoded as rules and loaded automatically. Every
        session starts from the same disciplined baseline. See{' '}
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="#discipline"
        >
          the principles
        </a>{' '}
        below.
      </>
    ),
    name: 'Coding principles',
  },
  {
    desc: 'Rules block debt-accumulating patterns from being written in the first place: untyped objects, untested components, hardcoded strings, a11y gaps.',
    name: 'Guardrails against technical debt',
  },
  {
    desc: 'Multiple scoped skills load on demand when Claude edits matching files. They apply project conventions without re-deriving them each session.',
    name: 'Bundled skills wired in for write-time quality',
  },
  {
    desc: 'Specs become Playwright E2E tests before code is written. The first task in any feature is turning red tests green.',
    name: 'Test-driven development',
  },
  {
    desc: 'The code-review-audit agent scans for security, performance, architecture, code smells, and antipatterns. Extendable with custom rules.',
    name: 'Code review before every merge',
  },
];

const Trust = () => (
  <FxSection
    id="trust"
    isAboveFold={true}
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
    title="Trustworthy by default"
  >
    <TrustGraphic />
    <PointList points={POINTS} />
  </FxSection>
);

export default Trust;

import type {ReactNode} from 'react';
import TrustGraphic from './figures/TrustGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: (
      <>
        {
          'Six coding principles encoded as rules and loaded automatically. Every session starts from the same disciplined baseline. See '
        }
        <a
          className="text-accent hover:text-accent-soft transition-colors duration-150"
          href="#discipline"
        >
          the principles
        </a>
        {' below.'}
      </>
    ),
    name: 'Coding principles',
  },
  {
    desc: 'Rules steer Claude away from debt-accumulating patterns as it writes, and the commit gate blocks the ones that slip through. Untyped objects, untested components, hardcoded strings, a11y gaps.',
    name: 'Guardrails against technical debt',
  },
  {
    desc: 'Scoped skills load on demand when Claude edits matching files. They apply project conventions without re-deriving them each session.',
    name: 'Bundled skills wired in for write-time quality',
  },
  {
    desc: 'Before any code, GAIA turns adversarial agents on its own spec and plan. They try to refute each decision and dependency against the real repo, so a flawed assumption surfaces at planning time, not in review.',
    name: 'Verified before it’s built',
  },
  {
    desc: 'Specs become Playwright E2E tests before code is written. The first task in any feature is turning red tests green, and the red has to be real. A test that can’t fail proves nothing.',
    name: 'Test-driven development',
  },
  {
    desc: (
      <>
        {
          'The code-review-audit agent scans for security, performance, architecture, code smells, and antipatterns. Real problems it finds beyond the PR’s scope aren’t dropped or used to block your merge. The audit files them as tracked, deduplicated issues, and '
        }
        <code className="text-ink font-mono text-[0.9em]">/gaia-debt</code>
        {' drains them one reviewed PR at a time.'}
      </>
    ),
    name: 'Code review before every merge',
  },
];

const Trust = () => (
  <FxSection
    id="trust"
    isAboveFold={true}
    lead={
      <>
        <p className="max-w-[38ch]">
          You can&apos;t trust output you can&apos;t predict. On its own,
          AI&apos;s output isn&apos;t.
        </p>
        <p className="max-w-[38ch]">
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

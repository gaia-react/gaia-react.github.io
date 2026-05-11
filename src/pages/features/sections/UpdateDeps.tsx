import type {ReactNode} from 'react';
import UpdateDepsGraphic from './figures/UpdateDepsGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'When a new dependency version requires a codemod or breaking-change migration, GAIA makes sure Claude handles it. The PR includes the bump and the migration together.',
    name: 'Applies migrations and codemods',
  },
  {
    desc: 'When the new version moves or renames public API surface, Update Deps updates the call sites. The kind of grep-replace-with-context work that used to require a person reading both changelogs and code.',
    name: 'Updates API calls when interfaces change',
  },
  {
    desc: 'When two simultaneous upgrades touch the same code path, Update Deps resolves the overlap before opening the PR. No conflicting PRs that fight at merge time.',
    name: 'Resolves conflicts between upgrades',
  },
  {
    desc: "Update Deps runs the upgrade, runs the test suite, sees what breaks, fixes it, and runs the suite again. The PR doesn't open until the upgrade is working. What you review is a finished change, not half-done work.",
    name: 'Iterates until the upgrade lands clean',
  },
  {
    desc: 'Patch and minor bumps auto-merge on green CI. Major bumps route to a separate review-required PR.',
    name: 'Splits by semver',
  },
];

const UpdateDeps = () => (
  <FxSection
    id="update-deps"
    isCool={true}
    lead={
      <>
        <p>
          All Dependabot and Renovate do is open a PR with a version bump,
          leaving the actual upgrade work for a human to figure out.
        </p>
        <p>
          GAIA makes sure Claude does that work, running codemods, migrating
          source code, and resolving any conflicts before the PR opens. The
          upgrade arrives finished, in a fraction of the time it would take a
          person.
        </p>
      </>
    }
    title="GAIA Update Deps"
  >
    <UpdateDepsGraphic />
    <PointList points={POINTS} />
  </FxSection>
);

export default UpdateDeps;

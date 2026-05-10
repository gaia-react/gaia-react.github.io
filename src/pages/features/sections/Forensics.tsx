import type {ReactNode} from 'react';
import ForensicsTriageGraphic from './figures/ForensicsTriageGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'Eight failure classes captured with the specific state files that matter for each (init, update, wiki-sync, quality-gate, hook, scaffold, dev-server, other). Read-only. No remediation, no autofix.',
    name: 'One invocation, complete report',
  },
  {
    desc: 'Paths normalized, secrets stripped, machine leaks scrubbed. Local file and GitHub issue body are byte-identical.',
    name: 'Redacted by default',
  },
  {
    desc: 'Wrong Node version, missing env var, dirty working tree. The fix returns inline, no issue filed.',
    name: 'Self-diagnoses user-config issues',
  },
  {
    desc: 'Files to gaia-react/gaia with the gaia-forensics label. Issue body is byte-identical to your local copy.',
    name: 'One-prompt issue filing for probable bugs',
  },
];

const Forensics = () => (
  <FxSection
    id="forensics"
    isCool={true}
    lead={
      <>
        <p>
          When a GAIA workflow misfires, you don&apos;t lose 30 minutes hunting
          state files. Run{' '}
          <code className="bg-surface rounded-sm px-2 py-0.5 text-[0.88em]">
            /gaia forensics
          </code>{' '}
          and describe what happened.
        </p>
        <p>
          The skill assembles a redacted, classified, filing-ready report in one
          run. User-config issues return the fix inline. Probable bugs file to
          GAIA&apos;s GitHub with one prompt.
        </p>
      </>
    }
    title="GAIA Forensics"
  >
    <ForensicsTriageGraphic />
    <PointList points={POINTS} />
  </FxSection>
);

export default Forensics;

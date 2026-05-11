import type {ReactNode} from 'react';
import ForensicsTriageGraphic from './figures/ForensicsTriageGraphic';
import FxSection from './FxSection';
import PointList from './PointList';

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: 'Paths normalized, secrets stripped, machine leaks scrubbed. Local file and GitHub issue body are byte-identical.',
    name: 'Redacted by default',
  },
  {
    desc: "If Claude determines it's not a problem with GAIA but a local config issue, the fix is returned inline.",
    name: 'Self-diagnoses user-config issues',
  },
];

const Forensics = () => (
  <FxSection
    id="forensics"
    isCool={true}
    lead={
      <>
        <p>
          If a GAIA workflow behaves unexpectedly, run
          <br className="hidden md:inline" />
          <code className="bg-surface text-ink rounded-sm px-2 py-0.5 text-[0.88em]">
            /gaia forensics
          </code>
          and describe what happened.
        </p>
        <p>
          A redacted, classified, filing-ready report is assembled. User-config
          issues return the fix inline. Probable bugs are filed to GAIA&apos;s
          GitHub with one prompt.
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

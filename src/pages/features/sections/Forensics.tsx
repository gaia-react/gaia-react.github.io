import {Section} from '@/components/Section';

const POINTS = [
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
  <Section id="forensics" title="GAIA forensics">
    <div className="text-ink space-y-6">
      <p>
        When a GAIA workflow misfires, you don’t lose 30 minutes hunting state
        files. Run /gaia forensics and describe what happened. The skill
        assembles a redacted, classified, filing-ready report in one run.
        User-config issues return the fix inline. Probable bugs file to GAIA’s
        GitHub with one prompt.
      </p>

      <h3 className="text-ink pt-2 text-xl font-semibold">
        What forensics does
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

export default Forensics;

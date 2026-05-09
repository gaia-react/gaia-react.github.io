import {Section} from '@/components/Section';

const POINTS = [
  {
    desc: 'Runs the full chain: sync, then consolidate, then lint.',
    name: '/gaia wiki',
  },
  {
    desc: 'Evaluates new commits and updates wiki pages where the code warrants it. Fires from session hooks (commit-nudge, drift-check, end-of-session safety net) or on demand.',
    name: '/gaia wiki sync',
  },
  {
    desc: 'Detects supersession, redundancy, reversed decisions, and near-collision slugs across the wiki.',
    name: '/gaia wiki consolidate',
  },
  {
    desc: 'Flags orphan pages, dead links, and drift.',
    name: '/gaia wiki lint',
  },
];

const WikiManagement = () => (
  <Section id="wiki-management" title="Wiki management">
    <div className="text-ink space-y-6">
      <p>
        The wiki self-maintains. Session hooks fire /gaia wiki sync when the
        wiki drifts from HEAD, and the chain runs from there. The commands are
        also available to run manually when you want to drive an update
        yourself. Each runs in a fresh subagent context, so large diffs and page
        walks stay out of your session.
      </p>

      <h3 className="text-ink pt-2 text-xl font-semibold">
        What the commands do
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

export default WikiManagement;

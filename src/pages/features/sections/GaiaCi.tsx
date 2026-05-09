import {Section} from '@/components/Section';

const POINTS = [
  {
    desc: 'A smart cron evaluates whether app code has changed since the last sync. If it has, the workflow runs the wiki chain and opens a labeled PR. If it hasn’t, the run exits clean. A run that rewrites more than 25% of the wiki holds for human review instead of auto-merging.',
    name: 'Wiki sync on a smart cron',
  },
  {
    desc: 'GAIA Sharpen runs weekly. Patch and minor dependency bumps auto-merge on green CI. Major bumps split into a separate review-required PR.',
    name: 'Dependencies, tested and merged',
  },
  {
    desc: 'pnpm audit runs daily. High and critical findings open a GitHub issue plus a single-package security patch PR that auto-merges on green CI. Medium and low findings log only. Security patches never bundle with unrelated dep updates.',
    name: 'Daily security audit',
  },
  {
    desc: 'Branches merged more than 30 days ago are deleted on a monthly cron. Setup also offers to enable delete-on-merge at the repo level so the cron becomes redundant.',
    name: 'Stale-branch cleanup',
  },
  {
    desc: 'Every workflow opens a labeled PR and calls auto-merge on green CI. If post-merge CI fails on the merge commit, the bot opens one revert PR and tries to auto-merge that. The hard cap is one revert attempt. A second failure escalates to a priority issue and the bot stops, no second revert.',
    name: 'Auto-merge on green, auto-revert on failure',
  },
  {
    desc: 'GAIA CI runs against your Claude Code Pro/Max subscription or your Anthropic API key. A $5 hard ceiling per run caps API spend, and the same token-efficiency discipline that runs through the rest of GAIA keeps subscription token use low too.',
    name: 'Token-efficient by design',
  },
];

const GaiaCi = () => (
  <Section id="gaia-ci" title="GAIA CI">
    <div className="text-ink space-y-6">
      <p>
        GAIA CI is the maintenance system built into every GAIA project. Wikis
        stay in sync with the code. Dependencies stay current and tested.
        Security findings get patched. Stale branches don’t pile up. The
        important chores that decay a project when neglected, all running on
        their own.
      </p>

      <p>
        AI handles the safe cases. Humans only see the ones AI can’t recover
        from. Patch and minor dependency bumps, security patches, and routine
        wiki updates auto-merge on green CI. Major bumps, large wiki rewrites,
        and post-revert failures hold for human review.
      </p>

      <h3 className="text-ink pt-2 text-xl font-semibold">
        Automatic by design
      </h3>

      <ul className="space-y-3">
        {POINTS.map(({desc, name}) => (
          <li key={name} className="flex gap-3">
            <span className="text-accent mt-0.5 shrink-0">&bull;</span>
            <span className="text-ink-dim">
              <strong className="text-ink">{name}.</strong> {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);

export default GaiaCi;

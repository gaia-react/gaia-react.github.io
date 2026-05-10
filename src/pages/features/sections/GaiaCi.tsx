import type {ReactNode} from 'react';
import FxSection from './FxSection';
import PointList from './PointList';

type LedgerRow = {
  action: string;
  tone: 'auto' | 'review';
  what: string;
  when: string;
};

const CI_LEDGER: LedgerRow[] = [
  {
    action: 'auto-merge',
    tone: 'auto',
    what: 'Patch / minor dependency bumps',
    when: 'weekly',
  },
  {
    action: 'review',
    tone: 'review',
    what: 'Major dependency bumps',
    when: 'weekly',
  },
  {
    action: 'auto-merge',
    tone: 'auto',
    what: 'High / critical security findings',
    when: 'daily',
  },
  {
    action: 'auto-merge',
    tone: 'auto',
    what: 'Wiki sync on app changes',
    when: 'on commit',
  },
  {
    action: 'review',
    tone: 'review',
    what: 'Wiki rewrite > 25%',
    when: 'on commit',
  },
  {
    action: 'auto-delete',
    tone: 'auto',
    what: 'Stale branches > 30d',
    when: 'monthly',
  },
];

const POINTS: {desc: ReactNode; name: string}[] = [
  {
    desc: "When app code changes, the workflow runs the wiki chain and opens a labeled PR. When it hasn't, the run exits clean. A run that rewrites more than 25% of the wiki holds for human review instead of auto-merging.",
    name: 'Wiki stays in sync with the code',
  },
  {
    desc: 'GAIA Update Deps runs weekly. Patch and minor dependency bumps auto-merge on green CI. Major bumps split into a separate review-required PR.',
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
  <FxSection
    id="gaia-ci"
    lead={
      <>
        <p>
          GAIA CI is the maintenance system built into every GAIA project. Wikis
          stay in sync with the code. Dependencies stay current and tested.
          Security findings get patched. Stale branches don&apos;t pile up. The
          important chores that decay a project when neglected, all running on
          their own.
        </p>
        <p>
          AI handles the safe cases. Humans only see the ones AI can&apos;t
          recover from. Patch and minor dependency bumps, security patches, and
          routine wiki updates auto-merge on green CI. Major bumps, large wiki
          rewrites, and post-revert failures hold for human review.
        </p>
      </>
    }
    title="GAIA CI"
  >
    {/* CI Ledger table */}
    <div className="bg-surface border-line-soft mb-10 overflow-hidden rounded-lg border font-mono text-[0.8rem]">
      {/* Header */}
      <div className="border-line-soft text-muted grid grid-cols-[1fr_auto] border-b bg-black/15 px-[1.1rem] py-[0.6rem] text-[0.65rem] tracking-[0.16em] uppercase sm:grid-cols-[1fr_130px_130px]">
        <span className="pr-4">What</span>
        <span className="hidden sm:block">When</span>
        <span>Action</span>
      </div>

      {/* Rows */}
      {CI_LEDGER.map((row) => (
        <div
          key={row.what}
          className="border-line-soft grid grid-cols-[1fr_auto] items-center border-b px-[1.1rem] py-[0.7rem] last:border-b-0 sm:grid-cols-[1fr_130px_130px]"
        >
          <span className="text-ink pr-4 text-[0.8rem]">{row.what}</span>
          <span className="text-muted hidden text-[0.75rem] sm:block">
            {row.when}
          </span>
          <span
            className={`inline-flex items-center gap-[0.4rem] text-[0.7rem] tracking-[0.12em] uppercase ${row.tone === 'review' ? 'text-warn-soft' : 'text-secondary-soft'}`}
          >
            <span
              className={`inline-block size-[6px] rounded-full ${row.tone === 'review' ? 'bg-warn' : 'bg-secondary'}`}
            />
            {row.action}
          </span>
        </div>
      ))}
    </div>

    <PointList points={POINTS} />
  </FxSection>
);

export default GaiaCi;

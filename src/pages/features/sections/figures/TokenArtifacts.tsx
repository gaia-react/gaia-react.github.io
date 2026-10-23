import type {ReactNode} from 'react';

type CardProperties = {
  caption: ReactNode;
  children: ReactNode;
  command: string;
  meta: string;
};

const ArtifactCard = ({caption, children, command, meta}: CardProperties) => (
  <div className="bg-surface border-line-soft flex flex-col rounded-lg border p-[1rem_1.1rem_1.2rem]">
    <div className="text-muted border-line-soft mb-[0.85rem] flex items-baseline justify-between border-b pb-[0.6rem] font-mono text-[0.7rem] tracking-[0.14em] uppercase">
      <span className="text-accent-soft normal-case">{command}</span>
      <span>{meta}</span>
    </div>
    <div className="flex-1 font-mono text-[0.8rem] leading-[1.55]">
      {children}
    </div>
    <p className="text-ink-dim border-line-soft mt-4 border-t pt-[0.8rem] text-[0.88rem] leading-[1.55]">
      {caption}
    </p>
  </div>
);

const Label = ({children}: {children: ReactNode}) => (
  <div className="text-muted text-[0.66rem] tracking-[0.16em] uppercase">
    {children}
  </div>
);

const SpecCard = () => (
  <ArtifactCard
    caption={
      <>
        One question at a time. Discovery state lives in a draft cache, then
        becomes an immutable artifact. The next step reads the file, not the
        chat.
      </>
    }
    command="/gaia-spec"
    meta="immutable"
  >
    <div className="space-y-[0.7rem]">
      <div className="flex items-baseline gap-2">
        <span className="text-ink">SPEC-007</span>
        <span className="text-muted">·</span>
        <span className="text-ink-dim">feat: card grid layout</span>
      </div>

      <div>
        <Label>Intent</Label>
        <p className="text-ink-dim mt-[0.3rem] leading-normal">
          Browse cards in a grid. Selection opens a detail pane.
        </p>
      </div>

      <div>
        <Label>UATs</Label>
        <ul className="text-ink-dim mt-[0.3rem] space-y-1 leading-normal">
          <li className="flex gap-[0.55rem]">
            <span className="text-secondary-soft">✓</span>3 cols at viewport ≥
            1024px
          </li>
          <li className="flex gap-[0.55rem]">
            <span className="text-secondary-soft">✓</span>
            Enter on focus opens detail
          </li>
          <li className="flex gap-[0.55rem]">
            <span className="text-secondary-soft">✓</span>
            Esc closes the detail pane
          </li>
        </ul>
      </div>

      <div className="text-muted">
        {'clarifications.answered: '}
        <span className="text-ink-dim normal-case">5 of 5</span>
      </div>
    </div>
  </ArtifactCard>
);

const PlanCard = () => (
  <ArtifactCard
    caption={
      <>
        Planning runs in a spawned subagent. Your main session sees file paths,
        not the plan. Execution starts cold from <code>KICKOFF.md</code>.
      </>
    }
    command="/gaia-plan"
    meta="subagent"
  >
    <div className="space-y-[0.55rem]">
      <div className="text-ink">.notebook/specs/SPEC-007/plan/</div>
      <div className="text-ink-dim space-y-[0.3rem] pl-[0.6rem] leading-normal">
        <div className="flex justify-between gap-3">
          <span className="text-ink">README.md</span>
          <span className="text-muted">task graph</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">ORCHESTRATOR.md</span>
          <span className="text-muted">phase order</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">KICKOFF.md</span>
          <span className="text-muted">fresh-session entry</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">task-types.md</span>
          <span className="text-muted">phase 1</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">task-grid.md</span>
          <span className="text-muted">phase 2</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">task-detail.md</span>
          <span className="text-muted">phase 2</span>
        </div>
        <div className="flex justify-between gap-3">
          <span className="text-ink">PROGRESS.md</span>
          <span className="text-muted">resume point</span>
        </div>
      </div>
      <div className="text-muted pt-[0.2rem]">
        return payload: <span className="text-ink-dim">file paths only</span>
      </div>
    </div>
  </ArtifactCard>
);

const TokenArtifacts = () => (
  <div className="grid gap-5 md:grid-cols-2 md:gap-6">
    <SpecCard />
    <PlanCard />
  </div>
);

export default TokenArtifacts;

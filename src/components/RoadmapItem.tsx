type RoadmapState = 'shipped' | 'coming' | 'future';

type RoadmapItemProps = {
  state: RoadmapState;
  label: string;
  badge?: string;
};

const stateConfig: Record<
  RoadmapState,
  { dotClass: string; defaultBadge: string; badgeClass: string }
> = {
  shipped: {
    dotClass: 'bg-secondary',
    defaultBadge: 'Shipped',
    badgeClass: 'bg-secondary/15 text-secondary-soft border-secondary-2',
  },
  coming: {
    dotClass: 'bg-warn',
    defaultBadge: 'Coming soon',
    badgeClass: 'bg-warn/15 text-warn-soft border-warn-2',
  },
  future: {
    dotClass: 'bg-fg-mute',
    defaultBadge: 'Future',
    badgeClass: 'bg-bg-elev-2 text-fg-mute border-border',
  },
};

export function RoadmapItem({ state, label, badge }: RoadmapItemProps) {
  const config = stateConfig[state];
  const badgeText = badge ?? config.defaultBadge;

  return (
    <div className="flex items-center gap-3 py-2">
      <span
        aria-hidden="true"
        className={`w-[10px] h-[10px] rounded-full shrink-0 ${config.dotClass}`}
      />
      <span className="text-fg flex-1">{label}</span>
      <span
        className={`font-mono uppercase text-[0.65rem] tracking-[0.15em] px-2 py-[0.2rem] rounded border ${config.badgeClass}`}
      >
        {badgeText}
      </span>
    </div>
  );
}

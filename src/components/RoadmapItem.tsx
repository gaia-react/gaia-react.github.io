type RoadmapItemProperties = {
  badge?: string;
  label: string;
  state: RoadmapState;
};

type RoadmapState = 'coming' | 'future' | 'shipped';

const stateConfig: Record<
  RoadmapState,
  {badgeClass: string; defaultBadge: string; dotClass: string}
> = {
  coming: {
    badgeClass: 'bg-warn/15 text-warn-soft border-warn-2',
    defaultBadge: 'Coming soon',
    dotClass: 'bg-warn',
  },
  future: {
    badgeClass: 'bg-bg-elev-2 text-fg-mute border-border',
    defaultBadge: 'Future',
    dotClass: 'bg-fg-mute',
  },
  shipped: {
    badgeClass: 'bg-secondary/15 text-secondary-soft border-secondary-2',
    defaultBadge: 'Shipped',
    dotClass: 'bg-secondary',
  },
};

export const RoadmapItem = ({badge, label, state}: RoadmapItemProperties) => {
  const config = stateConfig[state];
  const badgeText = badge ?? config.defaultBadge;

  return (
    <div className="flex items-center gap-3 py-2">
      <span
        aria-hidden="true"
        className={`size-[10px] shrink-0 rounded-full ${config.dotClass}`}
      />
      <span className="text-fg flex-1">{label}</span>
      <span
        className={`rounded-sm border px-2 py-[0.2rem] font-mono text-[0.65rem] tracking-[0.15em] uppercase ${config.badgeClass}`}
      >
        {badgeText}
      </span>
    </div>
  );
};

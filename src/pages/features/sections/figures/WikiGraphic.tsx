type GraphNode = {
  big?: true;
  cx: number;
  cy: number;
  label: string;
};

const NODES: GraphNode[] = [
  {big: true, cx: 160, cy: 110, label: 'hot.md'},
  {cx: 60, cy: 60, label: 'auth'},
  {cx: 80, cy: 170, label: 'forms'},
  {cx: 260, cy: 55, label: 'theme'},
  {cx: 270, cy: 170, label: 'i18n'},
  {cx: 160, cy: 30, label: 'routes'},
  {cx: 160, cy: 195, label: 'a11y'},
];

const EDGES: [number, number, number, number][] = [
  [160, 110, 60, 60],
  [160, 110, 80, 170],
  [160, 110, 260, 55],
  [160, 110, 270, 170],
  [160, 110, 160, 30],
  [160, 110, 160, 195],
  [60, 60, 160, 30],
  [260, 55, 160, 30],
  [80, 170, 160, 195],
  [270, 170, 160, 195],
];

const WikiGraphic = () => (
  <div
    aria-hidden="true"
    className="bg-surface border-line-soft mb-9 rounded-lg border p-[0.85rem_1rem_1rem]"
  >
    <svg className="text-muted block h-auto w-full" viewBox="0 0 320 220">
      {/* Edges */}
      <g opacity="0.35" stroke="currentColor" strokeWidth="1">
        {EDGES.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            x2={x2}
            y1={y1}
            y2={y2}
          />
        ))}
      </g>

      {/* Nodes */}
      {NODES.map(({big, cx, cy, label}) => (
        <g key={label}>
          {big ?
            <circle
              cx={cx}
              cy={cy}
              fill="var(--color-secondary)"
              r={9}
              style={{
                filter:
                  'drop-shadow(0 0 6px color-mix(in oklab, var(--color-secondary) 40%, transparent))',
              }}
            />
          : <circle cx={cx} cy={cy} fill="var(--color-ink-dim)" r={5} />}
          <text
            fill="var(--color-ink-dim)"
            fontFamily="var(--font-mono)"
            fontSize="9"
            letterSpacing="0.04em"
            textAnchor="middle"
            x={cx}
            y={big ? cy + 24 : cy + 18}
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  </div>
);

export default WikiGraphic;

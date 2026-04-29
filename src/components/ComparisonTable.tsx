type ComparisonCell =
  | { kind: 'check' }
  | { kind: 'dash' }
  | { kind: 'partial'; label?: string }
  | { kind: 'value'; label: string };

type ComparisonColumn = {
  key: string;
  label: string;
  isHero?: boolean;
};

type ComparisonRow = {
  feature: string;
  values: Record<string, ComparisonCell>;
  mobileLabel?: (cell: ComparisonCell | undefined) => string;
};

type ComparisonTableProps = {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  summary?: string;
};

function cellAriaLabel(cell: ComparisonCell): string {
  if (cell.kind === 'check') return 'yes';
  if (cell.kind === 'dash') return 'no';
  if (cell.kind === 'partial') return cell.label ? `partial: ${cell.label}` : 'partial';
  return cell.label;
}

function isPositive(cell: ComparisonCell): boolean {
  return cell.kind === 'check' || cell.kind === 'value';
}

function DesktopCell({ cell }: { cell: ComparisonCell | undefined }) {
  if (!cell) {
    return <span className="text-fg-mute text-lg font-bold leading-none" aria-label="no">✕</span>;
  }
  if (cell.kind === 'check') {
    return (
      <span className="text-secondary-soft text-xl font-bold leading-none" aria-label="yes">
        ✓
      </span>
    );
  }
  if (cell.kind === 'dash') {
    return (
      <span className="text-fg-mute/50 text-xs" aria-label="no">
        ✕
      </span>
    );
  }
  if (cell.kind === 'partial') {
    return (
      <span className="text-warn" aria-label={cellAriaLabel(cell)}>
        {cell.label ?? '~'}
      </span>
    );
  }
  return <span className="text-fg" aria-label={cell.label}>{cell.label}</span>;
}

function MobileCard({
  column,
  rows,
  isHero,
}: {
  column: ComparisonColumn;
  rows: ComparisonRow[];
  isHero?: boolean;
}) {
  const cardClass = isHero
    ? 'bg-bg-tint rounded-lg border-t-2 border-t-secondary p-5'
    : 'bg-bg-elev rounded-lg p-5 border border-border-soft';
  const titleClass = isHero
    ? 'font-display font-light text-2xl text-fg mb-4 tracking-[-0.02em]'
    : 'font-body font-medium text-lg text-fg-dim mb-4 tracking-normal';

  return (
    <div className={cardClass}>
      <h3 className={titleClass}>{column.label}</h3>
      <ul className="flex flex-wrap gap-2">
        {rows.map((row) => {
          const cell = row.values[column.key];
          const positive = cell ? isPositive(cell) : false;
          const pillClass = positive
            ? isHero
              ? 'bg-secondary/30 text-fg border border-secondary-2'
              : 'bg-secondary/15 text-fg-dim border border-secondary-2/60'
            : 'bg-transparent text-fg-mute/70 border border-border-soft line-through';
          const label = row.mobileLabel ? row.mobileLabel(cell) : row.feature;
          return (
            <li
              key={row.feature}
              className={`text-[0.75rem] px-2 py-1 rounded ${pillClass}`}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function ComparisonTable({ columns, rows, summary }: ComparisonTableProps) {
  const heroColumn = columns.find((c) => c.isHero);
  const otherColumns = columns.filter((c) => !c.isHero);

  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 border-b border-border-soft" />
                {columns.map((col) => {
                  const isHero = col.isHero;
                  return (
                    <th
                      key={col.key}
                      className={`text-left p-3 align-bottom border-b border-border-soft ${
                        isHero
                          ? 'bg-bg-tint border-t-2 border-t-secondary font-display font-light text-fg text-lg tracking-[-0.02em]'
                          : 'font-body font-medium text-fg-dim text-base tracking-normal'
                      }`}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th
                    scope="row"
                    className="text-left p-3 border-b border-border-soft font-normal text-fg-dim"
                  >
                    {row.feature}
                  </th>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`p-3 border-b border-border-soft ${
                        col.isHero ? 'bg-bg-tint' : ''
                      }`}
                    >
                      <DesktopCell cell={row.values[col.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {summary && (
          <p className="italic text-fg-dim text-center mt-6 font-display font-light">
            {summary}
          </p>
        )}
      </div>

      {/* Mobile card stack */}
      <div className="md:hidden space-y-6">
        {heroColumn && <MobileCard column={heroColumn} rows={rows} isHero />}
        {otherColumns.map((col) => (
          <MobileCard key={col.key} column={col} rows={rows} />
        ))}
        {summary && (
          <p className="italic text-fg-dim text-center font-display font-light">
            {summary}
          </p>
        )}
      </div>
    </div>
  );
}

export type { ComparisonCell, ComparisonColumn, ComparisonRow };

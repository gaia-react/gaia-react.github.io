export type ComparisonCell =
  | {kind: 'check'}
  | {kind: 'dash'}
  | {kind: 'partial'; label?: string}
  | {kind: 'value'; label: string};

export type ComparisonColumn = {
  isHero?: boolean;
  key: string;
  label: string;
};

export type ComparisonRow = {
  feature: string;
  mobileLabel?: (cell: ComparisonCell | undefined) => string;
  values: Record<string, ComparisonCell>;
};

type ComparisonTableProperties = {
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  summary?: string;
};

const cellAriaLabel = (cell: ComparisonCell): string => {
  if (cell.kind === 'check') return 'yes';
  if (cell.kind === 'dash') return 'no';
  if (cell.kind === 'partial')
    return cell.label ? `partial: ${cell.label}` : 'partial';

  return cell.label;
};

const isPositive = (cell: ComparisonCell | undefined): boolean =>
  cell?.kind === 'check' || cell?.kind === 'value';

const DesktopCell = ({cell}: {cell: ComparisonCell | undefined}) => {
  if (!cell) {
    return (
      <span
        aria-label="no"
        className="text-fg-mute text-lg leading-none font-bold"
      >
        ✕
      </span>
    );
  }

  if (cell.kind === 'check') {
    return (
      <span
        aria-label="yes"
        className="text-secondary-soft text-xl leading-none font-bold"
      >
        ✓
      </span>
    );
  }

  if (cell.kind === 'dash') {
    return (
      <span aria-label="no" className="text-fg-mute/50 text-xs">
        ✕
      </span>
    );
  }

  if (cell.kind === 'partial') {
    return (
      <span aria-label={cellAriaLabel(cell)} className="text-warn">
        {cell.label ?? '~'}
      </span>
    );
  }

  return (
    <span aria-label={cell.label} className="text-fg">
      {cell.label}
    </span>
  );
};

const MobileCard = ({
  column,
  isHero,
  rows,
}: {
  column: ComparisonColumn;
  isHero?: boolean;
  rows: ComparisonRow[];
}) => {
  const cardClass =
    isHero ?
      'bg-bg-tint rounded-lg border-t-2 border-t-secondary p-5'
    : 'bg-bg-elev rounded-lg p-5 border border-border-soft';
  const titleClass =
    isHero ?
      'font-display font-light text-2xl text-fg mb-4 tracking-[-0.02em]'
    : 'font-body font-medium text-lg text-fg-dim mb-4 tracking-normal';

  return (
    <div className={cardClass}>
      <h3 className={titleClass}>{column.label}</h3>
      <ul className="flex flex-wrap gap-2">
        {rows.map((row) => {
          const cell = row.values[column.key];
          const positive = isPositive(cell);
          const pillClass =
            positive ?
              isHero ? 'bg-secondary/30 text-fg border border-secondary-2'
              : 'bg-secondary/15 text-fg-dim border border-secondary-2/60'
            : 'bg-transparent text-fg-mute/70 border border-border-soft line-through';
          const label = row.mobileLabel ? row.mobileLabel(cell) : row.feature;

          return (
            <li
              key={row.feature}
              className={`rounded-sm px-2 py-1 text-[0.75rem] ${pillClass}`}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const ComparisonTable = ({
  columns,
  rows,
  summary,
}: ComparisonTableProperties) => {
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
                <th className="border-border-soft border-b p-3 text-left" />
                {columns.map(({isHero, key, label}) => (
                  <th
                    key={key}
                    className={`border-border-soft border-b p-3 text-left align-bottom ${
                      isHero ?
                        'bg-bg-tint border-t-secondary font-display text-fg border-t-2 text-lg font-light tracking-[-0.02em]'
                      : 'font-body text-fg-dim text-base font-medium tracking-normal'
                    }`}
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <th
                    className="border-border-soft text-fg-dim border-b p-3 text-left font-normal"
                    scope="row"
                  >
                    {row.feature}
                  </th>
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`border-border-soft border-b p-3 ${
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
          <p className="text-fg-dim font-display mt-6 text-center font-light italic">
            {summary}
          </p>
        )}
      </div>

      {/* Mobile card stack */}
      <div className="space-y-6 md:hidden">
        {heroColumn && (
          <MobileCard column={heroColumn} isHero={true} rows={rows} />
        )}
        {otherColumns.map((col) => (
          <MobileCard key={col.key} column={col} rows={rows} />
        ))}
        {summary && (
          <p className="text-fg-dim font-display text-center font-light italic">
            {summary}
          </p>
        )}
      </div>
    </div>
  );
};

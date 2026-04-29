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

function countPositives(row: ComparisonRow, columnKey: string): number {
  const cell = row.values[columnKey];
  return cell && isPositive(cell) ? 1 : 0;
}

function scoreFor(rows: ComparisonRow[], columnKey: string): number {
  return rows.reduce((sum, row) => sum + countPositives(row, columnKey), 0);
}

function DesktopCell({ cell }: { cell: ComparisonCell | undefined }) {
  if (!cell) {
    return <span className="text-fg-mute" aria-label="no">–</span>;
  }
  if (cell.kind === 'check') {
    return (
      <span className="text-secondary text-base" aria-label="yes">
        ✓
      </span>
    );
  }
  if (cell.kind === 'dash') {
    return (
      <span className="text-fg-mute" aria-label="no">
        –
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

export function ComparisonTable({ columns, rows, summary }: ComparisonTableProps) {
  const totalRows = rows.length;
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
                          : 'font-mono uppercase text-[0.7rem] tracking-[0.15em] text-fg-mute'
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
        {heroColumn && (
          <div className="bg-bg-tint rounded-lg border-t-2 border-t-secondary p-5">
            <div className="font-mono uppercase text-[0.65rem] tracking-[0.15em] text-secondary-soft mb-2">
              {totalRows} / {totalRows} decisions made
            </div>
            <h3 className="font-display font-light text-2xl text-fg mb-4 tracking-[-0.02em]">
              {heroColumn.label}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {rows.map((row) => {
                const cell = row.values[heroColumn.key];
                const positive = cell && isPositive(cell);
                return (
                  <li
                    key={row.feature}
                    className="flex items-start gap-2 text-[0.875rem]"
                  >
                    <span
                      aria-hidden="true"
                      className={positive ? 'text-secondary' : 'text-fg-mute'}
                    >
                      {positive ? '✓' : '–'}
                    </span>
                    <span className="text-fg-dim">{row.feature}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {otherColumns.map((col) => {
          const score = scoreFor(rows, col.key);
          return (
            <div
              key={col.key}
              className="bg-bg-elev rounded-lg p-5 border border-border-soft"
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display font-light text-xl text-fg tracking-[-0.02em]">
                  {col.label}
                </h3>
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-fg-mute">
                  {score} / {totalRows}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {rows.map((row) => {
                  const cell = row.values[col.key];
                  const kind = cell?.kind ?? 'dash';
                  const label =
                    cell && cell.kind === 'value'
                      ? `${row.feature}: ${cell.label}`
                      : cell && cell.kind === 'partial' && cell.label
                        ? `${row.feature}: ${cell.label}`
                        : row.feature;
                  const pillClass =
                    kind === 'check' || kind === 'value'
                      ? 'bg-secondary/25 text-fg border border-secondary-2'
                      : kind === 'partial'
                        ? 'bg-warn/10 text-warn-soft border border-warn-2'
                        : 'bg-transparent text-fg-mute line-through';
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
        })}
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

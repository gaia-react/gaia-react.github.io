const TOTAL = 48;
const LOADED = new Set([6, 7, 19, 20, 33]);

const TokenGraphic = () => (
  <div
    aria-hidden="true"
    className="bg-surface border-line-soft mb-9 rounded-lg border p-[1rem_1.1rem_1.2rem] font-mono"
  >
    {/* Header */}
    <div className="text-muted border-line-soft mb-[0.85rem] flex items-baseline justify-between border-b pb-[0.6rem] text-[0.7rem] tracking-[0.14em] uppercase">
      <span>wiki vault</span>
      <span className="text-ink-dim">
        {TOTAL} pages on disk · {LOADED.size} loaded
      </span>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-12 gap-[4px] py-[0.4rem] pb-[0.85rem]">
      {Array.from({length: TOTAL}).map((_, index) => {
        const isLoaded = LOADED.has(index);
        const pageKey = `page-${index}`;

        return isLoaded ?
            <span
              key={pageKey}
              className="border-accent/70 bg-accent block h-[14px] rounded-[2px] border"
              style={{
                boxShadow:
                  '0 0 0 1px color-mix(in oklab, var(--color-accent) 30%, transparent)',
              }}
            />
          : <span
              key={pageKey}
              className="border-line-soft block h-[14px] rounded-[2px] border bg-white/4"
            />;
      })}
    </div>

    {/* Legend */}
    <div className="border-line-soft text-muted flex gap-5 border-t pt-[0.6rem] text-[0.7rem] tracking-[0.04em]">
      <span className="inline-flex items-center gap-[0.45rem]">
        <span
          className="bg-accent border-accent/70 inline-block size-[10px] rounded-[2px] border"
          style={{
            boxShadow:
              '0 0 0 1px color-mix(in oklab, var(--color-accent) 30%, transparent)',
          }}
        />
        in context
      </span>
      <span className="inline-flex items-center gap-[0.45rem]">
        <span className="border-line-soft inline-block size-[10px] rounded-[2px] border bg-white/4" />
        on disk · not loaded
      </span>
    </div>
  </div>
);

export default TokenGraphic;

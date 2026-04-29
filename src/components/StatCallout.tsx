type StatCalloutProperties = {
  accent?: 'accent' | 'secondary' | 'warn';
  label: string;
  value: string;
};

export const StatCallout = ({
  accent = 'accent',
  label,
  value,
}: StatCalloutProperties) => {
  const stripeClass =
    accent === 'secondary' ? 'border-l-secondary'
    : accent === 'warn' ? 'border-l-warn'
    : 'border-l-accent';

  return (
    <div
      className={`bg-surface-raised rounded-sm border-l-[0.1875rem] p-4 ${stripeClass}`}
    >
      <div className="font-display text-ink text-[1.6rem] leading-[1.1] font-light tracking-[-0.02em]">
        {value}
      </div>
      <div className="text-muted mt-1 font-mono text-[0.7rem] tracking-[0.15em] uppercase">
        {label}
      </div>
    </div>
  );
};

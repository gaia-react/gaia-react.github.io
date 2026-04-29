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
      className={`bg-bg-elev-2 rounded-sm border-l-[3px] p-4 ${stripeClass}`}
    >
      <div className="font-display text-fg text-[1.6rem] leading-[1.1] font-light tracking-[-0.02em]">
        {value}
      </div>
      <div className="text-fg-mute mt-1 font-mono text-[0.7rem] tracking-[0.15em] uppercase">
        {label}
      </div>
    </div>
  );
};

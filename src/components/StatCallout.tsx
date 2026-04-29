type StatCalloutProps = {
  value: string;
  label: string;
  accent?: 'accent' | 'secondary' | 'warn';
};

export function StatCallout({ value, label, accent = 'accent' }: StatCalloutProps) {
  const stripeClass =
    accent === 'secondary'
      ? 'border-l-secondary'
      : accent === 'warn'
        ? 'border-l-warn'
        : 'border-l-accent';

  return (
    <div
      className={`bg-bg-elev-2 p-4 rounded border-l-[3px] ${stripeClass}`}
    >
      <div className="font-display font-light text-[1.6rem] text-fg leading-[1.1] tracking-[-0.02em]">
        {value}
      </div>
      <div className="font-mono uppercase text-[0.7rem] tracking-[0.15em] text-fg-mute mt-1">
        {label}
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';

type CalloutProps = {
  variant?: 'info' | 'warn' | 'note';
  title?: string;
  children: ReactNode;
};

export function Callout({ variant = 'info', title, children }: CalloutProps) {
  const styles = {
    info: {
      stripe: 'border-l-secondary',
      bg: 'bg-secondary/8',
      title: 'text-secondary-soft',
    },
    warn: {
      stripe: 'border-l-warn',
      bg: 'bg-warn/8',
      title: 'text-warn-soft',
    },
    note: {
      stripe: 'border-l-border',
      bg: 'bg-bg-elev',
      title: 'text-fg-dim',
    },
  }[variant];

  return (
    <div
      className={`${styles.bg} ${styles.stripe} border-l-[3px] rounded p-4`}
    >
      {title && (
        <div
          className={`font-display font-light text-[1rem] ${styles.title} mb-1 tracking-[-0.02em]`}
        >
          {title}
        </div>
      )}
      <div className="text-fg-dim text-[0.9rem] leading-[1.6]">{children}</div>
    </div>
  );
}

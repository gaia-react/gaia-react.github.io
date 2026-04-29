import type {ReactNode} from 'react';

type CalloutProperties = {
  children: ReactNode;
  title?: string;
  variant?: 'info' | 'note' | 'warn';
};

export const Callout = ({
  children,
  title,
  variant = 'info',
}: CalloutProperties) => {
  const styles = {
    info: {
      bg: 'bg-secondary/8',
      stripe: 'border-l-secondary',
      title: 'text-secondary-soft',
    },
    note: {
      bg: 'bg-surface',
      stripe: 'border-l-border',
      title: 'text-ink-dim',
    },
    warn: {
      bg: 'bg-warn/8',
      stripe: 'border-l-warn',
      title: 'text-warn-soft',
    },
  }[variant];

  return (
    <div
      className={`${styles.bg} ${styles.stripe} rounded-sm border-l-[0.1875rem] p-4`}
    >
      {title && (
        <div
          className={`font-display text-[1rem] font-light ${styles.title} mb-1 tracking-[-0.02em]`}
        >
          {title}
        </div>
      )}
      <div className="text-ink-dim text-[0.9rem] leading-[1.6]">{children}</div>
    </div>
  );
};

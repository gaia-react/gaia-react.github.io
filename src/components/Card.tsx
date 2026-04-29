import type { ReactNode } from 'react';
import { ArrowRightIcon } from '@/components/icons';

type CardProps = {
  icon?: ReactNode;
  iconColor?: 'accent' | 'secondary';
  title: string;
  children: ReactNode;
  href?: string;
};

export function Card({ icon, iconColor = 'accent', title, children, href }: CardProps) {
  const stripeClass =
    iconColor === 'secondary' ? 'border-l-secondary' : 'border-l-accent';
  const iconClass =
    iconColor === 'secondary' ? 'text-secondary' : 'text-accent';
  const linkClass =
    iconColor === 'secondary'
      ? 'text-secondary-soft hover:text-secondary'
      : 'text-accent-soft hover:text-accent';

  return (
    <div
      className={`bg-bg-elev rounded-lg p-6 border-l-[3px] ${stripeClass}`}
    >
      {icon && (
        <div className={`${iconClass} mb-4`} aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="font-display font-light text-xl text-fg mb-2 tracking-[-0.02em] leading-[1.15]">
        {title}
      </h3>
      <div className="text-fg-dim leading-[1.6]">{children}</div>
      {href && (
        <a
          href={href}
          className={`inline-flex items-center gap-1 mt-4 ${linkClass} transition-colors`}
        >
          <span>Learn more</span>
          <ArrowRightIcon size={16} />
        </a>
      )}
    </div>
  );
}

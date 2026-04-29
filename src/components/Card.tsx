import type {ReactNode} from 'react';
import {ArrowRightIcon} from '@/components/icons';

type CardProperties = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  iconColor?: 'accent' | 'secondary';
  title: string;
};

export const Card = ({
  children,
  href,
  icon,
  iconColor = 'accent',
  title,
}: CardProperties) => {
  const stripeClass =
    iconColor === 'secondary' ? 'border-l-secondary' : 'border-l-accent';
  const iconClass =
    iconColor === 'secondary' ? 'text-secondary' : 'text-accent';
  const linkClass =
    iconColor === 'secondary' ?
      'text-secondary-soft hover:text-secondary'
    : 'text-accent-soft hover:text-accent';

  return (
    <div className={`bg-bg-elev rounded-lg border-l-[3px] p-6 ${stripeClass}`}>
      {icon && (
        <div aria-hidden="true" className={`${iconClass} mb-4`}>
          {icon}
        </div>
      )}
      <h3 className="font-display text-fg mb-2 text-xl leading-[1.15] font-light tracking-[-0.02em]">
        {title}
      </h3>
      <div className="text-fg-dim leading-[1.6]">{children}</div>
      {href && (
        <a
          className={`mt-4 inline-flex items-center gap-1 ${linkClass} transition-colors`}
          href={href}
        >
          <span>Learn more</span>
          <ArrowRightIcon size={16} />
        </a>
      )}
    </div>
  );
};

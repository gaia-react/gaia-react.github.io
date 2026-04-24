import type { FC, SVGProps } from 'react';

type ClaudeLogoProps = Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> &
  ({ height?: never; width?: number } | { height?: number; width?: never });

const ClaudeLogo: FC<ClaudeLogoProps> = ({ height, width, ...props }) => {
  const size = height ?? width ?? 512;

  return (
    <svg
      height={size}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#D97757">
        <circle cx="32" cy="32" r="4" />
        <rect x="30" y="4" width="4" height="14" rx="2" />
        <rect x="30" y="46" width="4" height="14" rx="2" />
        <rect x="4" y="30" width="14" height="4" rx="2" />
        <rect x="46" y="30" width="14" height="4" rx="2" />
        <rect
          x="30"
          y="4"
          width="4"
          height="14"
          rx="2"
          transform="rotate(45 32 32)"
        />
        <rect
          x="30"
          y="46"
          width="4"
          height="14"
          rx="2"
          transform="rotate(45 32 32)"
        />
        <rect
          x="30"
          y="4"
          width="4"
          height="14"
          rx="2"
          transform="rotate(-45 32 32)"
        />
        <rect
          x="30"
          y="46"
          width="4"
          height="14"
          rx="2"
          transform="rotate(-45 32 32)"
        />
      </g>
    </svg>
  );
};

export default ClaudeLogo;

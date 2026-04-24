import type { FC, SVGProps } from 'react';

type ObsidianLogoProps = Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> &
  ({ height?: never; width?: number } | { height?: number; width?: never });

const ObsidianLogo: FC<ObsidianLogoProps> = ({ height, width, ...props }) => {
  const size = height ?? width ?? 512;

  return (
    <svg
      height={size}
      viewBox="0 0 64 64"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="obsidian-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
      </defs>
      <path
        fill="url(#obsidian-grad)"
        d="M32 4 L54 20 L46 52 L18 52 L10 20 Z"
      />
      <path
        fill="#ffffff"
        fillOpacity="0.28"
        d="M32 4 L54 20 L32 28 Z"
      />
      <path
        fill="#ffffff"
        fillOpacity="0.14"
        d="M32 28 L46 52 L18 52 Z"
      />
    </svg>
  );
};

export default ObsidianLogo;

import type {FC, SVGProps} from 'react';

type ShadcnLogoProperties = Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> &
  ({height?: never; width?: number} | {height?: number; width?: never});

const ShadcnLogo: FC<ShadcnLogoProperties> = ({
  height,
  width,
  ...properties
}) => {
  const size = height ?? width ?? 256;

  return (
    <svg
      fill="none"
      height={size}
      viewBox="0 0 256 256"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...properties}
    >
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={208}
        x2={128}
        y1={128}
        y2={208}
      />
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        x1={192}
        x2={40}
        y1={40}
        y2={192}
      />
    </svg>
  );
};

export default ShadcnLogo;

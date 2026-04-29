type IconProps = {
  className?: string;
  size?: number;
};

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

function svgProps(size: number, className?: string) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    'aria-hidden': true,
    ...baseProps,
  };
}

// Shield with off-center check. Slightly drawn, not stamped
export function ShieldCheckIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M12 3.2 4.6 5.8v6.1c0 4 3 7.4 7.4 8.9 4.4-1.5 7.4-4.9 7.4-8.9V5.8L12 3.2Z" />
      <path d="m8.6 12.3 2.4 2.5 4.6-5" />
    </svg>
  );
}

// Three rising waves at increasing scale
export function WaveIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M3 16.5c1.4 0 1.4-1.4 2.8-1.4s1.4 1.4 2.8 1.4 1.4-1.4 2.8-1.4 1.4 1.4 2.8 1.4 1.4-1.4 2.8-1.4 1.4 1.4 2.8 1.4" />
      <path d="M3 12.2c1.6 0 1.6-1.8 3.2-1.8s1.6 1.8 3.2 1.8 1.6-1.8 3.2-1.8 1.6 1.8 3.2 1.8 1.6-1.8 3.2-1.8" />
      <path d="M3 7.6c1.8 0 1.8-2.2 3.6-2.2S8.4 7.6 10.2 7.6s1.8-2.2 3.6-2.2 1.8 2.2 3.6 2.2" />
    </svg>
  );
}

// Reflection. Magnifying glass with a checkmark inside the lens — review/audit
export function ReflectionIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m18.6 18.6-4-4" />
      <path d="m8 10.6 2 2 3.2-3.5" />
    </svg>
  );
}

// Memory. Stacked tiers
export function MemoryIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <rect x="3.6" y="4.8" width="16.8" height="3.4" rx="0.6" />
      <rect x="3.6" y="10.3" width="16.8" height="3.4" rx="0.6" />
      <rect x="3.6" y="15.8" width="16.8" height="3.4" rx="0.6" />
    </svg>
  );
}

// Multi-agent. Three nodes with connecting strokes
export function MultiAgentIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <circle cx="12" cy="5.4" r="2.2" />
      <circle cx="5.4" cy="17.4" r="2.2" />
      <circle cx="18.6" cy="17.4" r="2.2" />
      <path d="m10.7 7.3-3.9 8M13.3 7.3l3.9 8M7.6 17.4h8.8" />
    </svg>
  );
}

export function ArrowRightIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4.5 12h14.4" />
      <path d="m13.6 6.6 5.6 5.4-5.6 5.4" />
    </svg>
  );
}

export function CheckIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="m4.8 12.6 4.4 4.4 10-10.4" />
    </svg>
  );
}

export function MinusIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M5 12h14" />
    </svg>
  );
}

export function TildeIcon({ className, size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size, className)}>
      <path d="M4.5 13.5c1.6-3.4 3.6-3.4 5.4-1.6 1.8 1.8 3.6 1.8 5.4-.6 1-1.4 2.2-1.8 3.2-1" />
    </svg>
  );
}

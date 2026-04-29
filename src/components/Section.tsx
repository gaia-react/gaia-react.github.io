import type {ReactNode} from 'react';

type SectionProperties = {
  children: ReactNode;
  className?: string;
  id: string;
  paddingBottom?: string;
  paddingTop?: string;
  title?: string;
};

export const SectionHeading = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => (
  <h2 className="group font-display text-ink mb-10 text-[clamp(2rem,4vw,3rem)] leading-[1.15] font-light tracking-[-0.02em]">
    <a className="text-inherit no-underline" href={`#${id}`}>
      {children}
      <span
        aria-hidden="true"
        className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
      >
        #
      </span>
    </a>
  </h2>
);

export const Section = ({
  children,
  className,
  id,
  paddingBottom = '4rem',
  paddingTop = '4rem',
  title,
}: SectionProperties) => (
  <section
    className={`border-ink/4 border-b ${className ?? ''}`}
    style={{
      paddingBottom,
      paddingTop,
    }}
  >
    <div className="mx-auto max-w-3xl scroll-mt-20 px-8" id={id}>
      {title && <SectionHeading id={id}>{title}</SectionHeading>}
      {children}
    </div>
  </section>
);

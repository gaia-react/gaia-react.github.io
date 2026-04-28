import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  paddingTop?: string;
  paddingBottom?: string;
};

export function Section({ id, title, children, className, paddingTop = "4rem", paddingBottom = "4rem" }: SectionProps) {
  return (
    <section
      className={className}
      style={{
        paddingTop,
        paddingBottom,
      }}
    >
      <div
        id={id}
        className="[scroll-margin-top:5rem] max-w-[48rem] mx-auto px-8"
      >
        {title && (
          <h2
            className="group font-display font-light text-[clamp(2rem,4vw,3rem)] text-fg mb-10 tracking-[-0.02em] leading-[1.15]"
          >
            <a href={`#${id}`} className="text-inherit no-underline">
              {title}
              <span
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-40 ml-[0.4em] text-[0.6em] transition-opacity duration-150 select-none"
              >
                #
              </span>
            </a>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

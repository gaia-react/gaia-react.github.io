import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
  paddingTop?: string;
};

export function Section({ id, title, children, className, paddingTop = "4rem" }: SectionProps) {
  return (
    <section
      className={className}
      style={{
        paddingTop,
        paddingBottom: "4rem",
      }}
    >
      <div
        id={id}
        style={{
          scrollMarginTop: "5rem",
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {title && (
          <h2
            className="group"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-fg)",
              marginBottom: "2.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            <a href={`#${id}`} style={{ color: "inherit", textDecoration: "none" }}>
              {title}
              <span
                aria-hidden="true"
                className="opacity-0 group-hover:opacity-40"
                style={{
                  marginLeft: "0.4em",
                  fontSize: "0.6em",
                  transition: "opacity 0.15s",
                  userSelect: "none",
                }}
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

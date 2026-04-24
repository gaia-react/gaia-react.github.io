import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        scrollMarginTop: "5rem",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "0 2rem",
        }}
      >
        {title && (
          <h2
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
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}

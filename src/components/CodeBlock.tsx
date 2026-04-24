type CodeBlockProps = {
  title?: string;
  language?: string;
  children: string;
};

export function CodeBlock({ title, language: _language, children }: CodeBlockProps) {
  return (
    <div
      style={{
        borderRadius: "0.5rem",
        border: "1px solid var(--color-border)",
        overflow: "hidden",
        marginBottom: "1.5rem",
      }}
    >
      <div
        style={{
          backgroundColor: "var(--color-bg-elev-2)",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          borderBottom: "1px solid var(--color-border)",
          minHeight: "2.25rem",
        }}
      >
        {title ? (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              color: "var(--color-fg-dim)",
              letterSpacing: "0.05em",
            }}
          >
            {title}
          </span>
        ) : (
          <>
            <span style={dotStyle("#c0392b")} />
            <span style={dotStyle("#f39c12")} />
            <span style={dotStyle("#27ae60")} />
          </>
        )}
      </div>
      <pre
        style={{
          backgroundColor: "var(--color-bg-elev)",
          color: "var(--color-fg)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          lineHeight: 1.65,
          padding: "1.25rem 1.5rem",
          margin: 0,
          overflowX: "auto",
          whiteSpace: "pre",
        }}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}

function dotStyle(color: string): React.CSSProperties {
  return {
    width: "0.625rem",
    height: "0.625rem",
    borderRadius: "50%",
    backgroundColor: color,
    flexShrink: 0,
  };
}

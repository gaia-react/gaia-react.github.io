type CodeBlockProps = {
  title?: string;
  language?: string;
  children: string;
};

export function CodeBlock({ title, language: _language, children }: CodeBlockProps) {
  return (
    <div className="rounded-lg border border-border overflow-hidden mb-6">
      <div className="bg-bg-elev-2 py-2 px-4 flex items-center gap-2 border-b border-border min-h-[2.25rem]">
        {title ? (
          <span className="font-mono text-xs text-fg-dim tracking-[0.05em]">
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
      <pre className="bg-bg-elev text-fg font-mono text-[0.7rem] md:text-[0.8125rem] leading-[1.65] py-5 px-3 md:px-6 m-0 overflow-x-auto whitespace-pre">
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

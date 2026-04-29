import type {CSSProperties} from 'react';

type CodeBlockProperties = {
  children: string;
  language?: string;
  title?: string;
};

const dotStyle = (color: string): CSSProperties => ({
  backgroundColor: color,
  borderRadius: '50%',
  flexShrink: 0,
  height: '0.625rem',
  width: '0.625rem',
});

export const CodeBlock = ({
  children,
  language: _language,
  title,
}: CodeBlockProperties) => (
  <div className="border-line mb-6 overflow-hidden rounded-lg border">
    <div className="bg-surface-raised border-line flex min-h-9 items-center gap-2 border-b px-4 py-2">
      {title ?
        <span className="text-ink-dim font-mono text-xs tracking-wider">
          {title}
        </span>
      : <>
          <span style={dotStyle('#c0392b')} />
          <span style={dotStyle('#f39c12')} />
          <span style={dotStyle('#27ae60')} />
        </>
      }
    </div>
    <pre className="bg-surface text-ink m-0 overflow-x-auto px-3 py-5 font-mono text-[0.7rem] leading-[1.65] whitespace-pre md:px-6 md:text-[0.8125rem]">
      <code>{children}</code>
    </pre>
  </div>
);

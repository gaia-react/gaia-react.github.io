import type {ReactNode} from 'react';

const Wikilink = ({children}: {children: ReactNode}) => (
  <span className="text-accent">
    <span className="text-accent/45">[[</span>
    {children}
    <span className="text-accent/45">]]</span>
  </span>
);

const ObsidianNote = () => (
  <div
    aria-hidden={true}
    className="bg-surface border-line-soft mb-9 rounded-lg border p-[1rem_1.25rem_1.25rem]"
  >
    <div className="border-line-soft text-muted mb-4 flex items-center justify-between border-b pb-[0.55rem] font-mono text-[0.62rem] tracking-[0.18em] uppercase">
      <span>auth / login-flow.md</span>
      <span className="text-ink-dim">obsidian</span>
    </div>

    <div className="mb-5 space-y-[0.4rem] font-mono text-[0.78rem]">
      <div className="grid grid-cols-[5.5rem_1fr] gap-2">
        <span className="text-muted">tags</span>
        <span className="text-ink-dim">auth, frontend, security</span>
      </div>
      <div className="grid grid-cols-[5.5rem_1fr] gap-2">
        <span className="text-muted">status</span>
        <span className="text-secondary-soft">✓ shipped</span>
      </div>
      <div className="grid grid-cols-[5.5rem_1fr] gap-2">
        <span className="text-muted">related</span>
        <span className="text-ink-dim">
          <Wikilink>oauth-providers</Wikilink>{' '}
          <Wikilink>session-store</Wikilink>
        </span>
      </div>
      <div className="grid grid-cols-[5.5rem_1fr] gap-2">
        <span className="text-muted">updated</span>
        <span className="text-ink-dim">2026-05-12</span>
      </div>
    </div>

    <div className="text-ink mb-3 text-[1.1rem] font-medium tracking-[-0.01em]">
      Authentication flow
    </div>

    <p className="text-ink-dim mb-3 text-[0.9rem] leading-[1.6]">
      The login route lives in <Wikilink>routes/auth</Wikilink> and uses{' '}
      <Wikilink>session-store</Wikilink> to persist tokens. See{' '}
      <Wikilink>security-headers</Wikilink> for CSP requirements.
    </p>

    <div className="text-ink mt-5 mb-2 text-[0.96rem] font-medium tracking-[-0.005em]">
      Token rotation
    </div>
    <p className="text-ink-dim text-[0.9rem] leading-[1.6]">
      Tokens rotate every 24h via <Wikilink>cron/rotate-tokens</Wikilink>.
    </p>

    <div className="border-line-soft text-muted mt-6 border-t pt-[0.6rem] font-mono text-[0.6rem] tracking-[0.18em] uppercase">
      Linked from
    </div>
    <div className="text-ink-dim mt-2 text-[0.84rem]">
      <Wikilink>product-flows</Wikilink> · <Wikilink>onboarding</Wikilink> ·{' '}
      <Wikilink>security-audit-2026-04</Wikilink>
    </div>
  </div>
);

export default ObsidianNote;

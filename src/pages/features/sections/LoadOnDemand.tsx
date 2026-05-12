import type {ReactNode} from 'react';

type Column = {
  body: ReactNode;
  name: string;
  specimen: ReactNode;
  when: string;
};

const COLUMNS: Column[] = [
  {
    body: (
      <>
        Each rule declares the file patterns it cares about via{' '}
        <code>paths:</code> frontmatter. The Tailwind rule loads when you edit a{' '}
        <code>.tsx</code> or <code>.css</code> file. The Storybook rule loads
        only on <code>.stories.tsx</code> files. The rest stay dormant until
        matching files are touched.
      </>
    ),
    name: 'Scoped rules',
    specimen: (
      <>
        <div className="text-muted">.claude/rules/tailwind.md</div>
        <div className="border-line-soft my-[0.6rem] border-t" />
        <div className="text-ink-dim">
          <div>---</div>
          <div>
            <span className="text-accent-soft">paths:</span>
          </div>
          <div className="pl-[0.9rem]">
            - <span className="text-ink">&apos;app/**/*.tsx&apos;</span>
          </div>
          <div className="pl-[0.9rem]">
            - <span className="text-ink">&apos;app/**/*.css&apos;</span>
          </div>
          <div>---</div>
        </div>
      </>
    ),
    when: 'Session start',
  },
  {
    body: (
      <>
        Serena MCP gives Claude LSP-backed code intelligence. A query for{' '}
        <code>createSession</code> returns one canonical definition. A grep
        returns every line that mentions the name, and Claude reads each match
        to triage. Symbol search returns the answer, not the noise.
      </>
    ),
    name: 'Symbol search',
    specimen: (
      <>
        <div className="text-muted">serena vs grep</div>
        <div className="border-line-soft my-[0.6rem] border-t" />
        <div className="grid grid-cols-[1fr_auto_auto] gap-x-4">
          <div />
          <div className="text-muted text-right">grep</div>
          <div className="text-muted text-right">serena</div>

          <div>matches</div>
          <div className="text-warn-soft text-right">47</div>
          <div className="text-secondary-soft text-right">1</div>

          <div>read tax</div>
          <div className="text-warn-soft text-right">46 ln</div>
          <div className="text-secondary-soft text-right">0</div>

          <div>type-resolved</div>
          <div className="text-warn-soft text-right">no</div>
          <div className="text-secondary-soft text-right">yes</div>

          <div>imports</div>
          <div className="text-warn-soft text-right">guess</div>
          <div className="text-secondary-soft text-right">trace</div>
        </div>
      </>
    ),
    when: 'Every lookup',
  },
  {
    body: (
      <>
        <code>/gaia audit</code> sweeps memory, the wiki, and autoloaded files
        for cross-store duplication, stale entries, and rules that drift over
        budget. Two stages: a report with sha256 drift checks, then a mechanical
        apply. Anything that changed since the report gets skipped.
      </>
    ),
    name: 'Knowledge audit',
    specimen: (
      <>
        <div className="text-muted">KNOWLEDGE-2026-05-12.md</div>
        <div className="border-line-soft my-[0.6rem] border-t" />
        <div className="text-ink-dim">
          <div className="flex justify-between gap-3">
            <span>Stores scanned</span>
            <span className="text-ink">84 files</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Duplicates</span>
            <span className="text-warn-soft">6</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Over-budget</span>
            <span className="text-warn-soft">1</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Stale</span>
            <span className="text-warn-soft">3</span>
          </div>
          <div className="flex justify-between gap-3">
            <span>Actions queued</span>
            <span className="text-ink">11</span>
          </div>
        </div>
      </>
    ),
    when: 'Periodic sweep',
  },
];

const codeStyles =
  '[&_code]:bg-surface [&_code]:rounded-sm [&_code]:px-1.5 [&_code]:text-[0.875em] [&_code]:text-ink';

const LoadOnDemand = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b py-20"
    id="context"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mx-auto mb-14 max-w-[62ch] md:mb-16">
        <h2 className="group font-display text-ink mb-6 text-center text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
          <a className="text-inherit no-underline" href="#context">
            Load on demand
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
        <p className="text-ink-dim text-[1.05rem] leading-[1.65]">
          Three intercepts keep Claude&apos;s working surface lean. Rules sit
          dormant until you touch matching files. Symbol queries return one
          answer, not every match. Periodic audits prune what accumulates.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-3 md:gap-10">
        {COLUMNS.map(({body, name, specimen, when}) => (
          <div key={name}>
            <div className="text-accent-soft font-mono text-[0.65rem] tracking-[0.2em] uppercase">
              {when}
            </div>
            <h3 className="font-display text-ink mt-3 mb-4 text-[1.4rem] leading-[1.2] font-normal tracking-[-0.01em]">
              {name}
            </h3>
            <p
              className={`text-ink-dim text-[0.97rem] leading-[1.65] ${codeStyles}`}
            >
              {body}
            </p>
            <div className="bg-surface border-line-soft text-ink-dim mt-6 rounded-md border px-[0.95rem] py-[0.85rem] font-mono text-[0.76rem] leading-[1.55]">
              {specimen}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LoadOnDemand;

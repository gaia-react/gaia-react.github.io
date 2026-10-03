import type React from 'react';
import {useEffect, useRef, useState} from 'react';
import {CheckIcon} from '@/components/icons';

// The prompt ships byte-for-byte as written: the page shows it and the copy
// button copies it, so what a user pastes is exactly what was rehearsed.
const promptModules = import.meta.glob<string>('../prompt.md', {
  eager: true,
  import: 'default',
  query: '?raw',
});
const migratePrompt = Object.values(promptModules)[0] ?? '';

const CopyIcon = ({size = 24}: {size?: number}) => (
  <svg
    fill="none"
    height={size}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    width={size}
  >
    <rect height="12" rx="1.5" width="11" x="8" y="8" />
    <path d="M5 16V6a1.5 1.5 0 0 1 1.5-1.5H15" />
  </svg>
);

const BEFORE_YOU_START = [
  {
    detail:
      'The prompt checks `.gaia/VERSION` first and stops on any other version.',
    title: 'Your project is on GAIA 1.6.1.',
  },
  {
    detail:
      'Commit or discard in-flight work, including a test you have seen fail but not yet committed.',
    title: 'Your working tree is clean.',
  },
  {
    detail:
      'The prompt downloads the v1.6.1 and v2.0.0 release tarballs and checks the 2.0.0 sha256.',
    title: '`gh` is installed and signed in.',
  },
  {
    detail:
      'Once the new hooks and settings are in place, the prompt asks you to start a new session and paste it again. A progress file picks up where it left off.',
    title: 'Plan for one session restart.',
  },
];

const STEPS = [
  'Preflight, then download and verify the v1.6.1 baseline and the v2.0.0 bundle.',
  'Record the route table, the lockfile, and your hook registrations before anything changes.',
  'Bump pnpm and Node in their own commit.',
  'Move the app into `frontend/` in a rename-only commit, so history follows every file.',
  'Merge the 2.0.0 harness three ways, keeping your customizations, split the workspace, switch the pre-commit hook from husky to `.githooks/`, and generate the `frontend/` settings.',
  'Rename route files from `+` folders to flat `@react-router/fs-routes` names, and prove every URL is unchanged.',
  'Merge the frontend, upgrade its dependencies, and switch to `cn`.',
  'Point your own files at `frontend/`, verify with the full Quality Gate, and open a pull request.',
];

const AFTER_MERGE = [
  'Push the SPEC number seed tag.',
  'Drop the retired `code-review-audit` required status check, if your branch protection has it.',
  'Delete the GAIA CI secrets, then revoke the token at its source and uninstall the Claude GitHub App.',
  'Prune the `gaia-ci` label, close open `gaia-ci` pull requests, and delete `gaia-ci/` branches by name.',
  'Have every other clone run `pnpm install` after pulling, which points git at `.githooks/`; until then that clone runs no pre-commit hook.',
];

// Renders `code` spans in the short list copy above. Plain text otherwise.
const InlineCode = ({text}: {text: string}) => {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(/`([^`]+)`/g)) {
    parts.push(
      text.slice(cursor, match.index),
      <code key={match.index} className="text-ink font-mono text-[0.9em]">
        {match[1]}
      </code>
    );
    cursor = match.index + match[0].length;
  }
  parts.push(text.slice(cursor));

  return <>{parts}</>;
};

const Hero = () => (
  <section className="relative overflow-x-clip px-4 pt-14 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
    <div
      aria-hidden={true}
      className="gaia-haze gaia-haze-drift pointer-events-none absolute inset-[-3%] z-0"
    />
    <div className="relative z-10 mx-auto max-w-4xl">
      <div
        className="text-accent-soft mb-8 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
        data-reveal={true}
      >
        <span aria-hidden={true} className="bg-accent-soft size-1.5" />
        Migrate to 2.0.0
      </div>
      <h1 className="font-display text-ink mb-10 max-w-[22ch] text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] font-light tracking-[-0.03em]">
        {'Move a GAIA 1.6.1 project '}
        <em className="text-accent-soft font-light italic">to 2.0.0.</em>
      </h1>
      <div className="text-ink-dim max-w-[62ch] space-y-5 text-[1.05rem] leading-relaxed">
        <p>
          GAIA 2.0.0 moves the React app and its frontend-only Claude harness
          into <code className="text-ink font-mono">frontend/</code>, and the
          root becomes a pnpm workspace that holds the shared harness. The 1.6.1{' '}
          <code className="text-ink font-mono">/update-gaia</code> cannot make
          that move, so this one release migrates with a prompt instead.
        </p>
        <p>
          When 1.6.1&apos;s{' '}
          <code className="text-ink font-mono">/update-gaia</code> shows you
          2.0.0, choose <strong className="text-ink">Abort</strong>. Then start
          a fresh Claude Code session at your project root and paste the prompt
          below. It works on a branch, commits in reviewable steps, and asks
          before anything it cannot decide on its own.
        </p>
      </div>
    </div>
  </section>
);

const Overview = () => (
  <section className="bg-tint border-line-soft border-y px-4 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-2 md:gap-16">
      <div>
        <h2 className="font-display text-ink mb-8 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
          Before you start
        </h2>
        <ul className="m-0 list-none space-y-6 p-0">
          {BEFORE_YOU_START.map(({detail, title}) => (
            <li key={title} className="flex gap-3">
              <CheckIcon
                className="text-secondary-soft mt-1 shrink-0"
                size={18}
              />
              <div>
                <div className="text-ink font-body">
                  <InlineCode text={title} />
                </div>
                <div className="text-ink-dim mt-1 text-[0.95rem] leading-relaxed">
                  <InlineCode text={detail} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-display text-ink mb-8 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
          What the prompt does
        </h2>
        <ol className="text-ink-dim m-0 list-none space-y-4 p-0 text-[0.95rem] leading-relaxed">
          {STEPS.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="text-muted w-5 shrink-0 font-mono text-[0.8rem] leading-[1.7]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <InlineCode text={step} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

const PromptBlock = () => {
  const [isCopied, setIsCopied] = useState(false);
  const timerReference = useRef<null | ReturnType<typeof setTimeout>>(null);

  useEffect(
    () => () => {
      if (timerReference.current !== null) clearTimeout(timerReference.current);
    },
    []
  );

  const onCopy = async () => {
    await navigator.clipboard.writeText(migratePrompt);
    setIsCopied(true);
    timerReference.current = setTimeout(() => setIsCopied(false), 1600);
  };

  return (
    <section className="px-4 py-20 sm:px-8 sm:py-24" id="prompt">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-ink mb-3 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
              The migration prompt
            </h2>
            <p className="text-ink-dim m-0 max-w-[60ch] leading-relaxed">
              Copy it whole and paste it as the first message of a fresh
              session. Paste the same prompt again after the restart it asks
              for.
            </p>
          </div>
          <button
            aria-label="Copy the migration prompt"
            className="border-line text-ink hover:border-accent-soft inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border bg-transparent px-4 py-2 font-mono text-[0.75rem] tracking-[0.06em] uppercase transition-colors duration-150"
            onClick={onCopy}
            type="button"
          >
            {isCopied ?
              <CheckIcon size={14} />
            : <CopyIcon size={14} />}
            {isCopied ? 'Copied' : 'Copy prompt'}
          </button>
        </div>
        <div className="border-line overflow-hidden rounded-lg border">
          <div className="bg-surface-raised border-line flex min-h-9 items-center border-b px-4 py-2">
            <span className="text-ink-dim font-mono text-xs tracking-wider">
              migrate-to-2.0.0.md
            </span>
          </div>
          <pre className="bg-terminal text-ink-dim m-0 max-h-144 overflow-auto px-4 py-5 font-mono text-[0.72rem] leading-[1.65] whitespace-pre-wrap md:px-6 md:text-[0.8rem]">
            <code>{migratePrompt}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};

const AfterMerge = () => (
  <section className="bg-tint border-line-soft border-t px-4 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-5xl">
      <h2 className="font-display text-ink mb-4 text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
        After the pull request merges
      </h2>
      <p className="text-ink-dim mb-8 max-w-[62ch] leading-relaxed">
        Nothing outside your machine changes until the migration pull request
        has merged. Then the prompt lists these and runs each one only when you
        confirm it:
      </p>
      <ul className="text-ink-dim m-0 max-w-[62ch] list-disc space-y-3 pl-5 leading-relaxed">
        {AFTER_MERGE.map((item) => (
          <li key={item}>
            <InlineCode text={item} />
          </li>
        ))}
      </ul>
      <p className="text-ink-dim mt-8 max-w-[62ch] leading-relaxed">
        Until it merges, every change is local: switching back to{' '}
        <code className="text-ink font-mono">main</code> and deleting the branch
        undoes it, and the prompt carries the full rollback steps. From 2.0.0
        on, <code className="text-ink font-mono">/update-gaia</code> works as
        before.
      </p>
    </div>
  </section>
);

const Migrate = () => (
  <>
    <Hero />
    <Overview />
    <PromptBlock />
    <AfterMerge />
  </>
);

export default Migrate;

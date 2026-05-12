import type React from 'react';
import {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {CheckIcon} from '@/components/icons';

// ── Types ──────────────────────────────────────────────────────────────────

type EmittedItem =
  | {cls?: string; id: number; kind: 'line'; text: string}
  | {frame: boolean; id: number; kind: 'cmd'; prompt: string; text: string}
  | {id: number; kind: 'banner'}
  | {id: number; kind: 'inputbar'}
  | {id: number; kind: 'thinking'};

type ProgressState = {bar: string; pct: number};

type TermStep =
  | {cls?: string; delay?: number; text: string; type: 'line'}
  | {inputBarFrame?: boolean; prompt: string; text: string; type: 'type'}
  | {ms: number; type: 'pause'}
  | {type: 'banner'}
  | {type: 'inputbar'}
  | {type: 'progress'}
  | {type: 'thinking'};
type TypingState = {
  frame: boolean;
  full: string;
  prompt: string;
  shown: string;
};

// ── Terminal script ────────────────────────────────────────────────────────

const TERM_SCRIPT: TermStep[] = [
  {prompt: '$', text: 'npx create-gaia@latest my-app', type: 'type'},
  {ms: 380, type: 'pause'},
  {cls: 'dim', text: 'Need to install the following packages:', type: 'line'},
  {cls: 'dim', text: '  create-gaia@latest', type: 'line'},
  {cls: 'dim', text: 'Ok to proceed? (y) y', type: 'line'},
  {ms: 380, type: 'pause'},
  {text: '', type: 'line'},
  {text: 'Creating my-app from GAIA v1.1.1...', type: 'line'},
  {
    cls: 'muted',
    delay: 280,
    text: '  > downloading gaia-v1.1.1.tar.gz',
    type: 'line',
  },
  {cls: 'muted', delay: 220, text: '  ↳ extracting', type: 'line'},
  {cls: 'muted', delay: 220, text: '  ↳ git init', type: 'line'},
  {
    cls: 'muted',
    delay: 260,
    text: '  ↳ pnpm install (this takes a minute)',
    type: 'line',
  },
  {ms: 240, type: 'pause'},
  {type: 'progress'},
  {
    cls: 'muted',
    delay: 240,
    text: 'Progress: resolved 885, reused 884, downloaded 0, added 885, done',
    type: 'line',
  },
  {text: '', type: 'line'},
  {cls: 'muted', text: '+ 47 dependencies, 41 devDependencies', type: 'line'},
  {
    cls: 'dim',
    delay: 320,
    text: 'Done in 5.8s using pnpm v10.18.2',
    type: 'line',
  },
  {text: '', type: 'line'},
  {
    cls: 'ok',
    delay: 320,
    text: '+ my-app ready (GAIA v1.1.1). Starting setup...',
    type: 'line',
  },
  {ms: 620, type: 'pause'},
  {type: 'banner'},
  {ms: 520, type: 'pause'},
  {inputBarFrame: true, prompt: '>', text: '/gaia-init', type: 'type'},
  {ms: 480, type: 'pause'},
  {text: '', type: 'line'},
  {cls: 'plain', delay: 380, text: 'Checking for pnpm...', type: 'line'},
  {text: '', type: 'line'},
  {
    cls: 'plain',
    delay: 320,
    text: 'Bash(if command -v corepack &>/dev/null; then corepack enable pnpm...)',
    type: 'line',
  },
  {cls: 'muted', delay: 200, text: '└ (No output)', type: 'line'},
  {text: '', type: 'line'},
  {
    cls: 'plain',
    delay: 360,
    text: 'Installing dependencies -- this may take a minute...',
    type: 'line',
  },
  {text: '', type: 'line'},
  {
    cls: 'plain',
    delay: 420,
    text: 'Now spawning a Haiku agent for Phases 0-4 (override audit, outdated discovery, wave classification, Wave A updates).',
    type: 'line',
  },
  {ms: 280, type: 'pause'},
  {type: 'thinking'},
  {ms: 200, type: 'pause'},
  {type: 'inputbar'},
];

// ── Sub-components ─────────────────────────────────────────────────────────

const ClaudeBanner = () => (
  <div
    aria-hidden={true}
    className="gs-term__banner flex items-center gap-4 py-3"
  >
    <pre className="gs-term__art text-accent m-0 font-mono text-[0.95em] leading-[1.05] whitespace-pre">{` ▐▛███▜▌ 
▝▜█████▛▘
  ▘▘ ▝▝  `}</pre>
    <div className="flex flex-col gap-0.5 font-mono text-[0.95em]">
      <div className="flex items-baseline gap-2">
        <span className="text-ink font-medium">Claude Code</span>
      </div>
      <div className="text-ink-dim">
        Opus 4.7 (1M context) with xhigh effort · Claude Max
      </div>
      <div className="text-muted">~/projects/my-app</div>
    </div>
  </div>
);

const ClaudeInputBar = () => {
  const rule = '-'.repeat(220);

  return (
    <div aria-hidden={true} className="mt-4 font-mono">
      <div className="gs-inputbar__rule text-line overflow-hidden font-mono text-[0.92em]">
        {rule}
      </div>
      <div className="flex items-center gap-2 py-2">
        <span className="text-muted">&gt;</span>
        <span className="gs-term__caret bg-accent-soft ml-0.5 inline-block h-[1.05em] w-[0.55em] align-[-0.18em]" />
      </div>
      <div className="gs-inputbar__rule text-line overflow-hidden font-mono text-[0.92em]">
        {rule}
      </div>
    </div>
  );
};

const THINK_GLYPHS = ['*', '+', 'x', '·'];
const THINK_VERBS = [
  'Thinking',
  'Pondering',
  'Mulling',
  'Reasoning',
  'Plotting',
  'Brewing',
];

const ThinkingLine = () => {
  const [glyphIndex, setGlyphIndex] = useState(0);
  const [verbIndex, setVerbIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const glyphInterval = setInterval(
      () => setGlyphIndex((index) => (index + 1) % THINK_GLYPHS.length),
      220
    );
    const verbInterval = setInterval(
      () => setVerbIndex((index) => (index + 1) % THINK_VERBS.length),
      2600
    );
    const elapsedInterval = setInterval(
      () => setElapsed((previous) => previous + 1),
      1000
    );

    return () => {
      clearInterval(glyphInterval);
      clearInterval(verbInterval);
      clearInterval(elapsedInterval);
    };
  }, []);

  return (
    <div
      aria-live="polite"
      className="my-3 flex items-center gap-2.5 font-mono text-[0.95em]"
      role="status"
    >
      <span
        className="gs-thinking__star text-accent-soft inline-block w-[1ch] text-center font-semibold"
        style={{textShadow: '0 0 10px rgba(217,119,87,0.35)'}}
      >
        {THINK_GLYPHS[glyphIndex]}
      </span>
      <span className="text-accent-soft italic">
        {THINK_VERBS[verbIndex]}&hellip;
      </span>
      <span className="text-muted text-[0.92em]">({elapsed}s)</span>
    </div>
  );
};

// ── Animated Terminal ──────────────────────────────────────────────────────

const randomTypingDelay = (): number => {
  const buffer = new Uint8Array(1);
  crypto.getRandomValues(buffer);

  return (buffer[0] / 255) * 35;
};

type AnimatedTerminalHandle = {skip: () => void};

type AnimatedTerminalProperties = {
  isLarge?: boolean;
  onDone?: () => void;
  ref?: React.Ref<AnimatedTerminalHandle>;
};

const AnimatedTerminal = ({
  isLarge = false,
  onDone,
  ref,
}: AnimatedTerminalProperties) => {
  const [emitted, setEmitted] = useState<EmittedItem[]>([]);
  const [typing, setTyping] = useState<null | TypingState>(null);
  const [progress, setProgress] = useState<null | ProgressState>(null);
  const timersReference = useRef<ReturnType<typeof setTimeout>[]>([]);
  const bodyReference = useRef<HTMLDivElement | null>(null);
  const onDoneReference = useRef(onDone);

  useEffect(() => {
    const queue = (delay: number, function_: () => void) => {
      const id = setTimeout(function_, delay);
      timersReference.current.push(id);
    };

    let t = 380;

    for (const step of TERM_SCRIPT) {
      if (step.type === 'pause') {
        t += step.ms;
      } else if (step.type === 'type') {
        const frame = !!step.inputBarFrame;
        queue(t, () =>
          setTyping({frame, full: step.text, prompt: step.prompt, shown: ''})
        );

        for (let index = 1; index <= step.text.length; index += 1) {
          const character = step.text[index - 1];
          const delta =
            character === ' ' ? 90
            : character === '-' ? 60
            : 55 + randomTypingDelay();
          t += delta;
          const slice = step.text.slice(0, index);
          queue(t, () =>
            setTyping({
              frame,
              full: step.text,
              prompt: step.prompt,
              shown: slice,
            })
          );
        }
        t += 220;
        const capturedText = step.text;
        const capturedPrompt = step.prompt;
        queue(t, () => {
          setEmitted((previous) => [
            ...previous,
            {
              frame,
              id: previous.length,
              kind: 'cmd',
              prompt: capturedPrompt,
              text: capturedText,
            },
          ]);
          setTyping(null);
        });
      } else if (step.type === 'line') {
        t += step.delay ?? 90;
        const capturedText = step.text;
        const capturedCls = step.cls;
        queue(t, () =>
          setEmitted((previous) => [
            ...previous,
            {
              cls: capturedCls,
              id: previous.length,
              kind: 'line',
              text: capturedText,
            },
          ])
        );
      } else if (step.type === 'progress') {
        const totalCells = 20;
        const tickMs = 60;
        const ticks = Math.floor(1200 / tickMs);

        for (let index = 1; index <= ticks; index += 1) {
          t += tickMs;
          const pct = Math.min(100, Math.round((index / ticks) * 100));
          const filled = Math.round((pct / 100) * totalCells);
          const bar = '#'.repeat(filled) + '.'.repeat(totalCells - filled);
          queue(t, () => setProgress({bar, pct}));
        }
        t += 240;
        queue(t, () => setProgress(null));
      } else if (step.type === 'banner') {
        t += 100;
        queue(t, () =>
          setEmitted((previous) => [
            ...previous,
            {id: previous.length, kind: 'banner'},
          ])
        );
      } else if (step.type === 'inputbar') {
        t += 200;
        queue(t, () => {
          setEmitted((previous) => [
            ...previous,
            {id: previous.length, kind: 'inputbar'},
          ]);
          onDoneReference.current?.();
        });
      } else {
        t += 280;
        queue(t, () =>
          setEmitted((previous) => [
            ...previous,
            {id: previous.length, kind: 'thinking'},
          ])
        );
      }
    }

    return () => {
      timersReference.current.forEach(clearTimeout);
      timersReference.current = [];
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      skip: () => {
        timersReference.current.forEach(clearTimeout);
        timersReference.current = [];
        const finalEmitted: EmittedItem[] = [];
        let id = 0;

        for (const step of TERM_SCRIPT) {
          if (step.type === 'line') {
            finalEmitted.push({
              cls: step.cls,
              id,
              kind: 'line',
              text: step.text,
            });
            id += 1;
          } else if (step.type === 'type') {
            finalEmitted.push({
              frame: !!step.inputBarFrame,
              id,
              kind: 'cmd',
              prompt: step.prompt,
              text: step.text,
            });
            id += 1;
          } else if (step.type === 'banner') {
            finalEmitted.push({id, kind: 'banner'});
            id += 1;
          } else if (step.type === 'inputbar') {
            finalEmitted.push({id, kind: 'inputbar'});
            id += 1;
          } else if (step.type === 'thinking') {
            finalEmitted.push({id, kind: 'thinking'});
            id += 1;
          }
        }
        setEmitted(finalEmitted);
        setTyping(null);
        setProgress(null);
        onDoneReference.current?.();
      },
    }),
    []
  );

  useEffect(() => {
    const element = bodyReference.current;
    if (!element) return;
    element.scrollTop = element.scrollHeight;
    const overflow =
      element.getBoundingClientRect().bottom - window.innerHeight + 10;
    if (overflow > 0) window.scrollBy({behavior: 'instant', top: overflow});
  }, [emitted, progress, typing]);

  const clsMap: Record<string, string> = {
    dim: 'text-ink-dim',
    muted: 'text-muted',
    ok: 'text-secondary-soft',
    plain: 'text-ink',
  };

  return (
    <div
      aria-label="Terminal showing GAIA installation"
      className={`bg-terminal border-line-soft overflow-hidden rounded-lg text-left ${
        isLarge ?
          'shadow-[0_60px_140px_-60px_rgba(0,0,0,0.75)]'
        : 'shadow-[0_40px_100px_-50px_rgba(0,0,0,0.7)]'
      }`}
      role="img"
    >
      <div className="border-line-soft flex items-center gap-1.5 border-b bg-white/2 px-4 py-2.5">
        <span className="bg-line size-2.5 rounded-full" />
        <span className="bg-line size-2.5 rounded-full" />
        <span className="bg-line size-2.5 rounded-full" />
        <span className="text-muted ml-2 font-mono text-[0.78rem]">
          ~/projects
        </span>
      </div>

      <div
        ref={bodyReference}
        className={`gs-term__body text-ink font-mono leading-[1.55] ${
          isLarge ?
            'px-4 pt-5 pb-6 text-[0.82rem] sm:px-9 sm:pt-8 sm:pb-9 sm:text-[1rem]'
          : 'px-6 pt-5 pb-6 text-[0.95rem]'
        }`}
      >
        {emitted.map((item) => {
          if (item.kind === 'cmd') {
            if (item.frame) {
              return (
                <div key={item.id} className="mt-4 font-mono">
                  <div className="gs-inputbar__rule text-line invisible overflow-hidden text-[0.92em]">
                    {'-'.repeat(220)}
                  </div>
                  <div className="flex items-center gap-2 py-2">
                    <span className="text-muted">{item.prompt}</span>
                    <span className="whitespace-pre-wrap">{item.text}</span>
                  </div>
                  <div className="gs-inputbar__rule text-line invisible overflow-hidden text-[0.92em]">
                    {'-'.repeat(220)}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.id}
                className="flex min-h-[1.5em] items-center gap-2.5"
              >
                <span className="text-secondary-soft shrink-0">
                  {item.prompt}
                </span>
                <span className="whitespace-pre-wrap">{item.text}</span>
              </div>
            );
          }
          if (item.kind === 'banner') return <ClaudeBanner key={item.id} />;
          if (item.kind === 'inputbar') return <ClaudeInputBar key={item.id} />;
          if (item.kind === 'thinking') return <ThinkingLine key={item.id} />;

          return (
            <div
              key={item.id}
              className={`gs-term__out min-h-[1.4em] leading-[1.55] whitespace-pre-wrap ${
                clsMap[item.cls ?? 'plain'] ?? 'text-ink'
              }`}
            >
              {item.text || ' '}
            </div>
          );
        })}

        {progress !== null && (
          <div
            aria-hidden={true}
            className="my-1 font-mono tracking-[0.02em] whitespace-pre"
          >
            <span className="text-muted">[</span>
            <span className="text-secondary-soft">{progress.bar}</span>
            <span className="text-muted">]</span>
            <span className="text-muted ml-2">{progress.pct}%</span>
          </div>
        )}

        {typing &&
          (typing.frame ?
            <div className="mt-4 font-mono">
              <div className="gs-inputbar__rule text-line overflow-hidden text-[0.92em]">
                {'-'.repeat(220)}
              </div>
              <div className="flex items-center gap-2 py-2">
                <span className="text-muted">{typing.prompt}</span>
                <span className="whitespace-pre-wrap">{typing.shown}</span>
                <span
                  aria-hidden={true}
                  className="gs-term__caret bg-accent-soft ml-0.5 inline-block h-[1.05em] w-[0.55em] align-[-0.18em]"
                />
              </div>
              <div className="gs-inputbar__rule text-line overflow-hidden text-[0.92em]">
                {'-'.repeat(220)}
              </div>
            </div>
          : <div className="flex min-h-[1.5em] items-center gap-2.5">
              <span className="text-secondary-soft shrink-0">
                {typing.prompt}
              </span>
              <span className="whitespace-pre-wrap">{typing.shown}</span>
              <span
                aria-hidden={true}
                className="gs-term__caret bg-accent-soft ml-0.5 inline-block h-[1.05em] w-[0.55em] align-[-0.18em]"
              />
            </div>)}
      </div>
    </div>
  );
};

// ── Copy / Replay icons ────────────────────────────────────────────────────

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

const ReplayIcon = ({size = 24}: {size?: number}) => (
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
    <path d="M4 12a8 8 0 1 0 2.5-5.8" />
    <path d="M4 4v4h4" />
  </svg>
);

// ── Command bar ────────────────────────────────────────────────────────────

type CommandBarProperties = {
  isCopied: boolean;
  onCopy: () => void;
};

const CommandBar = ({isCopied, onCopy}: CommandBarProperties) => (
  <div className="bg-terminal mx-auto mb-5 flex max-w-120 items-center gap-3 rounded-lg px-4 py-3.5 sm:px-6 sm:py-4">
    <span className="text-accent-soft shrink-0 font-mono text-[0.82rem] sm:text-[1rem]">
      $
    </span>
    <code className="text-ink flex-1 text-left font-mono text-[0.7rem] tracking-[0.02em] sm:text-[1rem]">
      npx create-gaia@latest my-app
    </code>
    <button
      aria-label="Copy command"
      className="border-line-soft text-ink-dim hover:text-ink hover:border-line inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border bg-transparent px-3 py-1.5 font-mono text-[0.68rem] tracking-[0.06em] uppercase transition-colors duration-150 sm:px-3.5 sm:text-[0.72rem]"
      onClick={onCopy}
      type="button"
    >
      {isCopied ?
        <CheckIcon size={13} />
      : <CopyIcon size={13} />}
      {isCopied ? 'Copied' : 'Copy'}
    </button>
  </div>
);

// ── Hero ───────────────────────────────────────────────────────────────────

type HeroProperties = {
  isCopied: boolean;
  isDone: boolean;
  onCopy: () => void;
  onDone: () => void;
  onReplay: () => void;
  onSkip: () => void;
  playToken: number;
  terminalReference: React.RefObject<AnimatedTerminalHandle | null>;
};

const GetStartedHero = ({
  isCopied,
  isDone,
  onCopy,
  onDone,
  onReplay,
  onSkip,
  playToken,
  terminalReference,
}: HeroProperties) => (
  <section
    className="relative min-h-lvh overflow-hidden px-4 pt-14 pb-16 text-center sm:px-8 sm:py-24"
    id="install"
  >
    <div
      aria-hidden={true}
      className="gaia-haze gaia-haze-drift pointer-events-none absolute inset-[-3%] z-0"
    />

    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="mb-6 inline-flex items-center gap-2" data-reveal={true}>
        <span
          aria-hidden={true}
          className="bg-accent-soft size-1.5 rounded-full"
        />
        <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          Install
        </span>
      </div>

      <h1
        className="text-ink mx-auto mb-10 max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.018em]"
        data-reveal={true}
        style={{'--reveal-delay': '80ms'} as React.CSSProperties}
      >
        One command is
        <br />
        <em className="text-accent-soft font-light italic">all you need.</em>
      </h1>

      <div
        className="relative mx-auto max-w-220"
        data-reveal={true}
        style={{'--reveal-delay': '160ms'} as React.CSSProperties}
      >
        <CommandBar isCopied={isCopied} onCopy={onCopy} />
        <AnimatedTerminal
          key={playToken}
          ref={terminalReference}
          isLarge={true}
          onDone={onDone}
        />
        <div className="mt-3 flex justify-center gap-2">
          {!isDone && (
            <button
              aria-label="Skip animation"
              className="border-line-soft text-ink-dim hover:text-ink hover:border-line inline-flex cursor-pointer items-center gap-1.5 rounded-full border bg-transparent px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.06em] uppercase transition-colors duration-150"
              onClick={onSkip}
              type="button"
            >
              Skip →
            </button>
          )}
          <button
            aria-label="Replay animation"
            className="border-line-soft text-ink-dim hover:text-ink hover:border-line inline-flex cursor-pointer items-center gap-1.5 rounded-full border bg-transparent px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.06em] uppercase transition-colors duration-150"
            onClick={onReplay}
            type="button"
          >
            <ReplayIcon size={14} />
            Replay
          </button>
        </div>
      </div>

      <div
        className="text-muted mx-auto mt-9 inline-flex max-w-160 flex-wrap items-baseline justify-center gap-2 text-[0.92rem]"
        data-reveal={true}
        style={{'--reveal-delay': '240ms'} as React.CSSProperties}
      >
        <span className="text-secondary-soft font-mono text-[0.68rem] tracking-[0.18em] uppercase">
          Prerequisite
        </span>
        <span className="text-line">·</span>
        <span>
          Node.js <strong className="text-ink font-medium">&ge; 22.19.0</strong>
          . We recommend{' '}
          <a
            className="text-ink-dim border-line-soft hover:border-accent-soft hover:text-ink border-b no-underline transition-colors duration-150"
            href="https://github.com/nvm-sh/nvm"
            rel="noreferrer"
            target="_blank"
          >
            nvm
          </a>{' '}
          or grab it from{' '}
          <a
            className="text-ink-dim border-line-soft hover:border-accent-soft hover:text-ink border-b no-underline transition-colors duration-150"
            href="https://nodejs.org/en/"
            rel="noreferrer"
            target="_blank"
          >
            nodejs.org
          </a>
          .
        </span>
      </div>
    </div>
  </section>
);

// ── What ships in the scaffold ──────────────────────────────────────────────

const InlineCode = ({children}: {children: string}) => (
  <code className="text-ink font-mono text-[0.9em]">{children}</code>
);

const RECAP = [
  {
    body: 'A Karpathy-style CLAUDE.md, plus rules and skills that load only when the work touches them. Conventions hold across sessions.',
    title: 'Project memory & rules',
  },
  {
    body: '1,314 lint rules on every commit. A code-review-audit agent on every merge: security, performance, architecture.',
    title: 'Quality gates',
  },
  {
    body: 'An Obsidian wiki, a hot cache, and handoff notes, so a new session never relearns the codebase.',
    title: 'Persistent knowledge',
  },
  {
    body: 'Vitest, React Testing Library, Playwright, MSW, Storybook, Chromatic, wired and ready.',
    title: 'A real test stack',
  },
  {
    body: 'Workflows keep dependencies current, run a daily security audit, sync the wiki on commit, and prune stale branches.',
    title: 'Standing CI',
  },
];

const WhatYouGet = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-20 border-y py-20 sm:py-28"
    id="whats-included"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      {/* Header band */}
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#whats-included">
              What{' '}
              <code className="text-ink-dim font-mono text-[0.85em]">
                npx create-gaia
              </code>{' '}
              sets up
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
        </div>
        <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65]">
          <p>
            One command writes a complete React 19 and TypeScript project to
            disk, with the Claude Code workflow already wired in. No config to
            write. No prompt library to assemble. The discipline ships in the
            box.
          </p>
          <p>
            Work has a shape: every feature starts with{' '}
            <InlineCode>/gaia spec</InlineCode>, a plan, and acceptance tests
            written before the code. Pre-commit hooks hold the line. A merge
            audit has the last word.
          </p>
        </div>
      </div>

      {/* Specimen band */}
      <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
        {/* File tree card */}
        <div className="bg-surface border-line-soft overflow-hidden rounded-lg border font-mono">
          <div className="border-line-soft text-muted border-b bg-black/15 px-5 py-[0.7rem] text-[0.65rem] tracking-[0.18em] uppercase">
            npx create-gaia my-app
          </div>
          <div className="overflow-x-auto p-5 text-[0.72rem] leading-[1.7] sm:text-[0.8rem]">
            <pre className="m-0 whitespace-pre">
              {[
                ['', 'my-app/'],
                ['├── ', '.claude/', ''],
                ['│   ├── ', 'agents/', '        # code-review-audit'],
                ['│   ├── ', 'commands/', '       # /gaia-init, /setup-gaia'],
                ['│   ├── ', 'hooks/', '          # guardrail hooks'],
                [
                  '│   ├── ',
                  'rules/',
                  '          # load-on-demand conventions',
                ],
                [
                  '│   └── ',
                  'skills/',
                  '         # /gaia, tdd, react-code, ...',
                ],
                ['├── ', '.gaia/', '              # GAIA CLI, manifest'],
                ['├── ', '.github/workflows/', ' # standing CI'],
                ['├── ', '.husky/', '             # pre-commit'],
                ['├── ', '.specify/', '           # spec-driven workflow'],
                ['├── ', '.storybook/', ''],
                ['├── ', 'app/', '                # React Router 7 app'],
                ['├── ', 'test/', '               # Vitest, RTL, MSW'],
                ['├── ', 'wiki/', '               # Obsidian project memory'],
                ['├── ', 'CLAUDE.md', '           # project brain'],
                ['├── ', 'package.json', ''],
                [
                  '└── ',
                  'eslint · vitest · playwright · vite · tsconfig configs',
                  '',
                ],
              ].map(([connector, name, comment]) => (
                <span key={name}>
                  <span aria-hidden={true} className="text-muted">
                    {connector}
                  </span>
                  <span className="text-ink">{name}</span>
                  {comment && <span className="text-muted">{comment}</span>}
                  {'\n'}
                </span>
              ))}
            </pre>
          </div>
        </div>

        {/* Capability recap */}
        <dl className="space-y-6">
          {RECAP.map(({body, title}) => (
            <div key={title}>
              <dt className="text-ink mb-1.5 text-[0.98rem] font-medium tracking-[-0.005em]">
                {title}
              </dt>
              <dd className="text-ink-dim text-[0.92rem] leading-[1.6]">
                {body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

// ── Closing ────────────────────────────────────────────────────────────────

const ClosingSection = () => (
  <section
    className="relative overflow-hidden px-4 pt-18 pb-16 text-center sm:px-8 sm:pt-28 sm:pb-24"
    id="closing"
  >
    <div
      aria-hidden={true}
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(239,165,142,0.14), transparent 70%)',
      }}
    />
    <div className="relative mx-auto max-w-275">
      <h2 className="text-ink font-display mb-[1.6rem] text-[clamp(2.6rem,7vw,5rem)] leading-[1.05] font-light tracking-[-0.035em]">
        That&apos;s it.
      </h2>
      <p className="text-ink-dim font-display mb-[2.6rem] text-[clamp(1.1rem,2vw,1.35rem)] italic">
        Now go build something.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <a
          className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
          href="https://docs.gaiareact.com/"
        >
          Read the docs →
        </a>
        <a
          className="text-ink-dim hover:text-accent inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
          href="/features/"
        >
          See the Features →
        </a>
      </div>
    </div>
  </section>
);

// ── Page shell ─────────────────────────────────────────────────────────────

const GetStarted = () => {
  const [playToken, setPlayToken] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const terminalReference = useRef<AnimatedTerminalHandle | null>(null);
  const scrollTimerReference = useRef<null | ReturnType<typeof setTimeout>>(
    null
  );

  const onReplay = () => {
    if (scrollTimerReference.current !== null) {
      clearTimeout(scrollTimerReference.current);
      scrollTimerReference.current = null;
    }
    setIsDone(false);
    window.scrollTo({behavior: 'instant', top: 0});
    setPlayToken((token) => token + 1);
  };

  const onSkip = () => terminalReference.current?.skip();

  const onDone = () => {
    setIsDone(true);
    scrollTimerReference.current = setTimeout(() => {
      const section = document.querySelector('#whats-included');
      if (!section) return;
      const {top} = section.getBoundingClientRect();
      // Leave the user alone if they've already scrolled the section into view.
      if (top < window.innerHeight - 80) return;
      const headerHeight =
        document.querySelector('header')?.getBoundingClientRect().height ?? 60;
      // Land the section's top flush under the sticky header, no gap.
      window.scrollTo({
        behavior: 'smooth',
        top: top + window.scrollY - headerHeight,
      });
    }, 3000);
  };

  useEffect(
    () => () => {
      if (scrollTimerReference.current !== null) {
        clearTimeout(scrollTimerReference.current);
      }
    },
    []
  );

  const onCopy = async () => {
    await navigator.clipboard.writeText('npx create-gaia@latest my-app');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1600);
  };

  return (
    <>
      <GetStartedHero
        isCopied={isCopied}
        isDone={isDone}
        onCopy={onCopy}
        onDone={onDone}
        onReplay={onReplay}
        onSkip={onSkip}
        playToken={playToken}
        terminalReference={terminalReference}
      />
      <WhatYouGet />
      <ClosingSection />
    </>
  );
};

export default GetStarted;

import type React from 'react';
import {
  MemoryIcon,
  MultiAgentIcon,
  ReflectionIcon,
  ShieldCheckIcon,
} from '@/components/icons';

const BLOCKS = [
  {
    color: 'teal' as const,
    copy: "Typecheck, lint, tests, and build are gates, not suggestions. Every commit clears them. Claude can't merge code that doesn't.",
    Icon: ShieldCheckIcon,
    title: "Claude can't ship broken code",
  },
  {
    color: 'warn' as const,
    copy: 'The Quality Gate runs typecheck, lint, tests, and build on every commit. The code-review audit tiers findings as Critical, Important, and Suggestions, and blocks the merge until fixed.',
    Icon: ReflectionIcon,
    title: 'Quality ensured before merge',
  },
  {
    color: 'accent' as const,
    copy: 'Wiki, hot cache, session handoff, agent memory, user memory. Each tier has a scope and a maintenance loop so Claude stops relearning your codebase every session.',
    Icon: MemoryIcon,
    title: 'Five tiers of memory',
  },
  {
    color: 'accent' as const,
    copy: 'One merge audit. Four specialists run in parallel: React patterns, TypeScript and architecture, translations, and component health. Critical findings block the merge. Suggestions land in a review comment.',
    Icon: MultiAgentIcon,
    title: 'A specialist for every concern',
  },
];

const BLOCK_STYLES = {
  accent: {bg: 'bg-accent/10', icon: 'text-accent'},
  teal: {bg: 'bg-secondary/12', icon: 'text-secondary'},
  warn: {bg: 'bg-warn/10', icon: 'text-warn'},
};

const AgenticDesign = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="agentic-design"
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div
            className="mb-4 inline-flex items-center gap-2"
            data-reveal={true}
          >
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              How GAIA works
            </span>
          </div>
          <h2
            className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]"
            data-reveal={true}
            style={{'--reveal-delay': '60ms'} as React.CSSProperties}
          >
            Design patterns Claude doesn&apos;t have to remember.
          </h2>
          <p
            className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '120ms'} as React.CSSProperties}
          >
            GAIA wires these patterns into the project itself, not the prompt.
            They run the same way every session, every task, every model
            variant.
          </p>
          <p
            className="text-ink-dim mb-6 text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '180ms'} as React.CSSProperties}
          >
            Memory that persists. Planning that runs before code changes.
            Hooks that verify after. Reviews that catch what slips through.
            Built into the project — not into a prompt.
          </p>
          <a
            className="text-accent hover:text-accent-soft mt-2 inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
            data-reveal={true}
            href="/features/#agentic-design"
            style={{'--reveal-delay': '240ms'} as React.CSSProperties}
          >
            Learn more →
          </a>
        </div>

        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          data-stagger={true}
        >
          {BLOCKS.map((block) => {
            const s = BLOCK_STYLES[block.color];

            return (
              <div
                key={block.title}
                className="bg-surface border-line-soft hover:border-line rounded-lg border p-5 transition-colors duration-150"
              >
                <div
                  className={`mb-3 inline-flex size-8 items-center justify-center rounded-sm ${s.bg} ${s.icon}`}
                >
                  <block.Icon size={18} />
                </div>
                <h4 className="text-ink mb-1.5 text-[0.95rem] leading-[1.3] font-medium">
                  {block.title}
                </h4>
                <p className="text-ink-dim text-[0.88rem] leading-[1.55]">
                  {block.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AgenticDesign;

import type React from 'react';
import {
  ArrowRightIcon,
  MemoryIcon,
  MultiAgentIcon,
  ReflectionIcon,
  ShieldCheckIcon,
} from '@/components/icons';

const BLOCKS = [
  {
    color: 'accent' as const,
    copy: 'Pre-tool-use hooks block destructive git, watch-mode tests, force-pushes to main, and eslint-config edits before they happen.',
    Icon: ShieldCheckIcon,
    title: "Claude can't ship broken code",
  },
  {
    color: 'teal' as const,
    copy: 'The audit tiers findings as Critical, Important, and Suggestions — and blocks the merge until they&apos;re fixed.',
    Icon: ReflectionIcon,
    title: 'Quality gates every merge',
  },
  {
    color: 'warn' as const,
    copy: 'Wiki, hot cache, session handoff, agent memory, user memory. Each tier has a scope and a maintenance loop.',
    Icon: MemoryIcon,
    title: 'Five tiers of memory',
  },
  {
    color: 'accent' as const,
    copy: 'React patterns, TypeScript and architecture, translation, react-doctor — dispatched in parallel from a single tool call.',
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
    className="border-line-soft bg-tint border-y py-20"
    id="agentic-design"
  >
    <div className="mx-auto max-w-6xl px-4 sm:px-8">
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
              Agentic design
            </span>
          </div>
          <h2
            className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]"
            data-reveal={true}
            style={{'--reveal-delay': '60ms'} as React.CSSProperties}
          >
            Twelve patterns Claude doesn&apos;t have to remember.
          </h2>
          <p
            className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '120ms'} as React.CSSProperties}
          >
            GAIA wires agentic behavior into the project itself, not the prompt.
            The patterns below run the same way every session, every engineer,
            every model variant.
          </p>
          <p
            className="text-ink-dim mb-6 text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '180ms'} as React.CSSProperties}
          >
            Reflection, multi-agent orchestration, planning, tool-use,
            retrieval, evaluation. They run because the project is shaped that
            way, not because the prompt asked nicely.
          </p>
          <a
            className="text-accent hover:text-accent-soft mt-2 inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
            data-reveal={true}
            href="/features/#agentic-design"
            style={{'--reveal-delay': '240ms'} as React.CSSProperties}
          >
            See all twelve patterns
            <ArrowRightIcon size={14} />
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

import {
  MemoryIcon,
  MultiAgentIcon,
  ReflectionIcon,
  ShieldCheckIcon,
} from '@/components/icons';

const BLOCKS = [
  {
    color: 'teal' as const,
    copy: "Typecheck, lint, tests, and build are gates, not suggestions. Claude can't merge code that doesn't clear them.",
    Icon: ShieldCheckIcon,
    title: "Claude can't ship broken code",
  },
  {
    color: 'tealSoft' as const,
    copy: 'Requirements and acceptance tests are written before Claude writes a line of code. Defined contracts prevent scope drift.',
    Icon: ReflectionIcon,
    title: 'Spec → Plan → Code',
  },
  {
    color: 'accent' as const,
    copy: 'Each tier has a scope and a maintenance loop. Claude stops relearning your codebase every session.',
    Icon: MemoryIcon,
    title: 'Five tiers of memory',
  },
  {
    color: 'muted' as const,
    copy: 'Security, performance, architecture, antipatterns: all scanned in one merge audit. Critical and Important findings block the merge. Suggestions land in a review comment.',
    Icon: MultiAgentIcon,
    title: 'Every angle, audited',
  },
];

const BLOCK_STYLES = {
  accent: {bg: 'bg-accent/10', icon: 'text-accent'},
  muted: {bg: 'bg-muted/10', icon: 'text-ink-dim'},
  teal: {bg: 'bg-secondary/12', icon: 'text-secondary'},
  tealSoft: {bg: 'bg-secondary-soft/12', icon: 'text-secondary-soft'},
};

const AgenticDesign = () => (
  <section className="px-4 py-20 sm:px-8" id="agentic-design">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:order-2 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-secondary-soft size-1.5 rounded-full"
            />
            <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              How GAIA works
            </span>
          </div>
          <h2 className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Design patterns Claude doesn&apos;t have to remember.
          </h2>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65]">
            GAIA wires these patterns into the project itself, not the prompt.
            They run the same way every session, every task, every model
            variant.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:order-1">
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
                <h4 className="text-ink mb-1.5 text-[1.05rem] leading-[1.3] font-medium">
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

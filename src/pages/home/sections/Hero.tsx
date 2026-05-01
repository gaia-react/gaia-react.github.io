import type React from 'react';
import {
  ArrowRightIcon,
  BullseyeIcon,
  CheckIcon,
  MemoryIcon,
  MultiAgentIcon,
  ReflectionIcon,
  RuleIcon,
  ShieldCheckIcon,
} from '@/components/icons';

const Orbs = () => (
  <>
    <div
      aria-hidden={true}
      className="gaia-drift-orb-a pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,119,87,0.55) 0%, rgba(217,119,87,0.32) 28%, rgba(217,119,87,0.12) 55%, rgba(217,119,87,0) 75%)',
        height: 820,
        left: -240,
        opacity: 0.95,
        top: -280,
        width: 820,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-b pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(91,138,138,0.5) 0%, rgba(91,138,138,0.28) 30%, rgba(91,138,138,0.1) 58%, rgba(91,138,138,0) 78%)',
        height: 680,
        opacity: 0.85,
        right: -240,
        top: 60,
        width: 680,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-c pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,168,87,0.4) 0%, rgba(217,168,87,0.2) 32%, rgba(217,168,87,0.08) 60%, rgba(217,168,87,0) 80%)',
        bottom: -180,
        height: 420,
        left: '12%',
        opacity: 0.5,
        width: 420,
      }}
    />
  </>
);

type StatusVariant = 'idle' | 'review' | 'shipped' | 'soon';

const STATUS_STYLES: Record<
  StatusVariant,
  {dot: string; pill: string; text: string}
> = {
  idle: {
    dot: 'bg-muted',
    pill: 'border-line-soft text-muted',
    text: 'Backlog',
  },
  review: {
    dot: 'bg-accent',
    pill: 'border-accent/30 text-accent-soft',
    text: 'In review',
  },
  shipped: {
    dot: 'bg-secondary',
    pill: 'border-secondary/30 text-secondary-soft',
    text: 'Shipped',
  },
  soon: {
    dot: 'bg-warn',
    pill: 'border-warn/30 text-warn-soft',
    text: 'Coming soon',
  },
};

const StatusPill = ({variant}: {variant: StatusVariant}) => {
  const s = STATUS_STYLES[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[0.65rem] tracking-[0.12em] whitespace-nowrap uppercase ${s.pill}`}
    >
      <span className={`size-1.5 rounded-full ${s.dot}`} />
      {s.text}
    </span>
  );
};

const ISSUES = [
  {
    assignee: 'CL',
    id: 'GAI-241',
    status: 'review' as StatusVariant,
    tag: 'react-patterns',
    title: 'Replace legacy address form with Conform schema',
  },
  {
    assignee: 'SS',
    id: 'GAI-238',
    status: 'shipped' as StatusVariant,
    tag: 'quality-gate',
    title: 'Tighten ESLint paths-scoped rule for app/server/**',
  },
  {
    assignee: 'CL',
    id: 'GAI-244',
    status: 'soon' as StatusVariant,
    tag: 'proposal',
    title: 'Per-task token budgets for orchestrator',
  },
  {
    assignee: 'SS',
    id: 'GAI-235',
    status: 'shipped' as StatusVariant,
    tag: 'memory',
    title: '/handoff archives prior session state after /pickup',
  },
  {
    assignee: 'CL',
    id: 'GAI-247',
    status: 'idle' as StatusVariant,
    tag: 'translation',
    title: 'Translate i18next strings for FR / DE checkout',
  },
];

const NAV_ITEMS = [
  {icon: <RuleIcon size={14} />, label: 'Inbox'},
  {active: true, icon: <BullseyeIcon size={14} />, label: 'In review'},
  {icon: <MemoryIcon size={14} />, label: 'Backlog'},
  {icon: <CheckIcon size={14} />, label: 'Shipped'},
];

const AGENT_ITEMS = [
  {icon: <ShieldCheckIcon size={14} />, label: 'code-review-audit'},
  {icon: <ReflectionIcon size={14} />, label: 'react-patterns'},
  {icon: <MultiAgentIcon size={14} />, label: 'typescript-arch'},
];

const ProductWindow = () => (
  <div className="bg-surface border-line overflow-hidden rounded-xl border shadow-(--shadow-card)">
    <div className="border-line-soft flex h-9 items-center gap-3 border-b bg-black/15 px-4">
      <div className="flex gap-1.5">
        <span className="bg-line size-2.5 rounded-full" />
        <span className="bg-line size-2.5 rounded-full" />
        <span className="bg-line size-2.5 rounded-full" />
      </div>
      <span className="text-muted font-mono text-[0.72rem] tracking-wider">
        workspace <span aria-hidden={true}>·</span>{' '}
        <span className="text-ink-dim">gaia / app / checkout</span>
      </span>
    </div>

    <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-[200px_1fr]">
      <nav
        aria-hidden={true}
        className="border-line-soft hidden flex-col gap-0.5 border-r bg-black/10 p-2 md:flex"
      >
        <div className="text-muted px-3 pt-2 pb-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
          Project
        </div>
        {NAV_ITEMS.map((item) => (
          <span
            key={item.label}
            className={`flex items-center gap-2 rounded-sm px-3 py-1.5 text-[0.8rem] transition-colors duration-150 ${
              item.active ?
                'bg-surface-raised text-ink relative'
              : 'text-ink-dim'
            }`}
          >
            {item.active && (
              <span
                aria-hidden={true}
                className="bg-accent absolute top-1/2 left-0 h-[60%] w-0.5 -translate-y-1/2 rounded-full"
              />
            )}
            {item.icon}
            {item.label}
          </span>
        ))}
        <div className="text-muted mt-4 px-3 pt-2 pb-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
          Agents
        </div>
        {AGENT_ITEMS.map((item) => (
          <span
            key={item.label}
            className="text-ink-dim flex items-center gap-2 rounded-sm px-3 py-1.5 text-[0.8rem] transition-colors duration-150"
          >
            {item.icon}
            {item.label}
          </span>
        ))}
      </nav>

      <div className="p-5">
        <div className="text-muted mb-1 font-mono text-[0.7rem] tracking-wider">
          In review <span aria-hidden={true}>·</span>{' '}
          <span className="text-ink-dim">3 active</span>
        </div>
        <h3 className="text-ink mb-4 text-[1.1rem] font-light">
          Checkout · Q2 sprint
        </h3>
        <div data-stagger={true}>
          {ISSUES.map((issue) => (
            <div
              key={issue.id}
              className="border-line-soft grid items-center gap-3 border-b py-2.5 text-[0.85rem] last:border-b-0"
              style={{gridTemplateColumns: '70px 1fr auto auto'}}
            >
              <span className="text-muted font-mono text-[0.72rem] tracking-[0.04em]">
                {issue.id}
              </span>
              <span className="text-ink">
                {issue.title}{' '}
                <span className="text-muted font-mono text-[0.7rem]">
                  · {issue.tag}
                </span>
              </span>
              <StatusPill variant={issue.status} />
              <span className="bg-surface-raised border-line text-ink-dim inline-flex size-6 items-center justify-center rounded-full border font-mono text-[0.62rem]">
                {issue.assignee}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const STATS = [
  {label: 'Agentic patterns wired', value: '12 / 29'},
  {label: 'Memory system', value: '5 tiers'},
  {label: 'Lint rules enforced', value: '1,592'},
];

const Hero = () => (
  <section
    className="relative overflow-x-clip px-4 pt-24 pb-20 sm:px-8"
    id="hero"
  >
    <Orbs />
    <div className="relative z-10 mx-auto max-w-6xl">
      <div className="max-w-[1080px]">
        <div className="mb-4 inline-flex items-center gap-2" data-reveal={true}>
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            React · Claude Code · v1.0
          </span>
        </div>

        <h1
          className="text-ink mb-8 max-w-[22ch] text-[clamp(2.5rem,5.4vw,4.75rem)] leading-[1.1] tracking-tight"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          Claude is raw power.
          <br />
          GAIA is{' '}
          <em className="text-accent-soft font-light italic">
            order and focus.
          </em>
        </h1>

        <p
          className="text-ink-dim mb-8 max-w-[56ch] text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.55]"
          data-reveal={true}
          style={{'--reveal-delay': '200ms'} as React.CSSProperties}
        >
          A React project template engineered for Claude Code. GAIA wires twelve
          agentic patterns into the project itself, not the prompt, so every
          engineer, every session, every model gets the same disciplined loop.
        </p>

        <div
          className="mb-12"
          data-reveal={true}
          style={{'--reveal-delay': '300ms'} as React.CSSProperties}
        >
          <a
            className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Get Started
            <ArrowRightIcon size={14} />
          </a>
        </div>

        <div
          className="border-line-soft flex max-w-xl flex-wrap gap-x-12 gap-y-6 border-t pt-8"
          data-reveal={true}
          style={{'--reveal-delay': '420ms'} as React.CSSProperties}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <strong className="text-ink block font-mono text-[0.9rem] leading-none font-normal tracking-[0.12em] uppercase">
                {stat.value}
              </strong>
              <span className="text-muted font-mono text-[0.7rem] tracking-[0.18em] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-16"
        data-reveal={true}
        style={{'--reveal-delay': '300ms'} as React.CSSProperties}
      >
        <ProductWindow />
      </div>
    </div>
  </section>
);

export default Hero;

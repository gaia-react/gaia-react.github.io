import {BullseyeIcon, ShieldCheckIcon} from '@/components/icons';

const CARDS = [
  {
    color: 'secondary' as const,
    copy: 'GAIA enforces high standards on every commit, so every line Claude writes is code you can ship.',
    Icon: ShieldCheckIcon,
    title: 'Trustworthy by default',
  },
  {
    color: 'accent' as const,
    copy: 'GAIA gives Claude only what each task needs, so quality and costs stay predictable as your codebase grows.',
    Icon: BullseyeIcon,
    title: 'Disciplined at scale',
  },
];

const ICON_STYLES = {
  accent: {bg: 'bg-accent/8', icon: 'text-accent'},
  secondary: {bg: 'bg-secondary/10', icon: 'text-secondary'},
  warn: {bg: 'bg-warn/10', icon: 'text-warn'},
};

const Why = () => (
  <section className="px-4 py-20 sm:px-8" id="why">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 max-w-180" data-reveal={true}>
        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Why GAIA
          </span>
        </div>
        <h2 className="text-ink mb-4 text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.02em]">
          The system, not the prompt.
        </h2>
        <p className="text-ink-dim text-[1.125rem]">
          Most setups treat Claude as a tool you hold. You run{' '}
          <code className="text-ink bg-surface rounded-sm px-1.5 text-[0.875em]">
            /init
          </code>
          , let Claude set up a CLAUDE.md, and hope the model figures out the
          rest.
          <br />
          <br />
          Two things break Claude on real projects: output you can&apos;t trust,
          and quality that drops as the project grows.{' '}
          <span className="text-ink">GAIA fixes both.</span>
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
        data-stagger={true}
      >
        {CARDS.map((card) => {
          const s = ICON_STYLES[card.color];

          return (
            <article
              key={card.title}
              className="bg-surface border-line-soft hover:border-line rounded-lg border p-6 transition-colors duration-150"
            >
              <div
                className={`mb-4 inline-flex size-10 items-center justify-center rounded-sm ${s.bg} ${s.icon}`}
              >
                <card.Icon size={24} />
              </div>
              <h3 className="text-ink mb-2 text-[1.25rem] font-light tracking-[-0.01em]">
                {card.title}
              </h3>
              <p
                className="text-ink-dim text-[0.95rem] leading-[1.6]"
                dangerouslySetInnerHTML={{__html: card.copy}}
              />
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Why;

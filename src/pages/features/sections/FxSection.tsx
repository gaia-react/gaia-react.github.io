import type React from 'react';
import type {ReactNode} from 'react';

type Properties = {
  children: ReactNode;
  id: string;
  isCool?: boolean;
  lead: ReactNode;
  title: string;
};

const FxSection = ({children, id, isCool, lead, title}: Properties) => (
  <section
    className={`border-line-soft scroll-mt-20 border-b py-20 ${isCool ? 'bg-tint' : ''}`}
    id={id}
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div className="md:sticky md:top-24">
          <h2
            className="group font-display text-ink mb-6 max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]"
            data-reveal={true}
          >
            <a className="text-inherit no-underline" href={`#${id}`}>
              {title}
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
          <div
            className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65]"
            data-reveal={true}
            style={{'--reveal-delay': '80ms'} as React.CSSProperties}
          >
            {lead}
          </div>
        </div>
        <div
          data-reveal={true}
          style={{'--reveal-delay': '120ms'} as React.CSSProperties}
        >
          {children}
        </div>
      </div>
    </div>
  </section>
);

export default FxSection;

import type React from 'react';
import {ArrowRightIcon} from '@/components/icons';

const Closing = () => (
  <section className="relative z-10 overflow-hidden" id="closing">
    <div
      className="border-line-soft relative border-t py-24 text-center"
      data-reveal={true}
    >
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 80% at 50% 0%, rgba(217,119,87,0.14) 0%, transparent 70%), radial-gradient(60% 120% at 50% 100%, rgba(91,138,138,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div
          aria-hidden={true}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="to-line h-px w-20 bg-linear-to-r from-transparent" />
          <span className="bg-accent-soft size-1.5 rounded-full" />
          <span className="to-line h-px w-20 bg-linear-to-l from-transparent" />
        </div>

        <div className="mb-4 inline-flex items-center gap-2">
          <span
            aria-hidden={true}
            className="bg-accent-soft size-1.5 rounded-full"
          />
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Pair-programming, not babysitting
          </span>
        </div>

        <h2
          className="text-ink mx-auto mb-9 max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.05] tracking-[-0.015em]"
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          Spend your time on the
          <br className="hidden sm:inline" />
          <span className="inline sm:hidden">{' '}</span>
          <em className="text-accent-soft font-light italic">
            product, not the workflow.
          </em>
        </h2>

        <a
          className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
          href="/get-started/"
        >
          Get Started
          <ArrowRightIcon size={14} />
        </a>
      </div>
    </div>
  </section>
);

export default Closing;

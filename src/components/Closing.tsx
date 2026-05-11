const Closing = () => (
  <section className="relative z-10 overflow-hidden px-4 sm:px-8" id="closing">
    <div className="border-line-soft relative border-t py-24 text-center">
      <div
        aria-hidden={true}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(50% 80% at 50% 0%, rgba(217,119,87,0.14) 0%, transparent 70%), radial-gradient(60% 120% at 50% 100%, rgba(91,138,138,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          aria-hidden={true}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <span className="to-line h-px w-20 bg-linear-to-r from-transparent" />
          <span className="bg-accent-soft size-1.5 rounded-full" />
          <span className="to-line h-px w-20 bg-linear-to-l from-transparent" />
        </div>

        <div className="mx-auto mb-4 flex w-fit items-start gap-2">
          <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            Claude is the engineer. You own the product.
          </span>
        </div>

        <h2 className="text-ink mx-auto mb-9 max-w-[18ch] text-[clamp(2.4rem,5.5vw,4.25rem)] leading-[1.05] tracking-[-0.015em]">
          Spend your time on the
          <br className="hidden sm:inline" />
          <span className="inline sm:hidden"> </span>
          <span className="text-accent-soft font-light">
            product, not the workflow.
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            className="bg-accent text-canvas hover:bg-accent-2 inline-flex h-11 items-center gap-2 rounded-sm px-5 text-[0.95rem] font-medium no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Get Started →
          </a>
          <a
            className="text-ink-dim hover:text-accent inline-flex items-center gap-1.5 text-[0.95rem] no-underline transition-colors duration-150"
            href="https://docs.gaiareact.com/"
          >
            Read the Docs →
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Closing;

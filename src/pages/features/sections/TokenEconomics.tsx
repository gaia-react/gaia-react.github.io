import TokenArtifacts from './figures/TokenArtifacts';

const TokenEconomics = () => (
  <section
    className="border-line-soft bg-tint scroll-mt-20 border-b py-20"
    id="tokens"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mx-auto mb-12 max-w-[60ch] md:mb-14">
        <h2 className="group font-display text-ink mb-6 text-center text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
          <a className="text-inherit no-underline" href="#tokens">
            State lives on disk
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
        <p className="text-ink-dim text-justify text-[1.05rem] leading-[1.65]">
          Long Claude sessions bloat. Context piles up each turn, memory
          accumulates between turns, every new session starts cold and burns
          tokens re-briefing. GAIA&apos;s four workflow commands write durable
          artifacts to disk, then read them on demand. State persists. The
          conversation stays small.
        </p>
      </div>

      <TokenArtifacts />
    </div>
  </section>
);

export default TokenEconomics;

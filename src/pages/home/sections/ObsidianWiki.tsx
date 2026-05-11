const TIERS = [
  {
    desc: 'Architecture, flows, decisions.',
    name: 'wiki',
    scope: 'repo',
  },
  {
    desc: 'What Claude touched recently. Fast, scoped, evictable.',
    name: 'hot cache',
    scope: 'session',
  },
  {
    desc: 'Compact session state for /gaia handoff and /gaia pickup.',
    name: 'handoff',
    scope: 'cross-session',
  },
  {
    desc: "Each specialist's scratchpad, persisted between runs.",
    name: 'agent memory',
    scope: 'per-agent',
  },
  {
    desc: 'Your preferences, your style, your defaults.',
    name: 'user memory',
    scope: 'global',
  },
];

const ObsidianWiki = () => (
  <section
    className="border-line-soft bg-tint border-y px-4 py-20 sm:px-8"
    id="memory"
  >
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="mb-4 inline-flex items-center gap-2">
            <span
              aria-hidden={true}
              className="bg-accent-soft size-1.5 rounded-full"
            />
            <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
              Persistent memory
            </span>
          </div>
          <h2 className="text-ink mb-5 text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]">
            Memory that survives a session restart.
          </h2>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]">
            <span className="text-ink">
              GAIA&apos;s wiki saves Claude tokens.
            </span>{' '}
            Architecture, flows, and decisions live as committed markdown that
            Claude reads on demand, so it never re-infers them from source.
          </p>
          <p className="text-ink-dim mb-4 text-[1.05rem] leading-[1.65]">
            Context stops getting lost between sessions. The wiki stays yours:
            plain markdown in your repo, not a vendor&apos;s database.
          </p>
          <p className="text-ink-dim text-[1.05rem] leading-[1.65]">
            As you ship features, GAIA updates the wiki and clears stale or
            duplicate entries. No one has to maintain it.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className="bg-surface border-line-soft grid items-center gap-4 rounded-lg border px-4 py-3.5 text-[0.88rem] sm:grid-cols-[90px_1fr_auto]"
            >
              <span className="text-ink font-mono text-[0.78rem] tracking-[0.04em]">
                {tier.name}
              </span>
              <span className="text-ink-dim text-[0.85rem]">{tier.desc}</span>
              <span className="text-muted font-mono text-[0.68rem] tracking-[0.14em] uppercase">
                {tier.scope}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ObsidianWiki;

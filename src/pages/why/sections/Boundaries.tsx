type Item = {
  desc: string;
  name: string;
};

const BOUNDARIES: Item[] = [
  {
    desc: 'The goal is not to help humans write code faster. It is to make Claude trustworthy enough to write production code while the engineer directs.',
    name: 'Not a copilot',
  },
  {
    desc: 'Key checkpoints between Claude and main require human approval. The AI does the work. You decide what the work is.',
    name: 'Not “fully autonomous”',
  },
  {
    desc: 'A CLAUDE.md is text that AI can ignore. GAIA is the project itself. Hooks intercept. Rules load by file pattern. Agents audit. Commands orchestrate. Discipline Claude cannot opt out of.',
    name: 'Not just a CLAUDE.md',
  },
  {
    desc: 'A starter kit hands you boilerplate and walks away. GAIA never walks away. Every tool call hits a hook. Every commit hits a gate. Every merge hits an audit. The discipline holds.',
    name: 'Not another starter kit',
  },
];

const Boundaries = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b px-4 py-14 sm:px-8 sm:py-20"
    id="boundaries"
  >
    <div className="mx-auto max-w-275">
      <div className="mb-10 grid items-start gap-4 lg:grid-cols-[1fr_2fr] lg:gap-12">
        <h2
          className="group text-ink font-display max-w-[16ch] text-[clamp(1.8rem,3.4vw,2.4rem)] font-normal tracking-[-0.02em]"
          data-reveal={true}
        >
          <a className="text-inherit no-underline" href="#boundaries">
            What GAIA is not
            <span
              aria-hidden={true}
              className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
            >
              #
            </span>
          </a>
        </h2>
      </div>
      <ol
        className="border-line-soft list-none border-t p-0"
        data-stagger={true}
      >
        {BOUNDARIES.map(({desc, name}) => (
          <li
            key={name}
            className="border-line-soft grid gap-y-2 border-b py-6 last:border-b-0 sm:grid-cols-[minmax(12rem,1fr)_minmax(0,2.2fr)] sm:items-baseline sm:gap-8"
          >
            <h3 className="text-ink font-display self-start text-[1.18rem] font-medium tracking-[-0.015em]">
              {name}
            </h3>
            <p className="text-ink-dim max-w-[64ch] text-[1rem] leading-[1.7]">
              {desc}
            </p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Boundaries;

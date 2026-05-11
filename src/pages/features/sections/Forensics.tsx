import ForensicsIssue from './figures/ForensicsIssue';

const Forensics = () => (
  <section
    className="bg-tint border-line-soft scroll-mt-20 border-b py-20"
    id="forensics"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="grid gap-x-12 gap-y-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start md:gap-16">
        <div>
          <h2 className="group font-display text-ink mb-6 text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#forensics">
              Bugs happen
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
          <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65]">
            <p>
              GAIA is open source, written by one developer (so far).
              Contributors and sponsors welcome.
            </p>
            <p>
              <code className="bg-surface text-ink rounded-sm px-1.5 text-[0.88em]">
                /gaia forensics
              </code>{' '}
              turns &ldquo;this didn&apos;t work&rdquo; into a complete report:
              redacted, classified, ready to file. User-config issues return the
              fix inline. Probable GAIA bugs file straight to my GitHub with one
              prompt. Same body byte-for-byte, so I can fix them fast.
            </p>
          </div>
        </div>

        <ForensicsIssue />
      </div>
    </div>
  </section>
);

export default Forensics;

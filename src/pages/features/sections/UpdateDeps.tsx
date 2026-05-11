const POINTS = [
  {
    desc: 'When a new dependency version requires a codemod or breaking-change migration, GAIA makes sure Claude handles it. The PR includes the bump and the migration together.',
    name: 'Codemods and migrations applied',
  },
  {
    desc: 'When the new version moves or renames public API surface, Update Deps updates the call sites. Grep-replace-with-context work, automated.',
    name: 'Call sites updated when APIs change',
  },
  {
    desc: 'When two simultaneous upgrades touch the same code path, Update Deps resolves the overlap before opening the PR. No conflicting PRs that fight at merge.',
    name: 'Conflicts resolved before the PR opens',
  },
  {
    desc: "Runs the upgrade, runs the suite, sees what breaks, fixes it, and runs the suite again. The PR doesn't open until the upgrade is working.",
    name: 'Iterates until the upgrade lands clean',
  },
];

const RepoHead = ({chip}: {chip: string}) => (
  <div className="text-muted mb-2 flex items-center gap-[0.55rem] font-mono text-[0.72rem]">
    <svg
      aria-hidden={true}
      fill="currentColor"
      height="14"
      viewBox="0 0 16 16"
      width="14"
    >
      <path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" />
    </svg>
    <span className="text-ink-dim">gaia-react/gaia</span>
    <span className="text-muted">#1247</span>
    <span className="border-line-soft text-muted ml-auto rounded-full border px-2 py-[0.18rem] text-[0.6rem] tracking-widest uppercase">
      {chip}
    </span>
  </div>
);

const DependabotCard = () => (
  <div className="bg-surface border-line-soft flex flex-col rounded-lg border p-[1.1rem_1.2rem_1.2rem]">
    <div className="text-muted mb-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
      Dependabot · Renovate
    </div>
    <RepoHead chip="deps" />
    <div className="text-ink-dim mb-[0.85rem] text-[0.98rem] tracking-[-0.005em]">
      chore(deps): bump react-router 6.30 → 7.0
    </div>
    <div className="border-line-soft mb-[0.85rem] rounded-sm border bg-black/18 p-[0.5rem_0.7rem] font-mono text-[0.78rem]">
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] py-[0.18rem]">
        <span className="text-warn">-</span>
        <span className="text-warn/80">
          &quot;react-router&quot;: &quot;^6.30.0&quot;
        </span>
      </div>
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] py-[0.18rem]">
        <span className="text-secondary">+</span>
        <span className="text-secondary/70">
          &quot;react-router&quot;: &quot;^7.0.0&quot;
        </span>
      </div>
    </div>
    <div className="border-line-soft text-warn-soft flex items-center gap-2 border-t pt-[0.6rem] font-mono text-[0.72rem]">
      <span className="border-warn/60 inline-block size-2 rounded-full border" />
      <span>0 of 4 checks · awaiting human</span>
    </div>
    <div className="mt-auto pt-[0.85rem]">
      <ul className="text-ink-dim space-y-1 text-[0.84rem] leading-normal">
        <li>· read changelog</li>
        <li>· update call sites</li>
        <li>· run codemods</li>
        <li>· fix breakages</li>
      </ul>
    </div>
  </div>
);

const GaiaCard = () => (
  <div className="bg-surface border-accent/40 relative flex flex-col rounded-lg border p-[1.1rem_1.2rem_1.2rem]">
    <div className="text-accent-soft mb-3 font-mono text-[0.65rem] tracking-[0.2em] uppercase">
      GAIA Update Deps
    </div>
    <RepoHead chip="deps" />
    <div className="text-ink mb-[0.85rem] text-[0.98rem] tracking-[-0.005em]">
      chore(deps): bump react-router 6.30 → 7.0
    </div>
    <div className="border-line-soft mb-[0.85rem] rounded-sm border bg-black/18 p-[0.5rem_0.7rem] font-mono text-[0.78rem]">
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] py-[0.18rem]">
        <span className="text-warn">-</span>
        <span className="text-warn/80">
          import {'{useNavigate}'} from &apos;@remix-run/react&apos;
        </span>
      </div>
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] py-[0.18rem]">
        <span className="text-secondary">+</span>
        <span className="text-secondary/70">
          import {'{useNavigate}'} from &apos;react-router&apos;
        </span>
      </div>
      <div className="grid grid-cols-[1.25rem_1fr] gap-[0.4rem] py-[0.18rem]">
        <span className="text-muted">~</span>
        <span className="text-muted italic">
          codemod applied · v7-route-types · 14 files
        </span>
      </div>
    </div>
    <div className="border-line-soft text-secondary-soft flex flex-wrap items-center gap-x-4 gap-y-1 border-t pt-[0.6rem] font-mono text-[0.72rem]">
      {['typecheck', 'tests 47/47', 'build', 'audit'].map((c) => (
        <span key={c} className="inline-flex items-center gap-[0.4rem]">
          <span className="bg-secondary inline-block size-2 rounded-full" />
          {c}
        </span>
      ))}
    </div>
    <div className="mt-auto flex items-center justify-between pt-[0.85rem] font-mono text-[0.7rem] tracking-[0.14em] uppercase">
      <span className="text-muted">semver: minor</span>
      <span className="text-accent">auto-merge on green</span>
    </div>
  </div>
);

const UpdateDeps = () => (
  <section
    className="border-line-soft scroll-mt-20 border-b py-20"
    id="update-deps"
  >
    <div className="mx-auto max-w-6xl px-[clamp(1rem,4vw,2rem)]">
      <div className="mb-12 grid gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <h2 className="group font-display text-ink max-w-[18ch] text-[clamp(2rem,4vw,2.85rem)] leading-[1.1] font-normal tracking-[-0.02em]">
            <a className="text-inherit no-underline" href="#update-deps">
              Upgrades that land finished
              <span
                aria-hidden={true}
                className="ml-[0.4em] text-[0.6em] opacity-0 transition-opacity duration-150 select-none group-hover:opacity-40"
              >
                #
              </span>
            </a>
          </h2>
        </div>
        <div className="text-ink-dim space-y-4 text-[1.05rem] leading-[1.65]">
          <p>
            All Dependabot and Renovate do is open a PR with a version bump,
            leaving the actual upgrade work for a human to figure out.
          </p>
          <p>
            GAIA makes sure Claude does that work. Codemods, source migrations,
            conflict resolution, all resolved before the PR opens. What you
            review is a finished change, not half-done work.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <DependabotCard />
        <GaiaCard />
      </div>

      <dl className="mt-12 grid gap-x-12 gap-y-6 md:grid-cols-2">
        {POINTS.map(({desc, name}) => (
          <div key={name}>
            <dt className="text-ink mb-1.5 text-[0.98rem] font-medium tracking-[-0.005em]">
              {name}
            </dt>
            <dd className="text-ink-dim text-[0.92rem] leading-[1.6]">
              {desc}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default UpdateDeps;

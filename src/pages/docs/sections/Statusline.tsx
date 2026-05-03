import {Section} from '@/components/Section';

type StatuslineLeftProperties = {
  branch: string;
  contextBar: string;
  contextColor: string;
  contextPct: number;
  model: string;
};

const StatuslineLeft = ({
  branch,
  contextBar,
  contextColor,
  contextPct,
  model,
}: StatuslineLeftProperties) => (
  <div className="flex shrink-0 items-center whitespace-nowrap">
    <span className="font-bold" style={{color: '#5b8ffe'}}>
      app
    </span>
    <span className="text-muted mx-[0.6rem]">|</span>
    <span className="font-bold" style={{color: '#6ec56b'}}>
      {branch}
    </span>
    <span className="text-muted mx-[0.6rem]">|</span>
    <span className="font-bold" style={{color: '#4dd0e1'}}>
      {model}
    </span>
    <span className="text-muted mx-[0.6rem]">|</span>
    <span className="font-bold" style={{color: contextColor}}>
      {contextBar}
    </span>
    <span className="text-ink-dim ml-1">{contextPct}%</span>
  </div>
);

const Statusline = () => (
  <Section id="statusline" title="Statusline">
    <p className="text-ink-dim mb-6">
      GAIA ships with an optional custom Claude Code statusline. During setup, a
      live preview is shown and you can choose to install it globally, only in
      the current project, or skip it entirely.
    </p>

    <div className="border-line mb-6 overflow-hidden rounded-lg border">
      <div className="bg-surface-raised border-line flex min-h-9 items-center border-b px-4 py-2">
        <span className="text-ink-dim font-mono text-xs tracking-wider">
          Claude Code
        </span>
      </div>

      <div className="bg-surface overflow-x-auto px-4 py-2 font-mono text-[0.8125rem]">
        <StatuslineLeft
          branch="main"
          contextBar="▓▓▓▓░░░░░░"
          contextColor="#6ec56b"
          contextPct={42}
          model="Sonnet 4.6"
        />
      </div>
    </div>

    <table className="text-ink mb-10 border-collapse text-sm">
      <thead className="sr-only">
        <tr>
          <th scope="col">Token</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#5b8ffe'}}
          >
            app
          </td>
          <td className="text-ink py-1 align-top">
            current project folder (git root name)
          </td>
        </tr>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#6ec56b'}}
          >
            main
          </td>
          <td className="text-ink py-1 align-top">active git branch</td>
        </tr>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#4dd0e1'}}
          >
            Sonnet 4.6
          </td>
          <td className="text-ink py-1 align-top">active Claude model</td>
        </tr>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#6ec56b'}}
          >
            ▓▓▓▓░░░░░░ 42%
          </td>
          <td className="text-ink py-1 align-top">context window usage</td>
        </tr>
      </tbody>
    </table>

    <h3 className="text-ink mb-2 text-lg font-semibold">Update indicators</h3>
    <p className="text-ink-dim mb-6">
      Inside a GAIA project, the statusline appends a right-aligned indicator
      whenever your dependencies or GAIA itself fall behind. Click the command
      in your terminal — or just run it — to apply the update. The indicator
      clears automatically the next time the cache refreshes (every 6h, in the
      background, no network call on the hot path).
    </p>

    <div className="border-line mb-6 overflow-hidden rounded-lg border">
      <div className="bg-surface-raised border-line flex min-h-9 items-center border-b px-4 py-2">
        <span className="text-ink-dim font-mono text-xs tracking-wider">
          Claude Code
        </span>
      </div>

      <div className="bg-surface overflow-x-auto px-4 py-2 font-mono text-[0.8125rem]">
        <div className="flex items-center justify-between gap-8 whitespace-nowrap">
          <StatuslineLeft
            branch="main"
            contextBar="▓▓▓▓░░░░░░"
            contextColor="#6ec56b"
            contextPct={42}
            model="Sonnet 4.6"
          />
          <div className="flex shrink-0 items-center gap-4">
            <span className="font-bold" style={{color: '#eab308'}}>
              Run /update-deps (3 outdated)
            </span>
            <span className="font-bold" style={{color: '#22d3ee'}}>
              Run /update-gaia (GAIA 1.2.0 available)
            </span>
          </div>
        </div>
      </div>
    </div>

    <table className="text-ink border-collapse text-sm">
      <thead className="sr-only">
        <tr>
          <th scope="col">Token</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#eab308'}}
          >
            Run /update-deps (N outdated)
          </td>
          <td className="text-ink py-1 align-top">
            yellow — appears when <code>pnpm outdated</code> reports unpinned
            packages behind their latest. Runs the autonomous{' '}
            <code>/update-deps</code> workflow (override audit, codebase
            migrations, conflict resolution, quality gate).
          </td>
        </tr>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#22d3ee'}}
          >
            Run /update-gaia (GAIA X.Y.Z available)
          </td>
          <td className="text-ink py-1 align-top">
            cyan — appears when a newer GAIA release is published. Runs{' '}
            <code>/update-gaia</code>, which performs a three-way merge (your
            project / your baseline / latest GAIA) per the{' '}
            <code>.gaia/manifest.json</code> classes so your customizations are
            preserved.
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export default Statusline;

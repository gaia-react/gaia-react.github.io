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
    <p className="text-ink mb-6">
      GAIA ships with a custom Claude Code statusline. The left side shows basic
      information and the right side conditionally shows when updates are
      available for your project.
      <br />
      <br />
      The left side is optional during setup. You can choose not to use it if
      you have your own. During initial setup, a live preview is shown before
      any changes are made.
      <br />
      <br />
      The right side only works in GAIA projects and does not modify your
      existing statusline configuration.
    </p>

    <div className="border-line mb-6 overflow-hidden rounded-lg border">
      <div className="bg-surface-raised border-line flex min-h-9 items-center border-b px-4 py-2">
        <span className="text-ink-dim font-mono text-xs tracking-wider">
          Claude Code
        </span>
      </div>

      <div className="bg-surface overflow-x-auto font-mono text-[0.8125rem]">
        <div className="min-w-max">
          <div className="px-4 py-2">
            <StatuslineLeft
              branch="main"
              contextBar="▓▓▓▓░░░░░░"
              contextColor="#6ec56b"
              contextPct={42}
              model="Opus 4.7 (1M context)"
            />
          </div>

          <div className="border-line/40 border-t" />

          <div className="px-4 py-2">
            <div className="flex items-center gap-8">
              <StatuslineLeft
                branch="main"
                contextBar="▓▓▓▓▓▓▓░░░"
                contextColor="#ffd54f"
                contextPct={65}
                model="Sonnet 4.6"
              />
              <span
                className="font-bold whitespace-nowrap"
                style={{color: '#ffd54f'}}
              >
                Run /update-deps (3 outdated)
              </span>
            </div>
          </div>

          <div className="border-line/40 border-t" />

          <div className="px-4 py-2">
            <div className="flex items-center gap-8">
              <StatuslineLeft
                branch="main"
                contextBar="▓▓▓▓▓▓▓▓░░"
                contextColor="#f07070"
                contextPct={84}
                model="Haiku 4.6"
              />
              <span
                className="font-bold whitespace-nowrap"
                style={{color: '#4dd0e1'}}
              >
                Run /update-gaia (GAIA 1.2.0 available)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <table className="text-ink mb-6 border-collapse text-sm">
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
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#ffd54f'}}
          >
            Run /update-deps
          </td>
          <td className="text-ink py-1 align-top">
            shown when there are outdated packages
          </td>
        </tr>
        <tr>
          <td
            className="py-1 pr-6 align-top font-mono font-bold whitespace-nowrap"
            style={{color: '#4dd0e1'}}
          >
            Run /update-gaia
          </td>
          <td className="text-ink py-1 align-top">
            shown when a new GAIA release is available
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export default Statusline;

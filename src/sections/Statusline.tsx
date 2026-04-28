import { Section } from '@/components/Section';

type StatuslineLeftProps = {
  branch: string;
  model: string;
  contextBar: string;
  contextPct: number;
  contextColor: string;
};

function StatuslineLeft({ branch, model, contextBar, contextPct, contextColor }: StatuslineLeftProps) {
  return (
    <div className="flex items-center whitespace-nowrap shrink-0">
      <span style={{ color: '#5b8ffe' }} className="font-bold">app</span>
      <span className="text-fg-mute mx-[0.6rem]">|</span>
      <span style={{ color: '#6ec56b' }} className="font-bold">{branch}</span>
      <span className="text-fg-mute mx-[0.6rem]">|</span>
      <span style={{ color: '#4dd0e1' }} className="font-bold">{model}</span>
      <span className="text-fg-mute mx-[0.6rem]">|</span>
      <span style={{ color: contextColor }} className="font-bold">{contextBar}</span>
      <span className="text-fg-dim ml-1">{contextPct}%</span>
    </div>
  );
}

export default function Statusline() {
  return (
    <Section id="statusline" title="Statusline">
      <p className="mb-6 text-fg">
        GAIA ships with a custom Claude Code statusline. The left side shows basic information
        and the right side conditionally shows when updates are available for your project.
        <br/><br/>The left side is optional during setup. You can choose not to use it if you have your own.
        <br/><br/>The right side only works in GAIA projects and does not modify your existing statusline configuration.
        During{' '}<code className="text-fg font-mono text-sm bg-bg-elev px-1 rounded">/init</code>,
        a live preview is shown before any changes are made.
      </p>

      <div className="rounded-lg border border-border overflow-hidden mb-6">
        <div className="bg-bg-elev-2 py-2 px-4 flex items-center border-b border-border min-h-[2.25rem]">
          <span className="font-mono text-xs text-fg-dim tracking-[0.05em]">Claude Code</span>
        </div>

        <div className="bg-bg-elev font-mono text-[0.8125rem] py-2 px-4 overflow-x-auto">
          <StatuslineLeft
            branch="main"
            model="Opus 4.7 (1M context)"
            contextBar="▓▓▓▓░░░░░░"
            contextPct={42}
            contextColor="#6ec56b"
          />
        </div>

        <div className="border-t border-border/40" />

        <div className="bg-bg-elev font-mono text-[0.8125rem] py-2 px-4 overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            <StatuslineLeft
              branch="main"
              model="Sonnet 4.6"
              contextBar="▓▓▓▓▓▓▓░░░"
              contextPct={65}
              contextColor="#ffd54f"
            />
            <span style={{ color: '#ffd54f' }} className="font-bold whitespace-nowrap">
              Run /update-deps (3 outdated)
            </span>
          </div>
        </div>

        <div className="border-t border-border/40" />

        <div className="bg-bg-elev font-mono text-[0.8125rem] py-2 px-4 overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            <StatuslineLeft
              branch="main"
              model="Haiku 4.6"
              contextBar="▓▓▓▓▓▓▓▓░░"
              contextPct={84}
              contextColor="#f07070"
            />
            <span style={{ color: '#4dd0e1' }} className="font-bold whitespace-nowrap">
              Run /update-gaia (GAIA 1.2.0 available)
            </span>
          </div>
        </div>
      </div>

      <table className="mb-6 text-fg border-collapse text-sm">
        <tbody>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#5b8ffe' }}>app</td>
            <td className="py-1 text-fg align-top">current project folder (git root name)</td>
          </tr>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#6ec56b' }}>main</td>
            <td className="py-1 text-fg align-top">active git branch</td>
          </tr>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#4dd0e1' }}>Sonnet 4.6</td>
            <td className="py-1 text-fg align-top">active Claude model</td>
          </tr>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#6ec56b' }}>▓▓▓▓░░░░░░ 42%</td>
            <td className="py-1 text-fg align-top">context window usage</td>
          </tr>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#ffd54f' }}>Run /update-deps</td>
            <td className="py-1 text-fg align-top">shown when outdated packages detected</td>
          </tr>
          <tr>
            <td className="pr-6 py-1 font-mono font-bold whitespace-nowrap align-top" style={{ color: '#4dd0e1' }}>Run /update-gaia</td>
            <td className="py-1 text-fg align-top">shown when a new GAIA release is available</td>
          </tr>
        </tbody>
      </table>
    </Section>
  );
}

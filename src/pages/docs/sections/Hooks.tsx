import {Section} from '@/components/Section';

const Hooks = () => (
  <Section id="hooks" title="Hooks">
    <p className="text-ink-dim mb-6">
      GAIA’s Claude hooks prevent debt-accumulating patterns and enforce
      conventions before code is committed.
    </p>

    <h3 className="text-ink mb-3 text-lg font-semibold">Edit Guards</h3>
    <p className="text-ink mb-2">
      Protect critical files from unintended edits:
    </p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">ESLint config</span> - Prevents Claude
        from disabling rules in the config instead of fixing lint errors
      </li>
      <li>
        <span className="font-semibold">i18n keys</span> - Ensures no hard-coded
        strings slip through
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">Bash Guards</h3>
    <p className="text-ink mb-2">Block destructive or expensive operations:</p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">Protect main branch</span> - No commits
        or force-pushes to main
      </li>
      <li>
        <span className="font-semibold">Prevent technical debt</span> - Audit
        code before every PR merge
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">Wiki Management</h3>
    <p className="text-ink mb-2">Update wiki state across sessions:</p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">Automated updates</span> - Evaluate if
        committed code changes should be added to the wiki
      </li>
      <li>
        <span className="font-semibold">Keep commits clean</span> - Squash
        auto-commits from the&nbsp;
        <a
          className="text-accent hover:underline"
          href="https://github.com/AgriciDaniel/claude-obsidian"
          rel="noopener noreferrer"
          target="_blank"
        >
          claude-obsidian
        </a>{' '}
        plugin
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">Session</h3>
    <p className="text-ink mb-2">Prompt useful actions at session start:</p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">Update notifications</span> - At session
        start, GAIA checks for new releases and surfaces any available updates
        as an optional action
      </li>
    </ul>
  </Section>
);

export default Hooks;

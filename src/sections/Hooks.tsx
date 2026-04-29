import {Section} from '@/components/Section';

const Hooks = () => (
  <Section id="hooks" title="Hooks">
    <p className="text-fg-dim mb-6">
      GAIA’s Claude hooks prevent debt-accumulating patterns and enforce
      conventions before code is committed.
    </p>

    <h3 className="text-fg mb-3 text-lg font-semibold">Edit Guards</h3>
    <p className="text-fg mb-2">
      Protect critical files from unintended edits:
    </p>
    <ul className="text-fg mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">ESLint config</span> - Prevents Claude
        from disabling rules in the config instead of fixing lint errors
      </li>
      <li>
        <span className="font-semibold">i18n keys</span> - Ensures no hard-coded
        strings slip through
      </li>
    </ul>

    <h3 className="text-fg mb-3 text-lg font-semibold">Bash Guards</h3>
    <p className="text-fg mb-2">Block destructive or expensive operations:</p>
    <ul className="text-fg mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">Protect main branch</span> - No commits
        or force-pushes to main
      </li>
      <li>
        <span className="font-semibold">Prevent technical debt</span> - Audit
        code before every PR merge
      </li>
    </ul>

    <h3 className="text-fg mb-3 text-lg font-semibold">Wiki Management</h3>
    <p className="text-fg mb-2">Update wiki state across sessions:</p>
    <ul className="text-fg mb-6 ml-4 space-y-1">
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
  </Section>
);

export default Hooks;

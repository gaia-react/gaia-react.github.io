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
      <li>
        <span className="font-semibold">.env files</span> - Blocks writes to
        environment variable files so secrets cannot be silently altered
      </li>
      <li>
        <span className="font-semibold">Secrets files</span> - Blocks writes to
        credentials, keys, and other secret-bearing files
      </li>
      <li>
        <span className="font-semibold">Lockfiles</span> - Blocks direct edits
        to package lockfiles; dependency changes go through the proper update
        workflow
      </li>
      <li>
        <span className="font-semibold">Vitest globals tsconfig</span> - Blocks
        edits that would introduce Vitest globals into tsconfig and break strict
        type isolation
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
        <span className="font-semibold">Block rm -rf</span> - Prevents
        recursive force-delete commands from running unreviewed
      </li>
      <li>
        <span className="font-semibold">Prevent technical debt</span> - Audit
        code before every PR merge
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">SPEC lifecycle</h3>
    <p className="text-ink mb-2">
      Fires automatically at each stage of the spec-kit workflow:
    </p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">before_specify</span> - Constitution
        check: verifies the project constitution has no placeholder text before
        authoring a SPEC
      </li>
      <li>
        <span className="font-semibold">after_clarify</span> - Self-review pass:
        surfaces drift, ambiguity, and unresolved clarifications before gate 2
      </li>
      <li>
        <span className="font-semibold">after_specify</span> - Immutability
        lint: verifies frontmatter, frozen UAT IDs, no placeholders, and write
        surface compliance
      </li>
      <li>
        <span className="font-semibold">before_implement</span> - Playwright UAT
        auto-write: renders PO-authored UATs into red-state Playwright e2e specs
        before the implementer edits any source
      </li>
      <li>
        <span className="font-semibold">after_implement</span> - Wiki promote:
        drains the merged SPEC content into the wiki (see Commands for the full
        auto-fired wiki maintenance chain)
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">Wiki Management</h3>
    <p className="text-ink mb-2">Update wiki state across sessions:</p>
    <ul className="text-ink mb-6 ml-4 space-y-1">
      <li>
        <span className="font-semibold">Commit-driven sync</span> - Evaluates
        each commit for wiki-worthy content and updates pages automatically via{' '}
        <code className="text-accent-soft">/wiki-sync</code>
      </li>
      <li>
        <span className="font-semibold">Gate-triggered consolidation</span> -
        When a domain accumulates enough promoted pages,{' '}
        <code className="text-accent-soft">/wiki-consolidate</code> runs to
        detect redundancy and supersession
      </li>
      <li>
        <span className="font-semibold">Lint after sync</span> -{' '}
        <code className="text-accent-soft">/wiki-lint</code> runs automatically
        after each sync to flag orphan pages, dead links, and drift
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

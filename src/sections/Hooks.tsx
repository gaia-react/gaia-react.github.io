import { Section } from '@/components/Section';

export default function Hooks() {
  return (
    <Section id="hooks" title="Hooks">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        GAIA's Claude hooks prevent common mistakes and enforce project conventions before they're
        committed.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Session Start / Stop</h3>
      <p className="mb-6 text-[var(--color-fg)]">
        Initialize and finalize wiki state across sessions. On start, record the current HEAD so
        the stop hook can detect wiki changes committed during the session. On stop, squash
        auto-commits from the claude-obsidian plugin into a clean history.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Pre-Tool Use: Edit Guards</h3>
      <p className="mb-2 text-[var(--color-fg)]">Protect critical files from unintended edits:</p>
      <ul className="mb-6 ml-4 space-y-1 text-[var(--color-fg)]">
        <li>
          <span className="font-semibold">ESLint config</span> - Fix errors in the source code,
          don't disable rules in the config
        </li>
        <li>
          <span className="font-semibold">Vitest tsconfig</span> - Globals are managed separately
        </li>
        <li>
          <span className="font-semibold">i18n keys</span> - Ensures no hard-coded strings slip
          through
        </li>
        <li>
          <span className="font-semibold">Storybook co-location</span> - Ensure stories live next
          to components
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Pre-Tool Use: Bash Guards</h3>
      <p className="mb-2 text-[var(--color-fg)]">Block destructive or expensive operations:</p>
      <ul className="mb-6 ml-4 space-y-1 text-[var(--color-fg)]">
        <li>
          <span className="font-semibold">Protect main branch</span> - No commits or force-pushes
          to main
        </li>
        <li>
          <span className="font-semibold">Prevent technical debt</span> - Audit code before every
          PR merge
        </li>
        <li>
          <span className="font-semibold">Keep Wiki up-to-date</span> - Automatically commits wiki
          updates
        </li>
      </ul>

      <p className="text-[var(--color-fg-dim)]">
        Hooks catch debt-accumulating patterns before they're committed, turning debugging and
        refactoring into early detection.
      </p>
    </Section>
  );
}

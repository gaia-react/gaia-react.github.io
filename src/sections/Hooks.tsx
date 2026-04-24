import { Section } from '@/components/Section';

export default function Hooks() {
  return (
    <Section id="hooks" title="Hooks">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        Hooks are shell scripts the Claude Code harness runs at specific lifecycle events. They
        prevent common mistakes and enforce project conventions before they're committed.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Session Start / Stop</h3>
      <p className="mb-6 text-[var(--color-fg)]">
        Initialize and finalize wiki state across sessions. On start, record the current HEAD so
        the stop hook can detect wiki changes committed during the session. On stop, squash
        auto-commits from the claude-obsidian plugin into a clean history.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">User Prompt Submit</h3>
      <p className="mb-6 text-[var(--color-fg)]">
        Intercept the built-in <code className="text-[var(--color-accent)]">/init</code> command and redirect
        it to <code className="text-[var(--color-accent)]">/gaia-init</code> so the template's curated
        initialization runs instead.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Pre-Tool Use: Edit Guards</h3>
      <p className="mb-6 text-[var(--color-fg)]">
        Protect critical files from unintended edits:
        <ul className="mt-2 ml-4 space-y-1">
          <li>
            • <span className="font-semibold">ESLint config</span> — Fix errors in the source
            file, not the config
          </li>
          <li>
            • <span className="font-semibold">Vitest tsconfig</span> — Globals are managed
            separately
          </li>
          <li>
            • <span className="font-semibold">i18n keys</span> — Keys must match the project's
            naming scheme
          </li>
          <li>
            • <span className="font-semibold">Storybook co-location</span> — Ensure stories live
            next to components
          </li>
        </ul>
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Pre-Tool Use: Bash Guards</h3>
      <p className="mb-6 text-[var(--color-fg)]">
        Block destructive or expensive operations:
        <ul className="mt-2 ml-4 space-y-1">
          <li>
            • <span className="font-semibold">Bare npm test</span> — Run specific test files
            instead
          </li>
          <li>
            • <span className="font-semibold">Main branch git</span> — No commits or force-pushes
            to main/master
          </li>
          <li>
            • <span className="font-semibold">PR merge without audit</span> — Requires a
            code-review-audit pass
          </li>
          <li>
            • <span className="font-semibold">Commit without wiki check</span> — Suggests wiki
            updates when relevant
          </li>
        </ul>
      </p>

      <p className="text-[var(--color-fg-dim)]">
        Hooks catch debt-accumulating patterns before they're committed, turning debugging and
        refactoring into early detection.
      </p>
    </Section>
  );
}

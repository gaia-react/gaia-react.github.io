import { Section } from '@/components/Section';

export default function Hooks() {
  return (
    <Section id="hooks" title="Hooks">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        GAIA's Claude hooks prevent common mistakes and debt-accumulating patterns,
          as well as enforce project conventions before they're committed.
      </p>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Edit Guards</h3>
      <p className="mb-2 text-[var(--color-fg)]">Protect critical files from unintended edits:</p>
      <ul className="mb-6 ml-4 space-y-1 text-[var(--color-fg)]">
        <li>
          <span className="font-semibold">ESLint config</span> - Prevents Claude from disabling rules in the config instead of fixing lint errors
        </li>
        <li>
          <span className="font-semibold">i18n keys</span> - Ensures no hard-coded strings slip
          through
        </li>
      </ul>

      <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Bash Guards</h3>
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

      </ul>

       <h3 className="mb-3 text-lg font-semibold text-[var(--color-fg)]">Wiki Management</h3>
       <p className="mb-2 text-[var(--color-fg)]">Update wiki state across sessions:</p>
       <ul className="mb-6 ml-4 space-y-1 text-[var(--color-fg)]">
           <li>
               <span className="font-semibold">Automated updates</span> - Evaluate if committed code changes should be added to the wiki
           </li>
           <li>
               <span className="font-semibold">Keep commits clean</span> - Squash auto-commits from the&nbsp;<a href="https://github.com/AgriciDaniel/claude-obsidian" target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline">claude-obsidian</a> plugin
           </li>
       </ul>
    </Section>
  );
}

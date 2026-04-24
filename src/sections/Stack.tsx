import { Section } from '@/components/Section';

export default function Stack() {
  return (
    <Section id="stack" title="What's in the box">
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-4">Foundation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'React Router 7',
              'Tailwind v4',
              'TypeScript 6',
              'Vitest + RTL',
              'Playwright',
              'Storybook + Chromatic',
              'MSW',
              'Conform + Zod',
              'remix-i18next',
              'Dark mode',
              'Sonner',
              'FontAwesome',
            ].map((item) => (
              <div
                key={item}
                className="px-3 py-2 bg-[var(--color-bg-elev)] rounded text-[var(--color-fg)] text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-4">GAIA ships</h3>
          <ul className="space-y-2 text-[var(--color-fg-dim)] text-sm">
            <li>• 14 path-scoped rules + 12 enforcement hooks + 13 Claude commands</li>
            <li>• 1 code-review audit agent that blocks merge until issues are fixed</li>
            <li>• Obsidian wiki (committed to git, shared across the team)</li>
            <li>• Session hooks keep wiki fresh, memory discipline enforced</li>
            <li>• All wired into CLAUDE.md for token-efficient context</li>
          </ul>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6">
          <h3 className="text-lg font-semibold text-[var(--color-fg)] mb-4">How GAIA compares</h3>
          <div className="overflow-x-auto">
            <table className="text-sm w-full text-[var(--color-fg-dim)]">
              <tbody className="divide-y divide-[var(--color-border)]">
                <tr className="border-b border-[var(--color-border)]">
                  <td className="py-2 font-semibold text-[var(--color-fg)]">Feature</td>
                  <td className="py-2 font-semibold text-[var(--color-fg)]">GAIA</td>
                  <td className="py-2 font-semibold text-[var(--color-fg)]">Others</td>
                </tr>
                <tr>
                  <td className="py-2">Claude tooling</td>
                  <td className="py-2 text-[var(--color-accent)]">✓ 14 rules, 12 hooks, 13 commands, 1 agent</td>
                  <td className="py-2">—</td>
                </tr>
                <tr>
                  <td className="py-2">Obsidian wiki</td>
                  <td className="py-2 text-[var(--color-accent)]">✓</td>
                  <td className="py-2">—</td>
                </tr>
                <tr>
                  <td className="py-2">Dark mode (end-to-end)</td>
                  <td className="py-2 text-[var(--color-accent)]">✓</td>
                  <td className="py-2">—</td>
                </tr>
                <tr>
                  <td className="py-2">i18n with examples</td>
                  <td className="py-2 text-[var(--color-accent)]">✓ 2 languages</td>
                  <td className="py-2">—</td>
                </tr>
                <tr>
                  <td className="py-2">Code-review audit</td>
                  <td className="py-2 text-[var(--color-accent)]">✓</td>
                  <td className="py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}

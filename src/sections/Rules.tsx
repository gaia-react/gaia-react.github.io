import { Section } from '@/components/Section';

export default function Rules() {
  return (
    <Section id="rules" title="Rules">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        Project rules live in <code className="text-[var(--color-accent)]">.claude/rules/</code> and
        auto-load into Claude's context when you're working in matching file paths. They encode
        project conventions — coding style, API patterns, accessibility, testing — so Claude
        doesn't have to re-derive them every session. Fourteen rules ship with the template.
      </p>

      <div className="space-y-3 text-[var(--color-fg)]">
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Accessibility</span> — ARIA attributes,
          semantic HTML, keyboard navigation, color contrast
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">API Service Pattern</span> — URL
          constants, Zod schemas, request functions, MSW mocks
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Coding Guidelines</span> — naming
          conventions, imports organization, error handling
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Component Testing Pattern</span> — Vitest
          assertions, render utilities, accessibility testing
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">ESLint Fix Patterns</span> — fixing
          linting issues at the source, not in config
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Internationalization (i18n)</span> — key
          naming, pluralization, date/time handling
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">New Route Pattern</span> — file structure,
          loaders, actions, page component layout
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Playwright E2E Conventions</span> — page
          objects, assertions, visual regression
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Quality Gate</span> — run before commit:
          linting, types, tests, build checks
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Shell CWD</span> — use absolute paths in
          Bash, never <code className="text-[var(--color-accent-soft)]">cd</code>
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">State Pattern</span> — React Context
          creation confined to <code className="text-[var(--color-accent-soft)]">app/state/</code>
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Storybook Conventions</span> — component
          isolation, story structure, design tokens
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Tailwind Conventions</span> — class naming,
          custom utilities, responsive breakpoints
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">Task Orchestration</span> — plan +
          orchestrator pattern for 5+ file features
        </div>
      </div>
    </Section>
  );
}

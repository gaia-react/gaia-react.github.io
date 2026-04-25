import { Section } from '@/components/Section';

export default function Rules() {
  return (
    <Section id="rules" title="Rules">
      <p className="mb-6 text-fg-dim">
        Project rules live in <code className="text-accent">.claude/rules/</code>{' '}
        and only load into Claude's context when it's working in matching file paths. They
        encode project conventions (coding style, API patterns, accessibility, testing) so Claude
        doesn't have to re-derive them every session.
      </p>

      <div className="space-y-3 text-fg">
        <div>
          <span className="font-semibold text-accent">Accessibility</span> - ARIA
          attributes, semantic HTML, keyboard navigation, color contrast
        </div>
        <div>
          <span className="font-semibold text-accent">API Service Pattern</span> -
          URL constants, Zod schemas, request functions, MSW mocks
        </div>
        <div>
          <span className="font-semibold text-accent">Coding Guidelines</span> -
          naming conventions, imports organization, error handling
        </div>
        <div>
          <span className="font-semibold text-accent">Component Testing Pattern</span>{' '}
          - Vitest assertions, render utilities, accessibility testing
        </div>
        <div>
          <span className="font-semibold text-accent">ESLint Fix Patterns</span> -
          fixing linting issues at the source, not in config
        </div>
        <div>
          <span className="font-semibold text-accent">End-to-End Test Conventions</span>{' '}
          - page objects, assertions, visual regression
        </div>
        <div>
          <span className="font-semibold text-accent">Internationalization (i18n)</span>{' '}
          - key naming, pluralization, date/time handling
        </div>
        <div>
          <span className="font-semibold text-accent">New Route Pattern</span> -
          file structure, loaders, actions, page component layout
        </div>
        <div>
          <span className="font-semibold text-accent">Quality Gate</span> - runs
          before every commit: simplifying, linting, typechecking, and tests
        </div>
        <div>
          <span className="font-semibold text-accent">State Pattern</span> - Ensures
          application state is managed well
        </div>
        <div>
          <span className="font-semibold text-accent">Storybook Conventions</span> -
          component isolation, story structure, visual testing
        </div>
        <div>
          <span className="font-semibold text-accent">Tailwind Conventions</span> -
          class naming, efficient utility usage, utility rules
        </div>
        <div>
          <span className="font-semibold text-accent">Task Orchestration</span> -
          plan + orchestrator pattern for complex features
        </div>
      </div>
    </Section>
  );
}

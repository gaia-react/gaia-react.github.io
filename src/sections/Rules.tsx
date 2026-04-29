import {Section} from '@/components/Section';

const Rules = () => (
  <Section id="rules" title="Rules">
    <p className="text-fg-dim mb-6">
      Project rules live in <code className="text-accent">.claude/rules/</code>{' '}
      and only load into Claude’s context when it’s working in matching file
      paths. They encode project conventions (coding style, API patterns,
      accessibility, testing) so Claude doesn’t have to re-derive them every
      session.
    </p>

    <div className="text-fg space-y-3">
      <div>
        <span className="text-accent font-semibold">Accessibility</span> - ARIA
        attributes, semantic HTML, keyboard navigation, color contrast
      </div>
      <div>
        <span className="text-accent font-semibold">API Service Pattern</span> -
        URL constants, Zod schemas, request functions, MSW mocks
      </div>
      <div>
        <span className="text-accent font-semibold">Coding Guidelines</span> -
        naming conventions, imports organization, error handling
      </div>
      <div>
        <span className="text-accent font-semibold">
          Component Testing Pattern
        </span>{' '}
        - Vitest assertions, render utilities, accessibility testing
      </div>
      <div>
        <span className="text-accent font-semibold">ESLint Fix Patterns</span> -
        fixing linting issues at the source, not in config
      </div>
      <div>
        <span className="text-accent font-semibold">
          End-to-End Test Conventions
        </span>{' '}
        - page objects, assertions, visual regression
      </div>
      <div>
        <span className="text-accent font-semibold">
          Internationalization (i18n)
        </span>{' '}
        - key naming, pluralization, date/time handling
      </div>
      <div>
        <span className="text-accent font-semibold">New Route Pattern</span> -
        file structure, loaders, actions, page component layout
      </div>
      <div>
        <span className="text-accent font-semibold">Quality Gate</span> - runs
        before every commit: simplifying, linting, typechecking, and tests
      </div>
      <div>
        <span className="text-accent font-semibold">State Pattern</span> -
        Ensures application state is managed well
      </div>
      <div>
        <span className="text-accent font-semibold">Storybook Conventions</span>{' '}
        - component isolation, story structure, visual testing
      </div>
      <div>
        <span className="text-accent font-semibold">Tailwind Conventions</span>{' '}
        - class naming, efficient utility usage, utility rules
      </div>
    </div>
  </Section>
);

export default Rules;

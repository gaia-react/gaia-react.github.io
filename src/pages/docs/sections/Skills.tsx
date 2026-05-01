import {Section} from '@/components/Section';

const Skills = () => (
  <Section id="skills" title="Skills">
    <p className="text-ink-dim mb-6">
      Skills live in <code className="text-accent">.claude/skills/</code> and
      are loaded on demand when Claude detects a matching pattern in the task.
      They encode project-specific conventions and patterns so Claude applies
      them consistently without needing to re-derive them every session.
    </p>

    <h3 className="text-ink mb-3 text-lg font-semibold">Development</h3>
    <div className="text-ink mb-6 space-y-3">
      <div>
        <span className="text-accent font-semibold">typescript</span> - naming
        identifiers, type-only imports, Zod schemas, avoiding enums and switch
        statements
      </div>
      <div>
        <span className="text-accent font-semibold">tdd</span> -
        red-green-refactor loop, integration-style tests, behavior over
        implementation, stack references for React/Vitest/MSW/Storybook
      </div>
      <div>
        <span className="text-accent font-semibold">react-code</span> -
        component patterns, hook gates (useEffect, useCallback, useState), event
        handlers, catching stale closures and unnecessary re-renders
      </div>
      <div>
        <span className="text-accent font-semibold">tailwind</span> - class
        naming, combining conditional classes, twJoin vs twMerge, custom values
        and rem units
      </div>
      <div>
        <span className="text-accent font-semibold">playwright-cli</span> -
        browser automation for testing, form filling, screenshots, data
        extraction
      </div>
      <div>
        <span className="text-accent font-semibold">skeleton-loaders</span> -
        pixel-perfect skeleton loading states with the transparent-text
        technique and shimmer animation
      </div>
      <div>
        <span className="text-accent font-semibold">eslint-fixes</span> -
        resolves project-specific ESLint errors at the source: no-void,
        canonical/export vs prettier conflicts, no-shadow, sonarjs/deprecation,
        lodash equivalents
      </div>
    </div>

    <h3 className="text-ink mb-3 text-lg font-semibold">Scaffolding</h3>
    <p className="text-ink-dim mb-3">
      Auto-fire on natural-language asks — no slash command needed.
    </p>
    <div className="text-ink mb-6 space-y-3">
      <div>
        <span className="text-accent font-semibold">new-component</span> -
        scaffold a React component with optional Storybook story and Vitest test
      </div>
      <div>
        <span className="text-accent font-semibold">new-hook</span> - scaffold a
        custom React hook with tests
      </div>
      <div>
        <span className="text-accent font-semibold">new-route</span> - scaffold
        a route with page component and tests
      </div>
      <div>
        <span className="text-accent font-semibold">new-service</span> -
        scaffold an API service with Zod schemas and MSW mock handlers
      </div>
    </div>

    <h3 className="text-ink mb-3 text-lg font-semibold">Utility</h3>
    <p className="text-ink-dim mb-3">
      Invoked explicitly or offered via SessionStart prompts.
    </p>
    <div className="text-ink space-y-3">
      <div>
        <span className="text-accent font-semibold">update-deps</span> -
        autonomous dependency updates: discovers outdated packages, applies
        migrations for major bumps, runs the quality gate
      </div>
      <div>
        <span className="text-accent font-semibold">update-gaia</span> - merges
        the latest GAIA template release without clobbering your customizations;
        three-way merge per file via{' '}
        <code className="text-accent">.gaia/manifest.json</code>
      </div>
    </div>
  </Section>
);

export default Skills;

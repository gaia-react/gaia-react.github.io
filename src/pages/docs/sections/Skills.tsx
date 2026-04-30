import {Section} from '@/components/Section';

const Skills = () => (
  <Section id="skills" title="Skills">
    <p className="text-ink-dim mb-6">
      Skills live in <code className="text-accent">.claude/skills/</code> and
      are loaded on demand when Claude detects a matching pattern in the task.
      They encode project-specific conventions and patterns so Claude applies
      them consistently without needing to re-derive them every session. Six
      skills ship with GAIA.
    </p>

    <div className="text-ink space-y-3">
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
    </div>
  </Section>
);

export default Skills;

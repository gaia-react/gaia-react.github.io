import { Section } from '@/components/Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="mb-6 text-fg-dim">
        Skills live in <code className="text-accent">.claude/skills/</code> and are
        loaded on demand when Claude detects a matching pattern in the task. They encode
        project-specific conventions and patterns so Claude applies them consistently without
        needing to re-derive them every session. Six skills ship with GAIA.
      </p>

      <div className="space-y-3 text-fg">
        <div>
          <span className="font-semibold text-accent">typescript</span> - naming
          identifiers, type-only imports, Zod schemas, avoiding enums and switch statements
        </div>
        <div>
          <span className="font-semibold text-accent">tdd</span> - red-green-refactor
          loop, integration-style tests, behavior over implementation, stack references for
          React/Vitest/MSW/Storybook
        </div>
        <div>
          <span className="font-semibold text-accent">react-code</span> - component
          patterns, hook gates (useEffect, useCallback, useState), event handlers, catching stale
          closures and unnecessary re-renders
        </div>
        <div>
          <span className="font-semibold text-accent">tailwind</span> - class naming,
          combining conditional classes, twJoin vs twMerge, custom values and rem units
        </div>
        <div>
          <span className="font-semibold text-accent">playwright-cli</span> - browser
          automation for testing, form filling, screenshots, data extraction
        </div>
        <div>
          <span className="font-semibold text-accent">skeleton-loaders</span> -
          pixel-perfect skeleton loading states with the transparent-text technique and shimmer
          animation
        </div>
      </div>
    </Section>
  );
}

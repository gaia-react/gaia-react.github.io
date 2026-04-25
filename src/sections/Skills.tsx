import { Section } from '@/components/Section';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="mb-6 text-[var(--color-fg-dim)]">
        Skills live in <code className="text-[var(--color-accent)]">.claude/skills/</code> and are
        loaded on demand when Claude detects a matching pattern in the task. They encode
        project-specific conventions and patterns so Claude applies them consistently without
        needing to re-derive them every session. Six skills ship with the template.
      </p>

      <div className="space-y-3 text-[var(--color-fg)]">
        <div>
          <span className="font-semibold text-[var(--color-accent)]">typescript</span> - naming
          identifiers, type-only imports, Zod schemas, avoiding enums and switch statements
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">tdd</span> - red-green-refactor
          loop, integration-style tests, behavior over implementation, stack references for
          React/Vitest/MSW/Storybook
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">react-code</span> - component
          patterns, hook gates (useEffect, useCallback, useState), event handlers, catching stale
          closures and unnecessary re-renders
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">tailwind</span> - class naming,
          combining conditional classes, twJoin vs twMerge, custom values and rem units
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">playwright-cli</span> - browser
          automation for testing, form filling, screenshots, data extraction
        </div>
        <div>
          <span className="font-semibold text-[var(--color-accent)]">skeleton-loaders</span> -
          pixel-perfect skeleton loading states with the transparent-text technique and shimmer
          animation
        </div>
      </div>
    </Section>
  );
}

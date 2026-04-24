import { Section } from '@/components/Section';

export default function ObsidianWiki() {
  return (
    <Section id="wiki" title="The wiki is committed knowledge">
      <div className="space-y-4 text-[var(--color-fg)]">
        <p>
          The wiki is a knowledge base committed to git, shared across the team — not chat history,
          not machine-local memory. It captures architecture, decisions, dependencies, concepts,
          and flows as focused Markdown pages. Claude reads on demand: fetch the index for breadth,
          then drill into the specific page answering the current question.
        </p>

        <p>
          <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">wiki/hot.md</code>
          is a 200-word recent-context cache auto-loaded at session start — a way to surface
          "where we left off" without forcing every session to preload massive docs.
        </p>

        <p>
          <strong>Why Obsidian?</strong> Free editor, wikilinks for graph view, canvas for visual
          layouts, and a rich plugin ecosystem. The vault is just markdown files — Obsidian is
          optional reading software. You can view and edit everything in any text editor or
          directly on GitHub.
        </p>

        <p>
          <strong>Domain isolation is mandatory.</strong> Technical work stays in{' '}
          <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">wiki/app/</code>;
          brand and business have their own domains. Claude doesn't cross-load unless the task
          genuinely spans both. This keeps every session focused on what matters.
        </p>
      </div>
    </Section>
  );
}

import { Section } from '@/components/Section';

export default function ObsidianWiki() {
  return (
    <Section id="wiki" title="Obsidian wiki, fully integrated">
      <div className="space-y-4 text-fg">
        <p>
          The wiki is a knowledge base committed to git, shared across the team, not chat history,
          not machine-local memory. It captures architecture, decisions, dependencies, concepts,
          and flows as focused Markdown pages. Claude reads on demand: fetch the index for breadth,
          then drill into the specific page that answers the current question.
        </p>

        <p>
          <code className="bg-bg-elev px-2 py-1 rounded text-sm">wiki/hot.md</code>{' '}
          is a 200-word max recent-context cache auto-loaded at session start, a way to surface "where
          we left off" without forcing every session to preload massive docs.
        </p>

        <p>
          <strong>Why Obsidian?</strong> Free editor, wikilinks for the graph view, canvas for
          visual layouts, and a large plugin library. The vault is just markdown files, and
          Obsidian is optional reading software. You can view and edit everything in any text
          editor, directly on GitHub, or ask Claude to do it.
        </p>

        <p>
          <strong>Domain isolation is mandatory.</strong> Technical work stays in{' '}
          <code className="bg-bg-elev px-2 py-1 rounded text-sm">wiki/app/</code>.
          Other domains, such as branding or business, are kept siloed. GAIA makes sure Claude
          doesn't cross-load unless the task genuinely spans both.
        </p>
      </div>
    </Section>
  );
}

import { Section } from '@/components/Section';

export default function ClaudeMd() {
  return (
    <Section id="claude-md" title="A Karpathy-style CLAUDE.md">
      <div className="space-y-4 text-[var(--color-fg)]">
        <p>
          A "Karpathy-style" CLAUDE.md is wiki-first, don't-preload, lazy-fetch: it tells Claude
          where to look, not to load everything upfront. See{' '}
          <a
            href="https://github.com/forrestchang/andrej-karpathy-skills/blob/main/CLAUDE.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover:underline"
          >
            Karpathy's original
          </a>{' '}
          for the philosophy.
        </p>

        <p>
          GAIA's variant adds three key habits: <strong>domain isolation</strong> — technical work
          fetches only from <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">
            wiki/app/
          </code>
          , brand work from its own domain; <strong>wiki/hot.md auto-load</strong> — a 200-word
          recent-context cache loaded at every session start to surface work-in-progress; and{' '}
          <strong>memory discipline</strong> — machine-local memory is for personal preferences
          only, durable knowledge lives in the wiki or{' '}
          <code className="bg-[var(--color-bg-elev)] px-2 py-1 rounded text-sm">.claude/rules/</code>
          .
        </p>

        <h4 className="font-semibold mt-6 mb-3">Three concrete benefits</h4>
        <ul className="space-y-2 text-[var(--color-fg-dim)]">
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Tokens saved.</strong> Lazy-fetch only the pages Claude needs. Adding 20 more
              wiki pages doesn't bloat every session — they're not loaded unless asked.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>Context stays focused.</strong> Domain isolation prevents unrelated
              information from leaking into the context window. Technical questions get technical
              answers only.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[var(--color-accent)] flex-shrink-0">•</span>
            <span>
              <strong>The pattern scales.</strong> Whether you're building a 2-person startup or a
              100-person team, the wiki-first discipline keeps sessions lean and predictable.
            </span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

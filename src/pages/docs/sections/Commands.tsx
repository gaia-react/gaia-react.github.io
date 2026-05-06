import {Section} from '@/components/Section';

const Commands = () => (
  <Section id="commands" paddingTop="2rem" title="Commands">
    <p className="text-ink-dim mb-6">
      Slash commands for project setup and the core GAIA workflows.
      Scaffolding and dependency tasks are handled by skills that fire
      automatically.
    </p>

    <h3 className="text-ink mb-3 text-lg font-semibold">Workflows</h3>
    <ul className="text-ink mb-6 space-y-2">
      <li>
        <code className="text-accent">/gaia spec</code> - Socratic discovery
        wrapper around spec-kit. Asks one question at a time, authors an
        immutable SPEC artifact with a two-gate ceremony, then chains into{' '}
        <code className="text-accent">/gaia plan</code>
      </li>
      <li>
        <code className="text-accent">/gaia plan</code> - Plan a complex
        feature. Claude structures the work, you approve, then an orchestrator
        drives focused subagents through execution
      </li>
      <li>
        <code className="text-accent">/gaia handoff</code> - Generate a session
        handoff document so you can clear context without losing anything
      </li>
      <li>
        <code className="text-accent">/gaia pickup</code> - Restore context from
        the most recent handoff and continue work
      </li>
      <li>
        <code className="text-accent">/gaia audit</code> - Audit memory, wiki,
        and auto-loaded context for duplication and load cost
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">
      Wiki maintenance
    </h3>
    <p className="text-ink-dim mb-2">
      Mostly hands-off. Session hooks nudge{' '}
      <code className="text-accent-soft">/wiki-sync</code> when the wiki has
      drifted from HEAD; the rest of the chain auto-fires from there.
    </p>
    <ul className="text-ink mb-6 space-y-2">
      <li>
        <code className="text-accent">/wiki-sync</code> - Evaluates new commits
        and updates wiki pages where the code warrants it. Surfaced via
        commit-nudge, drift-check, and end-of-session safety-net hooks; runs in
        a fresh subagent context
      </li>
      <li>
        <code className="text-accent">/wiki-promote</code> - Drains merged SPEC
        content into the wiki. Fires automatically after{' '}
        <code className="text-accent-soft">/speckit-implement</code> completes
        (the <code className="text-accent-soft">after_implement</code> hook)
      </li>
      <li>
        <code className="text-accent">/wiki-consolidate</code> - Detects
        supersession, redundancy, reversed decisions, and near-collision slugs
        across promoted pages. Auto-fires from the{' '}
        <code className="text-accent-soft">/wiki-sync</code> gate when a domain
        accumulates new promoted pages
      </li>
      <li>
        <code className="text-accent">/wiki-lint</code> - Flags orphan pages,
        dead links, and drift. Auto-fires after{' '}
        <code className="text-accent-soft">/wiki-sync</code> completes
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">
      Manual wiki tools
    </h3>
    <p className="text-ink-dim mb-2">
      Provided by the{' '}
      <a
        className="text-accent hover:underline"
        href="https://github.com/AgriciDaniel/claude-obsidian"
        rel="noopener noreferrer"
        target="_blank"
      >
        claude-obsidian
      </a>{' '}
      integration. Invoke directly when you need them.
    </p>
    <ul className="text-ink mb-6 space-y-2">
      <li>
        <code className="text-accent">/wiki-ingest</code> - Ingest a source
        (file, URL, or batch) into the wiki vault as structured pages with
        cross-references
      </li>
      <li>
        <code className="text-accent">/wiki-query</code> - Query the wiki vault
        for a specific topic and return focused, linked results
      </li>
      <li>
        <code className="text-accent">/autoresearch</code> - Autonomous research
        loop: searches the web, synthesizes findings, and files everything into
        the wiki as structured pages
      </li>
      <li>
        <code className="text-accent">/save</code> - Save the current
        conversation or a specific insight into the wiki as a structured note
      </li>
    </ul>
  </Section>
);

export default Commands;

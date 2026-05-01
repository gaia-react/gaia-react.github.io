import {Section} from '@/components/Section';

const Commands = () => (
  <Section id="commands" paddingTop="2rem" title="Commands">
    <p className="text-ink-dim mb-6">
      Slash commands for project setup and the four core GAIA workflows.
      Scaffolding and dependency tasks are handled by skills that fire
      automatically.
    </p>

    <h3 className="text-ink mb-3 text-lg font-semibold">Project Lifecycle</h3>
    <ul className="text-ink mb-6 space-y-2">
      <li>
        <code className="text-accent">/init</code> - Initializes a new GAIA
        project
      </li>
    </ul>

    <h3 className="text-ink mb-3 text-lg font-semibold">Workflows</h3>
    <ul className="text-ink mb-6 space-y-2">
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
        and auto-loaded context for duplication and load cost. Pass{' '}
        <code className="text-accent">--apply</code> to fix found issues
      </li>
    </ul>
  </Section>
);

export default Commands;

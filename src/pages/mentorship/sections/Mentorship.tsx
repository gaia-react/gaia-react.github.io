import {CodeBlock} from '@/components/CodeBlock';
import {Section} from '@/components/Section';

const Mentorship = () => (
  <>
    {/* Hero */}
    <section className="pt-20 pb-6">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <h1 className="font-display text-ink mb-6 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-light tracking-[-0.03em]">
          Mentorship
        </h1>
        <p className="text-ink-dim mx-auto mb-7 max-w-152 text-[clamp(1rem,2vw,1.1875rem)] leading-[1.65]">
          I want to get better at working with AI. So I built a coach that
          watches how I work and shows me where I can sharpen.
        </p>
        <p className="font-body text-muted mx-auto max-w-152 text-[0.8125rem] tracking-[0.04em] uppercase">
          Optional. Local-only. Yours.
        </p>
      </div>
    </section>

    {/* Why I built it */}
    <Section
      id="why-i-built-it"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="Why I built it"
    >
      <div className="flex flex-col gap-5">
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          Every spec I write, every plan I refine, every code review I run
          goes through GAIA&rsquo;s commands. Each step emits a structured
          event. Together those events add up to a record of how I actually
          work: what I do well, where I tend to under-articulate, where I
          revise after the fact, where I keep getting stuck.
        </p>
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          That record is the input to a coach that gets sharper as it watches
          me. The Socratic loop goes deeper on the kinds of specs I rush. The
          engineer skips the recap on the areas I already handle confidently.
          The pattern adjusts as I improve.
        </p>
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          I built it for myself. It ships with GAIA so you can use it too.
        </p>
      </div>
    </Section>

    {/* What it does for you */}
    <Section
      id="what-it-does-for-you"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="What it does for you"
    >
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        Sharper sessions on the work that&rsquo;s hard. Less repetition on the
        work that isn&rsquo;t. Adaptations that fade as you sharpen.
      </p>
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        As you move through GAIA&rsquo;s spec, plan, and review workflow,
        mentorship watches the patterns that emerge: which kinds of specs you
        find easy or hard, where you tend to need more context, when you amend
        specs after closing them. From those patterns it adjusts how Claude
        responds to you in session.
      </p>
      <p className="text-ink-dim mb-3 text-[1.0625rem] leading-[1.7]">
        In session, you&rsquo;ll notice:
      </p>
      <ul className="text-ink-dim mb-5 list-disc pl-6 text-[1.0625rem] leading-[1.7] marker:text-[var(--color-muted)]">
        <li>Deeper questions where you tend to rush past intent</li>
        <li>More orientation when you&rsquo;re working in unfamiliar code</li>
        <li>Richer code review feedback where your errors cluster</li>
        <li>Adaptations that scale down as your patterns improve</li>
      </ul>
      <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
        Patterns need a minimum sample size before they shape any session.
        Expect the first few to feel quiet.
      </p>
    </Section>

    {/* Private by design */}
    <Section
      id="privacy"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="Private by design"
    >
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        Mentorship doesn&rsquo;t read your code. It doesn&rsquo;t store specs,
        plans, file paths, or commit history. It works on event metadata:
        which agent ran, what kind of question came back, how many attempts a
        UAT took. The pattern math doesn&rsquo;t read your identity to begin
        with. Anything that could identify you stays local.
      </p>
      <p className="text-ink-dim mb-3 text-[1.0625rem] leading-[1.7]">
        Beyond those events, nothing else is observed:
      </p>
      <ul className="text-ink-dim mb-5 list-disc pl-6 text-[1.0625rem] leading-[1.7] marker:text-[var(--color-muted)]">
        <li>When you work or how fast you type</li>
        <li>What you read or how long you read it</li>
        <li>Your attention, mood, or biometrics</li>
        <li>Any activity outside GAIA&rsquo;s commands</li>
        <li>Any keystroke, screen, or sensor data</li>
      </ul>
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        Your pattern profile is a plain-text file at{' '}
        <code className="text-ink bg-surface-raised border-line rounded-sm border px-1.5 font-mono text-[0.92em]">
          .gaia/local/profile.md
        </code>{' '}
        inside your Claude project folder. Read it. Edit it. Delete it. It
        never enters your repository&rsquo;s git history.
      </p>
      <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
        One transparency note. When you amend a spec, GAIA asks why, and your
        typed reason is recorded locally. If your reason includes project
        detail, it lives in the local file. It still never leaves your
        machine.
      </p>
    </Section>

    {/* Opting in and out */}
    <Section
      id="opting-in-and-out"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="Opting in and out"
    >
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        Mentorship is off by default. You can enable it during
        GAIA&rsquo;s initial setup, or any time afterward.
      </p>
      <CodeBlock language="bash" title="terminal">
        {`gaia mentorship enable      # turn on
gaia mentorship disable     # stop emit and adaptation, files preserved
gaia mentorship status      # show state, file location, last activity
gaia mentorship purge       # delete all mentorship data`}
      </CodeBlock>
      <p className="text-ink-dim mb-5 text-[1.0625rem] leading-[1.7]">
        Analytics is bundled with the mentorship opt-in. You can disable it
        separately while keeping mentorship on, or preview what would be sent
        before any future upload.
      </p>
      <CodeBlock language="bash" title="terminal">
        {`gaia mentorship analytics enable
gaia mentorship analytics disable
gaia mentorship analytics dry-run`}
      </CodeBlock>
    </Section>
  </>
);

export default Mentorship;

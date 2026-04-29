import {CodeBlock} from '@/components/CodeBlock';
import {Section} from '@/components/Section';

const GetStarted = () => (
  <Section id="get-started" paddingTop="2rem" title="Get Started with GAIA">
    <div className="space-y-6">
      <p className="text-fg">Two commands and you’re initialized.</p>

      <div className="space-y-4">
        <CodeBlock language="bash" title="terminal">
          npx create-gaia my-app
        </CodeBlock>

        <CodeBlock language="" title="Claude Code">
          /init
        </CodeBlock>
      </div>

      <p className="text-fg-dim text-sm">
        The first command pulls the latest release and git-inits your project.
        The second initializes GAIA’s Claude setup, including installing skills
        and plugins. See the{' '}
        <a className="text-accent hover:underline" href="/docs/#commands">
          commands section
        </a>{' '}
        in the docs for more information.
      </p>
    </div>
  </Section>
);

export default GetStarted;

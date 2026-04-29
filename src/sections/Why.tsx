import {Card} from '@/components/Card';
import {BullseyeIcon, ShieldCheckIcon} from '@/components/icons';
import {Section} from '@/components/Section';

const Why = () => (
  <Section id="why" title="Why GAIA">
    <p className="text-fg-dim mb-8 text-lg">
      Two things break Claude on real projects: output you can’t trust, and
      quality that drops as the project grows.{' '}
      <span className="text-fg">GAIA fixes both.</span>
    </p>

    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card
        icon={<ShieldCheckIcon size={32} />}
        iconColor="secondary"
        title="Trustworthy by default"
      >
        <p>
          GAIA enforces high standards on every commit, so the code your team
          merges is code you can trust.
        </p>
      </Card>

      <Card
        icon={<BullseyeIcon size={32} />}
        iconColor="accent"
        title="Disciplined at scale"
      >
        <p>
          GAIA gives Claude only what each task needs, so quality and costs stay
          predictable as your codebase grows.
        </p>
      </Card>
    </div>

    <a className="text-accent hover:underline" href="/features/">
      Learn more →
    </a>
  </Section>
);

export default Why;

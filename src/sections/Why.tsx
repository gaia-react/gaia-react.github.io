import { Section } from '@/components/Section';
import { Card } from '@/components/Card';
import { BullseyeIcon, ShieldCheckIcon } from '@/components/icons';

export default function Why() {
  return (
    <Section id="why" title="Why GAIA">
      <p className="text-fg-dim text-lg mb-8">
        Two things break Claude on real projects: output you can't trust, and quality that drops
        as the project grows. <span className="text-fg">GAIA fixes both.</span>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card
          icon={<ShieldCheckIcon size={32} />}
          iconColor="secondary"
          title="Trustworthy by default"
        >
          <p>
            GAIA enforces high standards on every commit, so the code your team merges is code
            you can trust.
          </p>
        </Card>

        <Card
          icon={<BullseyeIcon size={32} />}
          iconColor="accent"
          title="Disciplined at scale"
        >
          <p>
            GAIA gives Claude only what each task needs, so quality and costs stay predictable
            as your codebase grows.
          </p>
        </Card>
      </div>

      <a href="/features/" className="text-accent hover:underline">
        Learn more →
      </a>
    </Section>
  );
}

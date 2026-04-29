import { Section, SectionHeading } from '@/components/Section';
import wikiVaultDiagram from '../assets/wiki-vault-diagram.svg';
import ClaudeLogo from '../assets/logos/ClaudeLogo';
import ObsidianLogo from '../assets/logos/ObsidianLogo';

export default function ObsidianWiki() {
  return (
    <Section id="wiki">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div className="space-y-4 text-fg order-2 md:order-1">
          <SectionHeading id="wiki">A second brain for Claude</SectionHeading>
          <p>
            GAIA's wiki saves Claude tokens. Architecture, flows, and decisions live as committed
            markdown Claude reads on demand, so it never re-infers them from source code.
          </p>

          <p>
            Onboarding stops being a multi-week ramp. Context stops getting lost between sessions.
          </p>

          <p>
            The vault stays yours. Plain markdown in your repo, not a vendor's database, not chat
            history.
          </p>

          <p>
            <a href="/features/#wiki" className="text-accent hover:underline">
              Learn more →
            </a>
          </p>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-[360px] aspect-square">
            <img
              src={wikiVaultDiagram}
              alt="Wiki vault structure: agents, architecture, flows"
              className="w-full h-full"
            />
            <ObsidianLogo
              aria-hidden="true"
              height={36}
              className="absolute opacity-60"
              style={{ left: '8%', top: '60%' }}
            />
            <ClaudeLogo
              aria-hidden="true"
              height={32}
              className="absolute opacity-70"
              style={{ left: '82%', top: '30%' }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

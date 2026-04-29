import {Section, SectionHeading} from '@/components/Section';
import ClaudeLogo from '../assets/logos/ClaudeLogo';
import ObsidianLogo from '../assets/logos/ObsidianLogo';
import wikiVaultDiagram from '../assets/wiki-vault-diagram.svg';

const ObsidianWiki = () => (
  <Section id="wiki">
    <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.2fr_1fr]">
      <div className="text-fg order-2 space-y-4 md:order-1">
        <SectionHeading id="wiki">A second brain for Claude</SectionHeading>
        <p>
          GAIA’s wiki saves Claude tokens. Architecture, flows, and decisions
          live as committed markdown Claude reads on demand, so it never
          re-infers them from source code.
        </p>

        <p>
          Onboarding stops being a multi-week ramp. Context stops getting lost
          between sessions.
        </p>

        <p>
          The vault stays yours. Plain markdown in your repo, not a vendor’s
          database, not chat history.
        </p>

        <p>
          <a className="text-accent hover:underline" href="/features/#wiki">
            Learn more →
          </a>
        </p>
      </div>

      <div className="order-1 flex justify-center md:order-2">
        <div className="relative aspect-square w-full max-w-[360px]">
          <img
            alt="Wiki vault structure: agents, architecture, flows"
            className="size-full"
            src={wikiVaultDiagram}
          />
          <ObsidianLogo
            aria-hidden="true"
            className="absolute opacity-60"
            height={36}
            style={{left: '8%', top: '60%'}}
          />
          <ClaudeLogo
            aria-hidden="true"
            className="absolute opacity-70"
            height={32}
            style={{left: '82%', top: '30%'}}
          />
        </div>
      </div>
    </div>
  </Section>
);

export default ObsidianWiki;

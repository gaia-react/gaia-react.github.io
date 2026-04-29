import type {ReactNode} from 'react';
import ChromaticLogo from '@/assets/logos/ChromaticLogo';
import ClaudeLogo from '@/assets/logos/ClaudeLogo';
import ConformLogo from '@/assets/logos/ConformLogo';
import ESLintLogo from '@/assets/logos/ESLintLogo';
import I18NextLogo from '@/assets/logos/I18NextLogo';
import MSWLogo from '@/assets/logos/MSWLogo';
import ObsidianLogo from '@/assets/logos/ObsidianLogo';
import PlaywrightLogo from '@/assets/logos/PlaywrightLogo';
import PrettierLogo from '@/assets/logos/PrettierLogo';
import ReactRouterLogo from '@/assets/logos/ReactRouterLogo';
import RTLLogo from '@/assets/logos/RTLLogo';
import StorybookLogo from '@/assets/logos/StorybookLogo';
import StylelintLogo from '@/assets/logos/StylelintLogo';
import TailwindLogo from '@/assets/logos/TailwindLogo';
import TSLogo from '@/assets/logos/TSLogo';
import VitestLogo from '@/assets/logos/VitestLogo';
import ZodLogo from '@/assets/logos/ZodLogo';

type LogoEntry = {name: string; node: ReactNode};

const LOGOS: LogoEntry[] = [
  {name: 'Claude', node: <ClaudeLogo height={28} />},
  {name: 'Obsidian', node: <ObsidianLogo height={28} />},
  {name: 'React Router', node: <ReactRouterLogo height={28} />},
  {name: 'Tailwind', node: <TailwindLogo height={28} />},
  {name: 'TypeScript', node: <TSLogo height={28} />},
  {name: 'Zod', node: <ZodLogo height={28} />},
  {name: 'i18next', node: <I18NextLogo height={28} />},
  {name: 'Conform', node: <ConformLogo height={22} />},
  {name: 'Vitest', node: <VitestLogo height={28} />},
  {name: 'React Testing Library', node: <RTLLogo height={28} />},
  {name: 'Playwright', node: <PlaywrightLogo height={28} />},
  {name: 'MSW', node: <MSWLogo height={28} />},
  {name: 'Storybook', node: <StorybookLogo height={28} />},
  {name: 'Chromatic', node: <ChromaticLogo height={28} />},
  {name: 'ESLint', node: <ESLintLogo height={28} />},
  {name: 'Prettier', node: <PrettierLogo height={28} />},
  {name: 'Stylelint', node: <StylelintLogo height={28} />},
];

const LogoItem = ({name, node}: LogoEntry) => (
  <div
    aria-label={name}
    className="flex h-8 items-center justify-center opacity-40 transition-opacity duration-200 hover:opacity-100"
  >
    {node}
  </div>
);

const StackRow = () => (
  <section id="stack" style={{paddingBottom: '3rem', paddingTop: '3rem'}}>
    <div className="mx-auto max-w-3xl scroll-mt-20 px-8">
      <p
        className="text-fg-mute mb-2.5 text-center font-mono uppercase"
        style={{fontSize: '0.65rem', letterSpacing: '0.2em'}}
      >
        Built on
      </p>

      {/* Desktop: static flex-wrap row */}
      <div className="hidden flex-wrap items-center justify-center gap-8 md:flex">
        {LOGOS.map((logo) => (
          <LogoItem key={logo.name} {...logo} />
        ))}
      </div>

      {/* Mobile: marquee */}
      <div
        className="overflow-hidden md:hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* eslint-disable-next-line better-tailwindcss/no-unknown-classes -- defined in src/styles.css */}
        <div className="stackrow-marquee-track flex w-max items-center gap-8">
          {LOGOS.map((logo) => (
            <LogoItem key={`a-${logo.name}`} {...logo} />
          ))}
          {LOGOS.map((logo) => (
            <LogoItem key={`b-${logo.name}`} {...logo} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StackRow;

import type { ReactNode } from 'react';
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

type LogoEntry = { name: string; node: ReactNode };

const LOGOS: LogoEntry[] = [
  { name: 'Claude', node: <ClaudeLogo height={28} /> },
  { name: 'Obsidian', node: <ObsidianLogo height={28} /> },
  { name: 'React Router', node: <ReactRouterLogo height={28} /> },
  { name: 'Tailwind', node: <TailwindLogo height={28} /> },
  { name: 'TypeScript', node: <TSLogo height={28} /> },
  { name: 'Zod', node: <ZodLogo height={28} /> },
  { name: 'i18next', node: <I18NextLogo height={28} /> },
  { name: 'Conform', node: <ConformLogo height={22} /> },
  { name: 'Vitest', node: <VitestLogo height={28} /> },
  { name: 'React Testing Library', node: <RTLLogo height={28} /> },
  { name: 'Playwright', node: <PlaywrightLogo height={28} /> },
  { name: 'MSW', node: <MSWLogo height={28} /> },
  { name: 'Storybook', node: <StorybookLogo height={28} /> },
  { name: 'Chromatic', node: <ChromaticLogo height={28} /> },
  { name: 'ESLint', node: <ESLintLogo height={28} /> },
  { name: 'Prettier', node: <PrettierLogo height={28} /> },
  { name: 'Stylelint', node: <StylelintLogo height={28} /> },
];

const MARQUEE_STYLES = `
@keyframes stackrow-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
.stackrow-marquee-track {
  animation: stackrow-scroll 40s linear infinite;
}
@media (prefers-reduced-motion: reduce) {
  .stackrow-marquee-track {
    animation: none;
  }
}
`;

function LogoItem({ name, node }: LogoEntry) {
  return (
    <div
      aria-label={name}
      className="flex items-center justify-center h-8 opacity-40 hover:opacity-100 transition-opacity duration-200"
    >
      {node}
    </div>
  );
}

export default function StackRow() {
  return (
    <section
      id="stack"
      style={{ paddingTop: '3rem', paddingBottom: '3rem' }}
    >
      <style>{MARQUEE_STYLES}</style>
      <div className="max-w-[48rem] mx-auto px-8 [scroll-margin-top:5rem]">
        <p
          className="text-fg-mute font-mono uppercase text-center mb-2.5"
          style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
        >
          Built on
        </p>

        {/* Desktop: static flex-wrap row */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-8">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </div>

        {/* Mobile: marquee */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
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
}

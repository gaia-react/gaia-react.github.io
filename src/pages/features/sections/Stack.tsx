import type {ReactNode} from 'react';
import ChromaticLogo from '@/assets/logos/ChromaticLogo';
import ClaudeLogo from '@/assets/logos/ClaudeLogo';
import ConformLogo from '@/assets/logos/ConformLogo';
import ESLintLogo from '@/assets/logos/ESLintLogo';
import I18NextLogo from '@/assets/logos/I18NextLogo';
import KnipLogo from '@/assets/logos/KnipLogo';
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
import FxSection from './FxSection';

type LogoEntry = {
  component: ReactNode;
  href: string;
  name: string;
};

const FOUNDATION: LogoEntry[] = [
  {
    component: <ClaudeLogo height={36} />,
    href: 'https://claude.com/claude-code',
    name: 'Claude',
  },
  {
    component: <ObsidianLogo height={36} />,
    href: 'https://obsidian.md/',
    name: 'Obsidian',
  },
  {
    component: <ReactRouterLogo height={36} />,
    href: 'https://reactrouter.com/',
    name: 'React Router',
  },
  {
    component: <TailwindLogo height={36} />,
    href: 'https://tailwindcss.com',
    name: 'Tailwind',
  },
  {
    component: <TSLogo height={36} />,
    href: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
  },
  {component: <ZodLogo height={36} />, href: 'https://zod.dev/', name: 'Zod'},
  {
    component: <I18NextLogo height={36} />,
    href: 'https://react.i18next.com/',
    name: 'i18next',
  },
  {
    component: <ConformLogo height={28} />,
    href: 'https://conform.guide/',
    name: 'Conform',
  },
];

const TESTING: LogoEntry[] = [
  {
    component: <VitestLogo height={36} />,
    href: 'https://vitest.dev/',
    name: 'Vitest',
  },
  {
    component: <RTLLogo height={36} />,
    href: 'https://testing-library.com/docs/react-testing-library/intro/',
    name: 'RTL',
  },
  {
    component: <PlaywrightLogo height={36} />,
    href: 'https://playwright.dev/',
    name: 'Playwright',
  },
  {component: <MSWLogo height={36} />, href: 'https://mswjs.io/', name: 'MSW'},
  {
    component: <StorybookLogo height={36} />,
    href: 'https://storybook.js.org/',
    name: 'Storybook',
  },
  {
    component: <ChromaticLogo height={36} />,
    href: 'https://www.chromatic.com/',
    name: 'Chromatic',
  },
];

const CODE_QUALITY: LogoEntry[] = [
  {
    component: <ESLintLogo height={36} />,
    href: 'https://eslint.org/',
    name: 'ESLint',
  },
  {
    component: <PrettierLogo height={36} />,
    href: 'https://prettier.io/',
    name: 'Prettier',
  },
  {
    component: <StylelintLogo height={36} />,
    href: 'https://stylelint.io/',
    name: 'Stylelint',
  },
  {
    component: <KnipLogo height={36} />,
    href: 'https://knip.dev/',
    name: 'Knip',
  },
];

const MOBILE_COLS = 2;

const getBorderClasses = (index: number, total: number, cols: number) => {
  const mobileLastCol = (index + 1) % MOBILE_COLS === 0;
  const mobileLastRow = index >= total - MOBILE_COLS;
  const desktopLastCol = (index + 1) % cols === 0;
  const desktopLastRow = index >= total - cols;

  const classes = ['border-line-soft'];

  if (!mobileLastCol && !desktopLastCol) classes.push('border-r');
  else if (!mobileLastCol && desktopLastCol)
    classes.push('border-r sm:border-r-0');
  else if (mobileLastCol && !desktopLastCol) classes.push('sm:border-r');

  if (!mobileLastRow && !desktopLastRow) classes.push('border-b');
  else if (!mobileLastRow && desktopLastRow)
    classes.push('border-b sm:border-b-0');
  else if (mobileLastRow && !desktopLastRow) classes.push('sm:border-b');

  return classes.join(' ');
};

type LogoGroupProperties = {
  cols: number;
  gridClass: string;
  items: LogoEntry[];
  title: string;
};

const LogoGroup = ({cols, gridClass, items, title}: LogoGroupProperties) => (
  <div className="mb-10 last:mb-0">
    <h3 className="font-display text-ink mb-4 text-[1.3rem] font-normal tracking-[-0.015em]">
      {title}
    </h3>
    <div
      className={`border-line-soft bg-surface grid overflow-hidden rounded-lg border ${gridClass}`}
    >
      {items.map(({component, href, name}, index) => (
        <a
          key={name}
          className={`group flex flex-col items-center justify-center gap-[0.6rem] p-[1.4rem_0.75rem_1.2rem] transition-colors duration-150 ${getBorderClasses(index, items.length, cols)}`}
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex size-10 items-center justify-center transition-transform duration-150 group-hover:-translate-y-px">
            {component}
          </div>
          <span className="text-ink-dim group-hover:text-ink text-center font-mono text-[0.75rem] tracking-[0.04em] transition-colors duration-150">
            {name}
          </span>
        </a>
      ))}
    </div>
  </div>
);

const Stack = () => (
  <FxSection
    id="stack"
    lead={
      <>
        <p>GAIA&apos;s stack includes everything you see here.</p>
        <p>
          GAIA uses{' '}
          <a
            className="text-accent hover:text-accent-soft transition-colors duration-150"
            href="https://pnpm.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            pnpm
          </a>
          . Faster installs. Smaller node_modules. Stricter dependency
          resolution that blocks phantom imports and most importantly, protects
          against the easiest path for npm supply-chain attacks.
        </p>
      </>
    }
    title="GAIA Tech Stack"
  >
    <LogoGroup
      cols={4}
      gridClass="grid-cols-2 sm:grid-cols-4"
      items={FOUNDATION}
      title="Foundation"
    />
    <LogoGroup
      cols={3}
      gridClass="grid-cols-2 sm:grid-cols-3"
      items={TESTING}
      title="Testing"
    />
    <LogoGroup
      cols={4}
      gridClass="grid-cols-2 sm:grid-cols-4"
      items={CODE_QUALITY}
      title="Code quality"
    />
  </FxSection>
);

export default Stack;

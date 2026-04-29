import {twJoin} from 'tailwind-merge';
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
import {Section} from '@/components/Section';

type LogoEntry = {
  component: React.ReactNode;
  href: string;
  isWide?: boolean;
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
    isWide: true,
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
];

const LogoCard = ({component, href, isWide, name}: LogoEntry) => (
  <a
    aria-label={name}
    className={twJoin(
      'bg-surface border-line hover:border-accent-soft flex min-h-22 flex-col items-center justify-center gap-2 rounded-lg border px-3 py-5 no-underline transition-[border-color,transform] duration-150',
      isWide && 'col-span-2'
    )}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <div className="flex h-10 items-center justify-center">{component}</div>
    <span className="text-ink-dim text-center text-xs/tight">{name}</span>
  </a>
);

type GroupProperties = {
  items: LogoEntry[];
  label: string;
};

const LogoGroup = ({items, label}: GroupProperties) => (
  <div className="space-y-3">
    <h3 className="text-ink-dim text-xs font-semibold tracking-widest uppercase">
      {label}
    </h3>
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
      {items.map((item) => (
        <LogoCard key={item.name} {...item} />
      ))}
    </div>
  </div>
);

const Stack = () => (
  <Section id="stack" title="The stack">
    <p className="text-ink-dim mb-8">
      20+ ESLint plugins, four testing layers (unit, integration, E2E, visual)
      with mocking, i18n, dark mode, forms with validation, and Storybook. All
      pre-configured and documented for Claude.
    </p>
    <div className="space-y-8">
      <LogoGroup items={FOUNDATION} label="Foundation" />
      <LogoGroup items={TESTING} label="Testing" />
      <LogoGroup items={CODE_QUALITY} label="Code quality" />
    </div>
  </Section>
);

export default Stack;

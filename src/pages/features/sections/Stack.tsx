import type {ReactNode} from 'react';
import ChromaticLogo from '@/assets/logos/ChromaticLogo';
import ConformLogo from '@/assets/logos/ConformLogo';
import ESLintLogo from '@/assets/logos/ESLintLogo';
import I18NextLogo from '@/assets/logos/I18NextLogo';
import KnipLogo from '@/assets/logos/KnipLogo';
import MSWLogo from '@/assets/logos/MSWLogo';
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
  role: string;
};

const FOUNDATION: LogoEntry[] = [
  {
    component: <ReactRouterLogo height={32} />,
    href: 'https://reactrouter.com/',
    name: 'React Router',
    role: 'routing',
  },
  {
    component: <TSLogo height={32} />,
    href: 'https://www.typescriptlang.org/',
    name: 'TypeScript',
    role: 'types',
  },
  {
    component: <ZodLogo height={32} />,
    href: 'https://zod.dev/',
    name: 'Zod',
    role: 'schemas',
  },
  {
    component: <TailwindLogo height={32} />,
    href: 'https://tailwindcss.com',
    name: 'Tailwind',
    role: 'styling',
  },
  {
    component: <I18NextLogo height={32} />,
    href: 'https://react.i18next.com/',
    name: 'i18next',
    role: 'translation',
  },
  {
    component: <ConformLogo height={26} />,
    href: 'https://conform.guide/',
    name: 'Conform',
    role: 'forms',
  },
];

const TESTING: LogoEntry[] = [
  {
    component: <VitestLogo height={32} />,
    href: 'https://vitest.dev/',
    name: 'Vitest',
    role: 'unit runner',
  },
  {
    component: <RTLLogo height={32} />,
    href: 'https://testing-library.com/docs/react-testing-library/intro/',
    name: 'RTL',
    role: 'component testing',
  },
  {
    component: <PlaywrightLogo height={32} />,
    href: 'https://playwright.dev/',
    name: 'Playwright',
    role: 'end-to-end',
  },
  {
    component: <MSWLogo height={32} />,
    href: 'https://mswjs.io/',
    name: 'MSW',
    role: 'api mocking',
  },
  {
    component: <StorybookLogo height={32} />,
    href: 'https://storybook.js.org/',
    name: 'Storybook',
    role: 'components',
  },
  {
    component: <ChromaticLogo height={32} />,
    href: 'https://www.chromatic.com/',
    name: 'Chromatic',
    role: 'visual regression',
  },
];

const CODE_QUALITY: LogoEntry[] = [
  {
    component: <ESLintLogo height={32} />,
    href: 'https://eslint.org/',
    name: 'ESLint',
    role: 'js linter',
  },
  {
    component: <PrettierLogo height={32} />,
    href: 'https://prettier.io/',
    name: 'Prettier',
    role: 'formatter',
  },
  {
    component: <StylelintLogo height={32} />,
    href: 'https://stylelint.io/',
    name: 'Stylelint',
    role: 'css linter',
  },
  {
    component: <KnipLogo height={32} />,
    href: 'https://knip.dev/',
    name: 'Knip',
    role: 'dead code',
  },
];

type Group = {
  cols: number;
  gridClass: string;
  items: LogoEntry[];
  title: string;
};

const GROUPS: Group[] = [
  {
    cols: 3,
    gridClass: 'grid-cols-2 sm:grid-cols-3',
    items: FOUNDATION,
    title: 'Foundation',
  },
  {
    cols: 3,
    gridClass: 'grid-cols-2 sm:grid-cols-3',
    items: TESTING,
    title: 'Testing',
  },
  {
    cols: 4,
    gridClass: 'grid-cols-2 sm:grid-cols-4',
    items: CODE_QUALITY,
    title: 'Code quality',
  },
];

const MOBILE_COLS = 2;

const tileBorders = (index: number, total: number, cols: number) => {
  const mobileLastCol = (index + 1) % MOBILE_COLS === 0;
  const desktopLastCol = (index + 1) % cols === 0;
  const mobileLastRow = index >= total - MOBILE_COLS;
  const desktopLastRow = index >= total - (total % cols || cols);

  const classes = ['border-line-soft'];

  if (!mobileLastCol && !desktopLastCol) classes.push('border-r');
  else if (!mobileLastCol && desktopLastCol)
    classes.push('border-r sm:border-r-0');
  else if (mobileLastCol && !desktopLastCol) classes.push('sm:border-r');

  if (!mobileLastRow) classes.push('border-b');
  else if (!desktopLastRow) classes.push('sm:border-b');

  return classes.join(' ');
};

const Tile = ({
  cols,
  component,
  href,
  index,
  name,
  role,
  total,
}: LogoEntry & {cols: number; index: number; total: number}) => (
  <a
    className={`group flex flex-col items-center gap-[0.55rem] px-3 py-5 transition-colors duration-150 ${tileBorders(index, total, cols)}`}
    href={href}
    rel="noreferrer"
    target="_blank"
  >
    <div className="flex h-9 items-center transition-transform duration-150 group-hover:-translate-y-px">
      {component}
    </div>
    <div className="mt-1 flex flex-col items-center gap-[0.2rem]">
      <span className="text-ink-dim group-hover:text-ink font-mono text-[0.76rem] tracking-[0.04em] transition-colors duration-150">
        {name}
      </span>
      <span className="text-muted text-[0.62rem] tracking-[0.14em] uppercase">
        {role}
      </span>
    </div>
  </a>
);

const Stack = () => (
  <FxSection
    id="stack"
    lead={
      <>
        <p>
          Industry-standard tools, each a default in serious React projects.
          Refined over years. The same tools humans rely on to ship reliable
          code. Claude works with them, just faster.
        </p>
        <p>
          Package management runs on{' '}
          <a
            className="text-accent hover:text-accent-soft transition-colors duration-150"
            href="https://pnpm.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            pnpm
          </a>
          . Faster installs. Smaller node_modules. Stricter dependency
          resolution that blocks phantom imports and the easiest path for npm
          supply-chain attacks.
        </p>
      </>
    }
    title="A professional frontend stack"
  >
    <div className="bg-surface border-line-soft overflow-hidden rounded-lg border">
      {GROUPS.map((group, groupIndex) => (
        <div
          key={group.title}
          className={groupIndex > 0 ? 'border-line-soft border-t' : ''}
        >
          <div className="border-line-soft flex items-center border-b bg-black/15 px-5 py-2.5">
            <span className="text-muted font-mono text-[0.65rem] tracking-[0.2em] uppercase">
              {group.title}
            </span>
          </div>
          <div className={`grid ${group.gridClass}`}>
            {group.items.map((item, index) => (
              <Tile
                key={item.name}
                {...item}
                cols={group.cols}
                index={index}
                total={group.items.length}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </FxSection>
);

export default Stack;

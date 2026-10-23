import type {ReactNode} from 'react';
import ShadcnLogo from '@/assets/logos/ShadcnLogo';
import StylelintLogo from '@/assets/logos/StylelintLogo';
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
    component: (
      <img
        alt="React Router"
        height={32}
        loading="lazy"
        src="/logos/react-router-logo.svg"
        width={54}
      />
    ),
    href: 'https://reactrouter.com/',
    name: 'React Router',
    role: 'routing',
  },
  {
    component: (
      <img
        alt="TypeScript"
        height={32}
        loading="lazy"
        src="/logos/ts-logo.svg"
        width={32}
      />
    ),
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
    component: (
      <img
        alt="Tailwind"
        height={32}
        loading="lazy"
        src="/logos/tailwind-logo.svg"
        width={52}
      />
    ),
    href: 'https://tailwindcss.com',
    name: 'Tailwind',
    role: 'styling',
  },
  {
    component: (
      <img
        alt="i18next"
        height={32}
        loading="lazy"
        src="/logos/i18next-logo.svg"
        width={32}
      />
    ),
    href: 'https://react.i18next.com/',
    name: 'i18next',
    role: 'translation',
  },
  {
    component: (
      <img
        alt="Conform"
        height={26}
        loading="lazy"
        src="/logos/conform-logo.svg"
        width={126}
      />
    ),
    href: 'https://conform.guide/',
    name: 'Conform',
    role: 'forms',
  },
  {
    component: <ShadcnLogo height={32} />,
    href: 'https://ui.shadcn.com/',
    name: 'shadcn/ui',
    role: 'components',
  },
  {
    component: (
      <img
        alt="React Compiler"
        height={32}
        loading="lazy"
        src="/logos/react-logo.svg"
        width={36}
      />
    ),
    href: 'https://react.dev/learn/react-compiler',
    name: 'React Compiler',
    role: 'memoization',
  },
];

const TESTING: LogoEntry[] = [
  {
    component: (
      <img
        alt="Vitest"
        height={32}
        loading="lazy"
        src="/logos/vitest-logo.svg"
        width={32}
      />
    ),
    href: 'https://vitest.dev/',
    name: 'Vitest',
    role: 'unit runner',
  },
  {
    component: (
      <img
        alt="Playwright"
        height={32}
        loading="lazy"
        src="/logos/playwright-logo.svg"
        width={32}
      />
    ),
    href: 'https://playwright.dev/',
    name: 'Playwright',
    role: 'end-to-end',
  },
  {
    component: (
      <img
        alt="MSW"
        height={32}
        loading="lazy"
        src="/logos/msw-logo.svg"
        width={32}
      />
    ),
    href: 'https://mswjs.io/',
    name: 'MSW',
    role: 'api mocking',
  },
  {
    component: (
      <img
        alt="Storybook"
        height={32}
        loading="lazy"
        src="/logos/storybook-logo.svg"
        width={26}
      />
    ),
    href: 'https://storybook.js.org/',
    name: 'Storybook',
    role: 'components',
  },
  {
    component: (
      <img
        alt="Chromatic"
        height={32}
        loading="lazy"
        src="/logos/chromatic-logo.svg"
        width={32}
      />
    ),
    href: 'https://www.chromatic.com/',
    name: 'Chromatic',
    role: 'visual regression',
  },
];

const CODE_QUALITY: LogoEntry[] = [
  {
    component: (
      <img
        alt="ESLint"
        height={32}
        loading="lazy"
        src="/logos/eslint-logo.svg"
        width={36}
      />
    ),
    href: 'https://eslint.org/',
    name: 'ESLint',
    role: 'js linter',
  },
  {
    component: (
      <img
        alt="Prettier"
        height={32}
        loading="lazy"
        src="/logos/prettier-logo.svg"
        width={32}
      />
    ),
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
    component: (
      <img
        alt="Knip"
        height={32}
        loading="lazy"
        src="/logos/knip-logo.svg"
        width={32}
      />
    ),
    href: 'https://knip.dev/',
    name: 'Knip',
    role: 'dead code',
  },
];

type Group = {
  rows: Row[];
  title: string;
};

type Row = {
  cols: number;
  gridClass: string;
  items: LogoEntry[];
};

const GROUPS: Group[] = [
  {
    rows: [
      {cols: 4, gridClass: 'grid-cols-2 sm:grid-cols-4', items: FOUNDATION},
    ],
    title: 'Foundation',
  },
  {
    rows: [
      {
        cols: 3,
        gridClass: 'grid-cols-2 sm:grid-cols-3',
        items: TESTING.slice(0, 3),
      },
      {cols: 2, gridClass: 'grid-cols-2', items: TESTING.slice(3)},
    ],
    title: 'Testing',
  },
  {
    rows: [
      {cols: 4, gridClass: 'grid-cols-2 sm:grid-cols-4', items: CODE_QUALITY},
    ],
    title: 'Code quality',
  },
];

const MOBILE_COLS = 2;

const tileBorders = (index: number, total: number, cols: number) => {
  // A lone last tile on mobile spans the full row instead of leaving a gap.
  const isMobileOrphan = total % MOBILE_COLS !== 0 && index === total - 1;
  const mobileLastCol = isMobileOrphan || (index + 1) % MOBILE_COLS === 0;
  const desktopLastCol = (index + 1) % cols === 0;
  const mobileLastRow = index >= total - (total % MOBILE_COLS || MOBILE_COLS);
  const desktopLastRow = index >= total - (total % cols || cols);

  const classes = ['border-line-soft'];

  if (isMobileOrphan) classes.push('col-span-2 sm:col-span-1');

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
          {'Package management runs on '}
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
    title={
      <>
        A professional
        <br />
        frontend stack
      </>
    }
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
          {group.rows.map((row, rowIndex) => (
            <div
              key={row.items[0].name}
              className={`grid ${row.gridClass} ${rowIndex > 0 ? 'border-line-soft border-t' : ''}`}
            >
              {row.items.map((item, index) => (
                <Tile
                  key={item.name}
                  {...item}
                  cols={row.cols}
                  index={index}
                  total={row.items.length}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  </FxSection>
);

export default Stack;

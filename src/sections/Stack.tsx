import { Section } from '@/components/Section';
import ReactRouterLogo from '@/assets/logos/ReactRouterLogo';
import TailwindLogo from '@/assets/logos/TailwindLogo';
import TSLogo from '@/assets/logos/TSLogo';
import ZodLogo from '@/assets/logos/ZodLogo';
import ConformLogo from '@/assets/logos/ConformLogo';
import I18NextLogo from '@/assets/logos/I18NextLogo';
import VitestLogo from '@/assets/logos/VitestLogo';
import RTLLogo from '@/assets/logos/RTLLogo';
import PlaywrightLogo from '@/assets/logos/PlaywrightLogo';
import MSWLogo from '@/assets/logos/MSWLogo';
import StorybookLogo from '@/assets/logos/StorybookLogo';
import ChromaticLogo from '@/assets/logos/ChromaticLogo';
import ESLintLogo from '@/assets/logos/ESLintLogo';
import PrettierLogo from '@/assets/logos/PrettierLogo';
import StylelintLogo from '@/assets/logos/StylelintLogo';

type LogoEntry = {
  name: string;
  component: React.ReactNode;
};

const FOUNDATION: LogoEntry[] = [
  { name: 'React Router', component: <ReactRouterLogo height={36} /> },
  { name: 'Tailwind', component: <TailwindLogo height={36} /> },
  { name: 'TypeScript', component: <TSLogo height={36} /> },
  { name: 'Zod', component: <ZodLogo height={36} /> },
  { name: 'Conform', component: <ConformLogo height={36} /> },
  { name: 'i18next', component: <I18NextLogo height={36} /> },
];

const TESTING: LogoEntry[] = [
  { name: 'Vitest', component: <VitestLogo height={36} /> },
  { name: 'RTL', component: <RTLLogo height={36} /> },
  { name: 'Playwright', component: <PlaywrightLogo height={36} /> },
  { name: 'MSW', component: <MSWLogo height={36} /> },
  { name: 'Storybook', component: <StorybookLogo height={36} /> },
  { name: 'Chromatic', component: <ChromaticLogo height={36} /> },
];

const CODE_QUALITY: LogoEntry[] = [
  { name: 'ESLint', component: <ESLintLogo height={36} /> },
  { name: 'Prettier', component: <PrettierLogo height={36} /> },
  { name: 'Stylelint', component: <StylelintLogo height={36} /> },
];

function LogoCard({ name, component }: LogoEntry) {
  return (
    <div
      className="logo-card flex flex-col items-center justify-center gap-2 rounded-lg px-3 py-5"
      style={{
        backgroundColor: 'var(--color-bg-elev)',
        border: '1px solid var(--color-border)',
        transition: 'border-color 0.15s ease',
        minHeight: '5.5rem',
      }}
    >
      <div className="flex items-center justify-center" style={{ height: '2.5rem' }}>
        {component}
      </div>
      <span
        className="text-xs text-center leading-tight"
        style={{ color: 'var(--color-fg-dim)' }}
      >
        {name}
      </span>
    </div>
  );
}

type GroupProps = {
  label: string;
  items: LogoEntry[];
};

function LogoGroup({ label, items }: GroupProps) {
  return (
    <div className="space-y-3">
      <h3
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: 'var(--color-fg-dim)' }}
      >
        {label}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {items.map((item) => (
          <LogoCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <Section id="stack" title="The stack">
      <div className="space-y-8">
        <LogoGroup label="Foundation" items={FOUNDATION} />
        <LogoGroup label="Testing" items={TESTING} />
        <LogoGroup label="Code quality" items={CODE_QUALITY} />
      </div>
      <style>{`
        .logo-card:hover {
          border-color: var(--color-accent-soft) !important;
        }
      `}</style>
    </Section>
  );
}

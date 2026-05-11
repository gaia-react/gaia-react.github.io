import {CheckIcon} from '@/components/icons';

export type StackGroup = {items: StackItem[]; label: string};

export type StackItem = {kind: string; name: string};

export const STACK_GROUPS: StackGroup[] = [
  {
    items: [
      {kind: 'Foundation', name: 'React Router 7'},
      {kind: 'Language', name: 'TypeScript'},
      {kind: 'Styling', name: 'Tailwind CSS'},
      {kind: 'Forms', name: 'Conform'},
    ],
    label: 'Foundation',
  },
  {
    items: [
      {kind: 'Component tests', name: 'Storybook'},
      {kind: 'Unit tests', name: 'Vitest + RTL'},
      {kind: 'E2E tests', name: 'Playwright'},
      {kind: 'Mock API', name: 'MSW'},
    ],
    label: 'Testing',
  },
  {
    items: [
      {kind: 'Type safety', name: 'Strict Mode · Zod'},
      {kind: 'Discipline', name: 'ESLint + Stylelint'},
      {kind: 'Clean Code', name: 'Knip'},
      {kind: 'Package Management', name: 'PNPM'},
    ],
    label: 'Quality',
  },
];

type StackGridProperties = {
  groups?: StackGroup[];
};

const StackGrid = ({groups = STACK_GROUPS}: StackGridProperties) => (
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3" data-stagger={true}>
    {groups.map((group) => (
      <div
        key={group.label}
        className="bg-surface border-line-soft rounded-lg border px-5 pt-5 pb-3"
      >
        <div className="border-line-soft mb-1 border-b pb-3">
          <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
            {group.label}
          </span>
        </div>
        <ul className="divide-line-soft divide-y">
          {group.items.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-4 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="bg-secondary/12 text-secondary-soft inline-flex size-5 shrink-0 items-center justify-center rounded-sm">
                  <CheckIcon size={12} />
                </div>
                <span className="text-ink text-[0.95rem]">{item.name}</span>
              </div>
              <span className="text-muted font-mono text-[0.65rem] tracking-[0.14em] whitespace-nowrap uppercase">
                {item.kind}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default StackGrid;

import type {CSSProperties, ReactNode} from 'react';
import type {Release} from '../types';

const modules = import.meta.glob<{default: Release}>('../releases/*.ts', {
  eager: true,
});

const versionRank = (version: string): number =>
  version.split('.').reduce((rank, part) => rank * 1000 + Number(part), 0);

const RELEASES: Release[] = Object.values(modules)
  .map((module) => module.default)
  .toSorted((a, b) => versionRank(b.version) - versionRank(a.version));

// How many leading entries get the entrance animation. The page reveals on
// load (see useRevealOnLoad), never on scroll, so this is just a taste knob,
// not a fold boundary: above-the-fold cards are seen animating in, while any of
// these already below the fold (tall releases, short viewports) finish their
// fade off-screen. Unmarked cards render immediately. Safe to adjust freely.
const REVEAL_COUNT = 4;

const GROUP_FIELDS = [
  {field: 'added', label: 'New'},
  {field: 'improved', label: 'Improved'},
  {field: 'fixed', label: 'Fixed'},
] as const;

// Markdown-lite inline renderer: `code` -> <code>, [text](url) -> <a>.
const renderInline = (text: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  let buffer = '';
  let cursor = 0;
  let token = 0;

  const flush = () => {
    if (buffer) {
      nodes.push(buffer);
      buffer = '';
    }
  };

  while (cursor < text.length) {
    const char = text.charAt(cursor);
    const codeEnd = char === '`' ? text.indexOf('`', cursor + 1) : -1;
    const labelEnd = char === '[' ? text.indexOf('](', cursor + 1) : -1;
    const hrefEnd = labelEnd === -1 ? -1 : text.indexOf(')', labelEnd + 2);

    if (codeEnd >= 0) {
      flush();
      token += 1;
      nodes.push(
        <code
          key={`c${token}`}
          className="text-ink bg-surface rounded-sm px-1.5 font-mono text-[0.88em]"
        >
          {text.slice(cursor + 1, codeEnd)}
        </code>
      );
      cursor = codeEnd + 1;
    } else if (hrefEnd >= 0) {
      flush();
      token += 1;
      nodes.push(
        <a
          key={`a${token}`}
          className="text-accent hover:text-accent-2 underline underline-offset-2 transition-colors duration-150"
          href={text.slice(labelEnd + 2, hrefEnd)}
          rel="noreferrer"
          target="_blank"
        >
          {text.slice(cursor + 1, labelEnd)}
        </a>
      );
      cursor = hrefEnd + 1;
    } else {
      buffer += char;
      cursor += 1;
    }
  }

  flush();

  return nodes;
};

const ReleaseCard = ({
  delay,
  isRevealed,
  release,
}: {
  delay: number;
  isRevealed: boolean;
  release: Release;
}) => (
  <li
    className="border-line-soft m-0 grid items-start gap-3 border-t py-10 lg:grid-cols-[1fr_2fr] lg:gap-12"
    data-reveal={isRevealed || undefined}
    id={`v${release.version.replaceAll('.', '-')}`}
    style={
      isRevealed ?
        ({'--reveal-delay': `${delay}ms`} as CSSProperties)
      : undefined
    }
  >
    <p className="text-muted m-0 font-mono text-[0.85rem] tracking-[0.14em] uppercase lg:pt-1">
      <span className="text-secondary-soft">{`v${release.version}`}</span>
      <span aria-hidden={true} className="mx-2 opacity-40">
        ·
      </span>
      <span>{release.date}</span>
    </p>
    <div>
      {release.headline ?
        <h2 className="text-ink m-0 mb-3 text-[1.15rem] leading-snug font-medium tracking-[-0.01em]">
          {renderInline(release.headline)}
        </h2>
      : null}
      {release.summary ?
        <p className="text-ink-dim m-0 max-w-[68ch] text-[0.98rem] leading-[1.7]">
          {renderInline(release.summary)}
        </p>
      : <div className="space-y-5">
          {GROUP_FIELDS.map(({field, label}) => {
            const items = release[field];

            if (!items?.length) {
              return null;
            }

            return (
              <div key={field}>
                <p className="text-muted mb-2 font-mono text-[0.7rem] tracking-[0.16em] uppercase">
                  {label}
                </p>
                <ul className="m-0 list-none space-y-2 p-0">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="text-ink-dim flex max-w-[68ch] gap-2.5 text-[0.98rem] leading-[1.7]"
                    >
                      <span
                        aria-hidden={true}
                        className="text-muted select-none"
                      >
                        ·
                      </span>
                      <span>{renderInline(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      }
    </div>
  </li>
);

const Changelog = () => (
  <div className="px-4 sm:px-8">
    <header className="mx-auto max-w-275 pt-14 pb-4 sm:pt-24">
      <div className="mb-4 inline-flex items-center gap-2" data-reveal={true}>
        <span
          aria-hidden={true}
          className="bg-accent-soft size-1.5 rounded-full"
        />
        <span className="text-accent-soft font-mono text-[0.7rem] tracking-[0.18em] uppercase">
          Changelog
        </span>
      </div>
      <h1 className="text-ink m-0 mb-6 text-[clamp(2.5rem,5.4vw,4.5rem)] leading-[1.1] tracking-tight">
        Release history
      </h1>
      <p
        className="text-ink-dim max-w-[60ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.55]"
        data-reveal={true}
        style={{'--reveal-delay': '180ms'} as CSSProperties}
      >
        New features, improvements, and fixes.
      </p>
    </header>

    <main className="mx-auto max-w-275 pb-24">
      <section className="pt-6" id="releases">
        <ul className="m-0 list-none p-0">
          {RELEASES.map((release, index) => (
            <ReleaseCard
              key={release.version}
              delay={240 + index * 90}
              isRevealed={index < REVEAL_COUNT}
              release={release}
            />
          ))}
        </ul>
      </section>

      <section className="border-line-soft mt-24 border-t pt-10" id="follow">
        <h2 className="font-display text-ink m-0 mb-3 text-2xl/tight font-medium tracking-[-0.01em]">
          Follow new releases
        </h2>
        <p className="text-ink-dim m-0 mb-6 max-w-[60ch] text-[1rem] leading-[1.65]">
          Each version tags on GitHub with notes. Watch the repo or follow
          Releases for the next ship.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="border-line text-ink hover:border-accent inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[0.9rem] no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia/releases"
            rel="noreferrer"
            target="_blank"
          >
            GitHub Releases →
          </a>
          <a
            className="border-line text-ink-dim hover:border-accent hover:text-ink inline-flex items-center gap-2 rounded-sm border px-4 py-2 text-[0.9rem] no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia/blob/main/CHANGELOG.md"
            rel="noreferrer"
            target="_blank"
          >
            Full technical changelog →
          </a>
        </div>
      </section>
    </main>
  </div>
);

export default Changelog;

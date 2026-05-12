import {useEffect, useRef, useState, useSyncExternalStore} from 'react';
import {twJoin} from 'tailwind-merge';
import gaiaLogo from '../assets/gaia-logo.svg';

type NavItem = {external?: boolean; href: string; label: string};

const NAV_DESKTOP: NavItem[] = [
  {href: '/why/', label: 'Why GAIA'},
  {href: '/features/', label: 'Features'},
  {href: '/about/', label: 'About'},
  {external: true, href: 'https://docs.gaiareact.com/', label: 'Docs'},
];

const isActivePath = (pathname: string, href: string) =>
  href.startsWith('/') && pathname.startsWith(href);

const noopUnsubscribe = () => {};
const subscribePathname = () => noopUnsubscribe;
const getPathname = () => window.location.pathname;
const getServerPathname = () => '/';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useSyncExternalStore(
    subscribePathname,
    getPathname,
    getServerPathname
  );
  const isOnGetStarted = pathname.startsWith('/get-started');
  const headerReference = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (event: MouseEvent) => {
      if (
        headerReference.current &&
        !headerReference.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header
      ref={headerReference}
      className="border-line sticky top-0 z-50 border-b bg-[rgba(20,20,19,0.85)] backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 items-center justify-between gap-8 px-4 sm:px-8">
        <div className="flex items-center gap-6">
          <a
            aria-label="GAIA, home"
            className="flex shrink-0 items-center"
            href="/"
          >
            <img alt="GAIA" className="h-6 w-auto" src={gaiaLogo} />
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 md:flex"
          >
            {NAV_DESKTOP.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <a
                  key={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={twJoin(
                    'font-body rounded-sm px-2.5 py-1.5 text-[0.8125rem] tracking-[0.02em] whitespace-nowrap no-underline transition-colors duration-150',
                    active ? 'text-accent' : 'text-ink-dim hover:text-accent'
                  )}
                  href={item.href}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  target={item.external ? '_blank' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="text-ink-dim hover:text-ink flex items-center gap-1.5 rounded-sm px-2.5 py-1.5 text-[0.8125rem] tracking-[0.02em] whitespace-nowrap no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="15"
              viewBox="0 0 24 24"
              width="15"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          {!isOnGetStarted && (
            <a
              className="bg-accent text-canvas hover:bg-accent-2 rounded-sm px-3.5 py-1.75 text-[0.8125rem] font-semibold tracking-[0.02em] whitespace-nowrap transition-colors duration-150"
              href="/get-started/"
            >
              Get Started
            </a>
          )}
        </div>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="text-ink-dim flex cursor-pointer border-none bg-transparent p-2 leading-none md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ?
            <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          : <svg fill="currentColor" height="20" viewBox="0 0 20 20" width="20">
              <path
                clipRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                fillRule="evenodd"
              />
            </svg>
          }
        </button>
      </div>

      {menuOpen && (
        <div className="gaia-menu-in bg-surface-raised border-line absolute inset-x-0 top-full flex flex-col gap-1 border-b p-4 sm:px-8">
          {NAV_DESKTOP.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <a
                key={item.href}
                aria-current={active ? 'page' : undefined}
                className={twJoin(
                  'font-body border-line border-b px-0 py-2.5 text-base no-underline transition-colors duration-150',
                  active ? 'text-accent' : 'text-ink-dim hover:text-accent'
                )}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                rel={item.external ? 'noopener noreferrer' : undefined}
                target={item.external ? '_blank' : undefined}
              >
                {item.label}
              </a>
            );
          })}
          {!isOnGetStarted && (
            <a
              className="bg-accent text-canvas hover:bg-accent-2 mt-3 rounded-sm px-5 py-3 text-center font-semibold transition-colors duration-150"
              href="/get-started/"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          )}
        </div>
      )}
    </header>
  );
};

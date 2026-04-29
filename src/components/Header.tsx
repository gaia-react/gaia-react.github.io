import {useEffect, useRef, useState} from 'react';
import gaiaLogo from '../assets/gaia-logo.svg';

const NAV_DESKTOP = [
  {href: '/features/', label: 'Features'},
  {href: '/docs/', label: 'Docs'},
  {href: '/roadmap/', label: 'Roadmap'},
  {href: '/about/', label: 'About'},
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-8">
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
          {NAV_DESKTOP.map((item) => (
            <a
              key={item.href}
              className="text-ink-dim font-body hover:text-accent rounded-sm px-2.5 py-1.5 text-[0.8125rem] tracking-[0.02em] whitespace-nowrap no-underline transition-colors duration-150"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="bg-accent text-canvas hover:bg-accent-2 ml-2 rounded-sm px-3.5 py-1.75 text-[0.8125rem] font-semibold tracking-[0.02em] whitespace-nowrap transition-colors duration-150"
            href="/get-started/"
          >
            Get Started
          </a>
        </nav>

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
        <div className="bg-surface-raised border-line absolute inset-x-0 top-full flex flex-col gap-1 border-b px-8 py-4">
          {NAV_DESKTOP.map((item) => (
            <a
              key={item.href}
              className="text-ink-dim font-body border-line hover:text-accent border-b px-0 py-2.5 text-base no-underline transition-colors duration-150"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="bg-accent text-canvas hover:bg-accent-2 mt-3 rounded-sm px-5 py-3 text-center font-semibold transition-colors duration-150"
            href="/get-started/"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

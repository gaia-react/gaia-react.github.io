import { useEffect, useRef, useState } from "react";
import gaiaLogo from "../assets/gaia-logo.svg";

const NAV_DESKTOP = [
  { label: "Features", href: "/features/" },
  { label: "Docs", href: "/docs/" },
  { label: "Roadmap", href: "/roadmap/" },
  { label: "About", href: "/about/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[rgba(20,20,19,0.85)] backdrop-blur-[12px] border-b border-border"
    >
      <div className="max-w-[72rem] mx-auto px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="/"
          aria-label="GAIA, home"
          className="flex items-center shrink-0"
        >
          <img
            src={gaiaLogo}
            alt="GAIA"
            className="h-6 w-auto"
          />
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-[0.125rem]"
        >
          {NAV_DESKTOP.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-fg-dim no-underline text-[0.8125rem] font-body tracking-[0.02em] py-[0.375rem] px-[0.625rem] rounded transition-colors duration-150 whitespace-nowrap hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/get-started/"
            className="ml-2 bg-accent text-bg font-semibold text-[0.8125rem] tracking-[0.02em] py-[0.4375rem] px-[0.875rem] rounded hover:bg-accent-2 transition-colors duration-150 whitespace-nowrap"
          >
            Get Started
          </a>
        </nav>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex md:hidden bg-transparent border-none text-fg-dim cursor-pointer p-2 leading-none"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-elev-2 border-b border-border py-4 px-8 flex flex-col gap-1">
          {NAV_DESKTOP.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-fg-dim no-underline text-base font-body py-[0.625rem] px-0 border-b border-border transition-colors duration-150 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/get-started/"
            onClick={() => setMenuOpen(false)}
            className="mt-3 px-5 py-3 bg-accent text-bg font-semibold rounded text-center hover:bg-accent-2 transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}

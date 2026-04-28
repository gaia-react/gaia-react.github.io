import { useEffect, useRef, useState } from "react";
import gaiaLogo from "../assets/gaia-logo.svg";

const GITHUB_URL = "https://github.com/gaia-react/gaia";

const NAV_DESKTOP = [
  { label: "Docs", href: "/docs/" },
  { label: "Roadmap", href: "/roadmap/" },
  { label: "Teams", href: "/teams/" },
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
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "rgba(20, 20, 19, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "0 2rem",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        <a
          href="/"
          aria-label="GAIA, home"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <img
            src={gaiaLogo}
            alt="GAIA"
            style={{ height: "1.5rem", width: "auto" }}
          />
        </a>

        <nav
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.125rem",
          }}
          className="desktop-nav"
        >
          {NAV_DESKTOP.map((item) => (
            <a key={item.href} href={item.href} style={navLinkStyle} className="nav-link">
              {item.label}
            </a>
          ))}
          <span aria-hidden="true" style={pipeStyle} />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...navLinkStyle, display: "flex", alignItems: "center", gap: "0.375rem" }}
            className="nav-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </nav>

        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--color-fg-dim)",
            cursor: "pointer",
            padding: "0.5rem",
            lineHeight: 1,
          }}
          className="hamburger-btn"
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
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "var(--color-bg-elev-2)",
            borderBottom: "1px solid var(--color-border)",
            padding: "1rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
          className="mobile-menu"
        >
          {NAV_DESKTOP.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={mobileNavLinkStyle}
            >
              {item.label}
            </a>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ ...mobileNavLinkStyle, display: "flex", alignItems: "center", gap: "0.375rem" }}
            className="mobile-nav-link"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 768px) {
          .mobile-menu { display: none !important; }
        }
        .nav-link:hover { color: var(--color-accent) !important; }
        .mobile-nav-link:hover { color: var(--color-accent) !important; }
      `}</style>
    </header>
  );
}

const pipeStyle: React.CSSProperties = {
  width: "1px",
  height: "1.25rem",
  backgroundColor: "var(--color-border)",
  margin: "0 0.5rem",
  flexShrink: 0,
};

const navLinkStyle: React.CSSProperties = {
  color: "var(--color-fg-dim)",
  textDecoration: "none",
  fontSize: "0.8125rem",
  fontFamily: "var(--font-body)",
  letterSpacing: "0.02em",
  padding: "0.375rem 0.625rem",
  borderRadius: "0.25rem",
  transition: "color 0.15s ease",
  whiteSpace: "nowrap",
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: "var(--color-fg-dim)",
  textDecoration: "none",
  fontSize: "1rem",
  fontFamily: "var(--font-body)",
  padding: "0.625rem 0",
  borderBottom: "1px solid var(--color-border)",
  transition: "color 0.15s ease",
};

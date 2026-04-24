import { useEffect, useRef, useState } from "react";
import gaiaLogo from "../assets/gaia-logo.svg";

const NAV_MARKETING = [
  { label: "Why", href: "#why" },
  { label: "Stack", href: "#stack" },
  { label: "Wiki", href: "#wiki" },
  { label: "Principles", href: "#claude-md" },
];

const NAV_DOCS = [
  { label: "Quick start", href: "#quick-start" },
  { label: "Commands", href: "#commands" },
  { label: "Rules", href: "#rules" },
  { label: "Agents", href: "#agents" },
  { label: "Skills", href: "#skills" },
  { label: "Hooks", href: "#hooks" },
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
          href="#hero"
          aria-label="GAIA, back to top"
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
          {NAV_MARKETING.map((item) => (
            <a key={item.href} href={item.href} style={navLinkStyle}>
              {item.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            style={{
              width: "1px",
              height: "1.25rem",
              backgroundColor: "var(--color-border)",
              margin: "0 0.5rem",
              flexShrink: 0,
            }}
          />
          {NAV_DOCS.map((item) => (
            <a key={item.href} href={item.href} style={navLinkStyle}>
              {item.label}
            </a>
          ))}
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
          {[...NAV_MARKETING, ...NAV_DOCS].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={mobileNavLinkStyle}
            >
              {item.label}
            </a>
          ))}
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

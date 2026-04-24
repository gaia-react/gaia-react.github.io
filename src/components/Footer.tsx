export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
        color: "var(--color-fg-dim)",
        fontSize: "0.875rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <span>© {year} GAIA</span>
      <nav
        style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
        aria-label="Footer navigation"
      >
        <a
          href="https://github.com/gaia-react/react-router"
          target="_blank"
          rel="noopener noreferrer"
          style={footerLinkStyle}
        >
          GitHub
        </a>
        <a
          href="https://github.com/gaia-react/react-router/blob/main/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          style={footerLinkStyle}
        >
          MIT License
        </a>
      </nav>
    </footer>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: "var(--color-fg-dim)",
  textDecoration: "none",
  transition: "color 0.15s ease",
};

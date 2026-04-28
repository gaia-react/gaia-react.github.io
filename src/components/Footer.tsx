export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        color: "var(--color-fg-dim)",
        fontSize: "0.875rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <span>© {year} GAIA</span>
      <a
        href="https://github.com/gaia-react/gaia/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
        style={footerLinkStyle}
        className="footer-link"
      >
        MIT License
      </a>
      <style>{`
        .footer-link:hover { color: var(--color-accent) !important; }
      `}</style>
    </footer>
  );
}

const footerLinkStyle: React.CSSProperties = {
  color: "var(--color-fg-dim)",
  textDecoration: "none",
  transition: "color 0.15s ease",
};

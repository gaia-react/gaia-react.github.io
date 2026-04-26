const LINKEDIN_URL = "https://linkedin.com/in/stevensacks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "1.5rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "1rem",
        color: "var(--color-fg-dim)",
        fontSize: "0.875rem",
        fontFamily: "var(--font-body)",
      }}
    >
      <span>© {year} GAIA</span>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...footerLinkStyle, display: "flex", alignItems: "center", gap: "0.375rem" }}
        className="footer-link"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
        Steven Sacks
      </a>
      <a
        href="https://github.com/gaia-react/react-router/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...footerLinkStyle, justifySelf: "end" }}
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

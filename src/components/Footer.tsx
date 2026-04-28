export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6 px-8 flex items-center justify-between gap-4 text-fg-dim text-sm font-body">
      <span>© {year} GAIA</span>
      <a
        href="https://github.com/gaia-react/gaia/blob/main/LICENSE"
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg-dim no-underline transition-colors duration-150 hover:text-accent"
      >
        MIT License
      </a>
    </footer>
  );
}

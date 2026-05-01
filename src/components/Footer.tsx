export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line text-ink-dim font-body flex items-center justify-between gap-4 border-t px-4 py-6 text-sm sm:px-8">
      <span>{`© ${year} GAIA`}</span>
      <a
        className="text-ink-dim hover:text-accent no-underline transition-colors duration-150"
        href="https://github.com/gaia-react/gaia/blob/main/LICENSE"
        rel="noopener noreferrer"
        target="_blank"
      >
        MIT License
      </a>
    </footer>
  );
};

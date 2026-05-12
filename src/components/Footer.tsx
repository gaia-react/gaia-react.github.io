type FooterLink = {external?: boolean; href: string; label: string};

const FOOTER_NAV: FooterLink[] = [
  {href: '/why/', label: 'Why GAIA'},
  {href: '/features/', label: 'Features'},
  {href: 'https://docs.gaiareact.com/', label: 'Docs'},
  {href: '/about/', label: 'About'},
  {href: '/consulting/', label: 'Consulting'},
  {external: true, href: 'https://github.com/gaia-react/gaia', label: 'GitHub'},
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line text-ink-dim font-body border-t px-4 py-8 text-sm sm:px-8">
      <div className="flex flex-col gap-5">
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-5 gap-y-2 text-[0.8125rem] tracking-[0.02em]"
        >
          {FOOTER_NAV.map((item) => (
            <a
              key={item.href}
              className="text-ink-dim hover:text-accent no-underline transition-colors duration-150"
              href={item.href}
              rel={item.external ? 'noopener noreferrer' : undefined}
              target={item.external ? '_blank' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-4">
          <span>{`© ${year} GAIA`}</span>
          <a
            className="text-ink-dim hover:text-accent no-underline transition-colors duration-150"
            href="https://github.com/gaia-react/gaia/blob/main/LICENSE"
            rel="noopener noreferrer"
            target="_blank"
          >
            MIT License
          </a>
        </div>
      </div>
    </footer>
  );
};

import gaiaLogo from '../assets/gaia-logo.svg';

type FooterLink = {external?: boolean; href: string; label: string};

const FOOTER_NAV: FooterLink[] = [
  {href: '/why/', label: 'Why GAIA'},
  {href: '/features/', label: 'Features'},
  {href: '/about/', label: 'About'},
  {href: '/consulting/', label: 'Consulting'},
  {external: true, href: 'https://docs.gaiareact.com/', label: 'Docs'},
  {external: true, href: 'https://github.com/gaia-react/gaia', label: 'GitHub'},
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line text-ink-dim font-body border-t px-4 py-8 text-sm sm:px-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-8">
        <a aria-label="GAIA, home" className="shrink-0" href="/">
          <img alt="GAIA" className="h-14 w-auto" src={gaiaLogo} />
        </a>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <nav
            aria-label="Footer"
            className="grid grid-cols-3 gap-x-5 gap-y-2 text-center text-[0.8125rem] tracking-[0.02em] sm:flex sm:flex-wrap sm:justify-end sm:text-left"
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
          <div className="flex items-center gap-2 text-[0.8125rem] tracking-[0.02em]">
            <span>{`© ${year} GAIA`}</span>
            <span aria-hidden="true" className="text-muted">
              ·
            </span>
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
      </div>
    </footer>
  );
};

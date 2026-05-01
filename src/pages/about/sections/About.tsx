import {Section} from '@/components/Section';

type WorkItem = {
  company: string;
  note: string;
  period: string;
  role: string;
};

const SELECTED_WORK: WorkItem[] = [
  {
    company: 'Trek10',
    note: 'Led six engineers rebuilding a financial services platform for one of the world’s largest management consulting firms. Architected a WYSIWYG JSON engine that lets non-engineers configure complex dashboards, and modernized the codebase from React 15 to React 19.',
    period: '2024–2026',
    role: 'Principal Frontend Engineer',
  },
  {
    company: 'American Express',
    note: 'Built and shipped the internal dining concierge platform used by Amex teams worldwide. Led the mobile-first rebuild of Pocket Concierge for the Japan market.',
    period: '2020–2023',
    role: 'Lead React Engineer',
  },
  {
    company: 'PlayBrain',
    note: 'Architected a custom multilingual publishing platform and a real-time esports tournament system on a serverless AWS backend. Hired and led the engineering team.',
    period: '2016–2017',
    role: 'Director of Engineering',
  },
  {
    company: 'Plug DJ',
    note: 'Social music platform that grew to 6M registered users and 1M monthly actives, supporting 60K simultaneous connections. Raised $2.5M from Javelin Venture Partners. Acquired.',
    period: '2012–2015',
    role: 'Founder',
  },
];

const GitHubIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="15"
    viewBox="0 0 24 24"
    width="15"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="15"
    viewBox="0 0 24 24"
    width="15"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="15"
    viewBox="0 0 24 24"
    width="15"
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const LINKS = [
  {href: 'https://github.com/stevensacks', icon: GitHubIcon, label: 'GitHub'},
  {
    href: 'https://www.linkedin.com/in/stevensacks/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {href: 'mailto:steven@gaiareact.com', icon: EmailIcon, label: 'Email'},
];

const About = () => (
  <>
    {/* Hero */}
    <section className="pt-20 pb-6">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-8">
        <img
          alt="Portrait of Steven Sacks"
          className="border-line mx-auto mb-8 size-36 rounded-full border object-cover shadow-[0_0_0_6px_var(--color-surface)]"
          height={144}
          src="/steven.jpg"
          width={144}
        />
        <h1 className="font-display text-ink mb-6 text-[clamp(2.5rem,6vw,4rem)] leading-[1.1] font-light tracking-[-0.03em]">
          Steven Sacks
        </h1>
        <p className="text-ink-dim mx-auto mb-7 max-w-152 text-[clamp(1rem,2vw,1.1875rem)] leading-[1.65]">
          I build production software with AI agents.
        </p>
        <ul className="m-0 flex list-none flex-wrap justify-center gap-6 p-0">
          {LINKS.map((link) => {
            const external = link.href.startsWith('http');

            return (
              <li key={link.href}>
                <a
                  className="text-ink-dim font-body hover:text-accent inline-flex items-center gap-1.75 text-[0.9375rem] tracking-[0.02em] no-underline transition-colors duration-150"
                  href={link.href}
                  rel={external ? 'noopener noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  {link.icon}
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>

    {/* Throughline */}
    <Section id="background" paddingBottom="3rem" paddingTop="3rem">
      <div className="flex flex-col gap-5">
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          I’ve been building for the web since Flash was king. In the 2000s I
          authored the GAIA Flash Framework, the most popular open source Flash
          framework of its era, used to build over 100,000 websites and adopted
          by every major digital agency. It replaced the chaos of Flash
          development with opinionated structure, automated project setup, and a
          library of powerful, easy-to-use solutions for the problems every
          Flash developer ran into.
        </p>
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          Now I’m doing it again with AI agents. GAIA React is the spiritual
          successor to GAIA Flash: a comprehensive starting point for
          professional React projects with Claude Code integration built in.
          Same philosophy, new substrate.
        </p>
      </div>
    </Section>

    {/* Selected work */}
    <Section
      id="work"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="Selected work"
    >
      <ul className="m-0 flex list-none flex-col gap-7 p-0">
        {SELECTED_WORK.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <div className="mb-[0.4rem] flex flex-wrap items-baseline gap-x-3.5 gap-y-2">
              <span className="font-body text-muted text-[0.8125rem] tracking-[0.04em] uppercase">
                {item.period}
              </span>
              <span className="font-display text-ink text-xl/tight font-normal tracking-[-0.01em]">
                {item.role}, <span className="text-accent">{item.company}</span>
              </span>
            </div>
            <p className="text-ink-dim text-base leading-[1.7]">{item.note}</p>
          </li>
        ))}
      </ul>
    </Section>

    {/* Why this, now */}
    <Section
      id="why-now"
      paddingBottom="3rem"
      paddingTop="3rem"
      title="Why this, now"
    >
      <div className="flex flex-col gap-5">
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          The AI tooling landscape today looks like Flash development before the
          framework era: powerful tools, no shared structure, every team
          reinventing the same patterns.
        </p>
        <p className="text-ink-dim text-[1.0625rem] leading-[1.7]">
          I’ve been here before. The fix the first time was structure: a
          framework that codified the patterns worth keeping and made the rest
          unnecessary. GAIA React is that, applied to Claude Code. The goal is
          the same one I’ve been chasing for twenty years: one person shipping
          the work of a team, without the work falling apart six months later.
        </p>
      </div>
    </Section>
  </>
);

export default About;

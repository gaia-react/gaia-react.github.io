import type React from 'react';

type WorkItem = {
  company: string;
  note: string;
  period: string;
  role: string;
};

const SELECTED_WORK: WorkItem[] = [
  {
    company: 'Trek10',
    note: 'Led six engineers rebuilding a financial services platform for a top-tier management consulting client. Built a JSON-driven dashboard engine for non-engineers and modernized the codebase from React 15 to React 19.',
    period: '2024–2025',
    role: 'Principal Frontend Engineer',
  },
  {
    company: 'American Express',
    note: 'Built the internal dining concierge platform used by Amex teams worldwide. Led the mobile rebuild of Pocket Concierge for Japan.',
    period: '2020–2023',
    role: 'Lead React Engineer',
  },
  {
    company: 'PlayBrain',
    note: 'Architected a serverless multilingual publishing platform and a real-time esports tournament system. Hired and led the engineering team.',
    period: '2016–2017',
    role: 'Director of Engineering',
  },
  {
    company: 'Plug DJ',
    note: 'Social music platform. 6M registered users, 1M monthly actives, 60K simultaneous connections. Raised $2.5M from Javelin Venture Partners. Acquired.',
    period: '2012–2015',
    role: 'Founder',
  },
];

const ERA_THEN = [
  'Flash was capable, fast, and everywhere. Every project re-solved the same problems. Setup. State. Loading. Routing. Deep-linking. Every team’s stack was bespoke and brittle.',
  'The bottleneck was never capability. It was the absence of shared discipline.',
  'GAIA Flash codified the patterns worth keeping and made the rest unnecessary.',
];

const ERA_NOW = [
  'Claude is capable, fast, and everywhere. Every team re-solves the same problems. Prompt drift. Convention chaos. Tests skipped. Vibe-coded work that breaks in week two.',
  'The bottleneck still isn’t capability. It’s the absence of discipline around Claude.',
  'GAIA React codifies the patterns worth keeping. The AI has to follow them.',
];

const CLOSING = [
  'The AI tooling landscape today looks like Flash before frameworks. Capable tools. No shared structure. Every team reinventing the same patterns.',
  'The fix the first time was structure. A framework that codified what to keep and made the rest unnecessary.',
  'GAIA is that fix, applied to Claude Code. The goal is the same one I’ve been chasing for twenty years. One person shipping the work of a team.',
];

const GitHubIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="14"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="14"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height="14"
    viewBox="0 0 24 24"
    width="14"
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const SOCIAL_LINKS = [
  {href: 'https://github.com/stevensacks', icon: GitHubIcon, label: 'GitHub'},
  {
    href: 'https://www.linkedin.com/in/stevensacks/',
    icon: LinkedInIcon,
    label: 'LinkedIn',
  },
  {href: 'mailto:steven@gaiareact.com', icon: EmailIcon, label: 'Email'},
];

const Orbs = () => (
  <>
    <div
      aria-hidden={true}
      className="gaia-drift-orb-a pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(217,119,87,0.42) 0%, rgba(217,119,87,0.22) 30%, rgba(217,119,87,0.08) 58%, rgba(217,119,87,0) 78%)',
        height: 720,
        left: -260,
        opacity: 0.9,
        top: -240,
        width: 720,
      }}
    />
    <div
      aria-hidden={true}
      className="gaia-drift-orb-b pointer-events-none absolute z-0 rounded-full"
      style={{
        background:
          'radial-gradient(circle at center, rgba(91,138,138,0.32) 0%, rgba(91,138,138,0.18) 32%, rgba(91,138,138,0.06) 60%, rgba(91,138,138,0) 80%)',
        bottom: -200,
        height: 540,
        opacity: 0.8,
        right: -180,
        width: 540,
      }}
    />
  </>
);

const About = () => (
  <>
    {/* Lede / hero */}
    <section className="relative overflow-x-clip px-4 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      <Orbs />
      <div className="relative z-10 mx-auto max-w-4xl">
        <div
          className="text-accent-soft mb-8 inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase"
          data-reveal={true}
        >
          <span aria-hidden={true} className="bg-accent-soft size-1.5" />
          About
        </div>

        <h1
          className="font-display text-ink mb-12 max-w-[20ch] text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[1.05] font-light tracking-[-0.03em]"
          data-reveal={true}
          style={{'--reveal-delay': '80ms'} as React.CSSProperties}
        >
          I built the framework Flash needed in 2008.{' '}
          <em className="text-accent-soft font-light italic">
            I’m building the one Claude needs now.
          </em>
        </h1>

        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-5"
          data-reveal={true}
          style={{'--reveal-delay': '220ms'} as React.CSSProperties}
        >
          <div className="flex items-center gap-4">
            <img
              alt="Portrait of Steven Sacks"
              className="border-line size-12 rounded-full border object-cover"
              height={48}
              src="/steven.jpg"
              width={48}
            />
            <div className="leading-tight">
              <div className="text-muted font-mono text-[0.65rem] tracking-[0.2em] uppercase">
                Built by
              </div>
              <div className="text-ink font-body text-[0.95rem]">
                Steven Sacks
              </div>
            </div>
          </div>

          <ul className="m-0 flex list-none flex-wrap items-center gap-x-6 gap-y-3 p-0">
            {SOCIAL_LINKS.map((link) => {
              const external = link.href.startsWith('http');

              return (
                <li key={link.href}>
                  <a
                    className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.18em] uppercase no-underline transition-colors duration-150"
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
      </div>
    </section>

    {/* The pattern: Then / Now */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal={true}>
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-muted font-mono text-[0.7rem] tracking-[0.22em] uppercase">
                Then
              </span>
              <span
                aria-hidden={true}
                className="bg-line h-px flex-1 translate-y-[-2px]"
              />
              <span className="text-muted font-mono text-[0.7rem] tracking-[0.18em]">
                2008
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {ERA_THEN.map((line) => (
                <p
                  key={line}
                  className="text-ink-dim text-[1.0625rem] leading-[1.7]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div
            data-reveal={true}
            style={{'--reveal-delay': '120ms'} as React.CSSProperties}
          >
            <div className="mb-6 flex items-baseline gap-3">
              <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.22em] uppercase">
                Now
              </span>
              <span
                aria-hidden={true}
                className="bg-secondary/40 h-px flex-1 translate-y-[-2px]"
              />
              <span className="text-secondary-soft font-mono text-[0.7rem] tracking-[0.18em]">
                2026
              </span>
            </div>
            <div className="flex flex-col gap-4">
              {ERA_NOW.map((line) => (
                <p
                  key={line}
                  className="text-ink-dim text-[1.0625rem] leading-[1.7]"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* The throughline number */}
    <section className="border-line-soft border-t px-4 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl text-center" data-reveal={true}>
        <div
          className="font-display text-ink text-[clamp(4rem,12vw,8.5rem)] leading-none font-light tracking-[-0.04em]"
          style={{'--reveal-delay': '60ms'} as React.CSSProperties}
        >
          100,000<span className="text-accent-soft italic">+</span>
        </div>
        <div className="text-muted mt-6 font-mono text-[0.75rem] tracking-[0.24em] uppercase">
          Sites shipped on GAIA Flash
        </div>
      </div>
    </section>

    {/* Selected work */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div
          className="text-muted mb-12 font-mono text-[0.7rem] tracking-[0.22em] uppercase"
          data-reveal={true}
        >
          Selected work
        </div>
        <ul className="m-0 flex list-none flex-col gap-10 p-0" data-stagger="">
          {SELECTED_WORK.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="grid gap-3 sm:grid-cols-[7rem_1fr] sm:gap-8"
            >
              <div className="text-muted font-mono text-[0.75rem] tracking-[0.12em] sm:pt-1.5">
                {item.period}
              </div>
              <div>
                <h3 className="font-display text-ink mb-2 text-[1.35rem] leading-tight font-normal tracking-[-0.01em]">
                  {item.role},{' '}
                  <span className="text-accent">{item.company}</span>
                </h3>
                <p className="text-ink-dim text-[1rem] leading-[1.7]">
                  {item.note}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Closing: why this, now */}
    <section className="border-line-soft border-t px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div
          className="text-accent-soft mb-10 font-mono text-[0.7rem] tracking-[0.22em] uppercase"
          data-reveal={true}
        >
          Why this, now
        </div>
        <div className="flex flex-col gap-6">
          {CLOSING.map((line, index) => {
            const isLast = index === CLOSING.length - 1;
            const className =
              isLast ?
                'font-display text-ink text-[1.3rem] leading-normal font-light tracking-[-0.01em]'
              : 'text-ink-dim text-[1.0625rem] leading-[1.75]';

            return (
              <p
                key={line}
                className={className}
                data-reveal={true}
                style={
                  {'--reveal-delay': `${index * 80}ms`} as React.CSSProperties
                }
              >
                {line}
              </p>
            );
          })}
        </div>

        <div
          className="border-line-soft mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t pt-8"
          data-reveal={true}
          style={{'--reveal-delay': '300ms'} as React.CSSProperties}
        >
          <a
            className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
            href="/consulting/"
          >
            Work with me →
          </a>
          <a
            className="text-ink-dim hover:text-accent-soft inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase no-underline transition-colors duration-150"
            href="/get-started/"
          >
            Try GAIA →
          </a>
        </div>
      </div>
    </section>
  </>
);

export default About;

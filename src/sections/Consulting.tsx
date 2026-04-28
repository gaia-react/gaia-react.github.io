import type React from "react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Section } from "../components/Section";

const CAL_USERNAME = "stevensacks";
const CAL_NAMESPACE = "consulting";

type SkuTier = { price: string; description: string };

type SkuData = {
  title: string;
  tagline: string;
  price: string;
  priceDetail: string;
  deliverables: string[];
  calEvent: string;
  tiers?: SkuTier[];
  icon: React.ReactNode;
};

const iconBaseProps = {
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "var(--color-fg-dim)",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "block mb-[0.875rem]",
};

const AuditIcon = (
  <svg {...iconBaseProps}>
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <path d="M13.3 16.3 15 18" />
  </svg>
);

const MigrateIcon = (
  <svg {...iconBaseProps}>
    <path d="m16 3 4 4-4 4" />
    <path d="M20 7H4" />
    <path d="m8 21-4-4 4-4" />
    <path d="M4 17h16" />
  </svg>
);

const FoundationIcon = (
  <svg {...iconBaseProps}>
    <path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" />
    <rect x="14" y="2" width="8" height="8" rx="1" />
  </svg>
);

const RetainerIcon = (
  <svg {...iconBaseProps}>
    <path d="M16 14v2.2l1.6 1" />
    <path d="M16 2v4" />
    <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
    <path d="M3 10h5" />
    <path d="M8 2v4" />
    <circle cx="16" cy="16" r="6" />
  </svg>
);

const SKUS: SkuData[] = [
  {
    title: "Audit",
    icon: AuditIcon,
    tagline: "An outside opinion on your Claude workflow",
    price: "$5,000",
    priceDetail: "1 week · 100% async",
    calEvent: "audit-intro",
    deliverables: [
      "Deep review of one repo: CLAUDE.md, rules, hooks, prompt patterns, last 50 PRs",
      "15–25 page written report: what's working, what's costing you, top 5 fixes ranked by ROI",
      "20-minute recorded walkthrough video",
      "Optional 30-minute Q&A call within 2 weeks",
    ],
  },
  {
    title: "Foundation",
    icon: FoundationIcon,
    tagline: "Full GAIA setup for you",
    price: "$25,000",
    priceDetail: "2 weeks · 2–3 live sessions",
    calEvent: "foundation-intro",
    deliverables: [
      "GAIA installed and customized for your repo: rules, hooks, skills, wiki templates matched to your stack",
      "Integration with your existing tooling (Sentry, Linear, etc.)",
      "2–3 live sessions: kickoff, mid-foundation demo, handoff training (all recorded)",
      "Written runbook customized to you",
      "30 days of post-delivery email support",
    ],
  },
  {
    title: "Migrate",
    icon: MigrateIcon,
    tagline: "Take one messy repo from AI sprawl to GAIA-ready",
    price: "From $35,000",
    priceDetail: "3–4 weeks · async-first · scope-variable",
    calEvent: "migrate-intro",
    deliverables: [
      "Hands-on refactor of one repo: pattern consolidation, AI-debt cleanup, type tightening",
      "GAIA installed on the refactored codebase: rules, hooks, skills, wiki templates",
      "Commit-by-commit migration log so you can review the cleanup",
      "Written remediation report: what was changed, why, and what to watch for",
      "Optional 30-minute handoff call within 2 weeks of delivery",
    ],
  },
  {
    title: "Retainer",
    icon: RetainerIcon,
    tagline: "Ongoing oversight as your project grows",
    price: "From $5,000/mo",
    priceDetail: "Ongoing · async-first",
    calEvent: "retainer-intro",
    deliverables: [
      "Async review of critical PRs (5–10/month)",
      "Weekly 30-minute office hour (live)",
      "Slack/Discord access with 24-hour response time",
      "Quarterly written health-check summary",
      "First-look access to GAIA roadmap features",
      "10% discount on additional Foundation or Migration engagements",
    ],
    tiers: [
      { price: "$5k/mo", description: "8 hours, basic PR review" },
      { price: "$8k/mo", description: "15 hours, full critical-path PR review" },
    ],
  },
];

function CtaButton({
  href,
  calLink,
  children,
  fullWidth,
}: {
  href?: string;
  calLink?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  const baseClass = `${fullWidth ? "flex w-full justify-center" : "inline-flex"} items-center bg-accent text-bg no-underline font-body text-[0.9375rem] font-medium py-[0.6875rem] px-5 rounded-lg transition-colors duration-150 tracking-[0.01em] whitespace-nowrap hover:bg-accent-2`;

  if (calLink) {
    return (
      <button
        type="button"
        data-cal-namespace={CAL_NAMESPACE}
        data-cal-link={`${CAL_USERNAME}/${calLink}`}
        data-cal-config='{"layout":"month_view"}'
        className={`${baseClass} border-none cursor-pointer`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={baseClass}>
      {children}
    </a>
  );
}

function SkuCard({ sku }: { sku: SkuData }) {
  return (
    <div className="bg-bg-elev border border-border rounded-xl p-7 flex flex-col gap-5">
      {/* Title + tagline */}
      <div>
        {sku.icon}
        <h2 className="font-display font-light text-[1.75rem] text-fg mb-1.5 tracking-[-0.02em] leading-[1.15]">
          {sku.title}
        </h2>
        <p className="text-sm text-fg-dim leading-normal min-h-[calc(0.875rem*1.5*2)]">
          {sku.tagline}
        </p>
      </div>

      {/* Price */}
      <div>
        <p className="font-display font-light text-[2rem] text-fg tracking-[-0.02em] leading-[1.1] mb-1">
          {sku.price}
        </p>
        <p className="font-body text-[0.8125rem] text-fg-mute">
          {sku.priceDetail}
        </p>
      </div>

      {/* CTA — above the feature list */}
      <CtaButton calLink={sku.calEvent} fullWidth>
        Book free intro call →
      </CtaButton>

      {/* Divider */}
      <div aria-hidden="true" className="border-t border-border" />

      {/* Feature list */}
      <ul className="list-none p-0 m-0 flex flex-col gap-2.5 flex-1">
        {sku.deliverables.map((item) => (
          <li
            key={item}
            className="flex gap-2.5 text-sm text-fg-dim leading-[1.55]"
          >
            <span
              aria-hidden="true"
              className="text-accent shrink-0 font-semibold text-xs mt-[0.15rem]"
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Retainer tiers */}
      {sku.tiers && (
        <div className="border-t border-border pt-4">
          <p className="text-xs text-fg-mute uppercase tracking-[0.08em] mb-2 font-medium">
            Two tiers
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-1">
            {sku.tiers.map((tier) => (
              <li
                key={tier.price}
                className="text-[0.8125rem] text-fg-dim"
              >
                <strong className="text-fg">{tier.price}:</strong>{" "}
                {tier.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Consulting() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h1 className="font-display font-light text-[clamp(2.5rem,6vw,4rem)] text-fg mb-6 tracking-[-0.03em] leading-[1.1]">
            Work with the creator of GAIA
          </h1>
          <p className="text-[clamp(1rem,2vw,1.1875rem)] text-fg-dim leading-[1.65] max-w-152 mx-auto">
            I built the GAIA Flash Framework in the 2000s, which was used to build 100k+ sites and by
            every major digital agency worldwide. GAIA React carries the same
            automation philosophy into the AI-native era.
              <br/><br/>
              Now, I help teams and individuals adopt it.
          </p>
        </div>
      </section>

      {/* Skip to pricing — doubles as visual break between hero and pitch */}
      <div className="text-center px-8">
        <CtaButton href="#pricing">See engagement options ↓</CtaButton>
      </div>

      {/* Lead-in */}
      <Section id="intro">
        <div className="flex flex-col gap-5">
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Your team started using Claude Code. Now everyone's doing it differently:
            inconsistent patterns, ballooning token costs, and AI-generated problems
            that shouldn't exist, caught in code review, or worse, production.
          </p>
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Without guardrails, this compounds into technical debt and bugs
            that ship. I help teams and individuals fix the workflow before it gets there.
          </p>
        </div>
      </Section>

      {/* SKU cards */}
      <section id="pricing" className="pt-4 pb-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
            {SKUS.map((sku) => (
              <SkuCard key={sku.title} sku={sku} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom inquiries */}
      <section id="custom" className="pb-20 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-fg-dim text-[1.0625rem] leading-[1.7]">
            Need something outside these engagements? Multi-month builds, custom integrations, or scope I haven&apos;t named here.{" "}
            <a
              href="mailto:stevensacks@gmail.com"
              className="text-accent hover:text-accent-2 transition-colors duration-150 underline underline-offset-4 decoration-accent/40 hover:decoration-accent-2"
            >
              Get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}

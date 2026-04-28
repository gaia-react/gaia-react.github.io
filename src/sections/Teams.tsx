import type React from "react";
import { Section } from "../components/Section";

const CAL_URL = "#cal";

type SkuTier = { price: string; description: string };

type SkuData = {
  title: string;
  tagline: string;
  price: string;
  priceDetail: string;
  deliverables: string[];
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
  style: { display: "block", marginBottom: "0.875rem" },
};

const AuditIcon = (
  <svg {...iconBaseProps}>
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <circle cx="11.5" cy="14.5" r="2.5" />
    <path d="M13.3 16.3 15 18" />
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
    tagline: "Full GAIA setup for your team",
    price: "$25,000",
    priceDetail: "2 weeks · 2–3 live sessions",
    deliverables: [
      "GAIA installed and customized for your repo: rules, hooks, skills, wiki templates matched to your stack",
      "Integration with your existing tooling (Sentry, Linear, etc.)",
      "2–3 live sessions: kickoff, mid-foundation demo, handoff training (all recorded)",
      "Written runbook customized to your team",
      "30 days of post-delivery email support",
    ],
  },
  {
    title: "Retainer",
    icon: RetainerIcon,
    tagline: "Ongoing oversight as your project grows",
    price: "From $5,000/mo",
    priceDetail: "ongoing · async-first",
    deliverables: [
      "Async review of critical PRs (5–10/month)",
      "Weekly 30-minute office hour (live)",
      "Slack/Discord access with 24-hour response time",
      "Quarterly written health-check summary",
      "First-look access to GAIA roadmap features",
      "10% discount on additional Foundation engagements",
    ],
    tiers: [
      { price: "$5k/mo", description: "8 hours, basic PR review" },
      { price: "$8k/mo", description: "15 hours, full critical-path PR review" },
    ],
  },
];

function CtaButton({
  href,
  children,
  large,
  fullWidth,
}: {
  href: string;
  children: React.ReactNode;
  large?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        display: fullWidth ? "flex" : "inline-flex",
        width: fullWidth ? "100%" : undefined,
        alignItems: "center",
        justifyContent: fullWidth ? "center" : undefined,
        backgroundColor: "var(--color-accent)",
        color: "var(--color-bg)",
        textDecoration: "none",
        fontFamily: "var(--font-body)",
        fontSize: large ? "1rem" : "0.9375rem",
        fontWeight: 500,
        padding: large ? "0.75rem 1.5rem" : "0.6875rem 1.25rem",
        borderRadius: "0.5rem",
        transition: "background-color 0.15s ease",
        letterSpacing: "0.01em",
        whiteSpace: large ? "normal" : "nowrap",
        textAlign: large ? "center" : undefined,
        boxSizing: "border-box",
      }}
      className="teams-cta"
    >
      {children}
    </a>
  );
}

function SkuCard({ sku }: { sku: SkuData }) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-elev)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.75rem",
        padding: "1.75rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      {/* Title + tagline */}
      <div>
        {sku.icon}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "1.75rem",
            color: "var(--color-fg)",
            marginBottom: "0.375rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          {sku.title}
        </h2>
        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--color-fg-dim)",
            lineHeight: 1.5,
            minHeight: "calc(0.875rem * 1.5 * 2)",
          }}
        >
          {sku.tagline}
        </p>
      </div>

      {/* Price */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "2rem",
            color: "var(--color-fg)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "0.25rem",
          }}
        >
          {sku.price}
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.8125rem",
            color: "var(--color-fg-mute)",
          }}
        >
          {sku.priceDetail}
        </p>
      </div>

      {/* CTA — above the feature list */}
      <CtaButton href={CAL_URL} fullWidth>
        Book intro call →
      </CtaButton>

      {/* Divider */}
      <div
        aria-hidden="true"
        style={{ borderTop: "1px solid var(--color-border)" }}
      />

      {/* Feature list */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          flex: 1,
        }}
      >
        {sku.deliverables.map((item) => (
          <li
            key={item}
            style={{
              display: "flex",
              gap: "0.625rem",
              fontSize: "0.875rem",
              color: "var(--color-fg-dim)",
              lineHeight: 1.55,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-accent)",
                flexShrink: 0,
                fontWeight: 600,
                fontSize: "0.75rem",
                marginTop: "0.15rem",
              }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      {/* Retainer tiers */}
      {sku.tiers && (
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "var(--color-fg-mute)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            Two tiers
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {sku.tiers.map((tier) => (
              <li
                key={tier.price}
                style={{ fontSize: "0.8125rem", color: "var(--color-fg-dim)" }}
              >
                <strong style={{ color: "var(--color-fg)" }}>{tier.price}:</strong>{" "}
                {tier.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const bodyTextStyle: React.CSSProperties = {
  color: "var(--color-fg-dim)",
  fontSize: "1.0625rem",
  lineHeight: 1.7,
};

export default function Teams() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div
          style={{
            maxWidth: "48rem",
            margin: "0 auto",
            padding: "0 2rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "var(--color-fg)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Work with the creator of GAIA
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "var(--color-fg-dim)",
              lineHeight: 1.65,
              maxWidth: "38rem",
              margin: "0 auto 2.5rem",
            }}
          >
            I built the GAIA Flash Framework in the 2000s, used to build 100k+ sites and by
            every major digital agency worldwide. GAIA React carries that automation
            philosophy into the AI-native era. Now I help teams adopt it.
          </p>
          <CtaButton href={CAL_URL} large>
            Book a free 20-minute intro call →
          </CtaButton>
        </div>
      </section>

      {/* Lead-in */}
      <Section id="intro">
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <p style={bodyTextStyle}>
            Your team adopted Claude Code. Now everyone's using it differently:
            inconsistent patterns, ballooning token costs, code review catching
            AI-generated problems that shouldn't exist.
          </p>
          <p style={bodyTextStyle}>GAIA fixes the workflow. I help you adopt it.</p>
          <p style={bodyTextStyle}>
            Three engagement types, all async-first. No calendar hostage
            situations.
          </p>
        </div>
      </Section>

      {/* SKU cards */}
      <section style={{ paddingTop: "1rem", paddingBottom: "4rem" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "0 2rem",
          }}
        >
          <div
            className="sku-grid"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {SKUS.map((sku) => (
              <SkuCard key={sku.title} sku={sku} />
            ))}
          </div>
        </div>
      </section>


      <style>{`
        @media (min-width: 768px) {
          .sku-grid {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .teams-cta:hover {
          background-color: var(--color-accent-2) !important;
        }
      `}</style>
    </>
  );
}

export type Release = ReleaseLead & {
  added?: string[]; // "New"
  date: string; // ISO yyyy-mm-dd
  fixed?: string[]; // "Fixed"
  improved?: string[]; // "Improved"
  // GitHub release body only: lines emitted verbatim before the headline by
  // scripts/render-release-md.mjs. The changelog page does not render them.
  preamble?: string[];
  version: string; // semver, no leading 'v'
};

// Every card needs a visible lead. The changelog renderer shows `headline` as
// the card's heading and otherwise falls through to the New/Improved/Fixed
// buckets, which render no title of their own. So a bucketed release must carry
// a `headline`; only a `summary` (rendered as the lead paragraph) can stand in
// for it. A release with neither renders titleless. Encoding the lead as a
// required union documents the rule; scripts/check-release-titles.mjs enforces
// it across every release file at build time.
type ReleaseLead =
  {headline: string; summary?: string} | {headline?: string; summary: string};

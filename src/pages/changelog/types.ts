export type Release = {
  added?: string[]; // "New"
  date: string; // ISO yyyy-mm-dd
  fixed?: string[]; // "Fixed"
  headline?: string;
  improved?: string[]; // "Improved"
  summary?: string; // freeform fallback for legacy/coarse entries
  version: string; // semver, no leading 'v'
};

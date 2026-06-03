export default {
  added: [
    "`/setup-gaia-ci` now detects when your committed GAIA CI workflow files have drifted from what GAIA would generate today. On a re-run it compares each tool's workflow YAML against a fresh render and reports what is out of sync, then offers to re-render, skip, or fully reconfigure instead of silently doing nothing. A new drift-fix path opens a branch and PR that regenerates only the workflow YAML, leaving your tool selection and bot token untouched.",
  ],
  date: '2026-05-22',
  headline: '`/setup-gaia-ci` detects and repairs drifted CI workflow files.',
  version: '1.3.3',
};

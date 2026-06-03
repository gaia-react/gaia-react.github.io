export default {
  added: [
    'GAIA apps now ship with a per-request nonce Content-Security-Policy, so only scripts carrying the request nonce can run and inline injection is blocked.',
    'axe-core accessibility testing is wired into both Vitest and Playwright, so you can catch a11y violations in unit tests and end-to-end flows.',
    '`/gaia plan` and `/gaia spec` can run concurrently in separate sessions without clashing. Atomic writes keep racing sessions from corrupting committed state.',
  ],
  date: '2026-05-22',
  fixed: [
    'The Checkboxes, FieldDescription, and TextArea components ship accessibility fixes, including a dropped nested live region that screen readers announced incorrectly.',
    'Form components handle edge cases correctly across the board.',
    'GAIA apps reject non-local redirect targets and close an XSS vector, so a crafted redirect or payload cannot send users off-site or run injected markup.',
  ],
  headline:
    'GAIA apps ship with a Content-Security-Policy, and accessibility testing is built in.',
  improved: [
    'GAIA apps detect client hints with a pre-paint inline script instead of a reload, removing the flash and extra page load on first visit.',
    'The `/setup-gaia` command is renamed to `/setup-cloned-gaia-project`.',
  ],
  version: '1.3.0',
};

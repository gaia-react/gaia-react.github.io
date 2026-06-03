export default {
  date: '2026-05-19',
  headline: 'Concurrency-safe task orchestration and WSL support.',
  summary:
    'Running two planning or orchestration sessions at once no longer corrupts shared state: a running sentinel detects a concurrent orchestrator, and plan creation uses an atomic directory claim to avoid a race. Husky git hooks now run on Linux and WSL.',
  version: '1.2.1',
};

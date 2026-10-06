import gaiaLint from '@gaia-react/lint';
import {defineConfig} from 'eslint/config';

const lint = gaiaLint({sourceDir: 'src'});

export default defineConfig([
  ...lint.ignores({gitignore: '.gitignore'}),
  ...lint.base,
  ...lint.react,
  ...lint.styleHygiene,
  ...lint.guardrails,
  ...lint.betterTailwind({
    entryPoint: './src/styles.css',
  }),
  ...lint.prettier,
  {
    rules: {
      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            doc: false,
            docs: false,
            env: false,
            envs: false,
          },
        },
      ],
    },
  },
  {
    // GAIA's file/folder naming conventions target the GAIA app layout
    // (index.tsx components inside PascalCase folders). This marketing site is a
    // multi-entry Vite app with a different structure (per-page main.tsx + App.tsx
    // entries, PascalCase section components, a lowercase components/icons folder),
    // so these conventions don't apply here.
    name: 'gaia-website/disable-check-file-conventions',
    rules: {
      'check-file/filename-naming-convention': 'off',
      'check-file/folder-naming-convention': 'off',
    },
  },
]);

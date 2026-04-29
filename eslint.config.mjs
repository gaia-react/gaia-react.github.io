import {
  base,
  betterTailwind,
  guardrails,
  ignores,
  prettier,
  react,
  styleHygiene,
} from '@gaia-react/lint';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  ...ignores({gitignore: '.gitignore'}),
  ...base,
  ...react,
  ...styleHygiene,
  ...guardrails,
  ...betterTailwind({
    entryPoint: './src/styles.css',
  }),
  ...prettier,
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
]);

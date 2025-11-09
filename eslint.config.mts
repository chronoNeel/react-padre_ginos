import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  {
    files: ['**/*.{ts,mts,cts,tsx}'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react-hooks/recommended',
    ],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
  ...(pluginReact.configs.flat?.recommended
    ? [pluginReact.configs.flat.recommended]
    : []),
  prettier,
]);

/* eslint-env node */

// module.exports = {
//     root: true,
//     env: {browser: true, es2020: true},
//     extends: [
//         'eslint:recommended',
//         'plugin:@typescript-eslint/recommended',
//         'plugin:@typescript-eslint/recommended-requiring-type-checking',
//         'plugin:react-hooks/recommended'
//     ],
//     parser: '@typescript-eslint/parser',
//     ignorePatterns: ['**/dist/**', '*.cjs', 'node_modules/*'],
//     parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'node',
//         project: true,
//         tsconfigRootDir: __dirname
//     },
//     plugins: ['react-refresh', 'unused-imports'],
//     rules: {
//         'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
//         '@typescript-eslint/no-non-null-assertion': 'off',
//         '@typescript-eslint/no-unsafe-member-access': 'off',
//         '@typescript-eslint/no-unsafe-assignment': 'off',
//         '@typescript-eslint/no-unsafe-argument': 'off',
//         '@typescript-eslint/no-unsafe-call': 'off',
//         '@typescript-eslint/no-explicit-any': 'off',
//         'no-extra-boolean-cast': 'off',
//         '@typescript-eslint/no-unused-vars': 'off',
//         'unused-imports/no-unused-imports': 'error',
//         curly: ['warn', 'all'],
//         'object-curly-spacing': ['warn', 'never'],
//         'padding-line-between-statements': [
//             'warn',
//             {blankLine: 'always', prev: '*', next: 'return'},
//             {blankLine: 'always', prev: '*', next: 'if'},
//             {blankLine: 'always', prev: 'if', next: '*'},
//             {blankLine: 'always', prev: '*', next: 'for'},
//             {blankLine: 'always', prev: 'for', next: '*'},
//             {blankLine: 'always', prev: '*', next: 'switch'},
//             {blankLine: 'always', prev: 'switch', next: '*'},
//             {blankLine: 'always', prev: '*', next: 'try'},
//             {blankLine: 'always', prev: 'try', next: '*'}
//         ]
//     }
// };

import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import react from 'https://unpkg.com/react@18.3.1/umd/react.development.js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: ['js/recommended'],
    plugins: [react],
    languageOptions: { globals: globals.browser },
    rules: {
      'no-undef': 'off',
      'react/prop-types': 'off',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);

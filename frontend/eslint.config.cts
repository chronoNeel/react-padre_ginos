// eslint.config.cts
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/dist/**', '*.cjs', 'node_modules/*'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        module: 'readonly',
        __dirname: 'readonly',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      // '@typescript-eslint/no-unescaped-entities': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-extra-boolean-cast': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      curly: ['warn', 'all'],
      'object-curly-spacing': ['warn', 'never'],
      'padding-line-between-statements': [
        'warn',
        {blankLine: 'always', prev: '*', next: 'return'},
        {blankLine: 'always', prev: '*', next: 'if'},
        {blankLine: 'always', prev: 'if', next: '*'},
        {blankLine: 'always', prev: '*', next: 'for'},
        {blankLine: 'always', prev: 'for', next: '*'},
        {blankLine: 'always', prev: '*', next: 'switch'},
        {blankLine: 'always', prev: 'switch', next: '*'},
        {blankLine: 'always', prev: '*', next: 'try'},
        {blankLine: 'always', prev: 'try', next: '*'},
      ],
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier', 'airbnb-base'],
  plugins: ['svelte3', '@typescript-eslint'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': () => require('typescript'),
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-unused-vars': 'warn',
    'function-paren-newline': 0,
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': 0,
    'max-len': ['error', { code: 120 }],
  },
}

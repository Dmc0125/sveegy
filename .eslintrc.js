module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb/base',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'warn',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-underscore-dangle': 0,
    'vue/multi-word-component-names': 0,
    'max-len': ['error', { code: 150 }],
  },
}

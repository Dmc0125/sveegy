module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'airbnb/base',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'warn',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/multi-word-component-names': 0,
    'max-len': ['error', { code: 150 }],
    '@typescript-eslint/ban-ts-comment': 0,
  },
}

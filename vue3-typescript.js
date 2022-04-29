const base = require.resolve('./base.js')

module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },
  extends: [
    base,
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    /* Vue 3 */

    // Custom for vue/vue3-recommended preset
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    /* Typescript */

    // Disable 'no-unused-vars' as TypeScript has its own version
    'no-unused-vars': 'off',

    // Prefer T[] instead of Array<T>
    '@typescript-eslint/array-type': ['error', { default: 'array' }]
  }
}

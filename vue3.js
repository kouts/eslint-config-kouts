const base = require.resolve('./base.js')

module.exports = {
  extends: [
    base,
    'plugin:vue/vue3-recommended'
  ],
  rules: {
    // Custom for vue/vue3-recommended preset
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}

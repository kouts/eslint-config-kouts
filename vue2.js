const base = require.resolve('./base.js')

module.exports = {
  extends: [
    base,
    'plugin:vue/recommended'
  ],
  rules: {
    // Custom for vue/recommended preset
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}

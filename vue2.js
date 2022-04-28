const base = require.resolve('./base.js')

module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
  },  
  extends: [
    base,
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Custom for vue/recommended preset
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}

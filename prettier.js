module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    // Custom for vue/recommended preset
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
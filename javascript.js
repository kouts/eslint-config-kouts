const base = require.resolve('./base.js')

module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
  },  
  extends: [
    base,
    'plugin:prettier/recommended'
  ]
}

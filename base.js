module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  plugins: [
    'html'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  ignorePatterns: [
    '**/node_modules/**',
    '{tmp,temp}/**',
    '**/*.min.js',
    'vendor/**',
    'dist/**',
    'public/**'
  ],
  overrides: [
    {
      'files': ['*.json'],
      'rules': {
        'quotes': [2, 'double']
      }
    },
    {
      files: ['*.spec.js'],
      env: {
        jest: true
      }
    }
  ],
  rules: {
    // Windows style line breaks
    'linebreak-style': 0,

    // Console and debugger settings depending whether we're on production or not
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Custom rules for standard
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'arrow-parens': ['error', 'always']
  }
}

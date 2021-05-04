# eslint-config-kouts

> Custom ESLint config with reasonable defaults

## Usage

### For ESLint

```bash
npm i -D eslint @babel/core @babel/eslint-parser eslint-config-standard eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise@^4.3.1 eslint-plugin-vue
```

```bash
npm i -D eslint-config-kouts
```

There are 3 ESLint presets that you can use:
- `eslint-config-kouts/base`
- `eslint-config-kouts/vue2`
- `eslint-config-kouts/vue3`

Add the desired preset into your `.eslintrc.js` file:

```javascript
module.exports = {
  ...
  extends: [
    'eslint-config-kouts/vue2'
  ]
  ...
}
```

### For Prettier

```bash
npm install --save-dev --save-exact prettier
```

Add a `prettier.config.js` with contents:

```javascript
module.exports = require('eslint-config-kouts/prettier.config.js')
```

## Features

- Based on [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) for parsing
- Plugins
  - [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) for HTML files
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/) for Vue.js files
- [Prettier](https://prettier.io) for code formatting

## License

[MIT](http://opensource.org/licenses/MIT)

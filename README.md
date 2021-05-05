# eslint-config-kouts

> Custom ESLint and Prettier config with reasonable defaults

## Usage

```bash
npm i -D eslint eslint-config-kouts eslint-config-standard eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise@^4.3.1 eslint-plugin-vue eslint-plugin-prettier eslint-config-prettier @babel/core @babel/eslint-parser
```

```bash
npm i -D --save-exact prettier
```

There are 3 ESLint config presets that you can use:
- `eslint-config-kouts/base` for JavaScript projects
- `eslint-config-kouts/vue2` for Vue.js 2 projects
- `eslint-config-kouts/vue3` for Vue.js 3 projects

Add the desired config preset into your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    'eslint-config-kouts/vue2'
  ]
}
```

If your repo doesn't contain a Babel config file, you may have to
add to your `.eslintrc.js` file
```javascript
  parserOptions: {
    requireConfigFile: false
  }
```

Add a `prettier.config.js` file with contents:

```javascript
module.exports = require('eslint-config-kouts/prettier.config.js')
```

You can add ESLint commands to `.package-json`
```json
{
  "lint": "eslint . --ext .js,.vue",
  "lint-fix": "eslint . --fix --ext .js,.vue"
}
```

## Features

- Based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and `eslint:recommended`
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) for parsing
- [Prettier](https://prettier.io) for code formatting
- Plugins
  - [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) for HTML files
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/) for Vue.js files
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for disabling all rules that conflict with Prettier
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) for using use prettier as a code formatter for `eslint --fix`
 
## License

[MIT](http://opensource.org/licenses/MIT)

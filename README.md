# eslint-config-kouts

> Custom ESLint and Prettier config with sensible defaults

## Installation

```bash
npm i -D eslint prettier@2 eslint-config-kouts eslint-config-standard eslint-plugin-html eslint-plugin-import eslint-plugin-n 
eslint-plugin-promise eslint-plugin-vue eslint-plugin-prettier eslint-config-prettier eslint-plugin-sort-imports-es6-autofix
```

For the Vue 3 TypeScript preset we need additionally:

```bash
npm i -D @typescript-eslint/parser @vue/eslint-config-typescript vue-eslint-parser
```
## Usage

There are 4 ESLint config presets that you can use:
- `eslint-config-kouts/javascript` for JavaScript / TypeScript projects
- `eslint-config-kouts/vue2` for Vue.js 2 projects
- `eslint-config-kouts/vue3` for Vue.js 3 projects
- `eslint-config-kouts/vue3-typescript` for Vue.js 3 / TypeScript projects

Add the desired config preset into your `.eslintrc.js` file:

```javascript
module.exports = {
  extends: [
    'eslint-config-kouts/vue2'
  ]
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

and VS Code settings for autofix on save

`.vscode/settings.json`
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Features

- Based on [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [Prettier](https://prettier.io) for code formatting
- Plugins
  - [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) for linting inline scripts contained in HTML files
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/) for linting Vue.js files
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) for disabling all rules that conflict with Prettier
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) for using prettier as a code formatter for `eslint --fix`
  - [sort-imports-es6-autofix](https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix) for auto-fixing imports order
 
## License

[MIT](http://opensource.org/licenses/MIT)

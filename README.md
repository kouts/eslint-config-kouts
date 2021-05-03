# eslint-config-kouts

> Custom eslint config with reasonable defaults

## Usage

```bash
npm i -D eslint @babel/eslint-parser eslint-config-standard eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise@^4.3.1 eslint-plugin-vue
```

```bash
npm i -D eslint-config-kouts
```

Add it to your `.eslintrc.js` file:

```javascript
module.exports = {
  ...
  extends: [
    'eslint-config-kouts'
  ]
  ...
}
```

## Features

- Based on [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- [@babel/eslint-parser](https://www.npmjs.com/package/@babel/eslint-parser) for parsing
- Plugins
  - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue/) for Vue.js

## License

[MIT](http://opensource.org/licenses/MIT)

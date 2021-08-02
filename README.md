# cra-templates

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lerna.js.org/)

A collection of templates for [Create React App](https://create-react-app.dev/).

## Templates

- `npx create-react-app my-app --template all-visx`.
- `npx create-react-app my-app --template quickstart`.
- `npx create-react-app my-app --template quickstart-eslint-prettier`.

## Notes

- `cra-template-[template-name]`.
- `yarn add prettier --ignore-workspace-root-check --dev`.
- [`simple-react-boilerplate`](https://github.com/joaopalmeiro/simple-react-boilerplate).
- Test a template locally:
  - `npx create-react-app my-app --template file:/Users/joao.palmeiro/Documents/GitHub/cra-templates/packages/cra-template-quickstart`.
  - `npx create-react-app my-app --template file:/Users/joao.palmeiro/Documents/GitHub/cra-templates/packages/cra-template-all-visx`.
  - `npx create-react-app my-app --template file:/Users/joao.palmeiro/Documents/GitHub/cra-templates/packages/cra-template-quickstart-eslint-prettier`.
- ESLint:
  - [eslint-loader](https://www.npmjs.com/package/eslint-loader) (deprecated) and [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin) (ESLint plugin for webpack).
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) (to turn off all unnecessary or conflicting rules with Prettier). As of version 8.0.0, just add `"prettier"` (no need to add `"prettier/react"`).
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier). `"plugin:prettier/recommended"` includes `eslint-config-prettier`.
  - [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) (ESLint configuration used by CRA).
  - Run ESLint (CRA): `./node_modules/.bin/eslint` (`./node_modules/.bin/eslint --print-config package.json`).
  - Integrate ESLint with Prettier: `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`.
  - Plugins (`"plugins"`) vs. Configs (`"extends"`):
    - Plugin: set of rules that must be explicitly applied individually ([source](https://stackoverflow.com/a/54522973)). A plugin does not enforce any rule.
    - Config: set of applied rules.
    - A plugin can provide zero, one, or more configuration files.
  - [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):
    - [File exists, but `ENOENT: no such file or directory...` reported.](https://github.com/microsoft/vscode-eslint/issues/1229) (open) issue.
  - [eslint-plugin-notice](https://github.com/nickdeis/eslint-plugin-notice) (for copyright headers).
  - [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html).
- Prettier:
  - [VS Code Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode). [VS Code default formatter](https://github.com/prettier/prettier-vscode#default-formatter) (`"prettier.disableLanguages"` is deprecated).
  - [Configuration for disabling formatting](https://github.com/prettier/prettier-vscode/issues/1854) issue.
  - [Badge](https://github.com/prettier/prettier#badge).
- [`template.json` example](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template.json).
- [react-scripts dependencies](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/package.json).
- Lerna:
  - [Badge](https://github.com/lerna/lerna#readme-badge).

## References

- Ian Sutherland's "[CRA Minimal Templates](https://github.com/iansu/cra-minimal-templates)" repo/packages.
- [Custom Templates](https://create-react-app.dev/docs/custom-templates/).
- José Silva's "[Lerna & Yarn Workspaces](https://mytechblog.io/lerna-yarn-workspaces)" blog post.
- [Extending or replacing the default ESLint config](https://create-react-app.dev/docs/setting-up-your-editor#extending-or-replacing-the-default-eslint-config).
- [VS Code language identifiers](https://code.visualstudio.com/docs/languages/identifiers).
- Brady Dowling's [Setting up Create React App, VS Code, ESLint, and Prettier](https://readwriteexercise.com/posts/setting-up-create-react-app-vs-code-eslint-prettier/) blog post.
- Alexey Nikiforov's [Setup React App with TypeScript, ESLint and Prettier](https://www.alexey-nikiforov.name/setup-react-app-with-typescript-eslint-and-prettier) blog post.
- Marcin Kapica's [Using ESLint and Prettier in Create React App](https://www.mkapica.com/react-eslint/) blog post.
- [Multiple languages specific editor settings](https://github.com/microsoft/vscode/issues/51935) (open) issue (VS Code).

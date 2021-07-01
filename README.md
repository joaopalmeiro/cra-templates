# cra-templates

A collection of templates for [Create React App](https://create-react-app.dev/).

## Templates

- `npx create-react-app my-app --template all-visx`.
- `npx create-react-app my-app --template quickstart`.

## Notes

- `cra-template-[template-name]`.
- `yarn add prettier --ignore-workspace-root-check --dev`.
- [`simple-react-boilerplate`](https://github.com/joaopalmeiro/simple-react-boilerplate).
- Test a template locally:
  - `npx create-react-app my-app --template file:/Users/joao.palmeiro/Documents/GitHub/cra-templates/packages/cra-template-quickstart`.
  - `npx create-react-app my-app --template file:/Users/joao.palmeiro/Documents/GitHub/cra-templates/packages/cra-template-all-visx`.
- [eslint-loader](https://www.npmjs.com/package/eslint-loader) (deprecated) and [eslint-webpack-plugin](https://www.npmjs.com/package/eslint-webpack-plugin) (ESLint plugin for webpack).
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) (to turn off all unnecessary or conflicting rules with Prettier). As of version 8.0.0, just add `"prettier"` (no need to add `"prettier/react"`).
- [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) (ESLint configuration used by CRA).
- Run ESLint (CRA): `./node_modules/.bin/eslint` (`./node_modules/.bin/eslint --print-config package.json`).
- Integrate ESLint with Prettier: `yarn add -D prettier eslint-config-prettier eslint-plugin-prettier`.

## References

- Ian Sutherland's "[CRA Minimal Templates](https://github.com/iansu/cra-minimal-templates)" repo/packages.
- [Custom Templates](https://create-react-app.dev/docs/custom-templates/).
- José Silva's "[Lerna & Yarn Workspaces](https://mytechblog.io/lerna-yarn-workspaces)" blog post.
- [Extending or replacing the default ESLint config](https://create-react-app.dev/docs/setting-up-your-editor#extending-or-replacing-the-default-eslint-config).

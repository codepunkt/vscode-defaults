# vscode-defaults

Generates opinionated [Visual Studio Code][1] workspace settings for JavaScript and [React][2] projects. This sets up

- recommendations for [VSCode][1] extensions
- linting with [ESLint][2]
- autoformatting your code with [Prettier][3] and [ESLint][2]

Both linting and autoformatting are largely based on [JavaScript Standard Style][4]

## Installation

[ESLint][2] is required as a peer dependency. To install this package, the [Yarn][5] command is

```
yarn add --dev eslint vscode-defaults
```

If you don't have Yarn yet, [install it first][6].

On installation, this will copy a `.vscode` workspace settings folder, `.gitignore`, `.editorconfig` and `.eslintrc` files to your project. If any of these exist, the existing versions will be kept.

Open your project directory in [VSCode][1] and install the recommended plugins. Reload [VSCode][1] afterwards.

### Dealing with changes

It is advised that you let this package manage your projects `.vscode` folder as well as the `.editorconfig`, `.eslintrc` and `.gitignore` files. If you want to do changes in any of them, create a pull request to this project with a description of your use case and changes.

### Updating and overwriting files with new version

To upgrade your version of `vscode-defaults` run

```
yarn upgrade vscode-defaults
```

If you have upgraded your version of `vscode-defaults` and would like to have your previously generated files overwritten by the new version, you can use the `--force` option of the CLI

```
node_modules/.bin/vscode-defaults --force
```

## Requirements

- Node.js `^6.9.4` or newer
- ESLint `^3.19.0` or newer

[1]: https://github.com/Microsoft/vscode
[2]: https://github.com/facebook/react
[3]: https://github.com/eslint/eslint
[4]: https://github.com/prettier/prettier
[5]: https://github.com/feross/standard
[6]: https://github.com/yarnpkg/yarn
[7]: https://yarnpkg.com/en/docs/install

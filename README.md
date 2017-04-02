# vscode-config-codepunkt

Generates VSCode workspace settings for Javascript and React projects. This sets up

- Recommendations for VSCode extensions
- Linting with eslint
- Autoformatting your code with eslint and prettier

## Installation

```
yarn add --dev eslint vscode-config-codepunkt
```

### Requirements

- Node.js `^6.9.4` or newer
- ESLint `^3.19.0` or newer

## Usage

Initialize your projects VSCode settings by running this from the root directory of your project.
This will copy a `.vscode` workspace settings folder, `.gitignore`, `.editorconfig` and `.eslintrc` files to your project.

```
node_modules/.bin/vscode-init
````

Open your project directory in VSCode and install the recommended plugins. Reload VSCode afterwards.

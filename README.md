# :unicorn: react-cli :unicorn:

![GitHub package.json version](https://img.shields.io/github/package-json/v/vsimonovski/react-cli)

Simple React CLI that will generate functional component, storybook(mdx docs supported) and styled component template.

## 🛠 Technologies used

-  ⚡️️ [Node.js](https://nodejs.org)
-  🧙 [Commander.js](https://github.com/tj/commander.js/) for argument management
-  🖍 [Chalk](https://github.com/chalk/chalk) Terminal string styling done right
-  👨‍🎤 [Prettier](https://github.com/prettier/prettier) for code readability

## ⚡️ Installation

```bash
# install react-cli script globally
yarn global add @vsimonovski/react-cli 
# or
npm install -g @vsimonovski/react-cli
```

## 💡 Usage

```bash
react-cli [options]

Options:
  -c --component <comp-name>          generate component with storybook and styled components
                                      support
  -sb --storybook <comp-name>         generate component with storybook support
  -sc --styled-component <comp-name>  generate component with styled component support
  -h, --help                          display help for command
```

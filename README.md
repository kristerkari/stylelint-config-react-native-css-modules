# stylelint-config-react-native-css-modules

[![NPM version](http://img.shields.io/npm/v/stylelint-config-react-native-css-modules.svg)](https://www.npmjs.org/package/stylelint-config-react-native-css-modules)
[![Build Status](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules.svg?branch=master)](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules)
[![Build status](https://ci.appveyor.com/api/projects/status/u4f5x5k6d5ff24qt/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/stylelint-config-react-native-css-modules/branch/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Shareable stylelint config for [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)

## Installation and usage

Install `stylelint-config-react-native-css-modules` (and `stylelint` + `stylelint-react-native`, if you haven't done so yet):

```
yarn add stylelint stylelint-react-native stylelint-config-react-native-css-modules --dev
```

or

```
npm install stylelint stylelint-react-native stylelint-config-react-native-css-modules --save-dev
```

Create the `.stylelintrc` config file (or open the existing one) and extend `stylelint-config-react-native-css-modules` config.

```json
{
  "extends": "stylelint-config-react-native-css-modules",
  "rules": {
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]*$"
  }
}
```

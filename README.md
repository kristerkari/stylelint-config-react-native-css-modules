# stylelint-config-react-native-css-modules

[![NPM version](http://img.shields.io/npm/v/stylelint-config-react-native-css-modules.svg)](https://www.npmjs.org/package/stylelint-config-react-native-css-modules)
[![Build Status](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules.svg?branch=master)](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules)
[![Build status](https://ci.appveyor.com/api/projects/status/u4f5x5k6d5ff24qt/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/stylelint-config-react-native-css-modules/branch/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
[![Greenkeeper badge](https://badges.greenkeeper.io/kristerkari/stylelint-config-react-native-css-modules.svg)](https://greenkeeper.io/)

Shareable stylelint config for [React Native CSS modules](https://github.com/kristerkari/react-native-css-modules)

<img src="screenshots/warning.png" width="540">

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

## Custom settings

The config enables by default warnings for CSS selectors that are not compatible with React Native CSS modules.

If you want to turn off the CSS selector warnings, you can use the following config:

```json
{
  "extends": "stylelint-config-react-native-css-modules",
  "rules": {
    "selector-pseudo-class-whitelist": null,
    "selector-max-universal": null,
    "selector-max-attribute": null,
    "selector-max-type": null,
    "selector-max-combinators": null,
    "selector-max-id": null
  }
}
```

If you want the CSS selector warnings to be turned into stylelint errors, you can use the following config:

```json
{
  "extends": "stylelint-config-react-native-css-modules",
  "rules": {
    "selector-pseudo-class-whitelist": [
      [],
      {
        "severity": "error",
        "message":
          "pseudo class selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ],
    "selector-max-universal": [
      0,
      {
        "severity": "error",
        "message":
          "universal selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ],
    "selector-max-attribute": [
      0,
      {
        "severity": "error",
        "message":
          "attribute selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ],
    "selector-max-type": [
      0,
      {
        "severity": "error",
        "message":
          "type selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ],
    "selector-max-combinators": [
      0,
      {
        "severity": "error",
        "message":
          "combinator selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ],
    "selector-max-id": [
      0,
      {
        "severity": "error",
        "message":
          "id selectors are ignored by React Native CSS modules. You may still use them for web."
      }
    ]
  }
}
```

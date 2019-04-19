# stylelint-config-react-native-css-modules

[![NPM version](http://img.shields.io/npm/v/stylelint-config-react-native-css-modules.svg)](https://www.npmjs.org/package/stylelint-config-react-native-css-modules)
[![Build Status](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules.svg?branch=master)](https://travis-ci.org/kristerkari/stylelint-config-react-native-css-modules)
[![Build status](https://ci.appveyor.com/api/projects/status/u4f5x5k6d5ff24qt/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/stylelint-config-react-native-css-modules/branch/master)
[![Downloads per month](https://img.shields.io/npm/dm/stylelint-config-react-native-css-modules.svg)](http://npmcharts.com/compare/stylelint-config-react-native-css-modules?periodLength=30)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)
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

The config enables by default warnings for at-rules, units, CSS selectors that are not compatible with React Native CSS modules.

If you want to turn off the warnings, you can use the following config:

```json
{
  "extends": "stylelint-config-react-native-css-modules",
  "rules": {
    "react-native/font-weight-no-ignored-values": null,
    "at-rule-blacklist": null,
    "function-blacklist": null,
    "unit-whitelist": null,
    "selector-pseudo-class-whitelist": null,
    "selector-max-universal": null,
    "selector-max-attribute": null,
    "selector-max-type": null,
    "selector-max-combinators": null,
    "selector-max-id": null
  }
}
```

If you want to change the at-rule, unit, and CSS selector warnings into stylelint errors (e.g. If you are using React Native only), you can use the following config:

```json
{
  "extends": "stylelint-config-react-native-css-modules",
  "rules": {
    "at-rule-blacklist": [
      [
        "keyframes",
        "font-face",
        "supports",
        "charset",
        "viewport",
        "page",
        "namespace"
      ],
      {
        "severity": "error",
        "message": "the @-rule is ignored by React Native CSS modules."
      }
    ],
    "function-blacklist": [
      [
        "linear-gradient",
        "radial-gradient",
        "repeating-linear-gradient",
        "repeating-radial-gradient",
        "calc",
        "url",
        "translate3d",
        "rotate3d",
        "matrix3d",
        "scale3d"
      ],
      {
        "severity": "error",
        "message": "the function is ignored by React Native CSS modules."
      }
    ],
    "unit-whitelist": [
      ["px", "rem", "deg", "%", "vh", "vw", "vmin", "vmax"],
      {
        "severity": "error",
        "message": "the unit is ignored by React Native CSS modules."
      }
    ],
    "selector-pseudo-class-whitelist": [
      ["export", "root"],
      {
        "severity": "error",
        "message": "pseudo class selectors are ignored by React Native CSS modules."
      }
    ],
    "selector-max-universal": [
      0,
      {
        "severity": "error",
        "message": "universal selectors are ignored by React Native CSS modules."
      }
    ],
    "selector-max-attribute": [
      0,
      {
        "severity": "error",
        "message": "attribute selectors are ignored by React Native CSS modules."
      }
    ],
    "selector-max-type": [
      0,
      {
        "severity": "error",
        "message": "type selectors are ignored by React Native CSS modules."
      }
    ],
    "selector-max-combinators": [
      0,
      {
        "severity": "error",
        "message": "combinator selectors are ignored by React Native CSS modules."
      }
    ],
    "selector-max-id": [
      0,
      {
        "severity": "error",
        "message": "id selectors are ignored by React Native CSS modules."
      }
    ]
  }
}
```

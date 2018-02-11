# stylelint-config-react-native-css-modules

Shareable stylelint config for React Native CSS modules

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

module.exports = {
  plugins: ["stylelint-react-native"],
  rules: {
    "react-native/css-property-no-unknown": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-max-id": 0,
    "selector-max-attribute": 0,
    "selector-max-universal": 0,
    "selector-max-type": 0,
    "selector-max-combinators": 0,
    "selector-no-qualifying-type": true,
    "selector-pseudo-class-whitelist": [],
  },
};

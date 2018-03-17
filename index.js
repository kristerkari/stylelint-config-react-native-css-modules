module.exports = {
  plugins: ["stylelint-react-native"],
  rules: {
    "react-native/css-property-no-unknown": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-pseudo-class-whitelist": [
      [],
      {
        severity: "warning",
        message:
          "pseudo class selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
    "selector-max-universal": [
      0,
      {
        severity: "warning",
        message:
          "universal selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
    "selector-max-attribute": [
      0,
      {
        severity: "warning",
        message:
          "attribute selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
    "selector-max-type": [
      0,
      {
        severity: "warning",
        message:
          "type selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
    "selector-max-combinators": [
      0,
      {
        severity: "warning",
        message:
          "combinator selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
    "selector-max-id": [
      0,
      {
        severity: "warning",
        message:
          "id selectors are ignored by React Native CSS modules. You may still use them for web.",
      },
    ],
  },
};

module.exports = {
  plugins: ["stylelint-react-native"],
  rules: {
    "react-native/css-property-no-unknown": true,
    "react-native/font-weight-no-ignored-values": [
      true,
      {
        severity: "warning",
        message:
          "font-weight value other than 400, 700, normal or bold has not effect in React Native on Android. You can use it for Web when sharing the styles between React Native and browser."
      }
    ],
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
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
        severity: "warning",
        message:
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
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
        severity: "warning",
        message:
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
      }
    ],
    "unit-whitelist": [
      ["px", "rem", "deg", "%", "vh", "vw", "vmin", "vmax"],
      {
        severity: "warning",
        message:
          "the unit is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-pseudo-class-whitelist": [
      ["export", "root"],
      {
        severity: "warning",
        message:
          "pseudo class selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-max-universal": [
      0,
      {
        severity: "warning",
        message:
          "universal selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-max-attribute": [
      0,
      {
        severity: "warning",
        message:
          "attribute selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-max-type": [
      0,
      {
        severity: "warning",
        message:
          "type selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-max-combinators": [
      0,
      {
        severity: "warning",
        message:
          "combinator selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ],
    "selector-max-id": [
      0,
      {
        severity: "warning",
        message:
          "id selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
      }
    ]
  }
};

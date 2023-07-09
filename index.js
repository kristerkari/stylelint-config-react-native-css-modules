const migrateRuleNames = require("./utils/migrateRuleNames");
const usesNewRuleNames = require("./utils/usesNewRuleNames");

const rules = {
  "react-native/css-property-no-unknown": true,
  "react-native/font-weight-no-ignored-values": [
    true,
    {
      severity: "warning",
      message:
        "font-weight value other than 400, 700, normal or bold has not effect in React Native on Android."
    }
  ],
  "value-no-vendor-prefix": true,
  "property-no-vendor-prefix": true,
  "at-rule-no-vendor-prefix": true,
  "media-feature-name-no-vendor-prefix": true,
  "declaration-no-important": [
    true,
    {
      severity: "error",
      message: "!important is not supported by React Native CSS modules."
    }
  ],
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
      severity: "error",
      message: "the @-rule is ignored by React Native CSS modules."
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
      "translateZ",
      "translate3d",
      "rotate3d",
      "matrix3d",
      "scale3d"
    ],
    {
      severity: "error",
      message: "the function is not supported by React Native CSS modules."
    }
  ],
  "unit-whitelist": [
    ["px", "rem", "deg", "%", "vh", "vw", "vmin", "vmax"],
    {
      severity: "error",
      message: "the unit is not supported by React Native CSS modules."
    }
  ],
  "selector-pseudo-class-whitelist": [
    ["export", "root"],
    {
      severity: "error",
      message:
        "pseudo class selectors are ignored by React Native CSS modules."
    }
  ],
  "selector-max-universal": [
    0,
    {
      severity: "error",
      message: "universal selectors are ignored by React Native CSS modules."
    }
  ],
  "selector-max-attribute": [
    0,
    {
      severity: "error",
      message: "attribute selectors are ignored by React Native CSS modules."
    }
  ],
  "selector-max-type": [
    0,
    {
      severity: "error",
      message: "type selectors are ignored by React Native CSS modules."
    }
  ],
  "selector-max-combinators": [
    0,
    {
      severity: "error",
      message: "combinator selectors are ignored by React Native CSS modules."
    }
  ],
  "selector-max-id": [
    0,
    {
      severity: "error",
      message: "id selectors are ignored by React Native CSS modules."
    }
  ]
};

module.exports = {
  plugins: ["stylelint-react-native"],
  rules: usesNewRuleNames() ? migrateRuleNames(rules) : rules
};

const stylelint = require("stylelint");

describe("stylelint-config-react-native-css-modules", () => {
  it("does not allow vendor prefixes in values", () => {
    const css = ".test { display: -webkit-flex; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index",
        },
      })
      .then(result => {
        expect(result.errored).toBe(true);
        expect(result.output.includes("value-no-vendor-prefix")).toBe(true);
      });
  });

  it("does not allow vendor prefixes in properties", () => {
    const css = ".test { -webkit-transform: scale(1); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index",
        },
      })
      .then(result => {
        expect(result.errored).toBe(true);
        expect(result.output.includes("property-no-vendor-prefix")).toBe(true);
      });
  });

  it("does not allow unknown properties", () => {
    const css = ".test { word-wrap: break-word; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index",
        },
      })
      .then(result => {
        expect(result.errored).toBe(true);
        expect(
          result.output.includes("react-native/css-property-no-unknown"),
        ).toBe(true);
      });
  });

  it("allows pseudo and type selectors (ignored by React Native CSS modules, but can be used for web when creating hybrid apps)", () => {
    const css =
      ".test:hover { color: blue; } .test input[type=text] { color: red; }";
    expect.assertions(1);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index",
        },
      })
      .then(result => {
        expect(result.errored).toBe(false);
      });
  });
});

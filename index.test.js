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
    const css = ".test { display: flex; }";
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
});

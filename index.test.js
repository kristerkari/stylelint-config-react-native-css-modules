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

  it("does not allow id selectors", () => {
    const css = "#test { flex: 1 }";
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
        expect(result.output.includes("selector-max-id")).toBe(true);
      });
  });

  it("does not allow type selectors", () => {
    const css = "input { flex: 1 }";
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
        expect(result.output.includes("selector-max-type")).toBe(true);
      });
  });

  it("does not allow universal selectors", () => {
    const css = "* { flex: 1 }";
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
        expect(result.output.includes("selector-max-universal")).toBe(true);
      });
  });

  it("does not allow combinator selectors", () => {
    const css = ".foo + .bar { flex: 1 }";
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
        expect(result.output.includes("selector-max-combinators")).toBe(true);
      });
  });

  it("does not allow attribute selectors", () => {
    const css = "[type='text'] { flex: 1 }";
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
        expect(result.output.includes("selector-max-attribute")).toBe(true);
      });
  });

  it("does not allow qualifying type selectors", () => {
    const css = "a.link { flex: 1 }";
    expect.assertions(3);

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
        expect(result.output.includes("selector-max-type")).toBe(true);
        expect(result.output.includes("selector-no-qualifying-type")).toBe(
          true,
        );
      });
  });

  it("does not allow pseudo classes", () => {
    const css = ".foo:before { flex: 1 }";
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
        expect(result.output.includes("selector-pseudo-class-whitelist")).toBe(
          true,
        );
      });
  });
});

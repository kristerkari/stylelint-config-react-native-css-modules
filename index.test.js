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

  it("warns for id selectors", () => {
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("id selectors are ignored")).toBe(true);
      });
  });

  it("warns for type selectors", () => {
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("type selectors are ignored")).toBe(true);
      });
  });

  it("warns for universal selectors", () => {
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("universal selectors are ignored")).toBe(
          true,
        );
      });
  });

  it("warns for combinator selectors", () => {
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("combinator selectors are ignored")).toBe(
          true,
        );
      });
  });

  it("warns for attribute selectors", () => {
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("attribute selectors are ignored")).toBe(
          true,
        );
      });
  });

  it("warns for qualifying type selectors", () => {
    const css = "a.link { flex: 1 }";
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
        expect(result.errored).toBe(false);
        expect(result.output.includes("type selectors are ignored")).toBe(true);
      });
  });

  it("warns for pseudo classes", () => {
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
        expect(result.errored).toBe(false);
        expect(
          result.output.includes("pseudo class selectors are ignored"),
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

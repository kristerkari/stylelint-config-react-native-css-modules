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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(true);
        expect(warning.text).toBe(
          'Unexpected vendor-prefix "-webkit-flex" (value-no-vendor-prefix)'
        );
      });
  });

  it("does not allow vendor prefixes in properties", () => {
    const css = ".test { -webkit-transform: scale(1); }";
    expect.assertions(3);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        expect(output.errored).toBe(true);
        expect(warnings[0].text).toBe(
          'Unexpected unknown property "-webkit-transform" (react-native/css-property-no-unknown)'
        );
        expect(warnings[1].text).toBe(
          'Unexpected vendor-prefix "-webkit-transform" (property-no-vendor-prefix)'
        );
      });
  });

  it("does not allow vendor prefixes in media features", () => {
    const css =
      "@media (-webkit-min-device-pixel-ratio: 1) { .foo { color: blue; } }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(true);
        expect(warning.text).toBe(
          "Unexpected vendor-prefix (media-feature-name-no-vendor-prefix)"
        );
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(true);
        expect(warning.text).toBe(
          'Unexpected unknown property "word-wrap" (react-native/css-property-no-unknown)'
        );
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "id selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
        );
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "type selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
        );
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "universal selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "combinator selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "attribute selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "type selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
        );
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
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "pseudo class selectors are ignored by React Native CSS modules. You can use them for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("does not warn for ICSS :export pseudo-selector", () => {
    const css = ":export { color: red; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        expect(output.errored).toBe(false);
        expect(output.output).toBe("");
      });
  });

  it("does not warn for :root pseudo-selector", () => {
    const css = ":root { --my-color: red; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        expect(output.errored).toBe(false);
        expect(output.output).toBe("");
      });
  });

  it("warns for font-weights that are not compatible with Android", () => {
    const css = ".foo { font-weight: 300 }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "font-weight value other than 400, 700, normal or bold has not effect in React Native on Android. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for incompatible @-rules", () => {
    const css =
      ".foo { @keyframes() { 0% { color: blue } 100% { color: red; } } }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for @charset", () => {
    const css = '@charset "utf-8";';
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for @viewport", () => {
    const css = "@viewport { width: 100%; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for @page", () => {
    const css = "@page :left { margin: 1px; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for @namespace", () => {
    const css = "@namespace url(http://www.w3.org/1999/xhtml);";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the @-rule is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for incompatible units", () => {
    const css = ".foo { font-size: 1ch; }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the unit is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for linear-gradient function", () => {
    const css =
      ".foo { background: linear-gradient(to right, red 5%, green 30%, yellow 75%); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for radial-gradient function", () => {
    const css = ".foo { background: radial-gradient(yellow, red); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for repeating-linear-gradient function", () => {
    const css =
      ".foo { background: repeating-linear-gradient(gold 15%, orange 30%); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for repeating-radial-gradient function", () => {
    const css =
      ".foo { background: repeating-radial-gradient(yellow 20%, red 40%); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for calc function", () => {
    const css = ".foo { width: calc(100% - 80px); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for url function", () => {
    const css = ".foo { background: url(/images/image.png); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for translate3d function", () => {
    const css = ".foo { transform: translate3d(60px,0,0); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for rotate3d function", () => {
    const css = ".foo { transform: rotate3d(1, 0, 0, 60deg); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for matrix3d function", () => {
    const css =
      ".foo { transform: matrix3d(0.583333, 0.186887, 0.79044, 0, -0.52022, 0.833333, 0.186887, 0, -0.623773, -0.52022, 0.583333, 0, 0, 0, 0, 1); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
      });
  });

  it("warns for scale3d function", () => {
    const css = ".foo { transform: scale3d(3, 3, 1); }";
    expect.assertions(2);

    return stylelint
      .lint({
        code: css,
        formatter: "string",
        config: {
          extends: "./index"
        }
      })
      .then(output => {
        const warnings = output.results[0].warnings;
        const warning = warnings[0];
        expect(output.errored).toBe(false);
        expect(warning.text).toBe(
          "the function is ignored by React Native CSS modules. You can use it for Web when sharing the styles between React Native and browser."
        );
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
          extends: "./index"
        }
      })
      .then(result => {
        expect(result.errored).toBe(false);
      });
  });
});

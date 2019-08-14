## v2.5.1

- Fixed: warns for `translateZ` function.
- Fixed: improved warning text for functions and units.

## v2.5.0

- Added: warn when `!important` is used.

## v2.4.0

- Added: support for stylelint version 10.
- Added: warn for @viewport, @page and @namespace at-rules.

## v2.3.0

- Added: blacklist CSS functions that are not supported by properties that are supported by React Native CSS modules.

## v2.2.0

- Added: warning for `@charset` at-rule not being supported in React Native.

## v2.1.1

- Fixed: do not warn for `:root` pseudo selector (CSS variables).

## v2.1.0

- Added: support for ICSS `:export` block (don't show warnings).

## v2.0.1

- Fixed: add missing viewport units to units whitelist.

## v2.0.0

- Added: errors for vendor prefixes and warnings for incompatible font weights, at-rules and units.
- Removed: support for `stylelint-react-native` v1.

## v1.4.1

- Fixed: `peerDependencies` version range now covers `stylelint-react-native` v2.

## v1.4.0

- Added: re-enabled selector rules from v1.2.0, but this time as warnings with a custom warning message.

## v1.3.0

- Removed: stylelint rules added in v1.2.0. Selectors should not be linted as React Native CSS modules ignores all selectors that are not simple class selectors.

## v1.2.0

- Added: stylelint rules to only allow class selectors.

## v1.1.0

- Added: support for stylelint 9.

## v1.0.0

- Intial release

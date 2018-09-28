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

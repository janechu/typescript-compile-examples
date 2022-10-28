# Side Effects

This package explores the extent to which `sideEffects: false` in the package.json can affect compiled output.

## Learnings

### `const myVar = myFunc()`

This will only get tree shaken if it is located in its own file. It must both have the `sideEffects: false` in the `package.json` and it must be isolated.
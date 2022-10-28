## Webpack compile results

The webpack results exist in the `www` folder.

## TypeScript compile results

The typescript compile results exist in the `dist` folder.

## Benchmarks

These results use the webpack compile (`www` folder) and https://jsbench.me/

### Enum vs As Const

| Enum | As Const |
|-|-|
| 23.02% slower | **Fastest**

### Enum vs As Const Frozen

| Enum | As Const Frozen |
|-|-|
|20.29% slower | **Fastest**
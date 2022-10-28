/**
 * const myVar = myFunc()
 * 
 * Uncomment the below export and comment out the individual exports to see how this affects
 * tree shaking in the root application webpack.
 */
export { fooVar } from "./utilities-foo";
export { barVar } from "./utilities-bar";

// export { barVar, fooVar } from "./utilities";
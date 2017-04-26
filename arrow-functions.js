// https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75

const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// curried with arrows
const composeMixins = (...mixins) => (
  instance = {},
  mix = pipe
) => mix(...mixins)(instance);

const x = composeMixins((v) => v + 1, (u) => u * 2);

console.log(x(1));
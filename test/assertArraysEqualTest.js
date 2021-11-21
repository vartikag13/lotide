const assertArraysEqual = require('../assertArraysEqual');

console.log(`Comparing [1, 2, 3] and [1, 2, 3]...`);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(`Comparing [1, 2, "3"] and [1, 2, 3]...`);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
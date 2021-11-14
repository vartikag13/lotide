const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: the arrays don't match 😢`);
  }
};
  
const eqArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);
console.log(`Comparing [1, 2, 3] and [1, 2, 3]...`);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
console.log(`Comparing [1, 2, "3"] and [1, 2, 3]...`);
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
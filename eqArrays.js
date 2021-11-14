const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: the arrays don't match 😢`);
  }
};

const eqArrays = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2);

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => false
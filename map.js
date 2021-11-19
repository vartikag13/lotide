//MAP FUNCTION IMPLEMENTATION
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: [${array1}]  and [${array2}] both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} and ${array2} don't match 😢`);
  }
};
  
const eqArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

//TEST ASSERTIONS
const testArr = [100, 200, 300];
assertArraysEqual(map(testArr, num => num / 10), [10, 20, 30]);
assertArraysEqual(map(testArr, num => num / 100), [11, 2, 3]);
assertArraysEqual(map(testArr, num => num * 2), [200, 400, 600]);


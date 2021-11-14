const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: the arrays don't match 😢`);
  }
};
    
const eqArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

//MIDDLE FUNCTION IMPLEMENTATION
const middle = (givenArray) => {
  let resultingArray = [];
  //only 1-2 elements in array
  if (givenArray.length <= 2) return resultingArray;
  //array with odd num. of elements
  if (givenArray.length % 2 === 1) {
    resultingArray[0] = givenArray[Math.floor(givenArray.length / 2)];
    return resultingArray;
  }
  //array with even num. of elements
  if (givenArray.length % 2 === 0) {
    resultingArray[0] = givenArray[(givenArray.length / 2) - 1]; //n-1 position
    resultingArray[1] = givenArray[givenArray.length / 2]; //n position
    return resultingArray;
  }
};

//TEST ASSERTIONS
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
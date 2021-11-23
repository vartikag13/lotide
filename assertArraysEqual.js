const eqArrays = require('./eqArrays');

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: [${array1}] and [${array2}] both the arrays match!🥳`);
    return true;
  } else {
    console.log(`❌ Assertion Failed: ${array1} and ${array2} don't match 😢`);
    return false;
  }
};
  
module.exports = assertArraysEqual;
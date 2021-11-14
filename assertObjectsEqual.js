// eqArrays Function Implementation
const eqArrays = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2);
  
// eqObjects Function Implementation
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!const eqObjects = function(object1, object2) {
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
    
  if (keys1.length !== keys2.length) {
    return false;
  }
    
  for (const itemKey of keys1) {
            
    if ((Array.isArray(object1[itemKey])) && (Array.isArray(object2[itemKey]))) {
      const result = eqArrays(object1[itemKey], object2[itemKey]);
      return result;
    }
        
    if (object1[itemKey] === object2[itemKey]) {
      continue;
    } else return false;
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✔  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

// Test the function
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
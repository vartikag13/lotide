const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

// eqArrays Function Implementation
const eqArrays = (array1, array2) => JSON.stringify(array1) === JSON.stringify(array2);
  
// eqObjects Function Implementation
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
  
// Test the function
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);
  
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
  
const ac = { a: "1", c: "3" };
assertEqual(eqObjects(ab, ac), false);
  
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
  
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);
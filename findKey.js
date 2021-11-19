const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

//CALLABCK FUNCTION

//FINDKEY IMPLEMENTATION
const findKey = (givenObj, callback) => {
  for (const key in givenObj) {
    if (callback(givenObj[key])) return key;
  }
  return undefined;
};
    

//TEST ASSERTIONS
const movieObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const result1 = findKey(movieObj, x => x.stars === 2);
assertEqual(result1,"noma");
  
const result2 = findKey(movieObj, x => x.stars === 4);
assertEqual(result2,undefined);
  
const result3 = findKey(movieObj, x => x.stars === 1);
assertEqual(result3,"Blue Hill");
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✔ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} != ${expected}`);
  }
};

//FINDKEYBYVALUE IMPLEMENTATION
const findKeyByValue = (givenObj, value) => {
  let objKeys = Object.keys(givenObj);
  for (const itemKey of objKeys) {
    if (givenObj[itemKey] === value) {
      return itemKey;
    }
  }

};


//TEST ASSERTIONS
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: the arrays don't match 😢`);
  }
};
    
const eqArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

//WITHOUT FUNCTION IMPLEMENTATION
const without = (source, itemsToRemove) => {
  let filteredArray = [];
  let k = 0;
  for (let i = 0; i < source.length; i++) {
    let foundMatch = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        foundMatch = true;
        break;
      }
    }
    if (!foundMatch) {
      filteredArray[k] = source[i];
      k++;
    }
  }
  return filteredArray;
};

//ASSERTION FOR RESULTING FILTERED ARRAY
assertArraysEqual(without([1, 2, 3], [1]),[2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  
//ORIGINAL ARRAY DOESN'T GET MODIFIED
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
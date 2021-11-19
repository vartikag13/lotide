

const takeUntil = function(array, callback) {
  const newArr = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    } else {
      newArr.push(element);
    }
  }
  return newArr;
  
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✔ Assertion Passed: [${array1}] and [${array2}] both the arrays match!🥳`);
  } else {
    console.log(`❌ Assertion Failed: ${array1} and ${array2} don't match 😢`);
  }
};
    
const eqArrays = (a1, a2) => JSON.stringify(a1) === JSON.stringify(a2);

//TEST ASSERTIONS

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
  
console.log('---');
  
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
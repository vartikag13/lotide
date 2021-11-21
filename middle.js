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

module.exports = middle;
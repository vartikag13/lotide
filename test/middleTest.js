const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST ASSERTIONs
describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.strictEqual(assertArraysEqual(middle([1]), []), true);
  });
    
  it("returns [] for [1, 2]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2]), []), true);
  });
      
  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3]), [2]), true);
  });
    
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]), true);
  });
});
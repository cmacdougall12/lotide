//import
const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

//Test letterPositions
describe("#letterPositions", () => {

  //Test Cases
  let result = letterPositions('hello');
  let result2 = letterPositions('lighthouse in the house')

  //Check results
  it("result.e should evalutate to [1]", () => {
    assert.deepEqual(result.e, [1]);
  });

  it("result2.h should evaluate to [3, 5, 15, 18]", () => {
    assert.deepEqual(result2.h, [3, 5, 15, 18]);
  });

});
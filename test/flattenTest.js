//import
const assert = require('chai').assert;
const flatten = require('../flatten');

//Test flatten
describe("#flatten", () => {

  it("[1, 2, [3, 4], 5, [6]] should flatten to [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("['1', 2, ['cam', 4], 5, [6]] should flatten to ['1', 2, 'cam', 4, 5, 6]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("['1', 2, ['cam', 4], [], [6]] should flatten to ['1', 2, 'cam', 4, 6]", () => {
    assert.deepEqual(flatten(['1', 2, ['cam', 4], [], [6]]), ['1', 2, 'cam', 4, 6]);;
  });

});
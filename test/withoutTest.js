//import
const assert = require('chai').assert;
const without = require('../without');

//test without function
describe("#without", () => {

  const array = ["hello", "world", "lighthouse"];

  it("returns ['hello', 'world', 'lighthouse']", () => {
    assert.deepEqual(without(array, []), ["hello", "world", "lighthouse"]);
  });

  it("returns ['hello', 'world']", () => {
    assert.deepEqual(without(array, ["lighthouse"]), ["hello", "world"]);
  });

  it("returns []", () => {
    assert.deepEqual(without(array, ["hello", "world", "lighthouse"]), []);
  });

  // without(array, ["lighthouse"]);
  // assertArraysEqual(words, ["hello", "world", "lighthouse"]);

});


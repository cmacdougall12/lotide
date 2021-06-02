//Import Required
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

//Test eqObject
describe("#eqObjects", () => {

  //test objects
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  const nest1 = { a: { z: 1 }, b: 2 };
  const nest2 = { a: { z: 1 }, b: 2 };
  const nest3 = { a: { y: 0, z: 1 }, b: 2 };
 



  //now see if result outputs correct quantity for each letter
  it("ab and ba are equal. Output should be true", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("ab and abc are not equal. Output should be false", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });

  it("cd and dc are equal. Output should be true", () => {
    assert.deepEqual(eqObjects(cd, dc), true);
  });

  it("cd and cd2 are not equal. Output should be false", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });

  it("nest1 and nest2 are equal. Output should be true", () => {
    assert.deepEqual(eqObjects(nest1, nest2), true);
  });

  it("nest1 and nest3 are not equal. Output should be false", () => {
    assert.deepEqual(eqObjects(nest1, nest3), false);
  });

});



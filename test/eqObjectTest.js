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

  //now see if result outputs correct quantity for each letter
  it("ab and ba are equal. Output should be true", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("ab and abc are not equal. Output should be false", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("cd and dc are equal. Output should be true", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("cd and cd2 are not equal. Output should be false", () => {
    assert.strictEqual(eqObjects(cd, cd2), false);
  });

});



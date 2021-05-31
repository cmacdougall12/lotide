//import
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');


//Test findKeyByValue
describe("#findKeyByValue", () => {

  //test object
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };

  //now see if result outputs correct quantity for each letter
  it("Should output drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("Should output undefined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
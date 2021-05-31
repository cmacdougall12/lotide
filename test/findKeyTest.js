//Import Required
const assert = require('chai').assert;
const findKey = require('../findKey');

//Test eqObject
describe("#findKey", () => {

  //test object
  const myObj = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  };

  //TEST CASES
  const result1 = findKey(myObj, x => x.stars === 2);
  const result2 = findKey(myObj, x => x.stars === 10000);

  //RESULTS
  it("result1 should output 'noma'", () => {
    assert.strictEqual(result1, 'noma');
  });


  it("result2 should output undefined", () => {
    assert.strictEqual(result2, undefined);
  });

});

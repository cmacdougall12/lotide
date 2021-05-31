//import
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

//test takeUntil function
describe("#takeUntil", () => {
  //Test Arrays
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  const data3 = ["Mo", "really", 1, 'Cam', ",", true, ["been"], "to", "-2"];
  //Test Cases
  const results1 = takeUntil(data1, x => x < 0);
  const results2 = takeUntil(data2, x => x === ',');
  const results3 = takeUntil(data3, x => x === true);

  it("returns [1, 2, 5, 7, 2]", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });

  it("returns 'Hollywood'", () => {
    assert.deepEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
  });

  it("returns ['Mo', 'really', 1, 'Cam',','']", () => {
    assert.deepEqual(results3, ["Mo", "really", 1, 'Cam', ","]);
  });

});
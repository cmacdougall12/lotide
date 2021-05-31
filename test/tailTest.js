//import tail.js
const tail = require('../tail');
//import chai library and assert function
const assert = require('chai').assert;

//test tail function in tail.js
describe("#tail", () => {

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("ensure orginal array remains unchanged. Pass array = ['Yo Yo', 'Lighthouse', 'Labs'] through the tail function and then check to see if array still equals ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const array = ['Yo Yo', 'Lighthouse', 'Labs']
    tail(array); 
    assert.deepEqual(array, array);
  });

});

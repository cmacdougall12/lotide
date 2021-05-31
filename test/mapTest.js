//import 
const assert = require('chai').assert;
const map = require('../map');


//******************TEST CASES****************
//test map function
describe("#map", () => {
  //Test Arrays
  const words = ["ground", "control", "to", "major", "tom"];
  const numbers = [1, 2, 3, 4, 5, 6];

  //Call map function using different operations
  const results1 = map(words, word => word[0]);
  const results2 = map(numbers, num => num * 2);
  const results3 = map(numbers, num => (num + 100) % 2);
  const results4 = map(words, word => word.toUpperCase());

  //check results with assert, deep equal
  it("returns ['g', 'c', 't', 'm', 't'])", () => {
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });

  it("returns [2, 4, 6, 8, 10, 12]'", () => {
    assert.deepEqual(results2, [2, 4, 6, 8, 10, 12]);
  });

  it("returns [1, 0, 1, 0, 1, 0]", () => {
    assert.deepEqual(results3, [1, 0, 1, 0, 1, 0]);
  });

  it("returns ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']", () => {
    assert.deepEqual(results4, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
  });

});

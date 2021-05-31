//import 
const assert = require('chai').assert;
const countOnly = require('../countOnly');

//test countLetteres function in countLetters.js
describe("#head", () => {

  //test array
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  //input firstNames into function and define other required parameters
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  //now see if results output correctly
  it("Jason appears once in firstNames array. Output should = 1", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("Karima does not appear in firstNames array. Output should = undefined", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("Karima appears twice in firstNames array. Output should = 2", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("Agouhanna does not appear in firstNames array. Output should = undefined", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });

});
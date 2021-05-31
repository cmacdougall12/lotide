//import 
const assert = require('chai').assert;
const countLetters = require('../countLetters');

//test countLetteres function in countLetters.js
describe("#head", () => {
  //test string
  let result = countLetters("lighthouse in the house");
  
  //now see if result outputs correct quantity for each letter
  it("l appears once in the string 'lighthouse in the house'. Should output 1", () => {
    assert.strictEqual(result.l, 1);
  });

  it("i appears twice in the string 'lighthouse in the house'. Should output 2", () => {
    assert.strictEqual(result.i, 2);
  });

  it("g appears once in the string 'lighthouse in the house'. Should output 1", () => {
    assert.strictEqual(result.g, 1);
  });

  it("h appears 4 times in the string 'lighthouse in the house'. Should output 4", () => {
    assert.strictEqual(result.h, 4);
  });

  it("t appears once in the string 'lighthouse in the house'. Should output 1", () => {
    assert.strictEqual(result.t, 2);
  });

  it("o appears twice in the string 'lighthouse in the house'. Should output 2", () => {
    assert.strictEqual(result.o, 2);
  });

  it("u appears twice in the string 'lighthouse in the house'. Should output 2", () => {
    assert.strictEqual(result.u, 2);
  });

  it("s appears twice in the string 'lighthouse in the house'. Should output 2", () => {
    assert.strictEqual(result.s, 2);
  });


  it("e appears 3 times in the string 'lighthouse in the house'. Should output 3", () => {
    assert.strictEqual(result.e, 3);
  });

  it("n appears once in the string 'lighthouse in the house'. Should output 1", () => {
    assert.strictEqual(result.n, 1);
  });

});


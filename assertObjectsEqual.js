//assertObjectsEqual*********
//output to the console the objects in question and whether or not they are equal
const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; ``
  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)} `)
  }
};

module.exports = assertObjectsEqual;

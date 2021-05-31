//require eqArrays for assertArraysEqual
const eqArrays = require('./eqArrays');


//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅  Assertion Passed (Arrays are equal): [${arr1}] === [${arr2}]`);
  }
  else {
    return console.log(`🛑🛑🛑 Assertion Failed (Arrays are not equal): [${arr1}] !== [${arr2}]`)
  }
};

module.exports = assertArraysEqual;



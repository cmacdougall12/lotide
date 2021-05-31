//import middle to test
const middle = require('../middle')

//require assertArraysEqual and eqArrays to test
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');



//TEST CASES
//short arrays
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
//odd in length
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//even in length
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

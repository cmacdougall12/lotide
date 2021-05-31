//import eqArrays.js and assertEquals.js to test the function eqArrays
const assertArraysEqual = require('../assertArraysEqual');

//test cases
//equal arrays, just numbers
assertArraysEqual([1, 2, 3], [1, 2, 3]);
//non-equal arrays, just numbers
assertArraysEqual([1, 2, 4], [1, 2, 3]);
//equal arrays for what length they have in common (ie.1,2,3) with an extra value added to one
assertArraysEqual([1, 2, 3, 5], [1, 2, 3]);
//equal arrays, but one value is a string. Should evaluate to false since different data type
assertArraysEqual([1, 2, '3'], [1, 2, 3]);
//equal arrays, but all strings
assertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
//equal arrays, but one value is a number. Should evaluate to false since different data type
assertArraysEqual(['1', '2', '3'], ['1', '2', 3]);
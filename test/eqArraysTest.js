//import tail.js and assertEquals.js to test the function tail
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//test cases
//equal arrays, just numbers
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
//non-equal arrays, just numbers
assertEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
//equal arrays for what length they have in common (ie.1,2,3) with an extra value added to one
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3]), false);
//equal arrays, but one value is a string. Should evaluate to false since different data type
assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), false);
//equal arrays, but all strings
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
//equal arrays, but one value is a number. Should evaluate to false since different data type
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

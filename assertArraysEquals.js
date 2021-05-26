//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅  Assertion Passed: [${arr1}] === [${arr2}]`);
  }
  else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`)
  }
};

//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop
const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

//test cases
//equal arrays, just numbers
AssertArraysEqual([1, 2, 3], [1, 2, 3]);
//non-equal arrays, just numbers
AssertArraysEqual([1, 2, 4], [1, 2, 3]);
//equal arrays for what length they have in common (ie.1,2,3) with an extra value added to one
AssertArraysEqual([1, 2, 3, 5], [1, 2, 3]);
//equal arrays, but one value is a string. Should evaluate to false since different data type
AssertArraysEqual([1, 2, '3'], [1, 2, 3]);
//equal arrays, but all strings
AssertArraysEqual(['1', '2', '3'], ['1', '2', '3']);
//equal arrays, but one value is a number. Should evaluate to false since different data type
AssertArraysEqual(['1', '2', '3'], ['1', '2', 3]);



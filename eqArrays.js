// Assert Equals - check to see if expected output is determined
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ ✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`❌❌❌❌ ${actual} !== ${expected}`);
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



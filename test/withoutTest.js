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


//TEST FUNCTIONS
//define a source array called words
const words = ["hello", "world", "lighthouse"];
//test cases
//empty array
without(words, []);
//remove lighthouse
without(words, ["lighthouse"]);

//confirm that words array is not being modified to confirm original array has not changed
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


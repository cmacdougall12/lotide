
//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    return console.log(`✅✅✅  Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${arr1}] !== [${arr2}]`);
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

//******************TEST CASES****************
//Test Arrays
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

//Call map function using different operations
const results1 = map(words, word => word[0]);
const results2 = map(numbers, num => num * 2);
const results3 = map(numbers, num => (num + 100) % 2);
const results4 = map(words, word => word.toUpperCase());


//Check with assert arrays equal function
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2, 4, 6, 8, 10, 12]);
assertArraysEqual(results3, [1, 0, 1, 0, 1, 0]);
assertArraysEqual(results4, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);

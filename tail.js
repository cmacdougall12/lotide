//function to determine tail of array
const tail = function(array) {
  let myArray = [];

  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }

  return myArray;
};

// Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);

//Test case for the returned array elements
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

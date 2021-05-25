//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not
const assertArraysEqual = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return console.log(`❌The two arrays ${arr1} and ${arr2} given are not equal❌`);
      }
    } return console.log(`✅ The two arrays ${arr1} and ${arr2} given are equal✅ `);
  } else {
    return console.log(`❌The two arrays ${arr1} and ${arr2} given are not equal❌ `);
  }
};

//output new array based on the orginal source, and the values to be removed (stored in toRemove)
const without = function(source, toRemove) {
  let filtered = [];

  for (let i = 0; i < source.length; i++) {
    let toAdd = true;
    for (let j = 0; j < toRemove.length; j++) {
      if (source[i] === toRemove[j]) {
        toAdd = false;
      }
    }
    if (toAdd === true) {
      filtered.push(source[i]);
    }
  }
  return console.log('Filtered Array: ' + filtered);
};

//TEST FUNCTIONS
//define a source array called words
const words = ["hello", "world", "lighthouse"];
//test cases
//empty array
without(words, []);
//remove lighthouse
without(words, ["lighthouse"]);

//confirm that words array is not being modified
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

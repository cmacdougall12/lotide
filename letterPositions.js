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

//function takes in a given string and outputs the all indexes of every letter that appears in the string
const letterPositions = function(sentence) {
  const count = {};
  for (let i = 0; i < sentence.length; i++) {
    //ignore white space
    if (sentence[i] === ' ') {
      continue;
      //otherwise add to count object
    } else {
      //create an array value for the key if not made already
      if (count[sentence[i]] === undefined) {
        count[sentence[i]] = [];
      }
      //add index to count
      count[sentence[i]].push(i);
    }
  }
  return count;
};




//print and confirm results
let result = letterPositions('hello');
console.log(result)
let result2 = letterPositions('lighthouse in the house')
console.log(result2)

//test cases for 1 and 2
assertArraysEqual(result.e, [1]);
assertArraysEqual(result2.h, [ 3, 5, 15, 18 ]);



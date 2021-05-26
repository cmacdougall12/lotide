//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not
const AssertArraysEqual = function(arr1, arr2) {
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

//function will retrieve middle elements of a given array
const middle = function(array) {
  let midArray = [];
  let i = Math.floor(array.length / 2);
  //empty, length of 1 or 2
  if (array.length < 3) {
    return midArray;
    //even
  } else if (array.length % 2 === 0) {
    midArray = array.slice(i - 1, i + 1);
    //odd case
  } else {
    midArray = array.slice(i, i + 1);
  }
  return midArray;
};

//TEST CASES
//short arrays
AssertArraysEqual(middle([1]), []);
AssertArraysEqual(middle([1, 2]), []);
//odd in length
AssertArraysEqual(middle([1, 2, 3]), [2]);
AssertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
//even in length
AssertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
AssertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);



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

//function will take an array and then remove any nested arrays. (1 level nested arrays)
const flatten = function(array) {
  let flatArray = [];
  //loop through array and identify any nested arrays
  for (let ele of array) {
    //if nested array push the sub elements to the flat array
    if (Array.isArray(ele) === true) {
      for (let subEle of ele) {
        flatArray.push(subEle);
      }
      //otherwise push the element to the flatt array
    } else {
      flatArray.push(ele);
    }
  }
  return flatArray;
};

//TEST CASES

//just numbers
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
//with strings
assertArraysEqual(flatten(['1', 2, ['cam', 4], 5, [6]]),['1', 2, 'cam', 4, 5, 6]);
//empty nested array
assertArraysEqual(flatten(['1', 2, ['cam', 4], [], [6]]),['1', 2, 'cam', 4, 6]);
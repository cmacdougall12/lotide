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
AssertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
//with strings
AssertArraysEqual(flatten(['1', 2, ['cam', 4], 5, [6]]),['1', 2, 'cam', 4, 5, 6]);
//empty nested array
AssertArraysEqual(flatten(['1', 2, ['cam', 4], [], [6]]),['1', 2, 'cam', 4, 6]);
//Take Until Function*****************
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

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


//TEST CASES********************
//Test Arrays
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["Mo", "really", 1, 'Cam', ",", true, ["been"], "to", "-2"];
//Test Cases
const results1 = takeUntil(data1, x => x < 0);
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data3, x => x === true);

// Call Assert Array Equals to confirm correct output
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(results3, ["Mo", "really", 1, 'Cam', ","]);



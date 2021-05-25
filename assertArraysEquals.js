
//Check if two arrays are equivalent
//confirm that arrays have same length and then compare value by value with for loop.
//return console.log statement confirming if they are the same or not
const AssertEqArrays = function(arr1, arr2) {
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


//test cases
//equal arrays, just numbers
AssertEqArrays([1, 2, 3], [1, 2, 3]);
//non-equal arrays, just numbers
AssertEqArrays([1, 2, 4], [1, 2, 3]);
//equal arrays for what length they have in common (ie.1,2,3) with an extra value added to one
AssertEqArrays([1, 2, 3, 5], [1, 2, 3]);
//equal arrays, but one value is a string. Should evaluate to false since different data type
AssertEqArrays([1, 2, '3'], [1, 2, 3]);
//equal arrays, but all strings
AssertEqArrays(['1', '2', '3'], ['1', '2', '3']);
//equal arrays, but one value is a number. Should evaluate to false since different data type
AssertEqArrays(['1', '2', '3'], ['1', '2', 3]);



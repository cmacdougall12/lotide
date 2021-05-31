//eqArrays*********
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

//eqObjects*********
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//check length
//loop through keys of object 1 and confirm the values of obj1 and obj2 are the same. If not return false
//if the value of the key is an array pass to the eqArray function and return the result (true or false)

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {

    for (key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) == true) {
        return eqArrays(object1[key], object2[key])
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

//assertObjectsEqual*********
//output to the console the objects in question and whether or not they are equal
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; ``
  if (eqObjects(actual, expected) === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `)
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)} `)
  }
};



//TEST CASES*********
//use the assert equals function to confirm that expected result is achieved

//primitive tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(ba, abc);

//with arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(dc, cd2);


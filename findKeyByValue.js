// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ ✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`❌❌❌❌ ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, valueToFind) {
  for (let key in obj) {
    if (obj[key] === valueToFind) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

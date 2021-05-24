
//determine head of array
const head = function(array){
  return array[0]
}
//check to see if it equals given condition
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅ ✅ ✅ ✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`❌❌❌❌ ${actual} !== ${expected}`)
  }
};

// TEST CODE
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
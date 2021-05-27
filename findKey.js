// Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

//findKey
//scan object and return the first key for which the callback returns true
const findKey = (obj, callback) => {
  for (let ele in obj) {
    if (callback(obj[ele]) === true) {
      return ele;
    }
  }
};

//Data
const myObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

//TEST CASES
const result1 = findKey(myObj, x => x.stars === 2);
const result2 = findKey(myObj, x => x.stars === 10000);

//ASSET EQUALS
assertEqual(result1,'noma');
assertEqual(result2,undefined);



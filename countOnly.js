// Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

//function will take an array and return a object counting the number of times an element appears and if it is in the itemsToCount object
const countOnly = function(allItems, itemsToCount) {
  let countObj = {};
  //loop through array
  for (ele of allItems) {
    //compare to items to count object
    for (key in itemsToCount) {
      //if element to the array is equal to the key add the key-value to the countObj object 
      if (ele === key && itemsToCount[key] === true) {
        countObj[key] = (countObj[key] || 0) + 1
      }
    }
  }
  //return the final countObj
  return countObj
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
// Assert Equals
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    return console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

//function will count how many time a letter appears in a string
const countLetters = function(string) {
  const count = {};
  for (let letter of string) {
    //ignore white space
    if (letter === ' ') {
      continue;
      //otherwise add to count object
    } else {
      count[letter] = (count[letter] || 0) + 1;
    }
  }
  return count;
};

let result = countLetters("lighthouse in the house");

//Check result with assert equals
assertEqual(result.l, 1);
assertEqual(result.i, 2);
assertEqual(result.g, 1);
assertEqual(result.h, 4);
assertEqual(result.t, 2);
assertEqual(result.o, 2);
assertEqual(result.u, 2);
assertEqual(result.s, 2);
assertEqual(result.e, 3);
assertEqual(result.n, 1);


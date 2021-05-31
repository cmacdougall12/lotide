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

module.exports = countLetters;


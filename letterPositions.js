//function takes in a given string and outputs the all indexes of every letter that appears in the string
const letterPositions = function(sentence) {
  const count = {};
  for (let i = 0; i < sentence.length; i++) {
    //ignore white space
    if (sentence[i] === ' ') {
      continue;
      //otherwise add to count object
    } else {
      //create an array value for the key if not made already
      if (count[sentence[i]] === undefined) {
        count[sentence[i]] = [];
      }
      //add index to count
      count[sentence[i]].push(i);
    }
  }
  return count;
};

module.exports = letterPositions;



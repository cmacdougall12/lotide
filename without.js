//output new array based on the orginal source, and the values to be removed (stored in toRemove)
const without = function(source, toRemove) {
  let filtered = [];

  for (let i = 0; i < source.length; i++) {
    let toAdd = true;
    for (let j = 0; j < toRemove.length; j++) {
      if (source[i] === toRemove[j]) {
        toAdd = false;
      }
    }
    if (toAdd === true) {
      filtered.push(source[i]);
    }
  }
  return filtered;
};

module.exports = without;

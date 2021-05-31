const findKeyByValue = function(obj, valueToFind) {
  for (let key in obj) {
    if (obj[key] === valueToFind) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

//findKey
//scan object and return the first key for which the callback returns true
const findKey = (obj, callback) => {
  for (let ele in obj) {
    if (callback(obj[ele]) === true) {
      return ele;
    }
  }
};

module.exports = findKey;

//function will take an array and then remove any nested arrays. (1 level nested arrays)
const flatten = function(array) {
  let flatArray = [];
  //loop through array and identify any nested arrays
  for (let ele of array) {
    //if nested array push the sub elements to the flat array
    if (Array.isArray(ele) === true) {
      for (let subEle of ele) {
        flatArray.push(subEle);
      }
      //otherwise push the element to the flatt array
    } else {
      flatArray.push(ele);
    }
  }
  return flatArray;
};

module.exports = flatten;
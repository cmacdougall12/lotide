//function will retrieve middle elements of a given array
const middle = function(array) {
  let midArray = [];
  let i = Math.floor(array.length / 2);
  //empty, length of 1 or 2
  if (array.length < 3) {
    return midArray;
    //even
  } else if (array.length % 2 === 0) {
    midArray = array.slice(i - 1, i + 1);
    //odd case
  } else {
    midArray = array.slice(i, i + 1);
  }
  return midArray;
};


module.exports = middle;



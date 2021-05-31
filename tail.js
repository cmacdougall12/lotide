//function to determine tail of array
const tail = function(array) {
  let myArray = [];

  for (let i = 1; i < array.length; i++) {
    myArray.push(array[i]);
  }

  return myArray;
};

module.exports = tail;
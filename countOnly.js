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

module.exports = countOnly;
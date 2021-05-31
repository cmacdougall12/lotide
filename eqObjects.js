//eqObjects*********
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
//check length
//loop through keys of object 1 and confirm the values of obj1 and obj2 are the same. If not return false
//if the value of the key is an array pass to the eqArray function and return the result (true or false)

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {

    for (key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) == true) {
        return eqArrays(object1[key], object2[key])
      }
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
};

module.exports = eqObjects;

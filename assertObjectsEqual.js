//returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1); // assigns array of keys from objects1 to object1Keys
  const object2Keys = Object.keys(object2); // assigns array of keys from objects2 to object2Keys

  if (object1Keys.length !== object2Keys.length) { // Checks the length of two objects and returns false if they are not.
    return false;
  }

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {  // Checks if there is an array in both objects. Returns false if not.
      if (!eqArrays(object1[key], object2[key])) { // Checks if the two arrays are equal. Returns false if not.
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) { // Checks if values are not equal. Returns false if they are not.
        return false;
      }
    }
  }
  return true;
};


const assertObjectEqual = function(actual, expected) { //test case for checking if objects are equal and dispaly objects
  const inspect = require('util').inspect; // module to display objects
  const actualKey = Object.keys(actual); //keys for actual and expected objects.
  const expectedKey = Object.keys(expected);

  if (actualKey.length === expectedKey.length) { //Checks if the lengths of the two objects are equal
    for (const key of actualKey) { //iterate through keys of the objects
      if (actual[key] === expected[key]) { // checks if values are equal.
        console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
        return;
      }
    }
  }

  console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red"};
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectEqual(shirtObject, anotherShirtObject);


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectEqual(shirtObject, longSleeveShirtObject);

module.exports = assertObjectsEqual;
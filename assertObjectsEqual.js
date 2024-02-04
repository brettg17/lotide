//returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1); // assigns array of keys from objects1 to object1Keys
  const object2Keys = Object.keys(object2); // assigns array of keys from objects2 to object2Keys

  if (object1Keys.length !== object2Keys.length) { // Checks the length of two objects and returns false if they are not.
    return false;
  }

  for (const key of object1Keys) {
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {  // Checks if there is an array in both objects. Returns false if not.
      if(!eqArrays(object1[key], object2[key])) { // Checks if the two arrays are equal. Returns false if not.
      return false;
      }
    } else { 
      if (object1[key] !== object2[key]) { // Checks if values are equal. Returns true if they are.
        return false;
      }
    }
  }
  return true;
};


const assertObjectEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const actualKey = Object.keys(actual);
  const expectedKey = Object.keys(expected);

  if (actualKey.length === expectedKey.length){
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red"};
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectEqual(shirtObject, anotherShirtObject);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertObjectEqual(shirtObject, longSleeveShirtObject);

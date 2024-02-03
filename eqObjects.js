// check if elements are same length. return false if not/
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
    }

  //iteratre through each character of an array. return false if each element is not identical.
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
// else: returns true
  return true;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  return actual + expected;

};

//returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1); // assigns array of keys from objects1 to object1Keys
  const object2Keys = Object.keys(object2); // assigns array of keys from objects2 to object2Keys

  if (object1Keys.length !== object2Keys.length) { // Checks the length of two objects and returns false if they are not.
    return false;
  }

  for (const key of object1Keys) {
    if(Array.isArray(object1[key] !== Array.isArray(object2[key]))) {  // Checks if there is an array in both objects. Returns false if not.
      if(eqArrays(!object1[key], object2[key])) { // Checks if the two arrays are equal. Returns false if not.
      return false;
    }
  } else { 
      if (object1[key] === object2[key]) { // Checks if values are equal. Returns true if they are.
        return true;
      }
    }
  }
  return true;
};


const shirtObject = { color: ["red", "blue"], size: "medium" };
const anotherShirtObject= { size: "medium", color: ["red", "blue"] };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: ["red", "blue"], sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);





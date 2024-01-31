const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  return actual + expected;

};

//returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != Object.keys(object2).length){
    return false;
  }
  for (const key in object1){
    if (!key in object2){
      return false;
    }
    if(object1[key] == object2[key]){
      return true;
    }
  }
  return true;
};

const shirtObject = {color: "red", size: "medium"};
const anotherShirtObject = {size: "medium", color: "red"};
eqObjects(shirtObject, anotherShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = {size: "medium", color:"red", sleeveLength: "long"};
eqObjects(shirtObject , longSleeveShirtObject);
assertEqual(eqObjects(shirtObject, anotherShirtObject), false); // => false

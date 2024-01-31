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
};



//returns true if both objects have identical keys with identical values.
//Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length != Object.keys(object2).length){
    return false;
  }
  for (const key in object1){
    if (!(key in object2) || object1[key] !== object2[key]){
      return false;
    }

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key] === object2[key])) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  return true;
};

const multiColorShirtObject = {color: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", color: ["red", "blue"]};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {size: "medium", color:["red", "blue"], sleeveLength: "long"};
eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

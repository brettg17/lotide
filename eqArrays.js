/*
To do:
- copy source file and paste to the top of eqArrays.js.
- implement fucntion eqArrays.js. 
  - takes two arrays and returns true or false
  - use assertEqual to write test cases for various scenarios
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  return actual + expected;
};

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
// Test cases


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass


assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass


module.exports = eqArrays;

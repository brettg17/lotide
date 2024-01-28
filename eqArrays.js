/*
To do:
- copy source fil and paste to the top of eqArrays.js.
- implement fucntion eqArrays.js. 
  - takes twoa rrays and returns true or false
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

// check if elements are same length
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
    }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }

  return true;
}
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [1, 2, 5, 3])); // => false



//Tester Code:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should Pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), true); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should fail
assertEqual(eqArrays(["test","this"], ["test", "this"]), true); // => what will a string do?????


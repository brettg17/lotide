/*
to do:
- import assertArraysEqual and eqArrays functions\
- create function "flatten"
  - takes in an array containing elements including nested arrays of elements
   -return "flattened" version of array

*/

// check if elements are same length. return false if not
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


//uses eqArrays function to iterate through array and then takes own arguments and displays
//whether assertion has passed or failed.
const assertArraysEqual = function (actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);

  }

}
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [1, 2, 5, 3]); // => false


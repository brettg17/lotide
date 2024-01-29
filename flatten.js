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
};


//uses eqArrays function to iterate through array and then takes own arguments and displays
//whether assertion has passed or failed.
const assertArraysEqual = function (actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);

  }

};

const flatten = function(arr){
  let flattenedArray = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      for (let inner of i) {
        flattenedArray.push(inner);
      }
    } else {
      return flattenedArray;
    }
  }

};
const flattenedArray = flatten([1, [2, 3], [4, [5, 6]]]);
assertArraysEqual(flattenedArray, [1, 2, 3, 4, 5, 6]);

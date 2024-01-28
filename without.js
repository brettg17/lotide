/*
to do:
- copy assertArraysEqual function
- copy eqArrays function
- implement without
    - returns a subset of a given array
    - removes unwanted items
    - functions takes in soruce array and a itemsToRemove array. 
    - returns a new array with only those elemts from source that are not in itemsToRemove array    

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
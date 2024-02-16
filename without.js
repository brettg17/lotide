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

//creates without function: comapres 1st array with 2nd. whatever elements that are 
//in 1st array but are not in 2nd will be pushed into a new array called newArray.
const without = function (source, itemsToRemove) {
  let newArray = [];

// iterates through source. if item is not in itemsToRemove. it gets pushed to newArray
  for (let i of source) {
    if (!itemsToRemove.includes(i)) {
      newArray.push(i);
    }
  }

  return newArray

}

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2,3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

module.exports = without;
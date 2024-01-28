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

const assertArraysEqual = function (expected, actual) {
  if(eqArrays[1] = eqArrays[2]) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (eqArrays[1] = eqArrays[2]) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);

  }

}
assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => true
assertArraysEqual([1, 2, 3], [1, 2, 5, 3], true); // => false
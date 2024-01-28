/*
To do:
- copy source file and paste to the top of eqArrays.js.
- implement fucntion eqArrays.js. 
  - takes two arrays and returns true or false
  - use assertEqual to write test cases for various scenarios
*/


// function to see if the ouput is the same as expected.
// assertion passed: if true == true and false == false
//assertion failed: if true != true and false != false
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [1, 2, 5, 3])); // => false



//Tester Code:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should Pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), true); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should fail
assertEqual(eqArrays(["test","this"], ["test", "this"]), true); // => what will a string do?????


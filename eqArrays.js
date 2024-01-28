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

//TEST CODE
console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
console.assert(assertEqual(1, 1));


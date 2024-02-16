// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {

  if (actual === expected) { // tests to see if a functions actual return is equal to what is expected. assertion passed if true
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {// tests to see if a functions actual return is not equal to what is expected. assertion fail if they are not equal
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
 return actual + expected;

};


module.exports = assertEqual;
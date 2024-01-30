const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
  return actual + expected;

};


const findKeyByValue = function(genre, show){

}

const bestTVShowsByGenre = {
  sci_fi: "the Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};



console.log()
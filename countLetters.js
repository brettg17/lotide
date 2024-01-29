/*
To do:
- create function called: coubtLetters
- takes in a sentennce (as a string) And then returnsa count of each of the letters in that sentence
- ex: countLetters("LHL") should return results indicating that L appears twice, and H once
- returns object with letter: amount of times in string

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
//console.assert(assertEqual("Lighthouse Labs", "Bootcamp"));
//console.assert(assertEqual(1, 1));

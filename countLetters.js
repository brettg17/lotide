/*
To do:
- create function called: countLetters
- takes in a sentennce (as a string) And then returns a count of each of the letters in that sentence
- ex: countLetters("LHL") should return results indicating that L appears twice, and H once
- returns object with letter: amount of times in string

*/

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(chars) {
  const results = {};

  for (let i = 0; i < chars.length; i++) {
    let total = 0;
    for (let j = 0; j < chars.length; j++) {
      if (chars[i] === chars[j]) {
        total++;
      }

    }
    if (total > 0) {
      results[chars[i]] = total;
    }
  }
  return results;
};

const testString = countLeters("lighthouse");
assertEqual(result["l"], 1);
assertEqual(result["i"], 1);
assertEqual(result["g"], 1);
assertEqual(result["h"], 2);
assertEqual(result["t"], 1);
assertEqual(result["o"], 1);
assertEqual(result["u"], 1);
assertEqual(result["s"], 1);
assertEqual(result["e"], 1);

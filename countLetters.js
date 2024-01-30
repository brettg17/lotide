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

const string = countLetters("lighthouse");
assertEqual(string["l"], 1);
assertEqual(string["i"], 1);
assertEqual(string["g"], 1);
assertEqual(string["h"], 2);
assertEqual(string["t"], 1);
assertEqual(string["o"], 3);
assertEqual(string["u"], 1);
assertEqual(string["s"], 4);
assertEqual(string["e"], 1);

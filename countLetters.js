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
  const results = {}; // create empty object

  for (let i = 0; i < chars.length; i++) { //iterate through each character in array.
    let total = 0; 
    for (let j = 0; j < chars.length; j++) { // iterate through array again to count occurances of current character
      if (chars[i] === chars[j]) {
        total++; // if current character matches the character at index j add total count
      }
    }
    if (total > 0) { //if total count of the current charactrer is greater than 0 
      results[chars[i]] = total;// Add an entry to results object. Current character is the key and its total count is the value
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

module.exports = countLetters;
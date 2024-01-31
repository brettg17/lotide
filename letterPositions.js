/*
to do:
- implement function called letterPositions
- step 1: define objecct structure to return
- step 2: write a test
  - copy in assertArraysEqual and eqArrays function into file
- step 3: implement the function
  - implement the logic of the function
- push work and mark activity compelete
*/

const letterPositions = function(sentence) { //create letterPositions function
  const results = {}; //create empty object called results
  // logic to upate results here
  for (let i = 0; i < sentence.length; i++) { // iterate through sentence
    let total = sentence[i]; // store character in variable total
    if (total !== ' ') { //if character is not a space
      if(!results[total]) { // if not a key in results object
        results[total] = []; // create and empty array as the value for that character key in the results object
      }

      results[total].push(i) // push position of character into array associated with character key
    }
    
  }
  return results;
}

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

const obj = letterPositions("lighthouse in the house");
assertArraysEqual(obj["l"], [0])
assertArraysEqual(obj["i"], [1, 11])
assertArraysEqual(obj["g"], [2])
assertArraysEqual(obj["h"], [3, 5, 15, 18])
assertArraysEqual(obj["t"], [4, 7])
assertArraysEqual(obj["o"], [6, 19])
assertArraysEqual(obj["u"], [7, 20])
assertArraysEqual(obj["s"], [8, 21])
assertArraysEqual(obj["e"], [9, 16, 22])
assertArraysEqual(obj["n"], [12])




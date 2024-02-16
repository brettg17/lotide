/*
to do:
function will take in two arguments
- an array that must be mapped
- callback function
map function will return an array based on the reults of the callback function

*/

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

const assertArraysEqual = function (actual, expected) {
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);

  }

}

const words = ["pizza", "taco", "ramen", "sushi", "pho"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


//test case
const numbers = [1, 2, 3];
const expected = [2, 4, 6]; 

const double = number=>number* 2;
const result = map(numbers, double);
assertArraysEqual(result, expected);

module.exports = map;

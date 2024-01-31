/*
To do: 
Import asserEqual function for testing
create assertEqual function
take value and compare it to key
if a match: Assertion Passed
if value not in object: return undefined
*/


const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }

};


const findKeyByValue = function(genre, show){ // create function that takes in two arguments
  for (const key in genre) { //loop through 1st argument
    if (show === genre[key]) { //if value matches the key
      return key; // return the key
    }
  }
  return undefined; //if value does not match the key return undefined
}

const bestTVShowsByGenre = {
  sci_fi: "the Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That 70's Show"), undefined);



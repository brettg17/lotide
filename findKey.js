const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }

};
// take obj and callback as arguments. scans object and returns key when
//truthy condition is met. if no key is found. return undefined.
const findKey = function(obj, callback) {
  for (const key in obj) { //iterate through object
    if (callback(obj[key])) { // calls callback with obj[key] argument, checks truthy.
      return key; //return the object key if condition is met.
    }
  }
  return undefined;// return undefined if condition is not met.

};


object1 = ({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
});

const results = findKey(object1, x => x.stars === 2); // => "noma"
console.log(results);

const results2 = findKey(object1, x => x.stars > 5); // => undefined
console.log(results2);

assertEqual(results, "noma");
assertEqual(results2, undefined);
assertEqual(results, "nemo");
assertEqual(results2, "Akaleri");


module.exports = findKey;
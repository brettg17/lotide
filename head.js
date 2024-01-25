const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};


const head = function(arr) {
  return arr[0];
};

//TEST CODE
assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Bootcamp");
assertEqual(head([7, 6, 5, 6, 23]), 2);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
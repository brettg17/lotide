const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

//TEST CODE
assertEqual(tail(["Lighthouse Labs", "Bootcamp"]).toString(), ["Bootcamp"].toString());
assertEqual(tail([7, 6, 5, 6, 23]).toString(), [6, 5, 6, 23].toString());
assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());
assertEqual(tail([5, 6, 7]).toString(), [6].toString());
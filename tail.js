
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

//TEST Case 1
assertEqual(tail(["Lighthouse Labs", "Bootcamp"]).toString(), ["Bootcamp"].toString());
assertEqual(tail([7, 6, 5, 6, 23]).toString(), [6, 5, 6, 23].toString());
assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());
assertEqual(tail([5, 6, 7]).toString(), [6].toString());

// Test Case 2: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

//Tester Code:
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should Pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), false); // => should pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 5]), true); // => should fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // => should fail
assertEqual(eqArrays(["test","this"], ["test", "this"]), true); // => what will a string do?????


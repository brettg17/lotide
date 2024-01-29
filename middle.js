/*
to do:
- create function called middle
  - take array and return middle most element
  - if only one element or two elements return empty array
  - odd number of elements return single middle element
  - even arrays (4 or more) return the two middle elements
*/




// check if elements are same length. return false if not
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

const middle = function(array) {
  const length = array.length;
  if (length <= 2) {
    return [];
  } else if (length % 2 === 1){
    const middle = Math.floor(length / 2);
    return [array[middle]];
  } else {
    const middleOne = length / 2 - 1;
    const middleTwo = length / 2
    return [array[middleOne], array[middleTwo]];
  }
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 10, 12, 17, 45, 67, 3, 4]), [17]);
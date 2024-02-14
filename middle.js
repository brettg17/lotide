/*
to do:
- create function called middle
  - take array and return middle most element
  - if only one element or two elements return empty array
  - odd number of elements return single middle element
  - even arrays (4 or more) return the two middle elements
*/
const middle = function(array) {
  let arrLength = array.length
  const middle = Math.floor(arrLength / 2);
  const middleTwo = arrLength / 2 - 1;

  if (arrLength % 2 === 1) {
    return [array[middle]];
  }
  else if(arrLength <= 2) {
    return [];
  }
  else {
    return [array[middleTwo], array[middle]];
  }

  }
console.log(middle([1, 2, 3, 4, 5, 4]))

module.exports = middle;
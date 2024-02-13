/*
to do:
- create function called middle
  - take array and return middle most element
  - if only one element or two elements return empty array
  - odd number of elements return single middle element
  - even arrays (4 or more) return the two middle elements
*/





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


module.exports = middle;
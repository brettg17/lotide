const tail = function(arr) {
  newArr = arr.slice(1) // creates new array excluding first element of original array
  return newArr;
};


module.exports = tail;
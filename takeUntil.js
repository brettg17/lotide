const takeUntil = function(array, callback){
  const results = []
  for (let item of array) {
    if (callback(item)) { //call "callback" for item
      return results;// once returned true, display elements until that point.
    };
    results.push(item); //whenever callback returns false, continue taking elements
  };
  return array; // if truthy is never returned, return array.
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
 
module.exports = takeUntil;
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2]), [2]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 10, 12, 17, 45, 67, 3, 4]), [17]);
assertArraysEqual(middle([1, 2, 10, 12, 17, 45, 67, 3, 4]), [45]);
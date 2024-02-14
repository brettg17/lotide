const assert = require('chai').assert;
const tail = require('../tail')


describe('#tail', () =>{
  it("returns 'Bootcamp' for ['Lighthouse Labs', 'Bootcamp']", () => {
    assert.deepEqual(tail(['Lighthouse Labs', 'Bootcamp']), ['Bootcamp']);
  });

  it("returns '6, 5, 6, 23' for [7, 6, 5, 6, 23]", () => {
    assert.deepEqual(tail(['Lighthouse Labs', 'Bootcamp']), ['Bootcamp']);
  });
});





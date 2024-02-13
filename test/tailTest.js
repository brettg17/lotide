const tail = require('../tail')
const assertEqual = require('../assertEqual')

//TEST CODE
assertEqual(tail(["Lighthouse Labs", "Bootcamp"]).toString(), ["Bootcamp"].toString());
assertEqual(tail([7, 6, 5, 6, 23]).toString(), [6, 5, 6, 23].toString());
assertEqual(tail([5, 6, 7]).toString(), [6, 7].toString());
assertEqual(tail([5, 6, 7]).toString(), [6].toString());



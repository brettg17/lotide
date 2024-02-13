const head = require('../head')
const assertEqual = require('../assertEqual')


//TEST CODE
assertEqual(head(["Lighthouse Labs", "Bootcamp"]), "Bootcamp");
assertEqual(head([7, 6, 5, 6, 23]), 2);
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


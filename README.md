# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @brettg17/lotide`

**Require it:**

`const _ = require('@brettg17/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: tests whether two arrays are equal or not 
* `assertEqual(actual, expected)`: tests if a functions actual return is equal to the expected
* `assertObjectEqual(actual, expected)`: test whether two objects are equal
* `countLetters(chars)`: counts letters in a string
* `countOnly(allItems, itemsToCount)`: checks how many times and item is in an array. returns undefined if not
* `eqArrays(arrayOne, arrayTwo)`: tests to see if two arrays are equal 
* `eqObjects(object1, object2)`: tests to see if keys and values in an object are equal
* `findKey(obj, callback)`: uses callback and returns true if truthy value is meant. if not return undefined
* `findKeyByValue(genre, show)`: finds key by value. if value/key is not in the object return undefined
* `countOnly(allItems, itemsToCount)`: checks how many times and item is in an array. returns undefined if not
* `flatten(arr)`: takes an array with elements that include nested arrays. removes nested arrays creating a "flattened" array
* `head(arr)`: returns first element of an array
* `letterPositions(sentence)`: returns what position letters in a string are in.
* `map(array, callback)`: map function returns an array based on the reults of the callback function
* `middle(array)`: returns middle element of an array. middle two elements of even. empty array if two elements or less 
* `tail(arr)`: creates new array exluding first element in original array
* `takeUntil(array, callback)`: return elements in an array up to the point truthy condition is met.
* `without(source, itemsToRemove)`: whateven elements that are in first array but not ins econd will get pushed into new array.
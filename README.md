# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cmacdougall12/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: asserts equivalence between two arrays. (arr1, arr2)
* `assertObjectsEqual(obj1,obj2)`: asserts equivalence between two objects. (obj1, obj2)
* `assertEqual(x,y)`: asserts equivalence between two primitive object types. (ie. true, true)
* `countLetters(string)`: determines how many times each letter appears in a given string. Output is an object, with a key for each letter and a value that equals
* `countOnly(allItems, itemsToCount)`: function will take an array of allItems and return a object counting the number of times each key in the given itemToCount object appears. 
* `eqArrays(arr1,arr2)`: checks equivalence between two arrays. (arr1, arr2)
* `eqObjects(obj1, obj 2)`:checks equivalence between two objects. (obj1, obj2)
* `findKey(obj, callback)`: scan object and return the first key for which the callback returns true
* `findKeyByValue(obj, valueToFind)`: will return the first key that has the valueToFind contained in given object. 
* `flatten(array)`: will flatten a given array with nested array
* `head(arrau)`: will find the head of an array.
* `letterPositions(obj, valueToFind)`: 
* `map(array, callback)`: implementation of the built in map function
* `middle(array)`: function will retrieve middle elements of a given array. If length of array is even, output will be an 2 element array . If length of array is odd, output will be 1 element. 
* `tail(array)`: finds the tail of an array
* `takeUntil(array, callback)`: will output the given array until the callback function condition is evaluated to true. If the condition is never evaluted to true the given array will be the output.
* `without(array, removeElement)`: will output an array with all elements that equal the removeElement value.

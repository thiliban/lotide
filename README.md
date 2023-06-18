
Module 1: Week 4
2.857142857142857% Complete
3% Complete
Publishing Lotide To npm
Lotide Assignment
45 minutes
 Status
Incomplete
Wow... We've built a library of functions that we or other developers could actually use in other projects! This is great, but how will these other projects actually import our library?

Much like with Mocha, Chai, Chalk and other packages on npm, we can package up and publish our Lotide library to the public npm registry. In this activity, we'll be doing just that. Exciting!

Creating An NPM Account
In order to publish our package to npm, we first need an account on their website. More details on this can be found here.

Instruction
Create an NPM account.

Sign up link: https://www.npmjs.com/signup

Your username is important, and we suggest keeping it professional (though it doesn't have to be your name or initials, etc. either).

Instruction
Verify your email.

As they say:

You must verify your email address in order to publish packages to the registry.

Logging In To NPM From Vagrant
We can now log in using these credentials.

Instruction
Log into npm from the command line.

In our Vagrant machine, run the npm login command from any directory. Follow the prompts to login successfully.

Having A README.md File
Before we publish our package, there's some best practices housekeeping that we need to follow first.

We need a README.md file. The readme file explains to other developers what this library is for, how to install it, and how to use it.

Instruction
Create a README.md file within the root of your project (lotide) folder.

Instruction
Paste the following template into README.md.

README Template
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @thilibanb/lotide`

**Require it:**

`const _ = require('@thilibanb/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(x,y)`\
Description: This function asserts true or false depending on the equality of two arrays\
Parameters:
    - `x` (Array): Array one
    - `y` (Array): Array two\
Returns: Assertion passed or failed

* `assertEqual(actual, expected)`
Description: This function asserts true or false depending on the equality of two values
Parameters:
    - `actual` (Array): Original array
    - `expected` (Array): Check array
Returns: Assertion passed or failed

* `assertObjectsEqual(actual, expected)`
Decription: This functions asserts true or false depending on the equality of two objects
Parameters: 
    - `actual` (Object): Original object
    - `expected` (Object): Check object
Returns: Assertion passed or failed

* `countLetters(phrase)`
Description: This function returns the count of each letter in a string
Parameters:
    - `phrase` (String): phrase of letters to count
Returns: the count of letters in the phrase

* `countOnly(allItems, itemsToCount)`
Description: This function takes items and returns the count for certain parts of the item
Parameters: 
    - `allItems` (Array): array to be counted
    - `itemsToCount` (Object): items to count in the array
Returns: count of specified items

* `eqArrays(x,y))`
Description: This function compares two arrays
Parameters:
    - `x` (Array): Array One
    - `y` (Array): Array two
Returns: True or False

* `eqObjects(object1, object2)`
Description: This function compares two objects
Parameters:
    - `object1` (Object): Object one
    - `object2` (Object): Object two
Returns: True or False

* `findKey(object, callback)`
Description: This function scans an object and returns the first key 
Parameters:
    - `object` (Object): Original object
    - `callback` (function): Function to scan
Returns: the first key of the object after being scanned

* `findKeyByValue(x, y)`
Description: This function searches for a key and matches it between two objects
Parameters: 
    - `x` (Object): Original Object
    - `y` (String): Key to find in the object
Returns: keys that match

* `flatten(lst)`
Description: This function flattens multiple arrays into a single array
Parameters:
    - `lst` (Array): Original list of items
Returns: a single array

* `head(lst)`
Description: This function returns the first element from an array
Parameters: 
    - `lst` (Array): Original list
Returns: First element of an array

* `index`
Description: List of all the functions

* `letterPositions(sentence)`
Description: This function returns all occurences in the string where a letter is found
Parameters:
    - `sentence` (String); Original string of characters
Returns: Number of times a string has occured

* `map(array, callback)`
Description: This function creates a new array with results
Parameters: 
    - `array` (Array): Original array
    - `callback` (Function): Function with new results
Returns: new array with new results

* `middle(lst)`
Description: This function returns the middle element of an array
Parameters: 
    `lst` (Array): Original array
Returns: middle element of an array

* `tail(lst)`
Description: This function returns everything but the first element of an array
Parameters:
    - `lst` (Array): Original array
Returns: all elements, excluding the first element

* `takeUntil(array, callback)`
Description: This function returns a slice of an array with elements taken from the beginning
Parameters:
    `array` (Array): Original array
    `callback` (Function): function of what to remove from the array
Returns: slice of an array excluding items from the beginning

* `without(x,y)`
Description: This function removes elements from an array
Parameters:
    - `x` (Array): Original Array
    - `y` (String): item to remove from the original array
Returns: a new array with the desired items removed
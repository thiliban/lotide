/*
This function is used to determine whether the assertion is passed depending
on the equality of two items. If two items are equal, then this function will
return '✅✅✅ Assertion passed:', otherwise it'll return '🛑🛑🛑 Assertion Failed:'.
*/

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
  }
};

module.exports = assertEqual;
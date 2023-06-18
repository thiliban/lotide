/*
This function is used to determine whether the assertion is passed depending
on the equality of two arrays. If two arrays are equal, then this function will
return '✅✅✅ Assertion passed:', otherwise it'll return '🛑🛑🛑 Assertion Failed:'.
*/

const eqArrays = require('./eqArrays');
const assertArraysEqual = function(x,y) {
    if (eqArrays(x,y) === true){
        console.log(`✅✅✅ Assertion passed: ${x} === ${y}.`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${x} !== ${y}.`);
    }
};

module.exports = assertArraysEqual;


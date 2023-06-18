/*
This function is used to determine whether the assertion is passed depending
on the equality of two objects. If two objects are equal, then this function will
return '✅✅✅ Assertion passed:', otherwise it'll return '🛑🛑🛑 Assertion Failed:'.
*/
const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)){
        console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}.`)
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);

    }

};

module.exports = assertObjectsEqual;
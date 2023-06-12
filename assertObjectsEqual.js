const eqObjects = function (object1, object2) {
    nArr = Object.keys(object1);
    nArr2 = Object.keys(object2);
    if (nArr.length !== nArr2.length) {
      return false;
    } 
    else {
      for (let item in object1) {
        if ((Array.isArray(object1[item]) && Array.isArray(object2[item]))) { 
          if (eqArrays(object1[item], object2[item]) === true) {
            return true
          }
        } 
        else {
          if (object1[item] !== object2[item]) {
            return false;
          }
        }
      }
      return true;
    }
  };


const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)){
        console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}.`)
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}.`);

    }

};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject , anotherShirtObject)); 

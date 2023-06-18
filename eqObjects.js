/*
This function is used to determine whether two objects are equal, and will return
true if the objects are equal, and false if the objects are not equal
*/
const eqArrays = require('./eqArrays');
const eqObjects = function (object1, object2) {
  nArr = Object.keys(object1);
  nArr2 = Object.keys(object2);
  if (nArr.length !== nArr2.length) {
    return false;
  } else {
    for (let item in object1) {
      if ((Array.isArray(object1[item]) && Array.isArray(object2[item]))) { 
        if (eqArrays(object1[item], object2[item]) === true) {
          return true
        }
      } else {
        if (object1[item] !== object2[item]) {
          return false;
        }
      }
    }
    return true;
  }
};
/*
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
*/
  
module.exports = eqObjects;
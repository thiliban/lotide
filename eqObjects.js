/*const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
          console.log(results);
        } else {
          results[item] = 1;
        }
      }
    }
    return results;
  };
  */
  const eqArrays = function(x, y) {
    if(x === y) {
        return true;
    }
    for (let i = 0; i < x.length; i++) {
        if (x[i] === y[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}


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
  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true
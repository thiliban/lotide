/*
This function is used to determine whether two arrays are equal, and will return
true if the arrays are equal, and false if the arrays are not equal
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
};

module.exports = eqArrays;

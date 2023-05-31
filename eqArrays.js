const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
    }
  };
    
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
console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(assertEqual(eqArrays([1,2,3],[1,2,3]), true));
console.log(assertEqual(eqArrays([1,2,3],[3,2,1]), true));

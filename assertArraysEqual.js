const eqArrays = function(x, y) {
    for (let i = 0; i < x.length; i++) {
        if (x[i] === y[i]) {
            return true;
        }
        else {
            return false;
        }
    }
}
const aAE = function(x,y) {
    if (eqArrays(x,y) === true){
        console.log(`✅✅✅ Assertion passed: ${x} === ${y}.`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${x} !== ${y}.`);
    }
}

console.log(aAE([1, 2, 3], [1, 2, 3])) // => true
console.log(aAE([1, 2, 3], [3, 2, 1])) // => false

console.log(aAE(["1", "2", "3"], ["1", "2", "3"])) // => true


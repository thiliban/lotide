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

const without = function(x,y) {
    const nA = []
    for (let i = 0; i < x.length; i++) {
        if (!y.includes(x[i])){
            nA.push(x[i])
        }
        
    }
    return nA;
}
const words = ['hello', 'world', 'lighthouse'];
console.log(aAE(words, ['hello', 'world', 'lighthouse']));

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without(["1", "2", "3"], ["1", "2", 3])) // => false
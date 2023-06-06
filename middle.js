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
const assertArrayEqual = function(x,y) {
    if (eqArrays(x,y) === true){
        console.log(`✅✅✅ Assertion passed: ${x} === ${y}.`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${x} !== ${y}.`);
    }
}

const middle = function (lst) {
    emptLst = [];
    if(lst.length < 3) {
        return [];
    }
    else if (lst.length % 2 === 0) { 
        return [lst[Math.floor(lst.length / 2) - 1], lst[Math.floor(lst.length / 2)]];
    }
    else if (lst.length % 2 !== 0){
        return Math.round(lst.length/2);
    }
    
}
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5]))
console.log(middle([1])) 
console.log(middle([1, 2]))
console.log(middle([1,2,3,4]));
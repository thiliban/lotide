const aAE = function(x,y) {
    if (eqArrays(x,y) === true){
        console.log(`✅✅✅ Assertion passed: ${x} === ${y}.`);
    }
    else {
        console.log(`🛑🛑🛑 Assertion Failed: ${x} !== ${y}.`);
    }
}


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

const flatten = function(lst) {
    const newArr = [];
    for(let i = 0; i < lst.length; i++) {
        if(!Array.isArray(lst[i])) {
            newArr.push(lst[i]);
        }
        else{
            for(let x = 0; x < lst[i].length; x++) {
                newArr.push(lst[i][x]);
            }   
        }
        
    }
    return newArr;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
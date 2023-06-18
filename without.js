/*
This function returns a new array with desired items removed from the original array
with the items implemented in the parameter 'y'
*/
const without = function(x,y) {
    const nA = []
    for (let i = 0; i < x.length; i++) {
        if (!y.includes(x[i])){
            nA.push(x[i])
        }
        
    }
    return nA;
}

module.exports = without;
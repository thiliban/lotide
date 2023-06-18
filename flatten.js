/*
This function is used to accept mutliple arrays and return a compressed single
array containing the multiple arrays
*/
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

module.exports = flatten;
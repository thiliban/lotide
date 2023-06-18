/*
This function takes two parameters, 'array' and 'callback' and returns a new array with
the function implemented in 'callback'.
*/
const map = function(array, callback) {
    const results = [];
    for(let item of array) {
        results.push(callback(item));
    }
    return results;

}

module.exports = map;


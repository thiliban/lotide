/*
This function accepts a character of strings in the 'sentence' parameter, and returns
the index of each character in the string.
*/
const letterPositions = function(sentence) {
    const results = {};
    for (let item of sentence) {
        for(let letter of item) {
            if(item.indexOf(letter)) {
                results[item] += 1
            }
            else{
                results[item] = 1
            }
        }
    }
    
    return results;
};

module.exports = letterPositions;
/*
This function takes a string and returns the count of the number of elements
in that string.
*/
const countLetters = function(phrase) {
    const counter = {}
    for(let item of phrase) {
        let letters = phrase[item];
        if (counter[item]){
            counter[item] += 1;
        }
        else {
            counter[item] = 1;
        }
    }
    return counter;
};

module.exports = countLetters;
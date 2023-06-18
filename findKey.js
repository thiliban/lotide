/*
This function is used to accept an 'object', and return the key of the position
that has been entered by the user in 'callback'.
*/
const findKey = function(object, callback) {
    let nObj = Object.keys(object);
    for (let item of nObj) {
        if(callback(nObj[item])) {
            return key;
        }
    }
};
/*
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
*/

module.exports = findKey;
const findKey = function(object, callback) {
    let nObj = Object.keys(object);
    for (let item of nObj) {
        if(callback(nObj[item])) {
            return key;
        }
    }
};

console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) )
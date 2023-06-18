/*
This function is used to match the user input in 'y' to the original
array in 'x', and will return the matched item
*/
const findKeyByValue = function(x, y) {
  let nArr = Object.keys(x);
  for (let item of nArr) {
    if(x[item] === y) {
      return item
    }
  }
};
/*
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/
  
module.exports = findKeyByValue;
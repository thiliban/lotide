const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
    }
  };

  const findKeyByValue = function(x, y) {
    let nArr = Object.keys(x);
    for (let item of nArr) {
            if(x[item] === y) {
                return item
            }
    }
};
  
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
    }
};

const countOnly = function(allItems, itemsToCount) {
    const results = {};
    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
          console.log(results);
        } else {
          results[item] = 1;
        }
      }
    }
    return results;
  };
console.log(countOnly((
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ),("Karl")));
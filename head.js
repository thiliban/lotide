const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
    }
  };
const head = function(lst) {
    return lst[0];
};



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

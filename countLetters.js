const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}.`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}.`);
    }
  };

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

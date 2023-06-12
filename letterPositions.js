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

  console.log(letterPositions("hello there"));
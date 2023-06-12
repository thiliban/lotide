const joinList = function(lst) {
    let emptLst = [];
    for (let i = 0; i < lst.length; i++) {
      emptLst.push(lst[i]);
    }
    console.log(`Today i learned about ${emptLst.join(', ')}.`);
  }

 console.log(joinList(["gists", "types", "operators", "iteration", "problem solving"]));
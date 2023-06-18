/*
This function accepts an array, and returns the middle item/items of the array.
If the number of items in the array are even, then it will return the 2 middle items,
whereas if the number of items in the array are odd, it will return a single item.
*/
const middle = function (lst) {
    emptLst = [];
    if(lst.length < 3) {
        return [];
    }
    else if (lst.length % 2 === 0) { 
        return [lst[Math.floor(lst.length / 2) - 1], lst[Math.floor(lst.length / 2)]];
    }
    else if (lst.length % 2 !== 0){
        return Math.round(lst.length/2);
    }
    
};

module.exports = middle;
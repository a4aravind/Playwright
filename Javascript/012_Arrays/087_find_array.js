let nums = [10, 30, 20, 40, 50];
let result = nums.find(temp => temp >= 30); //Returns only the value of the first element where condition is true
console.log(result);
let index = nums.findIndex(n => n >= 30);
console.log(index);

let lastNum = nums.findLast(num => num >= 30);
let lastInd = nums.findLastIndex(ind => ind >= 30);

console.log(lastNum);
console.log(lastInd);

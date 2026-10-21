let [a,b,...rest] = [1,2,3,4,5];
console.log(a);
console.log(b);
console.log(rest);
console.log(typeof(a)); //number
console.log(typeof(rest)); //object

let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);

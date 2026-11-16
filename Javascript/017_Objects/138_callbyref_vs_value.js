// Primitive data types(number, string, boolean, null, undefined) - call by value

let a = 10;
let b = a;
b = 99;
console.log(a);
console.log(b);

console.log("-----")

// Objects — the reference value is copied, so both variables point to the same object.
// Reference - object, array, function
// Remember the toy story
let obj1 = { val: 10 };
let obj2 = obj1;
console.log(obj1.val);
obj2.val = 99;
console.log(obj1.val);
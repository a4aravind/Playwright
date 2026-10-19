let arr = [1,2,3];
console.log(arr);

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.unshift(-2,-1);
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(0,2);
console.log(arr);

arr.splice(3,0,99);
console.log(arr);

arr.splice(3,1,4);
console.log(arr);

arr.splice(1,2,10,20);
console.log(arr);

arr.splice(1,0,2,3);
console.log(arr);
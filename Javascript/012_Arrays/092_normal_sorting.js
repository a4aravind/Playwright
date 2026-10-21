let nums = [10,4,1,49];
nums.sort((a,b)=>a-b); //Normal sorting
console.log(nums); 

nums.sort((a,b)=>b-a); //Normal sorting in reverse order
console.log(nums); 


let fruits = ["apple","cherry","banana"];
fruits.sort((a,b)=>a.localeCompare(b));
console.log(fruits);

let original = [1,2,3,4];
let copy1 = [...original];
console.log(original);
console.log(copy1);

let copy2= original.slice(); //not a deep copy
copy2.push(11);
copy1.push(12);
console.log(copy2);
console.log(copy1);
console.log(original); //oringal wont change


let deepcopy = original; //deep copy, changes the original array as well
deepcopy.push(10);
console.log(deepcopy);
console.log(original); // oringnal also changed

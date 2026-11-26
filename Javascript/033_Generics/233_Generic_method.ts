function getName(name:string):string{
    return name;
}

getName("John Doe");

function getsSomeResult<T>(value:T[]):T{
    return value[0]!;
}

let firstVal = getsSomeResult([1,2,3,4,5]);
let secondVal = getsSomeResult(["a","b","c","d"]);
let thirdVal = getsSomeResult([true,false,true,false]);

console.log(firstVal);
console.log(secondVal);
console.log(thirdVal);  
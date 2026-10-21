let tests = ["login", "checkout", "search"];

for(let i = 0; i < tests.length; i++){
    console.log(i, tests[i]);
}

console.log("------------------------");

for(let x of tests){
    console.log(x);
}

console.log("------------------------");

for(let y in tests){  
    console.log(y, tests[y]);
}

console.log("------------------------");

tests.forEach((val, ind) => {
    console.log(`${val}: ${ind}`);
});

console.log("------------------------");

for(let[ind1, num1] of tests.entries()){
    console.log(ind1, num1);
}

console.log("------------------------");

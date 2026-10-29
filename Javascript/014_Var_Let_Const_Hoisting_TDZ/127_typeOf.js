console.log(typeof missingName); // will take it as a var
console.log(typeof missingAge); // will take it as let and go to TDZ hence 
let missingAge = 30;
console.log(typeof missingName);
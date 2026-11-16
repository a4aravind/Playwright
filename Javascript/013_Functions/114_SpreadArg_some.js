function sum(a, b, c) {
    return a + b + c;
}

let numbers = [10, 20, 30];
console.log(sum(...numbers));

function hasError(...code){
    return code.some(c => c >= 400);
}


let respCodes = [200,201,400, 404, 500];
console.log(hasError(...respCodes));

respCodes = [200,201];
console.log(hasError(...respCodes));


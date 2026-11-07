function calculate(num1, num2, operation){
    return operation(num1, num2);
}

let sum = calculate(6,7, function(a,b){
    return a + b;
});

console.log(sum);



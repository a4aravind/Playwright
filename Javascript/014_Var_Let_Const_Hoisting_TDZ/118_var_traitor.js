var a = 10;
console.log(`at the begining ${a}`);

function printHello(){
    console.log("Hello world");
    var a = 15;
    console.log(a)
    if(true){
        var a = 20;
        console.log(a);
    }
    console.log(a); // Took the latest value from inside if loop, not bothered about scope
}

console.log(`at the last ${a}`);  // prints 10
printHello();
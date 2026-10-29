let b = 20;  
console.log(`at the begining ${b}`);  

function printHello() {
    console.log("Hello world");
    let b = 30; 
    console.log(b); 
    if (true) {
        let b = 40;
        console.log(b);
    }
    console.log(b);
}

console.log(`at the last ${b}`);
printHello();
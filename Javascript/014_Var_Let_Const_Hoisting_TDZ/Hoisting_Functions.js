sayHello();  // works fine since it is hoisted
function sayHello(){ 
    console.log("Hello");
}


greet1(); // works fine, since here the 'var greet' is hoisted as undefined, and calling undefined() gives TypeError
var greet1 = function(){  
    console.log("Helloooo");
};


greet2(); //TDZ and will throw Reference error with let or const
let greet2 = function(){  
    console.log("Hellloooo");
};

greet3();
const greet3 =() => { //TDZ and will throw Reference error with let or const
    console.log("Helloooooooooooo")
};




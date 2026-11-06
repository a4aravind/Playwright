function processUserInput(name, callback) {
    callback(name);
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

processUserInput("Aravind", greet);

processUserInput("Playwright", function(name) {
    console.log(`Welcome, ${name}!`);
});

//Hello aravind

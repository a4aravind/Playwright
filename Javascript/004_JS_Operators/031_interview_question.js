let isCI = true;
let browserMode = isCI ? "headless" : "headed"; // Using ternary operator to check if isCI is true or false
console.log("Launching browser in " + browserMode + " mode"); // Output: Launching browser in headless mode, because isCI is true

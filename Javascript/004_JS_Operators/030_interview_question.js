let environment = "staging";
let baseUrl = environment === "production" ? "https://api.production.com" : "https://api.staging.com"; // Using ternary operator to set baseUrl based on environment
console.log(baseUrl); // Output: https://api.staging.com, because environment is set to "staging"
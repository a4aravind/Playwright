let statusCode = 404;
let category = 
                statusCode < 300 ? "Success":
                    statusCode < 400? "Redirect" :
                        statusCode < 500 ? "Client error" : "Server error";
                        
console.log(`Status ${statusCode} : ${category}`); // Output: Status 404 - Client error, because statusCode is 404 which is less than 500 but greater than 400
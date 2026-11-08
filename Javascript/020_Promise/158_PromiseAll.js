let checkAuth = Promise.resolve("Authentication OK");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache OK");

Promise.all([checkAuth, checkDB, checkCache]).then(function(results){
    console.log("All checks OK", results);
});

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("NOT OK"), 
    Promise.resolve("OK")
])

    .then(function(result){
        console.log(result);
    })
    .catch(function (err){
        console.log("Something failed", err);
    })
    .finally(function(){
        console.log("All checks over");
    });
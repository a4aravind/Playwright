function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened successfully");
    });
}

function LoadHomePage(){
    return new Promise(function(resolve){
        resolve("The site URL launched successfully");
    });
}

function EnterCredentials(){
    return new Promise(function(resolve){
        resolve("Credentials entered successfully");
    });
}

function Login(){
    return new Promise(function(resolve){
        resolve("Logged in successfully");
    });
}

openBrowser()
    .then(function (msg){
        console.log("Step 1 over", msg);
        return LoadHomePage();
    }).then(function (msg){
        console.log("Step2 over", msg);
        return EnterCredentials();
    }).then(function(msg){
        console.log("Step3 over", msg);
    }).then(function(msg){
        console.log("Step 4 over", msg);
    }).catch(function(err){
        console.log("Error messages shows  like", err);
    }).finally(function (){
        console.log("Done with the execution");
    });